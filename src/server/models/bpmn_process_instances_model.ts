import { MongoConnector, MongoEntity } from 'apollo-connector-mongodb';

export class BpmnProcessInstancesModel extends MongoEntity<Corpix.Collections.BpmnProcessInstanceDao> {
  constructor(connector: MongoConnector) {
    super(connector, 'BpmnProcessInstances');
  }
}
