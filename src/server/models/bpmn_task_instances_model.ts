import { MongoConnector, MongoEntity } from 'apollo-connector-mongodb';

export class BpmnTaskInstancesModel extends MongoEntity<Corpix.Collections.BpmnTaskInstanceDao> {
  constructor(connector: MongoConnector) {
    super(connector, 'BpmnTaskInstances');
  }
}
