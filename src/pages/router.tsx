import * as React from 'react';

import { Router } from '@reach/router';
import { setStatefulModules } from 'fuse-box/modules/fuse-hmr';
import { Provider } from 'mobx-react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';

import { client } from 'client/config/apollo';
import { context } from 'client/config/context';
import { HeaderContainer } from 'client/modules/headers/header_view';
import { HomeContainer } from 'client/modules/home/home_view';
import { NotificationsContainer } from 'client/modules/notifications/notifications_view';
import { appStore } from 'client/stores/app_store';

import './style.css';

render(
  <ApolloProvider client={client}>
    <Provider store={appStore} context={context}>
      <>
        <Router>
          <HeaderContainer path="/*" />
        </Router>
        <Router id="pageContent">
          <HomeContainer path="/" />
          <NotificationsContainer path="/notifications" />
        </Router>
      </>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

// set stateful modules
if (process.env.NODE_ENV !== 'production') {
  setStatefulModules(name => {
    return name.match(/store|context|apollo/) != null;
  });
}
