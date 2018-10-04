import * as React from 'react';

import { createProcesses } from 'client/modules/process/common/tests/process_test_data';
import { create, render } from 'client/tests';
import { QueryTypes } from 'data/client';
import { ProcessListView } from '../process_list_view';

import 'jest-styled-components';

describe('Process Definition', () => {
  describe('List', () => {
    describe('Empty', () => {
      const component = (
        <div>
          <ProcessListView processes={[]} context={create.context()} />
        </div>
      );

      it('renders empty', () => {
        const root = render(component);
        expect(root).toMatchSnapshot();
      });

      return { component };
    });

    describe('Records', () => {
      function componentWithData(
        processes: QueryTypes.ProcessesQuery_Processes[] = createProcesses()
      ) {
        return (
          <div>
            <ProcessListView processes={processes} context={create.context()} />
          </div>
        );
      }

      it('renders with data', () => {
        const root = render(componentWithData());
        expect(root).toMatchSnapshot();
      });

      return { componentWithData };
    });
  });
});
