import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from '../bpmn_task_instance_model';
import { BaseElement } from '.';

export abstract class Event extends BaseElement {

  constructor(event: Bpmn.Event) {
    super(event);

  }

  abstract execute(state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]>;
}
