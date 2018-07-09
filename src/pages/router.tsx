import * as React from 'react';

import { Router } from '@reach/router';
import { render } from 'react-dom';
import { HomeLayout } from '../client/modules/home/home_view';

render(
  <Router>
    <HomeLayout path="/" />
    <HomeLayout path="/home" />
  </Router>,
  document.getElementById('root')
);
