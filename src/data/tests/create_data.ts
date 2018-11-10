import * as bcrypt from 'bcryptjs';

import { JSONSchema } from 'data/schema/schema';
import { Prisma, Yoga } from 'data/utils';

/* =========================================================
    Constants
   ======================================================== */

export const dateStarted = new Date(2018, 1, 2);
export const dateFinished = new Date(2018, 2, 10);

export const access = (owner: string, role: string, permission: string) => ({
  createdById: owner,
  executeRole: permission[2] === 'x' && role,
  readRole: permission[1] === 'w' && role,
  writeRole: permission[0] === 'r' && role,
  updatedById: owner
});

/* =========================================================
    Database
   ======================================================== */

export let db: Prisma.Prisma = new Prisma.Prisma({
  endpoint: 'http://localhost:4466'
  // debug: true
  // secret: 'my_secret123', // only needed if specified in `database/prisma.yml`
});

/* =========================================================
    Create data
   ======================================================== */

export const create = {
  date(addDays: number = 0) {
    return new Date(2018, 2, 10 + addDays);
  },
  role: (role: Partial<Prisma.RoleCreateInput> = {}): Prisma.RoleCreateInput => ({
    name: 'User',
    roleId: 'User',
    ...role
  }),
  async roleMutation(role: Partial<Prisma.RoleCreateInput> = {}): Promise<Prisma.Role> {
    return db.mutation.createRole({ data: create.role(role) });
  },
  userMutation(user: Partial<Prisma.UserCreateInput> = {}) {
    return db.mutation.createUser({ data: create.user(user) });
  },
  user: (user: Partial<Prisma.UserCreateInput> = {}): Prisma.UserCreateInput => ({
    name: 'Tomas Trescak',
    uid: '30031005',
    password: bcrypt.hashSync('123', 10),
    ...user
  }),
  userDao(from: Partial<Yoga.User> = {}): Yoga.User {
    return {
      id: 'u',
      uid: '1000',
      name: 'User',
      description: 'User Description',
      roles: null,
      password: 'pw',
      ...from
    };
  },
  element: (element: Partial<FormElement>): FormElement => ({
    column: 0,
    control: 'Input',
    controlProps: null,
    filterColumn: null,
    filterSource: null,
    inline: false,
    label: null,
    list: null,
    row: 0,
    source: null,
    vertical: null,
    width: null,
    elements: null,
    ...element
  }),
  form: (form: Partial<Form> = {}): Form => ({
    name: 'Form',
    description: 'Test Form',
    elements: form.elements,
    ...form
  }),
  jsonSchema: (partial: Partial<JSONSchema>): JSONSchema => ({
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'http://corporator.com/product.schema.json',
    type: 'object',
    properties: {},
    ...partial
  }),
  jsonSchemaProperty: (partial: Partial<JSONSchema> = {}): Partial<JSONSchema> => ({
    ...partial
  }),
  schema: (partial: Partial<Prisma.SchemaCreateInput>): Prisma.SchemaCreateInput => ({
    name: 'Schema',
    schema: '',
    description: 'Description',
    ...partial
  }),
  schemaMutation(partial: Partial<Prisma.Schema>) {
    return db.mutation.createSchema({ data: create.schema(partial) });
  },
  schemaDao(data: Partial<Yoga.Schema> = {}): Yoga.Schema {
    return {
      id: 'sid',
      name: 'Schema',
      schema: '',
      description: 'Schema Description',
      ...data
    };
  },
  bpmnTask: (partial: Partial<Prisma.BpmnTaskCreateInput>): Prisma.BpmnTaskCreateInput => ({
    taskId: null,
    resources: null,
    name: 'Task Name',
    type: 'Form',
    ...partial
  }),
  bpmnTaskMutation(partial: Partial<Prisma.BpmnTaskCreateInput> = {}) {
    return db.mutation.createBpmnTask({ data: create.bpmnTask(partial) });
  },
  bpmnProcess: (
    partial: Partial<Prisma.BpmnProcessCreateInput>
  ): Prisma.BpmnProcessCreateInput => ({
    name: 'Process',
    description: 'Process 4 description',
    model: '',
    publicationStatus: 'Published',
    actionCount: 0,
    type: 'HumanResources',
    version: 0,
    createdById: 'me',
    resources: null,
    ...partial
  }),
  dataDao(data: Partial<Yoga.Data> = {}): Yoga.Data {
    return {
      id: '1',
      schemaId: '',
      version: 0,
      date: dateStarted,
      value: null,
      ...data
    };
  },
  bpmnProcessMutation(partial: Partial<Prisma.BpmnProcessCreateInput> = {}) {
    return db.mutation.createBpmnProcess({ data: create.bpmnProcess(partial) });
  },
  processDao(from: Partial<Prisma.BpmnProcess> = {}): Prisma.BpmnProcess {
    return {
      id: 'bpmn',
      name: 'Bpmn',
      description: 'Default process',
      createdAt: null,
      updatedAt: null,
      createdById: null,
      resources: null,
      // generatedDescription: null,
      model: '<xml />',
      schema: '{}',
      version: 0,
      publicationStatus: 'Draft',
      type: 'Travel',
      // roles: ['default'],
      actionCount: 0,
      ...from
    };
  },
  bpmnProcessInstance: (
    partial: Partial<Prisma.BpmnProcessInstanceCreateInput>
  ): Prisma.BpmnProcessInstanceCreateInput => ({
    ownerId: null,
    processId: null,
    data: '{}',
    status: 'Running',
    dateStarted,
    ...partial
  }),
  bpmnProcessInstanceMutation(partial: Partial<Prisma.BpmnProcessInstanceCreateInput>) {
    return db.mutation.createBpmnProcessInstance({ data: create.bpmnProcessInstance(partial) });
  },
  processInstanceDao(from: Partial<Yoga.BpmnProcessInstance> = {}): Yoga.BpmnProcessInstance {
    return {
      id: 'piid',
      ownerId: null,
      processId: null,
      process: null,
      data: null,
      owner: null,
      comments: [],
      log: [],
      tasks: [],
      status: 'Running',
      dateStarted,
      ...from
    };
  },
  bpmnTaskInstance: (
    partial: Partial<Prisma.BpmnTaskInstanceCreateInput>,
    processInstanceId: string,
    taskId: string,
    performerId: string = null
  ): Prisma.BpmnTaskInstanceCreateInput => ({
    dateFinished: null,
    dateStarted,
    duration: 0,
    data: {},
    status: 'Finished',
    performerId,
    processInstanceId,
    taskId,
    ...partial
  }),
  bpmnTaskInstanceMutation(
    partial: Partial<Prisma.BpmnTaskInstanceCreateInput>,
    processInstanceId: string,
    taskId: string,
    performerId: string = null
  ) {
    return db.mutation.createBpmnTaskInstance({
      data: create.bpmnTaskInstance(partial, processInstanceId, taskId, performerId)
    });
  },
  notification: (
    partial: Partial<Prisma.NotificationCreateInput>
  ): Prisma.NotificationCreateInput => ({
    userId: null,
    processInstanceId: null,
    visible: true,
    code: 'ProcessStarted',
    params: 'Process Name',
    type: 'Info',
    ...partial
  }),
  notificationMutation(partial: Partial<Prisma.NotificationCreateInput>) {
    return db.mutation.createNotification({ data: create.notification(partial) });
  },
  notificationDao(from: Partial<Yoga.Notification> = {}): Yoga.Notification {
    return {
      id: 'nid',
      userId: null,
      processInstanceId: null,
      visible: true,
      code: 'ProcessStarted',
      params: 'Process Name',
      createdAt: dateStarted,
      type: 'Info',
      ...from
    };
  },
  resource: (partial: Partial<Prisma.ResourceCreateInput>): Prisma.ResourceCreateInput => ({
    createdById: null,
    resourceId: null,
    content: null,
    title: null,
    type: 'Url',
    version: 0,
    publicationStatus: 'Published',
    ...partial
  }),
  resourceMutation(partial: Partial<Prisma.ResourceCreateInput>) {
    return db.mutation.createResource({ data: create.resource(partial) });
  },
  log: (partial: Partial<Prisma.LogCreateInput> = {}): Prisma.LogCreateInput => ({
    date: dateStarted,
    elementId: null,
    elementName: '',
    ...partial
  })
};
