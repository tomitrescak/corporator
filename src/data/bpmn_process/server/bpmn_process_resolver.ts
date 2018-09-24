import { FixtureContext, Mutation, purge, Query, Yoga } from '../../utils';

export const query: Query = {
  async processes(
    _parent,
    { input: { status = 'Published', name, skip = 0, first = 20 } },
    ctx,
    info
  ) {
    const user = await ctx.getUser();
    const where = purge<Yoga.BpmnProcessWhereInput>({
      name_contains: name,
      status,
      access: {
        read_some: {
          roleId_in: user.roles
        }
      }
    });

    return ctx.db.query.bpmnProcesses(
      {
        where,
        skip,
        first
      },
      info
    );
  }
};

export const mutation: Mutation = {
  async createProcess(_parent, { input: { description, status, name, model } }, ctx, info) {
    const userId = ctx.userId;
    const process = await ctx.db.mutation.createBpmnProcess(
      {
        data: {
          actionCount: 0,
          dataDescriptors: null,
          resources: null,
          description,
          model,
          name,
          status,
          type: 'Sales',
          version: 0,
          access: {
            create: {
              createdOn: new Date(),
              createdById: userId,
              read: {
                create: {}
              },
              write: {
                create: {}
              },
              execute: {
                create: {}
              }
            }
          }
        }
      },
      info
    );
    return process;
  }
};

export async function fixtures(ctx: ServerContext, fixtureContext: FixtureContext) {
  const hasProcesses = await ctx.db.exists.BpmnProcess();
  if (hasProcesses) {
    return;
  }

  // tslint:disable-next-line:no-console
  console.log('Fixtures process');

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

  fixtureContext.processes = inserted;
}
