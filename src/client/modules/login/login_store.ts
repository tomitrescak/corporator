import { types } from 'mobx-state-tree';
import { FormStore } from '../form/models/form_store';

export const LoginStore = FormStore.named('LoginStore')
  .props({
    view: types.optional(types.enumeration('Views', ['login', 'forgot']), 'login'),
    user: '',
    password: ''
  })
  .actions(self => ({
    setView(view: 'login' | 'forgot') {
      self.view = view;
    }
  }));
