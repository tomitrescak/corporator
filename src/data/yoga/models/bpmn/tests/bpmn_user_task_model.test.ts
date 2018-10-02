import { its } from '../../../../tests/index';
import { ProcessActionResult } from '../../bpmn_process_instance_model';
import { UserTask } from '../bpmn_user_task_model';

describe('Bpmn User Task', () => {
  it('executes', () => {
    const userTask = new UserTask({ $type: 'userTask' } as any);

    const state = { finish: jest.fn() } as any;
    // unused arguments
    const context = {} as any;
    const result: ProcessActionResult = { active: [], executed: [], processInstance: null };

    userTask.execute(state, context, result);
  });

  its('adds to active list', 
  {
    clear: ['BpmnTaskInstance'],
    user: {
      name: 'user1'
    }
  },
   async ctx => {
    const userTask = new UserTask({ $type: 'userTask' } as any);

    const state = { finish: jest.fn() } as any;
    
    const result: ProcessActionResult = { active: [], executed: [], processInstance: null };

    userTask.execute(state, ctx, result);

    expect(result.active.length).toEqual(1);
  });
});
