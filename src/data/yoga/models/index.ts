import * as bpmnProcess from './bpmn_process_model';
import * as notifications from './notifications_model';

import { addResolver } from './utils';

export const resolvers = {
  Query: {
    users(_parent, params, ctx, info) {
      return ctx.db.query.users({});
    }
  },
  Mutation: {}
};

// import custom resolvers

addResolver(resolvers, notifications);
addResolver(resolvers, bpmnProcess);
