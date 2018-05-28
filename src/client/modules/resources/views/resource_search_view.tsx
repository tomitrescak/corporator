import * as React from 'react';
import { Header, List, ListProps, Label, Button, Segment } from 'semantic-ui-react';
import styled, { StyledComponentClass } from 'styled-components';

const VersionList: StyledComponentClass<ListProps, {}> = styled(List)`
  &&&&& .description {
    font-size: smaller;
  }
`;

export const ResourceSearchView = () => (
  <>
    <Header icon="find" content="Search" subheader="Find process resources" />

    <VersionList divided relaxed>
      <List.Item>
        <List.Icon name="file text outline" verticalAlign="middle" />
        <List.Content>
          <List.Header as="a">Travel Request Form</List.Header>
          <List.Description as="a">
            Submitted by Tomas Trescak &middot; International Travel Request &middot; 10 mins ago
          </List.Description>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Icon name="file text outline" verticalAlign="middle" />
        <List.Content>
          <List.Header as="a">Equipment Request Form</List.Header>
          <List.Description as="a">
            Submitted by Tomas Trescak &middot; Equipment Purchase Request &middot; May 22 2017
          </List.Description>
        </List.Content>
      </List.Item>
    </VersionList>
  </>
);
