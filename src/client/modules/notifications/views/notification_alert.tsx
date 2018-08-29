import * as React from 'react';

import { inject, observer } from 'mobx-react';
import { Query } from 'react-apollo';

import { ApolloError } from 'apollo-client';
import { Yoga } from 'data/yoga';
import { Loader } from 'semantic-ui-react';

type Props = {
  store: App.Store;
};

/* =========================================================
    QUERY
   ======================================================== */

interface Data {
  notifications: Yoga.NotificationsPayload;
}

export class NotificationsQuery extends Query<Data> {
  static displayName = 'ResumeQuery';
}

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
  // <NotificationsQuery>
  //   {result => {
  //     <QueryResult result={result} /> || (
  //       <>
  //         <Icon name="bell" /> {result.data.notifications.length}
  //       </>
  //     );
  //   }}
  // </NotificationsQuery>
  <div>Tomi</div>
));

export const NotificationAlertContainer = inject('store')(NotificationAlert);
