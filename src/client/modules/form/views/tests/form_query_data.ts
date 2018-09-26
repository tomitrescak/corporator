import { QueryTypes } from 'data/client';
import { DataDescriptor, Form, FormElement } from '../../models/form_model';

export const defaultForm: Form = {
  id: 'form',
  name: 'Form',
  description: 'Test Form',
  elements: [],
  validations: []
};

export const defaultFormElement: FormElement = {
  id: 'form',
  column: 0,
  control: null,
  controlProps: null,
  defaultValue: null,
  filterColumn: null,
  filterSource: null,
  inline: false,
  label: null,
  list: null,
  row: 0,
  source: null,
  vertical: null,
  width: null,
  parentElement: null,
  elements: null
};

const defaultDescriptor: DataDescriptor = {
  id: '1',
  name: null,
  description: 'Description',
  expression: null,
  type: QueryTypes.DataType.String,
  isArray: false,
  defaultValue: null,
  validators: null,
  parentDescriptor: null
};

export const create = {
  form(form: Partial<Form> = {}): Form {
    return { ...defaultForm, ...form };
  },
  formElement(form: Partial<FormElement> = {}): FormElement {
    return { ...defaultFormElement, ...form };
  },
  descriptor(data: Partial<DataDescriptor> = {}): DataDescriptor {
    return { ...defaultDescriptor, ...data };
  }
};
