import { Prisma } from 'data/prisma';
import { BpmnProcessModel } from './bpmn_process_model';
import { BpmnTaskInstanceModel } from './bpmn_task_instance_model';



export class BpmnProcessInstance {
  id: string;
  name: string;
  description: string;
  processId: string;
  processModel: BpmnProcessModel;
  resources: any; // JSON
  ownerId: string;
  status: Prisma.BpmnProcessInstanceStatus;
  dateStarted: Date;
  dateFinished: Date;
  duration: number;


  constructor(instanceModelDao: Partial<Prisma.BpmnProcessInstance>, processModel: BpmnProcessModel) {
    this.id = instanceModelDao.id;
    this.name = instanceModelDao.name;
    this.description = instanceModelDao.description;
    // this.processId = instanceModelDao.processId;
    this.processModel = processModel;
    this.resources = JSON.parse(instanceModelDao.resources);
    this.ownerId = instanceModelDao.ownerId;
    this.status = instanceModelDao.status;
    this.dateStarted = new Date(instanceModelDao.dateStarted);
    this.dateFinished = new Date(instanceModelDao.dateFinished);
    this.duration = instanceModelDao.duration;
  }

  async start(): Promise<BpmnTaskInstanceModel[]> {
    // execute start event node?
    return null;
  }

  pause() {
    /* set status to paused */
  }


  abort() {
    /* set status to aborted */
  }
}
