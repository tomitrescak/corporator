import * as bpmnProcesses from '../resolvers/bpmn_resolver';
import * as notifications from './notifications_resolver';
import * as bpmnProcessInstances from './process_instance_resolver';
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
addResolver(resolvers, bpmnProcesses);
addResolver(resolvers, users);

/* =========================================================
    Fixtures
   ======================================================== */

export async function fixtures(context: Context) {
  const fixtureContext: FixtureContext = {};
  const userId = context.userId;

  fixtureContext.userId = await users.fixtures(context);
  if (fixtureContext.userId) {
    context.userId = fixtureContext.userId;

    await bpmnProcesses.fixtures(context, fixtureContext);
    await bpmnProcessInstances.fixtures(context, fixtureContext);
    await notifications.fixtures(context, fixtureContext);
  }

  context.userId = userId;
}
