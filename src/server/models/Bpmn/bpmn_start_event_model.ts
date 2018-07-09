import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from '../bpmn_task_instance_model';
import { BaseEvent } from './index';

export class StartEvent extends BaseEvent {
  constructor(startEvent: Bpmn.StartEvent) {
    super(startEvent);
  }

  execute(state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]> {
    return null;
  }
} 