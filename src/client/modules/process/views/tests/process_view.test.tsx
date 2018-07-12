import * as React from 'react';

import { ProcessLayout, ProcessVersionsLayout } from '../../../core/main_layout';
import { ProcessListView } from '../process_list_view';
import { ProcessVersions } from '../process_versions_view';
import { ProcessView } from '../process_view';

describe('Process', () => {
  storyOf(
    'Stopped',
    {
      get component() {
        // just another notation
        return (
          <ProcessLayout>
            <ProcessView running={false} />
          </ProcessLayout>
        );
      }
    },
    () => {
      it('renders correctly', () => {
        /**/
      });
    }
  );

  storyOf(
    'Running',
    {
      get component() {
        // just another notation
        return (
          <ProcessLayout>
            <ProcessView running={true} />
          </ProcessLayout>
        );
      }
    },
    () => {
      it('renders correctly', () => {
        /**/
      });
    }
  );

  storyOf(
    'Versions',
    {
      get component() {
        // just another notation
        return (
          <ProcessVersionsLayout>
            <ProcessVersions />
          </ProcessVersionsLayout>
        );
      }
    },
    () => {
      it('renders correctly', () => {
        /**/
      });
    }
  );

  storyOf(
    'Process List View',
    {
      get component() {
        // just another notation
        return <ProcessListView />
      }
    },
    () => {
      it('renders correctly', () => {
        /**/
      });
    }
  );
});
