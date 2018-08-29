import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { BoundaryEvent } from './bpmn_boundary_event_model';
import { Lane } from './bpmn_lane_model';
import { Task } from './bpmn_task_model';

export class ScriptTask extends Task {
  script: string;
  url: string;

  constructor(task: Bpmn.ScriptTask, lane?: Lane, attachedEvents?: BoundaryEvent[]) {
    super(task, lane, attachedEvents);
  
    this.script = task.script;
    this.url = task.url;
  }

  execute(state: BpmnProcessInstance, context: Corpix.Server.Context): void {
    return;
  }
}