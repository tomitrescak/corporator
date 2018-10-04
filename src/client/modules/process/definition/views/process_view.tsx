import * as React from 'react';
import { Grid } from 'semantic-ui-react';

import { QueryTypes } from 'data/client';
import { ProcessViewType, TightGrid } from '../../common/process_styles';
import { MenuResourceView } from '../../menu/menu_resources_view';
import { TabDiagramView } from '../../tabs/views/tab_diagram_view';
import { TabProcessDescription } from '../../tabs/views/tab_process_description';
import { TabProcessResources } from '../../tabs/views/tab_process_resources';

interface Props {
  process: QueryTypes.BpmnProcessDefinition;
  context: App.Context;
  view: ProcessViewType;
  resourceId?: string;
}

export class ProcessView extends React.Component<Props> {
  static displayName = 'ProcessView';

  render() {
    const { process, context, view } = this.props;
    const isResource = ['resources', 'form', 'report', 'document'].includes(view);

    return (
      <div className="pageFrom">
        <Choose>
          <When condition={view === 'information'}>
            <TightGrid className="ui form" stackable>
              <Grid.Column width={view === 'information' && process.resources.length ? 11 : 16}>
                <TabProcessDescription process={process} context={context} />
              </Grid.Column>

              <If condition={!!process.resources.length}>
                <Grid.Column width={5}>
                  <MenuResourceView context={context} process={process} />
                </Grid.Column>
              </If>
            </TightGrid>
          </When>

          <When condition={isResource}>
            <TabProcessResources
              process={process}
              context={context}
              contentType={view}
              resourceId={this.props.resourceId}
              viewType={'preview'}
              ownerId={process.id}
            />
          </When>

          <When condition={view === 'diagram'}>
            <TabDiagramView
              context={context}
              process={process}
              ownerId={process.id}
              viewType="preview"
            />
          </When>
        </Choose>
      </div>
    );
  }
}
