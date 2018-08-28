import * as React from 'react';

import 'jest-styled-components';

import { AppStore } from 'client/stores/app_store';
import { create, mock, MockedProvider, ReactTestRenderer } from 'tests/client';

import RESUME_MUTATION = require('data/client/resume_mutation.graphql');
import { Button, Menu } from 'semantic-ui-react';
import { LogoutMenu } from '../logout_menu';

describe('Logout', function() {
  describe('Menu Button', () => {
    const CreateLogoutMenu = (token: string, store = AppStore.create()) =>
      create(
        <MockedProvider>
          <Menu>
            <LogoutMenu store={store} token={token} />
          </Menu>
        </MockedProvider>
      );

    beforeEach(() => {
      mock.reset();
    });

    it('renders empty if no user present and loading', () => {
      mock.expect(RESUME_MUTATION).loading();

      const component = CreateLogoutMenu('1234');

      expect(component).toMatchSnapshot();
      component.unmount();
    });

    it('renders empty if no user present', () => {
      mock.expect(RESUME_MUTATION).reply({});

      const component = CreateLogoutMenu('1234');

      expect(component).toMatchSnapshot();
      component.unmount();
    });

    it('renders loading if user id present but no user, fails and resets store', () => {
      mock.expect(RESUME_MUTATION).fail('Token Fail');

      const store = AppStore.create({ userId: '1' });

      const component = CreateLogoutMenu('1234', store);

      expect(component).toMatchSnapshot();

      expect(store.userId).not.toBeDefined();

      component.unmount();
    });

    it('renders and sets value', () => {
      mock
        .expect(RESUME_MUTATION)
        .reply({ resume: { user: { id: '2', name: 'Tomi' }, token: 'ABCD' } });

      const store = AppStore.create({ userId: '1' });

      const component = CreateLogoutMenu('1234', store);

      expect(component).toMatchSnapshot();

      expect(store.userId).not.toBeDefined();

      component.unmount();
    });

    return {
      component: Login
    };
  });
});
