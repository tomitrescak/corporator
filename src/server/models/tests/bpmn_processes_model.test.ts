jest.mock('../context');

import { BpmnProcessesModel } from '../bpmn_processes_model';

const mock: any = {
  BpmnProcess: jest.fn()
};

describe('startActivity', () => {
  it('checks access', () => {
    // ServerContext.mockClear();

    const model = new BpmnProcessesModel(null);
    model.startActivity(mock, '1');
  });

  it('launches a new activity, storing information in the database', () => {});

  it('runs all possible actions', () => {});
});
