import * as validations from './validation';

import { JSONSchema, JSONSchemaType } from 'data/schema/schema';
import i18n from 'es2015-i18n-tag';
import { plural, random, safeEval } from './form_utils';

export class DataSetNode {
  // store: typeof FormStore.Type;
  parent: DataSetNode;

  properties: { [index: string]: DataSetNode };
  items: DataSetNode;
  type: JSONSchemaType;
  minimum: number;
  maximum: number;
  exclusiveMinimum: number;
  exclusiveMaximum: number;
  minLength: number;
  maxLength: number;
  minItems: number;
  maxItems: number;
  uniqueItems: boolean;
  pattern: RegExp;
  default: any;
  required: boolean;
  expression: string;
  validationMessage: string;

  constructor(schema: JSONSchema, parent: DataSetNode, required: boolean = false) {
    this.parent = parent;

    this.init(schema, [
      'type',
      'required',
      'default',
      'minimum',
      'maximum',
      'exclusiveMaximum',
      'exclusiveMinimum',
      'minLength',
      'maxLength',
      'uniqueItems',
      'minItems',
      'maxItems',
      'expression',
      'validationMessage'
    ]);

    if (required) {
      this.required = required;
    }

    if (schema.pattern != null) {
      this.pattern = schema.pattern ? new RegExp(schema.pattern) : null;
    }

    if (schema.type === 'object') {
      this.properties = {};
      for (let key of Object.getOwnPropertyNames(schema.properties)) {
        this.properties[key] = new DataSetNode(
          schema.properties[key] as JSONSchema,
          this,
          schema.required && schema.required.includes(key)
        );
      }
    }

    if (schema.type === 'array') {
      this.items = new DataSetNode(schema.items as JSONSchema, this);
    }
  }

  // randomValue() {
  //   switch (this.type) {
  //     case 'string':
  //       return random.words(2);
  //     case 'boolean':
  //       return random.boolean();
  //     case 'id':
  //       return '1';
  //     case 'integer':
  //       return random.int();
  //     case 'number':
  //       return random.float();
  //   }
  //   return undefined;
  // }

  init<T>(schema: T, keys: Array<keyof DataSetNode>) {
    for (let key of keys) {
      if ((schema as any)[key] != null) {
        this[key] = (schema as any)[key];
      }
    }
  }

  defaultValue(): any {
    const value: { [index: string]: any } = {};

    if (this.type === 'array') {
      let result = [];
      for (let i = 0; i < this.minItems || 0; i++) {
        result.push(this.items.defaultValue());
      }
      return result;
    }

    for (let key of Object.getOwnPropertyNames(this.properties)) {
      let obj = this.properties[key];
      if (obj.type === 'object' || obj.type === 'array') {
        value[key] = this.properties[key].defaultValue();
      } else if (obj.type !== 'expression') {
        value[key] = this.properties[key].default;
      }
    }

    return value;
  }

  parse(value: any) {
    switch (this.type) {
      case 'date':
        return new Date(value);
      case 'integer':
        return parseInt(value || 0, 10);
      case 'number':
        return parseFloat(value || 0);
      case 'boolean':
        return value === true || value === 'true' || value === 'True';
      default:
        return value;
    }
  }

  /* =========================================================
      Validations
     ======================================================== */

  validate(value: any, data: any = null): string {
    // expression
    let parsed = this.parse(value);
    if (this.expression && !safeEval(data, this.expression, parsed)) {
      return this.validationMessage || 'Unexpected value';
    }

    if ((this.required && value == null) || value === '') {
      return i18n`Value is required`;
    }

    // types
    if (this.type === 'integer') {
      return this.isValid(validations.IntValidator(value) || this.numberValidations(value));
    }
    if (this.type === 'number') {
      return this.isValid(validations.FloatValidator(value) || this.numberValidations(value));
    }
    if (this.type === 'string') {
      return this.isValid(this.stringValidations(value));
    }
    if (this.type === 'array') {
      return this.isValid(this.arrayValidations(value));
    }
  }

  private numberValidations(value: string) {
    let num = this.parse(value);
    if (this.minimum != null && num < this.minimum) {
      return i18n`Value has to be higher or equal than ${this.minimum.toString()}`;
    }
    if (this.maximum != null && num > this.maximum) {
      return i18n`Value has to be lower or equal than ${this.maximum.toString()}`;
    }
    if (this.exclusiveMinimum != null && num <= this.exclusiveMinimum) {
      return i18n`Value has to be higher than ${this.exclusiveMinimum.toString()}`;
    }
    if (this.exclusiveMaximum != null && num >= this.exclusiveMaximum) {
      return i18n`Value has to be lower than ${this.exclusiveMaximum.toString()}`;
    }
  }

  private arrayValidations(value: any[]) {
    if (this.minItems != null && value.length < this.minItems) {
      return i18n`Collection has to contain at least ${this.minItems.toString()} ${plural(
        'item',
        this.minItems
      )}`;
    }
    if (this.maxItems != null && value.length > this.maxItems) {
      return i18n`Collection has to contain maximum ${this.maxItems.toString()} ${plural(
        'item',
        this.maxItems
      )}`;
    }
    if (this.uniqueItems && value.length > 1) {
      const invalid: number[] = [];
      const array = value.map(v => v.toJS());
      const keys = Object.getOwnPropertyNames(array[0]);

      for (let i = 0; i < array.length; i++) {
        if (array.some(v => v !== array[i] && keys.every(key => v[key] === value[i][key]))) {
          invalid.push(i + 1);
        }
      }

      if (invalid.length) {
        return (
          this.validationMessage ||
          `Collection needs to contain unique items. Items [${invalid.join(', ')}] are repetitive`
        );
      }
    }
  }

  private stringValidations(value: string) {
    if (this.pattern && !this.pattern.test(value)) {
      return 'Incorrect format';
    }

    if (this.minLength != null && value && value.length < this.minLength) {
      return `Too short. Has to contain at least ${this.minLength} ${plural(
        'character',
        this.minLength
      )}`;
    }

    if (this.minLength != null && value && value.length > this.maxLength) {
      return `Too long. Has to contain maximum ${this.maxLength} ${plural(
        'character',
        this.maxLength
      )}`;
    }
  }

  private isValid(result: string) {
    return result ? this.validationMessage || result : undefined;
  }
}

export class DataSet {
  schema: JSONSchema;
  root: DataSetNode;

  constructor(schema: JSONSchema) {
    this.schema = schema;
    this.root = new DataSetNode(schema, null);
  }
}
