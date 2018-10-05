import * as React from 'react';

import * as FORM_QUERY from 'client/modules/form/queries/form_query.graphql';

import { Query } from 'react-apollo';
import styled from 'styled-components';

import { renderResult } from 'client/modules/common';
import { FormModel } from 'client/modules/form/models/form_model';
import { FormView } from 'client/modules/form/views/form_view';
import { QueryTypes } from 'data/client';
import { Button, Grid, Header } from 'semantic-ui-react';
import { EditableViewType, ProcessViewType } from '../../common/process_styles';
import { TabBreadcrumbs } from './tab_breadcrumbs';

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

const InfoSegment = styled.div`
  border-left: 1px dashed #d0d0d0;
  margin-top: 12px;
  padding-left: 12px;
  min-height: 800px;
`;

const InfoContent = styled.div`
  margin-bottom: 1rem;
`;

const ButtonRow = styled.div`
  padding: 0px 12px;
`;

class FormQuery extends Query<QueryTypes.FormQuery, QueryTypes.FormQueryVariables> {
  static defaultProps = { query: FORM_QUERY };
}

type Props = {
  process: QueryTypes.BpmnProcessDefinition;
  contentType: ProcessViewType;
  context: App.Context;
  viewType: EditableViewType;
  ownerId: string;
  id: string;
};

type State = {
  showInstructions: boolean;
};

export class TabFormView extends React.Component<Props, State> {
  state = { showInstructions: false };

  toggleInstruction = () => {
    this.setState({ showInstructions: !this.state.showInstructions });
  };

  render() {
    const props = this.props;
    const previewOnly = props.viewType === 'preview';

    return (
      <FormQuery variables={{ formId: props.id, processId: props.process.id }}>
        {result =>
          renderResult(result, () => {
            let form = new FormModel(result.data.formQuery);
            let data = FormModel.buildMstModel(
              result.data.process.dataDescriptors,
              [],
              [],
              previewOnly
            );

            return (
              <>
                <TabBreadcrumbs
                  {...props}
                  title={result.data.formQuery.name}
                  ownerId={props.ownerId}
                  showInstructions={result.data.formQuery.description && this.toggleInstruction}
                />

                <Grid>
                  <Grid.Column width={this.state.showInstructions ? 8 : 16}>
                    <FieldSet disabled={previewOnly} aria-disabled={previewOnly}>
                      <FormView form={form} data={data} />
                    </FieldSet>
                  </Grid.Column>
                  <If condition={this.state.showInstructions}>
                    <Grid.Column width={8}>
                      <InfoSegment>
                        <Header icon="info circle" content="Instructions" />
                        <InfoContent dangerouslySetInnerHTML={{ __html: form.description }} />
                        <Button
                          onClick={() => this.setState({ showInstructions: false })}
                          content={this.props.context.i18n`Hide Instructions`}
                        />
                      </InfoSegment>
                    </Grid.Column>
                  </If>
                </Grid>
                <ButtonRow>
                  <Button primary content="Save" icon="save" labelPosition="left" />
                  <Button
                    color="green"
                    content="Save and Submit "
                    icon="disk"
                    labelPosition="left"
                  />
                </ButtonRow>
              </>
            );
          })
        }
      </FormQuery>
    );
  }
}

FormView.displayName = 'FormView';
