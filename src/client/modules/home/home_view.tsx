import * as React from 'react';

import { Grid } from 'semantic-ui-react';

import * as Yoga from '../../../data/generated/yoga';
import { MainLayout } from '../core/main_layout';
import { PagerView } from '../core/pager_view';
import { SortView } from '../core/sort_view';
import { NotificationsContainer } from '../notifications/containers/notification_list_container';
import { NotificationListView } from '../notifications/views/notification_list_view';
import { ProcessListView } from '../process/views/process_list_view';

declare global {
  interface PageProps {
    path?: string;
  }
}

export const HomeLayout: React.SFC<PageProps> = () => (
  <MainLayout>
    <NotificationsContainer />
    <HomeView notification={null} />
  </MainLayout>
);

type Props = {
  user?: Corpix.User;
};

export const HomeViewAuth = () => <div />;

export const HomeViewAnonymous = () => <div />;

export const HomeView: React.SFC<Props> = ({ user }) => (
  <>
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
        <>You need to login ....</>
      </Otherwise>
    </Choose>
  </>
);
