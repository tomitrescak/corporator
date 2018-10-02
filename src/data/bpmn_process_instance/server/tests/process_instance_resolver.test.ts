import { create, its } from 'data/tests';
import { BpmnProcessModel } from 'data/yoga/models/bpmn_process_model';
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

  its(
    'set process state',
    {
      clear: ['BpmnProcessInstance', 'BpmnProcess', 'Log'],
      user: {
        name: 'Dean'
      }
    },
    async ctx => {
      const process = await create.bpmnProcessMutation({ name: 'Test Process' });

      const pInstanceDAO = await mutation.setProcessInstanceStatus(
        null,
        { input: { processId: process.id, status: 'Finished' } },
        ctx
      );

      expect(pInstanceDAO.status.toEqual('Finished'));
    }
  );

  its(
    'set process state and updates task instances',
    {
      clear: ['BpmnProcessInstance', 'BpmnProcess', 'Log'],
      user: {
        name: 'Dean'
      }
    },
    async ctx => {
      // create task instances
      // const process = await create.process(ctx, { name: 'Test Process' });
      // const pInstanceDAO = await mutation.setProcessInstanceStatus(null, { input: { processId: process.id, status: 'Finished' } }, ctx);
      // expect(pInstanceDAO.status.toEqual('Finished'));
      // check if task instances status' have changed
    }
  );
});
