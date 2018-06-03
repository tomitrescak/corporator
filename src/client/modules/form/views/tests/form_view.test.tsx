import * as React from 'react';

import { FormView } from '../form_view';
import { Segment } from 'semantic-ui-react';

describe('Form', () => {
  storyOf(
    'Viewer',
    {
      get component() {
        // just another notation
        return (
          <Segment>
            <FormView />
          </Segment>
        );
      }
    },
    () => {
      it('renders correctly', () => {});
    }
  );
});
