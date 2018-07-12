import * as dayjs from 'dayjs';
import * as React from 'react';

import { List } from 'semantic-ui-react';

type Props = {
  searchItem: Corpix.Entities.Search;
}

export const SearchView: React.SFC<Props> = ({ searchItem }) => (
  <List.Item>
    <List.Icon name="file outline" verticalAlign="middle" />
    <List.Content>
      <List.Header as="a">{searchItem.category}</List.Header>
      <List.Description as="a">
        Submitted by {searchItem.owner} &middot; {searchItem.title} &middot; {dayjs(searchItem.date).toString()}
      </List.Description>
    </List.Content>
  </List.Item>
);