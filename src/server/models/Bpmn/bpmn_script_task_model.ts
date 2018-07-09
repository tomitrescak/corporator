import { BaseEvent, Task } from '.';
import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from '../bpmn_task_instance_model';

export class ScriptTask extends Task {
  script: string;
  url: string;

  constructor(task: Bpmn.ScriptTask, attachedEvent?: BaseEvent) {
    super(task, attachedEvent);
  
    this.script = task.script;
    this.url = task.url;
  }

  execute(state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]> {
    return null;
  }
}