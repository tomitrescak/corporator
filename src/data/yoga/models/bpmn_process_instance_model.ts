import { Prisma } from 'data/prisma';
import { Yoga } from 'data/yoga';
import { Lane } from './bpmn/bpmn_lane_model';
import { BpmnProcessModel, BpmnTypes } from './bpmn_process_model';
import { BpmnTaskInstanceModel } from './bpmn_task_instance_model';

export type ProcessActionResult = {
  /**
   * List of active task instances (BpmnTaskInstance.task.id)
   */
  active: string[];
  /**
   * List of ids of executed base elements
   */
  executed: string[];
  processInstance: BpmnProcessInstance;
};

export class BpmnProcessInstance {
  static async duplicateInstance(
    processInstanceId: string,
    context: ServerContext,
    info?: any
  ): Promise<Prisma.BpmnProcessInstance> {
    // retrieve and build process model
    const processInstanceDAO = await context.db.query.bpmnProcessInstance({
      where: {
        id: processInstanceId
      }
    });

    // const newData =

    const newProcessInstanceDAO = await context.db.mutation.createBpmnProcessInstance(
      {
        data: {
          dateStarted: new Date(),
          duration: 0,
          data: processInstanceDAO.data
            ? JSON.parse(JSON.stringify(processInstanceDAO.data))
            : null,
          status: 'Running',

          owner: {
            connect: {
              id: context.userId
            }
          },
          process: {
            connect: {
              id: processInstanceDAO.process.id
            }
          }
        }
      },
      info
    );

    return newProcessInstanceDAO;
  }

  static async createInstance(
    processId: string,
    processModel: BpmnProcessModel,
    context: ServerContext
  ): Promise<BpmnProcessInstance> {
    // create new process instance dao using context.db
    // create object with dao and given process model
    const processInstanceDAO = await context.db.mutation.createBpmnProcessInstance(
      {
        data: {
          // dateFinished: null,
          dateStarted: new Date(),
          // duration: null,
          ownerId: context.userId,
          data: '{}',
          status: 'Running',
          processId
        }
      },
      `{
      id
      dateStarted
      owner
      status
      process {
        id
        access
        actionCount
        dataDescriptors
        description
        model
        name
        type
        resources
        status
        version
        versions
      }
    } `
    );

    const processInstance = new BpmnProcessInstance(processInstanceDAO, processModel);
    return processInstance;
  }

  static async pauseInstance(
    processInstanceId: string,
    context: ServerContext,
    info?: any
  ): Promise<Prisma.BpmnProcessInstance> {
    /* 
      set status of process instance and waiting task instances to paused 
      send email to people...

    */
    const processInstanceDAO = await BpmnProcessInstance.setStatus(
      context,
      processInstanceId,
      'Paused',
      info
    );
    const stakeholders = await context.db.query.users({
      where: {
        processes_every: {
          id: processInstanceId
        }
      }
    });

    if (stakeholders) {
      stakeholders.forEach(stakeholder => {
        // send email?
      });
    }

    return processInstanceDAO;
  }

  static async abortInstance(
    processInstanceId: string,
    context: ServerContext,
    info?: any
  ): Promise<Prisma.BpmnProcessInstance> {
    return BpmnProcessInstance.setStatus(context, processInstanceId, 'Aborted', info);
  }

  static async finishInstance(
    processInstanceId: string,
    context: ServerContext,
    info?: any
  ): Promise<Prisma.BpmnProcessInstance> {
    return BpmnProcessInstance.setStatus(context, processInstanceId, 'Finished', info);
  }

  static async addComment(
    processInstanceId: string,
    context: ServerContext,
    comment: string,
    replyTo?: string,
    info?: any
  ): Promise<Prisma.BpmnProcessInstance> {
    /* add comment to array */
    return context.db.mutation.updateBpmnProcessInstance(
      {
        where: {
          id: processInstanceId
        },
        data: {
          comments: {
            create: {
              text: comment,
              date: new Date(),
              replyTo: replyTo ? replyTo : null,
              user: {
                connect: {
                  id: context.userId
                }
              }
            }
          }
        }
      },
      info
    );
  }

