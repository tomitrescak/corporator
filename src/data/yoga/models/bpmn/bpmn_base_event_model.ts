import { FlowNode } from './bpmn_flow_node_model';

export abstract class BaseEvent extends FlowNode {

  constructor(baseEvent: Bpmn.BaseEvent) {
    super(baseEvent);
  }
}