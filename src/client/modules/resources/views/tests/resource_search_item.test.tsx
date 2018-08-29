import * as React from 'react';

import { create as render } from 'react-test-renderer';

import { createData } from '../../../../../tests/test_data';
import { SearchView } from '../resource_search_item_view';

describe('Resource', () => {
  storyOf(
    'Search',
    {
      componentWithData(searchItem: any) {
        return <SearchView searchItem={searchItem} />;
      }
    },
    data => {
      it('renders default view', () => {
        const root = render(
          data.componentWithData(
            createData.searchItem({
              category: 'Travel Request Form',
              owner: 'Tomas Trescak',
              title: 'International Travel Request',
              date: new Date(2010, 1, 2)
            })
          )
        );
        expect(root).toMatchSnapshot();
      });
    }
  );
});
