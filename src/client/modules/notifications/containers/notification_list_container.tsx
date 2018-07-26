import * as NOTIFICATIONS from 'data/client/notifications.schema.graphql';
import * as React from 'react';

import { Query } from 'react-apollo';

import { Notification } from '../../../../data/generated/yoga';
import { NotificationListView } from '../views/notification_list_view';

export const QUERY = NOTIFICATIONS;

type Data = {
  notifications: Notification[]
}
class NotificationsQuery extends Query<Data> {}

export const NotificationsContainer: React.SFC = () => (
  <NotificationsQuery query={NOTIFICATIONS} variables={{ start:0, end: 10}}>
    {({ loading, error, data }) => {
      if (loading) { return 'Loading...'; }
      if (error) { return `Error! ${error.message}`; }

      return (
        <NotificationListView notifications={data.notifications} />
      );
    }}
  </NotificationsQuery>
);