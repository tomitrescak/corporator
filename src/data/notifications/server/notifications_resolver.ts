import { getUserId, Mutation, purge, Query, Resolver, Yoga } from 'data/utils';

const graphql = (e: TemplateStringsArray) => e[0];

export const query: Query = {
  async notificationsQuery(
    _parent,
    { input: { skip = 0, first = 100, visible } },
    ctx,
    info
  ): Promise<Yoga.Notification[]> {
    const userId = getUserId(ctx.userId);

    // return ctx.db.query.notifications(
    //   { where: { owner: { id: getUserId(ctx) } }, skip: start, last: end },
    //   info
    // );
    return ctx.db.query.notifications(
      { where: purge<Yoga.NotificationWhereInput>({ visible, userId }), skip, first },
      info
    );

    // const user = await ctx.db.query.user(
    //   { where: { id: userId } },
    //   gql`
    //     {
    //       notifications (first: ${first}, skip: ${skip}) {
    //         id
    //         createdAt
    //         params
    //         code
    //         text
    //         type
    //       }
    //     }
    //     ${NOTIFICATION_FRAGMENT}
    //   `
    // );

    // return user.notifications;
  }
};

export const mutation: Mutation = {
  async notify(_parent, { input }, ctx, info) {
    const notification = await ctx.db.mutation.createNotification({
      data: {
        userId: input.userId,
        code: input.code,
        params: { set: input.params },
        processInstance: {
          connect: {
            id: input.processInstanceId
          }
        },
        type: input.type,
        visible: true
      }
    });
    await ctx.db.mutation.updateUser(
      {
        where: { id: input.userId },
        data: {
          notifications: {
            connect: {
              id: notification.id
            }
          }
        }
      },
      info
    );

    // return user.notifications[0];
    // const notification = await ctx.db.query.notifications({ where: {     }); // .user()

    return true;
  },
  async removeNotification(_parent, { id }, ctx, info) {
    const userId = ctx.userId;
    await ctx.db.mutation.deleteManyNotifications({ where: { id, userId } }, info);
    return id;
  },
  async clearNotifications(_parent, _args, ctx, info) {
    const userId = ctx.userId;
    await ctx.db.mutation.deleteManyNotifications({ where: { userId } }, info);
    return true;
  }
};

export const resolver: Resolver<Yoga.Notification> = {
  Notification: {
    text: {
      fragment: graphql`
        fragment Text on Notification {
          params
          code
        }
      `,
      resolve: async (parent, _args, ctx, _info) => {
        return ctx.i18n.format(parent.code, parent.params);
      }
    }
  }
};
