import * as datetimeDifference from 'datetime-difference';
import * as React from 'react';

import { QueryTypes } from 'data/client';
import { Feed, Header, SemanticICONS } from 'semantic-ui-react';

export type Props = {
  context: App.Context;
  processInstance: QueryTypes.BpmnProcessInstance;
};

function logResultToIcon(t: QueryTypes.LogMessage): SemanticICONS {
  if (t.status === QueryTypes.BpmnTaskInstanceStatus.Started) {
    return 'stopwatch';
  }
  if (t.status === QueryTypes.BpmnTaskInstanceStatus.Approved) {
    return 'check';
  }
  if (t.status === QueryTypes.BpmnTaskInstanceStatus.Finished) {
    return 'wordpress forms';
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

function taskToName(t: QueryTypes.LogMessage, ctx: App.Context): string {
  if (t.status === QueryTypes.BpmnTaskInstanceStatus.Started) {
    return `started the task "${t.elementName}"`;
  }
  if (t.status === QueryTypes.BpmnTaskInstanceStatus.Aborted) {
    return `aborted the task "${t.elementName}"`;
  }
  if (t.status === QueryTypes.BpmnTaskInstanceStatus.Paused) {
    return `paused the task "${t.elementName}"`;
  }
  if (t.status === QueryTypes.BpmnTaskInstanceStatus.Finished) {
    return ctx.i18n`finished task "${t.elementName}"`;
  }
  if (t.status === QueryTypes.BpmnTaskInstanceStatus.Rejected) {
    return ctx.i18n`rejected task "${t.elementName}"`;
  }
  if (t.status === QueryTypes.BpmnTaskInstanceStatus.Approved) {
    return ctx.i18n`approved task "${t.elementName}"`;
  }
  throw new Error('Not supported state: ' + t.status);
}

function relativeDate(t1: QueryTypes.LogMessage, t2: QueryTypes.LogMessage) {
  const result = datetimeDifference(new Date(t1.date), new Date(t2.date));
  const differences = Object.keys(result).filter(k => !!result[k] && k.indexOf('sec') === -1);
  if (differences.length) {
    return differences
      .map(k => `${result[k]} ${result[k] === 1 ? k.slice(0, -1) : k} later`)
      .join(', ');
  }
  return 'only a moment later';
}

export const ProcessActivityView: React.SFC<Props> = ({ context, processInstance }) => {
  const filtered = processInstance.log.filter(l => l.status);
  return (
    <>
      <Header as="h5" content={context.i18n`Activity`} icon="tasks" dividing />

      <Choose>
        <When condition={processInstance.tasks.length === 0}>
          <I18>This process has no previous activity.</I18>
        </When>
        <Otherwise>
          <>
            <Feed>
              {filtered.map((t, i) => (
                <>
                  <Feed.Event key={t.id}>
                    <Feed.Label icon={logResultToIcon(t)} />
                    <Feed.Content>
                      <Feed.Date>
                        {context.Ui.relativeDate(t.date)}
                        <If condition={i > 0}>
                          <>
                            &nbsp;&middot;&nbsp;
                            {relativeDate(filtered[i], filtered[i - 1])}
                          </>
                        </If>
                      </Feed.Date>
                      <Feed.Summary>
                        <Choose>
                          <When condition={t.performer}>
                            <>
                              {t.performer.name} {taskToName(t, context)}
                            </>
                          </When>
                          <Otherwise>
                            <>{context.i18n`Task "${t.elementName}" started`}</>
                          </Otherwise>
                        </Choose>
                      </Feed.Summary>
                    </Feed.Content>
                  </Feed.Event>
                </>
              ))}
            </Feed>
          </>
        </Otherwise>
      </Choose>
    </>
  );
};
