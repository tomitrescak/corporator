import * as bpmnProcess from '../resolvers/bpmn_resolver';
import * as notifications from './notifications_resolver';
import * as users from './user_resolver';

import { addResolver, Context } from '../utils';

export const resolvers = {
  Query: {},
  Mutation: {}
};

export async function fixtures(context: Context) {
  const userId = await users.fixtures(context);
  if (userId) {
    await notifications.fixtures(context, userId);
  }
}

// import custom resolvers

addResolver(resolvers, notifications);
addResolver(resolvers, bpmnProcess);
addResolver(resolvers, users);
