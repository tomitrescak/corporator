import { BpmnProcessesModel } from './bpmn_processes_model';
import { ActionsModel } from './actions_model';
import { ActivitiesModel } from './activities_model';
import { UsersModel } from './users_model';
import { UserModel } from './user_model';
import { MongoConnector } from 'apollo-connector-mongodb';

import { Dictionary } from 'typescript-collections';

declare global {
  namespace Corpix.Server { export type Context = ServerContext; }
}

export class ServerContext {
  BpmnProcess: BpmnProcessesModel;
  Actions: ActionsModel;
  Activities: ActivitiesModel;
  Users: UsersModel;
  User: UserModel;
  conn: MongoConnector;

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

    // module.exports = function() {
    global.__MONGO_DB_NAME__ = MONGO_DB_NAME;
    global.__MONGO_URI__ = await mongod.getConnectionString();

    let connector = new MongoConnector(global.__MONGO_URI__, global.__MONGO_DB_NAME__);
    await connector.connect();
    return new ServerContext(connector);
  }

  static async disconnect(context: ServerContext) {
    return context.conn.dispose();
  }

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
