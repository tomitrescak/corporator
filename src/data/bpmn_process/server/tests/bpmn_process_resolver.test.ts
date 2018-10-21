import { create, its, removeIds } from 'data/tests';

import { query } from '../bpmn_process_resolver';

import * as PROCESS_FRAGMENT from 'client/modules/process/definition/queries/bpmn_process.fragment.graphql';
import * as PROCESS_INSTANCE_QUERY from 'client/modules/process/instance/queries/bpmn_process_instance.query.graphql';

import { gql } from 'data/utils';

describe('Bpmn Process Resolver', () => {
  its(
    'fails',
    {
      clear: ['Role', 'Notification', 'BpmnProcessInstance', 'BpmnProcess'],
      user: { name: 'Tomi', roles: ['user'] }
    },
    async context => {
      await create.bpmnProcessMutation({
        publicationStatus: 'Published',
        name: 'Process 1',
        readRole: 'user'
      });
      await create.bpmnProcessMutation({
        publicationStatus: 'Published',
        name: 'Process 2',
        readRole: 'user|other'
      });
      await create.bpmnProcessMutation({
        publicationStatus: 'Published',
        name: 'Process 2',
        readRole: 'admin'
      });
      await create.bpmnProcessMutation({
        publicationStatus: 'Draft',
        name: 'Process 2',
        readRole: 'user'
      });
      // mock user
      context.getUser = () => ({ roles: ['user'] } as any);
      // default by role
      // we will get only those that can be read by role 'user'
      let processes = await query.bpmnProcessesQuery(null, { input: {} }, context);
      expect(processes.length).toBe(2);
      // by name
      processes = await query.bpmnProcessesQuery(null, { input: { name: '1' } }, context);
      expect(processes.length).toBe(1);
      processes = await query.bpmnProcessesQuery(null, { input: { name: '2' } }, context);
      expect(processes.length).toBe(1);
      processes = await query.bpmnProcessesQuery(
        null,
        { input: { name: '2', status: null } },
        context
      );
      expect(processes.length).toBe(2);
    }
  );

  // let db = { no: 1 };

  its('tests owner resolver 123', { user: { name: 'Tomi' } }, async ({ ctx, fetch }) => {
    const PROCESS_INSTANCE_QUERY_FULL = gql`
      ${PROCESS_INSTANCE_QUERY}
      ${PROCESS_FRAGMENT}
    `;

    let p = await create.bpmnProcessMutation({
      publicationStatus: 'Published',
      name: 'Process 1',
      readRole: 'user'
    });

    const user = await ctx.getUser();

    const pi = await create.bpmnProcessInstanceMutation({
      ownerId: user.id,
      processId: p.id,
      data: '{}',
      comments: {
        create: [{ userId: user.id, text: '12345', date: create.date() }]
      }
    });

    const result = await fetch({
      query: PROCESS_INSTANCE_QUERY_FULL,
      variables: { id: pi.id }
    });

    removeIds(result);
    expect(result).toMatchSnapshot();
  });
});
