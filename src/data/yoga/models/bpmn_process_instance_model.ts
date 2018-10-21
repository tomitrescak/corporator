import { Prisma } from 'data/prisma';
import { Lane } from './bpmn/bpmn_lane_model';
import { BpmnProcessModel, BpmnTypes } from './bpmn_process_model';

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
  static async duplicateInstance(_processInstance: BpmnProcessInstance) {
    throw new Error('not implemented');
  }

  // static async createInstance(
  //   processId: string,
  //   processModel: BpmnProcessModel,
  //   context: ServerContext
  // ): Promise<BpmnProcessInstance> {
  //   // create new process instance dao using context.db
  //   // create object with dao and given process model
  //   const processInstanceDAO = await context.db.mutation.createBpmnProcessInstance(
  //     {
  //       data: {
  //         // dateFinished: null,
  //         dateStarted: new Date(),
  //         // duration: null,
  //         owner: context.userId,
  //         data: state.resources, // no resources?
  //         status: 'Running',
  //         process: {
  //           connect: {
  //             id: processId
  //           }
  //         }
  //         tasks: [], // no task instances at the start
  //       }
  //     },
  //     `{
  //     id
  //     dateStarted
  //     ownerId
  //     status
  //     process {
  //       id
  //       access
  //       actionCount
  //       data
  //       description
  //       model
  //       name
  //       resources
  //       status
  //       version
  //       versions
  //     }
  //   } `
  //   );

  //   const processInstance = new BpmnProcessInstance(processInstanceDAO, processModel);
  //   return processInstance.start(context);
  // }

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

    this.processModel
      .getElementList<Lane>(BpmnTypes.Lane)
      .find(l => l.roles.some(r => r === role))
      .execute(this, context);

    return {
      active: [],
      executed: [],
      processInstance: this
    };
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
