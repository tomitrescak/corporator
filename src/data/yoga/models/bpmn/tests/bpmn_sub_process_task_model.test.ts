import { create, its } from '../../../../tests/index';
import { BpmnProcessInstance, ProcessActionResult } from '../../bpmn_process_instance_model';
import { SubProcessTask } from '../bpmn_sub_process_task_model';

describe('Bpmn User Task', () => {
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

      const bpmnProcess = await create.bpmnProcessMutation();

      const processInstance = await create.bpmnProcessInstanceMutation({
        ownerId: ctx.userId,
        processId: bpmnProcess.id
      });

      const subProcessTask = new SubProcessTask(
        { id: 's', $type: 'subProcessTask', processRef: bpmnProcess.id } as any,
        { roles: ['t'] } as any
      );

      const state = { id: processInstance.id, finish: jest.fn(), resources: {} } as any;

      const result: ProcessActionResult = { active: [], executed: [], processInstance: null };

      // mock BpmnTaskInstanceModel.createInstance
      const object = BpmnProcessInstance as any;
      const property = 'createInstance' as keyof BpmnProcessInstance;
      const original = object[property] as any;

      // mock start() function
      const mockInstance = { start: jest.fn() } as any;

      // mock createInstance()
      object[property] = jest.fn() as any;
      // createInstance() returns object with mocked start()
      (object[property] as any).mockReturnValue(mockInstance);

      await subProcessTask.execute(state, ctx, result);

      // check if createInstance function was called with specified process model, process instance and, context
      expect(object[property]).toHaveBeenCalledWith(subProcessTask.processRef, bpmnProcess, ctx);

      // check if start function was called with context and defined role
      expect(mockInstance.start).toHaveBeenCalledWith(ctx, 't');  

      // reset mock
      object[property] = original;

      expect(result.executed.length).toEqual(1);
      expect(result.executed[0]).toEqual('s');
    }
  );
});
