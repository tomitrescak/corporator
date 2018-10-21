import * as React from 'react';

import * as FORM_QUERY_NO_FRAGMENT from 'client/modules/resources/queries/form_query.graphql';
import * as RESOURCE_FRAGMENT from 'client/modules/resources/queries/resource_fragment.graphql';

import { observer } from 'mobx-react';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import { renderResult } from 'client/modules/common';
import { FormModel } from 'client/modules/form/models/form_model';
import { undoManager } from 'client/modules/form/models/undo_manager';
import { FormView } from 'client/modules/form/views/form_view';
import { gql, QueryTypes } from 'data/client';
import { Breadcrumb, Button, Grid, Header, Icon, Segment } from 'semantic-ui-react';
import { EditableViewType, ProcessViewType } from '../../common/process_styles';
import { TabBreadcrumbs } from './tab_breadcrumbs';

export const FORM_QUERY = gql`
  ${FORM_QUERY_NO_FRAGMENT}
  ${RESOURCE_FRAGMENT}
`;

const FieldSet = styled.fieldset`
  border: 0px;
  margin: -1px 0px;
  padding: 12px;

  .report .formText {
    border: 1px solid #dedede;
    width: 100%;
    display: block;
    padding: 6px;
    border-radius: 6px;
    background-color: #f0f0f0;
  }

  :disabled {
    /* background-color: #f9f9f9; */
  }
`;

const InfoSegment = styled(Segment)`
  border-left: 1px dashed #d0d0d0;
  margin: 12px !important;
  position: fixed !important;
  bottom: 0px;
  top: 105px;
  right: 0px;
  left: 50%;
  overflow: auto;
  background-color: #f3f3f3 !important;

  @media (max-width: 950px) {
    top: 145px;
  }
`;

const CloseButton = styled(Button)`
  margin: 0px !important;
  padding: 3px !important;
`;

const InfoContent = styled.div`
  margin-bottom: 1rem;
`;

const WideContent = styled(Header.Content)`
  width: 100%;
`;

// const ButtonRow = styled(Segment)`
//   padding: 0px 12px;
//   margin: 12px !important;
// `;

class FormQuery extends Query<QueryTypes.FormQuery, QueryTypes.FormQueryVariables> {
  static defaultProps = { query: FORM_QUERY };
}

type Props = {
  process: QueryTypes.BpmnProcessDefinition;
  processInstance?: QueryTypes.BpmnProcessInstance;
  taskInstanceId: string;
  contentType: ProcessViewType;
  context: App.Context;
  viewType: EditableViewType;
  ownerId: string;
  id: string;
};

export class TabFormView extends React.Component<Props> {
  form: FormModel;

  save = () => {
    if (this.form) {
      this.form.validateWithReport();
    }
  };

  render() {
    const props = this.props;
    const previewOnly = props.viewType === 'preview';
    const data = props.processInstance
      ? props.processInstance.tasks.find(t => t.id === props.taskInstanceId).data
      : {};

    return (
      <FormQuery variables={{ formId: props.id, processId: props.process.id }}>
        {result =>
          renderResult(result, () => {
            let formModel = JSON.parse(result.data.processResourceQuery.content);
            this.form = new FormModel(
              formModel,
              result.data.bpmnProcessQuery.schema,
              this.props.processInstance.data
            );

            return (
              <>
                <FormViewHeader {...props} handlers={{ save: this.save }} form={this.form} />
                <FormViewContent
                  form={this.form}
                  context={props.context}
                  data={data}
                  previewOnly={previewOnly}
                />
              </>
            );
          })
        }
      </FormQuery>
    );
  }
}

type HeaderProps = Props & {
  handlers: {
    save: () => void;
  };
  form: Form;
};

export class FormViewHeader extends React.Component<HeaderProps> {
  timeout: any;
  speed = 100;
  timeElapsed: number;
  action: Function;

  erase = () => {
    this.timeElapsed += this.speed;

    if (this.timeElapsed > 5000) {
      this.speed = 20;
    } else if (this.timeElapsed > 4000) {
      this.speed = 40;
    } else if (this.timeElapsed > 3000) {
      this.speed = 60;
    } else if (this.timeElapsed > 2000) {
      this.speed = 80;
    } else {
      this.speed = 100;
    }

    this.action();
    this.timeout = setTimeout(this.erase, this.speed);
  };

  undoDown = () => {
    this.action = undoManager.undo;
    this.timeElapsed = 0;
    this.timeout = setTimeout(this.erase, 600);
  };

  redoDown = () => {
    this.action = undoManager.redo;
    this.timeElapsed = 0;
    this.timeout = setTimeout(this.erase, 600);
  };

  mouseUp = () => {
    clearTimeout(this.timeout);
  };

  componentDidMount() {
    window.addEventListener('mouseup', this.mouseUp);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.mouseUp);
  }

  render() {
    const props = this.props;

    return (
      <>
        <TabBreadcrumbs {...props} title={this.props.form.name} ownerId={props.ownerId}>
          <Button
            icon="double angle left"
            color="orange"
            onClick={props.handlers.save}
            title={this.props.context.i18n`Save and go back to process overview`}
          />
          <Button
            color="green"
            icon="save"
            onClick={props.handlers.save}
            title={this.props.context.i18n`Save`}
          />
          <If condition={props.form.description}>
            <Button
              onClick={props.context.store.toggleInstructions}
              primary
              icon="info"
              title={this.props.context.i18n`Show Information`}
            />
          </If>
          <Breadcrumb.Divider icon="ellipsis vertical" />
          <Button
            icon="reply"
            onMouseDown={this.undoDown}
            onClick={undoManager.undo}
            title={this.props.context.i18n`Undo`}
          />
          <Button
            icon="share"
            onMouseDown={this.redoDown}
            onClick={() => undoManager.redo()}
            title={this.props.context.i18n`Redo`}
          />
          <Breadcrumb.Divider icon="ellipsis vertical" />
        </TabBreadcrumbs>
      </>
    );
  }
}

type ContentProps = {
  context: App.Context;
  form: FormModel;
  previewOnly: boolean;
};

@observer
export class FormViewContent extends React.Component<ContentProps> {
  render() {
    const props = this.props;

    return (
      <Grid>
        <Grid.Column width={props.context.store.instructions ? 8 : 16}>
          <FieldSet disabled={props.previewOnly} aria-disabled={props.previewOnly}>
            <FormView formControl={props.form} owner={props.form.dataSet} />
          </FieldSet>
        </Grid.Column>
        <If condition={props.context.store.instructions}>
          <Grid.Column width={8}>
            <InfoSegment secondary>
              <Header icon="info circle">
                <Icon name="info circle" />
                <WideContent>
                  Instructions{' '}
                  <CloseButton
                    floated="right"
                    icon="close"
                    size="massive"
                    onClick={() => props.context.store.toggleInstructions()}
                  />
                </WideContent>
              </Header>
              <InfoContent dangerouslySetInnerHTML={{ __html: props.form.description }} />
            </InfoSegment>
          </Grid.Column>
        </If>
      </Grid>
    );
  }
}

FormView.displayName = 'FormView';
