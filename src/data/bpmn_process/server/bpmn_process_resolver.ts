import { Mutation, purge, Query, Yoga } from '../../utils';

export const query: Query = {
  async process(_parent, { id }, ctx, info) {
    return ctx.db.query.bpmnProcess({ where: { id } }, info);
  },
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
        orderBy: 'name_ASC',
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
