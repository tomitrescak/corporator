import * as React from 'react';

import { QueryTypes } from 'data/client';

import { Link } from '@reach/router';
import { inject } from 'mobx-react';
import { Icon, List } from 'semantic-ui-react';
import styled from 'styled-components';

import { RemoveNotificationMutation } from './notifications_queries';

// dayjs.extend(relativeTime);

const Time = styled.span`
  color: #aaa;
`;

const ClickableIcon = styled(Icon)`
  cursor: pointer;
`;

type Props = {
  notification: QueryTypes.Notifications;
  context?: App.Context;
};

export const NotificationView = inject('context')(({ notification, context }: Props) => (
  <List.Item>
    <List.Icon>
      <RemoveNotificationMutation
        optimisticResponse={{
          removeNotification: notification.id
        }}
      >
        {(removeNotification, { loading }) =>
          loading ? (
            <Icon name="hourglass half" color="grey" title={context.i18n`Removing`} />
          ) : (
            <ClickableIcon
              onClick={() => removeNotification({ variables: { id: notification.id } })}
              name="eye"
              color="grey"
              title={context.i18n`Mark as viewed`}
            />
          )
        }
      </RemoveNotificationMutation>
    </List.Icon>
    <List.Content>
      <div key="1">
        <Time>{context.Ui.relativeDate(notification.createdAt)}</Time> &middot;{' '}
        <Link to={`/process/${context.Ui.urlName(notification.processInstance.process.name)}`}>
          {notification.text}
        </Link>
      </div>
    </List.Content>
  </List.Item>
));
