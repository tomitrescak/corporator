import { types } from 'mobx-state-tree';

export interface IFormStore {
  getError(item: string): string;
  setError(item: string, value: string): void;
  setItem(item: string, value: string): void;
  getItem(item: string): string;
}

export const FormStore = types
  .model({
    errors: types.map(types.string)
  })
  .actions(self => ({
    setError(item: string, value: string) {
      self.errors.set(item, value);
      if (value) {
        self.errors.set(item, value);
      } else {
        self.errors.delete(item);
      }
    },
    setItem(item: string, value: string): void {
      (self as any)[item] = value;
    }
  }))
  .views(self => ({
    getItem(item: string): string {
      return (self as any)[item];
    },
    getError(item: string): string {
      return self.errors.get(item);
    },
    get errorList() {
      return self.errors.values();
    },
    get hasError() {
      return self.errors.size > 0;
    }
  }));

// export const FormStore = types
//   .model({
//     errors: types.map(types.string)
//   })
//   .actions(self => ({
//     setItem(item: string, value: string): void {
//       (self as any)[item] = value;
//     },
//     getItem(item: string): string {
//       return (self as any)[item];
//     },
//     getError(item: string): string {
//       return self.errors.get(item);
//     }
//   }));
