import * as React from 'react';

import { create as render } from 'react-test-renderer';

import { createData } from '../../../../../tests/test_data';
import { ProcessListView } from '../process_list_view';

describe('Process', () => {
  describe('List', () => {
    storyOf(
      'Empty',
      {
        componentWithData(searchItems: any[]) {
          return (
            <div>
              <ProcessListView searchItems={searchItems} />
            </div>
          );
        }
      },
      data => {
        it('renders no processes', () => {
          const root = render(data.componentWithData([]));
          expect(root).toMatchSnapshot();
        });
      }
    );

    storyOf(
      'With Data',
      {
        searchItems: [
          createData.searchItem({
            category: 'Travel Request Form',
            owner: 'Tomas Trescak',
            title: 'International Travel Request'
          }),
          createData.searchItem({
            category: 'Equipment Request Form',
            owner: 'Nguyen Vu',
            title: 'International Travel Request'
          }),
          createData.searchItem({
            category: 'Payment Request Form',
            owner: 'Tomas Trescak',
            title: 'International Travel Request'
          })
        ],
        componentWithData(searchItems: any[]) {
          searchItems = searchItems || this.searchItems;

          return (
            <div>
              <ProcessListView searchItems={searchItems} />
            </div>
          );
        }
      },
      data => {
        it('renders searched processes', () => {
          const root = render(data.componentWithData(data.searchItems));
          expect(root).toMatchSnapshot();
        });
      }
    );
  });
});
