import { MongoConnector, MongoEntity } from 'apollo-connector-mongodb';

export class BpmnProcessesModel extends MongoEntity<Corpix.Collections.BpmnProcessDao> {
  constructor(connector: MongoConnector) {
    super(connector, 'BpmnProcesses');
  }

  // startActivity(_context: Corpix.Server.Context, _id: string) {
  //   // check access
  //   // launch activity -> store new fields in the database
  //   // execute as many actions as possible
  // }
}
