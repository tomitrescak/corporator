import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Button, Header, List, Message } from 'semantic-ui-react';

import { Yoga } from 'data/yoga';
import { NotificationView } from './notification_item_view';

type Props = {
  notifications: Yoga.Notification[];
  store?: App.Store;
};

let notification: Yoga.Notification;

export const NotificationsListView: React.SFC<Props> = ({ notifications, store }) => (
  <>
    <Choose>
      <When condition={notifications && notifications.length > 0}>
        <>
          <Header content="Notifications" icon="bell" as="h5" dividing />
          <List relaxed divided>
            <For each="notification" of={notifications}>
              <NotificationView key={notification.id} notification={notification} />
            </For>
          </List>
          <Button color="red" icon="trash" labelPosition="left" content={store.i18n`Clear All`} />
        </>
      </When>
      <Otherwise>
        <Message>You have no new notifications.</Message>
      </Otherwise>
    </Choose>
  </>
);

export const NotificationsListContainer = inject('store')(observer(NotificationsListView));
