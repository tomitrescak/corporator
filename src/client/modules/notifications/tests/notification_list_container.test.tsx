// dog.test.js
import * as QUERY from 'data/notifications/client/notifications_query.graphql';
import * as React from 'react';

import { create, createData, mock, MockedProvider, Yoga } from 'tests/client';
import { NotificationsContainer } from '../notifications_view';

export const notificationData = [
  createData.notification({ id: '1', createdAt: new Date(2010, 1, 2, 12, 50) }),
  createData.notification({ id: '2', createdAt: new Date(2010, 1, 2, 3, 50) }),
  createData.notification({ id: '3', createdAt: new Date(2007, 1, 2, 10, 50) }),
  createData.notification({ id: '4', createdAt: new Date(2010, 1, 2, 11, 50) }),
  createData.notification({ id: '5', createdAt: new Date(2011, 1, 2, 12, 50) })
];

describe('Notifications', () => {
  describe('Container', () => {
    function componentWithData(notifications: Yoga.Notification[] = null) {
      if (!notifications) {
        mock.expect(QUERY).reply({
          notifications: [{ id: '1', name: 'one' }, { id: '2', name: 'two' }]
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
      const container = create(componentWithData());

      expect(container).toMatchSnapshot();
      mock.reset();
    });

    it('renders final', async () => {
      mock.expect(QUERY).reply({
        notifications: notificationData
      });

      const container = create(componentWithData());
      expect(container).toMatchSnapshot();
    });
  });
});
