import { FixtureContext, Mutation, Prisma, purge, Query, Yoga } from 'data/utils';

export const query: Query = {
  bpmnProcessInstances(_parent, { input }, ctx, info) {
    throw new Error('Not Implemented');

    // return ctx.db.query.bpmnProcesses(
    //   {
    //     where: purge<Yoga.BpmnProcessWhereInput>({ name_contains: 'we', status: input.status }),
    //     skip: input.skip,
    //     first: input.first
    //   },
    //   info
    // );
  }
};

export const mutation: Mutation = {
  async createProcessInstance(_parent, { input: { processId } }, ctx, info) {
    const userId = ctx.userId;

    const processInstance = await ctx.db.mutation.createBpmnProcessInstance({
      data: {
        dateStarted: new Date(),
        duration: 0,
        ownerId: userId,
        process: {
          connect: {
            id: processId
          }
        },
        status: 'Running'
      }
    });

    await ctx.db.mutation.updateUser(
      {
        where: { id: userId },
        data: {
          processes: {
            connect: {
              id: processInstance.id
            }
          }
        }
      },
      info
    );

    return processInstance;
  },
  async updateProcessInstanceStatus(_parent, { input: { processId, status } }, ctx, info) {
    const process = await ctx.db.mutation.updateBpmnProcessInstance({
      where: {
        id: processId
      },
      data: {
        status
      }
    });

    // update all taskInstances of this process
    const taskInstances = await ctx.db.query.bpmnTaskInstances({
      where: {
        processInstance: {
          id: processId
        }
      }
    });

    if (taskInstances) {
      let newTaskInstanceStatus: Prisma.BpmnTaskInstanceStatus;

      switch (status) {
        case 'Running':
          newTaskInstanceStatus = 'Waiting';
          break;
        case 'Paused':
          newTaskInstanceStatus = 'Paused';
          break;
        case 'Aborted':
          newTaskInstanceStatus = 'Aborted';
          break;
        case 'Finished':
          newTaskInstanceStatus = 'Finished';
          break;
      }

      taskInstances.forEach(async taskInstance => {
        await ctx.db.mutation.updateBpmnTaskInstance({
          where: {
            id: taskInstance.id
          },
          data: {
            status: newTaskInstanceStatus
          }
        });
      });
    }

    return process;
  }
};

export async function fixtures(ctx: ServerContext, fixtureContext: FixtureContext) {
  const hasProcesses = await ctx.db.exists.BpmnProcessInstance();
  if (hasProcesses) {
    return;
  }

  // tslint:disable-next-line:no-console
  console.log('Fixtures process instances');

  const processes: Yoga.CreateProcessInstanceInput[] = [
    { processId: fixtureContext.processes[0].id },
    { processId: fixtureContext.processes[0].id }
    // { processId: fixtureContext.processes[1].id }
  ];

  let inserted: Yoga.BpmnProcessInstance[] = [];
  for (let input of processes) {
    const process = await mutation.createProcessInstance(null, { input }, ctx);
    inserted.push(process);
  }
  fixtureContext.processInstances = inserted;
}
