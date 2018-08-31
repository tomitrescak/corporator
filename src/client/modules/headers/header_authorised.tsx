import * as React from 'react';
import logo = require('./logo.png');

import { Input, InputProps, Menu, MenuProps } from 'semantic-ui-react';
import styled, { StyledComponentClass } from 'styled-components';

import { Link } from '@reach/router';
import { LocalStorage } from '../../config/local_storage';
import { LogoutMenu } from '../login/logout_menu';
import { NotificationAlertContainer } from '../notifications/notification_alert';
import { Logo } from './header_logo';

const TopPanel = styled.div`
  background: #efefef;
`;

const Search: StyledComponentClass<InputProps, {}> = styled(Input)`
  width: 300px !important;
  margin: 3px;
`;

const TopMenu: StyledComponentClass<MenuProps, {}> = styled(Menu)`
  &&&&& {
    border: 0px;
    border-radius: 0px;
    background: inherit;
    box-shadow: inherit;
    margin-bottom: 0px;
  }
`;

const BottomMenu: StyledComponentClass<MenuProps, {}> = styled(Menu)`
  &&&&& {
    margin-top: 0px;
  }

  &&&&& .item {
    color: #777;
  }
`;

export const HeaderAuthorised = () => (
  <TopPanel>
    <TopMenu>
      <Menu.Item>
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Search icon="search" placeholder="Find Process..." />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <NotificationAlertContainer />
        </Menu.Item>
        <LogoutMenu token={LocalStorage.token}>
          <Menu.Item icon="user" content="Profile" />
        </LogoutMenu>
      </Menu.Menu>
    </TopMenu>

    <BottomMenu secondary borderless pointing color="grey">
      <Menu.Item name="messages" content="Running" active={true} />
      <Menu.Item name="messages" content="Finished" />
      <Menu.Item name="home" content="All" />
      <Menu.Item name="statistics" content="Statistics" />
      <Menu.Item as="a" icon="plus" name="home" content="Create" />
      <Menu.Menu position="right">
        <Menu.Item name="favourites" content="Favourites" icon="star" />
      </Menu.Menu>
    </BottomMenu>
  </TopPanel>
);
