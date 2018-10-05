import { Prisma } from 'data/prisma';
import { Task } from './bpmn';

export class BpmnTaskInstanceModel {
  static async createInstance(): Promise<BpmnTaskInstanceModel> {}

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

  async execute(context: ServerContext, _form: any) {
    /*
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
    //
    // pass back into state.resources
  }

  validation() {
    /**/
  }
}
