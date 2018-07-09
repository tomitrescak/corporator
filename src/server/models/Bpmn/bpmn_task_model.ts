import { FlowNode } from './bpmn_flow_node_model';
import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from '../bpmn_task_instance_model';

enum TaskMarkers {
  None = 'none',
  Loop = 'loop',
  MultiInstance = 'multi-instance',
  Compensation = 'compensation'
}

export abstract class Task extends FlowNode {
  marker: TaskMarkers;

  constructor(task: Bpmn.Task) {
    super(task);
    this.marker = task.marker ? task.marker : TaskMarkers.None;
  }

  abstract execute(state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]>;
}
