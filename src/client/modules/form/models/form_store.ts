import { IObservableArray, toJS } from 'mobx';
import { types } from 'mobx-state-tree';

import { QueryTypes } from 'data/client';
import { DataDescriptor, DataSet, FormModel } from './form_model';

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
      delete obj.validators;
      delete obj.strings;
      delete obj.descriptors;
      delete obj.arrays;
      delete obj.objects;
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

export function isRequired(descriptor: QueryTypes.DataDescriptor) {
  return (
    descriptor.validators &&
    descriptor.validators.length &&
    descriptor.validators.some(d => d.name === QueryTypes.ValidatorFunction.RequiredValidator)
  );
}

export interface ListValue {
  [index: string]: string;
  text: string;
  value: string;
}

export const FormStore = types
  .model({
    dirty: false,
    errors: types.map(types.string),
    strings: types.map(types.string)
  })
  .volatile(_self => ({
    arrays: [],
    objects: [],
    // tslint:disable-next-line:no-object-literal-type-assertion
    validators: {} as { [name: string]: IValidator[] },
    // tslint:disable-next-line:no-object-literal-type-assertion
    descriptors: {} as { [index: string]: DataDescriptor },
    getDescriptor(key: string) {
      if (!this.descriptors[key]) {
        throw new Error('Descriptor does not exist: ' + key);
      }
      return this.descriptors[key];
    },
    isExpression(key: string) {
      return !!(key && this.getDescriptor(key).expression);
    }
  }))
  .views(self => ({
    getValue(item: string): any {
      return (self as any)[item];
    },
    getStringValue(key: string): string {
      const descriptor = self.getDescriptor(key);
      // expressions are evaluated on the fly
      if (descriptor.expression) {
        // @ts-ignore
        return self[key];
      }

      if (descriptor.type === QueryTypes.DataType.Object) {
        return '<ERROR! Rendering Object as TEXT>';
      }

      return self.strings.get(key); // || this.getDescriptor(key).defaultValue || '';
    },
    getError(item: string): string {
      return self.errors.get(item);
    }
  }))
  .actions(function(self) {
    // let validators: values: { [name: string]: IValidator[] } = new Map<string, IValidator[]>();

    function setValue(key: string, value: any) {
      if ((self as any)[key] !== value) {
        (self as any)[key] = value;
        self.dirty = true;
      }
    }

    return {
      saved() {
        self.dirty = false;
      },
      toJS() {
        return strip(toJS(self));
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
        const original = (self as any).defaultValue[key + '_default'];
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
      parseValue(key: string, value: any) {
        const descriptor = self.descriptors[key];
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
      validateWithReport(): ValidationResult {
        let total = 0;
        let valid = 0;

        // validate self

        for (let key of Object.getOwnPropertyNames(self.validators)) {
          total += 1;
          if (this.validateField(key, (self as any)[key])) {
            valid += 1;
          }
        }

        // validate objects

        for (let key of self.objects) {
          let obj = self.getValue(key) as DataSet;
          let result = obj.validateWithReport();
          total += result.total;
          valid = result.valid;
        }

        // validate arrays

        for (let key of self.arrays) {
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
      validate() {
        return this.validateWithReport().invalid === 0;
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
