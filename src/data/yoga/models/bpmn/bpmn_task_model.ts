import { BpmnProcessInstance } from 'data/yoga/models/bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from 'data/yoga/models/bpmn_task_instance_model';
import { BoundaryEvent } from './bpmn_boundary_event_model';
import { FlowNode } from './bpmn_flow_node_model';

export enum TaskMarkers {
  None = 'none',
  Loop = 'loop',
  MultiInstance = 'multi-instance',
  Compensation = 'compensation'
}

export class Task extends FlowNode {
  marker: TaskMarkers;

  // may not bee needed; may be handled by the event.outgoing
  attachedEventIds: string[];
  attachedEvents: BoundaryEvent[];

  constructor(task: Bpmn.Task, attachedEvents?: BoundaryEvent[]) {
    super(task);
    this.marker = task.marker ? task.marker : TaskMarkers.None;
    
    this.attachedEventIds = [];
    if(task.attachedEvents) {
      task.attachedEvents.forEach((ev) => {
        this.attachedEventIds.push(ev.id);
      });
    }

    this.attachedEvents = attachedEvents ? attachedEvents : null;
  }

  execute(_state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]> {
    return null;
  }
}
