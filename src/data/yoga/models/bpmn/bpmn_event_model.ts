import { BpmnProcessInstance } from 'data/yoga/models/bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from 'data/yoga/models/bpmn_task_instance_model';
import { BaseElement } from './index';

export abstract class Event extends BaseElement {

  constructor(event: any) {
    super(event);

  }

  abstract execute(state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]>;
}
