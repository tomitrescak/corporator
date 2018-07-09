import { Task } from './bpmn_task_model';
import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from '../bpmn_task_instance_model';

export class ScriptTask extends Task {
  script: string;
  url: string;

  constructor(task: Bpmn.ScriptTask) {
    super(task);
    this.script = task.script;
    this.url = task.url;
  }

  execute(state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]> {
    return null;
  }
}