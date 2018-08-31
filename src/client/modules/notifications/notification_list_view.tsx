import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { Button, Header, List, Message } from 'semantic-ui-react';

import { Yoga } from 'data/yoga';
import { NotificationView } from './notification_item_view';

import { CSSTransitionGroup } from 'react-transition-group';
import { RemoveNotificationsMutation } from './notifications_queries';

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
            <CSSTransitionGroup
              component={React.Fragment}
              transitionName="example"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnter={false}
              transitionEnterTimeout={500}
              transitionLeave={true}
              transitionLeaveTimeout={500}
            >
              <For each="notification" of={notifications}>
                <NotificationView key={notification.id} notification={notification} />
              </For>
            </CSSTransitionGroup>
          </List>
          <RemoveNotificationsMutation>
            {clearNotifications => (
              <Button
                onClick={() => clearNotifications()}
                color="red"
                icon="trash"
                labelPosition="left"
                content={store.i18n`Clear All`}
              />
            )}
          </RemoveNotificationsMutation>
        </>
      </When>
      <Otherwise>
        <Message>You have no new notifications.</Message>
      </Otherwise>
    </Choose>
  </>
);

export const NotificationsListContainer = inject('store')(observer(NotificationsListView));
