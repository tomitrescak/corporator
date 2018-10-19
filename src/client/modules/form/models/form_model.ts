import { JSONSchema } from 'data/schema/schema';
import { Instance } from 'mobx-state-tree';
import { DataSet } from './dataset_model';
import { FormStore, IFormStore, ValidationResult } from './form_store';
import { buildStore } from './mst_builder';

export interface IFormElementOwner {
  elements: FormElement[];
}

export type FormControlProps = {
  formControl: FormElement;
  owner: IFormStore;
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

/* =========================================================
    Form Model
   ======================================================== */

export class FormModel {
  store: Instance<typeof FormStore>;
  name: string;
  description: string;
  elements: FormElement[];

  constructor(form: Form, schema: JSONSchema) {
    this.name = form.name;
    this.description = form.description;

    // sort elements by row and column
    this.elements.sort(formItemSort);

    // create dataset
    const dataset = new DataSet(schema);
    this.store = buildStore(dataset.root);
  }

  validateWithReport(root: IFormElementOwner = this, owner = this.store): ValidationResult {
    let total = 0;
    let valid = 0;

    // validate self

    for (let element of root.elements) {
      total += 1;

      let value = owner.validate(element.source);
      if (!value) {
        valid += 1;
      }

      if (element.control === 'Form') {
        // form can change owner
        let result = this.validateWithReport(
          element,
          element.source ? owner.getValue(element.source) : root
        );
        total += result.total;
        valid = result.valid;
      }

      if (element.control === 'Table' || element.control === 'Repeater') {
        let array: any[] = owner.getValue(element.source);

        // browse array and validate each element
        for (let item of array) {
          let result = this.validateWithReport(element, item);
          total += result.total;
          valid = result.valid;
        }
      }
    }

    // create report
    return {
      total,
      valid,
      invalid: total - valid
    };
  }
}
