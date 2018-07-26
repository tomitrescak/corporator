import { BpmnProcessInstance } from 'data/yoga/models/bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from 'data/yoga/models/bpmn_task_instance_model';
import { BaseEvent } from './index';

export class StartEvent extends BaseEvent {
  constructor(startEvent: Bpmn.StartEvent) {
    super(startEvent);
  }

  execute(_state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]> {
    return null;
  }
} 