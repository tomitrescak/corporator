import * as React from 'react';

import { create as render } from 'react-test-renderer';

import { create } from 'shared/test_data';
import { NotificationListView } from '../notification_list_view';


describe('Notifications', () => {
  storyOf(
    'Item View',
    {
      notifications: [
        create.notification({ comment: 'Notification 1', date: new Date(2010, 1, 2, 12, 50)} ),
        create.notification({ comment: 'Notification 2', date: new Date(2010, 1, 2, 3, 50)} ),
        create.notification({ comment: 'Notification 3', date: new Date(2007, 1, 2, 10, 50)} ),
        create.notification({ comment: 'Notification 4', date: new Date(2010, 1, 2, 11, 50)} ),
        create.notification({ comment: 'Notification 5', date: new Date(2011, 1, 2, 12, 50)} )
      ],
      componentWithData(notifications: Corpix.Entities.Notification[]) {
        return <NotificationListView notifications={notifications} />;
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
})


