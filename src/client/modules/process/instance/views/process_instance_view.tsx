import * as React from 'react';

import { Grid } from 'semantic-ui-react';

import { QueryTypes } from 'data/client';
import { ProcessViewType, TightGrid } from '../../common/process_styles';
import { MenuResourceView } from '../../menu/menu_resources_view';
import { TabDiagramView } from '../../tabs/views/tab_diagram_view';
import { TabProcessInstanceDescription } from '../../tabs/views/tab_process_instance_description';
import { TabProcessResources } from '../../tabs/views/tab_process_resources';

interface Props {
  process?: QueryTypes.BpmnProcessDefinition;
  processInstance?: QueryTypes.BpmnProcessInstance;
  context: App.Context;
  view: ProcessViewType;
  resourceId?: string;
}

export class ProcessInstanceView extends React.Component<Props> {
  static displayName = 'ProcessInstanceView';

  render() {
    const { process, context, view, processInstance } = this.props;
    const isResource = ['resources', 'form', 'report', 'document'].includes(view);
    const isInstance = !!processInstance;
    const editableViewType = isInstance ? 'view' : 'preview';
    const id = isInstance ? processInstance.id : process.id;

    return (
      <div className="pageFrom">
        {/*************************************
              INFORMATION TAB
            ***************************************/}

        <If condition={view === 'information'}>
          <TightGrid className="ui form" stackable>
            <Grid.Column width={view === 'information' && process.resources.length ? 11 : 16}>
              <TabProcessInstanceDescription
                process={process}
                processInstance={processInstance}
                context={context}
              />
            </Grid.Column>

            <If condition={!!process.resources.length}>
              <Grid.Column width={5}>
                <MenuResourceView
                  context={context}
                  process={process}
                  processInstance={processInstance}
                />
              </Grid.Column>
            </If>
          </TightGrid>
        </If>

        {/*************************************
              RESOURCE TAB
            ***************************************/}

        <If condition={isResource}>
          <TabProcessResources
            process={process}
            processInstance={processInstance}
            context={context}
            contentType={view}
            resourceId={this.props.resourceId}
            viewType={editableViewType}
            ownerId={id}
          />
        </If>

        {/*************************************
              DIAGRAM TAB
            ***************************************/}

        <If condition={view === 'diagram'}>
          <TabDiagramView
            context={context}
            process={process}
            viewType="view"
            ownerId={processInstance.id}
          />
        </If>
      </div>
    );
  }
}
