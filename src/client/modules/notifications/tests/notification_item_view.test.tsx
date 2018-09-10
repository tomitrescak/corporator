import * as React from 'react';

import { create, MockedProvider, QueryTypes, render } from 'client/tests';
import { NotificationView } from '../notification_item_view';
import { createNotification } from './notifications_query_data';

describe('Notifications', () => {
  storyOf(
    'Item View',
    {
      componentWithData(notification: QueryTypes.NotificationsNotifications) {
        return (
          <MockedProvider>
            <NotificationView notification={notification} context={create.context()} />
          </MockedProvider>
        );
      }
    },
    data => {
      it('renders default view', () => {
        const root = render(data.componentWithData(createNotification()));
        expect(root).toMatchSnapshot();
      });
    }
  );
});
