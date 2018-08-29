import { BpmnProcessInstance } from 'data/yoga/models/bpmn_process_instance_model';
import { BoundaryEvent } from './bpmn_boundary_event_model';
import { Lane } from './bpmn_lane_model';
import { Task } from './bpmn_task_model';

export class UserTask extends Task {

  constructor(task: Bpmn.UserTask, lane?: Lane, attachedEvents?: BoundaryEvent[]) {
    super(task, lane, attachedEvents);
  }

  execute(_state: BpmnProcessInstance, context: Corpix.Server.Context): void {
    // new BpmnTaskInstance (formerly action)
    // Corpix.Server.TaskInstances.createTaskInstance();
    // return new Promise<BpmnTaskInstanceModel[]>((resolve, reject) => {
    //   const taskInstance = new BpmnTaskInstanceModel({
    //     id: null, // where does the id come from?
    //     processInstanceId: state.id,
    //     performerId: null,
    //     performerRoles: this.lane.roles,
    //     dateStarted: new Date(),
    //     dateFinished: null,
    //     duration: null,
    //     snapshot: null // JSON.stringify(state)? the snapshot is the state right?
    //   }, this);
      
    //   resolve([taskInstance]);
    // });
  }
}
