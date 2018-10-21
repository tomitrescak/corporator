import { QueryTypes } from 'data/client';

import { create } from 'client/tests';

/* =========================================================
    Resources
   ======================================================== */

const resources: QueryTypes.BpmnProcessResource[] = [
  {
    id: '1',
    readRoles: [],
    resource: {
      id: '1',
      type: QueryTypes.ResourceType.Form,
      title: 'Approval Form',
      content: null
    }
  },
  {
    id: '2',
    readRoles: [],
    resource: {
      id: '2',
      type: QueryTypes.ResourceType.Form,
      title: 'Approval Report',
      content: null
    }
  },
  {
    id: '3',
    readRoles: [],
    resource: {
      id: '3',
      type: QueryTypes.ResourceType.File,
      title: 'Excel File',
      content: '/uploads/file.doc'
    }
  },
  {
    id: '4',
    readRoles: [],
    resource: {
      id: '4',
      type: QueryTypes.ResourceType.Url,
      title: 'External Resource',
      content: 'http://google.com'
    }
  },
  {
    id: '5',
    readRoles: [],
    resource: {
      id: '5',
      type: QueryTypes.ResourceType.Document,
      title: 'Guidelines',
      content: null
    }
  }
];

/* =========================================================
    BpmnProcess
   ======================================================== */

export function createProcessItem(process: Partial<QueryTypes.BpmnProcessItem> = {}) {
  return {
    id: '1',
    name: 'Process',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    actionCount: 4,
    type: 'Travel',
    ...process
  };
}

export function createProcesses(): QueryTypes.BpmnProcessItem[] {
  return [
    createProcessItem({ id: '1', name: 'Travel Process' }),
    createProcessItem({
      id: '2',
      name: 'Purchase Process',
      type: 'Purchases'
    }),
    createProcessItem({ id: '3', name: 'Sales Process', type: 'Sales' }),
    createProcessItem({
      id: '4',
      name: 'Human Resource Process',
      type: 'HumanResources'
    })
  ];
}

export function createProcess(
  process: Partial<QueryTypes.BpmnProcessDefinition> = {}
): QueryTypes.BpmnProcessDefinition {
  return {
    id: '1',
    name: 'Process',
    schema: null,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    type: 'Travel',
    model: null,
    resources,
    ...process
  };
}

/* =========================================================
    BpmnProcessListInstance
   ======================================================== */

export function createProcessInstanceList() {
  return [
    createProcessListInstance({ id: '1' }),
    createProcessListInstance({ id: '2' }, [createProcessInstanceTask({ dateFinished: null })]),
    createProcessListInstance({ id: '3', status: QueryTypes.BpmnProcessInstanceStatus.Aborted }),
    createProcessListInstance({ id: '4', status: QueryTypes.BpmnProcessInstanceStatus.Paused }),
    createProcessListInstance(
      {
        id: '5',
        status: QueryTypes.BpmnProcessInstanceStatus.Finished,
        dateFinished: create.finishedDate
      },
      [createProcessInstanceTask()]
    )
  ];
}

// export function createProcessListInstanceTask(
//   task: Partial<QueryTypes.BpmnProcessInstanceItemTask> = {}
// ): QueryTypes.BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Tasks {
//   return {
//     dateStarted: create.createdDate,
//     dateFinished: create.finishedDate,
//     performer: {
//       name: 'Tomas Trescak'
//     },
//     task: {
//       name: 'Task Name'
//     },
//     performerRoles: ['Approver'],
//     ...task
//   };
// }

// const processInstanceItemTasks: QueryTypes.BpmnProcessInstanceItemTask[] = [
//   createProcessListInstanceTask({ dateFinished: create.createdDate }),
//   createProcessListInstanceTask(),
//   createProcessListInstanceTask({ dateFinished: create.createdDate }),
//   {
//     dateStarted: create.createdDate,
//     dateFinished: null,
//     performer: null,
//     performerRoles: ['Purchasing'],
//     task: {
//       name: 'Complete Purchase'
//     }
//   },
//   {
//     task: {
//       name: 'Deliver Technology'
//     },
//     dateStarted: create.createdDate,
//     dateFinished: null,
//     performer: null,
//     performerRoles: ['IT Support', 'IT Delivery']
//   }
// ];

