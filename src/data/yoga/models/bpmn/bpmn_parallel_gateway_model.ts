import { BpmnProcessInstance } from 'data/yoga/models/bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from 'data/yoga/models/bpmn_task_instance_model';
import { Gateway } from './bpmn_gateway_model';

export class ParallelGateway extends Gateway {
  constructor(parallelGateway: Bpmn.ParallelGateway) {
    super(parallelGateway);
  }

  execute(_state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]> {
    return null;
  }

}