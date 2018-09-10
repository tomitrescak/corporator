import * as PROCESSES_QUERY from 'data/bpmn_process/client/processes_query.graphql';

import { Query, QueryProps } from 'react-apollo';

import { QueryTypes } from 'data/client';

export { PROCESSES_QUERY };

/* =========================================================
    Notifications
   ======================================================== */

type Data = QueryTypes.Processes;
type Variables = QueryTypes.ProcessesVariables;
type Props = Partial<QueryProps<QueryTypes.Processes, QueryTypes.ProcessesVariables>>;

export class ProcessListQuery extends Query<Data, Variables> {
  static displayName = 'ProcessesQuery';
  static defaultProps: Props = {
    query: PROCESSES_QUERY,
    variables: {
      input: {
        first: 50
      }
    }
  };
}
