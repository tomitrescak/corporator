import * as React from 'react';

import 'jest-styled-components';
import { Button } from 'semantic-ui-react';

import { AppStore } from 'client/stores/app_store';
import { mock, MockedProvider, ReactTestRenderer, render } from 'client/tests';
import { LOGIN_MUTATION, LoginButton } from '../login_button_view';

describe('Login', function() {
  describe('LoginButton', () => {
    const store = AppStore.create();
    store.login.validate = jest.fn().mockReturnValue(true);

    const Login = (
      <MockedProvider>
        <LoginButton store={store} />
      </MockedProvider>
    );

    let cmp: ReactTestRenderer;

    beforeEach(() => {
      mock.reset();
      cmp = render(Login);
    });

    afterEach(() => {
      cmp.unmount();
    });

    it('renders loading', () => {
      mock.expect(LOGIN_MUTATION).loading();

      cmp.root.findByType(Button).props.onClick();

      expect(cmp).toMatchSnapshot();
      cmp.unmount();
    });

    it('renders error', () => {
      mock.expect(LOGIN_MUTATION).fail('any');

      cmp.root.findByType(Button).props.onClick();

      expect(store.login.error).toEqual('User or password is incorrect');
    });

    it('renders and sets value', () => {
      mock.expect(LOGIN_MUTATION).reply({ login: { user: { id: '1', name: 'Tomas' } } });

      expect(cmp).toMatchSnapshot();

      cmp.root.findByType(Button).props.onClick();
      expect(store.userId).toBe('1');
    });

    return {
      component: Login
    };
  });
});
