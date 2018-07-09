import * as React from 'react';
import { Header, Label, List, ListProps } from 'semantic-ui-react';
import styled, { StyledComponentClass } from 'styled-components';

const VersionList: StyledComponentClass<ListProps, {}> = styled(List)`
  &&&&& .description {
    font-size: smaller;
  }
`;

export const ProcessVersions = () => (
  <>
    <Header
      icon="time"
      content="Domestic Travel Request"
      subheader="View all versions of the process, comment, approve or reject current proposals on process changes"
    />

    <VersionList divided relaxed>
      <List.Item>
        <List.Icon name="archive" verticalAlign="middle" />
        <List.Content>
          <List.Header as="a">
            <Label color="green">Proposal</Label> Version 3: Country specific adjustments
          </List.Header>
          <List.Description as="a">Proposed by Tomas Trescak &middot; 10 mins ago</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="archive" verticalAlign="middle" />
        <List.Content>
          <List.Header as="a">Version 2: SAC Meeting adjustments</List.Header>
          <List.Description as="a">Updated by Ana Law &middot; Jun 17, 2018</List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="archive" verticalAlign="middle" />
        <List.Content>
          <List.Header as="a">Version 1: Initial Version</List.Header>
          <List.Description as="a">Created by Tomas Trescak &middot; May 14, 2017</List.Description>
        </List.Content>
      </List.Item>
    </VersionList>
  </>
);
