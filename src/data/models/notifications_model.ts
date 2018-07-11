import { getUserId, Mutation, Query } from './utils';

export const query: Query = {
  notifications(_parent, { start, end }, ctx, info) {
    return ctx.db.query.notifications(
      { where: { owner: { id: getUserId(ctx) } }, skip: start, last: end },
      info
    );
  }
};

export const mutation: Mutation = {
  notify(_parent, args, ctx, info) {
    return ctx.db.mutation.createNotification({ data: {
      code: args.code,
      owner: {
        connect: {
          id: args.userId
        }
      },
      params: { set: args.params },
      processInstance: {
        connect: {
          id: args.processInstanceId
        }
      },
      text: {
        connect: {
          id: 
        }
      },
      visible: true
    } }, info);
  }
};
