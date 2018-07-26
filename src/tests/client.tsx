
import * as React from 'react';

import GraphQLMock from 'graphql-mock';
import { ApolloProvider } from 'react-apollo';

import { typeDefs } from 'data/type_defs';

export { create } from 'react-test-renderer';

export { Yoga } from 'data/yoga';

export { createData } from './test_data';

export const mock = new GraphQLMock(typeDefs);

export const MockedProvider: React.SFC = ({ children }) => <ApolloProvider client={mock.client}>{ children }</ApolloProvider>