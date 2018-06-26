import { FormValidation } from './form_validation_model';
import { types, ISimpleType } from 'mobx-state-tree';

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
    }

    // prepare model and views
    const mstDefinition: { [index: string]: string } = {};
    const viewDefinition: { [index: string]: Function } = {};

    for (let desc of descriptors) {
      if (desc.expression) {
        // @ts-ignore // we need this as we need self
        viewDefinition[desc.name] = function(self: any) {
          return eval(desc.expression);
        };
      } else {
        // view
        mstDefinition[desc.name] = desc.defaultValue
          ? desc.defaultValue
          : types.maybe(mstTypeFactory(desc.type));
      }
    }

    // build tree
    const mst = types
      .model('Store', mstDefinition)
      .views(() => viewDefinition)
      .actions(self => ({
        getValue(key: string) {
          return self[key];
        },
        setValue(key: string, value: any) {
          self[key] = value;
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
