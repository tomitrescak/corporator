import * as REMOVE_NOTIFICATION_MUTATION from './queries/notification_remove_mutation.graphql';
import * as CLEAR_NOTIFICATIONS_MUTATION from './queries/notifications_clear_mutation.graphql';
import * as NOTIFICATIONS_QUERY from './queries/notifications_query.graphql';

import { Mutation, MutationProps, Query, QueryProps } from 'react-apollo';

import { QueryTypes } from 'data/client';

/* =========================================================
    Notifications
   ======================================================== */

type Props = Partial<
  QueryProps<QueryTypes.NotificationsQuery, QueryTypes.NotificationsQueryVariables>
>;

export class NotificationsQuery extends Query<
  QueryTypes.NotificationsQuery,
  QueryTypes.NotificationsQueryVariables
> {
  static displayName = 'NotificationsQuery';
  static defaultProps: Props = {
    query: NOTIFICATIONS_QUERY,
    variables: {
      input: {
        first: 50
      }
    }
  };
}

/* =========================================================
    RemoveNotificationMutation
   ======================================================== */

type RemoveNotificationMutationProps = Partial<
  MutationProps<
    QueryTypes.RemoveNotificationMutation,
    QueryTypes.RemoveNotificationMutationVariables
  >
>;

export class RemoveNotificationMutation extends Mutation<
  QueryTypes.RemoveNotificationMutation,
  QueryTypes.RemoveNotificationMutationVariables
> {
  static displayName = 'RemoveNotificationMutation';
  static defaultProps: RemoveNotificationMutationProps = {
    mutation: REMOVE_NOTIFICATION_MUTATION,
    update: (cache, props) => {
      const { notificationsQuery } = cache.readQuery<
        QueryTypes.NotificationsQuery,
        QueryTypes.NotificationsQueryVariables
      >({
        query: NOTIFICATIONS_QUERY,
        variables: { input: { first: 50 } }
      });
      const id = props.data.removeNotification;
      const index = notificationsQuery.findIndex((n: QueryTypes.Notifications) => n.id === id);
      notificationsQuery.splice(index, 1);
      cache.writeQuery({
        query: NOTIFICATIONS_QUERY,
        variables: { input: { first: 50 } },
        data: { notificationsQuery }
      });
    }
  };
}

/* =========================================================
    RemoveNotificationsMutation
   ======================================================== */

type ClearNotificationsData = { removeNotification: boolean };
type ClearNotificationsMutationProps = Partial<MutationProps<ClearNotificationsData, {}>>;

export class RemoveNotificationsMutation extends Mutation<ClearNotificationsData, {}> {
  static displayName = 'RemoveNotificationsMutation';
  static defaultProps: ClearNotificationsMutationProps = {
    mutation: CLEAR_NOTIFICATIONS_MUTATION,
    update: cache => {
      cache.writeQuery({
        query: NOTIFICATIONS_QUERY,
        variables: { input: { first: 50 } },
        data: { notifications: [] }
      });
    }
  };
}
