import * as React from 'react';

import { Button } from 'semantic-ui-react';

export const SortView = () => (
  <>
    <Button icon="grid layout" content="Toggle Filters" size="mini" />
    <Button.Group size="mini" color="green" floated="right">
      <Button content="Name" icon="angle up" />
      <Button content="Actions" />
      <Button content="Time to Complete" />
    </Button.Group>
  </>
);
