import { Query, Yoga } from 'data/utils';

export const query: Query = {
  async resourceQuery(_parent, { id }, ctx, info): Promise<Yoga.Resource> {
    // const userId = getUserId(ctx.userId);
    return ctx.db.query.resource({ where: { id } }, info);
  },
  async documentQuery(_parent, { id }, ctx, info): Promise<Yoga.Document> {
    return ctx.db.query.document({ where: { id } }, info);
  }
};
