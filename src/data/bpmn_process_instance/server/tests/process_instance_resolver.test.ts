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
      const process = await create.bpmnProcessMutation({
        name: 'Test Process',
        createdById: ctx.userId
      });

      await mutation.launchProcessInstance(null, { input: { processId: process.id, role } }, ctx);

      expect(lane.execute).toHaveBeenCalled();
    }
  );

  // its('tests owner resolver', { user: { name: 'Tomi' } }, async ctx => {
  //   let p = await create.bpmnProcessMutation({
  //     publicationStatus: 'Published',
  //     name: 'Process 1',
  //     readRole: 'user'
  //   });

  //   const user = await ctx.getUser();

  //   let d = await create.bpmnProcessInstanceMutation({
  //     ownerId: user.id,
  //     processId: p.id,
  //     data: '{}',
  //     comments: {
  //       create: [{ userId: user.id, text: '12345', date: create.date() }]
  //     }
  //   });

  //   const pid = await query.bpmnProcessInstanceQuery(
  //     null,
  //     { id: d.id },
  //     ctx,
  //     `{
  //     id
  //     owner {
  //       id
  //     }
  //   }`
  //   );

  //   console.log(pid);

  //   expect(2).toBe(3);
  // });
});
