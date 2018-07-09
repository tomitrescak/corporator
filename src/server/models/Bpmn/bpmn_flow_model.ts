import { BaseElement } from './bpmn_base_element_model';
import { FlowNode } from './bpmn_flow_node_model';

export abstract class Flow extends BaseElement {
  sourceRef: FlowNode;
  targetRef: FlowNode;

  sourceId: string;
  targetId: string;

  constructor(flow: Bpmn.Flow, sourceRef?: FlowNode, targetRef?: FlowNode) {
    super(flow);

    // linked in bpmn process using sourceId
    this.sourceRef = sourceRef ? sourceRef : null;
    this.targetRef = targetRef ? targetRef : null;

    this.sourceId = flow.sourceRef ? flow.sourceRef.id : null;
    this.targetId = flow.targetRef ? flow.targetRef.id : null;
  }

}
