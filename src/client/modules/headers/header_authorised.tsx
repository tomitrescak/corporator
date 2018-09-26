import * as React from 'react';

import logo = require('./logo.png');

import { Input, InputProps, Menu, MenuProps } from 'semantic-ui-react';
import styled, { StyledComponentClass } from 'styled-components';

import { Link, Location } from '@reach/router';
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
  &&&&& .item {
    color: #777;
  }
  .wideMenu {
    @media (max-width: 950px) {
      display: none !important;
    }
  }
`;

const Narrow = styled.div`
  @media (min-width: 950px) {
    display: none;
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

const SearchMenuItem = styled(Menu.Item)`
  padding-left: 0px !important;
  margin-left: 0px !important;
`;

const MenuElements = () => (
  <>
    <Menu.Item
      as={Link}
      to="/process/create"
      name="home"
      content="Create"
      icon="plus"
      color="blue"
      active={location.pathname === '/process/create'}
    />
    <Menu.Item
      as={Link}
      to="/process/running"
      name="running"
      content="Running"
      active={!!location.pathname.match(/\/running/)}
    />
    <Menu.Item
      as={Link}
      to="/process/finished"
      name="finished"
      content="Finished"
      active={!!location.pathname.match(/\/finished/)}
    />
    <Menu.Item
      as={Link}
      to="/process/all"
      name="all"
      content="All"
      active={!!location.pathname.match(/\/all/)}
    />

    {/* <Menu.Item name="statistics" content="Statistics" /> */}
  </>
);

export const HeaderAuthorised = () => (
  <Location>
    {({ location }: any) => (
      <TopPanel>
        <TopMenu secondary>
          <Menu.Item>
            <Link to="/">
              <Logo src={logo} alt="logo" />
            </Link>
          </Menu.Item>
          <SearchMenuItem>
            <Search icon="search" placeholder="Find Process..." />
          </SearchMenuItem>
          <Menu.Menu className="wideMenu">
            <MenuElements />
          </Menu.Menu>
          <Menu.Menu position="right">
            <NotificationAlertContainer active={!!location.pathname.match(/\/notifications/)} />
            <LogoutMenu>
              <Menu.Item icon="user" content="Profile" />
            </LogoutMenu>
          </Menu.Menu>
        </TopMenu>
        <Narrow>
          <BottomMenu secondary borderless pointing color="blue">
            <MenuElements />
          </BottomMenu>
        </Narrow>
        {/* <BottomMenu secondary borderless pointing color="blue">
          <Menu.Item
            as={Link}
            to="/process/create"
            name="home"
            content="Create"
            color="blue"
            active={location.pathname === '/process/create'}
          />
          <Menu.Item
            name="running"
            content="Running"
            active={location.pathname.match(/\/running/)}
          />
          <Menu.Item
            name="finished"
            content="Finished"
            active={location.pathname.match(/\/finished/)}
          />
          <Menu.Item name="all" content="All" active={location.pathname.match(/\/all/)} />

          <Menu.Menu position="right">
            <NotificationAlertContainer active={!!location.pathname.match(/\/notifications/)} />
            <Menu.Item name="favourites" content="Favourites" icon="star" />
          </Menu.Menu>
        </BottomMenu> */}
      </TopPanel>
    )}
  </Location>
);
