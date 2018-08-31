import * as Yoga from './generated/yoga_client';

import { DocumentNode } from 'graphql';

export type StaticQueryProps<T> = {
  query: DocumentNode;
  variables?: T;
};

export type StaticMutationProps<T> = {
  mutation: DocumentNode;
  variables?: T;
};

export { Yoga };
