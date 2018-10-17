import { JSONSchema7 } from 'json-schema';

export type JSONSchema = JSONSchema7 & { properties: JSONSchema7 };
