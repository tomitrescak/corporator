import * as React from 'react';

import { Button, Header, List, Modal, Segment } from 'semantic-ui-react';

import { QueryTypes } from 'data/client';

type Props = {
  context: App.Context;
  process: QueryTypes.BpmnProcessDefinition;
};

type State = {
  activeResource: QueryTypes.BpmnProcessResource;
};

export class ProcessResources extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { activeResource: null };
  }
  renderModal() {
    const resource = this.state.activeResource;

    return (
      <Modal
        open={true}
        dimmer="blurring"
        size="fullscreen"
        closeOnDimmerClick={false}
        closeOnEscape={false}
      >
        <Modal.Header>{resource.name}</Modal.Header>
        <Modal.Content scrolling>
          description
          <br />
        </Modal.Content>
        <Modal.Actions>
          <Button
            default
            content={this.props.context.i18n`Close`}
            onClick={() => this.setState({ activeResource: null })}
          />
        </Modal.Actions>
      </Modal>
    );
  }

  render() {
    const { context, process } = this.props;

    const forms = process.resources.filter(r => r.type === QueryTypes.ResourceType.Form);
    const reports = process.resources.filter(r => r.type === QueryTypes.ResourceType.Report);
    const documents = process.resources.filter(r => r.type === QueryTypes.ResourceType.Document);
    const files = process.resources.filter(r => r.type === QueryTypes.ResourceType.File);
    const links = process.resources.filter(r => r.type === QueryTypes.ResourceType.Url);

    return (
      <>
        {this.state.activeResource && this.renderModal()}
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
                        as="a"
                        key={r.id}
                        icon="wordpress forms"
                        content={r.name}
                        onClick={() => this.setState({ activeResource: r })}
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
                        as="a"
                        key={r.id}
                        icon="newspaper"
                        content={r.name}
                        onClick={() => this.setState({ activeResource: r })}
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
                  <List.Header as={I18}>Documents</List.Header>
                  <List.List>
                    {documents.map(r => (
                      <List.Item
                        as="a"
                        key={r.id}
                        icon="file"
                        content={r.name}
                        onClick={() => this.setState({ activeResource: r })}
                      />
                    ))}
                  </List.List>
                </List.Content>
              </List.Item>
            </If>
            <If condition={!!files.length}>
              <List.Item>
                <List.Icon name="folder" />
                <List.Content>
                  <List.Header as={I18}>Files</List.Header>
                  <List.List>
                    {files.map(r => (
                      <List.Item
                        as="a"
                        target="_blank"
                        key={r.id}
                        icon="file alternate"
                        content={r.name}
                        to={`/files/${context.Ui.urlName(r.name)}/${r.id}`}
                      />
                    ))}
                  </List.List>
                </List.Content>
              </List.Item>
            </If>
            <If condition={!!links.length}>
              <List.Item>
                <List.Icon name="folder" />
                <List.Content>
                  <List.Header as={I18}>Links</List.Header>
                  <List.List>
                    {links.map(r => (
                      <List.Item
                        as="a"
                        target="_blank"
                        key={r.id}
                        icon="linkify"
                        content={r.name}
                        href={r.content}
                      />
                    ))}
                  </List.List>
                </List.Content>
              </List.Item>
            </If>
          </List>
        </Segment>
      </>
    );
  }
}
