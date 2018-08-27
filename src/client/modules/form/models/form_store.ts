import { types } from 'mobx-state-tree';

export type IValidator = (input: string) => string;

export type IFormStore = typeof FormStore.Type;

export const FormStore = types
  .model({
    errors: types.map(types.string)
  })
  .volatile(() => ({
    // tslint:disable-next-line:no-object-literal-type-assertion
    validators: {} as { [name: string]: IValidator[] }
  }))
  .actions(function(self) {
    // let validators: values: { [name: string]: IValidator[] } = new Map<string, IValidator[]>();

    return {
      validateField(name: string, value: string) {
        if (!self.validators[name]) {
          return true;
        }

        self.errors.set(name, '');

        for (let v of self.validators[name]) {
          let result = v(value);
          if (result) {
            self.errors.set(name, result);
            return false;
          }
        }

        return true;
      },
      validate() {
        let valid = true;
        for (let key of Object.getOwnPropertyNames(self.validators)) {
          valid = (self as IFormStore).validateField(key, (self as any)[key]) && valid;
        }
        return valid;
      },
      // setValitators(values: { [name: string]: IValidator[] }) {
      //   for (let key of Object.getOwnPropertyNames(values)) {
      //     self.validators[key] = values[key];
      //   }
      // },
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
        (self as IFormStore).validateField(item, value);
      }
    };
  })
  .views(self => ({
    getItem(item: string): string {
      return (self as any)[item];
    },
    getError(item: string): string {
      return self.errors.get(item);
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
