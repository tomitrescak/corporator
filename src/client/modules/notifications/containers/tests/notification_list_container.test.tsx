// dog.test.js
import * as React from 'react';
import * as wait from 'waait';

import { importSchema } from 'graphql-import';
import GraphQLMock from 'graphql-mock';
import { ApolloProvider } from 'react-apollo';
import { create } from 'react-test-renderer';

// The component AND the query need to be exported
import { NotificationsContainer, QUERY } from '../notification_list_container';

//  const typeDefs = importSchema('./src/data/yoga/schema.graphql');

import * as fs from 'fs';

import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import ApolloClient from 'apollo-client';
​​import { createHttpLink } from 'apollo-link-http';​​
import { typeDefs } from 'data/generated';
// ​​import * as fetch from 'unfetch';​​
// ​​​​
// ​​const link = createHttpLink({ uri: 'http://localhost:4000', fetch: fetch });​​

// const cache = new InMemoryCache();
// const client = new ApolloClient({
//   cache,
//   link
// });

const client = new ApolloClient({ uri: 'http://localhost:4000'})

// const mocks = () => [
//   {
//     request: {
//       query: QUERY,
//       variables: {
//         from: 1,
//         to: 10
//       },
//     },
//     result: {
//       data: {
//         notifications: [{ id: '1', name: 'Buck', breed: 'bulldog' }],
//       },
//     },
//   },
// ];

const mocks = {
  Query: () => ({
    notifications: () => []
  })
};

const mock = new GraphQLMock(typeDefs);

describe('Notifications', () => {
  storyOf(
    'Container',
    {
      componentWithData() {
        return (
          <ApolloProvider client={client}>
            <NotificationsContainer />
          </ApolloProvider>
        );
      }
    },
    data => {
      // xit('renders loading', () => {
      //   const container = create(
      //     <MockedProvider mocks={mocks()} addTypename={false}>
      //       <NotificationsContainer />
      //     </MockedProvider>
      //   );

      //   expect(container).toMatchSnapshot();
      // });


      it('renders final', async () => {
        // console.log(typeDefs);
        const container = create(data.componentWithData());

        await wait(0);

        // mock.expect(QUERY).reply({
        //   items: [
        //     { id: '1', name: 'one' },
        //     { id: '2', name: 'two' }
        //   ]
        // });
    

        expect(container).toMatchSnapshot();
      });
    }
  );
});
