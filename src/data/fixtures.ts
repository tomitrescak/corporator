import * as bcrypt from 'bcryptjs';
import { spfBpmn } from './fixtures_data';
import * as Prisma from './generated/prisma';

require('dotenv').config({ path: process.argv[5] });

// tslint:disable-next-line:no-console
console.log('Loading data to: ' + process.env.ENDPOINT);

let db: Prisma.Prisma = new Prisma.Prisma({
  endpoint: process.env.ENDPOINT
  // debug: true
  // secret: 'my_secret123', // only needed if specified in `database/prisma.yml`
});

let loadFixtures = !!process.argv[3];
let createUser = !!process.argv[7];

/* =========================================================
    Constants
   ======================================================== */

const dateStarted = new Date(2018, 1, 2);
const dateFinished = new Date(2018, 2, 10);

const access = (owner: string, role: string, permission: string): Prisma.AccessCreateOneInput => ({
  create: {
    createdById: owner,
    createdOn: dateStarted,
    execute: {
      create: {
        organisationId: null,
        roleId: permission[2] === 'x' && role,
        userId: null
      }
      //#endregion
    },
    read: {
      create: {
        organisationId: null,
        roleId: permission[1] === 'w' && role,
        userId: null
      }
    },
    write: {
      create: {
        organisationId: null,
        roleId: permission[0] === 'r' && role,
        userId: null
      }
    },
    modifiedById: owner,
    modifiedOn: dateFinished
  }
});

/* =========================================================
    DEFAULT DATA
   ======================================================== */

async function loadDefaultLocalisations() {
  // tslint:disable-next-line:no-console
  console.log('Loading default localisations ...');

  await db.mutation.deleteManyLocalisations({});

  await db.mutation.createLocalisation({
    data: { code: 'ProcessStarted', language: 'EN', text: 'Process "{0}" started' }
  });
  await db.mutation.createLocalisation({
    data: { code: 'ProcessFinished', language: 'EN', text: 'Process "{0}" finished' }
  });
  await db.mutation.createLocalisation({
    data: { code: 'ProcessAborted', language: 'EN', text: 'Process "{0}" aborted' }
  });
  await db.mutation.createLocalisation({
    data: { code: 'ActionStarted', language: 'EN', text: 'Action "{0}" started in "{2}"' }
  });
  await db.mutation.createLocalisation({
    data: { code: 'ActionFinished', language: 'EN', text: '{0} completed action "{1}" in "{2}"' }
  });
  await db.mutation.createLocalisation({
    data: {
      code: 'ActionAborted',
      language: 'EN',
      text: '{0} aborted action "{1}" in "{2}" because "{3}"'
    }
  });
  await db.mutation.createLocalisation({
    data: { code: 'ActionRequired', language: 'EN', text: 'Please "{0}" in "{1}" because "{2}"' }
  });
}

// tslint:disable-next-line:no-console
loadDefaultLocalisations().then(() => console.log('Localisations loaded ..'));

