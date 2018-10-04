import * as React from 'react';

import { Button, Header, Icon } from 'semantic-ui-react';

import { Link } from '@reach/router';
import { QueryTypes } from 'data/client';
import { processTypeToIcon } from '../../common/process_icon';
import { TabContent } from '../../common/process_styles';

type Props = {
  process: QueryTypes.BpmnProcessDefinition;
  context: App.Context;
};

export const TabProcessDescription: React.SFC<Props> = ({ process, context }) => (
  <TabContent>
    <Header as="h2">
      <Icon name={processTypeToIcon(process.type)} />
      <Header.Content>
        {process.name}
        <Button
          as={Link}
          to={`/process/${process.name.url()}/preview/diagram/${process.id}`}
          size="mini"
          floated="right"
          icon="sitemap"
          labelPosition="left"
          content={context.i18n`Show Diagram`}
        />
        <Header.Subheader>Manage your process &middot; {process.type}</Header.Subheader>
      </Header.Content>
    </Header>

    <p>{process.description}</p>

    <Button primary>
      <Icon name="rocket" />
      <I18>Launch Process</I18>
    </Button>
  </TabContent>
);
