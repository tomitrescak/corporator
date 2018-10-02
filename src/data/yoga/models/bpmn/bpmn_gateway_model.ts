import { BpmnProcessInstance, ProcessActionResult } from 'data/yoga/models/bpmn_process_instance_model';
import { FlowNode } from './bpmn_flow_node_model';
import { Lane } from './bpmn_lane_model';
import { SequenceFlow } from './bpmn_sequence_flow_model';

export enum GatewayDirections {
  Unspecified = 'unspecified',
  Converging = 'converging',
  Diverging = 'diverging',
  Mixed = 'mixed'
}

export abstract class Gateway extends FlowNode {
  direction: GatewayDirections;
  default: SequenceFlow;

  defaultId: string;

  constructor(
    gateway: Bpmn.Gateway,
    lane?: Lane,
    incoming?: SequenceFlow[],
    outgoing?: SequenceFlow[],
    defaultFlow?: SequenceFlow
  ) {
    super(gateway, lane, incoming, outgoing);
    this.direction = gateway.direction ? gateway.direction : GatewayDirections.Unspecified;
    this.default = defaultFlow ? defaultFlow : null;
    // store id to link reference to in bpmn process
    this.defaultId = gateway.default ? gateway.default.id : null;
  }

  abstract execute(_state: BpmnProcessInstance, context: ServerContext, result: ProcessActionResult): void;
}
