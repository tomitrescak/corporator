import * as React from 'react';

import { Grid } from 'semantic-ui-react';
import { MainLayout } from '../core/main_layout';
import { PagerView } from '../core/pager_view';
import { SortView } from '../core/sort_view';
import { NotificationListView } from '../notifications/views/notification_list';
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

export const HomeView: React.SFC = () => (
  <>
    <Grid>
      <Grid.Column width={11}>
        <SortView />
        <ProcessListView />
        <PagerView />
      </Grid.Column>

      <Grid.Column width={5}>
        <NotificationListView />
      </Grid.Column>
    </Grid>
  </>
);
