import * as React from 'react';

import { Link } from '@reach/router';
import { Button, List } from 'semantic-ui-react';

import { QueryTypes } from 'data/client';
import { ProcessIcon } from './process_icon';

type Props = {
  processInstance: QueryTypes.BpmnProcessInstancesBpmnProcessInstances;
};

export const ProcessInstanceListItem: React.SFC<Props> = ({ processInstance }) => (
  <List.Item>
    <List.Content floated="right">
      <Button primary icon="rocket" content="Launch" />
    </List.Content>
    <ProcessIcon type={processInstance.process.type} />
    <List.Content verticalAlign="top">
      <List.Header as={Link} to="nowhere">
        {processInstance.process.name}
      </List.Header>
      <List.Description>{processInstance.process.description}</List.Description>
    </List.Content>
  </List.Item>
);
