import * as React from 'react';

import { Link } from '@reach/router';
import { ApolloError } from 'apollo-client';
import { inject, observer } from 'mobx-react';
import { Icon, Loader } from 'semantic-ui-react';

import { NotificationsQuery } from './notifications_queries';

type Props = {
  store?: App.Store;
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

export const NotificationAlert = observer((_props: Props) => (
  <NotificationsQuery>
    {result => {
      /* == LOADING == */
      if (result.error || result.loading || !result.data) {
        return <span />;
      }
      return (
        <Link to="/notifications">
          <Icon name="bell" /> {result.data.notifications.length || 0}
        </Link>
      );
    }}
  </NotificationsQuery>
));

export const NotificationAlertContainer = inject('store')(NotificationAlert);
