import * as React from 'react';
import { Header, List, ListProps, Message, Segment } from 'semantic-ui-react';
import styled, { StyledComponentClass } from 'styled-components';

import { Yoga } from 'data/yoga';
import { NotificationView } from './notification_item_view';

const NotificationList: StyledComponentClass<ListProps, {}> = styled(List)`
  &&&&& .item {
    line-height: inherit;
  }
`;

type Props = {
  notifications: Yoga.Notification[];
};

let notification: Yoga.Notification;

export const NotificationListView: React.SFC<Props> = ({ notifications }) => (
  <React.Fragment>
    <Choose>
      <When condition={notifications && notifications.length > 0}>
        <Segment>
          <Header content="Notifications" icon="bell" as="h5" />
          <NotificationList divided>
            <For each="notification" of={notifications}>
              <NotificationView key={notification.id} notification={notification} />
            </For>
          </NotificationList>
        </Segment>
      </When>
      <Otherwise>
        <Message>You have no new notifications.</Message>
      </Otherwise>
    </Choose>
  </React.Fragment>
);
