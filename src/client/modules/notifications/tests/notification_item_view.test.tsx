import * as React from 'react';

import { create, MockedProvider, QueryTypes, render } from 'client/tests';
import { List } from 'semantic-ui-react';
import { NotificationView } from '../notification_item_view';
import { createNotification } from './notifications_test_data';

describe('Notifications', () => {
  describe('Item', () => {
    function componentWithData(notification: QueryTypes.Notifications = createNotification()) {
      return (
        <MockedProvider>
          <NotificationView notification={notification} context={create.context()} />
        </MockedProvider>
      );
    }
    it('renders default view', () => {
      const root = render(componentWithData(createNotification()));
      expect(root).toMatchSnapshot();
    });

    return {
      component: <List>{componentWithData()}</List>
    };
  });
});
