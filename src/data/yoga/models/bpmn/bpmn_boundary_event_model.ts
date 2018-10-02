import { BpmnProcessInstance, ProcessActionResult } from 'data/yoga/models/bpmn_process_instance_model';
import { BaseEvent } from './bpmn_base_event_model';
import { Lane } from './bpmn_lane_model';

export abstract class BoundaryEvent extends BaseEvent {
  interrupting: boolean;

  constructor(boundaryEvent: Bpmn.BoundaryEvent, lane?: Lane) {
    super(boundaryEvent, lane);

    this.interrupting = boundaryEvent.interrupting;
  }

  execute(state: BpmnProcessInstance, context: ServerContext, result: ProcessActionResult): void {
    result.executed.push(this.id);
    // execute each outgoing flow node
    if(this.outgoing) {
      this.outgoing.forEach(out => {
        out.execute(state, context, result);
      });
    }

    return;
  }
  

}
