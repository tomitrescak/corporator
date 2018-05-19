import * as React from 'react';
import { Route } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import { HomeView } from '../home/home_view';
import { BooksContainer } from './apollo_view';
import * as logo from './logo.jpg';

export const MainLayout: React.SFC = () => (
  <div>
    <Menu>
      <Menu.Item>
        <img src={logo} alt="logo" /> Menu
      </Menu.Item>
    </Menu>
    <BooksContainer />
    <If condition={true}>
      <>True</>
    </If>
    Main Layout
    <Route path="/" component={HomeView} />
  </div>
);
