import * as React from 'react';

import * as DESCRIPTOR_FRAGMENT from '../../../form/queries/descriptor_fragment.graphql';
import * as PROCESS_FRAGMENT from '../../definition/queries/bpmn_process.fragment.graphql';
import * as PROCESS_INSTANCE_QUERY_NO_FRAGMENT from '../queries/bpmn_process_instance.query.graphql';

import { inject } from 'mobx-react';
import { Query } from 'react-apollo';

import { gql, QueryTypes } from 'data/client';

import { renderResult } from 'client/modules/common';
import { ProcessViewType } from '../../common/process_styles';
import { ProcessInstanceView } from '../views/process_instance_view';

/* =========================================================
    QUERY
   ======================================================== */

type Data = QueryTypes.BpmnProcessInstanceQuery;
type Variables = QueryTypes.BpmnProcessInstanceQueryVariables;

// we have to do this manually till imports will be resolved in fusebox graphql plugin
const PROCESS_INSTANCE_QUERY = gql`
  ${PROCESS_INSTANCE_QUERY_NO_FRAGMENT}
  ${PROCESS_FRAGMENT}
  ${DESCRIPTOR_FRAGMENT}
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
  context?: App.Context;
  match: {
    params: {
      contentType?: ProcessViewType;
      sourceId?: string;
      resourceId?: string;
    };
  };
};

export const ProcessInstanceContainer: React.SFC<Props> = inject('context')(
  ({ match, context }: Props) => (
    <ProcessInstanceQuery variables={{ id: match.params.sourceId }}>
      {result => {
        // console.log(result.data.processes)
        return renderResult(result, () => (
          <ProcessInstanceView
            process={result.data.bpmnProcessInstanceQuery.process}
            context={context}
            view={match.params.contentType}
            processInstance={result.data.bpmnProcessInstanceQuery}
            resourceId={match.params.resourceId}
          />
        ));
      }}
    </ProcessInstanceQuery>
  )
);

ProcessInstanceContainer.displayName = 'ProcessInstanceContainer';
