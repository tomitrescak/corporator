import { BpmnProcessInstance } from 'data/yoga/models/bpmn_process_instance_model';
import { BoundaryEvent } from './bpmn_boundary_event_model';
import { Lane } from './bpmn_lane_model';
import { Task } from './bpmn_task_model';

export class UserTask extends Task {
  constructor(task: Bpmn.UserTask, lane?: Lane, attachedEvents?: BoundaryEvent[]) {
    super(task, lane, attachedEvents);
  }

  async execute(state: BpmnProcessInstance, context: ServerContext) {
    if (context.getUser()) {
      /*const taskInstance = */ await context.db.mutation.createBpmnTaskInstance({
        data: {
          // dateFinished: null,
          dateStarted: new Date(),
          // duration: null,
          // performerId: null,
          data: JSON.parse(JSON.stringify(state.resources)), // clone of properties (not of functions)
          // taskId: this.id,
          // name: this.name,
          // performerRoles: BpmnTaskInstanceCreateperformerRolesInput,
          task: {
            connect: { id: this.id }
          },
          performerRoles: {
            set: this.lane.roles
          },
          performer: {
            connect: {
              id: context.userId
            }
          },
          processInstance: {
            connect: {
              id: state.id
            }
          },
          status: 'Waiting'
        }
      });
    }
  }
}
