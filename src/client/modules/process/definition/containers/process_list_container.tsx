import * as React from 'react';

import { inject } from 'mobx-react';

import { renderResult } from 'client/modules/common';
import { ProcessListView } from '../views/process_list_view';
import { ProcessListQuery } from './process_queries';

type Props = {
  path?: string;
  context?: App.Context;
};

export const ProcessListContainer: React.SFC<Props> = inject('context')(({ context }) => (
  <ProcessListQuery>
    {result => {
      // console.log(result.data.processes)
      return renderResult(result, () => (
        <ProcessListView processes={result.data.processes} context={context} />
      ));
    }}
  </ProcessListQuery>
));

ProcessListContainer.displayName = 'ProcessListContainer';
