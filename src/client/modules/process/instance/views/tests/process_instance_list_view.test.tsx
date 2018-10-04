import * as React from 'react';

import { create, render } from 'client/tests';

import { ProcessInstanceList } from '../process_instance_list_view';

import { createProcessInstanceList } from 'client/modules/process/common/tests/process_test_data';
import 'jest-styled-components';

describe('Process Instance', () => {
  describe('List', () => {
    const context = create.context();

    describe('Empty', () => {
      const component = (
        <div>
          <ProcessInstanceList
            header="Empty List"
            icon="tasks"
            description="This is the list of all your processes"
            processes={[]}
            context={context}
          />
        </div>
      );

      it('renders empty', () => {
        const root = render(component);
        expect(root).toMatchSnapshot();
      });

      return { component };
    });

    describe('Data', () => {
      const component = (
        <div>
          <ProcessInstanceList
            header="All Processes"
            icon="tasks"
            description="This is the list of all your processes"
            processes={createProcessInstanceList()}
            context={context}
          />
        </div>
      );

      it('renders correctly', () => {
        const list = render(component);
        expect(list).toMatchSnapshot();
      });

      return { component };
    });
  });
});
