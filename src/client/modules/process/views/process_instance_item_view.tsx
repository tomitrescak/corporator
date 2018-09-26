import * as React from 'react';

import { Link } from '@reach/router';
import { List } from 'semantic-ui-react';

import { QueryTypes } from 'data/client';
import styled from 'styled-components';
import { ProcessIcon } from './process_icon';
import { ProcessInstanceStatus } from './process_instance_status';

type Props = {
  processInstance: QueryTypes.BpmnProcessInstanceItem;
  context: App.Context;
};

const Meta = styled.div`
  color: #999;
  margin: 6px 0px;
`;

const Info = styled.div`
  margin: 3px 0px;
`;

export const ProcessInstanceItem: React.SFC<Props> = ({ processInstance, context }) => {
  const waitingTasks = processInstance.tasks.filter(t => !t.dateFinished);
  const waitingText = waitingTasks
    .map(
      t =>
        context.i18n`${t.performerRoles.join(' or ')} to ${
          t.task.name
        } since ${context.Ui.relativeDate(t.dateStarted)}`
    )
    .join(' and ');
  const completedTasks = processInstance.tasks.filter(t => !!t.dateFinished);
  const lastTask =
    completedTasks.length > 0
      ? completedTasks.sort((a, b) => a.dateFinished - b.dateFinished)[0]
      : null;

  return (
    <List.Item>
      <ProcessIcon type={processInstance.process.type} />
      <List.Content verticalAlign="top">
        <List.Header
          as={Link}
          to={`/process/${processInstance.process.name.url()}/view/information/${
            processInstance.id
          }`}
        >
          {processInstance.process.name}
        </List.Header>
        <List.Description>
          <Meta>
            <ProcessInstanceStatus status={processInstance.status} context={context} />{' '}
            &nbsp;&middot;&nbsp;
            {context.i18n`Started ${context.Ui.relativeDate(processInstance.dateStarted)} by ${
              processInstance.owner.name
            }`}
            <If condition={processInstance.dateFinished}>
              <>
                &nbsp;&middot;&nbsp;
                {context.i18n`Finished ${context.Ui.relativeDate(processInstance.dateFinished)}`}
              </>
            </If>
          </Meta>

          <If condition={!!lastTask}>
            <Info>
              <b>{context.i18n`Last activity: `}</b>
              {context.i18n`${lastTask.performer.name} performed "${
                lastTask.task.name
              }" ${context.Ui.relativeDate(lastTask.dateFinished)}`}
            </Info>
          </If>

          <If
            condition={
              processInstance.status === QueryTypes.BpmnProcessInstanceStatus.Running &&
              !!waitingText
            }
          >
            <Info>
              <b>{context.i18n`Waiting for: `}</b> {waitingText}
            </Info>
          </If>
        </List.Description>
      </List.Content>
    </List.Item>
  );
};
