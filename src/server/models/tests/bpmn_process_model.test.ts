jest.mock('bpmn-moddle', () => {
  class Moddle {
    fromXML(xml: string, cb: Function) {
      if(xml === 'SourceFlowError') {
        cb(null, jsonSourceFlowError);
      }
      else if(xml === 'TargetFlowError') {
        cb(null, jsonTargetFlowError);
      }
      else if(xml === 'SourceNodeError') {
        cb(null, jsonSourceNodeError);
      }
      else if(xml === 'TargetNodeError') {
        cb(null, jsonTargetNodeError);
      }
      else if(xml === 'DefaultNodeError') {
        cb(null, jsonDefaultNodeError);
      }
      else if(xml === 'NoSequenceFlowError') {
        cb(null, jsonNoSequenceFlowError);
      }
      else {
        cb(null, json);
      }
    }
  }
  return {
    default: Moddle
  };
});

import { create } from '../../../shared/test_data';
import { BpmnProcessModel, BpmnTypes } from '../bpmn_process_model';
import { StartEvent } from '../Bpmn/bpmn_start_event_model';
import { SequenceFlow } from '../Bpmn/bpmn_sequence_flow_model';
// import { BaseElement } from '../Bpmn/bpmn_base_element.model';
import { FlowNode } from '../Bpmn/bpmn_flow_node_model';
import { EndEvent } from '../Bpmn/bpmn_end_event_model';
import { Task } from '../Bpmn/bpmn_task_model';
import { Gateway } from '../Bpmn/bpmn_gateway_model';
import { bpmn, json, jsonTargetFlowError, jsonSourceFlowError, jsonSourceNodeError, jsonTargetNodeError, jsonDefaultNodeError, jsonNoSequenceFlowError } from './json_data';
import { DefaultTask, UserTask, ScriptTask, SendTask, ReceiveTask } from '../Bpmn';




