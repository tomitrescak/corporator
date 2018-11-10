import { create, its, testMockedResolver } from 'data/tests';
import { BpmnProcessInstance } from '../../../yoga/models/bpmn_process_instance_model';
import { BpmnProcessModel } from '../../../yoga/models/bpmn_process_model';

import { mutation } from '../process_instance_resolver';

describe('Bpmn Process Instance Resolver', () => {
  its(
    'Launches a Process Instance',
    {
      clear: ['BpmnTaskInstance', 'BpmnProcessInstance', 'BpmnProcess', 'Log'],
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

  its('Duplicates Process', {}, async _ctx => {
    testMockedResolver(BpmnProcessInstance, 'duplicateInstance', (args, context, info) => {
      return mutation.duplicateProcessInstance(null, args, context, info);
    });
  });

  its('Aborts Process', {}, async _ctx => {
    testMockedResolver(BpmnProcessInstance, 'abortInstance', (args, context, info) => {
      return mutation.abortProcessInstance(null, args, context, info);
    });
  });

  its('Pauses Process', {}, async _ctx => {
    testMockedResolver(BpmnProcessInstance, 'pauseInstance', (args, context, info) => {
      return mutation.pauseProcessInstance(null, args, context, info);
    });
  });

  its('Adds Comment to Process', {}, async _ctx => {
    testMockedResolver(BpmnProcessInstance, 'addComment', (args, context, info) => {
      return mutation.addComment(null, args, context, info);
    });
  });


});
