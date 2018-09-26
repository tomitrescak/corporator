import { Query, Yoga } from 'data/utils';

export const query: Query = {
  async formQuery(_parent, { id }, ctx, info): Promise<Yoga.Form> {
    return ctx.db.query.form({ where: { id } }, info);
  }
};
