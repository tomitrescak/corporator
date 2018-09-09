import * as React from 'react';

import { Header, List, ListProps, Message } from 'semantic-ui-react';
import styled, { StyledComponentClass } from 'styled-components';

import { ProcessListItemView } from './process_list_item_view';

const ProcessList: StyledComponentClass<ListProps, {}> = styled(List)`
  &&&&& .description {
    font-size: smaller;
  }
`;

type Props = {
  processes: any[];
};

let process: any;
let index: number;
export const ProcessListView: React.SFC<Props> = ({ processes }) => (
  <React.Fragment>
    <Header icon="find" content="Search" subheader="Find process resources" />
    <Choose>
      <When condition={processes && processes.length > 0}>
        <ProcessList divided relaxed>
          <For each="process" of={processes} index="index">
            <ProcessListItemView key={index} process={process} />
          </For>
        </ProcessList>
      </When>
      <Otherwise>
        <Message>There are no search results.</Message>
      </Otherwise>
    </Choose>
  </React.Fragment>
);

ProcessListView.displayName = 'ProcessListView';
