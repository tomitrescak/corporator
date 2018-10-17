import {
  BaseElement,
  BaseEvent,
  EndEvent,
  ExclusiveGateway,
  FlowNode,
  Gateway,
  InclusiveGateway,
  Lane,
  LaneElement,
  LaneSet,
  ParallelGateway,
  ReceiveTask,
  ScriptTask,
  SendTask,
  SequenceFlow,
  StartEvent,
  Task,
  UserTask
} from 'data/yoga/models/bpmn';
import { Access } from './access_model';

import BpmnModdle from 'bpmn-moddle';

import { Prisma } from 'data/prisma';
import { Dictionary } from 'typescript-collections';

const moddle = new BpmnModdle();

export enum BpmnTypes {
  BaseElement = 'bpmn:baseelement', // abstract type
  FlowNode = 'bpmn:flownode', // abstract type
  Gateway = 'bpmn:gateway', // abstract type
  Task = 'bpmn:task', // abstract type
  BaseEvent = 'bpmn:baseevent', // abstract type
  LaneElement = 'bpmn:laneelement', // abstract type
  Start = 'bpmn:startevent',
  End = 'bpmn:endevent',
  SequenceFlow = 'bpmn:sequenceflow',
  ExclusiveGateway = 'bpmn:exclusivegateway',
  InclusiveGateway = 'bpmn:inclusivegateway',
  ParallelGateway = 'bpmn:parallelgateway',
  UserTask = 'bpmn:usertask',
  SendTask = 'bpmn:sendtask',
  ReceiveTask = 'bpmn:receivetask',
  ScriptTask = 'bpmn:scripttask',
  SubProcess = 'bpmn:subprocess',
  Lane = 'bpmn:lane',
  LaneSet = 'bpmn:laneset'
}

export class BpmnProcessModel {
  id: string;
  name: string;
  description: string;
  definition: any;
  generatedDescription: string;
  version: number;
  status: Prisma.PublicationStatus;
  roles: string[];
  actionCount: number;

  // typed BPMN XML definition
  elementsDict: Dictionary<string, Dictionary<string, BaseElement>>;

  // list of started elements
  activeElements: BaseElement[];

  constructor(processModelDao: Prisma.BpmnProcess) {
    this.id = processModelDao.id;
    this.name = processModelDao.name;
    this.description = processModelDao.description;
    // this.definition = this.generatedDescription = processModelDao.generatedDescription;
    this.version = processModelDao.version;
    this.status = processModelDao.publicationStatus;
    // this.roles = processModelDao.roles;
    this.actionCount = processModelDao.actionCount;

    this.elementsDict = new Dictionary<string, Dictionary<string, BaseElement>>();
    this.activeElements = [];
  }

  async loadDefinition(bpmn: string) {
    return new Promise((resolve, reject) => {
      moddle.fromXML(bpmn, (error, def) => {
        if (error) {
          reject(error);
        }
        this.definition = def as any;

        this.loadModels();
        resolve(this.definition);
      });
    });
  }

  getElementList<T extends BaseElement>(key: string): T[] {
    return this.elementsDict.getValue(key).values() as T[];
  }

