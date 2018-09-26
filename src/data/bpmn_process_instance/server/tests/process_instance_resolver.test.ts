import { create, its } from 'data/tests';
import { BpmnProcessModel } from '../../../yoga/models/bpmn_process_model';
import { mutation } from '../process_instance_resolver';

describe('BpmnProcess', () => {
  const role = 'User';
  const lane = { roles: [role], execute: jest.fn() };
  BpmnProcessModel.prototype.getElementList = () => [lane] as any;

  its(
    'launch process',
    {
      clear: ['Notification', 'BpmnProcessInstance', 'BpmnProcess', 'Log'],
      user: {
        name: 'Dean'
      }
    },
    async ctx => {
      const process = await create.process(ctx, { name: 'Test Process' });

      await mutation.launchProcessInstance(null, { input: { processId: process.id, role } }, ctx);

      expect(lane.execute).toHaveBeenCalled();
    }
  );
});
