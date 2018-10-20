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
          processInstanceId: input.processInstanceId
        })
      },
      info
    );
  }
};

export const mutation: Mutation = {
  async updateTaskInstanceStatus(_parent, { input: { taskInstanceId, status } }, ctx) {
    const taskInstance = await ctx.db.mutation.updateBpmnTaskInstance({
      where: {
        id: taskInstanceId
      },
      data: {
        status
      }
    });

    return taskInstance;
  },

  async submitTask(_parent, { input: { taskInstanceId } }, ctx) {
    const taskInstanceDAO = await ctx.db.query.bpmnTaskInstance({
      where: {
        id: taskInstanceId
      }
    });

    const taskInstance = new BpmnTaskInstanceModel(taskInstanceDAO);

    return taskInstance.execute(ctx);
  },
  async saveForm(_parent, { input: { taskInstanceId, data } }, ctx) {
    /* store info but do not finish task instance */
    return BpmnTaskInstanceModel.saveForm(ctx, taskInstanceId, data);
  }
};
