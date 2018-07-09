import { MongoConnector, MongoEntity } from 'apollo-connector-mongodb';
import { BpmnProcessInstance, InstanceStatus } from '../models/bpmn_process_instance_model';
import { BpmnProcessModel } from '../models/bpmn_process_model';
import { BaseElement } from './Bpmn/bpmn_base_element_model';
import { BpmnTaskInstanceModel } from './bpmn_task_instance_model';
// import { BpmnModdle } from 'bpmn-moddle';

export class BpmnProcessesModel extends MongoEntity<Corpix.Collections.BpmnProcessDao> {
  constructor(connector: MongoConnector) {
    super(connector, 'BpmnProcesses');
  }

  async startInstance(context: Corpix.Server.Context, bpmnProcessId: string): Promise<BpmnTaskInstanceModel[]> {
    return await new Promise<BpmnTaskInstanceModel[]>(async (resolve, reject) => {
      let bpmnProcess: BpmnProcessModel;

      // check access
      const query = { id: bpmnProcessId };
      let res;
      let processInstance;
      try {
        // check access
        res = await context.BpmnProcessModels.findOne(query);

        if (res) {
          bpmnProcess = new BpmnProcessModel(res);
          // check read/write/execute permissions
          // in order to start instance user needs all three permissions?
          // just execute?

          // if (!bpmnProcess.access.canRead(context.User)) {
          //   // console.log('cannot read');
          //   reject('Invalid Permissions');
          // }
          // if (!bpmnProcess.access.canWrite(context.User)) {
          //   // console.log('cannot write');
          //   reject('Invalid Permissions');
          // }
          if (!bpmnProcess.access.canExecute(context.User)) {
            // console.log('cannot execute');
            reject('Invalid Permissions');
          }
        }
      } catch (error) {
        reject(error);
      }

      try {
        // load definition into model
        await bpmnProcess.loadDefinition(res.definition);
      } catch (error) {
        reject(error);
      }

      try {
        // create instance
        processInstance = await this.insertNewProcessInstance(bpmnProcess, context);
      } catch (error) {
        reject(error);
      }

      let taskInstances: BpmnTaskInstanceModel[];

      try {
        // start execution
        // execute as many activities as possible
        // return activities and actions?
        taskInstances = await processInstance.start();
      } catch (error) {
        reject(error);
      }
      // check if any task instances were returned
      // none means execution was completed
      if(!taskInstances || (taskInstances && taskInstances.length === 0)) {
        this.completeProcessInstance(processInstance, context);
      }

      taskInstances.forEach(task => {
        this.insertNewTaskInstance(bpmnProcess, task, context);
      });

      resolve(taskInstances);
    });
  }

  private async completeProcessInstance(instance: BpmnProcessInstance, context: Corpix.Server.Context): Promise<BpmnProcessInstance> {
    return await new Promise<BpmnProcessInstance>(async (resolve, reject) => {
      try {
        // query to retrieve process instance from db
        const query = { id: instance.id };
        // modify activityDao to change details (status, dateFinished, duration...)
        // create actionDao with details and add to db
      } catch(error) {
        reject(error);
      }

      
    });
  }

  private async insertNewTaskInstance(bpmnProcess: BpmnProcessModel, taskInstanceDao: Corpix.Collections.BpmnTaskInstanceDao, context: Corpix.Server.Context): Promise<BpmnTaskInstanceModel> {
    return await new Promise<BpmnTaskInstanceModel>(async (resolve, reject) => {
      try {
        await context.TaskInstances.insertOne(taskInstanceDao);
        const action = new BpmnTaskInstanceModel(taskInstanceDao);
        resolve(action);
      } catch (error) {
        reject(error);
      }
    });
  }

  private async insertNewProcessInstance(
    bpmnProcess: BpmnProcessModel,
    context: Corpix.Server.Context
  ): Promise<BpmnProcessInstance> {
    return await new Promise<BpmnProcessInstance>(async (resolve, reject) => {
      const newProcessInstanceDao = {
        id: '',     // what should the id be?
        name: '',   // what should the name be?
        description: '',  // should there even be a description?
        processId: bpmnProcess.id,
        resources: null,
        ownerId: context.User.id,
        status: InstanceStatus.Running,
        dateStarted: new Date(),
        dateFinished: null,
        duration: null
      } as Corpix.Collections.BpmnProcessInstanceDao;

      try {
        await context.ProcessInstances.insertOne(newProcessInstanceDao);
        const instance = new BpmnProcessInstance(newProcessInstanceDao, bpmnProcess);
        resolve(instance);
      } catch (error) {
        reject(error);
      }
    });
  }
}
