import { MongoConnector, MongoEntity } from 'apollo-connector-mongodb';

export class AccessesModel extends MongoEntity<Corpix.Collections.AccessDao> {
  constructor(connector: MongoConnector) {
    super(connector, 'Accesses');
  }
}
