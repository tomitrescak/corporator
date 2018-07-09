import { Gateway } from './bpmn_gateway_model';
import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from '../bpmn_task_instance_model';

export class ParallelGateway extends Gateway {
  constructor(ParallelGateway: Bpmn.ParallelGateway) {
    super(ParallelGateway);
  }

  execute(state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]> {
    return null;
  }

}