import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from '../bpmn_task_instance_model';
import { BoundaryEvent } from './bpmn_boundary_event_model';
import { Task } from './bpmn_task_model';

export class ScriptTask extends Task {
  script: string;
  url: string;

  constructor(task: Bpmn.ScriptTask, attachedEvents?: BoundaryEvent[]) {
    super(task, attachedEvents);
  
    this.script = task.script;
    this.url = task.url;
  }

  execute(state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]> {
    return null;
  }
}