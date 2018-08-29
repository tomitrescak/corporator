import * as bpmnProcess from '../resolvers/bpmn_resolver';
import * as notifications from './notifications_resolver';
import * as users from './user_resolver';

import { addResolver, Context } from '../utils';
import { FixtureContext } from './common';

/* =========================================================
    Resolvers
   ======================================================== */

export const resolvers = {
  Query: {},
  Mutation: {}
};

addResolver(resolvers, notifications);
addResolver(resolvers, bpmnProcess);
addResolver(resolvers, users);

/* =========================================================
    Fixtures
   ======================================================== */

export async function fixtures(context: Context) {
  const fixtureContext: FixtureContext = {};
  fixtureContext.userId = await users.fixtures(context);
  if (fixtureContext.userId) {
    await notifications.fixtures(context, fixtureContext);
  }
}
