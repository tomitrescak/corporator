import { Prisma } from 'data/prisma';
import { BaseElement } from '../models/bpmn/';
import { BpmnProcessModel, BpmnTypes } from './bpmn_process_model';


export class BpmnProcessInstance {
  static async duplicateInstance(processInstance: BpmnProcessInstance) {
    throw new Error('not implmented');
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
          owner: context.userId,
          resources: state.resources, // no resources?
          status: 'Running',
          process: {
            connect: {
              id: processId
            }
          }
          tasks: [], // no task instances at the start
        }
      },
      `{  
      id
      dateStarted
      ownerId
      status
      process {
        id
        access
        actionCount
        data
        description
        model
        name
        resources
        status
        version
        versions
      }
    } `
    );

    const processInstance = new BpmnProcessInstance(processInstanceDAO, processModel);
    return processInstance.start(context);
  }

  id: string;
  processId: string;
  processModel: BpmnProcessModel;
  resources: any; // JSON
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
    this.resources = JSON.parse(instanceModelDao.resources);
    this.ownerId = instanceModelDao.owner.id;
    this.status = instanceModelDao.status;
    this.dateStarted = new Date(instanceModelDao.dateStarted);
    this.dateFinished = new Date(instanceModelDao.dateFinished);
    this.duration = instanceModelDao.duration;

    processModel ? (this.processModel = processModel) : null;
  }

  async start(context: ServerContext) {
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

    this.processModel.getElementList(BpmnTypes.LaneSet).forEach(laneSet => {
      laneSet.execute(this, context);
    });
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
    /* set status to finished */
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
