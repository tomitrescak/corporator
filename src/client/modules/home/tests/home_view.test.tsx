import * as React from 'react';

import { Provider } from 'mobx-react';
import { create } from 'react-test-renderer';

import { AppStore } from 'client/stores/app_store';
import { MockedProvider } from 'tests/client';
import { HomeView } from '../home_view';

describe('Home', () => {
  function componentWithData() {
    const store = AppStore.create({});

    return (
      <Provider store={store}>
        <MockedProvider>
          <HomeView store={store} />
        </MockedProvider>
      </Provider>
    );
  }

  describe('Logged Out', () => {
    it('renders for logged out user', () => {
      const root = create(componentWithData());
      expect(root).toMatchSnapshot();
    });

    return { componentWithData };
  });

  describe('Logged In', () => {
    it('renders for logged in user', () => {
      const root = create(componentWithData());
      expect(root).toMatchSnapshot();
    });

    return { component: componentWithData() };
  });
});
