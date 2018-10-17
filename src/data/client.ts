import * as QueryTypes from './generated/types';

export { default as gql } from 'graphql-tag';

export { QueryTypes };

export function purge<T>(params: T): T {
  for (let key of Object.getOwnPropertyNames(params)) {
    if (!(params as any)[key]) {
      delete (params as any)[key];
    }
    if ((params as any)[key] instanceof Object) {
      purge((params as any)[key]);
    }
  }
  return params;
}
