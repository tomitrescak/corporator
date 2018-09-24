import { FixtureContext, Mutation, Prisma, purge, Query, Yoga } from 'data/utils';
import { BpmnTaskInstanceModel } from '../../yoga/models/bpmn_task_instance_model';

export const query: Query = {
  bpmnTaskInstances(_parent, { input }, ctx, info) {
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
  async createTaskInstance(_parent, { input: { processInstanceId, taskId, performerRoles } }, ctx, info) {
    
    const newTaskInstance = await ctx.db.mutation.createBpmnTaskInstance({
      data: {
        dateStarted: new Date(),
        duration: 0,
        performerRoles,
        processInstance: {
          connect: {
            id: processInstanceId
          }
        },
        status: 'Waiting',
        taskId
      }
    });

    return newTaskInstance;
    
  },
  async updateTaskInstanceStatus(_parent, { input: { taskId, status } }, ctx, info) {
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

  async submitForm(_parent, { input: { taskId, form } }, ctx, info) {
    const taskInstanceDAO = await ctx.db.query.bpmnTaskInstance({
      where: {
        id: taskId
      }
    }); 

    const taskInstance =  new BpmnTaskInstanceModel(taskInstanceDAO);

    return taskInstance.execute(ctx, form);
  }
};

