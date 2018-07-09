import { Task } from './bpmn_task_model';
import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from '../bpmn_task_instance_model';

export class SendTask extends Task {

  constructor(task: Bpmn.SendTask) {
    super(task);
  }

  execute(state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]> {
    return null;
  }
}