import { BpmnProcessInstance, User, UserCreateInput } from '../../../generated/prisma';

// const defaultBpmnProcessInstance: Partial<BpmnProcessInstance> = {};
const defaultUser: UserCreateInput = {
  name: 'Tomas Trescak',
  uid: '1000',
  password: 'p',
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
  user(ctx: ServerContext, data: Partial<User> = {}) {
    const input: UserCreateInput = {
      name: data.name,
      uid: data.uid,
      password: data.password,
      roles: {
        set: data.roles
      }
    };
    return ctx.db.mutation.createUser({
      data: merge(defaultUser, input)
    });
  },
  bpmnProcessInstance(_ctx: ServerContext, _data: Partial<BpmnProcessInstance> = {}) {
    // return ctx.db.mutation.createBpmnProcessInstance({
    //   data: { ...defaultBpmnProcessInstance, ...data }
    // });
  }
};
