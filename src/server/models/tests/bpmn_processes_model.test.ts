import { BpmnProcessesModel } from '../bpmn_processes_model';
import { ServerContext } from '../context';
import { create } from '../../../shared/test_data';

const definition = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/Bpmn/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<process id="theProcess2" isExecutable="true">
  <exclusiveGateway id="decision" default="flow2" />
  <endEvent id="end1" />
  <endEvent id="end2" />
  <startEvent id="start1" />
  <sequenceFlow id="flow2" sourceRef="decision" targetRef="end1" />
  <sequenceFlow id="flow1" sourceRef="start" targetRef="decision" />
  <sequenceFlow id="flow3" sourceRef="decision" targetRef="end2">
    <conditionExpression>true</conditionExpression>
  </sequenceFlow>
</process>
</definitions>`;

let context: ServerContext;

// connect context to database
beforeEach(async () => {
  context = await ServerContext.connect();
});

// disconnect context from database
afterEach(async () => {
  await ServerContext.disconnect(context);
});

describe('startActivity', () => {
  it('checks access', async () => {
    // fill db with activity
    await context.BpmnProcess.insertMany([
      create.bpmnProcessDao(
        { id: 'bpmn1', definition },
        create.accessDao({
          read: [create.accessConditionDao({ roleId: 'default' })],
          write: [create.accessConditionDao({ roleId: 'default' }), create.accessConditionDao({ roleId: 'other' })],
          execute: [create.accessConditionDao({ roleId: 'default' })]
        })
      ),
      create.bpmnProcessDao({ id: 'bpmn2' })
    ]);

    // init model
    const model = new BpmnProcessesModel(null);

    // create user in context
    // user without permission
    context.User = create.userDao({ id: 'u1', roles: ['other'] });
    const activityModel1 = await model.startActivity(context, 'bpmn1');
    expect(activityModel1).toBe(null);

    // user with permission
    context.User = create.userDao({ id: 'u2', roles: ['default', 'other'] });
    const activityModel2 = await model.startActivity(context, 'bpmn1');
    // console.log(activityModel2)
    expect(activityModel2).not.toBe(null);
  });

  it('launches a new activity, storing information in the database', async () => {
    await context.BpmnProcess.insertMany([
      create.bpmnProcessDao(
        { id: 'bpmn1', definition },
        create.accessDao({
          read: [create.accessConditionDao({ roleId: 'default' })],
          write: [create.accessConditionDao({ roleId: 'default' }), create.accessConditionDao({ roleId: 'other' })],
          execute: [create.accessConditionDao({ roleId: 'default' })]
        })
      ),
      create.bpmnProcessDao({ id: 'bpmn2' })
    ]);

    // init model
    const model = new BpmnProcessesModel(null);

    // user with permission
    context.User = create.userDao({ id: 'u2', roles: ['default', 'other'] });
    const activityModel2 = await model.startActivity(context, 'bpmn1');
    expect(activityModel2).not.toBe(null);

    // query db for new activity
    const activities = await context.Activities.find({ id:'start1', processId: 'bpmn1' }).toArray();
    expect(activities.length).toBe(1);
    // console.log(activities[0]);

    expect(true).toBe(false);
  });

  it('runs all possible actions', async () => {
    // fill db with activity
    await context.BpmnProcess.insertMany([
      create.bpmnProcessDao(
        { id: 'bpmn1', definition },
        create.accessDao({
          read: [create.accessConditionDao({ roleId: 'default' })],
          write: [create.accessConditionDao({ roleId: 'default' }), create.accessConditionDao({ roleId: 'other' })],
          execute: [create.accessConditionDao({ roleId: 'default' })]
        })
      ),
      create.bpmnProcessDao({ id: 'bpmn2' })
    ]);

    // init model
    const model = new BpmnProcessesModel(null);

    // create user in context
    // user without permission
    context.User = create.userDao({ id: 'u1', roles: ['other'] });
    const activityModel1 = await model.startActivity(context, 'bpmn1');
    expect(activityModel1).toBe(null);

    // user with permission
    context.User = create.userDao({ id: 'u2', roles: ['default', 'other'] });
    const activityModel2 = await model.startActivity(context, 'bpmn1');
    // console.log(activityModel2)
    // returned activity should be latest activity?
    // in this case, the end2 activity.
    const activities = await context.Activities.find({ id:'end2', processId: 'bpmn1' }).toArray();
    expect(activities.length).toBe(1);
    // console.log(activities[0]);
    expect(activityModel2).not.toBe(null);

  });
});

// // DEAN: One way to create mocks is to have them in the __mocks__ directory next to your module
// it('check "ActionsModel" mock in __mocks__ folder', () => {
//   const actions = new ActionsModel(null);
//   expect(actions.findOne({})).toBe(2);
//   console.log(actions.findOne({}));
// });

// // DEAN: The other way to to create manual mocks
// it('create manual mocks', () => {
//   const ActionsModel = jest.fn<MongoEntity<Corpix.Collections.ActivityDao>>().mockImplementation(() => ({
//     findOne: jest.fn(() => 3)
//   }));
//   const actions = new ActionsModel(null);
//   expect(actions.findOne({})).toBe(3);
//   console.log(actions.findOne({}));
// });
