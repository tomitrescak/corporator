import { FlowNode } from './bpmn_flow_node_model';
import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from '../bpmn_task_instance_model';

export class StartEvent extends FlowNode {
  constructor(startEvent: Bpmn.StartEvent) {
    super(startEvent);
  }

  execute(state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]> {
    return null;
  }
} 