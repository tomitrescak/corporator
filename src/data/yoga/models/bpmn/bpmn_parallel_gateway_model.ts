import { BpmnProcessInstance } from 'data/yoga/models/bpmn_process_instance_model';
import { Gateway } from './bpmn_gateway_model';
import { Lane } from './bpmn_lane_model';

export class ParallelGateway extends Gateway {
  nodesToWaitFor: number; // number of incoming flows that have to arrive before the gate can move on

  constructor(parallelGateway: Bpmn.ParallelGateway, lane?: Lane) {
    super(parallelGateway, lane);
    this.nodesToWaitFor = this.incomingIds ? this.incomingIds.length : 0;
  }

  execute(_state: BpmnProcessInstance, context: ServerContext): void {
    // another incoimng node has arrived
    this.nodesToWaitFor--;

    if (this.nodesToWaitFor <= 0) {
      // all nodes have arrived
      // const ret = [] as Array<Promise<any>>;
      // execute each outgoing node
      this.outgoing.forEach(node => {
        // place returned arrays into a list
        node.execute(_state, context);
      });
    }

    return null;
  }
}
