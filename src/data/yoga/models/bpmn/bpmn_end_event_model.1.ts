import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { BaseEvent } from './bpmn_base_event_model';
import { Lane } from './bpmn_lane_model';

export class EndEvent extends BaseEvent {
  constructor(endEvent: Bpmn.EndEvent, lane?: Lane) {
    super(endEvent, lane);
  }

  execute(_state: BpmnProcessInstance, _context: ServerContext) {
    return;
  }
}
