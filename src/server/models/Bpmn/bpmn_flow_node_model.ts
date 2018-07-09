import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from '../bpmn_task_instance_model';
import { BaseElement } from './bpmn_base_element_model';
import { SequenceFlow } from './bpmn_sequence_flow_model';

export abstract class FlowNode extends BaseElement {
  incoming: SequenceFlow[];
  outgoing: SequenceFlow[];

  incomingIds: string[];
  outgoingIds: string[];

  constructor(flowNode: Bpmn.FlowNode, incoming?: SequenceFlow[], outgoing?: SequenceFlow[]) {
    super(flowNode);
    
    this.incomingIds = [];
    this.outgoingIds = [];

    // store incoming/outgoing ids for linkiing references by BpmnProcess
    if(flowNode.incoming) {
      flowNode.incoming.forEach((seq) => {
        this.incomingIds.push(seq.id);
      });
    }
    if(flowNode.outgoing) {
      flowNode.outgoing.forEach((seq) => {
        this.outgoingIds.push(seq.id);
      });
    }

    // linked in bpmn process
    this.incoming = incoming ? incoming : null;
    this.outgoing = outgoing ? outgoing : null;
  }

  abstract execute(state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]>;
}
