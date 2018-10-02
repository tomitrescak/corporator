import { BpmnProcessInstance, User, UserCreateInput } from '../../../generated/prisma';

// const defaultBpmnProcessInstance: Partial<BpmnProcessInstance> = {};
const defaultUser: UserCreateInput = {
  name: 'Tomas Trescak',
  uid: '1000',
  password: 'p'
};

const defaultGroup: Bpmn.Group = {
  organisation: 'org1',
  roles: ['role1'],
};

const defaultLane: Bpmn.Lane = {
  id: 'lane',
  name: 'lane',
  $type: 'bpmn:lane',
  description: '',
  roles: defaultGroup,
  nodes: null
};

const defaultEndEvent: Bpmn.EndEvent = {
  id: 'end',
  name: 'endevent',
  $type: 'bpmn:endevent',
  description: '',
  incoming: [] as Bpmn.SequenceFlow[],
  outgoing: [] as Bpmn.SequenceFlow[],
  lane: defaultLane
};



function merge<T>(a: any, b: T): T {
  for (let key of Object.getOwnPropertyNames(b)) {
    if ((b as any)[key]) {
      a[key] = (b as any)[key];
    }
  }
  return a;
}

export const create = {
  user(ctx: ServerContext, data: Partial<User> = {}) {
    const input: UserCreateInput = {
      name: data.name,
      uid: data.uid,
      password: data.password,
      roles: { set: data.roles }
    };
    return ctx.db.mutation.createUser({
      data: merge(defaultUser, input)
    });
  },
  bpmnProcessInstance(_ctx: ServerContext, _data: Partial<BpmnProcessInstance> = {}) {
    // return ctx.db.mutation.createBpmnProcessInstance({
    //   data: { ...defaultBpmnProcessInstance, ...data }
    // });
  },
  endEventDAO(endEvent: Partial<Bpmn.EndEvent> = {}): Bpmn.EndEvent {
    return { ...defaultEndEvent, ...endEvent };
  },
  laneDAO(lane: Partial<Bpmn.Lane> = {}): Bpmn.Lane {
    return { ...defaultLane, ...lane };
  },
  groupDAO(group: Partial<Bpmn.Group> = {}): Bpmn.Group {
    return { ...defaultGroup, ...group };
  },
};
