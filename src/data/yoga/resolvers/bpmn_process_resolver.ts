import { Query } from '../utils';

export const query: Query = {
  processes(_parent, _args, ctx, info) {
    return ctx.db.query.bpmnProcesses({ where: { status: 'Proposal' } }, info);
  }
};


