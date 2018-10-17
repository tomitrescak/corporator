import { Prisma } from 'data/prisma';
import { Task } from './bpmn';

export class BpmnTaskInstanceModel {
  id: string;
  task: Task;
  processInstanceId: string;
  performerId: string;
  performerRole: Prisma.Role;
  dateStarted: Date;
  dateFinished: Date;
  duration: number;
  data: any;

  constructor(taskInstanceModelDao: Partial<Prisma.BpmnTaskInstance>, task?: Task) {
    this.id = taskInstanceModelDao.id;
    this.task = task ? task : null;
    this.processInstanceId = taskInstanceModelDao.processInstance.id;
    this.performerId = taskInstanceModelDao.performer.id;
    this.performerRole = taskInstanceModelDao.performerRole;
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
        snapshot
    */

    await context.db.mutation.updateBpmnTaskInstance({
      where: {
        id: this.id
      },
      data: {
        status: 'Finished'
      }
    });

    // deep clone of snapshot using form
    //
    // pass back into state.resources
  }

  validation() {
    /**/
  }
}
