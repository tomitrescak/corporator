import { create, its } from 'data/tests';

import { query } from '../bpmn_process_resolver'; 

describe('Bpmn Process Resolver', () => {
  its('fails', { clear: ['BpmnProcess'] }, async context => {
    await create.process(
      context,
      { status: 'Published', name: 'Process 1' },
      { read: { create: { roleId: 'user' } } }
    );
    await create.process(
      context,
      { status: 'Published', name: 'Process 2' },
      { read: { create: { roleId: 'user' } } }
    );
    await create.process(
      context,
      { status: 'Published', name: 'Process 2' },
      { read: { create: { roleId: 'admin' } } }
    );
    await create.process(
      context,
      { status: 'Draft', name: 'Process 2' },
      { read: { create: { roleId: 'user' } } }
    );
    // mock user
    context.getUser = () => ({ roles: ['user'] } as any);
    // default by role
    // we will get only those that can be read by role 'user'
    let processes = await query.processes(null, { input: {} }, context);
    expect(processes.length).toBe(2);
    // by name
    processes = await query.processes(null, { input: { name: '1' } }, context);
    expect(processes.length).toBe(1);
    processes = await query.processes(null, { input: { name: '2' } }, context);
    expect(processes.length).toBe(1);
    processes = await query.processes(null, { input: { name: '2', status: null } }, context);
    expect(processes.length).toBe(2);
  });
});
