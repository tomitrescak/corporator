import { BpmnProcessInstance, ProcessActionResult } from 'data/yoga/models/bpmn_process_instance_model';
import { BoundaryEvent } from './bpmn_boundary_event_model';
import { FlowNode } from './bpmn_flow_node_model';
import { Lane } from './bpmn_lane_model';

export enum TaskMarkers {
  None = 'none',
  Loop = 'loop',
  MultiInstance = 'multi-instance',
  Compensation = 'compensation'
}

export abstract class Task extends FlowNode {
  marker?: TaskMarkers;

  // may not be needed; may be handled by the event.outgoing
  attachedEventIds: string[];
  interruptEventId: string;
  // may need to split into array of non-interrupting and 1 variable of interrupting

  attachedEvents?: BoundaryEvent[];
  interruptEvent?: BoundaryEvent;

  constructor(task: Bpmn.Task, lane?: Lane, attachedEvents?: BoundaryEvent[]) {
    super(task, lane);
    this.marker = task.marker ? task.marker : TaskMarkers.None;

    this.attachedEventIds = [];
    if (task.attachedEvents) {
      task.attachedEvents.forEach(ev => {
        if (ev.interrupting) {
          // add event to single interrupt var
          this.interruptEventId = ev.id;
        } else {
          // add event to list of non interrupt events
          this.attachedEventIds.push(ev.id);
        }
      });
    }

    if (attachedEvents) {
      // add boundary events to list and interrupting event if found
      this.attachedEvents = [];
      attachedEvents.forEach(ev => {
        if (ev.interrupting) {
          // event in interrupting
          this.interruptEvent = ev;
        } else {
          // event is non-interrupting
          this.attachedEvents.push(ev);
        }
      });
    } else {
      this.attachedEvents = null;
    }
  }

  abstract execute(_state: BpmnProcessInstance, context: ServerContext, result: ProcessActionResult): void;
}
