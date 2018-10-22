import { types } from 'mobx-state-tree';
import { Schema } from '../form/models/data_schema_model';
import { FormStore } from '../form/models/form_store';
import { RequiredValidator } from '../form/models/validation';

const schema = new Schema({
  type: 'object',
  properties: {
    user: {
      type: 'string',
      minLength: 3,
      maxLength: 20
    },
    password: {
      type: 'string'
      // minLength: 7
    }
  }
});

export const LoginStore = FormStore.named('LoginStore')
  .props({
    view: types.optional(types.enumeration('Views', ['login', 'forgot']), 'login'),
    user: '',
    password: '',
    error: ''
  })
  .volatile(_self => ({
    validators: {
      user: [RequiredValidator],
      password: [RequiredValidator]
    }
  }))
  .actions(self => ({
    getSchema(key: string = null): Schema {
      return key ? schema.properties[key] : schema;
    },
    setView(view: 'login' | 'forgot') {
      self.view = view;
    },
    setError(error: string) {
      self.error = error;
    }
  }));
