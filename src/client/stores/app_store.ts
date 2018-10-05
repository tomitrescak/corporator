import i18n from 'es2015-i18n-tag';
import { types } from 'mobx-state-tree';

import { client } from 'client/config/apollo';
import { QueryTypes } from 'data/client';
import { LocalStorage } from '../config/local_storage';
import { LoginStore } from '../modules/login/login_store';
import { UserStore } from '../modules/user/user_store';

declare global {
  namespace App { type Store = typeof AppStore.Type; }
}

export const AppStore = types
  .model('AppStore', {
    userId: types.maybe(types.string),
    user: types.maybe(UserStore),
    login: types.optional(LoginStore, () => LoginStore.create({}))
  })
  .volatile(_self => ({
    i18n,
    client,
    localStorage: LocalStorage
  }))
  .actions(self => {
    return {
      setUser(user: QueryTypes.User) {
        self.login.password = '';
        self.userId = user.id;
        self.user = user as any;
        self.localStorage.userId = user.id;
      },
      logout() {
        self.userId = undefined;
        self.user = undefined;
        self.client().resetStore();
        self.localStorage.userId = null;
        self.localStorage.token = null;
      }
    };
  });

export const appStore = AppStore.create({ userId: LocalStorage.userId });