describe('bpmn process model', () => {
  
  it('creates a new instance from database', async () => {
    const model = new BpmnProcessModel(create.bpmnProcessDao());

    // test all properties
    expect(model.status).toEqual('published');
    expect(model.version).toEqual(0);
    expect(model.access).toBeDefined();
    expect(model.actionCount).toEqual(0);
    expect(model.generatedDescription).toBeNull();

    await model.loadDefinition(bpmn);

    // console.log(Object.keys(model.definition));
    // console.log(model.definition);
    expect(model.definition).not.toBeUndefined();
    expect(model.definition).not.toBeNull();
  });

  it('instantiates objects from definition', async () => {
    const model = new BpmnProcessModel(create.bpmnProcessDao());

    await model.loadDefinition(bpmn);
    // number of types in dictionary
    expect(model.elementsDict.size()).toEqual(14);

    // number of total elements in all inner dictionaries
    let total = 0;
    model.elementsDict.forEach((key, value) => {
      // do not count the abstract types because they are all duplicates
      if (key === BpmnTypes.Gateway) return;
      if (key === BpmnTypes.FlowNode) return;
      if (key === BpmnTypes.BaseElement) return;
      total += value.size();
    });

    expect(total).toEqual(30);
  });

  it('links references for all StartEvent objects', async () => {
    const model = new BpmnProcessModel(create.bpmnProcessDao());

    await model.loadDefinition(bpmn);
    const startDict = model.elementsDict.getValue(BpmnTypes.Start);
    expect(startDict.size()).toEqual(1);

    const start = startDict.getValue('StartEvent_1');
    expect(start).toBeDefined();

    if (start instanceof StartEvent) {
      // none incoming
      expect(start.incoming.length).toEqual(0);

      // one outgoing
      expect(start.outgoing.length).toEqual(1);
      const outElem = start.outgoing[0];
      expect(outElem instanceof SequenceFlow).toEqual(true);
      expect(outElem.id).toEqual('SequenceFlow_06nr081');
    }
  });

  it('links references for all EndEvent objects', async () => {
    const model = new BpmnProcessModel(create.bpmnProcessDao());

    await model.loadDefinition(bpmn);
    const endDict = model.elementsDict.getValue(BpmnTypes.End);
    expect(endDict).toBeDefined();
    expect(endDict.size()).toEqual(1);

    // for each flownode, check the object for each incoming and outgoing object
    const end = endDict.getValue('EndEvent_0gtowi7');
    expect(end).toBeDefined();

    if (end instanceof EndEvent) {
      // none incoming
      expect(end.incoming.length).toEqual(3);
      let inElem = end.incoming[0];
      expect(inElem instanceof SequenceFlow).toEqual(true);
      expect(inElem.id).toEqual('SequenceFlow_05aak41');
      inElem = end.incoming[1];
      expect(inElem instanceof SequenceFlow).toEqual(true);
      expect(inElem.id).toEqual('SequenceFlow_1eq1yih');
      inElem = end.incoming[2];
      expect(inElem instanceof SequenceFlow).toEqual(true);
      expect(inElem.id).toEqual('SequenceFlow_1c11ado');

      // one outgoing
      expect(end.outgoing.length).toEqual(0);
    }
  });

  it('links references for all Task objects', async () => {
    const model = new BpmnProcessModel(create.bpmnProcessDao());

    await model.loadDefinition(bpmn);
    const taskDict = model.elementsDict.getValue(BpmnTypes.Task);
    expect(taskDict.size()).toEqual(6);

    // for each task, check the object for each incoming and outgoing object
    let task = taskDict.getValue('Task_124kol6');
    expect(task).toBeDefined();
    expect(task instanceof UserTask).toEqual(true);

    if (task instanceof Task) {
      // one incoming
      expect(task.incoming.length).toEqual(1);
      const inElem = task.incoming[0];
      expect(inElem instanceof SequenceFlow).toEqual(true);
      expect(inElem.id).toEqual('SequenceFlow_06nr081');
      // one outgoing
      expect(task.outgoing.length).toEqual(1);
      const outElem = task.outgoing[0];
      expect(outElem instanceof SequenceFlow).toEqual(true);
      expect(outElem.id).toEqual('SequenceFlow_0m6e1dq');
    }

    task = taskDict.getValue('Task_1imx9ug');
    expect(task).toBeDefined();
    expect(task instanceof SendTask).toEqual(true);

    if (task instanceof Task) {
      // one incoming
      expect(task.incoming.length).toEqual(1);
      const inElem = task.incoming[0];
      expect(inElem instanceof SequenceFlow).toEqual(true);
      expect(inElem.id).toEqual('SequenceFlow_0xyok6d');
      // one outgoing
      expect(task.outgoing.length).toEqual(1);
      const outElem = task.outgoing[0];
      expect(outElem instanceof SequenceFlow).toEqual(true);
      expect(outElem.id).toEqual('SequenceFlow_1lhoqo9');
    }

    task = taskDict.getValue('Task_08smd7w');
    expect(task).toBeDefined();
    expect(task instanceof ScriptTask).toEqual(true);

    if (task instanceof Task) {
      // one incoming
      expect(task.incoming.length).toEqual(1);
      const inElem = task.incoming[0];
      expect(inElem instanceof SequenceFlow).toEqual(true);
      expect(inElem.id).toEqual('SequenceFlow_0sfc3si');
      // one outgoing
      expect(task.outgoing.length).toEqual(1);
      const outElem = task.outgoing[0];
      expect(outElem instanceof SequenceFlow).toEqual(true);
      expect(outElem.id).toEqual('SequenceFlow_1awhlk0');
    }

    task = taskDict.getValue('Task_08o4k6s');
    expect(task).toBeDefined();
    expect(task instanceof DefaultTask).toEqual(true);
    
    if (task instanceof Task) {
      // one incoming
      expect(task.incoming.length).toEqual(1);
      const inElem = task.incoming[0];
      expect(inElem instanceof SequenceFlow).toEqual(true);
      expect(inElem.id).toEqual('SequenceFlow_0l5zzsg');
      // one outgoing
      expect(task.outgoing.length).toEqual(1);
      const outElem = task.outgoing[0];
      expect(outElem instanceof SequenceFlow).toEqual(true);
      expect(outElem.id).toEqual('SequenceFlow_1i28ud1');
    }

    task = taskDict.getValue('Task_0izqbtw');
    expect(task).toBeDefined();
    expect(task instanceof DefaultTask).toEqual(true);
    
    if (task instanceof Task) {
      // one incoming
      expect(task.incoming.length).toEqual(1);
      const inElem = task.incoming[0];
      expect(inElem instanceof SequenceFlow).toEqual(true);
      expect(inElem.id).toEqual('SequenceFlow_19tjykd');
      // one outgoing
      expect(task.outgoing.length).toEqual(1);
      const outElem = task.outgoing[0];
      expect(outElem instanceof SequenceFlow).toEqual(true);
      expect(outElem.id).toEqual('SequenceFlow_1c11ado');
    }

    task = taskDict.getValue('Task_1basoe9');
    expect(task).toBeDefined();
    expect(task instanceof ReceiveTask).toEqual(true);

    if (task instanceof Task) {
      // one incoming
      expect(task.incoming.length).toEqual(1);
      const inElem = task.incoming[0];
      expect(inElem instanceof SequenceFlow).toEqual(true);
      expect(inElem.id).toEqual('SequenceFlow_0anwd2h');
      // one outgoing
      expect(task.outgoing.length).toEqual(1);
      const outElem = task.outgoing[0];
      expect(outElem instanceof SequenceFlow).toEqual(true);
      expect(outElem.id).toEqual('SequenceFlow_1eq1yih');
    }
  });

  it('links references for all Parallel Gateway objects', async () => {
    const model = new BpmnProcessModel(create.bpmnProcessDao());

    await model.loadDefinition(bpmn);
    const gatewayDict = model.elementsDict.getValue(BpmnTypes.ParallelGateway);
    expect(gatewayDict.size()).toEqual(2);

    let gate = gatewayDict.getValue('ParallelGateway_09y1yr8');
    expect(gate).toBeDefined();
    if (gate instanceof Gateway) {
      // one incoming
      expect(gate.incoming.length).toEqual(1);
      const inElem = gate.incoming[0];
      expect(inElem instanceof SequenceFlow).toEqual(true);
      expect(inElem.id).toEqual('SequenceFlow_0m6e1dq');
      // two outgoing
      expect(gate.outgoing.length).toEqual(2);
      let outElem = gate.outgoing[0];
      expect(outElem instanceof SequenceFlow).toEqual(true);
      expect(outElem.id).toEqual('SequenceFlow_0xyok6d');
      outElem = gate.outgoing[1];
      expect(outElem instanceof SequenceFlow).toEqual(true);
      expect(outElem.id).toEqual('SequenceFlow_0sfc3si');
    }

    gate = gatewayDict.getValue('ParallelGateway_013yvmi');
    expect(gate).toBeDefined();
    if (gate instanceof Gateway) {
      // two incoming
      expect(gate.incoming.length).toEqual(2);
      let inElem = gate.incoming[0];
      expect(inElem instanceof SequenceFlow).toEqual(true);
      expect(inElem.id).toEqual('SequenceFlow_1lhoqo9');
      inElem = gate.incoming[1];
      expect(inElem instanceof SequenceFlow).toEqual(true);
      expect(inElem.id).toEqual('SequenceFlow_1awhlk0');
      // one outgoing
      expect(gate.outgoing.length).toEqual(1);
      const outElem = gate.outgoing[0];
      expect(outElem instanceof SequenceFlow).toEqual(true);
      expect(outElem.id).toEqual('SequenceFlow_19wigzr');
    }
  });

  it('links references for all Exclusive Gateway objects', async () => {
    const model = new BpmnProcessModel(create.bpmnProcessDao());

    await model.loadDefinition(bpmn);
    const gatewayDict = model.elementsDict.getValue(BpmnTypes.ExclusiveGateway);
    expect(gatewayDict).toBeDefined();
    expect(gatewayDict.size()).toEqual(1);

    let gate = gatewayDict.getValue('ExclusiveGateway_07y2d30');
    expect(gate).toBeDefined();
    if (gate instanceof Gateway) {
      // one incoming
      expect(gate.incoming.length).toEqual(1);
      const inElem = gate.incoming[0];
      expect(inElem instanceof SequenceFlow).toEqual(true);
      expect(inElem.id).toEqual('SequenceFlow_19wigzr');
      // two outgoing
      expect(gate.outgoing.length).toEqual(2);
      let outElem = gate.outgoing[0];
      expect(outElem instanceof SequenceFlow).toEqual(true);
      expect(outElem.id).toEqual('SequenceFlow_05aak41');
      outElem = gate.outgoing[1];
      expect(outElem instanceof SequenceFlow).toEqual(true);
      expect(outElem.id).toEqual('SequenceFlow_0l5zzsg');

      expect(gate.default).toBeDefined();
      expect(gate.default.id).toEqual('SequenceFlow_05aak41');
      expect(gate.default instanceof SequenceFlow).toEqual(true);
    }    
  });

  it('links references for all Inclusive Gateway objects', async () => {
    const model = new BpmnProcessModel(create.bpmnProcessDao());

    await model.loadDefinition(bpmn);
    const gatewayDict = model.elementsDict.getValue(BpmnTypes.InclusiveGateway);
    expect(gatewayDict).toBeDefined();
    expect(gatewayDict.size()).toEqual(1);

    let gate = gatewayDict.getValue('InclusiveGateway_1f4oifr');
    expect(gate).toBeDefined();
    if (gate instanceof Gateway) {
      // one incoming
      expect(gate.incoming.length).toEqual(1);
      const inElem = gate.incoming[0];
      expect(inElem instanceof SequenceFlow).toEqual(true);
      expect(inElem.id).toEqual('SequenceFlow_1i28ud1');
      // two outgoing
      expect(gate.outgoing.length).toEqual(2);
      let outElem = gate.outgoing[0];
      expect(outElem instanceof SequenceFlow).toEqual(true);
      expect(outElem.id).toEqual('SequenceFlow_19tjykd');
      outElem = gate.outgoing[1];
      expect(outElem instanceof SequenceFlow).toEqual(true);
      expect(outElem.id).toEqual('SequenceFlow_0anwd2h');

      expect(gate.default).toBeDefined();
      expect(gate.default.id).toEqual('SequenceFlow_19tjykd');
      expect(gate.default instanceof SequenceFlow).toEqual(true);
    }    
  });

  it('links references for all Sequence Flow objects', async () => {
    const model = new BpmnProcessModel(create.bpmnProcessDao());

    await model.loadDefinition(bpmn);
    const seqDict = model.elementsDict.getValue(BpmnTypes.SequenceFlow);
    expect(seqDict.size()).toEqual(14);

    let seq = seqDict.getValue('SequenceFlow_06nr081');
    expect(seq).toBeDefined();
    if (seq instanceof SequenceFlow) {
      expect(seq.sourceRef).toBeDefined();
      expect(seq.sourceRef instanceof FlowNode).toEqual(true);
      expect(seq.sourceRef.id).toEqual('StartEvent_1');

      expect(seq.targetRef).toBeDefined();
      expect(seq.targetRef instanceof FlowNode).toEqual(true);
      expect(seq.targetRef.id).toEqual('Task_124kol6');
    }

    seq = seqDict.getValue('SequenceFlow_0m6e1dq');
    expect(seq).toBeDefined();
    if (seq instanceof SequenceFlow) {
      expect(seq.sourceRef).toBeDefined();
      expect(seq.sourceRef instanceof FlowNode).toEqual(true);
      expect(seq.sourceRef.id).toEqual('Task_124kol6');

      expect(seq.targetRef).toBeDefined();
      expect(seq.targetRef instanceof FlowNode).toEqual(true);
      expect(seq.targetRef.id).toEqual('ParallelGateway_09y1yr8');
    }

    seq = seqDict.getValue('SequenceFlow_0xyok6d');
    expect(seq).toBeDefined();
    if (seq instanceof SequenceFlow) {
      expect(seq.sourceRef).toBeDefined();
      expect(seq.sourceRef instanceof FlowNode).toEqual(true);
      expect(seq.sourceRef.id).toEqual('ParallelGateway_09y1yr8');

      expect(seq.targetRef).toBeDefined();
      expect(seq.targetRef instanceof FlowNode).toEqual(true);
      expect(seq.targetRef.id).toEqual('Task_1imx9ug');
    }

    seq = seqDict.getValue('SequenceFlow_0sfc3si');
    expect(seq).toBeDefined();
    if (seq instanceof SequenceFlow) {
      expect(seq.sourceRef).toBeDefined();
      expect(seq.sourceRef instanceof FlowNode).toEqual(true);
      expect(seq.sourceRef.id).toEqual('ParallelGateway_013yvmi');

      expect(seq.targetRef).toBeDefined();
      expect(seq.targetRef instanceof FlowNode).toEqual(true);
      expect(seq.targetRef.id).toEqual('Task_08smd7w');
    }

    seq = seqDict.getValue('SequenceFlow_1lhoqo9');
    expect(seq).toBeDefined();
    if (seq instanceof SequenceFlow) {
      expect(seq.sourceRef).toBeDefined();
      expect(seq.sourceRef instanceof FlowNode).toEqual(true);
      expect(seq.sourceRef.id).toEqual('Task_1imx9ug');

      expect(seq.targetRef).toBeDefined();
      expect(seq.targetRef instanceof FlowNode).toEqual(true);
      expect(seq.targetRef.id).toEqual('ParallelGateway_013yvmi');
    }

    seq = seqDict.getValue('SequenceFlow_1awhlk0');
    expect(seq).toBeDefined();
    if (seq instanceof SequenceFlow) {
      expect(seq.sourceRef).toBeDefined();
      expect(seq.sourceRef instanceof FlowNode).toEqual(true);
      expect(seq.sourceRef.id).toEqual('Task_08smd7w');

      expect(seq.targetRef).toBeDefined();
      expect(seq.targetRef instanceof FlowNode).toEqual(true);
      expect(seq.targetRef.id).toEqual('ParallelGateway_013yvmi');
    }

    seq = seqDict.getValue('SequenceFlow_19wigzr');
    expect(seq).toBeDefined();
    if (seq instanceof SequenceFlow) {
      expect(seq.sourceRef).toBeDefined();
      expect(seq.sourceRef instanceof FlowNode).toEqual(true);
      expect(seq.sourceRef.id).toEqual('ParallelGateway_013yvmi');

      expect(seq.targetRef).toBeDefined();
      expect(seq.targetRef instanceof FlowNode).toEqual(true);
      expect(seq.targetRef.id).toEqual('EndEvent_0gtowi7');
    }

    seq = seqDict.getValue('SequenceFlow_05aak41');
    expect(seq).toBeDefined();
    if (seq instanceof SequenceFlow) {
      expect(seq.sourceRef).toBeDefined();
      expect(seq.sourceRef instanceof FlowNode).toEqual(true);
      expect(seq.sourceRef.id).toEqual('ExclusiveGateway_07y2d30');

      expect(seq.targetRef).toBeDefined();
      expect(seq.targetRef instanceof FlowNode).toEqual(true);
      expect(seq.targetRef.id).toEqual('EndEvent_0gtowi7');
    }

    seq = seqDict.getValue('SequenceFlow_0l5zzsg');
    expect(seq).toBeDefined();
    if (seq instanceof SequenceFlow) {
      expect(seq.sourceRef).toBeDefined();
      expect(seq.sourceRef instanceof FlowNode).toEqual(true);
      expect(seq.sourceRef.id).toEqual('ExclusiveGateway_07y2d30');

      expect(seq.targetRef).toBeDefined();
      expect(seq.targetRef instanceof FlowNode).toEqual(true);
      expect(seq.targetRef.id).toEqual('Task_08o4k6s');
    }

    seq = seqDict.getValue('SequenceFlow_1i28ud1');
    expect(seq).toBeDefined();
    if (seq instanceof SequenceFlow) {
      expect(seq.sourceRef).toBeDefined();
      expect(seq.sourceRef instanceof FlowNode).toEqual(true);
      expect(seq.sourceRef.id).toEqual('Task_08o4k6s');

      expect(seq.targetRef).toBeDefined();
      expect(seq.targetRef instanceof FlowNode).toEqual(true);
      expect(seq.targetRef.id).toEqual('InclusiveGateway_1f4oifr');
    }

    seq = seqDict.getValue('SequenceFlow_19tjykd');
    expect(seq).toBeDefined();
    if (seq instanceof SequenceFlow) {
      expect(seq.sourceRef).toBeDefined();
      expect(seq.sourceRef instanceof FlowNode).toEqual(true);
      expect(seq.sourceRef.id).toEqual('InclusiveGateway_1f4oifr');

      expect(seq.targetRef).toBeDefined();
      expect(seq.targetRef instanceof FlowNode).toEqual(true);
      expect(seq.targetRef.id).toEqual('Task_0izqbtw');
    }

    seq = seqDict.getValue('SequenceFlow_0anwd2h');
    expect(seq).toBeDefined();
    if (seq instanceof SequenceFlow) {
      expect(seq.sourceRef).toBeDefined();
      expect(seq.sourceRef instanceof FlowNode).toEqual(true);
      expect(seq.sourceRef.id).toEqual('InclusiveGateway_1f4oifr');

      expect(seq.targetRef).toBeDefined();
      expect(seq.targetRef instanceof FlowNode).toEqual(true);
      expect(seq.targetRef.id).toEqual('Task_1basoe9');
    }

    seq = seqDict.getValue('SequenceFlow_1eq1yih');
    expect(seq).toBeDefined();
    if (seq instanceof SequenceFlow) {
      expect(seq.sourceRef).toBeDefined();
      expect(seq.sourceRef instanceof FlowNode).toEqual(true);
      expect(seq.sourceRef.id).toEqual('Task_1basoe9');

      expect(seq.targetRef).toBeDefined();
      expect(seq.targetRef instanceof FlowNode).toEqual(true);
      expect(seq.targetRef.id).toEqual('EndEvent_0gtowi7');
    }

    seq = seqDict.getValue('SequenceFlow_1c11ado');
    expect(seq).toBeDefined();
    if (seq instanceof SequenceFlow) {
      expect(seq.sourceRef).toBeDefined();
      expect(seq.sourceRef instanceof FlowNode).toEqual(true);
      expect(seq.sourceRef.id).toEqual('Task_0izqbtw');

      expect(seq.targetRef).toBeDefined();
      expect(seq.targetRef instanceof FlowNode).toEqual(true);
      expect(seq.targetRef.id).toEqual('EndEvent_0gtowi7');
    }
  });

  it('handles source flow error', async () => {
    const model = new BpmnProcessModel(create.bpmnProcessDao());
    let error = null;
    
    try {
     await model.loadDefinition('SourceFlowError');
    } catch(e) {
      error = e;
    }

    expect(error).toEqual(new Error('Invalid Source Flow'));
  });

  it('handles target flow error', async () => {
    const model = new BpmnProcessModel(create.bpmnProcessDao());
    let error = null;
    
    try {
     await model.loadDefinition('TargetFlowError');
    } catch(e) {
      error = e;
    }

    expect(error).toEqual(new Error('Invalid Target Flow'));
  });

  it('handles source node error', async () => {
    const model = new BpmnProcessModel(create.bpmnProcessDao());
    let error = null;
    
    try {
     await model.loadDefinition('SourceNodeError');
    } catch(e) {
      error = e;
    }

    expect(error).toEqual(new Error('Invalid Source Node'));
  });



  it('handles target node error', async () => {
    const model = new BpmnProcessModel(create.bpmnProcessDao());
    let error = null;
    
    try {
     await model.loadDefinition('TargetNodeError');
    } catch(e) {
      error = e;
    }
    
    expect(error).toEqual(new Error('Invalid Target Node'));

    
  });

  it('handles default node error', async () => {
    const model = new BpmnProcessModel(create.bpmnProcessDao());
    let error = null;
    
    try {
     await model.loadDefinition('DefaultNodeError');
    } catch(e) {
      error = e;
    }

    expect(error).toEqual(new Error('Invalid Default Flow'));
  });

  it('handles non existing sequence flow', async () => {
    const model = new BpmnProcessModel(create.bpmnProcessDao());
    let error = null;
    
    try {
     await model.loadDefinition('NoSequenceFlowError');
    } catch(e) {
      error = e;
    }

    expect(error).toEqual(new Error('Invalid Source Flow'));
  });
});
