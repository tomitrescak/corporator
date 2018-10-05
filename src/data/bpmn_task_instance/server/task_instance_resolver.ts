import { Mutation, purge, Query, Yoga } from 'data/utils';
import { BpmnTaskInstanceModel } from '../../yoga/models/bpmn_task_instance_model';

// export const resolver: Resolver<Prisma.BpmnTaskInstance> = {
//   BpmnTaskInstance: {
//     performer(parent, _, ctx) {
//       return null;
//       // return UserLoader.instance(() => ctx.db).findById(parent.)
//     }
//   }
// };

export const query: Query = {
  bpmnTaskInstancesQuery(_parent, { input }, ctx, info) {
    throw new Error('Not Implemented');

    return ctx.db.query.bpmnTaskInstances(
      {
        where: purge<Yoga.BpmnTaskInstanceWhereInput>({
          processInstance: { id: input.processInstanceId }
        })
      },
      info
    );
  }
};

export const mutation: Mutation = {
  async createTaskInstance(_parent, _args, _ctx) {
    // { input: { processInstanceId, taskId, performerRoles } }

    throw new Error('Not implemented ...');

    // NOTE FROM TOMAS
    // DEAN: I think you need to use the method from 'UserTask.execute' ....
    // The important bit is that the created task instance have a name assigned.
    // I also think that we are not launching task instance directly ...

    // const newTaskInstance = await ctx.db.mutation.createBpmnTaskInstance({
    //   data: {
    //     dateStarted: new Date(),
    //     duration: 0,
    //     performerRoles: {
    //       set: performerRoles
    //     },
    //     processInstance: {
    //       connect: {
    //         id: processInstanceId
    //       }
    //     },
    //     status: 'Waiting',
    //     taskId
    //   }
    // });
    // return newTaskInstance;
  },
  async updateTaskInstanceStatus(_parent, { input: { taskId, status } }, ctx) {
    const taskInstance = await ctx.db.mutation.updateBpmnTaskInstance({
      where: {
        id: taskId
      },
      data: {
        status
      }
    });

    return taskInstance;
  },

  async submitForm(_parent, { input: { taskId, form } }, ctx) {
    const taskInstanceDAO = await ctx.db.query.bpmnTaskInstance({
      where: {
        id: taskId
      }
    });

    const taskInstance = new BpmnTaskInstanceModel(taskInstanceDAO);

    return taskInstance.execute(ctx, form);
  }
};
