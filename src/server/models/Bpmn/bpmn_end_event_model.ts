import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from '../bpmn_task_instance_model';
import { FlowNode } from './bpmn_flow_node_model';

export class EndEvent extends FlowNode {
  constructor(endEvent: EndEvent) {
    super(endEvent);    
  }

  execute(state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]> {
    // reached end of execution line
    return null;
  }
} 