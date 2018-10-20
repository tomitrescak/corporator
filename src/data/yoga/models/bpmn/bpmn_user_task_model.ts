import {
  BpmnProcessInstance,
  ProcessActionResult
} from 'data/yoga/models/bpmn_process_instance_model';
import { BpmnTaskInstanceModel } from '../bpmn_task_instance_model';
import { BoundaryEvent } from './bpmn_boundary_event_model';
import { Lane } from './bpmn_lane_model';
import { Task } from './bpmn_task_model';

export class UserTask extends Task {
  constructor(task: Bpmn.UserTask, lane?: Lane, attachedEvents?: BoundaryEvent[]) {
    super(task, lane, attachedEvents);
  }

  async execute(state: BpmnProcessInstance, context: ServerContext, result: ProcessActionResult) {
    // const user = await context.getUser();

    // if (user) {
    //   const taskInstanceDAO = await context.db.mutation.createBpmnTaskInstance({
    //     data: {
    //       // dateFinished: null,
    //       dateStarted: new Date(),
    //       // duration: null,
    //       // performerId: null,
    //       data: JSON.parse(JSON.stringify(state.resources)), // clone of properties (not of functions)
    //       // taskId: this.id,
    //       // name: this.name,
    //       // performerRoles: BpmnTaskInstanceCreateperformerRolesInput,
    //       task: {
    //         connect: { id: this.id }  // this is not the correct id
    //       },
    //       performerRoles: {
    //         set: this.lane.roles
    //       },
    //       processInstance: {
    //         connect: {
    //           id: state.id
    //         }
    //       },
    //       status: 'Started'
    //     }
    //   });
    //   result.active.push(taskInstanceDAO.id);
    // } else {
    //   throw new Error('Creating New User Task: No User');
    // }
    try {
      // the task Id is not correct. Need to query db?
      const taskInstanceDAO = await BpmnTaskInstanceModel.createInstance(
        context,
        this.id,
        state.id,
        this.lane.roles
      );
      result.active.push(taskInstanceDAO.id);
    } catch (ex) {
      throw ex;
    }
  }
}
