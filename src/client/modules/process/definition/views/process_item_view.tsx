import * as React from 'react';

import { Link } from 'react-router-dom';
import { Button, List } from 'semantic-ui-react';

import { QueryTypes } from 'data/client';
import { ProcessIcon } from '../../common/process_icon';

type Props = {
  process: QueryTypes.BpmnProcessItem;
};

export const ProcessItemView: React.SFC<Props> = ({ process }) => (
  <List.Item>
    <List.Content floated="right">
      <Button primary icon="rocket" content="Launch" />
    </List.Content>
    <ProcessIcon type={process.type} />
    <List.Content verticalAlign="top">
      <List.Header
        as={Link}
        to={`/process/${process.name.url()}/preview/information/${process.id}`}
      >
        {process.name}
      </List.Header>
      <List.Description>{process.description}</List.Description>
    </List.Content>
  </List.Item>
);

ProcessItemView.displayName = 'ProcessListItemView';
