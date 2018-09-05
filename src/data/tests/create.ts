import { Context, Prisma } from 'data/utils';
import { Yoga } from 'tests/client';

const defaultBpmnProcessInstance: Partial<Prisma.BpmnProcessInstanceCreateInput> = {};

const defaultUser: Prisma.UserCreateInput = {
  name: 'Tomas Trescak',
  uid: '1000',
  password: '',
  roles: {
    set: []
  }
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
  bpmnProcessInstance(ctx: Context, data: Partial<Prisma.BpmnProcessInstanceCreateInput> = {}) {
    return ctx.db.mutation.createBpmnProcessInstance({
      data: { ...defaultBpmnProcessInstance, ...data }
    });
  }
};
