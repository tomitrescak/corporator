import * as React from 'react';
import {
  Button,
  Grid,
  Header,
  Icon,
  List,
  ListProps,
  Segment,
  TextArea,
  TextAreaProps
} from 'semantic-ui-react';

import styled, { StyledComponentClass } from 'styled-components';
import * as Diagram from './PatentApplicationHighLevel.png';

const LogList: StyledComponentClass<ListProps, {}> = styled(List)`
  &&&&& .header {
    font-weight: normal;
  }
  &&&&& .description {
    font-size: smaller;
  }
`;

const CommentArea: StyledComponentClass<TextAreaProps, {}> = styled(TextArea)`
  &&&&& {
    margin-bottom: 12px;
  }
`;

interface Props {
  running: boolean;
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

const Log = () => (
  <>
    <Header inverted as="h5" icon="tasks" content="Log" dividing attached />
    <Segment attached>
      <LogList divided relaxed>
        <List.Item>
          <List.Icon name="hourglass half" verticalAlign="middle" />
          <List.Content>
            <List.Header>Awaiting dean's approval</List.Header>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="check" verticalAlign="middle" />
          <List.Content>
            <List.Header>I have found no issues in the report. Proposing acceptance.</List.Header>
            <List.Description as="a">
              Approved by Angie Law &middot; May 27 at 11:22am
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="ticket" verticalAlign="middle" />
          <List.Content>
            <List.Description as="a">
              Submitted by Tomas Trescak &middot; May 25 at 10:15am
            </List.Description>
          </List.Content>
        </List.Item>
      </LogList>
    </Segment>
  </>
);

const Roles: React.SFC<Props> = () => (
  <>
    <Header inverted attached as="h5" icon="users" content="Roles" dividing />
    <Segment attached="bottom">
      <List>
        <List.Item as="a" icon="user" content="Dean &middot; Tomas Newman" />
        <List.Item as="a" icon="user" content="Travel Team &middot; Andrew Bold" />
      </List>
    </Segment>
  </>
);

export const ProcessView: React.SFC<Props> = ({ running }) => (
  <>
    <Grid className="ui form">
      <Grid.Column width={11}>
        <Header as="h2">
          <Icon name="travel" />
          <Header.Content>
            Domestic Travel
            {/* <Header.Subheader>Manage your preferences</Header.Subheader> */}
          </Header.Content>
        </Header>

        <p>
          This process allows you to book a short domestic travel with length up to 3 working days.
          The purpose of travel is either business or academic. The cost centre needs to be known in
          advance to proceed with booking. Please provide also the detailed travel schedule.
        </p>

        <If condition={running}>
          <>
            <Segment inverted color="green">
              <Header content="Running: Awaiting Input" as="h5" icon="tasks" dividing />
              <List inverted>
                <List.Item as="a">
                  <Icon name="help" />
                  <List.Content>
                    <List.Header>Awaiting your decision</List.Header>
                    <List.Description>
                      Please approve or reject this travel request
                    </List.Description>
                  </List.Content>
                </List.Item>
                <List.Item as="a">
                  <Icon name="check" />
                  Approved by Angela Arthur &middot; 3 hours ago &middot; All details are correct
                </List.Item>
              </List>
            </Segment>

            <CommentArea rows={2} placeholder="Please leave comment ..." />

            <Button color="red" icon="remove" content="Reject" floated="right" />
            <Button color="green" icon="check" content="Accept" floated="right" />
            <div style={{ clear: 'both' }} />
          </>
        </If>

        <Header icon="sitemap" content="Process Diagram" as="h4" />
        <img src={Diagram} style={{ width: '100%' }} />
      </Grid.Column>
      <Grid.Column width={5}>
        <Resources />
        <If condition={running}>
          <Log />
        </If>
        <Roles running={running} />
      </Grid.Column>
    </Grid>
  </>
);
