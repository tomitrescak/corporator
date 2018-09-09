import * as React from 'react';

import { createData, mock, MockedProvider, render } from 'tests/client';

import { ProcessListContainer } from '../process_list_container';
import { PROCESSES_QUERY } from '../process_queries';

describe('Process', () => {
  describe('List Container', () => {
    beforeEach(() => mock.reset());

    function componentWithData() {
      return (
        <MockedProvider>
          <ProcessListContainer />
        </MockedProvider>
      );
    }

    function luisComponent() {
      mock.expect(PROCESSES_QUERY).reply({
        notifications: [createData.notification(), createData.notification()]
      });

      return componentWithData();
    }

    it('renders loading', () => {
      mock.expect(PROCESSES_QUERY).loading();
      const root = render(componentWithData());
      expect(root).toMatchSnapshot();
    });

    it('renders error', () => {
      mock.expect(PROCESSES_QUERY).fail('This is some error');
      const root = render(componentWithData());
      expect(root).toMatchSnapshot();
    });

    it('renders data', async () => {
      mock.expect(PROCESSES_QUERY).reply({
        processes: [createData.processDao(), createData.processDao()]
      });

      const root = render(componentWithData());
      expect(root).toMatchSnapshot();
    });

    return {
      component: luisComponent()
    };
  });
});
