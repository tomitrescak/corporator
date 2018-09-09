import * as PROCESSES_QUERY from 'data/bpmn_process/client/processes_query.graphql';

import { Query, QueryProps } from 'react-apollo';

import { Yoga } from 'data/yoga';

export { PROCESSES_QUERY };

/* =========================================================
    Notifications
   ======================================================== */

type Data = { processes: Yoga.BpmnProcess[] };
type Variables = { input: Yoga.BpmnProcessesInput };
type Props = Partial<QueryProps<Data, Variables>>;

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
