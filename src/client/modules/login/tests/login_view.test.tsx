import * as React from 'react';

import 'jest-styled-components';

import { AppStore } from 'client/stores/app_store';
import { create, mock, MockedProvider } from 'tests/client';
import { LoginButton, LoginView } from '../login_view';

import LOGIN_QUERY = require('data/client/login.mutation.graphql');
import { Button } from 'semantic-ui-react';

describe('Login', function() {
  describe('Default', function() {
    const store = AppStore.create();

    const Login = (
      <MockedProvider>
        <LoginView store={store} />
      </MockedProvider>
    );

    it('renders', function() {
      const component = create(Login);
      expect(component).toMatchSnapshot();
    });

    it('validates', () => {
      const component = create(Login);
      component.root
        .findAllByProps({ name: 'user' })[1]
        .props.onChange({ currentTarget: { value: '' } });

      component.root
        .findAllByProps({ name: 'password' })[1]
        .props.onChange({ currentTarget: { value: '' } });

      expect(component).toMatchSnapshot();

      component.root
        .findAllByProps({ name: 'user' })[1]
        .props.onChange({ currentTarget: { value: 'tomas' } });

      component.root
        .findAllByProps({ name: 'password' })[1]
        .props.onChange({ currentTarget: { value: 'tomas' } });

      expect(component).toMatchSnapshot();
    });

    return {
      component: Login
    };
  });
});
