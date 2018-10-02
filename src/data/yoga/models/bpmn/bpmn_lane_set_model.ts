import { BpmnProcessInstance, ProcessActionResult } from 'data/yoga/models/bpmn_process_instance_model';
import { BaseElement } from './bpmn_base_element_model';
import { Lane } from './bpmn_lane_model';

export class LaneSet extends BaseElement {
  lanes: Lane[];

  lanesIds: string[];

  constructor(laneSet: Bpmn.LaneSet, lanes?: Lane[]) {
    super(laneSet);

    this.lanesIds = [];

    // store incoming/outgoing ids for linkiing references by BpmnProcess
    if(laneSet.lanes) {
      laneSet.lanes.forEach((lane) => {
        this.lanesIds.push(lane.id);
      });
    }

    this.lanes = lanes? lanes: [];
  }

  async execute(_state: BpmnProcessInstance, _context: ServerContext, _result: ProcessActionResult) {
    // this.lanes.forEach(lane => {
    //   lane.execute(state, context, result);
    // });
  }

} 