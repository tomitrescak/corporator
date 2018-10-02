import { BpmnProcessInstance, ProcessActionResult } from 'data/yoga/models/bpmn_process_instance_model';
import { Gateway } from './bpmn_gateway_model';
import { Lane } from './bpmn_lane_model';

export class InclusiveGateway extends Gateway {
  constructor(inclusiveGateway: Bpmn.InclusiveGateway, lane?: Lane) {
    super(inclusiveGateway, lane);
  }

  async execute(_state: BpmnProcessInstance, _context: ServerContext, _result: ProcessActionResult) {
    
    return;
    // if need to pass the flow further down
    // if () {
    //   return this.outgoing[0].execute(state)
    // }
    // return null;

    // async function foo() {
    //   return boo();
    // }

    // async function boo() {
    //   return Promise.all([
    //     timed(10, 50),
    //     timed(30, 100)
    //   ]);
    // }

    // async function timed(wait: number, value: number) {
    //   return new Promise((resolve) => {
    //     setTimeout(() => resolve(value), wait);
    //   });
    // }

    // console.log(await foo());
  }
}
