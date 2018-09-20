import * as React from 'react';

import { QueryTypes } from 'data/client';

import { Link } from '@reach/router';
import { Button, List, SemanticICONS } from 'semantic-ui-react';
import styled from 'styled-components';

const ProcessIcon = styled(List.Icon)`
  &&&&& {
    vertical-align: top !important;
  }
`;

type Props = {
  process: QueryTypes.ProcessesQuery_Processes;
};

export function processTypeToIcon(type: QueryTypes.ProcessType): SemanticICONS {
  switch (type) {
    case QueryTypes.ProcessType.Travel:
      return 'briefcase';
    case QueryTypes.ProcessType.HumanResources:
      return 'user circle';
    case QueryTypes.ProcessType.Purchases:
      return 'money';
    case QueryTypes.ProcessType.Sales:
      return 'money bill alternate outline';
  }
  return 'tasks';
}

export const ProcessListItemView: React.SFC<Props> = ({ process }) => (
  <List.Item>
    <List.Content floated="right">
      <Button primary icon="rocket" content="Launch" />
    </List.Content>
    <ProcessIcon name={processTypeToIcon(process.type)} verticalAlign="middle" />
    <List.Content verticalAlign="top">
      <List.Header as={Link} to="nowhere">
        {process.name}
      </List.Header>
      <List.Description>{process.description}</List.Description>
    </List.Content>
  </List.Item>
);

ProcessListItemView.displayName = 'ProcessListItemView';
