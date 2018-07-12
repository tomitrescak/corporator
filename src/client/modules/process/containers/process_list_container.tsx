import * as React from 'react';
import { Query } from 'react-apollo';

import * as ProcessesQuery from '../../../../data/client/bpmn_process.schema.graphql';
import { ProcessListView } from '../views/process_list_view';

export const ProcessListContainer = () => (
  <Query
    query={ProcessesQuery}
  >
    {({ loading, error, data }) => {
      if (loading) { return <p>Loading...</p>; }
      if (error) { return <p>Error :(</p>; }

      return <ProcessListView searchItems={data.notifications} />;
    }}
  </Query>
);