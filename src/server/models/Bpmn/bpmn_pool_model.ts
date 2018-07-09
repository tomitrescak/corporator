import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from '../bpmn_task_instance_model';
import { BaseElement } from './bpmn_base_element_model';
import { Lane } from './bpmn_lane_model';

export class Pool extends BaseElement {
  lanes: Lane[];
  constructor(pool: Bpmn.Pool, lane?: Lane[]) {
    super(pool);
    this.lanes = lane? lane: null;
  }

  execute(state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]> {
    return null;
  }
} 