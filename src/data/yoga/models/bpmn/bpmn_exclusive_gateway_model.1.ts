import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { Gateway } from './bpmn_gateway_model';
import { Lane } from './bpmn_lane_model';

export class ExclusiveGateway extends Gateway {
  constructor(exclusiveGateway: Bpmn.ExclusiveGateway, lane?: Lane) {
    super(exclusiveGateway, lane);
  }

  execute(_state: BpmnProcessInstance): Promise<Bpmn.ITrigger[]> {
    
    return null;
  }

}