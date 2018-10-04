import * as React from 'react';

import { QueryTypes } from 'data/client';
import { ProcessInstanceStatus } from '../process_instance_status';

import { create, render } from 'client/tests';

describe('Process Instance', () => {
  describe('Status', () => {
    const context = create.context();

    const Component = (
      <div>
        <ProcessInstanceStatus
          status={QueryTypes.BpmnProcessInstanceStatus.Aborted}
          context={context}
        />
        <ProcessInstanceStatus
          status={QueryTypes.BpmnProcessInstanceStatus.Finished}
          context={context}
        />
        <ProcessInstanceStatus
          status={QueryTypes.BpmnProcessInstanceStatus.Paused}
          context={context}
        />
        <ProcessInstanceStatus
          status={QueryTypes.BpmnProcessInstanceStatus.Running}
          context={context}
        />
      </div>
    );

    it('renders correctly', () => {
      expect(render(Component)).toMatchSnapshot();
    });

    return {
      component: Component
    };
  });
});
