import { BpmnProcessInstance } from 'data/yoga/models/bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from 'data/yoga/models/bpmn_task_instance_model';
import { BaseElement } from './bpmn_base_element_model';
import { FlowNode } from './bpmn_flow_node_model';

export class Lane extends BaseElement {
  nodes: FlowNode[];

  constructor(lane: Bpmn.Lane, nodes?: FlowNode[]) {
    super(lane);
    this.nodes = nodes ? nodes : null;
  }

  execute(_state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]> {
    return null;
  }
} 