  private loadModels() {
    // if (!this.definition) return;
    // for each element

    /*
      create laneSet and lane objects
        LaneSet
          Store lane ids
        Lane
          Store LaneElement ids
      linkModels()
        link Lanes into LaneSet
        link LaneElements into Lane (add to dictionary)
    */

    // only loads first process... which is correct...?
    const flowElements = this.definition.rootElements[0].flowElements;

    flowElements.forEach((elem: any) => {
      const type = elem.$type.toLowerCase();
      let obj: BaseElement;
      if (type === BpmnTypes.Start) {
        const start = new StartEvent(elem);
        this.addToDictionary(start, start.$type, start.id);
        // this.elementsDict.setValue(start.id, start);
        obj = start;
      }
      if (type === BpmnTypes.End) {
        const end = new EndEvent(elem);
        this.addToDictionary(end, end.$type, end.id);
        // this.elementsDict.setValue(end.id, end);
        obj = end;
      }
      if (type === BpmnTypes.UserTask) {
        const task = new UserTask(elem);
        this.addToDictionary(task, task.$type, task.id);
        // this.elementsDict.setValue(task.id, task);
        obj = task;
      }
      if (type === BpmnTypes.SendTask) {
        const task = new SendTask(elem);
        this.addToDictionary(task, task.$type, task.id);
        // this.elementsDict.setValue(task.id, task);
        obj = task;
      }
      if (type === BpmnTypes.ReceiveTask) {
        const task = new ReceiveTask(elem);
        this.addToDictionary(task, task.$type, task.id);
        // this.elementsDict.setValue(task.id, task);
        obj = task;
      }
      if (type === BpmnTypes.ScriptTask) {
        const task = new ScriptTask(elem);
        this.addToDictionary(task, task.$type, task.id);
        // this.elementsDict.setValue(task.id, task);
        obj = task;
      }
      if (type === BpmnTypes.SequenceFlow) {
        const seq = new SequenceFlow(elem);
        this.addToDictionary(seq, seq.$type, seq.id);
        // this.elementsDict.setValue(seq.id, seq);
        obj = seq;
      }
      if (type === BpmnTypes.ExclusiveGateway) {
        const gate = new ExclusiveGateway(elem);
        this.addToDictionary(gate, gate.$type, gate.id);
        // this.elementsDict.setValue(gate.id, gate);
        obj = gate;
      }
      if (type === BpmnTypes.InclusiveGateway) {
        const gate = new InclusiveGateway(elem);
        this.addToDictionary(gate, gate.$type, gate.id);
        // this.elementsDict.setValue(gate.id, gate);
        obj = gate;
      }
      if (type === BpmnTypes.ParallelGateway) {
        const gate = new ParallelGateway(elem);
        this.addToDictionary(gate, gate.$type, gate.id);
        // this.elementsDict.setValue(gate.id, gate);
        obj = gate;
      }
      if (type === BpmnTypes.Lane) {
        const lane = new Lane(elem);
        this.addToDictionary(lane, lane.$type, lane.id);
        // this.elementsDict.setValue(lane.id, lane);
        obj = lane;
      }
      if (type === BpmnTypes.LaneSet) {
        const laneSet = new LaneSet(elem);
        this.addToDictionary(laneSet, laneSet.$type, laneSet.id);
        // this.elementsDict.setValue(laneSet.id, laneSet);
        obj = laneSet;
      }
      if (obj) {
        // add to abtract lists as well
        if (obj instanceof BaseElement) {
          this.addToDictionary(obj, BpmnTypes.BaseElement, obj.id);
        }
        if (obj instanceof FlowNode) {
          this.addToDictionary(obj, BpmnTypes.FlowNode, obj.id);
        }
        if (obj instanceof Gateway) {
          this.addToDictionary(obj, BpmnTypes.Gateway, obj.id);
        }
        if (obj instanceof Task) {
          this.addToDictionary(obj, BpmnTypes.Task, obj.id);
        }
        if (obj instanceof BaseEvent) {
          this.addToDictionary(obj, BpmnTypes.BaseEvent, obj.id);
        }
        if (obj instanceof LaneElement) {
          this.addToDictionary(obj, BpmnTypes.LaneElement, obj.id);
        }
      }
    });

    // user dictionary to add references between classes
    this.linkModels();
  }

  private addToDictionary(obj: BaseElement, type: string, id: string) {
    // check if inner dictionary is initialised
    if (!this.elementsDict.getValue(type)) {
      this.elementsDict.setValue(type, new Dictionary<string, BaseElement>());
    }
    // retrieve inner dictionary and store obj with id as key
    const dict = this.elementsDict.getValue(type);
    dict.setValue(id, obj);
  }

