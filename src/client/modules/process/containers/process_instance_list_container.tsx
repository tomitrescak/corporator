import * as React from 'react';

import { inject } from 'mobx-react';

import { renderResult } from 'client/modules/common';
import { ProcessInstanceList } from '../views/process_instance_list_view';
import { ProcessInstanceListQuery } from './process_queries';

type Props = {
  path?: string;
  context?: App.Context;
  header: string;
  icon: string;
  description: string;
};

export const ProcessListContainer: React.SFC<Props> = inject('context')(
  ({ context, header, icon, description }) => (
    <ProcessInstanceListQuery>
      {result => {
        // console.log(result.data.bpmnProcessInstances)
        return renderResult(result, () => (
          <ProcessInstanceList
            processes={result.data.bpmnProcessInstances}
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

ProcessListContainer.displayName = 'ProcessListContainer';