export function createProcessInstanceTask(
  task: Partial<QueryTypes.BpmnProcessInstanceTask> = {}
): QueryTypes.BpmnProcessInstanceTask {
  return {
    id: '1',
    status: QueryTypes.BpmnTaskInstanceStatus.Started,
    data: {},
    dateStarted: create.createdDate,
    dateFinished: create.finishedDate,
    performer: {
      id: '1',
      name: 'Tomas Trescak'
    },
    task: {
      id: '2',
      type: QueryTypes.BpmnTaskType.Form,
      resources: [],
      name: 'Task Name',
      performerRoles: ['Approver']
    },
    ...task
  };
}

const processInstanceTasks: QueryTypes.BpmnProcessInstanceTask[] = [
  createProcessInstanceTask({ dateFinished: create.createdDate }),
  createProcessInstanceTask(),
  createProcessInstanceTask({ dateFinished: create.createdDate }),
  createProcessInstanceTask({
    dateStarted: create.createdDate,
    dateFinished: null,
    performer: null,
    task: {
      id: '1',
      type: QueryTypes.BpmnTaskType.Form,
      name: 'Complete Purchase',
      resources: [],
      performerRoles: ['Purchasing']
    }
  }),
  createProcessInstanceTask({
    task: {
      id: '2',
      type: QueryTypes.BpmnTaskType.Form,
      name: 'Deliver Technology',
      resources: [],
      performerRoles: ['IT Support', 'IT Delivery']
    },
    dateStarted: create.createdDate,
    dateFinished: null,
    performer: null
  })
];

export function createProcessListInstance(
  process: Partial<QueryTypes.BpmnProcessInstanceItem> = {},
  tasks: QueryTypes.BpmnProcessInstanceItem_Tasks[] = null
): QueryTypes.BpmnProcessInstanceItem {
  return {
    id: '1',
    dateStarted: create.createdDate,
    dateFinished: null,
    process: {
      id: 'pid',
      description:
        'Exercitation laborum id mollit reprehenderit exercitation ad adipisicing duis id qui ut tempor ullamco. Duis magna eu pariatur sit aliquip consectetur occaecat quis officia Lorem tempor elit. Et sint ad dolor sint minim laborum aliqua Lorem. Quis laborum veniam ullamco id culpa occaecat deserunt incididunt esse. Sint irure sunt duis Lorem eu eu culpa reprehenderit Lorem. Do cupidatat nisi velit dolore mollit.',
      name: 'Process 1',
      type: 'Purchases'
    },
    owner: {
      id: 'bh',
      name: 'Buddy Holly'
    },
    status: QueryTypes.BpmnProcessInstanceStatus.Running,
    tasks: tasks || processInstanceTasks,
    ...process
  };
}

/* =========================================================
    BpmnProcessInstance
   ======================================================== */

export function createComment(
  comment: Partial<QueryTypes.BpmnProcessComment> = {},
  user = 'User A'
): QueryTypes.BpmnProcessComment {
  return {
    id: '1',
    date: create.createdDate,
    text: 'This is my comment',
    user: {
      name: 'User A'
    },
    replyTo: undefined,
    ...comment,
    ...{ user: { name: user } }
  };
}

export function createProcessInstance(
  process: Partial<QueryTypes.BpmnProcessInstance> = {}
): QueryTypes.BpmnProcessInstance {
  return {
    id: 'piid',
    status: QueryTypes.BpmnProcessInstanceStatus.Running,
    // process: {
    //   id: 'pid',
    //   name: 'Process 1',
    //   dataDescriptors: [],
    //   description:
    //     'Exercitation laborum id mollit reprehenderit exercitation ad adipisicing duis id qui ut tempor ullamco. Duis magna eu pariatur sit aliquip consectetur occaecat quis officia Lorem tempor elit. Et sint ad dolor sint minim laborum aliqua Lorem. Quis laborum veniam ullamco id culpa occaecat deserunt incididunt esse. Sint irure sunt duis Lorem eu eu culpa reprehenderit Lorem. Do cupidatat nisi velit dolore mollit.',
    //   type: 'Purchases',
    //   model: student_purchase,
    //   resources
    // },
    log: [],
    owner: {
      id: 'bh',
      name: 'Buddy Holly'
    },
    tasks: processInstanceTasks,
    comments: [
      createComment({ id: '1', text: 'Comment 6', date: create.date(2) }),
      createComment({ id: '2', text: 'Comment 2' }, 'User B'),
      createComment({ id: '3', text: 'Comment 3', replyTo: '2' }),
      createComment({ id: '4', text: 'Comment 4', replyTo: '3' }),
      createComment({ id: '5', text: 'Comment 5', replyTo: '2', date: create.date(3) }),
      createComment({ id: '6', text: 'Comment 1' })
    ],
    data: '{}',
    dateStarted: create.createdDate,
    dateFinished: null,
    ...process
  };
}
