import * as React from 'react';

import { create as render } from 'react-test-renderer';

import { Yoga } from 'data/yoga';
import { createData } from 'shared/test_data';
import { NotificationsListView } from '../notification_list_view';

describe('Notifications', () => {
  storyOf(
    'Item View',
    {
      notifications: [
        createData.notification({ id: '1', createdAt: new Date(2010, 1, 2, 12, 50) }),
        createData.notification({ id: '2', createdAt: new Date(2010, 1, 2, 3, 50) }),
        createData.notification({ id: '3', createdAt: new Date(2007, 1, 2, 10, 50) }),
        createData.notification({ id: '4', createdAt: new Date(2010, 1, 2, 11, 50) }),
        createData.notification({ id: '5', createdAt: new Date(2011, 1, 2, 12, 50) })
      ],
      componentWithData(notifications: Yoga.Notification[]) {
        return <NotificationsListView notifications={notifications} />;
      }
    },
    data => {
      it('renders no notifications', () => {
        const root = render(data.componentWithData([]));
        expect(root).toMatchSnapshot();
      });

      it('renders some notifications', () => {
        const root = render(data.componentWithData(data.notifications));
        expect(root).toMatchSnapshot();
      });
    }
  );
});
