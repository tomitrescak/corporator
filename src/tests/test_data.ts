import { client } from 'client/config/apollo';
import { context } from 'client/config/context';
import { AppStore } from 'client/stores/app_store';
import GraphQLMock from 'graphql-mock';
import { makeExecutableSchema } from 'graphql-tools';
import { protect, unprotect } from 'mobx-state-tree';

import { typeDefs } from 'data/type_defs';
import { Prisma } from '../data/prisma';
import { Yoga } from '../data/yoga';

import { QueryTypes } from 'tests/client';

const schema = makeExecutableSchema({
  typeDefs,
  resolverValidationOptions: {
    requireResolversForResolveType: false
  }
});

export const mock = new GraphQLMock(schema);

const defaultUser: Prisma.User = {
  id: 'u',
  uid: '1000',
  name: 'User',
  description: 'User Description',
  roles: null,
  password: 'pw'
};

const otherUser: Prisma.User = {
  id: 'o',
  uid: '1000',
  name: 'Other',
  description: 'Other User Description',
  roles: null,
  password: 'other pw'
};

const createdDate = new Date(2018, 1, 2);
const modifiedDate = new Date(2018, 1, 10);
const finishedDate = new Date(2018, 2, 15);
// const dateDuration = (finishedDate - createdDate);

export const defaultAccess: Prisma.Access = {
  id: 'a',
  createdById: defaultUser.id,
  createdOn: createdDate,
  modifiedById: otherUser.id,
  modifiedOn: modifiedDate,
  read: null,
  write: null,
  execute: null
};

export const defaultRole: Prisma.Role = {
  id: 'default',
  name: 'Role',
  description: 'Role description'
};

export const defaultOrganisation: Prisma.Organisation = {
  id: 'default',
  name: 'Organisation',
  description: 'Organisation description'
};

export const defaultAccessCondition: Prisma.AccessCondition = {
  organisationId: defaultOrganisation.id,
  roleId: defaultRole.id,
  userId: defaultUser.id
  // precondition: null,
  // postcondition: null
};

export const defaultProcess: Prisma.BpmnProcess = {
  id: 'bpmn',
  name: 'Bpmn',
  description: 'Default process',
  access: defaultAccess,
  // generatedDescription: null,
  model: '<xml />',
  version: 0,
  status: 'Draft',
  // roles: ['default'],
  actionCount: 0
};

export const defaultProcessInstance: Yoga.BpmnProcessInstance = {
  id: 'aid',
  process: defaultProcess,
  resources: null,
  ownerId: 'oid',
  status: 'Running',
  dateStarted: createdDate,
  dateFinished: finishedDate,
  duration: 0
};

export const defaultForm: Yoga.Form = {
  id: 'form',
  name: 'Form',
  description: 'Test Form',
  elements: [],
  validations: []
};

const defaultData: Yoga.Data = {
  id: '1',
  descriptor: null,
  organisationId: 'oId',
  version: 0,
  date: modifiedDate,
  value: null
};

const defaultDescriptor: Yoga.DataDescriptor = {
  id: '1',
  name: null,
  description: 'Description',
  expression: null,
  type: 'String',
  isArray: false,
  defaultValue: null,
  validators: null,
  access: null
};

const defaultNotification: Yoga.Notification = {
  id: '1',
  processInstance: defaultProcessInstance,
  code: 'ProcessStarted',
  params: [],
  createdAt: new Date(),
  type: QueryTypes.NotificationType.Error,
  userId: '1',
  visible: true
};

export const createData = {
  context() {
    return context;
  },
  client() {
    return client();
  },
  store(data: Partial<typeof AppStore.Type> = {}, mockStore = false) {
    const store = AppStore.create(data as any);
    if (mockStore) {
      unprotect(store);
      store.client = () => mock.client;
      protect(store);
    }
    return store;
  },
  mocks() {
    // tslint:disable-next-line:no-shadowed-variable
    const dayjs: any = () => ({
      from(_date: any) {
        // return datejs('2018/02/23').from(date);
      }
    });
    dayjs.extend = () => {
      /**/
    };
    // jest.mock('dayjs', () => dayjs);
  },
  createdDate,
  userDao(from: Partial<Prisma.User> = {}): Prisma.User {
    return { ...defaultUser, ...from };
  },
  accessDao(from: Partial<Prisma.Access> = {}): Prisma.Access {
    return { ...defaultAccess, ...from };
  },
  accessConditionDao(from: Partial<Prisma.AccessCondition> = {}): Prisma.AccessCondition {
    return { ...defaultAccessCondition, ...from };
  },
  activityDao(from: Partial<Prisma.BpmnProcessInstance> = {}): Prisma.BpmnProcessInstance {
    return { ...defaultProcessInstance, ...from };
  },
  formDao(form: Partial<Prisma.Form> = {}): Prisma.Form {
    return { ...defaultForm, ...form };
  },
  dataDao(data: Partial<Prisma.Data> = {}): Prisma.Data {
    return { ...defaultData, ...data };
  },
  descriptorDao(data: Partial<Prisma.DataDescriptor> = {}): Prisma.DataDescriptor {
    return { ...defaultDescriptor, ...data };
  },
  descriptor(data: Partial<Yoga.DataDescriptor> = {}): Yoga.DataDescriptor {
    return { ...defaultDescriptor, ...data };
  },
  processDao(
    from: Partial<Prisma.BpmnProcess> = {},
    access: Partial<Prisma.Access> = {}
  ): Prisma.BpmnProcess {
    const result = { ...defaultProcess, ...from };
    result.access = { ...defaultAccess, ...access };
    return result;
  },
  processInstanceDao(
    from: Partial<Prisma.BpmnProcessInstance> = {},
    process: Partial<Prisma.BpmnProcess> = {}
  ): Prisma.BpmnProcessInstance {
    const result = { ...defaultProcessInstance, ...from };
    result.process = { ...defaultProcess, ...process };
    return result;
  },
  notification(from: Partial<Yoga.Notification> = {}): Yoga.Notification {
    return { ...defaultNotification, ...from };
  }
  // searchItem(from: Partial<Yoga.Search> = {}): Yoga.Search {
  //   return { ...defaultSearchItem, ...from };
  // }
};
