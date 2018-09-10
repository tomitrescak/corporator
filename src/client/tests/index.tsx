import * as React from 'react';

import * as QueryTypes from 'data/generated/types';

import { Provider } from 'mobx-react';
import { ApolloProvider } from 'react-apollo';
import { Message } from 'semantic-ui-react';
import { create, mock } from './data';

export { create as render, ReactTestRenderer, ReactTestInstance } from 'react-test-renderer';

export { create, mock } from './data';

export { QueryTypes };

/* =========================================================
    ERROR BOUNDARY
   ======================================================== */

type Props = {
  context?: App.Context;
  store?: App.Store;
};

class ErrorBoundary extends React.Component<
  {},
  { hasError: boolean; error: string; stack: string }
> {
  constructor(props: {}) {
    super(props);
    this.state = { hasError: false, error: '', stack: '' };
  }

  componentDidCatch(error: any, info: any) {
    const err = (error + info.componentStack).trim();

    // Display fallback UI
    this.setState({ hasError: true, error: error + '', stack: info.componentStack });
    // You can also log the error to an error reporting service
    // console.log(info.componentStack);

    // tslint:disable-next-line:no-console
    console.log(err);

    // tslint:disable-next-line:no-console
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Message error={true}>
          <Message.Header>Fatal Error ☠️</Message.Header>
          <Message.Content>
            <div style={{ marginTop: '6px', fontWeight: 'bold' }}>
              {JSON.stringify(this.state.error)}
            </div>
            <pre style={{ marginTop: '-18px' }}>{this.state.stack}</pre>
          </Message.Content>
        </Message>
      );
    }
    return this.props.children;
  }
}

export const MockedProvider: React.SFC<Props> = ({
  context = create.context(),
  store = create.store(),
  children
}) => {
  return (
    <Provider context={context} store={store}>
      <ApolloProvider client={mock.client}>
        <ErrorBoundary>{children}</ErrorBoundary>
      </ApolloProvider>
    </Provider>
  );
};
