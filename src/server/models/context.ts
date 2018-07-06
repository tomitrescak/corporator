import { MongoConnector } from 'apollo-connector-mongodb';
import { ActionsModel } from './actions_model';
import { ActivitiesModel } from './activities_model';
import { BpmnProcessesModel } from './bpmn_processes_model';
import { UserModel } from './user_model';
import { UsersModel } from './users_model';

declare global {
  namespace Corpix.Server { export type Context = ServerContext; }
}

const g = global as LocalGlobal;

export class ServerContext {
  static async connect() {
    const MongodbMemoryServer = require('mongodb-memory-server');

    const MONGO_DB_NAME = 'jest';
    const mongod = new MongodbMemoryServer.default({
      instance: {
        dbName: MONGO_DB_NAME
      },
      binary: {
        version: '3.2.19'
      }
    });

    g.__MONGO_DB_NAME__ = MONGO_DB_NAME;
    g.__MONGO_URI__ = await mongod.getConnectionString();

    let connector = new MongoConnector(g.__MONGO_URI__, g.__MONGO_DB_NAME__);
    await connector.connect();
    return new ServerContext(connector);
  }

  static async disconnect(context: ServerContext) {
    return context.conn.dispose();
  }

  BpmnProcess: BpmnProcessesModel;
  Actions: ActionsModel;
  Activities: ActivitiesModel;
  Users: UsersModel;
  User: UserModel;
  conn: MongoConnector;

  constructor(conn: MongoConnector) {
    this.conn = conn;
    this.BpmnProcess = new BpmnProcessesModel(conn);
    this.Actions = new ActionsModel(conn);
    this.Activities = new ActivitiesModel(conn);
    this.Users = new UsersModel(conn);
    this.User = null as any;
  }
}

export default ServerContext;
