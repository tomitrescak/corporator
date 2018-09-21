import { QueryTypes } from 'data/client';

import { create } from 'client/tests';
import { student_purchase } from './process_definitions';

/* =========================================================
    BpmnProcess
   ======================================================== */

const defaultProcess: QueryTypes.ProcessesQuery_Processes = {
  id: '1',
  name: 'Process',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  actionCount: 4,
  type: QueryTypes.ProcessType.Travel
};

export function createProcess(
  process: Partial<QueryTypes.ProcessesQuery_Processes> = {}
): QueryTypes.ProcessesQuery_Processes {
  return { ...defaultProcess, ...process };
}

export function createProcesses(): QueryTypes.ProcessesQuery_Processes[] {
  return [
    createProcess({ name: 'Travel Process' }),
    createProcess({ name: 'Purchase Process', type: QueryTypes.ProcessType.Purchases }),
    createProcess({ name: 'Sales Process', type: QueryTypes.ProcessType.Sales }),
    createProcess({
      name: 'Human Resource Process',
      type: QueryTypes.ProcessType.HumanResources
    })
  ];
}

/* =========================================================
    BpmnProcessListInstance
   ======================================================== */
const defaultProcessInstanceListTask = {
  name: 'Final Task',
  dateStarted: create.createdDate,
  dateFinished: create.finishedDate,
  performer: {
    name: 'Tomas Trescak'
  },
  performerRoles: ['Approver']
};

const processTasks = [
  createProcessListInstanceTask({ dateFinished: create.createdDate, name: 'Do not display!' }),
  createProcessListInstanceTask(),
  createProcessListInstanceTask({ dateFinished: create.createdDate, name: 'Do not display!' }),
  {
    name: 'Complete Purchase',
    dateStarted: create.createdDate,
    dateFinished: null,
    performer: null,
    performerRoles: ['Purchasing']
  },
  {
    name: 'Deliver Technology',
    dateStarted: create.createdDate,
    dateFinished: null,
    performer: null,
    performerRoles: ['IT Support', 'IT Delivery']
  }
];

const defaultProcessListInstance: QueryTypes.BpmnProcessInstancesQuery_BpmnProcessInstances = {
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
  tasks: processTasks,
  status: QueryTypes.BpmnProcessInstanceStatus.Running
};

export function createProcessInstanceList() {
  return [
    createProcessListInstance({ id: '1' }),
    createProcessListInstance({ id: '2' }, [
      createProcessListInstanceTask({ name: 'First Task', dateFinished: null })
    ]),
    createProcessListInstance({ id: '3', status: QueryTypes.BpmnProcessInstanceStatus.Aborted }),
    createProcessListInstance({ id: '4', status: QueryTypes.BpmnProcessInstanceStatus.Paused }),
    createProcessListInstance(
      {
        id: '5',
        status: QueryTypes.BpmnProcessInstanceStatus.Finished,
        dateFinished: create.finishedDate
      },
      [createProcessListInstanceTask({ name: 'Last Task' })]
    )
  ];
}

export function createProcessListInstanceTask(
  task: Partial<QueryTypes.BpmnProcessInstancesQuery_BpmnProcessInstances_Tasks> = {}
) {
  return { ...defaultProcessInstanceListTask, ...task };
}

export function createProcessListInstance(
  process: Partial<QueryTypes.BpmnProcessInstancesQuery_BpmnProcessInstances> = {},
  tasks: QueryTypes.BpmnProcessInstancesQuery_BpmnProcessInstances_Tasks[] = null
): QueryTypes.BpmnProcessInstancesQuery_BpmnProcessInstances {
  return {
    ...defaultProcessListInstance,
    ...{ tasks: tasks || defaultProcessListInstance.tasks },
    ...process
  };
}

/* =========================================================
    BpmnProcessInstance
   ======================================================== */

const defaultComment: QueryTypes.BpmnProcessInstanceQuery_BpmnProcessInstance_Comments = {
  id: '1',
  date: create.createdDate,
  text: 'This is my comment',
  user: {
    name: 'User A'
  },
  replyTo: undefined
};

const defaultProcessInstance: QueryTypes.BpmnProcessInstanceQuery_BpmnProcessInstance = {
  id: '1',
  status: QueryTypes.BpmnProcessInstanceStatus.Running,
  process: {
    name: 'Process 1',
    description:
      'Exercitation laborum id mollit reprehenderit exercitation ad adipisicing duis id qui ut tempor ullamco. Duis magna eu pariatur sit aliquip consectetur occaecat quis officia Lorem tempor elit. Et sint ad dolor sint minim laborum aliqua Lorem. Quis laborum veniam ullamco id culpa occaecat deserunt incididunt esse. Sint irure sunt duis Lorem eu eu culpa reprehenderit Lorem. Do cupidatat nisi velit dolore mollit.',
    type: QueryTypes.ProcessType.Purchases,
    model: student_purchase,
    resources: [
      {
        id: '1',
        type: QueryTypes.ResourceType.Form,
        name: 'Approval Form',
        content: null
      },
      {
        id: '2',
        type: QueryTypes.ResourceType.Report,
        name: 'Approval Report',
        content: null
      },
      {
        id: '3',
        type: QueryTypes.ResourceType.File,
        name: 'Guide',
        content: '/uploads/file.doc'
      },
      {
        id: '4',
        type: QueryTypes.ResourceType.Url,
        name: 'Approval Form',
        content: 'http://google.com'
      },
      {
        id: '5',
        type: QueryTypes.ResourceType.Document,
        name: 'Guidelines',
        content: `<h1>Guidelines</h1><p>This is guideline document</p>`
      }
    ]
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
  resources: {},
  dateStarted: create.createdDate,
  dateFinished: null
};

export function createComment(
  comment: Partial<QueryTypes.BpmnProcessComment> = {},
  user = 'User A'
) {
  return { ...defaultComment, ...comment, ...{ user: { name: user } } };
}

export function createProcessInstance(
  process: Partial<QueryTypes.BpmnProcessInstanceQuery_BpmnProcessInstance> = {}
): QueryTypes.BpmnProcessInstanceQuery_BpmnProcessInstance {
  return { ...defaultProcessInstance, ...process };
}
