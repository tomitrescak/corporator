import { BpmnProcessInstance } from 'data/yoga/models/bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from 'data/yoga/models/bpmn_task_instance_model';
import { Gateway } from './bpmn_gateway_model';

export class ExclusiveGateway extends Gateway {
  constructor(exclusiveGateway: Bpmn.ExclusiveGateway) {
    super(exclusiveGateway);
  }

  execute(_state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]> {
    return null;
  }

}