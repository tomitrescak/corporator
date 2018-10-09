import { types } from 'mobx-state-tree';
import { FormStore } from '../form/models/form_store';
import { RequiredValidator } from '../form/models/validation';

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
    setView(view: 'login' | 'forgot') {
      self.view = view;
    },
    setError(error: string) {
      self.error = error;
    }
  }));
