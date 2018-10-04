import * as React from 'react';

import { create, render } from 'client/tests';

import { List } from 'semantic-ui-react';
import { createProcessListInstance } from '../../containers/tests/process_test_data';
import { ProcessInstanceItem } from '../process_instance_item_view';

describe('Process Instance', () => {
  describe('Item', () => {
    const context = create.context();

    it('renders correctly', () => {
      const processInstance = createProcessListInstance();
      const component = render(
        <ProcessInstanceItem processInstance={processInstance} context={context} />
      );
      expect(component).toMatchSnapshot();
    });

    return {
      component: (
        <List>
          <ProcessInstanceItem processInstance={createProcessListInstance()} context={context} />
        </List>
      )
    };
  });
});
