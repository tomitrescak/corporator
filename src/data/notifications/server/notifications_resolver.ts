import { FixtureContext, Mutation, purge, Query, Resolver, Yoga } from 'data/utils';

const graphql = (e: TemplateStringsArray) => e[0];

export const query: Query = {
  async notifications(
    _parent,
    { input: { skip = 0, first = 100, visible } },
    ctx,
    info
  ): Promise<Yoga.Notification[]> {
    const userId = ctx.userId;

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

/* =========================================================
    FIXTURES
   ======================================================== */

export async function fixtures(ctx: ServerContext, fixtureContext: FixtureContext) {
  const hasNotification = await ctx.db.exists.Notification();
  if (hasNotification) {
    return;
  }

  // tslint:disable-next-line:no-console
  console.log('Fixtures notifications');
  const { userId } = ctx;
  const notifications: Yoga.NotifyInput[] = [
    {
      userId,
      processInstanceId: fixtureContext.processInstances[0].id,
      code: 'ProcessStarted',
      params: ['Process Name'],
      type: 'Info'
    },
    {
      userId,
      processInstanceId: fixtureContext.processInstances[0].id,
      code: 'ProcessFinished',
      params: ['Process Name'],
      type: 'Info'
    },
    {
      userId,
      processInstanceId: fixtureContext.processInstances[0].id,
      code: 'ProcessAborted',
      params: ['Process Name'],
      type: 'Error'
    },
    {
      userId,
      processInstanceId: fixtureContext.processInstances[0].id,
      code: 'ActionStarted',
      params: ['Action Name', 'Process Name'],
      type: 'Info'
    },
    {
      userId,
      processInstanceId: fixtureContext.processInstances[0].id,
      code: 'ActionFinished',
      params: ['Tomas Trescak', 'Action Name', 'Process Name'],
      type: 'Info'
    },
    {
      userId,
      processInstanceId: fixtureContext.processInstances[0].id,
      code: 'ActionRequired',
      params: ['Action Name', 'Process Name', 'Tomas Trescak'],
      type: 'Info'
    },
    {
      userId,
      processInstanceId: fixtureContext.processInstances[0].id,
      code: 'ActionAborted',
      params: ['Tomas Trescak', 'Action Name', 'Process Name', 'Reason'],
      type: 'Warning'
    }
  ];

  for (let input of notifications) {
    await mutation.notify(null, { input }, ctx);
  }
}
