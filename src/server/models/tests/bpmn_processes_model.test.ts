jest.mock('../context');
jest.mock('../actions_model');

// import { MongoEntity } from 'apollo-connector-mongodb';
import { ActionsModel } from '../actions_model';
// import { BpmnProcessesModel } from '../bpmn_processes_model';

// DEAN: One way to create mocks is to have them in the __mocks__ directory next to your module
it('check "ActionsModel" mock in __mocks__ folder', () => {
  const actions = new ActionsModel(null);
  expect(actions.findOne({})).toBe(2);
  // console.log(actions.findOne({}));
});

// DEAN: The other way to to create manual mocks
it('create manual mocks', () => {
  // const ActionsModel = jest
  //   .fn<MongoEntity<Corpix.Collections.ActivityDao>>()
  //   .mockImplementation(() => ({
  //     findOne: jest.fn(() => 3)
  //   }));
  // const actions = new ActionsModel(null);
  // expect(actions.findOne({})).toBe(3);
  // console.log(actions.findOne({}));
});

describe('startActivity', () => {
  it('checks access', () => {
    // const model = new BpmnProcessesModel(null);
    // model.startActivity(mock, '1');
  });

  it('launches a new activity, storing information in the database', () => {
    /**/
  });

  it('runs all possible actions', () => {
    /**/
  });
});
