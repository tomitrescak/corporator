import { ProcessInstanceItem } from 'client/modules/process/views/process_instance_item_view';
import { FixtureContext, Mutation, Prisma, purge, Query, Yoga } from 'data/utils';
import { BpmnProcessInstance } from '../../yoga/models/bpmn_process_instance_model';
import { BpmnProcessModel } from '../../yoga/models/bpmn_process_model';

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
  async launchProcessInstance(_parent, { input: { processId } }, ctx, info) {
    const userId = ctx.userId;

    const processInstanceDAO = await ctx.db.mutation.createBpmnProcessInstance({
      data: {
        dateStarted: new Date(),
        // duration: 0,
        owner: {
          connect: {
            id: userId
          }
        },
        process: {
          connect: {
            id: processId
          }
        },
        resources: {},
        status: 'Running'
      }
    });

    // await ctx.db.mutation.updateUser(
    //   {
    //     where: { id: userId },
    //     data: {
    //       processes: {
    //         connect: {
    //           id: processInstanceDAO.id
    //         }
    //       }
    //     }
    //   },
    //   info
    // );

    const bpmnProcessModelDao = await ctx.db.query.bpmnProcess({ where: { id: processId } });
    const bpmnProcessModel = new BpmnProcessModel(bpmnProcessModelDao);

    const processInstance = new BpmnProcessInstance(processInstanceDAO, bpmnProcessModel);
    return processInstance.Start();
  },
  async duplicateProcessInstance(_parent, { input: { processId } }, ctx, info) {
    const processInstanceDAO = ctx.db.query.bpmnProcessInstance({
      where: {
        id: processId
      }
    });

    const newProcessInstance = BpmnProcessInstance.duplicateInstance();
  },
  async setProcessInstanceStatus(_parent, { input: { processId, status } }, ctx, info) {
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

      taskInstances.forEach(async (taskInstance: Prisma.BpmnTaskInstance) => {
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

  const processes: Yoga.LaunchProcessInstanceInput[] = [
    { processId: fixtureContext.processes[0].id },
    { processId: fixtureContext.processes[0].id }
    // { processId: fixtureContext.processes[1].id }
  ];

  let inserted: Yoga.BpmnProcessInstance[] = [];
  for (let input of processes) {
    const process = await mutation.launchProcessInstance(null, { input }, ctx);
    inserted.push(process);
  }
  fixtureContext.processInstances = inserted;
}
