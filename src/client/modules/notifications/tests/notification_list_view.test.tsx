import * as React from 'react';

import { create as render } from 'react-test-renderer';

import { create, MockedProvider, QueryTypes } from 'client/tests';
import { NotificationsListContainer } from '../notification_list_view';
import { createNotification } from './notifications_test_data';

export const notificationData = [
  createNotification({ id: '1', createdAt: new Date(2010, 1, 2, 12, 50) }),
  createNotification({ id: '2', createdAt: new Date(2010, 1, 2, 3, 50) }),
  createNotification({ id: '3', createdAt: new Date(2007, 1, 2, 10, 50) }),
  createNotification({ id: '4', createdAt: new Date(2010, 1, 2, 11, 50) }),
  createNotification({ id: '5', createdAt: new Date(2011, 1, 2, 12, 50) })
];

describe('Notifications', () => {
  describe('List', () => {
    function componentWithData(notifications: QueryTypes.Notifications[]) {
      return (
        <MockedProvider>
          <div>
            <NotificationsListContainer notifications={notifications} context={create.context()} />
          </div>
        </MockedProvider>
      );
    }

    describe('Empty', () => {
      it('renders no notifications', () => {
        const root = render(componentWithData([]));
        expect(root).toMatchSnapshot();
      });

      return {
        componentWithData
      };
    });

    describe('Data', () => {
      it('renders some notifications', () => {
        const root = render(componentWithData(notificationData));
        expect(root).toMatchSnapshot();
      });

      return {
        component: componentWithData(notificationData)
      };
    });
  });
});
