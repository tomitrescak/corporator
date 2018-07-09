import { BaseEvent, Task } from '.';
import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from '../bpmn_task_instance_model';

export class DefaultTask extends Task {

  constructor(task: Bpmn.Task, attachedEvent?: BaseEvent) {
    super(task, attachedEvent);
  }

  execute(state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]> {
    return null;
  }
}
