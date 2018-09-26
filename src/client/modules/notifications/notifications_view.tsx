import * as React from 'react';
import * as NOTIFICATIONS_QUERY from './queries/notifications_query.graphql';

import { NotificationsListContainer } from './notification_list_view';
import { NotificationsQuery } from './notifications_queries';

type Props = {
  path?: string;
};

export const NotificationsContainer: React.SFC<Props> = () => (
  <NotificationsQuery query={NOTIFICATIONS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) {
        return 'Loading...';
      }
      if (error) {
        return `Error! ${error.message}`;
      }

      return <NotificationsListContainer notifications={data.notificationsQuery} />;
    }}
  </NotificationsQuery>
);
