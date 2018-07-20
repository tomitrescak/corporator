import * as shortid from 'shortid';
import * as validations from './validation';

import { ISimpleType, types } from 'mobx-state-tree';

import { IObservableArray } from 'mobx';
import { ListValue } from './form_model';
import { FormValidation } from './form_validation_model';

export interface DataSet {
  id?: string;
  addRow(key: string): void;
  removeRow(key: string, index: number): void;
  removeRowData<T>(key: string, data: T): void;
  getList(name: string): ListValue[];
  getValue(name: string): any;
  parseValue(name: string, value: any): void;
  getError(name: string): any;
  getStringValue(name: string): any;
  setStringValue(name: string, value: any): void;
  isExpression(key: string): boolean;
}

export type FormControlProps = {
  formControl: Corpix.Entities.FormControl;
  owner: DataSet;
};

function formItemSort(a: Corpix.Collections.FormElementDao, b: Corpix.Collections.FormElementDao) {
  return a.row < b.row
    ? -1
    : a.row > b.row
      ? 1
      : a.column < b.column
        ? -1
        : a.column > b.column
          ? 1
          : 0;
}

function mstTypeFactory(
  desc: Corpix.Entities.DataDescriptor,
  lists: Array<{ name: string; items: any[] }>
): ISimpleType<any> {
  switch (desc.type) {
    case 'string':
      return types.string;
    case 'int':
      return types.number;
    case 'float':
      return types.number;
    case 'boolean':
      return types.boolean;
    case 'object':
      return FormModel.buildMst(desc.descriptors, lists);
    // return For
    case undefined:
      return types.string;
  }
  throw new Error('MST Type not supported: ' + desc.type);
}

export interface ListValue {
  [index: string]: string;
  text: string;
  value: string;
}

// let time = Date.now();
// let i = 0;

export class FormModel {
  static buildMst(
    descriptors: Corpix.Entities.DataDescriptor[],
    lists?: Array<{ name: string; items: any[] }>
  ) {
    const descriptorMap: {
      [index: string]: Corpix.Entities.DataDescriptor;
    } = {};
    for (let d of descriptors) {
      descriptorMap[d.name] = d;
    }

    // prepare model and views
    const mstDefinition: { [index: string]: any } = {};
    const viewDefinition = (self: any) => {
      const view = {
        getDescriptor(key: string) {
          if (!descriptorMap[key]) {
            throw new Error('Descriptor does not exist: ' + key);
          }
          return descriptorMap[key];
        },
        isExpression(key: string) {
          return !!(key && this.getDescriptor(key).expression);
        },
        getValue(key: string) {
          if (self[key] == null) {
            return this.getDescriptor(key).defaultValue;
          }
          return self[key];
        },
        getList(key: string): ListValue[] {
          return self[key];
        },
        getStringValue(key: string) {
          // expressions are evaluated on the fly
          if (this.getDescriptor(key).expression) {
            // @ts-ignore
            return self[key];
          }
          return self[key + '_str'] || this.getDescriptor(key).defaultValue || '';
        },
        getError(key: string) {
          return self[key + '_error'];
        }
      };

      // add expressions views
      // expression are dynamic formulas evaluated from script

      for (let desc of descriptors) {
        // expressions do not need state tree entry they are evaluated automatically
        if (desc.expression) {
          (view as any).__defineGetter__(desc.name, function() {
            // tslint:disable-next-line:no-eval
            return eval(desc.expression);
          });
        }
      }

      if (lists) {
        for (let list of lists) {
          (view as any).__defineGetter__(list.name, function() {
            return list.items;
          });
        }
      }

      return view;
    };

    // add mst nodes for non expression fields
    // expressions do not need custom nodes and are handled by views
    for (let desc of descriptors) {
      // expressions do not need state tree entry they are evaluated automatically
      if (desc.isArray) {
        mstDefinition[desc.name] = types.array(mstTypeFactory(desc, lists));
      } else if (desc.type === 'id') {
        mstDefinition[desc.name] = types.optional(types.identifier(), () => shortid.generate());
      } else if (!desc.expression) {
        mstDefinition[desc.name] = desc.defaultValue
          ? desc.defaultValue
          : types.maybe(mstTypeFactory(desc, lists));
        mstDefinition[desc.name + '_str'] = types.maybe(types.string);
        mstDefinition[desc.name + '_error'] = types.maybe(types.string);
      }
    }

    // add generic method

    // build tree
    const mst = types
      .model('Store', mstDefinition)
      .views(viewDefinition)
      .actions(self => ({
        addRow(key: string) {
          self[key].push({});
        },
        removeRow(key: string, index: number) {
          self[key].splice(index);
        },
        removeRowData<T>(key: string, data: T) {
          (self[key] as IObservableArray<T>).remove(data);
        },
        parseValue(key: string, value: any) {
          const descriptor = descriptorMap[key];
          switch (descriptor.type) {
            case 'int':
              self[key] = parseInt(value || 0, 10) as any;
              break;
            case 'float':
              self[key] = parseFloat(value || 0) as any;
              break;
            case 'boolean':
              self[key] = (value === true || value === 'true' || value === 'True') as any;
              break;
            default:
              self[key] = value;
          }
        },
        setStringValue(key: string, value: any) {
          self[key + '_str'] = value;

          const descriptor = descriptorMap[key];
          let error = '';
          switch (descriptor.type) {
            case 'int':
              error = validations.intValidator(value);
              break;
            case 'float':
              error = validations.floatValidator(value);
              break;
          }

          if (!error) {
            self.parseValue(key, value);
          }
          self.setError(key, error);
        },
        setError(key: string, error: string) {
          self[key + '_error'] = error;
        }
      }));

    return mst;
  }

  static initStrings(data: any, dataArray: Array<{ name: string; value: any }>) {
    for (let item of dataArray) {
      data[item.name] = item.value;
      if (Array.isArray(item.value)) {
        data[item.name] = [];
        for (let m of item.value) {
          const n = {};
          data[item.name].push(n);
          FormModel.initStrings(n, m);
        }
      } else {
        data[item.name + '_str'] = item.value ? item.value.toString() : '';
      }
    }

    return data;
  }

  static buildMstModel(
    descriptors: Corpix.Entities.DataDescriptor[],
    dataArray: Array<{ name: string; value: any }>,
    lists?: Array<{ name: string; items: any[] }>
  ): DataSet {
    // data initialisation
    const data: any = {};
    FormModel.initStrings(data, dataArray);

    const mst = FormModel.buildMst(descriptors, lists);
    return mst.create(data);
  }

  id: string;
  name: string;
  description: string;
  elements: Corpix.Collections.FormElementDao[];
  validations: FormValidation[];

  constructor(form: Corpix.Collections.FormDao) {
    this.id = form.id;
    this.name = form.name;
    this.description = form.description;
    this.validations = form.validations;

    // add and sort elements
    this.elements = form.elements;
    this.elements.sort(formItemSort);
  }
}
