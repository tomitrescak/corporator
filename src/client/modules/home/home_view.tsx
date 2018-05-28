import * as React from 'react';

import { MainLayout } from '../core/main_layout';
import { Grid } from 'semantic-ui-react';
import { NotificationListView } from '../notifications/views/notification_list';
import { ProcessListView } from '../process/views/process_list_view';
import { PagerView } from '../core/pager_view';
import { SortView } from '../core/sort_view';

export const HomeLayout = () => (
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
