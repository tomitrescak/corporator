import { Link } from '@reach/router';
import * as React from 'react';
import { Divider, Grid, Icon, Menu } from 'semantic-ui-react';

import { QueryTypes } from 'data/client';
import { inject } from 'mobx-react';
import styled from 'styled-components';
import { createProcess } from '../containers/tests/process_test_data';
import { MenuResourceView } from './menu_resources_view';
import { TabDiagramView } from './tab_diagram_view';
import { TabProcessDescription } from './tab_process_description';
import { TabProcessInstanceDescription } from './tab_process_instance_description';
import { TabProcessResources } from './tab_process_resources';

// const LogList: StyledComponentClass<ListProps, {}> = styled(List)`
//   &&&&& .header {
//     font-weight: normal;
//   }
//   &&&&& .description {
//     font-size: smaller;
//   }
// `;

// const CommentArea: StyledComponentClass<TextAreaProps, {}> = styled(TextArea)`
//   &&&&& {
//     margin-bottom: 12px;
//   }
// `;

export type EditableViewType = 'view' | 'preview';

export type ProcessViewType =
  | 'information'
  | 'resources'
  | 'form'
  | 'report'
  | 'document'
  | 'diagram'
  | 'log';

interface Props {
  process?: QueryTypes.BpmnProcessDefinition;
  processInstance?: QueryTypes.BpmnProcessInstance;
  context: App.Context;
  view: ProcessViewType;
  resourceId?: string;
}

const TightGrid = styled(Grid)`
  margin: 12px 0px 0px 0px !important;
  .column {
    padding-top: 5px !important;
  }
  .label {
    margin-left: 0px !important;
  }
`;

const ProcessMenu = styled(Menu)`
  background-color: #e9e9e9 !important;
`;

// const Log = () => (
//   <>
//     <Header inverted as="h5" icon="tasks" content="Log" dividing attached />
//     <Segment attached>
//       <LogList divided relaxed>
//         <List.Item>
//           <List.Icon name="hourglass half" verticalAlign="middle" />
//           <List.Content>
//             <List.Header>Awaiting dean's approval</List.Header>
//           </List.Content>
//         </List.Item>
//         <List.Item>
//           <List.Icon name="check" verticalAlign="middle" />
//           <List.Content>
//             <List.Header>I have found no issues in the report. Proposing acceptance.</List.Header>
//             <List.Description as="a">
//               Approved by Angie Law &middot; May 27 at 11:22am
//             </List.Description>
//           </List.Content>
//         </List.Item>
//         <List.Item>
//           <List.Icon name="ticket" verticalAlign="middle" />
//           <List.Content>
//             <List.Description as="a">
//               Submitted by Tomas Trescak &middot; May 25 at 10:15am
//             </List.Description>
//           </List.Content>
//         </List.Item>
//       </LogList>
//     </Segment>
//   </>
// );

export class ProcessView extends React.Component<Props> {
  static displayName = ProcessView;

  render() {
    const { process, context, view, processInstance } = this.props;
    const isResource = ['resources', 'form', 'report', 'document'].includes(view);
    const isInstance = !!processInstance;
    const editableViewType = isInstance ? 'view' : 'preview';
    const id = isInstance ? processInstance.id : process.id;

    return (
      <div className="pageFrom">
        <ProcessMenu size="small" attached>
          <Menu.Item
            active={view === 'information'}
            as={Link}
            to={`/process/${process.name.url()}/${editableViewType}/information/${id}`}
          >
            <Icon name="info" />
            Information
          </Menu.Item>
          <Menu.Item
            active={isResource}
            as={Link}
            to={`/process/${process.name.url()}/${editableViewType}/resources/${id}`}
          >
            <Icon name="folder" />
            Resources
          </Menu.Item>
          <Menu.Item
            active={view === 'diagram'}
            as={Link}
            to={`/process/${process.name.url()}/${editableViewType}/diagram/${id}`}
          >
            <Icon name="sitemap" />
            Model
          </Menu.Item>

          <If condition={editableViewType === 'view'}>
            <>
              <Menu.Item
                active={view === 'log'}
                as={Link}
                to={`/process/${process.name.url()}/${editableViewType}/log/${id}`}
              >
                <Icon name="tasks" />
                Log
              </Menu.Item>

              <Menu.Item
                active={view === 'log'}
                as={Link}
                to={`/process/${process.name.url()}/${editableViewType}/log/${id}`}
              >
                <Icon name="talk" />
                Chat
              </Menu.Item>
            </>
          </If>
        </ProcessMenu>
        <Choose>
          <When condition={view === 'information'}>
            <TightGrid className="ui form" stackable>
              <Grid.Column width={view === 'information' && process.resources.length ? 11 : 16}>
                <Choose>
                  <When condition={isInstance}>
                    <TabProcessInstanceDescription
                      process={process}
                      processInstance={processInstance}
                      context={context}
                    />
                  </When>
                  <Otherwise>
                    <TabProcessDescription process={process} context={context} />
                  </Otherwise>
                </Choose>
              </Grid.Column>

              {/* Resource VIEW **************************************/}

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
          </When>
          <When condition={isResource}>
            <TabProcessResources
              process={process}
              processInstance={processInstance}
              context={context}
              contentType={view}
              resourceId={this.props.resourceId}
              viewType={editableViewType}
              ownerId={id}
            />
          </When>
          <When condition={view === 'diagram'}>
            <TabDiagramView context={context} process={process} />
          </When>
        </Choose>
      </div>
    );
  }
}

export const ProcessContainer = inject('context')(({ contentType, context }) => (
  <ProcessView context={context} process={createProcess()} view={contentType} />
));

ProcessContainer.displayName = 'ProcessContainer';
