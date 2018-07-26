import { Mutation, Notification, Query, Resolver } from '../utils';

export const query: Query = {
  notifications(_parent, { start, end }, ctx, info) {
    // return ctx.db.query.notifications(
    //   { where: { owner: { id: getUserId(ctx) } }, skip: start, last: end },
    //   info
    // );
    return ctx.db.query.notifications({ skip: start, last: end}, info);
  }
};

export const mutation: Mutation = {
  async notify(_parent, args, ctx, info) {
    await ctx.db.mutation.updateUser(
      {
        where: { id: args.userId },
        data: {
          notifications: {
            create: {
              code: args.code,
              params: { set: args.params },
              processInstance: {
                connect: {
                  id: args.processInstanceId
                }
              },
              visible: true
            }
          }
        }
      },
      info
    );

    // return user.notifications[0];
    // const notification = await ctx.db.query.notifications({ where: {     }); // .user()

    return true;
  }
};

export const resolver: Resolver<Notification> = {
  Notification: {
    text: async (parent, _args, ctx, _info) => {
      const results = await ctx.db.query.localisations({
        where: { code: parent.code, language: ctx.session.language }
      });
      return results[0];
    }
  }
};
