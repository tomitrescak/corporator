import * as React from 'react';

import { Router } from '@reach/router';
import { Provider } from 'mobx-react';
import { render } from 'react-dom';

import { HomeContainer, HomeLayout, HomeView } from 'client/modules/home/home_view';
import { AppStore } from 'client/stores/app_store';

render(
  <Provider store={AppStore.create()}>
    <Router>
      <HomeContainer path="/" />
      <HomeContainer path="/home" />
    </Router>
  </Provider>,
  document.getElementById('root')
);
