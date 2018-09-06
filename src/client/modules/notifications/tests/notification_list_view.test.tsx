import * as React from 'react';

import { create as render } from 'react-test-renderer';

import { Yoga } from 'data/yoga';
import { createData, MockedProvider } from 'tests/client';
import { NotificationsListContainer } from '../notification_list_view';

export const notificationData = [
  createData.notification({ id: '1', createdAt: new Date(2010, 1, 2, 12, 50) }),
  createData.notification({ id: '2', createdAt: new Date(2010, 1, 2, 3, 50) }),
  createData.notification({ id: '3', createdAt: new Date(2007, 1, 2, 10, 50) }),
  createData.notification({ id: '4', createdAt: new Date(2010, 1, 2, 11, 50) }),
  createData.notification({ id: '5', createdAt: new Date(2011, 1, 2, 12, 50) })
];

describe('Notifications', () => {
  describe('Item View', () => {
    function componentWithData(notifications: Yoga.Notification[]) {
      return (
        <MockedProvider>
          <div>
            <NotificationsListContainer
              notifications={notifications}
              context={createData.context()}
            />
          </div>
        </MockedProvider>
      );
    }

    it('renders no notifications', () => {
      const root = render(componentWithData([]));
      expect(root).toMatchSnapshot();
    });

    it('renders some notifications', () => {
      const root = render(componentWithData(notificationData));
      expect(root).toMatchSnapshot();
    });

    return {
      component: componentWithData(notificationData)
    };
  });
});
