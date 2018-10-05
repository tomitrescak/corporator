import { IObservableArray, toJS } from 'mobx';
import { types } from 'mobx-state-tree';

import { DataDescriptor } from './form_model';

export type IValidator = (input: string) => string;

export type IFormStore = typeof FormStore.Type;

function strip(obj: any) {
  if (typeof obj === 'object') {
    if (obj.errors) {
      delete obj.errors;
      delete obj.validators;
      delete obj.strings;
      delete obj.descriptors;
    }

    for (let key of Object.getOwnPropertyNames(obj)) {
      let item = obj[key];
      strip(item);
    }
  }

  if (Array.isArray(obj)) {
    for (let item of obj) {
      strip(item);
    }
  }
  return obj;
}

export interface ListValue {
  [index: string]: string;
  text: string;
  value: string;
}

export const FormStore = types
  .model({
    errors: types.map(types.string),
    strings: types.map(types.string)
  })
  .volatile(() => ({
    // tslint:disable-next-line:no-object-literal-type-assertion
    validators: {} as { [name: string]: IValidator[] },
    // tslint:disable-next-line:no-object-literal-type-assertion
    descriptors: {} as { [index: string]: DataDescriptor }
  }))
  .actions(function(self) {
    // let validators: values: { [name: string]: IValidator[] } = new Map<string, IValidator[]>();

    return {
      toJS() {
        return strip(toJS(self));
      },
      getDescriptor(key: string) {
        if (!self.descriptors[key]) {
          throw new Error('Descriptor does not exist: ' + key);
        }
        return self.descriptors[key];
      },
      isExpression(key: string) {
        return !!(key && this.getDescriptor(key).expression);
      },
      getList(key: string): ListValue[] {
        return (self as any)[key];
      },
      validateField(name: string, value: string) {
        if (!self.validators[name]) {
          return true;
        }

        self.errors.set(name, '');

        for (let v of self.validators[name]) {
          if (v) {
            let result = v(value);
            if (result) {
              self.errors.set(name, result);
              return false;
            }
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
      // setValidators(values: { [name: string]: IValidator[] }) {
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
      },
      addRow(key: string) {
        ((self as any)[key] as any[]).push({});
      },
      removeRow(key: string, index: number) {
        ((self as any)[key] as any[]).splice(index);
      },
      removeRowData<T>(key: string, data: T) {
        ((self as any)[key] as IObservableArray<T>).remove(data);
      },
      parseValue(key: string, value: any) {
        const descriptor = self.descriptors[key];
        switch (descriptor.type) {
          case 'Int':
            (self as any)[key] = parseInt(value || 0, 10) as any;
            break;
          case 'Float':
            (self as any)[key] = parseFloat(value || 0) as any;
            break;
          case 'Boolean':
            (self as any)[key] = (value === true || value === 'true' || value === 'True') as any;
            break;
          default:
            (self as any)[key] = value;
        }
      }
    };
  })
  .actions(self => ({
    setStringValue(key: string, value: any) {
      self.strings.set(key, value);

      let isOK = self.validateField(key, value);

      if (isOK) {
        self.parseValue(key, value);
      }
      // self.setError(key, error);
    }
  }))
  .views(self => ({
    getValue(item: string): any {
      return (self as any)[item];
    },
    getStringValue(key: string): string {
      // expressions are evaluated on the fly
      if (self.getDescriptor(key).expression) {
        // @ts-ignore
        return self[key];
      }

      // init
      if (!self.strings.has(key)) {
        self.setStringValue(key, (self as any)[key] == null ? '' : (self as any)[key].toString());
      }
      return self.strings.get(key); // || this.getDescriptor(key).defaultValue || '';
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
