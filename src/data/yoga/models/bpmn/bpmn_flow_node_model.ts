import { BpmnProcessInstance, ProcessActionResult } from '../bpmn_process_instance_model';
import { LaneElement } from './bpmn_lane_element_model';
import { Lane } from './bpmn_lane_model';
import { SequenceFlow } from './bpmn_sequence_flow_model';

export abstract class FlowNode extends LaneElement {
  incoming: SequenceFlow[];
  outgoing: SequenceFlow[];

  incomingIds: string[];
  outgoingIds: string[];

  constructor(
    flowNode: Bpmn.FlowNode,
    lane?: Lane,
    incoming?: SequenceFlow[],
    outgoing?: SequenceFlow[]
  ) {
    super(flowNode, lane);

    this.incomingIds = [];
    this.outgoingIds = [];

    // store incoming/outgoing ids for linkiing references by BpmnProcess
    if (flowNode.incoming) {
      flowNode.incoming.forEach(seq => {
        this.incomingIds.push(seq.id);
      });
    }
    if (flowNode.outgoing) {
      flowNode.outgoing.forEach(seq => {
        this.outgoingIds.push(seq.id);
      });
    }

    // linked in bpmn process
    this.incoming = incoming ? incoming : null;
    this.outgoing = outgoing ? outgoing : null;
  }

  abstract execute(state: BpmnProcessInstance, context: ServerContext, result: ProcessActionResult): void;
}
