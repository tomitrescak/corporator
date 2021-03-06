import * as PROCESS_LIST_QUERY from '../queries/bpmn_processes_query.graphql';

import { Query, QueryProps } from 'react-apollo';

import { QueryTypes } from 'data/client';

export { PROCESS_LIST_QUERY };

/* =========================================================
    Process List
   ======================================================== */

type Data = QueryTypes.BpmnProcessesQuery;
type Variables = QueryTypes.BpmnProcessesQueryVariables;
type Props = Partial<
  QueryProps<QueryTypes.BpmnProcessesQuery, QueryTypes.BpmnProcessesQueryVariables>
>;

export class ProcessListQuery extends Query<Data, Variables> {
  static displayName = 'ProcessesQuery';
  static defaultProps: Props = {
    query: PROCESS_LIST_QUERY,
    variables: {
      input: {
        first: 50
      }
    }
  };
}
