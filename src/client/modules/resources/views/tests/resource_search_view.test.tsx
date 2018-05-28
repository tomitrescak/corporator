import * as React from 'react';

import { MainLayout } from '../../../core/main_layout';
import { ResourceSearchView } from '../resource_search_view';

describe('Resource', () => {
  storyOf(
    'Search',
    {
      get component() {
        // just another notation
        return (
          <MainLayout>
            <ResourceSearchView />
          </MainLayout>
        );
      }
    },
    () => {
      it('renders correctly', () => {});
    }
  );
});
