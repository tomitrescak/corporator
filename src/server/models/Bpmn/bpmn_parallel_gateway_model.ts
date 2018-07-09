import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from '../bpmn_task_instance_model';
import { Gateway } from './bpmn_gateway_model';

export class ParallelGateway extends Gateway {
  constructor(parallelGateway: Bpmn.ParallelGateway) {
    super(parallelGateway);
  }

  execute(state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]> {
    return null;
  }

}