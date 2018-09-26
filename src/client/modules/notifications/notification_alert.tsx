import * as React from 'react';

import { Link } from '@reach/router';
import { ApolloError } from 'apollo-client';
import { inject, observer } from 'mobx-react';
import { Loader, Menu } from 'semantic-ui-react';

import { NotificationsQuery } from './notifications_queries';

type Props = {
  store?: App.Store;
  active?: boolean;
};

/* =========================================================
    COMPONENT
   ======================================================== */

type QueryResultProps = {
  result: {
    loading?: boolean;
    error?: ApolloError;
    data?: any;
  };
};

export const QueryResult: React.SFC<QueryResultProps> = ({ result }) => {
  /* == ERROR == */
  if (result.error) {
    return <span />;
  }
  /* == LOADING == */
  if (result.loading || !result.data) {
    return <Loader active inline size="mini" />;
  }
  return null;
};

export const NotificationAlert = observer(({ active }: Props) => (
  <NotificationsQuery>
    {result => {
      /* == LOADING == */
      if (result.error || result.loading || !result.data) {
        return <Menu.Item icon="bell" content="0 Notifications" />;
      }
      return (
        <Menu.Item
          as={Link}
          to="/notifications"
          icon="bell"
          active={active}
          content={result.data.notificationsQuery.length || 0}
        />
      );
    }}
  </NotificationsQuery>
));

export const NotificationAlertContainer = inject('store')(NotificationAlert);
