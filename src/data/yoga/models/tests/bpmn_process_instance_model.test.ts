import { create, its } from '../../../tests/index';

import { BpmnProcessInstance } from '../bpmn_process_instance_model';

describe('Bpmn Process Instance', () => {
  its(
    'sets status to aborted',
    {
      // clear: ['BpmnProcess', 'User', 'BpmnProcessInstance'],
      clear: ['BpmnProcessInstance', 'BpmnProcess', 'User' ],
      user: {
        uid: 'user1',
        name: 'Dean'
      }
    },
    async ctx => {
      // expect(true).toBe(false);
      const bpmnProcess = await create.process(ctx);

      const processInstance = await ctx.db.mutation.createBpmnProcessInstance({
        data: {
          dateStarted: new Date(),
          data: {},
          status: 'Running',
          owner: {
            connect: {
              id: ctx.userId
            }
          },
          process: {
            connect: {
              id: bpmnProcess.id
            }
          }
        }
      });
      const pInstanceDAO = await BpmnProcessInstance.abortInstance(processInstance.id, ctx);
      expect(pInstanceDAO.status).toEqual('Aborted');
    },
    
  );

  its(
    'correctly aborts process instance and related task instances',
    {
      clear: ['BpmnProcessInstance', 'BpmnProcess', 'BpmnTaskInstance', 'User'],
      user: {
        uid: 'user1'
      }
    },
    async (ctx, user) => {
      /**/
      // const taskDAO = await create.bpmnTask(ctx);

      // const task = await ctx.db.query.bpmnTasks({
      //   where: {
      //     name: 'taskName' 
      //   }
      // });

      // expect(task.length).toEqual(2);

      // const processDAO = await create.process(ctx);
      // const processInstanceDAO = await create.bpmnProcessInstance(ctx, {
      //   owner: {
      //     connect: {
      //       id: ctx.userId
      //     }
      //   },
      //   process: {
      //     connect: {
      //       id: processDAO.id
      //     }
      //   }
      // });
      
      // await create.bpmnTaskInstance(ctx, {
      //   processInstance: {
      //     connect: {
      //       id: processInstanceDAO.id
      //     }
      //   },
      //   status: 'Paused',
      //   task: {
      //     connect: {
      //       id: taskDAO.id
      //     }
      //   }
      // });

      // const pInstanceDAO = await BpmnProcessInstance.abortInstance(processInstanceDAO.id, ctx);
      // expect(pInstanceDAO.status).toEqual('Aborted');

      // const taskInstances = await ctx.db.query.bpmnTaskInstances({
      //   where: {
      //     processInstance: {
      //       id: processInstanceDAO.id
      //     }
      //   }
      // });

      // taskInstances.forEach(taskInstance => {
      //   expect(taskInstance.status).toEqual('Aborted');
      // });

    }
  );

  its(
    'sets status to finished',
    {
      // clear: ['BpmnProcess', 'User', 'BpmnProcessInstance'],
      clear: ['BpmnProcessInstance', 'BpmnProcess', 'User' ],
      user: {
        uid: 'user1',
        name: 'Dean'
      }
    },
    async ctx => {
      // expect(true).toBe(false);
      const bpmnProcess = await create.process(ctx);

      const processInstance = await ctx.db.mutation.createBpmnProcessInstance({
        data: {
          dateStarted: new Date(),
          data: {},
          status: 'Running',
          owner: {
            connect: {
              id: ctx.userId
            }
          },
          process: {
            connect: {
              id: bpmnProcess.id
            }
          }
        }
      });
      const pInstanceDAO = await BpmnProcessInstance.finishInstance(processInstance.id, ctx);
      expect(pInstanceDAO.status).toEqual('Finished');
    },
    
  );


  its('correctly finishes process instance and related task instances', {}, async ctx => {
    /**/
  });

  its(
    'sets status to paused',
    {
      // clear: ['BpmnProcess', 'User', 'BpmnProcessInstance'],
      clear: ['BpmnProcessInstance', 'BpmnProcess', 'User' ],
      user: {
        uid: 'user1',
        name: 'Dean'
      }
    },
    async ctx => {
      // expect(true).toBe(false);
      const bpmnProcess = await create.process(ctx);

      const processInstance = await ctx.db.mutation.createBpmnProcessInstance({
        data: {
          dateStarted: new Date(),
          data: {},
          status: 'Running',
          owner: {
            connect: {
              id: ctx.userId
            }
          },
          process: {
            connect: {
              id: bpmnProcess.id
            }
          }
        }
      });
      const pInstanceDAO = await BpmnProcessInstance.pauseInstance(processInstance.id, ctx);
      expect(pInstanceDAO.status).toEqual('Paused');
    },
    
  );
  its('correctly pauses process instance and related task instances', {}, async ctx => {
    /**/
  });
  
});
