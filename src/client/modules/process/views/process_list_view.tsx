import * as React from 'react';

import { Header, List, ListProps, Message } from 'semantic-ui-react';
import styled, { StyledComponentClass } from 'styled-components';

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
  processes: any[];
  context: App.Context;
};

let process: any;
let index: number;
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
          <For each="process" of={processes} index="index">
            <ProcessItemView key={index} process={process} />
          </For>
        </ProcessList>
      </When>
      <Otherwise>
        <Message>No results</Message>
      </Otherwise>
    </Choose>
  </React.Fragment>
);

ProcessListView.displayName = 'ProcessListView';
