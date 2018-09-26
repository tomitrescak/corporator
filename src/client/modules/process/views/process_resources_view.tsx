import * as React from 'react';

import { List } from 'semantic-ui-react';

import { Link } from '@reach/router';
import { QueryTypes } from 'data/client';

type Props = {
  context: App.Context;
  process: QueryTypes.BpmnProcessDefinition;
  processInstance: QueryTypes.BpmnProcessInstance;
  filter?: QueryTypes.ResourceType;
};

export class ProcessResources extends React.Component<Props> {
  // renderModal() {
  //   const resource = this.state.activeResource;

  //   return (
  //     <Modal
  //       open={true}
  //       dimmer="blurring"
  //       size="fullscreen"
  //       closeOnDimmerClick={false}
  //       closeOnEscape={false}
  //     >
  //       <Modal.Header>{resource.name}</Modal.Header>
  //       <Modal.Content scrolling>
  //         description
  //         <br />
  //       </Modal.Content>
  //       <Modal.Actions>
  //         <Button
  //           default
  //           content={this.props.context.i18n`Close`}
  //           onClick={() => this.setState({ activeResource: null })}
  //         />
  //       </Modal.Actions>
  //     </Modal>
  //   );
  // }

  createUrl(r: QueryTypes.BpmnProcessResource, id: String) {
    return this.props.processInstance
      ? `/process/${this.props.process.name.url()}/view/${r.type.toLowerCase()}/${r.name.url()}/${
          this.props.processInstance.id
        }/${id}`
      : `/process/${this.props.process.name.url()}/preview/${r.type.toLowerCase()}/${r.name.url()}/${
          this.props.process.id
        }/${id}`;
  }

  render() {
    const { process, filter } = this.props;

    const forms = process.resources.filter(r => r.type === QueryTypes.ResourceType.Form);
    const reports = process.resources.filter(r => r.type === QueryTypes.ResourceType.Report);
    const documents = process.resources.filter(r => r.type === QueryTypes.ResourceType.Document);
    const files = process.resources.filter(r => r.type === QueryTypes.ResourceType.File);
    const links = process.resources.filter(r => r.type === QueryTypes.ResourceType.Url);

    return (
      <>
        {/* {this.state.activeResource && this.renderModal()} */}

        <If condition={!process.resources.length}>
          <I18>📉 No resources allocated to this process</I18>
        </If>
        <List>
          <If condition={!!forms.length && (!filter || filter === QueryTypes.ResourceType.Form)}>
            <List.Item>
              <List.Icon name="folder" />
              <List.Content>
                <List.Header as={I18}>Forms</List.Header>
                {/* <List.Description>User forms of this process</List.Description> */}

                <List.List>
                  {forms.map(r => (
                    <List.Item
                      as={Link}
                      to={this.createUrl(r, (r.form || { id: 'error' }).id)}
                      key={r.id}
                      icon="wordpress forms"
                      content={r.name}
                      // onClick={() => this.setState({ activeResource: r })}
                    />
                  ))}
                </List.List>
              </List.Content>
            </List.Item>
          </If>
          <If
            condition={!!reports.length && (!filter || filter === QueryTypes.ResourceType.Report)}
          >
            <List.Item>
              <List.Icon name="folder" />
              <List.Content>
                <List.Header as={I18}>Reports</List.Header>
                <List.List>
                  {reports.map(r => (
                    <List.Item
                      as={Link}
                      to={this.createUrl(r, (r.form || { id: 'error' }).id)}
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
          <If
            condition={
              !!documents.length && (!filter || filter === QueryTypes.ResourceType.Document)
            }
          >
            <List.Item>
              <List.Icon name="folder" />
              <List.Content>
                <List.Header as={I18}>Documents</List.Header>
                <List.List>
                  {documents.map(r => (
                    <List.Item
                      as={Link}
                      to={this.createUrl(r, r.document.id)}
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
          <If condition={!!files.length && !filter}>
            <List.Item>
              <List.Icon name="folder" />
              <List.Content>
                <List.Header as={I18}>Files</List.Header>
                <List.List>
                  {files.map(r => (
                    <List.Item
                      as={Link}
                      target="_blank"
                      key={r.id}
                      icon="file alternate"
                      content={r.name}
                      to={`/files/${process.id}/${r.link}`}
                    />
                  ))}
                </List.List>
              </List.Content>
            </List.Item>
          </If>
          <If condition={!!links.length && !filter}>
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
                      href={r.link}
                    />
                  ))}
                </List.List>
              </List.Content>
            </List.Item>
          </If>
        </List>
      </>
    );
  }
}
