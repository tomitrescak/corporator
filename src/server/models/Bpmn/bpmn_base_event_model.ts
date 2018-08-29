import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { FlowNode } from './bpmn_flow_node_model';
import { Lane } from './bpmn_lane_model';

export abstract class BaseEvent extends FlowNode {
  constructor(baseEvent: Bpmn.BaseEvent, lane?: Lane) {
    super(baseEvent, lane);
  }

  abstract execute(state: BpmnProcessInstance, context: Corpix.Server.Context): void;

}
