import * as React from 'react';

import { Link } from '@reach/router';
import { Header, List, Segment } from 'semantic-ui-react';

import { QueryTypes } from 'data/client';

type Props = {
  context: App.Context;
  process: QueryTypes.BpmnProcessDefinition;
};

export const ProcessResources: React.SFC<Props> = ({ context, process }) => {
  const forms = process.resources.filter(r => r.type === QueryTypes.ResourceType.Form);
  const reports = process.resources.filter(r => r.type === QueryTypes.ResourceType.Report);
  const documents = process.resources.filter(
    r => r.type !== QueryTypes.ResourceType.Form && r.type !== QueryTypes.ResourceType.Report
  );

  return (
    <>
      <Header inverted attached="top" as="h5" icon="file" content="Resources" dividing />
      <Segment attached>
        <If condition={!process.resources.length}>
          <I18>No resources available</I18>
        </If>
        <List>
          <If condition={!!forms.length}>
            <List.Item>
              <List.Icon name="folder" />
              <List.Content>
                <List.Header as={I18}>Forms</List.Header>
                {/* <List.Description>User forms of this process</List.Description> */}

                <List.List>
                  {forms.map(r => (
                    <List.Item
                      as={Link}
                      key={r.id}
                      icon="wordpress forms"
                      content={r.name}
                      to={`/forms/${context.Ui.urlName(r.name)}/${r.id}`}
                    />
                  ))}
                </List.List>
              </List.Content>
            </List.Item>
          </If>
          <If condition={!!reports.length}>
            <List.Item>
              <List.Icon name="folder" />
              <List.Content>
                <List.Header as={I18}>Reports</List.Header>
                <List.List>
                  {reports.map(r => (
                    <List.Item
                      as={Link}
                      key={r.id}
                      icon="newspaper"
                      content={r.name}
                      to={`/reports/${context.Ui.urlName(r.name)}/${r.id}`}
                    />
                  ))}
                </List.List>
              </List.Content>
            </List.Item>
          </If>
          <If condition={!!documents.length}>
            <List.Item>
              <List.Icon name="folder" />
              <List.Content>
                <List.Header as={I18}>Resources</List.Header>
                <List.List>
                  {documents.map(r => {
                    switch (r.type) {
                      case QueryTypes.ResourceType.Document:
                        return (
                          <List.Item
                            as={Link}
                            key={r.id}
                            icon="file"
                            content={r.name}
                            to={`/files/${context.Ui.urlName(r.name)}/${r.id}`}
                          />
                        );
                      case QueryTypes.ResourceType.File:
                        return (
                          <List.Item
                            as={Link}
                            key={r.id}
                            icon="file alternate"
                            content={r.name}
                            to={`/files/${context.Ui.urlName(r.name)}/${r.id}`}
                          />
                        );
                      case QueryTypes.ResourceType.Url:
                        return (
                          <List.Item
                            as="a"
                            key={r.id}
                            icon="linkify"
                            content={r.name}
                            href={r.content}
                          />
                        );
                    }
                  })}
                </List.List>
              </List.Content>
            </List.Item>
          </If>
        </List>
      </Segment>
    </>
  );
};
