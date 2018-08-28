// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { ApolloClient } from 'apollo-client';
// import { DataProps } from 'react-apollo';

// import { schemaLink } from './mocks';

// declare global {
//   export interface QueryData<P> extends Partial<DataProps<P>> {}
// }

// export let client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: schemaLink,
//   connectToDevTools: true
// });

import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { LocalStorage } from './local_storage';

export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          // tslint:disable-next-line:no-console
          console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        );
      }

      if (networkError) {
        // tslint:disable-next-line:no-console
        console.log(`[Network error]: ${networkError}`);
      }
    }),
    setContext((_, { headers }) => {
      // get the authentication token from local storage if it exists
      const token = LocalStorage.token;
      // return the headers to the context so httpLink can read them
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : ''
        }
      };
    }),
    new HttpLink({
      uri: 'http://localhost:4000',
      credentials: 'same-origin'
    })
  ]),
  cache: new InMemoryCache()
});
