import { Mutation, Notification, Query, Resolver, Yoga } from '../utils';

export const query: Query = {
  bpmnProcesses(_parent, { input: { skip = 0, first = 100, visible } }, ctx, info) {
    // return ctx.db.query.notifications(
    //   { where: { owner: { id: getUserId(ctx) } }, skip: start, last: end },
    //   info
    // );
    return ctx.db.query.notifications(
      { where: visible == null ? {} : { visible }, skip, first },
      info
    );
  }
};

export const mutation: Mutation = {
  async notify(_parent, { input }, ctx, info) {
    await ctx.db.mutation.updateUser(
      {
        where: { id: input.userId },
        data: {
          notifications: {
            create: {
              code: input.code,
              params: { set: input.params },
              processInstance: {
                connect: {
                  id: input.processInstanceId
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

export async function fixtures(ctx: ServerContext, userId: string) {
  const notifications: Yoga.NotifyInput[] = [
    { userId, processInstanceId: null, code: 'ProcessStarted', params: ['Process Name'] },
    { userId, processInstanceId: null, code: 'ProcessFinished', params: ['Process Name'] },
    { userId, processInstanceId: null, code: 'ProcessAborted', params: ['Process Name'] },
    {
      userId,
      processInstanceId: null,
      code: 'ActionStarted',
      params: ['Process Name', 'Action Name']
    },
    {
      userId,
      processInstanceId: null,
      code: 'ActionFinished',
      params: ['Process Name', 'Action Name', 'Action Result']
    },
    {
      userId,
      processInstanceId: null,
      code: 'ActionRequired',
      params: ['Process Name', 'Action Name']
    }
  ];

  for (let input of notifications) {
    await mutation.notify(null, { input }, ctx);
  }
}
