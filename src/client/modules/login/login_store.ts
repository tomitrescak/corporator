import { types } from 'mobx-state-tree';
import { FormStore } from '../form/models/form_store';
import { requiredValidator } from '../form/models/validation';

export const LoginStore = FormStore.named('LoginStore')
  .props({
    view: types.optional(types.enumeration('Views', ['login', 'forgot']), 'login'),
    user: '',
    password: '',
    error: ''
  })
  .volatile(_self => ({
    validators: {
      user: [requiredValidator],
      password: [requiredValidator]
    }
  }))
  .actions(self => ({
    setView(view: 'login' | 'forgot') {
      self.view = view;
    },
    setError(error: string) {
      self.error = error;
    }
  }));
