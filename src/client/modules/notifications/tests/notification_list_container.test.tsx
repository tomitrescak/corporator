// dog.test.js
import * as React from 'react';
import * as QUERY from '../queries/notifications_query.graphql';

import { mock, MockedProvider, QueryTypes, render } from 'client/tests';
import { NotificationsContainer } from '../notifications_view';
import { createNotification } from './notifications_test_data';

export const notificationData = [
  createNotification({ id: '1', createdAt: new Date(2010, 1, 2, 12, 50) }),
  createNotification({ id: '2', createdAt: new Date(2010, 1, 2, 3, 50) }),
  createNotification({ id: '3', createdAt: new Date(2007, 1, 2, 10, 50) }),
  createNotification({ id: '4', createdAt: new Date(2010, 1, 2, 11, 50) }),
  createNotification({ id: '5', createdAt: new Date(2011, 1, 2, 12, 50) })
];

describe('Notifications', () => {
  describe('Container', () => {
    function componentWithData(notifications: QueryTypes.Notifications[] = null) {
      if (!notifications) {
        mock.expect(QUERY).reply({
          notificationsQuery: [{ id: '1', name: 'one' }, { id: '2', name: 'two' }]
        });
      }

      return (
        <MockedProvider>
          <div>
            <NotificationsContainer />
          </div>
        </MockedProvider>
      );
    }

    it('renders loading', () => {
      mock.expect(QUERY).loading();
      const container = render(componentWithData());

      expect(container).toMatchSnapshot();
      mock.reset();
    });

    it('renders final', async () => {
      mock.expect(QUERY).reply({
        notificationsQuery: notificationData
      });

      const container = render(componentWithData());
      expect(container).toMatchSnapshot();
    });
  });
});
