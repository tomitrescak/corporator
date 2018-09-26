// import * as shortid from 'shortid';
import * as validations from './validation';

import { IObservableArray } from 'mobx';
import { ISimpleType, types } from 'mobx-state-tree';

import { QueryTypes } from 'data/client';
import { DataDescriptor, Form, FormElement, ListValue } from './form_model';
import { FormValidation } from './form_validation_model';
import { random } from './random';

export type FormElement = QueryTypes.FormElement & { elements: FormElement[] };
export type DataDescriptor = QueryTypes.DataDescriptor; // & { descriptors: DataDescriptor[] };
export type Form = QueryTypes.Form; // & { elements: FormElement[] };

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
  formControl: FormElement;
  owner: DataSet;
};

function formItemSort(a: FormElement, b: FormElement) {
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
  desc: DataDescriptor,
  lists: Array<{ name: string; items: any[] }>,
  all: DataDescriptor[]
): ISimpleType<any> {
  switch (desc.type) {
    case 'String':
      return types.string;
    case 'Int':
      return types.number;
    case 'Float':
      return types.number;
    case 'Boolean':
      return types.boolean;
    case 'Object':
      const children = all.filter(d => d.parentDescriptor === desc.id);
      return FormModel.buildMst(children, lists);
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

let time = Date.now();
let i = 0;

export class FormModel {
  static parseDefault(descriptor: DataDescriptor) {
    switch (descriptor.type) {
      case 'Int':
        return parseInt(descriptor.defaultValue || '0', 10) as any;
      case 'Float':
        return parseFloat(descriptor.defaultValue || '0') as any;
      case 'Boolean':
        return (descriptor.defaultValue === 'true' || descriptor.defaultValue === 'True') as any;
      case 'Date':
        return new Date(descriptor.defaultValue);
    }
    return descriptor.defaultValue;
  }

  static buildMst(descriptors: DataDescriptor[], lists?: Array<{ name: string; items: any[] }>) {
    const descriptorMap: {
      [index: string]: DataDescriptor;
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
        mstDefinition[desc.name] = types.array(mstTypeFactory(desc, lists, descriptors));
      } else if (desc.type === 'Id') {
        mstDefinition[desc.name] = types.optional(types.identifier, () => (time + i++).toString()); // shortid.generate());
      } else if (!desc.expression) {
        mstDefinition[desc.name] = desc.defaultValue
          ? FormModel.parseDefault(desc)
          : types.maybe(mstTypeFactory(desc, lists, descriptors));
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
          (self[key] as any[]).push({});
        },
        removeRow(key: string, index: number) {
          (self[key] as any[]).splice(index);
        },
        removeRowData<T>(key: string, data: T) {
          (self[key] as IObservableArray<T>).remove(data);
        },
        parseValue(key: string, value: any) {
          const descriptor = descriptorMap[key];
          switch (descriptor.type) {
            case 'Int':
              self[key] = parseInt(value || 0, 10) as any;
              break;
            case 'Float':
              self[key] = parseFloat(value || 0) as any;
              break;
            case 'Boolean':
              self[key] = (value === true || value === 'true' || value === 'True') as any;
              break;
            default:
              self[key] = value;
          }
        },
        setError(key: string, error: string) {
          (self as any)[key + '_error'] = error;
        }
      }))
      .actions(self => ({
        setStringValue(key: string, value: any) {
          self[key + '_str'] = value;

          const descriptor = descriptorMap[key];
          let error = '';
          switch (descriptor.type) {
            case 'Int':
              error = validations.intValidator(value);
              break;
            case 'Float':
              error = validations.floatValidator(value);
              break;
          }

          if (!error) {
            self.parseValue(key, value);
          }
          self.setError(key, error);
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

  static randomValue(descriptor: DataDescriptor) {
    switch (descriptor.type) {
      case QueryTypes.DataType.String:
        return random.words(2);
      case QueryTypes.DataType.Boolean:
        return random.boolean();
      case QueryTypes.DataType.Id:
        return '1';
      case QueryTypes.DataType.Int:
        return random.int();
      case QueryTypes.DataType.Float:
        return random.float();
    }
    return undefined;
  }

  static buildMstModel(
    descriptors: DataDescriptor[],
    dataArray: Array<{ name: string; value: any }>,
    lists?: Array<{ name: string; items: any[] }>,
    initRandomValues = false
  ): DataSet {
    // data initialisation
    const data: any = {};
    if (initRandomValues) {
      for (let descriptor of descriptors) {
        dataArray.push({ name: descriptor.name, value: FormModel.randomValue(descriptor) });
      }
    }

    FormModel.initStrings(data, dataArray);

    const mst = FormModel.buildMst(descriptors, lists);
    return mst.create(data);
  }

  id: string;
  name: string;
  description: string;
  elements: FormElement[];
  validations: FormValidation[];

  constructor(form: Form) {
    this.id = form.id;
    this.name = form.name;
    this.description = form.description;
    this.validations = form.validations;

    // initialise elements
    this.elements = [];
    for (let p of form.elements) {
      if (!p.parentElement) {
        this.elements.push(p as FormElement);
        continue;
      }
      let parent = form.elements.find(f => f.id === p.parentElement) as FormElement;
      if (!parent) {
        throw new Error('Invalid data. Parent does not exist: ' + p.parentElement);
      }
      if (!parent.elements) {
        parent.elements = [];
      }
      parent.elements.push(p as FormElement);
    }

    this.elements.sort(formItemSort);
  }
}
