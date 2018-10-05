import { Mutation, Prisma, purge, Query, Resolver, Yoga } from 'data/utils';
import { BpmnProcessInstance } from '../../yoga/models/bpmn_process_instance_model';
import { BpmnProcessModel } from '../../yoga/models/bpmn_process_model';

const graphql = (e: TemplateStringsArray) => e[0];

export const query: Query = {
  async bpmnProcessInstancesQuery(_parent, { input }, ctx, info) {
    return ctx.db.query.bpmnProcessInstances(
      {
        where: purge<Prisma.BpmnProcessInstanceWhereInput>({
          status: input.status
        }),
        skip: input.skip,
        first: input.first
      },
      info
    );

    // // sort by name

    // return result.sort((a, b) => {
    //   return a.process.name.localeCompare(b.process.name, 'en', { numeric: true });
    // });
  },
  async bpmnProcessInstanceQuery(_parent, { id }, ctx, info) {
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

export const resolver: Resolver<Yoga.BpmnProcessInstance> = {
  BpmnProcessInstance: {
    owner: {
      fragment: graphql`
        fragment Instance on BpmnProcessInstance {
          ownerId
        }
      `,
      resolve(parent, _, ctx) {
        return ctx.cache.user.findById(parent.ownerId);
      }
    }
  }
};

export const mutation: Mutation = {
  async launchProcessInstance(_parent, { input: { processId, role } }, ctx) {
    const userId = ctx.userId;

    const processInstanceDAO = await ctx.db.mutation.createBpmnProcessInstance(
      {
        data: {
          dateStarted: new Date(),
          ownerId: userId,
          processId: processId,
          data: '{}',
          status: 'Running'
        }
      },
      `{
      id
      data
      status
    }`
    );

    // const m = await ctx.db.query.bpmnProcessInstance(
    //   { where: { id: processInstanceDAO.id } },
    //   `{
    //     id
    //     owner {
    //       ${userFragment}
    //     }
    //   }`
    // );

    // processInstanceDAO.owner = await ctx.cache.user.findById(userId);

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
        createdById
        updatedById
        updatedAt
        actionCount
        description
        model
        name
        type
        publicationStatus
    }`
    );

    // console.log(bpmnProcessModelDao);
    const bpmnProcessModel = new BpmnProcessModel(bpmnProcessModelDao);

    const processInstance = new BpmnProcessInstance(processInstanceDAO, bpmnProcessModel);
    return processInstance.start(ctx, role);
  },
  async duplicateProcessInstance(_parent, { input: { processInstanceId } }, ctx, info) {
    const processInstanceDAO = await ctx.db.query.bpmnProcessInstance(
      {
        where: {
          id: processInstanceId
        }
      },
      `{
        id
        comments
        dataFinished
        dateStarted
        duration
        owner
        status
        data
        log
        tasks
        process {
          id
          access
          actionCount
          dataDescriptors
          description
          model
          name
          type
          resources
          status
          version
          versions
        }
      } `
    );
    const newProcessInstance = BpmnProcessInstance.duplicateInstance(processInstanceDAO);
      }
    });

    if (taskInstances) {
      let newTaskInstanceStatus: Prisma.BpmnTaskInstanceStatus;

      switch (status) {
        case 'Running':
          newTaskInstanceStatus = 'Started';
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

    return newProcessInstance;
  },
  async setProcessInstanceStatus(_parent, { input }, ctx, info) {
    return BpmnProcessInstance.setStatus(ctx, input, info);
  }
};
