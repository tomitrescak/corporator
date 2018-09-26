import * as React from 'react';

import { Button, Divider, Header, Icon, Message } from 'semantic-ui-react';

import { QueryTypes } from 'data/client';
import { processTypeToIcon } from './process_icon';
import { ProcessInstanceStatus } from './process_instance_status';
import { TabContent } from './process_styles';

type Props = {
  process: QueryTypes.BpmnProcessDefinition;
  context: App.Context;
  processInstance: QueryTypes.BpmnProcessInstance;
};

export const TabProcessInstanceDescription: React.SFC<Props> = ({
  context,
  process,
  processInstance
}) => (
  <TabContent>
    <Header as="h2">
      <Icon name={processTypeToIcon(process.type)} />
      <Header.Content>
        {process.name}
        <Header.Subheader>
          <ProcessInstanceStatus context={context} status={processInstance.status} /> &middot;
          Manage your process &middot; {process.type}
        </Header.Subheader>
      </Header.Content>
    </Header>

    <p>{process.description}</p>

    <Choose>
      <When condition={!processInstance}>
        <Button primary>
          <Icon name="rocket" />
          <I18>Launch Process</I18>
        </Button>
      </When>
      <Otherwise>
        <>
          <Message header={`Status: ${processInstance.status}`} />
        </>
      </Otherwise>
    </Choose>
  </TabContent>
);
