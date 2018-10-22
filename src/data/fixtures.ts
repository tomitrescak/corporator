import * as Prisma from './generated/prisma';

if (process.argv[5]) {
  // tslint:disable-next-line:no-console
  console.log('Setting up module references');

  const alias = require('module-alias');
  alias.addAlias('data', __dirname + '/');
}

import { spfBpmn } from './fixtures_data';
import { access, create, dateFinished, dateStarted, db } from './tests/create_data';

if (process.argv[5]) {
  require('dotenv').config({ path: process.argv[5] });

  // tslint:disable-next-line:no-console
  console.log('Loading data to: ' + process.env.ENDPOINT);
}

let loadFixtures = !!process.argv[3];
let createUser = !!process.argv[7];

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

/* =========================================================
    FIXTURES
   ======================================================== */

async function insertFixtures() {
  // tslint:disable-next-line:no-console
  console.log('Loading fixtures ...');

  await db.mutation.deleteManyRoles({});

  // tslint:disable-next-line:no-console
  console.log('Creating role');
  const userRole = await create.roleMutation({
    name: 'User',
    roleId: 'user'
  });
  const buyerRole = await create.roleMutation({
    name: 'Buyer',
    roleId: 'buyer'
  });

  // tslint:disable-next-line:no-console
  console.log('Creating user ...');
  const user = createUser
    ? await create.userMutation({ roles: { set: [userRole.roleId] } })
    : (await db.query.users({}))[0];

  // create other user
  const otherUser = createUser
    ? await create.userMutation({
        name: 'Other User',
        uid: '30001234',
        roles: { set: [buyerRole.roleId] }
      })
    : (await db.query.users({}))[0];

  /* =========================================================
      Cleanup
     ======================================================== */

  // tslint:disable-next-line:no-console
  console.log('Cleanup ...');

  await db.mutation.deleteManyLogs({});
  await db.mutation.deleteManySchemas({});
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
  console.log('Creating schemas ...');

  const nameSchema = await create.schemaMutation({
    name: 'name',
    schema: create.jsonSchemaProperty({
      type: 'string'
    })
  });

  const ageSchema = await create.schemaMutation({
    name: 'age',
    schema: create.jsonSchemaProperty({
      type: 'integer',
      minimum: 0
    })
  });

  // tslint:disable-next-line:no-console
  console.log('Creating resources ...');

  const schema = create.jsonSchema({
    definitions: {
      name: { $id: nameSchema.id },
      age: { $id: ageSchema.id }
    },
    properties: {
      name: {
        type: 'object',
        $ref: '#/definitions/name'
      },
      age: {
        type: 'object',
        $ref: '#/definitions/age'
      },
      children: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            childName: {
              type: 'string'
            }
          },
          required: ['childName']
        },
        minItems: 1
      },
      address: {
        type: 'object',
        properties: {
          city: {
            type: 'string'
          },
          zip: {
            type: 'string',
            pattern: '^\\d\\d\\d\\d$'
          }
        },
        required: ['city']
      }
    },
    required: ['owner.personal.name']
  });

  const report: Form = {
    name: 'Validation Report',
    description: 'This is a registration report',
    elements: [
      create.element({
        label: 'Name',
        control: 'Text',
        source: 'name',
        column: 0,
        width: 8,
        row: 0
      }),
      create.element({
        label: 'Age',
        control: 'Text',
        source: 'name',
        column: 8,
        width: 8,
        row: 0
      })
    ]
  };

  const form = await create.form({
    name: 'Registration Form',
    description: 'This is a registration form',
    elements: [
      create.element({
        label: 'Address',
        control: 'Form',
        source: 'address',
        column: 0,
        width: 16,
        row: 1,
        elements: [
          create.element({
            label: 'City',
            control: 'Input',
            source: 'city',
            column: 0,
            width: 8,
            row: 0
          }),
          create.element({
            label: 'Zip',
            control: 'Input',
            source: 'zip',
            column: 8,
            width: 8,
            row: 0
          })
        ]
      }),
      create.element({
        label: 'Children',
        control: 'Table',
        source: 'children',
        column: 0,
        width: 16,
        row: 2,
        elements: [
          create.element({
            label: 'Name',
            control: 'Input',
            source: 'childName',
            column: 0,
            width: 8,
            row: 0
          })
        ]
      }),
      create.element({
        label: 'Name',
        source: 'name',
        column: 0,
        width: 8,
        row: 0
      }),
      create.element({
        label: 'Age',
        source: 'age',
        column: 8,
        width: 8,
        row: 0
      })
    ]
  });

  const formResource = await create.resourceMutation({
    type: 'Form',
    resourceId: 'form1',
    createdById: user.id,
    title: form.name,
    content: JSON.stringify(form)
  });

  const reportResource = await create.resourceMutation({
    type: 'Form',
    resourceId: 'form2',
    createdById: user.id,
    title: report.name,
    content: JSON.stringify(report)
  });

  const fileResource = await create.resourceMutation({
    type: 'File',
    resourceId: 'file',
    createdById: user.id,
    title: 'Excel File',
    content: '/uploads/file.doc'
  });

  const urlResource = await create.resourceMutation({
    type: 'Url',
    resourceId: 'url',
    createdById: user.id,
    title: 'External Resource',
    content: 'http://google.com'
  });

  const documentResource = await create.resourceMutation({
    resourceId: 'document',
    type: 'Document',
    createdById: user.id,
    title: 'Guidelines',
    content: `<h1>Guidelines</h1><p>This is guideline document</p>`
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
    resources: { set: [formResource.id] },
    type: 'Form'
  });

  const reportTask = await create.bpmnTaskMutation({
    name: 'Report Task',
    taskId: 'Task_0f1st02',
    resources: { set: [reportResource.id] },
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
      schema: schema,
      tasks: {
        connect: [{ id: formTask.id }, { id: reportTask.id }, { id: genericTask.id }]
      },
      resources: {
        create: [
          { resourceId: reportResource.id },
          { resourceId: formResource.id },
          { resourceId: fileResource.id },
          { resourceId: urlResource.id },
          { resourceId: documentResource.id }
        ]
      },
      version: 0,
      model: spfBpmn,
      ...access(user.id, userRole.id, 'rwx')
    }),
    create.bpmnProcess({
      name: 'Process 4',
      description: 'Process 4 description',
      type: 'HumanResources',
      ...access(user.id, 'User', 'rw-')
    }),
    create.bpmnProcess({
      name: 'Process 2',
      description: 'Process 2 description',
      publicationStatus: 'Draft',
      type: 'Sales',
      ...access(user.id, 'User', 'r-x')
    }),
    create.bpmnProcess({
      name: 'Process 3',
      description: 'Process 3 description',
      model: '',
      publicationStatus: 'Proposal',
      actionCount: 0,
      type: 'Travel',
      version: 0,
      ...access(user.id, 'User', 'r--')
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
      processId: processes[0].id,
      ownerId: user.id,
      data: JSON.stringify({
        name: 'Tomas',
        age: 0,
        address: {
          city: '',
          zip: ''
        },
        children: []
      }),
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
            performerId: otherUser.id,
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
      processId: processes[1].id,
      data: '{}',
      ownerId: user.id,
      status: 'Running',
      dateStarted
    }),
    create.bpmnProcessInstance({
      processId: processes[0].id,
      ownerId: user.id,
      status: 'Finished',
      dateFinished
    }),
    create.bpmnProcessInstance({
      processId: processes[0].id,
      ownerId: user.id,
      status: 'Aborted',
      dateFinished
    }),
    create.bpmnProcessInstance({
      processId: processes[1].id,
      ownerId: user.id,
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

  // tslint:disable-next-line:no-console
  console.log('Creating task instances ...');

  const pid = processInstances[0].id;
  await db.mutation.updateBpmnProcessInstance({
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
          create.bpmnTaskInstance({ dateStarted: create.date(12) }, pid, formTask.id, userRole.id)
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
      processInstanceId: processInstances[0].id,
      visible: true,
      code: 'ProcessStarted',
      params: 'Process Name',
      type: 'Info'
    }),
    create.notification({
      userId: user.id,
      processInstanceId: processInstances[0].id,
      visible: true,
      code: 'ProcessFinished',
      params: 'Process Name',
      type: 'Info'
    }),
    create.notification({
      userId: user.id,
      processInstanceId: processInstances[0].id,
      visible: true,
      code: 'ProcessAborted',
      params: 'Process Name',
      type: 'Error'
    }),
    create.notification({
      userId: user.id,
      processInstanceId: processInstances[0].id,
      visible: true,
      code: 'ActionStarted',
      params: 'Action Name|Process Name',
      type: 'Info'
    }),
    create.notification({
      userId: user.id,
      processInstanceId: processInstances[0].id,
      visible: true,
      code: 'ActionFinished',
      params: 'Tomas Trescak|Action Name|Process Name',
      type: 'Info'
    }),
    create.notification({
      userId: user.id,
      processInstanceId: processInstances[0].id,
      visible: true,
      code: 'ActionRequired',
      params: 'Action Name|Process Name|Tomas Trescak',
      type: 'Info'
    }),
    create.notification({
      userId: user.id,
      processInstanceId: processInstances[0].id,
      visible: true,
      code: 'ActionAborted',
      params: 'Tomas Trescak|Action Name|Process Name|Reason',
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
