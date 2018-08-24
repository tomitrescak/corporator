import * as React from 'react';

import { Header, List, ListProps, Message } from 'semantic-ui-react';
import styled, { StyledComponentClass } from 'styled-components';

import { ProcessListItemView } from './process_list_item_view';

const VersionList: StyledComponentClass<ListProps, {}> = styled(List)`
  &&&&& .description {
    font-size: smaller;
  }
`;

type Props = {
  searchItems: any[];
};

let searchItem: any;
let index: number;
export const ProcessListView: React.SFC<Props> = ({ searchItems }) => (
  <React.Fragment>
    <Header icon="find" content="Search" subheader="Find process resources" />
    <Choose>
      <When condition={searchItems && searchItems.length > 0}>
        <VersionList divided relaxed>
          <For each="searchItem" of={searchItems} index="index">
            <ProcessListItemView key={index} searchItem={searchItem} />
          </For>
        </VersionList>
      </When>
      <Otherwise>
        <Message>There are no search results.</Message>
      </Otherwise>
    </Choose>
  </React.Fragment>
);
