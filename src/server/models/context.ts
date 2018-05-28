import { BpmnProcessesModel } from './bpmn_processes_model';
import { ActionsModel } from './actions_model';
import { ActivitiesModel } from './activities_model';
import { UsersModel } from './users_model';
import { UserModel } from './user_model';
import { MongoConnector } from 'apollo-connector-mongodb';

declare global {
  namespace Corpix.Server { export type Context = ServerContext; }
}

export class ServerContext {
  BpmnProcess: BpmnProcessesModel;
  Actions: ActionsModel;
  Activities: ActivitiesModel;
  Users: UsersModel;
  User: UserModel;

  constructor(conn: MongoConnector) {
    this.BpmnProcess = new BpmnProcessesModel(conn);
    this.Actions = new ActionsModel(conn);
    this.Activities = new ActivitiesModel(conn);
    this.Users = new UsersModel(conn);
    this.User = null as any;
  }
}

export default ServerContext;
