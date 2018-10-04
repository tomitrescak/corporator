import * as React from 'react';

import { QueryTypes } from 'data/client';
import { Label } from 'semantic-ui-react';

type Props = {
  status: QueryTypes.BpmnProcessInstanceStatus;
  context: App.Context;
};

export const ProcessInstanceStatus: React.SFC<Props> = ({ status, context }) => {
  switch (status) {
    case QueryTypes.BpmnProcessInstanceStatus.Aborted:
      return <Label color="red" size="tiny">{context.i18n`Aborted`}</Label>;
    case QueryTypes.BpmnProcessInstanceStatus.Finished:
      return <Label color="grey" size="tiny">{context.i18n`Finished`}</Label>;
    case QueryTypes.BpmnProcessInstanceStatus.Paused:
      return <Label color="yellow" size="tiny">{context.i18n`Paused`}</Label>;
    case QueryTypes.BpmnProcessInstanceStatus.Running:
      return <Label color="green" size="tiny">{context.i18n`Running`}</Label>;
  }
  throw new Error('Not implemented: ' + status);
};