  private linkModels() {
    this.elementsDict.forEach((key, dict) => {
      if (key === BpmnTypes.LaneElement) {
        return;
      }
      if (key === BpmnTypes.BaseElement) {
        return;
      }
      if (key === BpmnTypes.BaseEvent) {
        return;
      }
      if (key === BpmnTypes.FlowNode) {
        return;
      }
      if (key === BpmnTypes.Gateway) {
        return;
      }
      if (key === BpmnTypes.Task) {
        return;
      }

      dict.forEach((_key, element) => {
        // check type and link:
        // lanes for lane set
        // lane elements for lane
        // incoming/outgoing for flow node
        // sourceRef/targetRef for sequence flow
        // default for gate way
        if (element instanceof LaneSet) {
          this.linkLaneSet(element);
        }
        if (element instanceof Lane) {
          this.linkLane(element);
        }
        if (element instanceof FlowNode) {
          this.linkFlowNode(element);
        }
        if (element instanceof SequenceFlow) {
          this.linkSequenceFlow(element);
        }
        if (element instanceof Gateway) {
          this.linkGateway(element);
        }
      });
    });
  }

  private linkLaneSet(value: LaneSet) {
    const lanes = [] as Lane[];

    if (value.lanesIds) {
      value.lanesIds.forEach(elem => {
        const dict = this.elementsDict.getValue(BpmnTypes.Lane);
        let lane = dict ? dict.getValue(elem) : null;

        if (lane instanceof Lane) {
          lanes.push(lane);
        } else {
          throw new Error('Invalid Lane');
        }
      });
    }
    value.lanes = lanes;
  }

  private linkLane(value: Lane) {
    const nodes = new Dictionary<string, Dictionary<string, LaneElement>>();

    if (value.nodeIds) {
      value.nodeIds.forEach(elem => {
        const dict = this.elementsDict.getValue(BpmnTypes.LaneElement);
        let node = dict ? dict.getValue(elem) : null;

        if (node instanceof LaneElement) {
          // use node.type as first key
          if (!value.nodes.getValue(node.$type)) {
            value.nodes.setValue(node.$type, new Dictionary<string, LaneElement>());
          }
          // retrieve inner dictionary and store node with node.id as second key
          const innerDict = value.nodes.getValue(node.$type);
          innerDict.setValue(node.id, node);

          // add reference to lane in laneElement
          node.lane = value;
        } else {
          throw new Error('Invalid Lane Element');
        }
      });
    }

    value.nodes = nodes;
  }

  private linkFlowNode(value: FlowNode) {
    const incoming = [] as SequenceFlow[];
    const outgoing = [] as SequenceFlow[];

    if (value.incomingIds) {
      value.incomingIds.forEach(elem => {
        const dict = this.elementsDict.getValue(BpmnTypes.SequenceFlow);
        let sf = dict ? dict.getValue(elem) : null;

        if (sf instanceof SequenceFlow) {
          incoming.push(sf);
        } else {
          throw new Error('Invalid Source Flow');
        }
      });
    }
    value.incoming = incoming;

    if (value.outgoingIds) {
      value.outgoingIds.forEach(elem => {
        const dict = this.elementsDict.getValue(BpmnTypes.SequenceFlow);
        let sf = dict ? dict.getValue(elem) : null;

        if (sf instanceof SequenceFlow) {
          outgoing.push(sf);
        } else {
          throw new Error('Invalid Target Flow');
        }
      });
    }
    value.outgoing = outgoing;
  }

  private linkSequenceFlow(value: SequenceFlow) {
    const flowNodeDict = this.elementsDict.getValue(BpmnTypes.FlowNode);
    let source = flowNodeDict ? flowNodeDict.getValue(value.sourceId) : null;
    let target = flowNodeDict ? flowNodeDict.getValue(value.targetId) : null;

    if (source instanceof FlowNode) {
      value.sourceRef = source;
    } else {
      throw new Error('Invalid Source Node');
    }

    if (target instanceof FlowNode) {
      value.targetRef = target;
    } else {
      throw new Error('Invalid Target Node');
    }
  }

