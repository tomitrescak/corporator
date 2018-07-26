import { BaseEvent } from './bpmn_base_event_model';

export abstract class BoundaryEvent extends BaseEvent {
  
  constructor(boundaryEvent: Bpmn.BoundaryEvent) {
    super(boundaryEvent);
  }
}