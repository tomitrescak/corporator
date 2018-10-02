import { create, its } from '../../../tests/index';

describe('Bpmn Process Instance', () => {
  its(
    'starts',
    {
      clear: ['BpmnProcessInstance', 'BpmnProcess', 'Log'],
      user: {
        name: 'Dean'
      }
    },
    async ctx => {
      // create instance
      // check if status has been set to Running
      // check if appropriate lane has been executed
    }
  );

  its(
    'pauses',
    {
      clear: ['BpmnProcessInstance', 'BpmnProcess', 'Log'],
      user: {
        name: 'Dean'
      }
    },
    async ctx => {
      // create instance
      // check if status has been set to Paused
      // check if status of child task Instance has been set to Paused
    }
  );

  its(
    'aborts',
    {
      clear: ['BpmnProcessInstance', 'BpmnProcess', 'Log'],
      user: {
        name: 'Dean'
      }
    },
    async ctx => {
      // create instance
      // check if status has been set to Aborted
      // check if status of child task Instance has been set to Aborted
    }
  );

  its(
    'finishes',
    {
      clear: ['BpmnProcessInstance', 'BpmnProcess', 'Log'],
      user: {
        name: 'Dean'
      }
    },
    async ctx => {
      // create instance
      // check if status has been set to Finished
      // check if status of child task Instance has been set to Finished

      // check date finished
    }
  );
});
