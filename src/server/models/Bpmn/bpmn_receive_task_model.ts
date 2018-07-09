import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from '../bpmn_task_instance_model';
import { BoundaryEvent } from './bpmn_boundary_event_model';
import { Task } from './bpmn_task_model';

export class ReceiveTask extends Task {

  constructor(task: Bpmn.ReceiveTask, attachedEvents?: BoundaryEvent[]) {
    super(task, attachedEvents);
  }

  execute(state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]> {
    return null;
  }
}