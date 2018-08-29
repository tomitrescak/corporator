import { BpmnProcessInstance } from 'data/yoga/models/bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from 'data/yoga/models/bpmn_task_instance_model';
import { BoundaryEvent } from './bpmn_boundary_event_model';
import { Task } from './bpmn_task_model';

export class UserTask extends Task {
  constructor(task: Bpmn.UserTask, attachedEvents?: BoundaryEvent[]) {
    super(task, attachedEvents);
  }

  execute(state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]> {
    // new BpmnTaskInstance (formerly action)
    return new Promise<BpmnTaskInstanceModel[]>(resolve => {
      const taskInstance = new BpmnTaskInstanceModel(
        {
          dateStarted: new Date()
        },
        this
      );
      taskInstance.processInstanceId = state.id;

      resolve([taskInstance]);
    });
  }
}
