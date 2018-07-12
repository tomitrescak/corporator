import * as React from 'react';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { create as render } from 'react-test-renderer';

import { ProcessListContainer } from '../process_list_container';

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

describe('Notifications', () => {
  storyOf(
    'Container',
    {
      componentWithData() {
        return  <ApolloProvider client={client}><ProcessListContainer /></ApolloProvider>;
      }
    },
    data => {
      it('renders no notifications', () => {
        const root = render(data.componentWithData());
        expect(root).toMatchSnapshot();
      });
    }
  );
});
