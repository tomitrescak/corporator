import { Prisma } from 'data/prisma';
import { Yoga } from 'data/utils';
import { Task } from './bpmn';

export class BpmnTaskInstanceModel {
  static async createInstance(
    context: ServerContext,
    taskId: string,
    processInstanceId: string,
    roles: string[],
    info?: any
  ): Promise<Prisma.BpmnTaskInstance> {
    const user = await context.getUser();
    if (!user) {
      throw new Error('Cannot create Task Instance: No User');
    }
    return context.db.mutation.createBpmnTaskInstance(
      {
        data: {
          dateStarted: new Date(),
          data: {},
          status: 'Started',
          performerRoles: { set: roles },
          processInstance: { connect: { id: processInstanceId } },
          task: { connect: { taskId } }
        }
      },
      info
    );
  }

  static async saveForm(
    context: ServerContext,
    taskInstanceId: string,
    data: any,
    info?: any
  ): Promise<Prisma.BpmnTaskInstance> {
    const taskInstanceDAO = await context.db.query.bpmnTaskInstance({
      where: {
        id: taskInstanceId
      }
    });

    return context.db.mutation.updateBpmnTaskInstance(
      {
        where: {
          id: taskInstanceId
        },
        data: {
          data: { ...taskInstanceDAO.data, ...data }
        }
      },
      info
    );
  }

  static async setStatus(
    context: ServerContext,
    taskInstanceId: string,
    status: Yoga.BpmnTaskInstanceStatus,
    info?: any
  ): Promise<Prisma.BpmnTaskInstance> {
    const taskInstanceDAO = await context.db.query.bpmnTaskInstance({
      where: {
        id: taskInstanceId
      }
    });
    // only update status if it is started or paused
    // a task instance cannoit change its status if it is aborted, finished, approved or rejected
    if (taskInstanceDAO.status === ('Started' || 'Paused')) {
      return context.db.mutation.updateBpmnTaskInstance(
        {
          where: {
            id: taskInstanceId
          },
          data: {
            status
          }
        },
        info
      );
    } else {
      throw new Error(
        `Cannot change status of task instance with status: ${taskInstanceDAO.status}`
      );
    }
  }

  id: string;
  task: Task;
  processInstanceId: string;
  performerId: string;
  performerRole: string;
  dateStarted: Date;
  dateFinished: Date;
  duration: number;
  data: any;

  constructor(taskInstanceModelDao: Partial<Prisma.BpmnTaskInstance>, task?: Task) {
    this.id = taskInstanceModelDao.id;
    this.task = task ? task : null;
    this.processInstanceId = taskInstanceModelDao.processInstanceId;
    this.performerId = taskInstanceModelDao.performerId;
    // this.performerRole = taskInstanceModelDao.performerRoleId;
    this.dateStarted = new Date(taskInstanceModelDao.dateStarted);
    this.dateFinished = new Date(taskInstanceModelDao.dateFinished);
    this.duration = taskInstanceModelDao.duration;
    this.data = taskInstanceModelDao.data;
  }

  async execute(context: ServerContext) {
    /*
      validate data
      finish task
      update DAO
        performerId
        dateFinished
        duration
        data
    */

    await context.db.mutation.updateBpmnTaskInstance({
      where: {
        id: this.id
      },
      data: {
        status: 'Finished'
      }
    });

    // deep clone of data using form

    // pass back into state.resources
  }

  validation() {
    /**/
  }
}
