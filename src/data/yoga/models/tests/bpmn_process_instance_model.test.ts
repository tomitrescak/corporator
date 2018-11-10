// import { create, its } from '../../../tests/index';

// import { BpmnProcessInstance } from '../bpmn_process_instance_model';

describe('Bpmn Process Instance', () => {
  it('test', ()=> {
    /**/
  });
  
  // its(
  //   'sets status to aborted',
  //   {
  //     // clear: ['BpmnProcess', 'User', 'BpmnProcessInstance'],
  //     clear: ['BpmnProcessInstance', 'BpmnProcess', 'User'],
  //     user: {
  //       uid: 'user1',
  //       name: 'Dean'
  //     }
  //   },
  //   async ctx => {
  //     // expect(true).toBe(false);
  //     const bpmnProcess = await create.bpmnProcessMutation();

  //     const processInstance = await create.bpmnProcessInstanceMutation({
  //       ownerId: ctx.userId,
  //       processId: bpmnProcess.id
  //     });

  //     const pInstanceDAO = await BpmnProcessInstance.abortInstance(processInstance.id, ctx);
  //     expect(pInstanceDAO.status).toEqual('Aborted');
  //   }
  // );

  // // its(
  // //   'correctly aborts process instance and related task instances',
  // //   {
  // //     clear: ['BpmnProcessTasks', 'BpmnProcessInstance', 'BpmnProcess', 'BpmnTaskInstance', 'User']
  // //   },
  // //   async ctx => {
  // //     /**/
  // //     expect(false).toBe(true);
  // //     const taskDAO = await create.bpmnTaskMutation();

  // //     const task = await ctx.db.query.bpmnTasks({
  // //       where: {
  // //         name: 'Task Name'
  // //       }
  // //     });

  // //     expect(task.length).toEqual(2);

  // //     const processDAO = await create.bpmnProcessMutation();
  // //     const processInstanceDAO = await create.bpmnProcessInstanceMutation({
  // //       ownerId: ctx.userId,
  // //       processId: processDAO.id,
  // //       status: 'Running'
  // //     });

  // //     await create.bpmnTaskInstanceMutation(
  // //       {
  // //         status: 'Paused'
  // //       },
  // //       processInstanceDAO.id,
  // //       taskDAO.id
  // //     );
      
  // //     const pInstanceDAO = await BpmnProcessInstance.abortInstance(processInstanceDAO.id, ctx);
  // //     expect(pInstanceDAO.status).toEqual('Aborted');

  // //     const taskInstances = await ctx.db.query.bpmnTaskInstances({
  // //       where: {
  // //         processInstanceId:  processInstanceDAO.id
  // //       }
  // //     });

  // //     taskInstances.forEach(taskInstance => {
  // //       expect(taskInstance.status).toEqual('Aborted');
  // //     });
  // //   }
  // // );

  // its(
  //   'sets status to finished',
  //   {
  //     // clear: ['BpmnProcess', 'User', 'BpmnProcessInstance'],
  //     clear: ['BpmnProcessInstance', 'BpmnProcess', 'User'],
  //     user: {
  //       uid: 'user1',
  //       name: 'Dean'
  //     }
  //   },
  //   async ctx => {
  //     // expect(true).toBe(false);
  //     const bpmnProcess = await create.bpmnProcessMutation();

  //     const processInstance = await create.bpmnProcessInstanceMutation({
  //       ownerId: ctx.userId,
  //       processId: bpmnProcess.id
  //     });

  //     const pInstanceDAO = await BpmnProcessInstance.finishInstance(processInstance.id, ctx);
  //     expect(pInstanceDAO.status).toEqual('Finished');
  //   }
  // );

  // its('correctly finishes process instance and related task instances', {}, async _ctx => {
  //   /**/
  // });

  // its(
  //   'sets status to paused',
  //   {
  //     // clear: ['BpmnProcess', 'User', 'BpmnProcessInstance'],
  //     clear: ['BpmnProcessInstance', 'BpmnProcess', 'User'],
  //     user: {
  //       uid: 'user1',
  //       name: 'Dean'
  //     }
  //   },
  //   async ctx => {
  //     // expect(true).toBe(false);
  //     const bpmnProcess = await create.bpmnProcessMutation();

  //     const processInstance = await create.bpmnProcessInstanceMutation({
  //       ownerId: ctx.userId,
  //       processId: bpmnProcess.id
  //     });
  //     const pInstanceDAO = await BpmnProcessInstance.pauseInstance(processInstance.id, ctx);
  //     expect(pInstanceDAO.status).toEqual('Paused');
  //   }
  // );
  // its('correctly pauses process instance and related task instances', {}, async _ctx => {
  //   /**/
  // });
});
