import * as React from 'react';

import * as PROCESS_FRAGMENT from '../queries/bpmn_process.fragment.graphql';
import * as PROCESS_INSTANCE_QUERY_NO_FRAGMENT from '../queries/bpmn_process_instance.query.graphql';

import { inject } from 'mobx-react';
import { Query } from 'react-apollo';

import { gql, QueryTypes } from 'data/client';

import { ProcessQueryVariables } from 'data/generated/types';
import { renderResult } from '../../common';
import { ProcessView } from '../views/process_view';

/* =========================================================
    QUERY
   ======================================================== */

type Data = QueryTypes.BpmnProcessInstanceQuery;
type Variables = QueryTypes.BpmnProcessInstanceQueryVariables;

// we have to do this manually till imports will be resolved in fusebox graphql plugin
const PROCESS_INSTANCE_QUERY = gql`
  ${PROCESS_INSTANCE_QUERY_NO_FRAGMENT}
  ${PROCESS_FRAGMENT}
`;

export { PROCESS_INSTANCE_QUERY };

class ProcessInstanceQuery extends Query<Data, Variables> {
  static displayName = 'ProcessInstanceQuery';
  static defaultProps = {
    query: PROCESS_INSTANCE_QUERY
  };
}

/* =========================================================
    CONTAINER
   ======================================================== */

type Props = {
  path?: string;
  context?: App.Context;
  contentType?: ProcessQueryVariables;
  sourceId?: string;
  resourceId?: string;
};

export const ProcessInstanceContainer: React.SFC<Props> = inject('context')(
  ({ context, contentType, sourceId, resourceId }) => (
    <ProcessInstanceQuery variables={{ id: sourceId }}>
      {result => {
        // console.log(result.data.processes)
        return renderResult(result, () => (
          <ProcessView
            process={result.data.bpmnProcessInstanceQuery.process}
            context={context}
            view={contentType}
            processInstance={result.data.bpmnProcessInstanceQuery}
            resourceId={resourceId}
          />
        ));
      }}
    </ProcessInstanceQuery>
  )
);

ProcessInstanceContainer.displayName = 'ProcessInstanceContainer';
