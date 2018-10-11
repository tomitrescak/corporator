import { create, its, testMockedResolver } from 'data/tests';
import { BpmnProcessInstance } from '../../../yoga/models/bpmn_process_instance_model';
import { BpmnProcessModel } from '../../../yoga/models/bpmn_process_model';

import { mutation } from '../process_instance_resolver';

describe('BpmnProcess', () => {
  its(
    'launch process',
    {
      clear: ['Notification', 'BpmnProcessInstance', 'BpmnProcess', 'Log'],
      user: {
        name: 'Dean'
      }
    },
    async ctx => {
      const role = 'User';
      const lane = { roles: [role], execute: jest.fn() };
      BpmnProcessModel.prototype.getElementList = () => [lane] as any;
      const process = await create.bpmnProcessMutation({ name: 'Test Process' });

      await mutation.launchProcessInstance(null, { input: { processId: process.id, role } }, ctx);

      expect(lane.execute).toHaveBeenCalled();
    }
  );

  its('set process state', {}, async _ctx => {
    testMockedResolver(BpmnProcessInstance, 'setStatus', (args, context, info) => {
      return mutation.setProcessInstanceStatus(null, args, context, info);
    });
  });
});
