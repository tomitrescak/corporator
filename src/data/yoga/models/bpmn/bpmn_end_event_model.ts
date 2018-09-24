import { BpmnProcessInstance } from 'data/yoga/models/bpmn_process_instance_model';
import { BaseEvent } from './bpmn_base_event_model';
import { Lane } from './bpmn_lane_model';

export class EndEvent extends BaseEvent {
  constructor(endEvent: Bpmn.EndEvent, lane?: Lane) {
    super(endEvent, lane);
  }

  execute(state: BpmnProcessInstance, context: ServerContext): void {
    // finish the process
    state.finish(context);
    return;
  }
}
