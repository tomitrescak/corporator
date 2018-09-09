import * as React from 'react';

import * as QueryTypes from 'data/types';

import { inject, observer } from 'mobx-react';
import { Button, Header, List, Message } from 'semantic-ui-react';

import { NotificationView } from './notification_item_view';

import { CSSTransitionGroup } from 'react-transition-group';
import { RemoveNotificationsMutation } from './notifications_queries';

type Props = {
  notifications: QueryTypes.NotificationsNotifications[];
  context?: App.Context;
};

let notification: QueryTypes.NotificationsNotifications;

export const NotificationsListView: React.SFC<Props> = ({ notifications, context }) => (
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
                content={context.i18n`Clear All`}
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

NotificationsListView.displayName = 'NotificationsListView';

export const NotificationsListContainer = inject('context')(observer(NotificationsListView));
