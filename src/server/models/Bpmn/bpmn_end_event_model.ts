import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from '../bpmn_task_instance_model';
import { BaseEvent } from './bpmn_base_event_model';

export class EndEvent extends BaseEvent {
  constructor(endEvent: EndEvent) {
    super(endEvent);    
  }

  execute(state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]> {
    // reached end of execution line
    return null;
  }
} 