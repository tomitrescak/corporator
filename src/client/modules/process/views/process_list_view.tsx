import * as React from 'react';
import { Item, Label, IconProps, Icon } from 'semantic-ui-react';
import styled, { StyledComponentClass } from 'styled-components';

const ListIcon: StyledComponentClass<IconProps, {}> = styled(Icon)`
  &&&&& {
    margin-right: 12px;
  }
`;

export const ProcessListView = () => (
  <Item.Group>
    <Item>
      <ListIcon name="sitemap" circular size="large" />

      <Item.Content>
        <Item.Header as="a">Domestic Travel</Item.Header>
        <Item.Meta>3 peers &middot; Estimated time to complete 20 hours </Item.Meta>
        <Item.Description>
          This process describes standard procedures in obtaining permissions and handling travel
          bookings for short domestic trips with length shorter then 3 days.
        </Item.Description>
        <Item.Extra>
          <Label>Version 11</Label> &middot; Modified by Tomas Trescak &middot; 2 months ago
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <ListIcon name="travel" circular size="large" />

      <Item.Content>
        <Item.Header as="a">International Business Travel</Item.Header>
        <Item.Meta>6 peers &middot; Estimated time to complete 2 days </Item.Meta>
        <Item.Description>
          This process describes standard procedures in obtaining permissions and handling travel
          bookings for long internationals trips with business purpose.
        </Item.Description>
        <Item.Extra>
          <Label>Version 2</Label> &middot; Modified by Tomas Trescak &middot; 1 months ago
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
);
