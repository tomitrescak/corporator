import * as React from 'react';
import { Breadcrumb, Grid, Header, Icon, List, Menu, Segment } from 'semantic-ui-react';

import { QueryTypes } from 'data/client';
import styled from 'styled-components';
import * as Diagram from './PatentApplicationHighLevel.png';
import { processTypeToIcon } from './process_icon';
import { TabContent } from './process_styles';

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

const Breadcrumbs = styled(Breadcrumb)`
  border-left: 1px dotted #d4d4d5;
  border-bottom: 1px solid #d4d4d5;
  background-color: #f3f3f3;
  width: 100%;
  padding: 6px;
`;

interface Props {
  process: QueryTypes.BpmnProcessDefinition;
  context: App.Context;
}

const Resources = () => (
  <>
    <Header inverted attached="top" as="h5" icon="file" content="Resources" dividing />
    <Segment attached>
      <List>
        <List.Item>
          <List.Icon name="folder" />
          <List.Content>
            <List.Header>Forms</List.Header>
            <List.Description>User forms of this process</List.Description>
            <List.List>
              <List.Item icon="archive" content="Travel Request" />
              <List.Item icon="archive" content="DTS" />
            </List.List>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="folder" />
          <List.Content>
            <List.Header>Reports and Receipts</List.Header>
            <List.List>
              <List.Item icon="newspaper" content="Dean's Report" />
            </List.List>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="folder" />
          <List.Content>
            <List.Header>Resources</List.Header>
            <List.List>
              <List.Item icon="file word outline" content="TEMS Instructions" />
              <List.Item icon="file excel outline" content="Max funding" />
            </List.List>
          </List.Content>
        </List.Item>
      </List>
    </Segment>
  </>
);

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

// const Roles: React.SFC<Props> = () => (
//   <>
//     <Header inverted attached as="h5" icon="users" content="Roles" dividing />
//     <Segment attached="bottom">
//       <List>
//         <List.Item as="a" icon="user" content="Dean &middot; Tomas Newman" />
//         <List.Item as="a" icon="user" content="Travel Team &middot; Andrew Bold" />
//       </List>
//     </Segment>
//   </>
// );

export const ProcessView: React.SFC<Props> = ({ process }) => (
  <>
    <Menu size="small" attached="top" tabular>
      <Menu.Item active={true}>
        <Icon name="info" />
        Information
      </Menu.Item>
      <Menu.Item>
        <Icon name="folder" />
        Resources
      </Menu.Item>
      <Menu.Item>
        <Icon name="sitemap" />
        BPMN Diagram
      </Menu.Item>
      <Menu.Item>
        <Icon name="tasks" />
        Activity Log
      </Menu.Item>
    </Menu>

    <Breadcrumbs>
      <Breadcrumb.Section link>Home</Breadcrumb.Section>
      <Breadcrumb.Divider icon="right angle" />
      <Breadcrumb.Section link>Store</Breadcrumb.Section>
      <Breadcrumb.Divider icon="right angle" />
      <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
    </Breadcrumbs>

    <TabContent>
      <Grid className="ui form">
        <Grid.Column width={11}>
          <Header as="h2">
            <Icon name={processTypeToIcon(process.type)} />
            <Header.Content>
              {process.name}
              {/* <Header.Subheader>Manage your preferences</Header.Subheader> */}
            </Header.Content>
          </Header>

          <p>
            This process allows you to book a short domestic travel with length up to 3 working
            days. The purpose of travel is either business or academic. The cost centre needs to be
            known in advance to proceed with booking. Please provide also the detailed travel
            schedule.
          </p>

          <Header icon="sitemap" content="Process Diagram" as="h4" />
          <img src={Diagram} style={{ width: '100%' }} />
        </Grid.Column>
        <Grid.Column width={5}>
          <Resources />

          {/* <Roles process={process} running={false} /> */}
        </Grid.Column>
      </Grid>
    </TabContent>
  </>
);
