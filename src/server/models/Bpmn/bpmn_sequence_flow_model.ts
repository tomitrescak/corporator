import { FlowNode } from './bpmn_flow_node_model';
import { BpmnProcessInstance } from '../bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from '../bpmn_task_instance_model';
import { Flow } from './bpmn_flow_model';

export class SequenceFlow extends Flow {

  constructor(sequenceFlow: Bpmn.SequenceFlow, sourceRef?: FlowNode, targetRef?: FlowNode) {
    super(sequenceFlow, sourceRef, targetRef);
  }

  execute(state: BpmnProcessInstance): Promise<BpmnTaskInstanceModel[]> {
    return this.targetRef.execute(state);
  }
}
