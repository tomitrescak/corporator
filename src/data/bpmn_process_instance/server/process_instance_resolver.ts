import { Mutation, Prisma, purge, Query, Yoga } from 'data/utils';
import { BpmnProcessInstance } from '../../yoga/models/bpmn_process_instance_model';
import { BpmnProcessModel } from '../../yoga/models/bpmn_process_model';

export const query: Query = {
  async bpmnProcessInstancesQuery(_parent, { input }, ctx, info) {
    const result = await ctx.db.query.bpmnProcessInstances(
      {
        where: purge<Yoga.BpmnProcessInstanceWhereInput>({
          status: input.status
        }),
        skip: input.skip,
        first: input.first
      },
      info
    );

    // sort by name

    return result.sort((a, b) => {
      return a.process.name.localeCompare(b.process.name, 'en', { numeric: true });
    });
  },
  bpmnProcessInstanceQuery(_parent, { id }, ctx, info) {
    return ctx.db.query.bpmnProcessInstance({ where: { id } }, info);
  }
};

export const accessConditionFragment = `
      organisationId
      roleId
      userId
    `;

export const userFragment = `
  name
  id
`;

export const mutation: Mutation = {
  async launchProcessInstance(_parent, { input: { processId, role } }, ctx) {
    const userId = ctx.userId;

    const processInstanceDAO = await ctx.db.mutation.createBpmnProcessInstance(
      {
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
          data: {},
          status: 'Running'
        }
      },
      `{
      id
      owner {
        ${userFragment}
      }
      data
      status
    }`
    );

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

    const bpmnProcessModelDao = await ctx.db.query.bpmnProcess(
      { where: { id: processId } },
      `{
      id
      access {
        id
        createdById
        createdOn
        modifiedById
        modifiedOn
        read {
          ${accessConditionFragment}
        }
        write {
          ${accessConditionFragment}
        }
        execute {
          ${accessConditionFragment}
        }
      }
      actionCount
      description
      model
      name
      type
      status
    }`
    );
    // console.log(bpmnProcessModelDao);
    const bpmnProcessModel = new BpmnProcessModel(bpmnProcessModelDao);

    const processInstance = new BpmnProcessInstance(processInstanceDAO, bpmnProcessModel);
    return processInstance.start(ctx, role);
  },
  // async duplicateProcessInstance(_parent, { input: { processId } }, ctx, info) {
  //   // const processInstanceDAO = ctx.db.query.bpmnProcessInstance({
  //   //   where: {
  //   //     id: processId
  //   //   }
  //   // });
  //   // const newProcessInstance = BpmnProcessInstance.duplicateInstance();
  // },
  async setProcessInstanceStatus(_parent, { input: { processId, status } }, ctx) {
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
