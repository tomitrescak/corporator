import * as React from 'react';

import { Link } from 'react-router-dom';
import { Button, List, Message, Progress, ProgressProps } from 'semantic-ui-react';
import styled, { StyledComponentClass } from 'styled-components';

import { FormModel } from 'client/modules/form/models/form_model';
import { ValidationResult } from 'client/modules/form/models/form_store';
import { QueryTypes } from 'data/client';

type Props = {
  context: App.Context;
  process: QueryTypes.BpmnProcessDefinition;
  processInstance: QueryTypes.BpmnProcessInstance;
};

type ValidationMap = { [id: string]: ValidationResult };

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
  process: QueryTypes.BpmnProcessDefinition,
  processInstance: QueryTypes.BpmnProcessInstance,
  taskInstance: QueryTypes.BpmnProcessInstanceTask,
  validationMap: ValidationMap,
  ctx: App.Context
) {
  return taskInstance.task.resources.map(resourceId => {
    let pr = process.resources.find(p => p.id === resourceId);
    let validation = validationMap[resourceId];

    if (pr.resource.type === QueryTypes.ResourceType.Form) {
      // validate form

      return (
        <List.Item key={pr.id}>
          <List.Icon name={validation.invalid === 0 ? 'check' : 'hand point right'} />
          <Content>
            <Link
              to={`/process/${process.name.url()}/view/${pr.resource.type.toLowerCase()}/${pr.resource.title.url()}/${
                processInstance.id
              }/${pr.id}`}
            >{ctx.i18n`Complete "${pr.resource.title}"`}</Link>
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

export const ProcessCurrentAction: React.SFC<Props> = ({ context, process, processInstance }) => {
  const currentTasks = processInstance.tasks.filter(t => !t.dateFinished);
  const userTasks = currentTasks.filter(a =>
    context.store.user.roles.some(r => a.task.performerRoles.some(b => b === r))
  );

  if (!currentTasks.length) {
    return null;
  }

  // validate all user actions

  let validationMap: ValidationMap = {};
  let valid = true;

  for (let taskInstance of userTasks) {
    for (let resource of taskInstance.task.resources) {
      let pr = process.resources.find(p => p.id === resource);

      const model = new FormModel(
        JSON.parse(pr.resource.content),
        process.schema,
        taskInstance.data
      );
      const validation = model.validateWithReport();

      validationMap[resource] = validation;
      valid = valid && validation.invalid === 0;
    }
  }

  return (
    <>
      <Message positive attached="top">
        <Message.Header>
          <I18>Your actions are required!</I18>
        </Message.Header>

        <List>
          {userTasks.map(tasks => (
            <React.Fragment key={tasks.id}>
              {taskToLinks(process, processInstance, tasks, validationMap, context)}
            </React.Fragment>
          ))}
          <If condition={!valid}>
            <List.Item>
              <CompletedLabel>
                <I18>Items Completed</I18>
              </CompletedLabel>
            </List.Item>
          </If>
        </List>

        <If condition={valid}>
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
