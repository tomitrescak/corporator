import { BpmnProcessInstance, ProcessActionResult } from 'data/yoga/models/bpmn_process_instance_model';
import { Gateway } from './bpmn_gateway_model';
import { Lane } from './bpmn_lane_model';
import { SequenceFlow } from './bpmn_sequence_flow_model';

export default class ParallelGateway extends Gateway {
  nodesToWaitFor: number; // number of incoming flows that have to arrive before the gate can move on

  constructor(
    parallelGateway: Bpmn.ParallelGateway,
    lane?: Lane,
    incoming?: SequenceFlow[],
    outgoing?: SequenceFlow[],
    defaultFlow?: SequenceFlow
  ) {
    super(parallelGateway, lane, incoming, outgoing, defaultFlow);
    this.nodesToWaitFor = this.incomingIds ? this.incomingIds.length : 0;
  }

  execute(state: BpmnProcessInstance, context: ServerContext, result: ProcessActionResult): void {
    // another incoimng node has arrived
    this.nodesToWaitFor--;

    if (this.nodesToWaitFor <= 0) {
      result.executed.push(this.id);
      // all nodes have arrived
      // const ret = [] as Array<Promise<any>>;
      // execute each outgoing node
      this.outgoing.forEach(node => {
        // place returned arrays into a list
        node.execute(state, context, result);
      });
    }
  }
}
