import * as React from 'react';
import { Header, List, ListProps, Segment } from 'semantic-ui-react';
import styled, { StyledComponentClass } from 'styled-components';

const Time = styled.span`
  color: #aaa;
`;

const NotificationList: StyledComponentClass<ListProps, {}> = styled(List)`
  &&&&& .item {
    line-height: inherit;
  }
`;



export const NotificationListView = () => (
  <>
    {/* <Choose>
      <When condition={}> */}
        <Segment>
          <Header content="Notifications" icon="bell" as="h5" />
          <NotificationList divided>
            <List.Item>
              <Time>3 hours ago</Time> &middot; You have a request to approve a{' '}
              <a href="#">Travel to London</a> by Michael Jackson Doe<br />
            </List.Item>

            <List.Item>
              <Time>11 hours ago</Time> &middot; Your <a href="#">domestic travel request to Newcastle</a>{' '}
              has been approved by the Travel Manager<br />
            </List.Item>

            <List.Item>
              <Time>2 days ago</Time> &middot; Your domestic travel request "London" has been
              submitted<br />
            </List.Item>
          </NotificationList>
        </Segment>
      {/* </When>
      <Otherwise>
        <>You have no new notifications.</>
      </Otherwise>
    </Choose> */}
  </>
);
