import { types } from 'mobx-state-tree';

export const UserStore = types.model('User').props({
  id: types.string,
  name: types.string,
  roles: types.array(types.string)
});
