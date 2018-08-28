import * as React from 'react';

import { Router } from '@reach/router';
import { Provider } from 'mobx-react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';

import { client } from 'client/config/apollo';
import { LocalStorage } from 'client/config/local_storage';
import { HomeContainer, HomeLayout, HomeView } from 'client/modules/home/home_view';
import { AppStore } from 'client/stores/app_store';

import './style.css';

const store = AppStore.create({ userId: LocalStorage.userId });

render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router>
        <HomeContainer path="/" />
      </Router>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
