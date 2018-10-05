import * as React from 'react';

import { inject, observer } from 'mobx-react';
import { TransitionGroup } from 'react-transition-group';
import { Button, Header, List, Message } from 'semantic-ui-react';

import { QueryTypes } from 'data/client';
import { NotificationView } from './notification_item_view';
import { RemoveNotificationsMutation } from './notifications_queries';

type Props = {
  notifications: QueryTypes.Notifications[];
  context?: App.Context;
};

export const NotificationsListView: React.SFC<Props> = ({ notifications, context }) => (
  <>
    <Choose>
      <When condition={notifications && notifications.length > 0}>
        <>
          <Header content="Notifications" icon="bell" as="h5" dividing />
          <List relaxed divided>
            <TransitionGroup
              component={React.Fragment}
              transitionName="example"
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnter={false}
              transitionEnterTimeout={500}
              transitionLeave={true}
              transitionLeaveTimeout={500}
            >
              {notifications.map(notification => (
                <NotificationView key={notification.id} notification={notification} />
              ))}
            </TransitionGroup>
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
