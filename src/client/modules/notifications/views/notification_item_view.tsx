import * as React from 'react';

import { List } from 'semantic-ui-react';
import styled from 'styled-components';

import { context } from 'client/config/context';
import { Yoga } from 'data/yoga';

// dayjs.extend(relativeTime);

const Time = styled.span`
  color: #aaa;
`;

type Props = {
  notification: Yoga.Notification;
};

export const NotificationView: React.SFC<Props> = ({ notification }) => (
  <div>
    <List.Item>
      <Time>{context.Ui.relativeDate(notification.date)}</Time> &middot; {notification.code}
    </List.Item>
  </div>
);
