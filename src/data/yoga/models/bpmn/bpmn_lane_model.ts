import { BpmnProcessInstance, ProcessActionResult } from 'data/yoga/models/bpmn_process_instance_model';
import { Dictionary } from 'typescript-collections';
import { BaseElement } from './bpmn_base_element_model';
import { LaneElement } from './bpmn_lane_element_model';

export class Lane extends BaseElement {
  nodes: Dictionary<string, Dictionary<string, LaneElement>>;
  roles: string[];

  nodeIds: string[];

  constructor(lane: Bpmn.Lane, nodes?: Dictionary<string, Dictionary<string, LaneElement>>) {
    super(lane);

    this.nodeIds = [];

    // store incoming/outgoing ids for linkiing references by BpmnProcess
    if (lane.nodes) {
      lane.nodes.forEach(node => {
        this.nodeIds.push(node.id);
      });
    }

    this.nodes = nodes ? nodes : new Dictionary<string, Dictionary<string, LaneElement>>();
    this.roles = this.name.split(' |,');
    
    // lane.roles is unused
    // if(lane.roles) {
    //   this.roles = lane.roles.roles
    // }
  }

  execute(_state: BpmnProcessInstance, _context: ServerContext, _result: ProcessActionResult) {
    // execute the entry point
    return;
  }
}