export const create = {
  date(addDays: number = 0) {
    return new Date(2018, 2, 10 + addDays);
  },
  userMutation(user: Partial<Prisma.UserCreateInput> = {}) {
    return db.mutation.createUser({ data: create.user(user) });
  },
  user: (user: Partial<Prisma.UserCreateInput> = {}): Prisma.UserCreateInput => ({
    name: 'Tomas Trescak',
    uid: '30031005',
    roles: {
      set: ['admin']
    },
    password: bcrypt.hashSync('123', 10),
    ...user
  }),
  element: (element: Partial<Prisma.FormElementCreateInput>): Prisma.FormElementCreateInput => ({
    column: 0,
    control: 'Input',
    controlProps: null,
    defaultValue: null,
    filterColumn: null,
    filterSource: null,
    inline: false,
    label: null,
    list: null,
    row: 0,
    source: null,
    vertical: null,
    width: null,
    parentElement: null,
    ...element
  }),
  validation: (element: Partial<Prisma.ValidatorCreateInput>): Prisma.ValidatorCreateInput => ({
    name: 'Required',
    params: null,
    ...element
  }),
  formMutation(form: Partial<Prisma.FormCreateInput> = {}) {
    return db.mutation.createForm({ data: create.form(form) });
  },
  form: (form: Partial<Prisma.FormCreateInput> = {}): Prisma.FormCreateInput => ({
    name: 'Form',
    description: 'Test Form',
    elements: form.elements,
    validations: form.validations,
    ...form
  }),
  descriptor: (
    partial: Partial<Prisma.DataDescriptorCreateInput>
  ): Prisma.DataDescriptorCreateInput => ({
    name: null,
    description: 'Description',
    expression: null,
    type: 'String',
    isArray: false,
    defaultValue: null,
    validators: null,
    parentDescriptor: null,
    ...partial
  }),
  descriptorMutation(partial: Partial<Prisma.DataDescriptorCreateInput>) {
    return db.mutation.createDataDescriptor({ data: create.descriptor(partial) });
  },
  bpmnTask: (partial: Partial<Prisma.BpmnTaskCreateInput>): Prisma.BpmnTaskCreateInput => ({
    taskId: null,
    resources: null,
    name: 'Task Name',
    type: 'Form',
    ...partial
  }),
  bpmnTaskMutation(partial: Partial<Prisma.BpmnTaskCreateInput>) {
    return db.mutation.createBpmnTask({ data: create.bpmnTask(partial) });
  },
  bpmnProcess: (
    partial: Partial<Prisma.BpmnProcessCreateInput>
  ): Prisma.BpmnProcessCreateInput => ({
    name: 'Process',
    description: 'Process 4 description',
    model: '',
    status: 'Published',
    actionCount: 0,
    type: 'HumanResources',
    version: 0,
    access: null,
    resources: null,
    ...partial
  }),
  bpmnProcessMutation(partial: Partial<Prisma.BpmnProcessCreateInput>) {
    return db.mutation.createBpmnProcess({ data: create.bpmnProcess(partial) });
  },
  bpmnProcessInstance: (
    partial: Partial<Prisma.BpmnProcessInstanceCreateInput>
  ): Prisma.BpmnProcessInstanceCreateInput => ({
    process: null,
    data: {},
    owner: null,
    status: 'Running',
    dateStarted,
    ...partial
  }),
  bpmnProcessInstanceMutation(partial: Partial<Prisma.BpmnProcessInstanceCreateInput>) {
    return db.mutation.createBpmnProcessInstance({ data: create.bpmnProcessInstance(partial) });
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
    performerRoles: { set: ['User'] },
    performer: performerId ? { connect: { id: performerId } } : null,
    processInstance: { connect: { id: processInstanceId } },
    task: { connect: { id: taskId } },
    ...partial
  }),
  bpmnTaskInstanceMutation(
    partial: Partial<Prisma.BpmnTaskInstanceCreateInput>,
    processInstanceId: string,
    taskId: string
  ) {
    return db.mutation.createBpmnTaskInstance({
      data: create.bpmnTaskInstance(partial, processInstanceId, taskId)
    });
  },
  notification: (
    partial: Partial<Prisma.NotificationCreateInput>
  ): Prisma.NotificationCreateInput => ({
    userId: null,
    processInstance: null,
    visible: true,
    code: 'ProcessStarted',
    params: { set: ['Process Name'] },
    type: 'Info',
    ...partial
  }),
  notificationMutation(partial: Partial<Prisma.NotificationCreateInput>) {
    return db.mutation.createNotification({ data: create.notification(partial) });
  },
  resource: (partial: Partial<Prisma.ResourceCreateInput>): Prisma.ResourceCreateInput => ({
    document: null,
    form: null,
    link: null,
    name: 'Resource',
    type: 'Url',
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

/* =========================================================
    FIXTURES
   ======================================================== */

async function insertFixtures() {
  // tslint:disable-next-line:no-console
  console.log('Loading fixtures ...');

  // tslint:disable-next-line:no-console
  console.log('Creating user ...');
  const user = createUser
    ? await create.userMutation({ roles: { set: ['User'] } })
    : (await db.query.users({}))[0];

  // create other user
  const otherUser = createUser
    ? await create.userMutation({ name: 'Other User', uid: '30001234', roles: { set: ['Buyer'] } })
    : (await db.query.users({}))[0];

  /* =========================================================
      Cleanup
     ======================================================== */

  // tslint:disable-next-line:no-console
  console.log('Cleanup ...');

  await db.mutation.deleteManyLogs({});
  await db.mutation.deleteManyDataDescriptors({});
  await db.mutation.deleteManyFormElements({});
  await db.mutation.deleteManyDocuments({});
  await db.mutation.deleteManyForms({});
  await db.mutation.deleteManyResources({});
  await db.mutation.deleteManyNotifications({});
  await db.mutation.deleteManyBpmnTaskInstances({});
  await db.mutation.deleteManyBpmnProcessInstances({});
  await db.mutation.deleteManyBpmnProcesses({});
  await db.mutation.deleteManyBpmnTasks({});

  /* =========================================================
      Resources
     ======================================================== */

  // tslint:disable-next-line:no-console
  console.log('Creating resources ...');

  const nameDescriptor = await create.descriptorMutation({ name: 'owner.personal.name' });
  const ageDescriptor = await create.descriptorMutation({
    name: 'owner.personal.age',
    type: 'Float'
  });

  const report = await create.formMutation({
    name: 'Registration Form',
    description: 'This is a registration form',
    elements: {
      create: [
        create.element({
          label: 'Name',
          control: 'Text',
          source: {
            connect: { id: nameDescriptor.id }
          },
          column: 0,
          width: 8,
          row: 0
        }),
        create.element({
          label: 'Age',
          control: 'Text',
          source: {
            connect: { id: ageDescriptor.id }
          },
          column: 8,
          width: 8,
          row: 0
        })
      ]
    }
  });

  const form = await create.formMutation({
    name: 'Registration Form',
    description: 'This is a registration form',
    elements: {
      create: [
        create.element({
          label: 'Name',
          source: {
            connect: { id: nameDescriptor.id }
          },
          column: 0,
          width: 8,
          row: 0
        }),
        create.element({
          label: 'Age',
          source: {
            connect: { id: ageDescriptor.id }
          },
          column: 9,
          width: 8,
          row: 0,
          
        })
      ]
    }
  });

  const formResource = await create.resourceMutation({
    type: 'Form',
    name: 'Approval Form',
    form: {
      connect: { id: form.id }
    }
  });

  const reportResource = await create.resourceMutation({
    type: 'Form',
    name: 'Deans Report',
    form: {
      connect: { id: report.id }
    }
  });

  /* =========================================================
      Tasks
     ======================================================== */

  // tslint:disable-next-line:no-console
  console.log('Creating tasks ...');

  const genericTask = await create.bpmnTaskMutation({ taskId: 'Task_17t05yl' });

  const formTask = await create.bpmnTaskMutation({
    name: 'Form Task',
    taskId: 'Task_14qe8bh',
    resources: {
      connect: {
        id: formResource.id
      }
    },
    type: 'Form'
  });

  const reportTask = await create.bpmnTaskMutation({
    name: 'Report Task',
    taskId: 'Task_0f1st02',
    resources: {
      connect: {
        id: reportResource.id
      }
    },
    type: 'Form'
  });

  /* =========================================================
      BpmnProcesses
     ======================================================== */

  // tslint:disable-next-line:no-console
  console.log('Creating BPMN processes ...');

  const processDefinitions: Prisma.BpmnProcessCreateInput[] = [
    create.bpmnProcess({
      name: 'Process 1',
      description: 'Process 1 description',
      type: 'Purchases',
      dataDescriptors: {
        connect: [{ id: nameDescriptor.id }, { id: ageDescriptor.id }]
      },
      tasks: {
        connect: [{ id: formTask.id }, { id: reportTask.id }, { id: genericTask.id }]
      },
      resources: {
        create: [
          {
            type: 'Form',
            name: 'Advanced Form'
          },
          {
            type: 'File',
            name: 'Excel File',
            link: '/uploads/file.doc'
          },
          {
            type: 'Url',
            name: 'External Resource',
            link: 'http://google.com'
          },
          {
            type: 'Document',
            name: 'Guidelines',
            document: {
              create: {
                content: `<h1>Guidelines</h1><p>This is guideline document</p>`,
                title: 'Guidelines'
              }
            }
          }
        ],
        connect: [{ id: formResource.id }, { id: reportResource.id }]
      },
      version: 0,
      model: spfBpmn,
      access: access(user.id, 'User', 'rwx')
    }),
    create.bpmnProcess({
      name: 'Process 4',
      description: 'Process 4 description',
      type: 'HumanResources',
      access: access(user.id, 'User', 'rw-')
    }),
    create.bpmnProcess({
      name: 'Process 2',
      description: 'Process 2 description',
      status: 'Draft',
      type: 'Sales',
      access: access(user.id, 'User', 'r-x')
    }),
    create.bpmnProcess({
      name: 'Process 3',
      description: 'Process 3 description',
      model: '',
      status: 'Proposal',
      actionCount: 0,
      type: 'Travel',
      version: 0,
      access: access(user.id, 'User', 'r--')
    })
  ];

  let processes: Prisma.BpmnProcess[] = [];
  for (let input of processDefinitions) {
    const process = await db.mutation.createBpmnProcess({ data: { ...input } });
    processes.push(process);
  }

  /* =========================================================
        BpmnProcess Instances
       ======================================================== */

  // tslint:disable-next-line:no-console
  console.log('Creating BPMN process instances ...');

  const processInstanceDefinitions: Prisma.BpmnProcessInstanceCreateInput[] = [
    create.bpmnProcessInstance({
      process: { connect: { id: processes[0].id } },
      owner: { connect: { id: user.id } },
      log: {
        create: [
          create.log({
            elementId: 'StartEvent_1',
            elementName: 'Start event',
            date: create.date(0)
          }),
          create.log({ elementId: 'SequenceFlow_1v4vufq', date: create.date(2) }),
          create.log({
            elementId: 'Task_17t05yl',
            date: create.date(2),
            status: 'Started',
            elementName: 'Approve Report'
          }),
          create.log({
            date: create.date(3),
            elementId: 'Task_17t05yl',
            performer: {
              connect: { id: otherUser.id }
            },
            status: 'Approved',
            elementName: 'Approve Report',
            message: 'Everything went well. Bravo!'
          }),
          create.log({ elementId: 'SequenceFlow_0fvr9vw', date: create.date(1) }),
          create.log({ elementId: 'SequenceFlow_1g6j69j' }),
          create.log({
            elementId: 'Task_1c0tszi',
            elementName: 'Submit More',
            date: create.date(4)
          }),
          create.log({ elementId: 'ExclusiveGateway_1r8olns' })
        ]
      }
    }),
    create.bpmnProcessInstance({
      process: { connect: { id: processes[1].id } },
      data: {},
      owner: { connect: { id: user.id } },
      status: 'Running',
      dateStarted
    }),
    create.bpmnProcessInstance({
      process: { connect: { id: processes[0].id } },
      owner: { connect: { id: user.id } },
      status: 'Finished',
      dateFinished
    }),
    create.bpmnProcessInstance({
      process: { connect: { id: processes[0].id } },
      owner: { connect: { id: user.id } },
      status: 'Aborted',
      dateFinished
    }),
    create.bpmnProcessInstance({
      process: { connect: { id: processes[1].id } },
      owner: { connect: { id: user.id } },
      status: 'Finished',
      dateFinished
    })

    // { processId: fixtureContext.processes[1].id }
  ];

  let processInstances: Prisma.BpmnProcessInstance[] = [];
  for (let input of processInstanceDefinitions) {
    const process = await db.mutation.createBpmnProcessInstance({ data: input });
    processInstances.push(process);
  }

  /* =========================================================
      Task Instances
     ======================================================== */

  const pid = processInstances[0].id;
  db.mutation.updateBpmnProcessInstance({
    where: { id: pid },
    data: {
      tasks: {
        create: [
          create.bpmnTaskInstance(
            { dateStarted: create.date(4), dateFinished: create.date(5), status: 'Paused' },
            pid,
            genericTask.id,
            otherUser.id
          ),
          create.bpmnTaskInstance(
            { dateStarted: create.date(2), dateFinished: create.date(3), status: 'Aborted' },
            pid,
            genericTask.id,
            user.id
          ),
          create.bpmnTaskInstance(
            { dateStarted: create.date(0), dateFinished: create.date(1), status: 'Finished' },
            pid,
            formTask.id,
            user.id
          ),
          create.bpmnTaskInstance(
            { dateStarted: create.date(5), dateFinished: create.date(6), status: 'Approved' },
            pid,
            genericTask.id,
            otherUser.id
          ),
          create.bpmnTaskInstance(
            { dateStarted: create.date(8), dateFinished: create.date(9), status: 'Rejected' },
            pid,
            genericTask.id,
            otherUser.id
          ),
          create.bpmnTaskInstance({ dateStarted: create.date(12) }, pid, formTask.id)
        ]
      }
    }
  });

  /* =========================================================
      Log
     ======================================================== */

  /* =========================================================
        Notifications
      ======================================================== */

  // tslint:disable-next-line:no-console
  console.log('Creating notifications ...');

  const notifications: Prisma.NotificationCreateInput[] = [
    create.notification({
      userId: user.id,
      processInstance: { connect: { id: processInstances[0].id } },
      visible: true,
      code: 'ProcessStarted',
      params: { set: ['Process Name'] },
      type: 'Info'
    }),
    create.notification({
      userId: user.id,
      processInstance: { connect: { id: processInstances[0].id } },
      visible: true,
      code: 'ProcessFinished',
      params: { set: ['Process Name'] },
      type: 'Info'
    }),
    create.notification({
      userId: user.id,
      processInstance: { connect: { id: processInstances[0].id } },
      visible: true,
      code: 'ProcessAborted',
      params: { set: ['Process Name'] },
      type: 'Error'
    }),
    create.notification({
      userId: user.id,
      processInstance: { connect: { id: processInstances[0].id } },
      visible: true,
      code: 'ActionStarted',
      params: { set: ['Action Name', 'Process Name'] },
      type: 'Info'
    }),
    create.notification({
      userId: user.id,
      processInstance: { connect: { id: processInstances[0].id } },
      visible: true,
      code: 'ActionFinished',
      params: { set: ['Tomas Trescak', 'Action Name', 'Process Name'] },
      type: 'Info'
    }),
    create.notification({
      userId: user.id,
      processInstance: { connect: { id: processInstances[0].id } },
      visible: true,
      code: 'ActionRequired',
      params: { set: ['Action Name', 'Process Name', 'Tomas Trescak'] },
      type: 'Info'
    }),
    create.notification({
      userId: user.id,
      processInstance: { connect: { id: processInstances[0].id } },
      visible: true,
      code: 'ActionAborted',
      params: { set: ['Tomas Trescak', 'Action Name', 'Process Name', 'Reason'] },
      type: 'Warning'
    })
  ];

  for (let input of notifications) {
    await db.mutation.createNotification({ data: input });
  }

  /* =========================================================
      Cleanup
     ======================================================== */

  // await db.mutation.deleteManyUsers({});
}

if (loadFixtures) {
  // tslint:disable-next-line:no-console
  insertFixtures().then(() => console.log('Fixtures inserted'));
}
