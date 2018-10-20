import { create, its, testMockedResolver } from '../../../../tests/index';
import { ProcessActionResult } from '../../bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from '../../bpmn_task_instance_model';
import { UserTask } from '../bpmn_user_task_model';

describe('Bpmn User Task', () => {
  it('does not execute without a user', async () => {
    const userTask = new UserTask({ $type: 'userTask' } as any, { roles: ['role1'] } as any);

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
    expect(error).toEqual(new Error('Cannot create Task Instance: No User'));
  });

  its(
    'executes and adds to active list',
    {
      // clear: ['User','BpmnTaskInstance'],
      user: {
        uid: 'u1',
        name: 'user1'
      }
    },
    async ctx => {
      // expect(true).toBe(false);
      
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

      // mock BpmnTaskInstanceModel.createInstance
      const object = BpmnTaskInstanceModel as any;
      const property = 'createInstance' as keyof BpmnTaskInstanceModel;
      const original = object[property] as any;
      
      object[property] = jest.fn() as any;
      object[property].mockReturnValue({id: 't'});

      await userTask.execute(state, ctx, result);

      expect(object[property]).toHaveBeenCalledWith(ctx, userTask.id, state.id, userTask.lane.roles);
      
      object[property] = original;


      expect(result.active.length).toEqual(1);
      expect(result.active[0]).toEqual('t');
    }
  );
});
