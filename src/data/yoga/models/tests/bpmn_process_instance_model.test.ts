import { create, its } from '../../../tests/index';

import { BpmnProcessInstance } from '../bpmn_process_instance_model';

describe('Bpmn Process Instance', () => {
  its(
    'sets status to finished',
    {
      // clear: ['BpmnProcess', 'User', 'BpmnProcessInstance'],
      clear: ['BpmnProcessInstance', 'BpmnProcess' ],
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
      const pInstanceDAO = await BpmnProcessInstance.setStatus(ctx, { processInstanceId: processInstance.id, status: 'Finished' }, '');
      // expect(true).toBe(false);
      expect(pInstanceDAO.status).toEqual('Finished');

      // const taskInstances = await ctx.db.query.bpmnTaskInstances({
      //   where: {
      //     processInstance: {
      //       id: process.id
      //     }
      //   }
      // });

      // taskInstances.forEach(task => {
      //   expect(task.status).toEqual('Finished');
      // });
    }
  );
  // its(
  //   'starts',
  //   {
  //     clear: ['User', 'BpmnProcessInstance', 'BpmnProcess', 'Log'],
  //     user: {
  //       name: 'Dean'
  //     }
  //   },
  //   async ctx => {
  //     // create instance
  //     // check if status has been set to Running
  //     // check if appropriate lane has been executed
  //   }
  // );

  // its(
  //   'pauses',
  //   {
  //     clear: ['User', 'BpmnProcessInstance', 'BpmnProcess'],
  //     user: {
  //       name: 'Dean'
  //     }
  //   },
  //   async ctx => {
  //     // create instance
  //     // check if status has been set to Paused
  //     // check if status of child task Instance has been set to Paused
  //   }
  // );

  // its(
  //   'aborts',
  //   {
  //     clear: ['User', 'BpmnProcessInstance', 'BpmnProcess'],
  //     user: {
  //       name: 'Dean'
  //     }
  //   },
  //   async ctx => {
  //     // create instance
  //     // check if status has been set to Aborted
  //     // check if status of child task Instance has been set to Aborted
  //   }
  // );

  // its(
  //   'finishes',
  //   {
  //     clear: ['User', 'BpmnProcessInstance', 'BpmnProcess'],
  //     user: {
  //       name: 'Dean'
  //     }
  //   },
  //   async ctx => {
  //     // create instance
  //     // check if status has been set to Finished
  //     // check if status of child task Instance has been set to Finished
  //     // check date finished
  //   }
  // );
});
