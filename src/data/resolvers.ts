import * as bpmnProcesses from './bpmn_process/server/bpmn_process_resolver';
import * as bpmnProcessInstances from './bpmn_process_instance/server/process_instance_resolver';
import * as bpmnTaskInstances from './bpmn_task_instance/server/task_instance_resolver';
import * as form from './form/server/form_resolver';
import * as notifications from './notifications/server/notifications_resolver';
import * as resources from './resources/server/resources_resolver';
import * as users from './users/server/user_resolver';

import { extractFragmentReplacements } from 'prisma-binding';

import { addResolvers } from 'data/utils';

/* =========================================================
    Resolvers
   ======================================================== */

export const resolvers = addResolvers([
  notifications,
  bpmnProcesses,
  bpmnProcessInstances,
  bpmnTaskInstances,
  users,
  form,
  resources
]);

export const fragmentReplacements = extractFragmentReplacements(resolvers);
