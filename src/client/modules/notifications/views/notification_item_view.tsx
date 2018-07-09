import * as dayjs from 'dayjs';
import * as React from 'react';


// import relativeTime from 'dayjs/plugin/relativeTime'
import { List } from 'semantic-ui-react';
import styled from 'styled-components';

// dayjs.extend(relativeTime);

const Time = styled.span`
  color: #aaa;
`;

type Props = {
  notification: Corpix.Entities.Notification;
};

export const NotificationView: React.SFC<Props> = ({ notification }) => (
  <List.Item>
    <Time>{ dayjs(notification.date).toString() }</Time> &middot; { notification.comment }
  </List.Item>
);
