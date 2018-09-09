import * as React from 'react';

import { createData, MockedProvider, QueryTypes, render, Yoga } from 'tests/client';
import { NotificationView } from '../notification_item_view';
import { createNotification } from './notifications_query_data';

describe('Notifications', () => {
  storyOf(
    'Item View',
    {
      componentWithData(notification: QueryTypes.NotificationsNotifications) {
        return (
          <MockedProvider>
            <NotificationView notification={notification} context={createData.context()} />
          </MockedProvider>
        );
      }
    },
    data => {
      it('renders default view', () => {
        const root = render(data.componentWithData(createNotification({ code: 'ProcessStarted' })));
        expect(root).toMatchSnapshot();
      });
    }
  );
});
