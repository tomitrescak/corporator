import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from '../bpmn_task_instance_model';

export abstract class BaseElement {
  id: string;
  name: string;
  $type: string;
  description: string;

  constructor(baseElement: Bpmn.BaseElement) {

    this.id = baseElement.id;
    this.name = baseElement.name;
    this.$type = baseElement.$type.toLowerCase();
    this.description = baseElement.description;
  }

  abstract execute(state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]>;
}
