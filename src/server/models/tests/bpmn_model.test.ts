// jest.mock('bpmn-moddle', () => {
//   class Moddle {
//     fromXML(xml: string, cb: Function) {
//       cb();
//     }
//   }
//   return {
//     default: Moddle
//   };
// });

import { create } from '../../../shared/test_data';
import { BpmnProcess } from '../bpmn_process_model';

// import moddle from 'bpmn-moddle';

const bpmn = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
<process id="theProcess2" isExecutable="true">
  <startEvent id="theStart1" />
  <exclusiveGateway id="decision" default="flow2" />
  <endEvent id="end1" />
  <endEvent id="end2" />
  <sequenceFlow id="flow1" sourceRef="theStart" targetRef="decision" />
  <sequenceFlow id="flow2" sourceRef="decision" targetRef="end1" />
  <sequenceFlow id="flow3" sourceRef="decision" targetRef="end2">
    <conditionExpression>true</conditionExpression>
  </sequenceFlow>
</process>
</definitions>`;

it('creates a new instance from database', async () => {
  const model = new BpmnProcess(create.bpmnProcessDao());

  // test all properties
  expect(model.status).toEqual('published');
  expect(model.version).toEqual(0);
  expect(model.access).toBeDefined();
  expect(model.actionCount).toEqual(0);
  expect(model.generatedDescription).toBeNull();

  await model.loadDefinition(bpmn);

  try {
    const m = require('bpmn-moddle');
  } catch (e) {
    console.log(e);
    console.trace();
  }
  // console.log(m.default());
  // console.log(moddle.loaFromXml());
  // m.loadFromXml();

  // console.log(Object.keys(model.definition));
  console.log(model.definition);
  // expect(model.definition).not.toBeUndefined();
  // expect(model.definition).not.toBeNull();
});
