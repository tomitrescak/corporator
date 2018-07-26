import * as bpmnProcess from '../resolvers/bpmn_process_resolver';
import * as notifications from './notifications_resolver';

import { addResolver } from '../utils';

export const resolvers = {
  Query: {
    // users(_parent, params, ctx, info) {
    //   return ctx.db.query.users({});
    // }
  },
  Mutation: {}
};

// import custom resolvers

addResolver(resolvers, notifications);
addResolver(resolvers, bpmnProcess);
