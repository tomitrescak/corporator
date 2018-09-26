import * as PROCESS_INSTANCE_LIST_QUERY from '../queries/bpmn_process_instances_query.graphql';
import * as PROCESS_LIST_QUERY from '../queries/processes_query.graphql';

import { Query, QueryProps } from 'react-apollo';

import { QueryTypes } from 'data/client';

export { PROCESS_LIST_QUERY, PROCESS_INSTANCE_LIST_QUERY };

/* =========================================================
    Process List
   ======================================================== */

type Data = QueryTypes.ProcessesQuery;
type Variables = QueryTypes.ProcessesQueryVariables;
type Props = Partial<QueryProps<QueryTypes.ProcessesQuery, QueryTypes.ProcessesQueryVariables>>;

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

/* =========================================================
    Process Instance List
   ======================================================== */

type ProcessInstanceListData = QueryTypes.BpmnProcessInstancesQuery;
type ProcessInstanceListVariables = QueryTypes.BpmnProcessInstancesQueryVariables;
type ProcessInstanceListProps = Partial<
  QueryProps<ProcessInstanceListData, ProcessInstanceListVariables>
>;

export class ProcessInstanceListQuery extends Query<
  ProcessInstanceListData,
  ProcessInstanceListVariables
> {
  static displayName = 'ProcessInstanceListQuery';
  static defaultProps: ProcessInstanceListProps = {
    query: PROCESS_INSTANCE_LIST_QUERY,
    variables: {
      input: {
        first: 50
      }
    }
  };
}

/* =========================================================
    Process List
   ======================================================== */
