import * as React from 'react';

import { Header, List, ListProps, Message } from 'semantic-ui-react';
import styled, { StyledComponentClass } from 'styled-components';

import { QueryTypes } from 'data/client';
import { ProcessItemView } from './process_item_view';

const ProcessList: StyledComponentClass<ListProps, {}> = styled(List)`
  max-width: 800px !important;

  &&&&& .description {
    font-size: smaller;
  }
`;

const ResultInfo = styled.div`
  color: #999;
`;

type Props = {
  processes: QueryTypes.ProcessesQuery_Processes[];
  context: App.Context;
};

export const ProcessListView: React.SFC<Props> = ({ processes, context }) => (
  <React.Fragment>
    <ResultInfo>
      {processes.length === 1
        ? context.i18n`1 process available`
        : context.i18n`${processes.length.toString()} processes available`}
    </ResultInfo>
    <Header
      icon="tasks"
      content="Company Processes"
      subheader="Find and execute a new company process"
    />
    <Choose>
      <When condition={processes && processes.length > 0}>
        <ProcessList divided relaxed>
          {processes.map(process => (
            <ProcessItemView key={process.id} process={process} />
          ))}
        </ProcessList>
      </When>
      <Otherwise>
        <Message>No results</Message>
      </Otherwise>
    </Choose>
  </React.Fragment>
);

ProcessListView.displayName = 'ProcessListView';
