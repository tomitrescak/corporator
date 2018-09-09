import * as REMOVE_NOTIFICATION_MUTATION from 'data/notifications/client/notification_remove_mutation.graphql';
import * as CLEAR_NOTIFICATIONS_MUTATION from 'data/notifications/client/notifications_clear_mutation.graphql';
import * as NOTIFICATIONS_QUERY from 'data/notifications/client/notifications_query.graphql';

import { Mutation, MutationProps, Query, QueryProps } from 'react-apollo';

import * as QueryTypes from 'data/types';

/* =========================================================
    Notifications
   ======================================================== */

type Props = Partial<QueryProps<QueryTypes.Notifications, QueryTypes.NotificationsVariables>>;

export class NotificationsQuery extends Query<
  QueryTypes.Notifications,
  QueryTypes.NotificationsVariables
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
  MutationProps<QueryTypes.RemoveNotification, QueryTypes.RemoveNotificationVariables>
>;

export class RemoveNotificationMutation extends Mutation<
  QueryTypes.RemoveNotification,
  QueryTypes.RemoveNotificationVariables
> {
  static displayName = 'RemoveNotificationMutation';
  static defaultProps: RemoveNotificationMutationProps = {
    mutation: REMOVE_NOTIFICATION_MUTATION,
    update: (cache, props) => {
      const { notifications } = cache.readQuery<
        QueryTypes.Notifications,
        QueryTypes.NotificationsVariables
      >({
        query: NOTIFICATIONS_QUERY,
        variables: { input: { first: 50 } }
      });
      const id = props.data.removeNotification;
      const index = notifications.findIndex(
        (n: QueryTypes.NotificationsNotifications) => n.id === id
      );
      notifications.splice(index, 1);
      cache.writeQuery({
        query: NOTIFICATIONS_QUERY,
        variables: { input: { first: 50 } },
        data: { notifications }
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
