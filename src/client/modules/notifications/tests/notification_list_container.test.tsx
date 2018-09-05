// dog.test.js
import * as QUERY from 'data/notifications/client/notifications_query.graphql';
import * as React from 'react';

import { create, mock, MockedProvider, Yoga } from 'tests/client';
import { NotificationsContainer } from '../notifications_view';

describe('Notifications', () => {
  storyOf(
    'Container',
    {
      componentWithData(notifications: Yoga.Notification[] = null) {
        if (!notifications) {
          mock.expect(QUERY).reply({
            notifications: [{ id: '1', name: 'one' }, { id: '2', name: 'two' }]
          });
        }

        return (
          <MockedProvider>
            <NotificationsContainer />
          </MockedProvider>
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
        mock.expect(QUERY).reply({
          // <- `query` from the code above
          notifications: [{ id: '1', name: 'one' }, { id: '2', name: 'two' }]
        });

        const container = create(data.componentWithData());

        expect(container).toMatchSnapshot();
      });
    }
  );
});
