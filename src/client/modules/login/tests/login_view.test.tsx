import * as React from 'react';

import 'jest-styled-components';

import { AppStore } from 'client/stores/app_store';
import { MockedProvider, render } from 'client/tests';
import { LoginView } from '../login_view';

describe('Login', function() {
  describe('Default', function() {
    const store = AppStore.create();

    const Login = (
      <MockedProvider>
        <LoginView store={store} />
      </MockedProvider>
    );

    it('renders', function() {
      const component = render(Login);
      expect(component).toMatchSnapshot();
    });

    it('validates', () => {
      const component = render(Login);
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
