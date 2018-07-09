import { Gateway } from './bpmn_gateway_model';
import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from '../bpmn_task_instance_model';

export class ExclusiveGateway extends Gateway {
  constructor(exclusiveGateway: Bpmn.ExclusiveGateway) {
    super(exclusiveGateway);
  }

  execute(state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]> {
    return null;
  }

}