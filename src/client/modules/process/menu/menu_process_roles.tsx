import * as React from 'react';

import { Header, List, Segment } from 'semantic-ui-react';

type Props = {};

export const Roles: React.SFC<Props> = () => (
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
