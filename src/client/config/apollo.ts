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

import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
// import { HttpLink } from 'apollo-link-http';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { LocalStorage } from './local_storage';

let apolloClient: ApolloClient<NormalizedCacheObject> = null;

export const client = () => {
  if (!apolloClient) {
    apolloClient = new ApolloClient({
      connectToDevTools: true,
      link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
          if (graphQLErrors) {
            graphQLErrors.map(({ message, locations, path }) =>
              // tslint:disable-next-line:no-console
              console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
              )
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
        new BatchHttpLink({
          uri: 'http://localhost:3000/graphql',
          credentials: 'same-origin'
        })
        // new HttpLink({
        //   uri: 'http://localhost:4000',
        //   credentials: 'same-origin'
        // })
      ]),
      cache: new InMemoryCache()
    });
  }
  return apolloClient;
};
