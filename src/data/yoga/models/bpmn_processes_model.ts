// import { BpmnProcessInstance } from 'data/yoga/models/bpmn_process_instance_model';
// import { BpmnProcessModel } from 'data/yoga/models/bpmn_process_model';

// import { Prisma } from 'data/prisma';
// import { getUser, getUserId } from '../utils';
// import { BpmnTaskInstanceModel } from './bpmn_task_instance_model';

// // import { BpmnModdle } from 'bpmn-moddle';

// export class BpmnProcessesModel {

//   async startInstance(context: ServerContext, bpmnProcessId: string): Promise<BpmnTaskInstanceModel[]> {
//     const user = getUser(context);

//     return new Promise<BpmnTaskInstanceModel[]>(async (resolve, reject) => {
//       let bpmnProcess: BpmnProcessModel;

//       // check access
//       let res;
//       let processInstance;
//       try {
//         // check access
//         res = await context.db.query.bpmnProcess({ where: { id: bpmnProcessId } });

//         if (res) {
//           bpmnProcess = new BpmnProcessModel(res);
//           // check read/write/execute permissions
//           // in order to start instance user needs all three permissions?
//           // just execute?

//           // if (!bpmnProcess.access.canRead(context.User)) {
//           //   // console.log('cannot read');
//           //   reject('Invalid Permissions');
//           // }
//           // if (!bpmnProcess.access.canWrite(context.User)) {
//           //   // console.log('cannot write');
//           //   reject('Invalid Permissions');
//           // }
//           if (!bpmnProcess.access.canExecute(user)) {
//             // console.log('cannot execute');
//             reject('Invalid Permissions');
//           }
//         }
//       } catch (error) {
//         reject(error);
//       }

//       try {
//         // load definition into model
//         await bpmnProcess.loadDefinition(res.definition);
//       } catch (error) {
//         reject(error);
//       }

//       try {
//         // create instance
//         processInstance = await this.insertNewProcessInstance(bpmnProcess, context);
//       } catch (error) {
//         reject(error);
//       }

//       let taskInstances: BpmnTaskInstanceModel[];

//       try {
//         // start execution
//         // execute as many activities as possible
//         // return activities and actions?
//         taskInstances = await processInstance.start();
//       } catch (error) {
//         reject(error);
//       }
//       // check if any task instances were returned
//       // none means execution was completed
//       if(!taskInstances || (taskInstances && taskInstances.length === 0)) {
//         this.completeProcessInstance(processInstance, context);
//       }

//       taskInstances.forEach(_task => {
//         throw new Error('Resolve TODO below');
//         this.insertNewTaskInstance(bpmnProcess, {
//           // DEAN: create correct instance here
//         }, context);
//       });

//       resolve(taskInstances);
//     });
//   }

//   private async completeProcessInstance(_instance: BpmnProcessInstance, _context: ServerContext): Promise<BpmnProcessInstance> {
//     return new Promise<BpmnProcessInstance>(async (_resolve, reject) => {
//       try {
//         // query to retrieve process instance from db
//         // const query = { id: instance.id };
//         // modify activityDao to change details (status, dateFinished, duration...)
//         // create actionDao with details and add to db
//       } catch(error) {
//         reject(error);
//       }

//     });
//   }

//   private async insertNewTaskInstance(_bpmnProcess: BpmnProcessModel, taskInstanceDao: Prisma.BpmnTaskInstanceCreateInput, context: ServerContext): Promise<BpmnTaskInstanceModel> {
//     return new Promise<BpmnTaskInstanceModel>(async (resolve, reject) => {
//       try {
//         const instance = await context.db.mutation.createBpmnTaskInstance({ data: taskInstanceDao });
//         const action = new BpmnTaskInstanceModel(instance);
//         resolve(action);
//       } catch (error) {
//         reject(error);
//       }
//     });
//   }

//   private async insertNewProcessInstance(
//     bpmnProcess: BpmnProcessModel,
//     context: ServerContext
//   ): Promise<BpmnProcessInstance> {
//     const userId = getUserId(context);
//     return new Promise<BpmnProcessInstance>(async (resolve, reject) => {
//       const newProcessInstanceDao: Prisma.BpmnProcessInstanceCreateInput = {
//         name: '',   // what should the name be?
//         description: '',  // should there even be a description?
//         // processId: bpmnProcess.id,
//         resources: null as any,
//         ownerId: userId,
//         status: 'Running',
//         dateStarted: new Date(),
//         dateFinished: null as Date,
//         duration: null as number
//       };

//       try {
//         const inserted = await context.db.mutation.createBpmnProcessInstance({ data: newProcessInstanceDao });
//         const instance = new BpmnProcessInstance(inserted, bpmnProcess);
//         resolve(instance);
//       } catch (error) {
//         reject(error);
//       }
//     });
//   }
// }
