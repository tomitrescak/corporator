import * as React from 'react';

import { Provider } from 'mobx-react';
import { create } from 'react-test-renderer';

import { HeaderAnonymous } from '../header_anonymous';

describe('Headers', () => {
  describe('Anonymous', () => {
    const Header = (
      <Provider store={{}}>
        <HeaderAnonymous />
      </Provider>
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
