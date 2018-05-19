import * as React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainLayout } from '../modules/core/main_layout';
import { LuisApp } from '../modules/luis/luis_view';

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact={true} path="/luis" component={LuisApp()} />
      <Route exact={true} path="/" component={MainLayout} />
    </Switch>
  </Router>
);
