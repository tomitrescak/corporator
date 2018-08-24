import * as bpmnProcess from '../resolvers/bpmn_process_resolver';
import * as notifications from './notifications_resolver';
import * as users from './user_resolver';

import { addResolver } from '../utils';

export const resolvers = {
  Query: {},
  Mutation: {}
};

// import custom resolvers

addResolver(resolvers, notifications);
addResolver(resolvers, bpmnProcess);
addResolver(resolvers, users);
