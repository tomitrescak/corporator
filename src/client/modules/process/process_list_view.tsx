import * as React from 'react';
import { Query, QueryResult } from 'react-apollo';

import { ProcessListView } from '../views/process_list_view';
import { ProcessListQuery } from './process_queries';

function renderResult<T extends QueryResult<any, any>>(
  result: T,
  component: JSX.Element
): JSX.Element {
  if (result.loading) {
    return <p>Loading...</p>;
  }
  if (result.error) {
    return <p>Error :(</p>;
  }
  return component;
}

export const ProcessListContainer = () => (
  <ProcessListQuery>
    {result => renderResult(result, <ProcessListView searchItems={result.data.processes} />)}
  </ProcessListQuery>
);
