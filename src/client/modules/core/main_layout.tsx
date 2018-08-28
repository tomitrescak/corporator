import * as React from 'react';
import * as jenny from './jenny.jpg';
import * as logo from './logo.png';

import styled, { StyledComponentClass } from 'styled-components';

// import { Icon, Image, Input, InputProps, Menu, MenuProps } from 'semantic-ui-react';
import { HeaderAuthorised } from '../headers/header_authorised';

const Logo = styled.img`
  &&&&& {
    width: 120px;
  }
`;

const Content = styled.div`
  padding: 12px;
`;

export const MainLayout: React.SFC = ({ children }) => (
  <React.Fragment>
    <HeaderAuthorised />
    <Content>{children}</Content>

    {/* <Link to="/luis">Luis</Link> */}
    {/* <Route path="/" component={HomeView} /> */}
  </React.Fragment>
);

// export const ProcessLayout: React.SFC = ({ children }) => (
//   <React.Fragment>
//     <TopPanel>
//       <Top />

//       <BottomMenu secondary borderless pointing color="grey">
//         <Menu.Item name="home" content="Versions" icon="wait" />
//         <Menu.Item name="messages" content="Statistics" icon="bar chart" />
//       </BottomMenu>
//     </TopPanel>

//     <Content>{children}</Content>

//     {/* <Link to="/luis">Luis</Link> */}
//     {/* <Route path="/" component={HomeView} /> */}
//   </React.Fragment>
// );

// export const ProcessVersionsLayout: React.SFC = ({ children }) => (
//   <React.Fragment>
//     <TopPanel>
//       <Top />

//       <BottomMenu secondary borderless pointing color="grey">
//         <Menu.Item name="home" content="Instances" icon="archive" />
//         <Menu.Item name="messages" content="Statistics" icon="bar chart" />
//       </BottomMenu>
//     </TopPanel>

//     <Content>{children}</Content>

//     {/* <Link to="/luis">Luis</Link> */}
//     {/* <Route path="/" component={HomeView} /> */}
//   </React.Fragment>
// );
