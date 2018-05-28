import { MongoConnector, MongoEntity } from 'apollo-connector-mongodb';

export class ActionsModel extends MongoEntity<Corpix.Collections.ActionDao> {
  constructor(connector: MongoConnector) {
    super(connector, 'Actions');
  }
}
