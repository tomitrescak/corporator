import { BpmnProcessInstance, ProcessActionResult } from 'data/yoga/models/bpmn_process_instance_model';
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

  execute(_state: BpmnProcessInstance, _context: ServerContext, result: ProcessActionResult): void {
    result.executed.push(this.id);

    return;
  }
}
