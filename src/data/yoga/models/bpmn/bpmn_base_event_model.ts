import { BpmnProcessInstance, ProcessActionResult } from 'data/yoga/models/bpmn_process_instance_model';
import { FlowNode } from './bpmn_flow_node_model';
import { Lane } from './bpmn_lane_model';

export abstract class BaseEvent extends FlowNode {
  constructor(baseEvent: Bpmn.BaseEvent, lane?: Lane) {
    super(baseEvent, lane);
  }

  abstract execute(_state: BpmnProcessInstance, context: ServerContext, result: ProcessActionResult): void;
}
