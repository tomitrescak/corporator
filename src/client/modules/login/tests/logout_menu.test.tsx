import * as React from 'react';

import 'jest-styled-components';

import { Menu } from 'semantic-ui-react';

import RESUME_MUTATION = require('data/users/client/resume_query.graphql');
import { createData, mock, MockedProvider, render } from 'tests/client';
import { LogoutMenu, ResumeQuery } from '../logout_menu';

describe('Logout', function() {
  describe('Menu Button', () => {
    const CreateLogoutMenu = (token: string, store = createData.store()) =>
      render(
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

    it('renders loading ', () => {
      mock.expect(RESUME_MUTATION).loading();

      const store = createData.store({ userId: '1' });
      const component = CreateLogoutMenu('1234', store);
      expect(component).toMatchSnapshot();

      component.unmount();
    });

    it('renders empty if no user returned ', () => {
      mock.expect(RESUME_MUTATION).reply({ resume: {} });

      const store = createData.store({ userId: '1' });
      const component = CreateLogoutMenu('1234', store);
      expect(component).toMatchSnapshot();

      component.unmount();
    });

    it('renders fail and resets store', () => {
      mock.expect(RESUME_MUTATION).fail('Token Fail');

      const store = createData.store({ userId: '1' }, true);

      const component = CreateLogoutMenu('1234', store);
      expect(component).toMatchSnapshot();

      // test callback

      const query = component.root.findByType(ResumeQuery);
      query.props.onError();
      expect(store.userId).not.toBeDefined();

      component.unmount();
    });

    it('renders and sets value', () => {
      mock
        .expect(RESUME_MUTATION)
        .reply({ resume: { user: { id: '2', name: 'Tomas Trescak' }, token: 'ABCD' } });

      // const d = component.root.findByType(LogoutMenu).instance;
      // const spy = jest.fn();
      // d.wrappedInstance.onError = spy;

      const store = createData.store({ userId: '1' });
      const component = CreateLogoutMenu('1234', store);
      expect(component).toMatchSnapshot();

      // test callback

      const query = component.root.findByType(ResumeQuery);
      const user = { id: '2', name: 'Tomi' };
      query.props.onCompleted({ resume: { user } });
      expect(store.userId).toBe('2');
      expect(store.user).toEqual(user);

      component.unmount();
    });

    it('logs out', () => {
      mock
        .expect(RESUME_MUTATION)
        .reply({ resume: { user: { id: '2', name: 'Tomas Trescak' }, token: 'ABCD' } });

      const store = createData.store({ userId: '1', user: { id: '1', name: 'Tomas' } }, true);
      const component = CreateLogoutMenu('1234', store);

      component.root.findByProps({ icon: 'sign out' }).props.onClick();

      expect(store.userId).not.toBeDefined();
      expect(store.user).not.toBeDefined();
    });

    return {
      component: CreateLogoutMenu('123')
    };
  });
});
