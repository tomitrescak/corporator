import * as bpmnProcesses from '../resolvers/bpmn_resolver';
import * as notifications from './notifications_resolver';
import * as bpmnProcessInstances from './process_instance_resolver';
import * as users from './user_resolver';

import { extractFragmentReplacements } from 'prisma-binding';

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

export const fragmentReplacements = extractFragmentReplacements(resolvers);

/* =========================================================
    Fixtures
   ======================================================== */

export async function fixtures(context: Context) {
  // const d = fragmentReplacements;
  const fixtureContext: FixtureContext = {};

  const hasData = await users.fixtures(context, fixtureContext);
  if (!hasData) {
    await bpmnProcesses.fixtures(context, fixtureContext);
    await bpmnProcessInstances.fixtures(context, fixtureContext);
    await notifications.fixtures(context, fixtureContext);
  }
}
