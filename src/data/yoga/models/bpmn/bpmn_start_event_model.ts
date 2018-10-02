import { BpmnProcessInstance, ProcessActionResult } from '../bpmn_process_instance_model';
import { BaseEvent } from './bpmn_base_event_model';
import { Lane } from './bpmn_lane_model';

export class StartEvent extends BaseEvent {
  constructor(startEvent: Bpmn.StartEvent, lane?: Lane) {
    super(startEvent, lane);
  }

  async execute(state: BpmnProcessInstance, context: ServerContext, result: ProcessActionResult) {
    result.executed.push(this.id);
    
    // execute each outgoing node
    this.outgoing.forEach(node => {
      // place returned arrays into a list
      node.execute(state, context, result);
    });
  }
}
