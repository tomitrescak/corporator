import * as React from 'react';

import 'jest-styled-components';

import { create } from 'react-test-renderer';
import { LoginStore } from '../login_store';
import { LoginView } from '../login_view';

describe('Login', () => {
  describe('Default', () => {
    const store = LoginStore.create();

    const Login = <LoginView store={store} />;

    it('renders', () => {
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
