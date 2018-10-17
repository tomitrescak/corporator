import { Query, Yoga } from 'data/utils';

export const query: Query = {
  async resourceQuery(_parent, { id }, ctx, info): Promise<Yoga.Resource> {
    // const userId = getUserId(ctx.userId);
    return ctx.db.query.resource({ where: { id } }, info);
  }
};
