import * as React from 'react';

import { Link } from 'react-router-dom';
import { Button, List, Message, Progress, ProgressProps } from 'semantic-ui-react';
import styled, { StyledComponentClass } from 'styled-components';

import { FormModel } from 'client/modules/form/models/form_model';
import { ValidationResult } from 'client/modules/form/models/form_store';
import { QueryTypes } from 'data/client';

type Props = {
  context: App.Context;
  processInstance: QueryTypes.BpmnProcessInstance;
};

const FormProgress: StyledComponentClass<ProgressProps, {}> = styled(Progress)`
  float: right;
  width: 150px;
  margin-bottom: 0px !important;
  margin-top: -4px !important;
`;

const Content = styled(List.Content)`
  width: 100%;
`;

const Centered = styled.div`
  text-align: right;
`;

const CompletedLabel = styled.div`
  float: right;
  text-align: center;
  width: 150px;
`;

function taskToLinks(
  processInstance: QueryTypes.BpmnProcessInstance,
  task: QueryTypes.BpmnProcessInstanceTask,
  validation: ValidationResult,
  ctx: App.Context
) {
  return task.task.resources.map(r => {
    if (r.type === QueryTypes.ResourceType.Form) {
      // validate form

      return (
        <List.Item key={r.id}>
          <List.Icon name={validation.invalid === 0 ? 'check' : 'hand point right'} />
          <Content>
            <Link
              to={`/process/${processInstance.process.name.url()}/view/${r.type.toLowerCase()}/${r.name.url()}/${
                processInstance.id
              }/${r.form.id}`}
            >{ctx.i18n`Complete "${r.name}"`}</Link>
            <If condition={validation.invalid}>
              <FormProgress
                value={validation.valid}
                total={validation.total}
                progress="ratio"
                indicating
                warning
              />
            </If>
          </Content>
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

  const model = FormModel.buildMstModel(
    processInstance.process.dataDescriptors,
    processInstance.data
  );
  const validation = model.validateWithReport();

  return (
    <>
      <Message positive attached="top">
        <Message.Header>
          <I18>Your actions are required!</I18>
        </Message.Header>

        <List>
          {userActions.map(tasks => (
            <React.Fragment key={tasks.id}>
              {taskToLinks(processInstance, tasks, validation, context)}
            </React.Fragment>
          ))}
          <If condition={validation.invalid}>
            <List.Item>
              <CompletedLabel>
                <I18>Items Completed</I18>
              </CompletedLabel>
            </List.Item>
          </If>
        </List>

        <If condition={!validation.invalid}>
          <Centered>
            <Button
              primary
              icon="paper plane"
              labelPosition="left"
              content="Submit"
              size="medium"
            />
          </Centered>
        </If>
      </Message>
    </>
  );
};

ProcessCurrentAction.displayName = 'ProcessCurrentAction';
