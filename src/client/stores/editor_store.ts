import { types } from 'mobx-state-tree';

export const EditorStore = types
  .model('EditorStore', {
    dirty: types.maybe(types.boolean)
  })
  .actions(self => ({
    setDirty(value: boolean) {
      self.dirty = value;
    }
  }));

export const editorStore = EditorStore.create({});
