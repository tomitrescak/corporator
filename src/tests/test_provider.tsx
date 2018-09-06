import * as React from 'react';

import { ApolloClient } from 'apollo-client';
import { Provider } from 'mobx-react';
import { ApolloProvider } from 'react-apollo';
import { createData } from './test_data';

type Props = {
  context?: App.Context;
  store?: App.Store;
  client?: ApolloClient<any>;
};

export const TestProvider: React.SFC<Props> = ({
  context = createData.context(),
  client = createData.client(),
  store = createData.store(),
  children
}) => (
  <ApolloProvider client={client}>
    <Provider context={context} store={store}>
      {children}
    </Provider>
  </ApolloProvider>
);
