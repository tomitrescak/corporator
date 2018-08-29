import { BaseEvent } from './bpmn_base_event_model';
import { Lane } from './bpmn_lane_model';

export abstract class BoundaryEvent extends BaseEvent {
  interrupting: boolean;

  constructor(boundaryEvent: Bpmn.BoundaryEvent, lane?: Lane) {
    super(boundaryEvent, lane);

    this.interrupting = boundaryEvent.interrupting;
  }

  // abstract async trigger(): Promise<Bpmn.ITrigger>;

}
