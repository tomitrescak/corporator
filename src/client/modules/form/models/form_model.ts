import { FormValidationDao, FormValidation } from './form_validation_model';

interface DataDescriptor {}

interface Data {
  id: string;
  descriptor: DataDescriptor;
}

export class FormControl {
  id: string;
  row: number;
  column: number;
  width: number;
}

export class FormModel {
  id: string;
  name: string;
  description: string;
  elements: FormControl[];
  validations: FormValidation[];

  constructor(form: Corpix.Collections.FormDao) {
    this.id = form.id;
    this.name = form.name;
    this.description = form.description;
    this.validations = form.validations;

    // add and sort elements
    this.elements = form.elements;
  }
}
