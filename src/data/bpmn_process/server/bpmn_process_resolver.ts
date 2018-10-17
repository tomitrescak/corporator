import { Mutation, purge, Query, Resolver, Yoga } from '../../utils';

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
      publicationStatus: status,
      OR: [{ readRole: null }, ...user.roles.map(r => ({ readRole_contains: r }))]
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
          schema: null,
          resources: null,
          description,
          model,
          name,
          publicationStatus: status,
          type: 'Sales',
          version: 0,
          createdById: userId
        }
      },
      info
    );
    return process;
  }
};
