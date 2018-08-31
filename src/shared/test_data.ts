import { Prisma } from '../data/prisma';
import { Yoga } from '../data/yoga';

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

const defaultAccess: Prisma.Access = {
  id: 'a',
  createdById: defaultUser.id,
  createdOn: createdDate,
  modifiedById: otherUser.id,
  modifiedOn: modifiedDate,
  read: null,
  write: null,
  execute: null
};

const defaultRole: Prisma.Role = {
  id: 'default',
  name: 'Role',
  description: 'Role description'
};

const defaultOrganisation: Prisma.Organisation = {
  id: 'default',
  name: 'Organisation',
  description: 'Organisation description'
};

const defaultAccessCondition: Prisma.AccessCondition = {
  organisationId: defaultOrganisation.id,
  roleId: defaultRole.id,
  userId: defaultUser.id
  // precondition: null,
  // postcondition: null
};

const defaultActivity: Prisma.BpmnProcessInstance = {
  id: 'aid',
  process: null,
  resources: null,
  ownerId: 'oid',
  status: 'Running',
  dateStarted: createdDate,
  dateFinished: finishedDate,
  duration: 0
};

const defaultBpmnProcess: Prisma.BpmnProcess = {
  id: 'bpmn',
  name: 'Bpmn',
  description: 'Default process',
  access: defaultAccess,
  // generatedDescription: null,
  model: null,
  version: 0,
  status: 'Draft',
  // roles: ['default'],
  actionCount: 0
};

const defaultForm: Prisma.Form = {
  id: 'form',
  name: 'Form',
  description: 'Test Form',
  elements: [],
  validations: []
};

const defaultData: Prisma.Data = {
  id: '1',
  descriptor: null,
  organisationId: 'oId',
  version: 0,
  date: modifiedDate,
  value: null
};

// const defaultDescriptorDao: Prisma.DataDescriptor = {
//   id: '1',
//   name: null,
//   description: 'Description',
//   expression: null,
//   type: 'String',
//   isArray: false,
//   defaultValue: null,
//   validators: null,
//   access: null
// };

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
  processInstance: null,
  code: 'ProcessStarted',
  params: [],
  createdAt: new Date(),
  type: 'Error',
  userId: '1',
  visible: true
};

export const createData = {
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
    jest.mock('dayjs', () => dayjs);
  },
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
    return { ...defaultActivity, ...from };
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
  bpmnProcessDao(
    from: Partial<Prisma.BpmnProcess> = {},
    access: Partial<Prisma.Access> = {}
  ): Prisma.BpmnProcess {
    const result = { ...defaultBpmnProcess, ...from };
    result.access = { ...defaultAccess, ...access };
    return result;
  },
  notification(from: Partial<Yoga.Notification> = {}): Yoga.Notification {
    return { ...defaultNotification, ...from };
  }
  // searchItem(from: Partial<Yoga.Search> = {}): Yoga.Search {
  //   return { ...defaultSearchItem, ...from };
  // }
};
