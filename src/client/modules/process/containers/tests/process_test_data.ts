import { QueryTypes } from 'data/client';

import { create } from 'client/tests';

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
  tasks: [
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
  ],
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
