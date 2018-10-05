import * as React from 'react';

import { Link } from '@reach/router';
import { Button, Divider, Label, List, Message } from 'semantic-ui-react';

import { QueryTypes } from 'data/client';

type Props = {
  context: App.Context;
  processInstance: QueryTypes.BpmnProcessInstance;
};

function taskToLinks(
  processName: string,
  processInstanceId: string,
  t: QueryTypes.BpmnProcessInstanceTask,
  ctx: App.Context
) {
  return t.task.resources.map(r => {
    if (r.type === QueryTypes.ResourceType.Form) {
      return (
        <List.Item key={r.id}>
          <List.Icon name="hand point right" />
          <List.Content>
            <Link
              to={`/process/${processName.url()}/view/${r.type.toLowerCase()}/${r.name.url()}/${processInstanceId}/${
                r.form.id
              }`}
            >{ctx.i18n`Complete "${r.name}"`}</Link>
          </List.Content>
        </List.Item>
      );
    }
    return null;
  });
}

export const ProcessCurrentAction: React.SFC<Props> = ({ context, processInstance }) => {
  const currentActions = processInstance.tasks.filter(t => !t.dateFinished);
  const userActions = currentActions.filter(a =>
    a.performerRoles.some(r => context.store.user.roles.includes(r))
  );

  if (!currentActions.length) {
    return null;
  }

  return (
    <>
      <Message positive attached="top">
        <Message.Header>
          <I18>Your actions are required!</I18>
        </Message.Header>

        <List>
          {userActions.map(a => (
            <>{taskToLinks(processInstance.process.name, processInstance.id, a, context)}</>
          ))}
        </List>

        <Button primary content="Submit" size="medium" />

        <div style={{ float: 'right' }}>
          <I18>Task Status: </I18>
          <Label content="Complete" />
        </div>
      </Message>
    </>
  );
};
