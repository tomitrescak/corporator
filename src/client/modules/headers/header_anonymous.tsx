import * as React from 'react';
import logo = require('./logo.png');

import { Menu, MenuProps } from 'semantic-ui-react';
import styled, { StyledComponentClass } from 'styled-components';

import { LocalStorage } from '../../config/local_storage';
import { LogoutMenu } from '../login/logout_menu';
import { Logo } from './header_logo';

const TopPanel = styled.div`
  background: #efefef;
`;

const TopMenu: StyledComponentClass<MenuProps, {}> = styled(Menu)`
  &&&&& {
    width: 100%;
    border: 0px;
    border-radius: 0px;
    background: inherit;
    box-shadow: inherit;
    margin-bottom: 12px;
  }
`;

export const HeaderAnonymous = () => (
  <TopPanel>
    <TopMenu borderless>
      <Menu.Item>
        <Logo src={logo} alt="logo" />
      </Menu.Item>
      <Menu.Menu position="right">
        <LogoutMenu token={LocalStorage.token} />
      </Menu.Menu>
    </TopMenu>
  </TopPanel>
);
