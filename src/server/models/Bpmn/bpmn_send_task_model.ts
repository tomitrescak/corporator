import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { BoundaryEvent } from './bpmn_boundary_event_model';
import { Lane } from './bpmn_lane_model';
import { Task } from './bpmn_task_model';

export class SendTask extends Task {

  constructor(task: Bpmn.SendTask, lane?: Lane, attachedEvents?: BoundaryEvent[]) {
    super(task, lane, attachedEvents);
  }

  execute(state: BpmnProcessInstance, context: Corpix.Server.Context): void {
    return;
  }
}