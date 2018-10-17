import * as React from 'react';

import * as PROCESS_FRAGMENT from '../queries/bpmn_process.fragment.graphql';
import * as PROCESS_QUERY_NO_FRAGMENTS from '../queries/bpmn_process.query.graphql';

import { inject } from 'mobx-react';
import { Query, QueryProps } from 'react-apollo';

import { gql, QueryTypes } from 'data/client';

import { renderResult } from 'client/modules/common';
import { ProcessViewType } from '../../common/process_styles';
import { ProcessView } from '../views/process_view';

/* =========================================================
    QUERY
   ======================================================== */

type Data = QueryTypes.ProcessQuery;
type Variables = QueryTypes.ProcessQueryVariables;
type StaticProps = Partial<QueryProps<Data, Variables>>;

// we have to do this manually till imports will be resolved in fusebox graphql plugin
const PROCESS_QUERY = gql`
  ${PROCESS_QUERY_NO_FRAGMENTS}
  ${PROCESS_FRAGMENT}
`;

export { PROCESS_QUERY };

class ProcessQuery extends Query<Data, Variables> {
  static displayName = 'ProcessQuery';
  static defaultProps: StaticProps = {
    query: PROCESS_QUERY
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

export const ProcessContainer: React.SFC<Props> = inject('context')(({ context, match }: Props) => (
  <ProcessQuery variables={{ id: match.params.sourceId }}>
    {result => {
      // console.log(result.data.processes)
      return renderResult(result, () => (
        <ProcessView
          process={result.data.process}
          context={context}
          view={match.params.contentType}
          resourceId={match.params.resourceId}
        />
      ));
    }}
  </ProcessQuery>
));

ProcessContainer.displayName = 'ProcessViewContainer';
