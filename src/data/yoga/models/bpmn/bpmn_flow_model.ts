import { BpmnProcessInstance, ProcessActionResult } from 'data/yoga/models/bpmn_process_instance_model';
import { FlowNode } from './bpmn_flow_node_model';
import { LaneElement } from './bpmn_lane_element_model';
import { Lane } from './bpmn_lane_model';

export abstract class Flow extends LaneElement {
  sourceRef: FlowNode;
  targetRef: FlowNode;

  sourceId: string;
  targetId: string;

  constructor(flow: Bpmn.Flow, lane?: Lane, sourceRef?: FlowNode, targetRef?: FlowNode) {
    super(flow, lane);

    // linked in bpmn process using sourceId
    this.sourceRef = sourceRef ? sourceRef : null;
    this.targetRef = targetRef ? targetRef : null;

    this.sourceId = flow.sourceRef ? flow.sourceRef.id : null;
    this.targetId = flow.targetRef ? flow.targetRef.id : null;
  }

  abstract execute(_state: BpmnProcessInstance, context: ServerContext, result: ProcessActionResult): void;

}
