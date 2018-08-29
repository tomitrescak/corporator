import * as React from 'react';

import GraphQLMock from 'graphql-mock';
import { makeExecutableSchema } from 'graphql-tools';
import { ApolloProvider } from 'react-apollo';

import { typeDefs } from 'data/type_defs';

export { create, ReactTestRenderer, ReactTestInstance } from 'react-test-renderer';

export { Yoga } from 'data/yoga';

export { createData } from './test_data';

const schema = makeExecutableSchema({
  typeDefs,
  resolverValidationOptions: {
    requireResolversForResolveType: false
  }
});

export const mock = new GraphQLMock(schema);

export const MockedProvider: React.SFC = ({ children }) => (
  <ApolloProvider client={mock.client}>{children}</ApolloProvider>
);
