import * as React from 'react';

import { Divider, Header, List, Segment } from 'semantic-ui-react';

import { QueryTypes } from 'data/client';
import { ProcessResources } from '../common/process_resources_view';

type Props = {
  process?: QueryTypes.BpmnProcessDefinition;
  context: App.Context;
  processInstance?: QueryTypes.BpmnProcessInstance;
};

export const MenuActionsView: React.SFC<Props> = ({ context, process, processInstance }) => (
  <>
    <Header inverted attached="top" as="h5" icon="bolt" size="tiny" content="Actions" dividing />
    <Segment attached>
      <List>
        <List.Item>
          <List.Icon name="clone" />
          <List.Content>Clone</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="pause" />
          <List.Content>Pause</List.Content>
        </List.Item>
        {/* <List.Item>
          <List.Icon name="star" />
          <List.Content>Add to favourites</List.Content>
        </List.Item> */}

        <Divider />
        <List.Item>
          <List.Icon name="ban" />
          <List.Content>
            <a href="http://www.semantic-ui.com">Abort Process</a>
          </List.Content>
        </List.Item>
      </List>
    </Segment>
  </>
);
