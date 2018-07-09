import * as React from 'react';

import { create } from 'react-test-renderer';

import { HomeView } from '../home_view';

describe('Home', () => {
  storyOf(
    'Logged In',
    {
      componentWithData(user: Corpix.User) {
        return <HomeView user={null} />;
      }
    },
    data => {
      it('renders for logged in user', () => {
        const root = create(data.componentWithData({}));
        expect(root).toMatchSnapshot();
      });
    }
  );

  storyOf(
    'Logged Out',
    {
      componentWithData(user: Corpix.User) {
        return <HomeView user={user} />;
      }
    },
    data => {
      it('renders for logged out user', () => {
        const root = create(data.componentWithData(null));
        expect(root).toMatchSnapshot();
      });
    }
  );
})


