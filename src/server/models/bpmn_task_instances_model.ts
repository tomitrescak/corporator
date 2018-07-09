import { MongoConnector, MongoEntity } from 'apollo-connector-mongodb';

export class TaskInstancesModel extends MongoEntity<Corpix.Collections.BpmnTaskInstanceDao> {
  constructor(connector: MongoConnector) {
    super(connector, 'BpmnTaskInstances');
  }
}
