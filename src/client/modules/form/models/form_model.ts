import { FormValidation } from './form_validation_model';
import { types, ISimpleType } from 'mobx-state-tree';
import * as validations from './validation';
import { DataSet } from './dataset_model';

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

function mstTypeFactory(type: string): ISimpleType<any> {
  switch (type) {
    case 'string':
      return types.string;
    case 'int':
      return types.number;
    case 'float':
      return types.number;
  }
  return types.string;
}

export class FormModel {
  id: string;
  name: string;
  description: string;
  elements: Corpix.Collections.FormElementDao[];
  validations: FormValidation[];

  static buildMST(
    descriptors: Corpix.Collections.DataDescriptorDao[],
    dataArray: Array<{ name: string; value: any }>
  ): DataSet {
    // data initialisation
    const data: any = {};
    for (let element of dataArray) {
      data[element.name] = element.value;
      data[element.name + '_str'] = element.value ? element.value.toString() : '';
    }

    const descriptorMap: { [index: string]: Corpix.Collections.DataDescriptorDao } = {};
    for (let d of descriptors) {
      descriptorMap[d.name] = d;
    }

    // prepare model and views
    const mstDefinition: { [index: string]: any } = {};
    const viewDefinition = (self: any) => {
      const view = {
        isExpression(key: string) {
          return !!descriptorMap[key].expression;
        },
        getValue(key: string) {
          return self[key];
        },
        getStringValue(key: string) {
          // expressions are evaluated on the fly
          if (descriptorMap[key].expression) {
            // @ts-ignore
            return self[key];
          }
          return self[key + '_str'];
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
            return eval(desc.expression);
          });
        }
      }

      return view;
    };

    // add mst nodes for non expression fields
    // expressions do not need custom nodes and are handled by views
    for (let desc of descriptors) {
      // expressions do not need state tree entry they are evaluated automatically
      if (!desc.expression) {
        mstDefinition[desc.name] = desc.defaultValue
          ? desc.defaultValue
          : types.maybe(mstTypeFactory(desc.type));
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
        parseValue(key: string, value: any) {
          const descriptor = descriptorMap[key];
          switch (descriptor.type) {
            case 'int':
              self[key] = parseInt(value || 0) as any;
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

    return mst.create(data);
  }

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
