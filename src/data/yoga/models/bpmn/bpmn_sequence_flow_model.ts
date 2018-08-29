import { BpmnProcessInstance } from 'data/yoga/models/bpmn_process_instance_model';
import { Flow } from './bpmn_flow_model';
import { FlowNode } from './bpmn_flow_node_model';
import { Lane } from './bpmn_lane_model';

export class SequenceFlow extends Flow {

  constructor(sequenceFlow: Bpmn.SequenceFlow, lane?: Lane, sourceRef?: FlowNode, targetRef?: FlowNode) {
    super(sequenceFlow, lane, sourceRef, targetRef);
  }

  execute(_state: BpmnProcessInstance, context: Corpix.Server.Context): void {
    this.targetRef.execute(_state, context);
  }
}
