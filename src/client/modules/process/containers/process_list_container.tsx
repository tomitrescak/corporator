import * as React from 'react';

import { renderResult } from 'client/modules/common';
import { ProcessListView } from '../views/process_list_view';
import { ProcessListQuery } from './process_queries';

export const ProcessListContainer: React.SFC<{}> = () => (
  <ProcessListQuery>
    {result => {
      // console.log(result.data.processes)
      return renderResult(result, () => <ProcessListView processes={result.data.processes} />);
    }}
  </ProcessListQuery>
);

ProcessListContainer.displayName = 'ProcessListContainer';
