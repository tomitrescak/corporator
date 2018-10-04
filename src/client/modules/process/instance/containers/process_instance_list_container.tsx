import * as React from 'react';

import { inject } from 'mobx-react';

import { renderResult } from 'client/modules/common';
import { purge, QueryTypes } from 'data/client';
import { ProcessInstanceList } from '../views/process_instance_list_view';
import { ProcessInstanceListQuery } from './process_instance_queries';

type Props = {
  path?: string;
  context?: App.Context;
  header: string;
  icon: string;
  description: string;
  status?: QueryTypes.BpmnProcessInstanceStatus;
};

export const ProcessInstanceListContainer: React.SFC<Props> = inject('context')(
  ({ context, header, icon, description, status }) => (
    <ProcessInstanceListQuery
      variables={purge<QueryTypes.BpmnProcessInstancesQueryVariables>({ input: { status } })}
    >
      {result => {
        // console.log(result.data.bpmnProcessInstances)
        return renderResult(result, () => (
          <ProcessInstanceList
            processes={result.data && result.data.bpmnProcessInstancesQuery}
            header={header}
            icon={icon}
            description={description}
            context={context}
          />
        ));
      }}
    </ProcessInstanceListQuery>
  )
);

ProcessInstanceListContainer.displayName = 'ProcessListContainer';
