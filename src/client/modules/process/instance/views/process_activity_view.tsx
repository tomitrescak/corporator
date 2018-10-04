import * as React from 'react';

import { QueryTypes } from 'data/client';
import { BpmnProcessInstance_Tasks } from 'data/generated/types';
import { Divider, Feed, Header, SemanticICONS } from 'semantic-ui-react';

export type Props = {
  context: App.Context;
  processInstance: QueryTypes.BpmnProcessInstance;
};

function taskResultToIcon(t: QueryTypes.BpmnProcessTask): SemanticICONS {
  if (t.task.type === QueryTypes.BpmnTaskType.Form) {
    return 'wordpress forms';
  }
  if (
    t.status === QueryTypes.BpmnTaskInstanceStatus.Approved ||
    t.status === QueryTypes.BpmnTaskInstanceStatus.Finished
  ) {
    return 'check';
  }
  if (
    t.status === QueryTypes.BpmnTaskInstanceStatus.Rejected ||
    t.status === QueryTypes.BpmnTaskInstanceStatus.Aborted
  ) {
    return 'ban';
  }
  if (t.status === QueryTypes.BpmnTaskInstanceStatus.Paused) {
    return 'pause';
  }
  throw new Error('Not supported state: ' + t.status);
}

function taskToName(t: QueryTypes.BpmnProcessTask, ctx: App.Context): string {
  if (t.status === QueryTypes.BpmnTaskInstanceStatus.Aborted) {
    return `aborted the task "${t.task.name}"`;
  }
  if (t.status === QueryTypes.BpmnTaskInstanceStatus.Paused) {
    return `paused the task "${t.task.name}"`;
  }
  if (t.task.type === QueryTypes.BpmnTaskType.Form) {
    return ctx.i18n`submitted form(s) for task "${t.task.name}"`;
  }
  if (t.status === QueryTypes.BpmnTaskInstanceStatus.Rejected) {
    return ctx.i18n`rejected report in task "${t.task.name}"`;
  }
  if (
    t.status === QueryTypes.BpmnTaskInstanceStatus.Approved ||
    t.status === QueryTypes.BpmnTaskInstanceStatus.Finished
  ) {
    return ctx.i18n`approved report in task "${t.task.name}"`;
  }
  throw new Error('Not supported state: ' + t.status);
}

export const ProcessActivityView: React.SFC<Props> = ({ context, processInstance }) => (
  <>
    <Header as="h5" content={context.i18n`Activity`} icon="tasks" dividing />

    <Choose>
      <When condition={processInstance.tasks.length === 0}>
        <I18>This process has no previous activity.</I18>
      </When>
      <Otherwise>
        <>
          <Feed>
            {processInstance.tasks.filter(t => t.dateFinished).map(t => (
              <Feed.Event key={t.id}>
                <Feed.Label icon={taskResultToIcon(t)} />
                <Feed.Content>
                  <Feed.Date>{context.Ui.relativeDate(t.dateFinished)}</Feed.Date>
                  <Feed.Summary>
                    {t.performer.name} {taskToName(t, context)}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            ))}
          </Feed>
          <Feed>
            {processInstance.tasks.filter(t => !t.dateFinished).map(t => (
              <Feed.Event key={t.id}>
                <Feed.Label icon="pencil" />
                <Feed.Content>
                  <Feed.Date>{context.Ui.relativeDate(t.dateStarted)}</Feed.Date>
                  <Feed.Summary>
                    {context.i18n`Task "${
                      t.task.name
                    }" is waiting for execution by role "${t.performerRoles.join(', ')}"`}{' '}
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            ))}
          </Feed>
        </>
      </Otherwise>
    </Choose>
  </>
);
