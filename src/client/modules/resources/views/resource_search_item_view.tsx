import * as React from 'react';

import { List } from 'semantic-ui-react';

import { context } from 'client/config/context';

type Props = {
  searchItem: Corpix.Entities.Search;
};

export const SearchView: React.SFC<Props> = ({ searchItem }) => (
  <List.Item>
    <List.Icon name="file outline" verticalAlign="middle" />
    <List.Content>
      <List.Header as="a">{searchItem.category}</List.Header>
      <List.Description as="a">
        Submitted by {searchItem.owner} &middot; {searchItem.title} &middot;{' '}
        {context.Ui.relativeDate(searchItem.date)}
      </List.Description>
    </List.Content>
  </List.Item>
);
