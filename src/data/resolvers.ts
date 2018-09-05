import * as bpmnProcesses from './bpmn_process/server/bpmn_process_resolver';
import * as bpmnProcessInstances from './bpmn_process_instance/server/process_instance_resolver';
import * as notifications from './notifications/server/notifications_resolver';
import * as users from './users/server/user_resolver';

import { extractFragmentReplacements } from 'prisma-binding';

import { addResolver, Context, FixtureContext } from 'data/utils';

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
    await reset(context);
  }
}

export async function reset(context: Context) {
  const fixtureContext = {};

  await context.db.mutation.deleteManyNotifications({});
  await context.db.mutation.deleteManyBpmnProcessInstances({});
  await context.db.mutation.deleteManyBpmnProcesses({});

  await bpmnProcesses.fixtures(context, fixtureContext);
  await bpmnProcessInstances.fixtures(context, fixtureContext);
  await notifications.fixtures(context, fixtureContext);
}
