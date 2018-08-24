import * as React from 'react';

import { inject, observer } from 'mobx-react';
import { Grid, Header, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

import { MainLayout } from '../core/main_layout';
import { PagerView } from '../core/pager_view';
import { SortView } from '../core/sort_view';
import { HeaderAnonymous } from '../headers/header_anonymous';
import { LoginContainer } from '../login/login_container';
import { NotificationsContainer } from '../notifications/containers/notification_list_container';
import { NotificationListView } from '../notifications/views/notification_list_view';
import { ProcessListView } from '../process/views/process_list_view';

const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

declare global {
  interface PageProps {
    path?: string;
  }
}

export const HomeLayout: React.SFC<PageProps> = () => (
  <MainLayout>
    <HomeView />
  </MainLayout>
);

type Props = {
  user?: Corpix.User;
  path?: string;
};

const LoginSegment = styled(Segment)`
  width: 450px;
  margin: auto;
`;

export const HomeViewAuth = () => <div />;

export const HomeViewAnonymous = () => (
  <Centered>
    <div style={{ width: '400px' }}>
      <LoginSegment secondary>
        <Header icon="lock" content="Login to CORPIX" dividing />
        <LoginContainer />
      </LoginSegment>
    </div>
  </Centered>
);

export const HomeView: React.SFC<Props> = ({ user }) => (
  <React.Fragment>
    <Choose>
      <When condition={user != null}>
        <Grid>
          <Grid.Column width={11}>
            <SortView />
            <ProcessListView searchItems={null} />
            <PagerView />
          </Grid.Column>

          <Grid.Column width={5}>
            <NotificationListView notifications={null} />
          </Grid.Column>
        </Grid>
      </When>
      <Otherwise>
        <React.Fragment>
          <HeaderAnonymous />
          <HomeViewAnonymous />
        </React.Fragment>
      </Otherwise>
    </Choose>
  </React.Fragment>
);

export const HomeContainer = inject('store')(observer(HomeView));
