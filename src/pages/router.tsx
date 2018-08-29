import * as React from 'react';

import { Router } from '@reach/router';
import { setStatefulModules } from 'fuse-box/modules/fuse-hmr';
import { Provider } from 'mobx-react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';

import { client } from 'client/config/apollo';
import { HomeContainer } from 'client/modules/home/home_view';
import { appStore } from 'client/stores/app_store';

import './style.css';

render(
  <ApolloProvider client={client}>
    <Provider store={appStore}>
      <Router>
        <HomeContainer path="/" />
      </Router>
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
