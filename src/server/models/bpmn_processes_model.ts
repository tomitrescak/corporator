import { MongoConnector, MongoEntity } from 'apollo-connector-mongodb';

export class BpmnProcessesModel extends MongoEntity<Corpix.Collections.BpmnProcessDao> {
  constructor(connector: MongoConnector) {
    super(connector, 'BpmnProcesses');
  }

  startActivity(context: Corpix.Server.Context, id: string) {
    // check access
    // launch activity -> store new fileds in the database
    // execute as many actions as possible
  }
}
