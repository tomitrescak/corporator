import * as React from 'react';

import { Provider } from 'mobx-react';
import { ApolloProvider } from 'react-apollo';

import { createData, mock } from './test_data';

export { create, ReactTestRenderer, ReactTestInstance } from 'react-test-renderer';

export { Yoga } from 'data/yoga';

export { createData, mock } from './test_data';

type Props = {
  context?: App.Context;
  store?: App.Store;
};

export const MockedProvider: React.SFC<Props> = ({
  context = createData.context(),
  store = createData.store(),
  children
}) => {
  return (
    <Provider context={context} store={store}>
      <ApolloProvider client={mock.client}>{children}</ApolloProvider>
    </Provider>
  );
};
