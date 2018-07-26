import { BpmnProcessInstance } from 'data/yoga/models/bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from 'data/yoga/models/bpmn_task_instance_model';
import { FlowNode } from './bpmn_flow_node_model';
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

  constructor(gateway: Bpmn.Gateway, defaultFlow?: SequenceFlow) {
    super(gateway);
    this.direction = gateway.direction ? gateway.direction : GatewayDirections.Unspecified;
    this.default = defaultFlow ? defaultFlow : null;
    // store id to link reference to in bpmn process
    this.defaultId = gateway.default ? gateway.default.id : null;
  }

  abstract execute(state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]>;
}
