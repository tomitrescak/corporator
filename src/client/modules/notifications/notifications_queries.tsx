import * as NOTIFICATIONS_QUERY from 'data/client/notifications_query.graphql';

import { Query } from 'react-apollo';

import { StaticProps, Yoga } from 'data/yoga';

type Data = { notifications: Yoga.Notification[] };
type Variables = { input: Yoga.NotificationsInput };
type Props = StaticProps<Variables>;

export class NotificationsQuery extends Query<Data, Variables> {
  static displayName = 'ResumeQuery';
  static defaultProps: Props = {
    query: NOTIFICATIONS_QUERY,
    variables: {
      input: {
        first: 50,
        skip: 0
      }
    }
  };
}
