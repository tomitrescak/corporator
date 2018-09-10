import * as React from 'react';

import { mock, MockedProvider, render } from 'client/tests';

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
        // notifications: [create.notificationDao(), create.notificationDao()]
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
        // processes: [createDao.processDao(), createDao.processDao()]
      });

      const root = render(componentWithData());
      expect(root).toMatchSnapshot();
    });

    return {
      component: luisComponent()
    };
  });
});
