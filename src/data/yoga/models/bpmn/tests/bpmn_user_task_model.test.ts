import { create, its } from '../../../../tests/index';
import { ProcessActionResult } from '../../bpmn_process_instance_model';
import { UserTask } from '../bpmn_user_task_model';

describe('Bpmn User Task', () => {
  it('does not execute without a user', async () => {
    const userTask = new UserTask({ $type: 'userTask' } as any);

    const state = { finish: jest.fn() } as any;
    const context = {
      getUser: () => {
        /*returns undefined*/
      }
    } as any;
    const result: ProcessActionResult = { active: [], executed: [], processInstance: null };
    let error = null;

    try {
      await userTask.execute(state, context, result);
    } catch (ex) {
      error = ex;
    }
    expect(error).toEqual(new Error('Creating New User Task: No User'));
  });

  its(
    'executes and adds to active list',
    {
      clear: ['BpmnTaskInstance'],
      user: {
        uid: 'u1',
        name: 'user1'
      }
    },
    async ctx => {
      const bpmnProcess = await create.process(ctx);

      const processInstance = await ctx.db.mutation.createBpmnProcessInstance({
        data: {
          dateStarted: new Date(),
          data: {},
          status: 'Running',
          owner: {
            connect: {
              id: ctx.userId
            }
          },
          process: {
            connect: {
              id: bpmnProcess.id
            }
          }
        }
      });

      const userTask = new UserTask({ $type: 'userTask' } as any, { roles: ['role1'] } as any);

      const state = { id: processInstance.id, finish: jest.fn(), resources: {} } as any;

      const result: ProcessActionResult = { active: [], executed: [], processInstance: null };
      
      await userTask.execute(state, ctx, result);
      
      expect(result.active.length).toEqual(1);
    }
  );
});
