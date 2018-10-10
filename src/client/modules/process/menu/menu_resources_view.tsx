import * as React from 'react';

import { Header, Segment } from 'semantic-ui-react';

import { QueryTypes } from 'data/client';
import { ProcessResources } from '../common/process_resources_view';

type Props = {
  process?: QueryTypes.BpmnProcessDefinition;
  context: App.Context;
  processInstance?: QueryTypes.BpmnProcessInstance;
  attached?: any;
};

export const MenuResourceView: React.SFC<Props> = ({
  context,
  process,
  processInstance,
  attached = top
}) => (
  <>
    <Header
      inverted
      attached={attached}
      as="h5"
      icon="folder"
      size="tiny"
      content="Resources"
      dividing
    />
    <Segment attached>
      <ProcessResources context={context} process={process} processInstance={processInstance} />
    </Segment>
  </>
);
