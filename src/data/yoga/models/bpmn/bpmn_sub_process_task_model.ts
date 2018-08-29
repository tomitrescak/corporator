import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { BoundaryEvent } from './bpmn_boundary_event_model';
import { Lane } from './bpmn_lane_model';
import { Task } from './bpmn_task_model';

export class SubProcessTask extends Task {

  processRef: string;
  
  constructor(task: Bpmn.SubProcessTask, lane?: Lane, attachedEvents?: BoundaryEvent[]) {
    super(task, lane, attachedEvents);
    this.processRef = task.processRef;
  }

  execute(_state: BpmnProcessInstance, context: Corpix.Server.Context): void {
    // create new process instance using context and start instance
    return null;
  }
}