import { IObservableArray, toJS } from 'mobx';
import { types } from 'mobx-state-tree';

import { context } from 'client/config/context';
import { QueryTypes } from 'data/client';
import { DataSet } from './form_model';

export type IValidator = (input: string) => string;

export type IFormStore = typeof FormStore.Type;

export type ValidationResult = {
  valid: number;
  invalid: number;
  total: number;
};

function strip(obj: any) {
  if (typeof obj === 'object') {
    if (obj.errors) {
      delete obj.errors;
      delete obj.strings;
      delete obj.history;
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

function clone(obj: any) {
  if (obj === null || typeof obj !== 'object' || 'isActiveClone' in obj) {
    return obj;
  }

  // @ts-ignore
  let temp = obj instanceof Date ? new obj.constructor() : obj.constructor();

  for (let key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // tslint:disable-next-line:no-string-literal
      obj.isActiveClone = null;
      temp[key] = clone(obj[key]);
      delete obj.isActiveClone;
    }
  }
  return temp;
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
  .views(self => ({
    getValue(item: string): any {
      return (self as any)[item];
    },
    getStringValue(key: string): string {
      return self.strings.get(key); // || this.getDescriptor(key).defaultValue || '';
    },
    getError(item: string): string {
      return self.errors.get(item);
    }
  }))
  .actions(() => ({
    privateHelpers(): {
      validators: { [name: string]: IValidator[] };
      defaultValue: any;
      arrays: any;
      objects: any;
      descriptors: QueryTypes.DataDescriptor[];
    } {
      throw new Error('Not implemented');
    }
  }))
  .actions(function(self) {
    // const { defaultValue, validators, arrays, objects, descriptors } = self.privateHelpers();
    function setValue(key: string, value: any) {
      if ((self as any)[key] !== value) {
        (self as any)[key] = value;
        context.store.setDirty(true);
      }
    }

    return {
      getDefaultValue(key: string) {
        return self.privateHelpers().defaultValue[key];
      },
      isRequired(key: string) {
        let descriptor = self.privateHelpers().descriptors.find(d => d.name === key);
        return (
          descriptor.validators &&
          descriptor.validators.length &&
          descriptor.validators.some(d => d.name === QueryTypes.ValidatorFunction.RequiredValidator)
        );
      },
      validateField(name: string, value: string) {
        if (!self.privateHelpers().validators[name]) {
          return true;
        }

        self.errors.set(name, '');

        for (let v of self.privateHelpers().validators[name]) {
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
      validateWithReport(): ValidationResult {
        let total = 0;
        let valid = 0;

        // validate self

        for (let key of Object.getOwnPropertyNames(self.privateHelpers().validators)) {
          total += 1;
          if (this.validateField(key, (self as any)[key])) {
            valid += 1;
          }
        }

        // validate objects

        for (let key of self.privateHelpers().objects) {
          let obj = self.getValue(key) as DataSet;
          let result = obj.validateWithReport();
          total += result.total;
          valid = result.valid;
        }

        // validate arrays

        for (let key of self.privateHelpers().arrays) {
          let obj = (self as IFormStore).getValue(key) as DataSet[];

          for (let row of obj) {
            let result = row.validateWithReport();
            total += result.total;
            valid = result.valid;
          }
        }

        // create report
        return {
          total,
          valid,
          invalid: total - valid
        };
      },
      parseValue(key: string, value: any) {
        let descriptor = self.privateHelpers().descriptors.find(d => d.name === key);
        switch (descriptor.type) {
          case 'Int':
            setValue(key, parseInt(value || 0, 10));
            break;
          case 'Float':
            setValue(key, parseFloat(value || 0));
            break;
          case 'Boolean':
            setValue(key, value === true || value === 'true' || value === 'True');
            break;
          default:
            setValue(key, value);
        }
      },
      validate() {
        return this.validateWithReport().invalid === 0;
      },
      toJS() {
        return strip(toJS(self));
      },

      getList(key: string): ListValue[] {
        return (self as any)[key];
      },

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
        const original = this.getDefaultValue(key + '_default');
        const data = clone(original);

        ((self as any)[key] as any[]).push(data);

        this.validateField(key, self.getValue(key));
      },
      removeRow(key: string, index: number) {
        ((self as any)[key] as any[]).splice(index);
      },
      removeRowData<T>(key: string, data: T) {
        ((self as any)[key] as IObservableArray<T>).remove(data);
      },
      setStringValue(key: string, value: any, validate = true) {
        self.strings.set(key, value);

        if (validate) {
          let isOK = this.validateField(key, value);

          if (isOK) {
            this.parseValue(key, value);
          }
        }
        // self.setError(key, error);
      }
    };
  });

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
