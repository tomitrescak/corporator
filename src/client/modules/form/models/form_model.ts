import { FormValidation } from './form_validation_model';
import { types, ISimpleType } from 'mobx-state-tree';
import * as validations from './validation';

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
  ) {
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
    const viewDefinition: { [index: string]: Function } = {};

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
    viewDefinition.isExpression = function(key: string) {
      return !!descriptorMap[key].expression;
    };
    viewDefinition.getValue = function(key: string) {
      return this[key];
    };
    viewDefinition.getStringValue = function(key: string) {
      // expressions are evaluated on the fly
      if (descriptorMap[key].expression) {
        // @ts-ignore
        return eval(descriptorMap[key].expression);
      }
      return this[key + '_str'];
    };
    viewDefinition.getError = function(key: string) {
      return this[key + '_error'];
    };

    // build tree
    const mst = types
      .model('Store', mstDefinition)
      .views(() => viewDefinition)
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