  private linkGateway(value: Gateway) {
    const seqFlowDict = this.elementsDict.getValue(BpmnTypes.SequenceFlow);

    let defaultNode: BaseElement;
    defaultNode = null;

    // no default specified; set null and return
    if (!value.defaultId) {
      value.default = null;
      return;
    }

    if (seqFlowDict) {
      defaultNode = seqFlowDict.getValue(value.defaultId);
    }

    if (defaultNode instanceof SequenceFlow) {
      value.default = defaultNode;
    } else {
      throw new Error('Invalid Default Flow');
    }
  }

  // do I need to separate start and resume?
  // start(): BaseElement[] {
  //   if (this.activeElements.length != 0) {
  //     throw new Error('Process Already Started');
  //   }
  //   // execute starting at startEvent
  //   const startDict = this.elementsDict.getValue(BpmnTypes.Start);
  //   if (startDict.size() == 0) {
  //     throw new Error('Process Already Started');
  //   }
  //   startDict.forEach((key, value) => {
  //     // will stop at first element.
  //     // maybe in future there will be more than 1 entry point
  //     // need to return all nodes?
  //     try {
  //       return this.execute(value);
  //     } catch (error) {
  //       throw error;
  //     }
  //   });

  //   throw new Error('No Start Process Found');
  // }

  // // do I need to separate start and resume?
  // resume(currentNode: BaseElement): BaseElement[] {
  //   // execute starting at latest activity
  //   if (this.activeElements.length == 0) {
  //     throw new Error('Process Has No Active Activities');
  //   }
  //   const found = this.activeElements.find(element => currentNode.id === element.id);
  //   if (!found) {
  //     throw new Error('Node Not Found In Active List');
  //   }

  //   try {
  //     return this.execute(found);
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  // private execute(node: BaseElement): BaseElement[] {
  //   // execute given node
  //   console.log(node);
  //   // do something with node...
  //   // invoke common function between all BaseElements
  //   // add all children to activeElements list
  //   // continue in a loop
  //   // reject(new Error('Process Already Started'));

  //   return [node];
  // }

  // async start(): Promise<BaseElement[]> {
  //   return new Promise<BaseElement[]>((resolve,reject) => {
  //     if (this.activeElements.length != 0) {
  //       reject(new Error('Process Already Started'));
  //     };
  //     // execute starting at startEvent
  //     const startDict = this.elementsDict.getValue(BpmnTypes.Start);
  //     if(startDict.size() == 0) {
  //       reject(new Error('Process Already Started'));
  //     }
  //     startDict.forEach((key, value) => {
  //       // will stop at first element.
  //       // maybe in future there will be more than 1 entry point
  //       // need to return all nodes?
  //       resolve(this.execute(value));

  //     });

  //   });
  // }

  // async resume(currentNode: BaseElement): Promise<BaseElement[]> {
  //   return new Promise<BaseElement[]>((resolve, reject)=> {
  //     // execute starting at latest activity
  //     if (this.activeElements.length == 0) {
  //       reject(new Error('Process Already Started'));
  //     };
  //     const found = this.activeElements.find((element) => currentNode.id === element.id);
  //     if(!found) {
  //       reject(new Error('Node Not Found In Active List'));
  //     }

  //     resolve(this.execute(found));
  //   });
  // }

  // private async execute(node: BaseElement): Promise<BaseElement[]>{
  //   // execute given node
  //   console.log(node);
  //   return new Promise<BaseElement[]>((resolve, reject) => {
  //     // do something with node...
  //     // invoke common function between all BaseElements
  //     // add all children to activeElements list
  //     // continue in a loop
  //     // reject(new Error('Process Already Started'));

  //     resolve([node]);

  //   });
  // }
}
