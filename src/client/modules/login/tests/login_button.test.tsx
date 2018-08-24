import * as React from 'react';

import 'jest-styled-components';

import { AppStore } from 'client/stores/app_store';
import { create, mock, MockedProvider } from 'tests/client';
import { LoginButton } from '../login_view';

import LOGIN_QUERY = require('data/client/login.mutation.graphql');
import { Button } from 'semantic-ui-react';

describe('Login', function() {
  describe('LoginButton', () => {
    const store = AppStore.create();

    const Login = (
      <MockedProvider>
        <LoginButton store={store} />
      </MockedProvider>
    );

    it('renders loading', () => {
      mock.reset();
      mock.expect(LOGIN_QUERY).loading();

      const component = create(Login);
      component.root.findByType(Button).props.onClick();

      expect(component).toMatchSnapshot();
      component.unmount();
    });

    it('renders and sets value', () => {
      mock.reset();
      mock.expect(LOGIN_QUERY).reply({ login: { id: '1' } });

      const component = create(Login);
      expect(component).toMatchSnapshot();

      component.root.findByType(Button).props.onClick();
      expect(store.userId).toBe('1');
      component.unmount();
    });

    return {
      component: Login
    };
  });
});
