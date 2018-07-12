import * as React from 'react';

import { create as render } from 'react-test-renderer';

import { create } from '../../../../../shared/test_data';
import { ResourceSearchListView } from '../resource_search_list_view';


describe('Resource', () => {
  storyOf(
    'Search',
    {
      searchItems: [
        create.searchItem({ category: 'Travel Request Form', owner: 'Tomas Trescak', title: 'International Travel Request' }),
        create.searchItem({ category: 'Equipment Request Form', owner: 'Nguyen Vu', title: 'International Travel Request' }),
        create.searchItem({ category: 'Payment Request Form', owner: 'Tomas Trescak', title: 'International Travel Request' })
      ],
      componentWithData(searchItems: Corpix.Entities.Search[]) {
        return <div><ResourceSearchListView searchItems={searchItems} /></div>
      }
    },
    data => {
      it('renders no search items', () => {
        const root = render(data.componentWithData([]));
        expect(root).toMatchSnapshot();
      });

      it('renders some search items', () => {
        const root = render(data.componentWithData(data.searchItems));
        expect(root).toMatchSnapshot();
      });
    }
  );
});
