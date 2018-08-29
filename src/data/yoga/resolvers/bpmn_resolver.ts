import { Mutation, Notification, purge, Query, Resolver, Yoga } from '../utils';
import { FixtureContext } from './common';

export const query: Query = {
  bpmnProcesses(_parent, { input: { status, name, skip = 0, first = 10 } }, ctx, info) {
    // return ctx.db.query.notifications(
    //   { where: { owner: { id: getUserId(ctx) } }, skip: start, last: end },
    //   info
    // );
    return ctx.db.query.bpmnProcesses(
      {
        where: purge<Yoga.BpmnProcessWhereInput>({ name_contains: 'we', status }),
        skip,
        first
      },
      info
    );
  }
};

export const mutation: Mutation = {
  async createProcess(_parent, { input: { description, status, name, model } }, ctx, info) {
    const process = await ctx.db.mutation.createBpmnProcess(
      {
        data: {
          actionCount: 0,
          data: {},
          description,
          model,
          name,
          status,
          version: 0,
          access: null
        }
      },
      info
    );
    return process;
  }
};

export async function fixtures(ctx: ServerContext, fixtureContext: FixtureContext) {
  const processes: Yoga.CreateProcessInput[] = [
    { name: 'Process 1', description: 'Process 1 description', model: '', status: 'Published' },
    { name: 'Process 4', description: 'Process 4 description', model: '', status: 'Published' },
    { name: 'Process 2', description: 'Process 2 description', model: '', status: 'Draft' },
    { name: 'Process 3', description: 'Process 3 description', model: '', status: 'Proposal' }
  ];

  let inserted: Yoga.BpmnProcess[] = [];
  for (let input of processes) {
    const process = await mutation.createProcess(null, { input }, ctx);
    inserted.push(process);
  }
}
