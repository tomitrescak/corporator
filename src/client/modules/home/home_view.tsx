import * as React from 'react';

import { Grid } from 'semantic-ui-react';

import { Yoga } from 'data/yoga';
import { MainLayout } from '../core/main_layout';
import { PagerView } from '../core/pager_view';
import { SortView } from '../core/sort_view';
import { NotificationListView } from '../notifications/views/notification_list_view';
import { ProcessListView } from '../process/views/process_list_view';

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
  notification: Yoga.Notification[];
};

export const HomeView: React.SFC<Props> = ({ user, notification }) => (
  <>
    <Choose>
      <When condition={user != null}>
        <Grid>
          <Grid.Column width={11}>
            <SortView />
            <ProcessListView />
            <PagerView />
          </Grid.Column>

          <Grid.Column width={5}>
            <NotificationListView notifications={notification} />
          </Grid.Column>
        </Grid>
      </When>
      <Otherwise>
        <>You need to login ....</>
      </Otherwise>
    </Choose>
  </>
);
