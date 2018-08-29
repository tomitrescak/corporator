import * as React from 'react';

import { create as render } from 'react-test-renderer';

import { createData, Yoga } from 'tests/client';
import { NotificationView } from '../notification_item_view';

describe('Notifications', () => {
  storyOf(
    'Item View',
    {
      componentWithData(notification: Yoga.Notification) {
        return <NotificationView notification={notification} />;
      }
    },
    data => {
      it('renders default view', () => {
        const root = render(
          data.componentWithData(createData.notification({ code: 'ServiceStarted' }))
        );
        expect(root).toMatchSnapshot();
      });
    }
  );
});
