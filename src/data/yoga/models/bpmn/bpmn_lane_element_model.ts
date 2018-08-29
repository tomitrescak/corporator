import { BpmnProcessInstance } from 'data/yoga/models/bpmn_process_instance_model';
import { BaseElement } from './bpmn_base_element_model';
import { Lane } from './bpmn_lane_model';


export abstract class LaneElement extends BaseElement {
  lane: Lane;

  constructor(laneElement: Bpmn.LaneElement, lane?: Lane) {
    super(laneElement);
    this.lane = lane? lane : null;
  }

  abstract execute(_state: BpmnProcessInstance, context: Corpix.Server.Context): void;
}