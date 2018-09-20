import { QueryTypes } from 'data/client';

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
