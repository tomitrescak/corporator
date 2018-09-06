import * as TestData from 'tests/test_data';

import { Context, Prisma, Yoga } from 'data/utils';

const defaultBpmnProcessInstance: Partial<Prisma.BpmnProcessInstanceCreateInput> = {};

const defaultUser: Prisma.UserCreateInput = {
  name: 'Tomas Trescak',
  uid: '1000',
  password: '',
  roles: {
    set: []
  }
};

// const defaultAccessCondition = TestData.defaultAccessCondition;
const createAccessCondition: Prisma.AccessConditionCreateManyInput = {
  create: []
};
const access = TestData.defaultAccess;
const defaultAccess: Prisma.AccessCreateInput = {
  createdById: access.createdById,
  createdOn: access.createdOn,
  modifiedById: access.modifiedById,
  modifiedOn: access.modifiedOn,
  read: createAccessCondition,
  write: createAccessCondition,
  execute: createAccessCondition
};

const createAccess: Prisma.AccessCreateOneInput = {
  create: defaultAccess
};

const process = TestData.defaultProcess;
const defaultProcess: Prisma.BpmnProcessCreateInput = {
  actionCount: process.actionCount,
  access: createAccess,
  description: process.description,
  model: process.model,
  name: process.name,
  status: process.status,
  version: process.version
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
  user(ctx: Context, data: Partial<Prisma.User> = {}): Promise<Yoga.User> {
    const input: Prisma.UserCreateInput = {
      name: data.name,
      uid: data.uid,
      password: '',
      roles: {
        set: data.roles
      }
    };
    return ctx.db.mutation.createUser({
      data: merge(defaultUser, input)
    });
  },
  process(
    ctx: Context,
    data: Partial<Prisma.BpmnProcessCreateInput> = {},
    customAccess: Partial<Prisma.AccessCreateInput> = {}
  ) {
    const props = { ...defaultProcess, ...data };
    props.access = { create: { ...defaultAccess, ...customAccess } };
    return ctx.db.mutation.createBpmnProcess({ data: props });
  },
  bpmnProcessInstance(ctx: Context, data: Partial<Prisma.BpmnProcessInstanceCreateInput> = {}) {
    return ctx.db.mutation.createBpmnProcessInstance({
      data: { ...defaultBpmnProcessInstance, ...data }
    });
  }
};
