import { BaseEvent, FlowNode } from '.';
import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from '../bpmn_task_instance_model';

enum TaskMarkers {
  None = 'none',
  Loop = 'loop',
  MultiInstance = 'multi-instance',
  Compensation = 'compensation'
}

export abstract class Task extends FlowNode {
  marker: TaskMarkers;
  attachedEventId: string;
  attachedEvent: BaseEvent;

  constructor(task: Bpmn.Task, attachedEvent?: BaseEvent) {
    super(task);
    this.marker = task.marker ? task.marker : TaskMarkers.None;
    this.attachedEvent = attachedEvent;

    this.attachedEventId = this.attachedEvent ? this.attachedEvent.id : null;
  }

  abstract execute(state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]>;
}
