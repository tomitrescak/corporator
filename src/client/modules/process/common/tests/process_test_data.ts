import { QueryTypes } from 'data/client';

import { create } from 'client/tests';
import { student_purchase } from './process_definitions';

/* =========================================================
    Resources
   ======================================================== */

const resources: QueryTypes.BpmnProcessResource[] = [
  {
    id: '1',
    type: QueryTypes.ResourceType.Form,
    name: 'Approval Form',
    link: null,
    form: { id: '1' },
    document: null
  },
  {
    id: '2',
    type: QueryTypes.ResourceType.Report,
    name: 'Approval Report',
    link: null,
    form: { id: '1' },
    document: null
  },
  {
    id: '3',
    type: QueryTypes.ResourceType.File,
    name: 'Excel File',
    link: '/uploads/file.doc',
    form: null,
    document: null
  },
  {
    id: '4',
    type: QueryTypes.ResourceType.Url,
    name: 'External Resource',
    link: 'http://google.com',
    form: null,
    document: null
  },
  {
    id: '5',
    type: QueryTypes.ResourceType.Document,
    name: 'Guidelines',
    link: null,
    form: null,
    document: { id: '1' }
  }
];

/* =========================================================
    BpmnProcess
   ======================================================== */

export function createProcessItem(process: Partial<QueryTypes.ProcessesQuery_Processes> = {}) {
  return {
    id: '1',
    name: 'Process',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    actionCount: 4,
    type: QueryTypes.ProcessType.Travel,
    ...process
  };
}

export function createProcesses(): QueryTypes.ProcessesQuery_Processes[] {
  return [
    createProcessItem({ name: 'Travel Process' }),
    createProcessItem({ name: 'Purchase Process', type: QueryTypes.ProcessType.Purchases }),
    createProcessItem({ name: 'Sales Process', type: QueryTypes.ProcessType.Sales }),
    createProcessItem({
      name: 'Human Resource Process',
      type: QueryTypes.ProcessType.HumanResources
    })
  ];
}

export function createProcess(
  process: Partial<QueryTypes.BpmnProcessDefinition> = {}
): QueryTypes.BpmnProcessDefinition {
  return {
    id: '1',
    name: 'Process',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    type: QueryTypes.ProcessType.Travel,
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
    createProcessListInstance({ id: '2' }, [createProcessListInstanceTask({ dateFinished: null })]),
    createProcessListInstance({ id: '3', status: QueryTypes.BpmnProcessInstanceStatus.Aborted }),
    createProcessListInstance({ id: '4', status: QueryTypes.BpmnProcessInstanceStatus.Paused }),
    createProcessListInstance(
      {
        id: '5',
        status: QueryTypes.BpmnProcessInstanceStatus.Finished,
        dateFinished: create.finishedDate
      },
      [createProcessListInstanceTask()]
    )
  ];
}

export function createProcessListInstanceTask(
  task: Partial<QueryTypes.BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Tasks> = {}
): QueryTypes.BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Tasks {
  return {
    dateStarted: create.createdDate,
    dateFinished: create.finishedDate,
    performer: {
      name: 'Tomas Trescak'
    },
    task: {
      name: 'Task Name'
    },
    performerRoles: ['Approver'],
    ...task
  };
}

const processTasks: QueryTypes.BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Tasks[] = [
  createProcessListInstanceTask({ dateFinished: create.createdDate }),
  createProcessListInstanceTask(),
  createProcessListInstanceTask({ dateFinished: create.createdDate }),
  {
    dateStarted: create.createdDate,
    dateFinished: null,
    performer: null,
    performerRoles: ['Purchasing'],
    task: {
      name: 'Complete Purchase'
    }
  },
  {
    task: {
      name: 'Deliver Technology'
    },
    dateStarted: create.createdDate,
    dateFinished: null,
    performer: null,
    performerRoles: ['IT Support', 'IT Delivery']
  }
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
      description:
        'Exercitation laborum id mollit reprehenderit exercitation ad adipisicing duis id qui ut tempor ullamco. Duis magna eu pariatur sit aliquip consectetur occaecat quis officia Lorem tempor elit. Et sint ad dolor sint minim laborum aliqua Lorem. Quis laborum veniam ullamco id culpa occaecat deserunt incididunt esse. Sint irure sunt duis Lorem eu eu culpa reprehenderit Lorem. Do cupidatat nisi velit dolore mollit.',
      name: 'Process 1',
      type: QueryTypes.ProcessType.Purchases
    },
    owner: {
      name: 'Buddy Holly'
    },
    status: QueryTypes.BpmnProcessInstanceStatus.Running,
    tasks: tasks || processTasks,
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
    process: {
      id: 'pid',
      name: 'Process 1',
      description:
        'Exercitation laborum id mollit reprehenderit exercitation ad adipisicing duis id qui ut tempor ullamco. Duis magna eu pariatur sit aliquip consectetur occaecat quis officia Lorem tempor elit. Et sint ad dolor sint minim laborum aliqua Lorem. Quis laborum veniam ullamco id culpa occaecat deserunt incididunt esse. Sint irure sunt duis Lorem eu eu culpa reprehenderit Lorem. Do cupidatat nisi velit dolore mollit.',
      type: QueryTypes.ProcessType.Purchases,
      model: student_purchase,
      resources
    },
    owner: {
      name: 'Buddy Holly'
    },
    tasks: processTasks,
    comments: [
      createComment({ id: '1', text: 'Comment 6', date: create.date(2) }),
      createComment({ id: '2', text: 'Comment 2' }, 'User B'),
      createComment({ id: '3', text: 'Comment 3', replyTo: '2' }),
      createComment({ id: '4', text: 'Comment 4', replyTo: '3' }),
      createComment({ id: '5', text: 'Comment 5', replyTo: '2', date: create.date(3) }),
      createComment({ id: '6', text: 'Comment 1' })
    ],
    data: {},
    dateStarted: create.createdDate,
    dateFinished: null,
    ...process
  };
}
