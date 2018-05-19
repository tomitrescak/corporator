import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import { Routes } from './config/router';
import { client } from './config/apollo';
// import * as serviceWorker from './registerServiceWorker';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
