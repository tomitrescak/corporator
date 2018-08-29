import { BpmnProcessModel } from './bpmn_process_model';
import { BpmnTaskInstanceModel } from './bpmn_task_instance_model';

export enum InstanceStatus {
  Running = 'running',
  Paused = 'paused',
  Finished = 'finished',
  Aborted = 'aborted'
}

export class BpmnProcessInstance {
  id: string;
  name: string;
  description: string;
  processId: string;
  processModel: BpmnProcessModel;
  resources: any; // JSON
  ownerId: string;
  status: InstanceStatus;
  dateStarted: Date;
  dateFinished: Date;
  duration: number;


  constructor(instanceModelDao: Partial<Corpix.Collections.BpmnProcessInstanceDao>, processModel: BpmnProcessModel) {
    this.id = instanceModelDao.id;
    this.name = instanceModelDao.name;
    this.description = instanceModelDao.description;
    this.processId = instanceModelDao.processId;
    this.processModel = processModel;
    this.resources = JSON.parse(instanceModelDao.resources);
    this.ownerId = instanceModelDao.ownerId;
    this.status = instanceModelDao.status;
    this.dateStarted = instanceModelDao.dateStarted;
    this.dateFinished = instanceModelDao.dateFinished;
    this.duration = instanceModelDao.duration;
  }

  async start(): Promise<BpmnTaskInstanceModel[]> {
    // execute start event node?
    // does it always start with the start node?
    return null;
  }

  pause() {
    /* set status to paused */
  }


  abort() {
    /* set status to aborted */
  }
}
