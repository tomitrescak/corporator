import i18n from 'es2015-i18n-tag';
import { types } from 'mobx-state-tree';

import { Yoga } from 'data/yoga';
import { LoginStore } from '../modules/login/login_store';
import { UserStore } from '../modules/user/user_store';

declare global {
  namespace App { type Store = typeof AppStore.Type; }
}

export const AppStore = types
  .model('AppStore', {
    userId: types.optional(types.string, ''),
    user: types.optional(UserStore, {}),
    login: types.optional(LoginStore, () => LoginStore.create({}))
  })
  .volatile(self => ({
    i18n
  }))
  .actions(self => {
    return {
      setUser(user: Yoga.User) {
        self.userId = user.id;
        self.user = user;
      }
    };
  });
