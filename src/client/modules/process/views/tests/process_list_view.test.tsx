import * as React from 'react';

import { create as render } from 'react-test-renderer';

import { create } from '../../../../../shared/test_data';
import { ProcessListView } from '../process_list_view';


describe('Processes', () => {
  describe('List', () => {
    storyOf(
      'Empty',
      {
        componentWithData(searchItems: Corpix.Entities.Search[]) {
          return <div><ProcessListView searchItems={searchItems} /></div>
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
          create.searchItem({ category: 'Travel Request Form', owner: 'Tomas Trescak', title: 'International Travel Request' }),
          create.searchItem({ category: 'Equipment Request Form', owner: 'Nguyen Vu', title: 'International Travel Request' }),
          create.searchItem({ category: 'Payment Request Form', owner: 'Tomas Trescak', title: 'International Travel Request' })
        ],
        componentWithData(searchItems: Corpix.Entities.Search[]) {
          searchItems = searchItems || this.searchItems;

          return <div><ProcessListView searchItems={searchItems} /></div>
        }
      },
      data => {
        it('renders searched processes', () => {
          const root = render(data.componentWithData(data.searchItems)); 
          expect(root).toMatchSnapshot();
        });
      }
    );
  })
  
});
