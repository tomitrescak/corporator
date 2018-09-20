import * as React from 'react';

import { mock, MockedProvider, render } from 'client/tests';

import { ProcessListContainer } from '../process_items_container';
import { PROCESSES_QUERY } from '../process_queries';
import { createProcesses } from './process_test_data';

describe('Process', () => {
  describe('List', () => {
    describe('Container', () => {
      beforeEach(() => mock.reset());

      function componentWithData() {
        return (
          <MockedProvider>
            <div>
              <ProcessListContainer />
            </div>
          </MockedProvider>
        );
      }

      function luisComponent() {
        mock.expect(PROCESSES_QUERY).reply({
          processes: createProcesses()
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
          processes: createProcesses()
        });

        const root = render(componentWithData());
        expect(root).toMatchSnapshot();
      });

      return {
        component: luisComponent()
      };
    });
  });
});
