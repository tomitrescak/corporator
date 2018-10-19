import { JSONSchema7, JSONSchema7Array, JSONSchema7Type, JSONSchema7TypeName } from 'json-schema';

export type JSONSchemaType = JSONSchema7Type;

export interface JSONSchema extends JSONSchema7 {
  expression?: string;
  validationMessage?: string;
  properties?: {
    [key: string]: JSONSchema;
  };
  type: any;
}
