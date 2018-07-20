import * as React from 'react';

import { create as render } from 'react-test-renderer';

import { Prisma } from '../../../../../data/prisma';
import { createData } from '../../../../../shared/test_data';
import { NotificationView } from '../notification_item_view';

describe('Notifications', () => {
  storyOf(
    'Item View',
    {
      componentWithData(notification: Prisma.Notification) {
        return <NotificationView notification={notification} />;
      }
    },
    data => {
      it('renders default view', () => {
        const root = render(
          data.componentWithData(createData.notification({ comment: 'This is a comment' }))
        );
        expect(root).toMatchSnapshot();

        const root1 = render(
          data.componentWithData(createData.notification({ comment: 'This is another comment' }))
        );
        expect(root1).toMatchSnapshot();
      });
    }
  );
});
