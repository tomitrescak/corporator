import * as React from 'react';
import * as jenny from './jenny.jpg';
import * as logo from './logo.png';

import styled, { StyledComponentClass } from 'styled-components';

import { Icon, Image, Input, InputProps, Menu, MenuProps } from 'semantic-ui-react';

const Logo = styled.img`
  &&&&& {
    width: 120px;
  }
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

const TopPanel = styled.div`
  background: #efefef;
`;

const Content = styled.div`
  padding: 12px;
`;

const Top = () => (
  <TopMenu borderless>
    <Menu.Item>
      <Logo src={logo} alt="logo" />
    </Menu.Item>
    <Menu.Item>
      <Search icon="search" placeholder="Find Process..." />
    </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item>
        <Icon name="bell" /> 3
      </Menu.Item>
      <Menu.Item>
        <Image avatar={true} src={jenny} />
      </Menu.Item>
    </Menu.Menu>
  </TopMenu>
);

export const MainLayout: React.SFC = ({ children }) => (
  <>
    <TopPanel>
      <Top />

      <BottomMenu secondary borderless pointing color="grey">
        <Menu.Item name="home" content="All" />
        <Menu.Item name="messages" content="Running" />
        <Menu.Item name="messages" content="Finished" />
        <Menu.Item name="friends" content="Team" />
        <Menu.Item name="friends" content="Recommended" active={true} />
        <Menu.Item name="favourites" content="Favourites" icon="star" />
        <Menu.Item name="statistics" content="Statistics" />
      </BottomMenu>
    </TopPanel>

    <Content>{children}</Content>

    {/* <Link to="/luis">Luis</Link> */}
    {/* <Route path="/" component={HomeView} /> */}
  </>
);

export const ProcessLayout: React.SFC = ({ children }) => (
  <>
    <TopPanel>
      <Top />

      <BottomMenu secondary borderless pointing color="grey">
        <Menu.Item name="home" content="Versions" icon="wait" />
        <Menu.Item name="messages" content="Statistics" icon="bar chart" />
      </BottomMenu>
    </TopPanel>

    <Content>{children}</Content>

    {/* <Link to="/luis">Luis</Link> */}
    {/* <Route path="/" component={HomeView} /> */}
  </>
);

export const ProcessVersionsLayout: React.SFC = ({ children }) => (
  <>
    <TopPanel>
      <Top />

      <BottomMenu secondary borderless pointing color="grey">
        <Menu.Item name="home" content="Instances" icon="archive" />
        <Menu.Item name="messages" content="Statistics" icon="bar chart" />
      </BottomMenu>
    </TopPanel>

    <Content>{children}</Content>

    {/* <Link to="/luis">Luis</Link> */}
    {/* <Route path="/" component={HomeView} /> */}
  </>
);
