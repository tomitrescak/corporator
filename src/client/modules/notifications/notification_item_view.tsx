import * as React from 'react';

import { List } from 'semantic-ui-react';
import styled from 'styled-components';

import { Link } from '@reach/router';
import { Yoga } from 'data/yoga';
import { inject } from 'mobx-react';

// dayjs.extend(relativeTime);

const Time = styled.span`
  color: #aaa;
`;

type Props = {
  notification: Yoga.Notification;
  context?: App.Context;
};

export const NotificationView = inject('context')(({ notification, context }: Props) => (
  <List.Item>
    <Time>{context.Ui.relativeDate(notification.createdAt)}</Time> &middot;{' '}
    <Link to={`/process/${notification.processInstance.process.name}`}>{notification.text}</Link>
  </List.Item>
));
