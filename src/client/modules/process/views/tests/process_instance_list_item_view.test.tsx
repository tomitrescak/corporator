import * as React from 'react';

import { QueryTypes, render } from 'client/tests';

import { ProcessInstanceListItem } from '../process_instance_list_item_view';

describe('Process', () => {
  describe('Instances', () => {
    describe('Item', () => {
      it('renders correctly', () => {
        const processInstance: QueryTypes.BpmnProcessInstancesBpmnProcessInstances = {
          id: '1',
          dateStarted: new Date(),
          process: {
            description: 'eqweqwe',
            name: 'eewrw',
            type: QueryTypes.ProcessType.Purchases
          },
          status: QueryTypes.BpmnProcessInstanceStatus.Finished
        };

        const component = render(<ProcessInstanceListItem processInstance={processInstance} />);
        expect(component).toMatchSnapshot();
      });
    });
  });
});
