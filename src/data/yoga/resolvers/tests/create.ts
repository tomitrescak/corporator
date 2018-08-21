import { BpmnProcessInstanceCreateInput, User, UserCreateInput } from '../../../generated/prisma';
import { Context } from '../../utils';

const defaultBpmnProcessInstance: BpmnProcessInstanceCreateInput = {
  name: 'What?'
}

const defaultUser: UserCreateInput = {
  name: 'Tomas Trescak',
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
  user(ctx: Context, data: Partial<User> = {}) {
    const input: UserCreateInput = {
      name: data.name,
      password: '',
      roles: {
        set: data.roles
      }
    };
    return ctx.db.mutation.createUser({
      data: merge(defaultUser, input)
    });
  },
  bpmnProcessInstance(ctx: Context, data: Partial<BpmnProcessInstanceCreateInput> = {}) {
    return ctx.db.mutation.createBpmnProcessInstance({
      data: { ...defaultBpmnProcessInstance, ...data }
    });
  }
};