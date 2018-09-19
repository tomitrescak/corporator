import * as React from 'react';

import { create, render } from 'client/tests';
import { QueryTypes } from 'data/client';

import { createProcesses } from '../../containers/tests/process_test_data';
import { ProcessListView } from '../process_items_view';

import 'jest-styled-components';

describe('Process', () => {
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
      function componentWithData(processes: QueryTypes.ProcessesProcesses[] = createProcesses()) {
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

    // storyOf(
    //   'With Data',
    //   {
    //     searchItems: [
    //       createData.searchItem({
    //         category: 'Travel Request Form',
    //         owner: 'Tomas Trescak',
    //         title: 'International Travel Request'
    //       }),
    //       createData.searchItem({
    //         category: 'Equipment Request Form',
    //         owner: 'Nguyen Vu',
    //         title: 'International Travel Request'
    //       }),
    //       createData.searchItem({
    //         category: 'Payment Request Form',
    //         owner: 'Tomas Trescak',
    //         title: 'International Travel Request'
    //       })
    //     ],
    //     componentWithData(searchItems: any[]) {
    //       searchItems = searchItems || this.searchItems;

    //       return (
    //         <div>
    //           <ProcessListView searchItems={searchItems} />
    //         </div>
    //       );
    //     }
    //   },
    //   data => {
    //     it('renders searched processes', () => {
    //       const root = render(data.componentWithData(data.searchItems));
    //       expect(root).toMatchSnapshot();
    //     });
    //   }
    // );
  });
});
