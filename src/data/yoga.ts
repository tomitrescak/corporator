import * as Yoga from './generated/yoga_client';

import { DocumentNode } from 'graphql';

export type StaticProps<T> = {
  query: DocumentNode;
  variables: T;
};

export { Yoga };
