import { BpmnProcessInstance, User, UserCreateInput } from '../../../generated/prisma';
import { Context } from '../utils';

const defaultBpmnProcessInstance: Partial<BpmnProcessInstance> = {};
const defaultUser: UserCreateInput = {
  name: 'Tomas Trescak',
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
  user(ctx: Context, data: Partial<User> = {}) {
    const input: UserCreateInput = {
      name: data.name,
      roles: {
        set: data.roles
      }
    };
    return ctx.db.mutation.createUser({
      data: merge(defaultUser, input)
    });
  },
  bpmnProcessInstance(ctx: Context, data: Partial<BpmnProcessInstance> = {}) {
    return ctx.db.mutation.createBpmnProcessInstance({
      data: { ...defaultBpmnProcessInstance, ...data }
    });
  }
};
