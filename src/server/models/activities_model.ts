import { MongoConnector, MongoEntity } from 'apollo-connector-mongodb';

export class ActivitiesModel extends MongoEntity<Corpix.Collections.ActivityDao> {
  constructor(connector: MongoConnector) {
    super(connector, 'Activities');
  }
}