  private static async setStatus(
    ctx: ServerContext,
    processInstanceId: string,
    status: Yoga.BpmnProcessInstanceStatus,
    info?: any
  ) {
    const processInstanceDAO = await ctx.db.mutation.updateBpmnProcessInstance(
      {
        where: {
          id: processInstanceId
        },
        data: {
          status
        }
      },
      info
    );

    // update all taskInstanceDAOs of this process
    const taskInstanceDAOs = await ctx.db.query.bpmnTaskInstances({
      where: {
        processInstanceId
      }
    });

    if (taskInstanceDAOs) {
      let newTaskInstanceStatus: Prisma.BpmnTaskInstanceStatus;

      switch (status) {
        case 'Running':
          newTaskInstanceStatus = 'Started';
          break;
        case 'Paused':
          newTaskInstanceStatus = 'Paused';
          break;
        case 'Aborted':
          newTaskInstanceStatus = 'Aborted';
          break;
        case 'Finished':
          // process is done, we can abort any incomplete tasks
          newTaskInstanceStatus = 'Aborted';
          break;
      }

      taskInstanceDAOs.forEach(async (taskInstance: Prisma.BpmnTaskInstance) => {
        // only 'Started' and 'paused' tasks can change their status
        if (taskInstance.status !== 'Started' && taskInstance.status !== 'Paused') {
          // do not override status if it is Approved, Rejected, Finished or Aborted
          return;
        }
        await BpmnTaskInstanceModel.setStatus(ctx, taskInstance.id, newTaskInstanceStatus);
      });
    }

    return processInstanceDAO;
  }

  id: string;
  processId: string;
  processModel: BpmnProcessModel;
  resources: any; // JSON
  data: any; // JSON
  ownerId: string;
  status: Prisma.BpmnProcessInstanceStatus;
  dateStarted: Date;
  dateFinished: Date;
  duration: number;

  constructor(
    instanceModelDao: Partial<Prisma.BpmnProcessInstance>,
    processModel: BpmnProcessModel
  ) {
    this.id = instanceModelDao.id;
    // this.processId = instanceModelDao.processId;
    this.processModel = processModel;
    // this.resources = JSON.parse(instanceModelDao.resources);
    this.ownerId = instanceModelDao.ownerId;
    this.status = instanceModelDao.status;
    this.dateStarted = new Date(instanceModelDao.dateStarted);
    this.dateFinished = new Date(instanceModelDao.dateFinished);
    this.duration = instanceModelDao.duration;

    processModel ? (this.processModel = processModel) : null;
  }

  async start(context: ServerContext, role: string): Promise<ProcessActionResult> {
    /* 
      set status to running
      execute each lane?
    */
    await context.db.mutation.updateBpmnProcessInstance({
      data: {
        status: 'Running'
      },
      where: {
        id: this.id
      }
    });

    const result: ProcessActionResult = {
      active: [],
      executed: [],
      processInstance: this
    };

    this.processModel
      .getElementList<Lane>(BpmnTypes.Lane)
      .find(l => l.roles.some(r => r === role))
      .execute(this, context, result);

    return result;
  }

  async pause(context: ServerContext) {
    /* 
      set status to paused 
      need to control relevant task instances and sub processes?
    */
    await context.db.mutation.updateBpmnProcessInstance({
      data: {
        status: 'Paused'
      },
      where: {
        id: this.id
      }
    });
  }

  async abort(context: ServerContext) {
    /* set status to aborted */
    await context.db.mutation.updateBpmnProcessInstance({
      data: {
        status: 'Aborted'
      },
      where: {
        id: this.id
      }
    });
  }

  async finish(context: ServerContext) {
    /* 
      set status to finished 
      set dateFinished
      set duration
      ...anything else?
    */

    await context.db.mutation.updateBpmnProcessInstance({
      data: {
        status: 'Finished'
      },
      where: {
        id: this.id
      }
    });
  }
}
