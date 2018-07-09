import { Task } from './Bpmn';

export class BpmnTaskInstanceModel {
  id: string;
  task: Task;
  processInstanceId: string;
  performerId: string;
  performerRoles: string[];
  dateStarted: Date;
  dateFinished: Date;
  duration: number;
  snapshot: any;

  constructor(taskInstanceModelDao: Partial<Corpix.Collections.BpmnTaskInstanceDao>, task?: Task) {
    this.id = taskInstanceModelDao.id;
    this.task = task ? task : null;
    this.processInstanceId = taskInstanceModelDao.processInstanceId;
    this.performerId = taskInstanceModelDao.performerId;
    this.performerRoles = taskInstanceModelDao.performerRoles;
    this.dateStarted = taskInstanceModelDao.dateStarted;
    this.dateFinished = taskInstanceModelDao.dateFinished;
    this.duration = taskInstanceModelDao.duration;
    this.snapshot = taskInstanceModelDao.snapshot;
  }

  execute() {
    /*
      finish task
      update DAO
        performerId
        dateFinished
        duration
        snapshot
    */
  }

  validation() {

  }
}
