import * as React from 'react';

import { Button, Comment, Form, Header, Icon } from 'semantic-ui-react';

import { AvatarView } from 'client/modules/avatar/avatar_view';
import { QueryTypes } from 'data/client';
import { processTypeToIcon } from '../../common/process_icon';
import { TabContent } from '../../common/process_styles';
import { ProcessActivityView } from '../../instance/views/process_activity_view';
import { ProcessCurrentAction } from '../../instance/views/process_current_action_view';
import { ProcessInstanceStatus } from '../../instance/views/process_instance_status';
// import { Link } from 'react-router-dom';

type Props = {
  process: QueryTypes.BpmnProcessDefinition;
  context: App.Context;
  processInstance: QueryTypes.BpmnProcessInstance;
};

function taskToLinks(
  process: QueryTypes.BpmnProcessDefinition,
  processInstanceId: string,
  t: QueryTypes.BpmnProcessInstanceTask,
  ctx: App.Context
) {
  return t.task.resources.map(r => {
    if (r.type === QueryTypes.ResourceType.Form) {
      return (
        <List.Item key={r.id}>
          <List.Icon name="hand point right" />
          <List.Content>
            <Link
              to={`/process/${process.name.url()}/view/${r.type.toLowerCase()}/${r.name.url()}/${processInstanceId}/${
                r.form.id
              }`}
            >{ctx.i18n`Complete "${r.name}"`}</Link>
          </List.Content>
        </List.Item>
      );
    }
    return null;
  });
}

export const TabProcessInstanceDescription: React.SFC<Props> = ({
  context,
  process,
  processInstance
}) => {
  return (
    <TabContent>
      <Header as="h2">
        <Icon name={processTypeToIcon(process.type)} />
        <Header.Content>
          {process.name}
          <Header.Subheader>
            <ProcessInstanceStatus context={context} status={processInstance.status} />
            &nbsp;&middot;&nbsp;
            <I18>Manage your process</I18> &middot; {process.type}
          </Header.Subheader>
        </Header.Content>
      </Header>

      <ProcessCurrentAction process={process} processInstance={processInstance} context={context} />

      <ProcessActivityView context={context} processInstance={processInstance} />

      <Header as="h5" content={context.i18n`Comments`} icon="comment" dividing />

      <Comment.Group>
        <Comment>
          <AvatarView />
          <Comment.Content>
            <Comment.Author as="a">Matt</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
          </Comment.Content>
        </Comment>

        <Comment>
          <AvatarView />
          <Comment.Content>
            <Comment.Author as="a">Elliot Fu</Comment.Author>
            <Comment.Metadata>
              <div>Yesterday at 12:30AM</div>
            </Comment.Metadata>
            <Comment.Text>
              <p>This has been very useful for my research. Thanks as well!</p>
            </Comment.Text>
          </Comment.Content>
        </Comment>

        <Comment>
          <AvatarView />
          <Comment.Content>
            <Comment.Author as="a">Joe Henderson</Comment.Author>
            <Comment.Metadata>
              <div>5 days ago</div>
            </Comment.Metadata>
            <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
          </Comment.Content>
        </Comment>

        <Form reply>
          <Form.TextArea autoHeight={true} />
          <Button content="Add Reply" labelPosition="left" icon="edit" primary />
        </Form>
      </Comment.Group>
    </TabContent>
  );
};
