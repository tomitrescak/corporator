import * as QueryTypes from './generated/types';

export { default as gql } from 'graphql-tag';

export { QueryTypes };

export function purge<T>(params: any): T {
  for (let key of Object.getOwnPropertyNames(params)) {
    if (!params[key]) {
      delete params[key];
    }
    if (params[key] instanceof Object) {
      purge(params[key]);
    }
  }
  return params;
}
