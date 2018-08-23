import { types } from 'mobx-state-tree';
import { LoginStore } from '../modules/login/login_store';

export const AppStore = types.model('AppStore', {
  login: types.optional(LoginStore, {})
});
