import {
  BpmnProcessInstance,
  ProcessActionResult
} from 'data/yoga/models/bpmn_process_instance_model';
import { BoundaryEvent } from './bpmn_boundary_event_model';
import { Lane } from './bpmn_lane_model';
import { Task } from './bpmn_task_model';

export class UserTask extends Task {
  constructor(task: Bpmn.UserTask, lane?: Lane, attachedEvents?: BoundaryEvent[]) {
    super(task, lane, attachedEvents);
  }

  async execute(state: BpmnProcessInstance, context: ServerContext, result: ProcessActionResult) {
    await context.getUser();

    // TODO: Think what will happen when you change the role name!!!
    // const role = user.roles.find(r => this.lane.roles.includes(r));

    const taskInstance = await context.db.mutation.createBpmnTaskInstance({
      data: {
        // dateFinished: null,
        dateStarted: new Date(),
        // duration: null,
        // performerId: null,
        data: JSON.parse(JSON.stringify(state.resources)), // clone of properties (not of functions)
        // taskId: this.id,
        // name: this.name,
        // performerRoles: BpmnTaskInstanceCreateperformerRolesInput,
        taskId: this.id,
        // performerRoleId: role,
        performerId: context.userId,
        processInstanceId: state.id,
        status: 'Started'
      }
    });

    result.active.push(taskInstance.id);
  }
}
