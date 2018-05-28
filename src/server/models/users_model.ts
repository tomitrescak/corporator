import { MongoConnector, MongoEntity } from 'apollo-connector-mongodb';

export class UsersModel extends MongoEntity<Corpix.Collections.UserDao> {
  constructor(connector: MongoConnector) {
    super(connector, 'Users');
  }
}
