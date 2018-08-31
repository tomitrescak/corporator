import * as REMOVE_NOTIFICATION_MUTATION from 'data/client/notification_remove_mutation.graphql';
import * as CLEAR_NOTIFICATIONS_MUTATION from 'data/client/notifications_clear_mutation.graphql';
import * as NOTIFICATIONS_QUERY from 'data/client/notifications_query.graphql';

import { Mutation, MutationProps, Query, QueryProps } from 'react-apollo';

import { Yoga } from 'data/yoga';

type Data = { notifications: Yoga.Notification[] };
type Variables = { input: Yoga.NotificationsInput };
type Props = Partial<QueryProps<Data, Variables>>;

export class NotificationsQuery extends Query<Data, Variables> {
  static displayName = 'ResumeQuery';
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

type RemoveNotificationMutationData = { removeNotification: string };
type RemoveNotificationMutationVariables = { id: string };
type RemoveNotificationMutationProps = Partial<
  MutationProps<RemoveNotificationMutationData, RemoveNotificationMutationVariables>
>;

export class RemoveNotificationMutation extends Mutation<
  RemoveNotificationMutationData,
  RemoveNotificationMutationVariables
> {
  static displayName = 'RemoveNotificationMutation';
  static defaultProps: RemoveNotificationMutationProps = {
    mutation: REMOVE_NOTIFICATION_MUTATION,
    update: (cache, props) => {
      const { notifications } = cache.readQuery<Data, Variables>({
        query: NOTIFICATIONS_QUERY,
        variables: { input: { first: 50 } }
      });
      const id = props.data.removeNotification;
      const index = notifications.findIndex((n: Yoga.Notification) => n.id === id);
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

type RemoveNotificationsMutationData = { removeNotification: boolean };
type RemoveNotificationsMutationVariables = {};
type RemoveNotificationsMutationProps = Partial<
  MutationProps<RemoveNotificationsMutationData, RemoveNotificationsMutationVariables>
>;

export class RemoveNotificationsMutation extends Mutation<
  RemoveNotificationMutationData,
  RemoveNotificationMutationVariables
> {
  static displayName = 'RemoveNotificationsMutation';
  static defaultProps: RemoveNotificationsMutationProps = {
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
