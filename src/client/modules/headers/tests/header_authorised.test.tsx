import * as React from 'react';

import { create } from 'react-test-renderer';
import { Menu } from 'semantic-ui-react';

jest.mock('../../notifications/notification_alert', () => ({
  NotificationAlertContainer: () => <Menu.Item>0</Menu.Item>
}));

import { MockedProvider } from 'client/tests';
import { HeaderAuthorised } from '../header_authorised';

describe('Headers', () => {
  describe('Authorised', () => {
    const Header = (
      <MockedProvider>
        <HeaderAuthorised />
      </MockedProvider>
    );

    it('renders correctly', () => {
      const root = create(Header);
      expect(root).toMatchSnapshot();
    });

    return {
      component: Header
    };
  });
});
