import * as React from 'react';

import { List } from 'semantic-ui-react';

type Props = {
  searchItem: any;
};

export const ProcessListItemView: React.SFC<Props> = ({ searchItem }) => (
  <List.Item>
    <List.Icon name="file outline" verticalAlign="middle" />
    <List.Content>
      <List.Header as="a">{searchItem.category}</List.Header>
      <List.Description as="a">
        Submitted by {searchItem.owner} &middot; {searchItem.name} &middot;{' '}
        {searchItem.date.toString()}
      </List.Description>
    </List.Content>
  </List.Item>
);
