import * as React from 'react';

import { inject, observer } from 'mobx-react';
import { Header, Segment } from 'semantic-ui-react';
import styled from 'styled-components';

import { MainLayout } from '../core/main_layout';
import { LoginContainer } from '../login/login_container';

const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

declare global {
  interface PageProps {
    path?: string;
  }
}

export const HomeLayout: React.SFC<PageProps> = () => (
  <MainLayout>
    <HomeView />
  </MainLayout>
);

type Props = {
  store?: App.Store;
  path?: string;
};

const LoginSegment = styled(Segment)`
  width: 450px;
  margin: auto;
`;

export const HomeViewAuth = () => <div>Authorised!</div>;

HomeViewAuth.displayName = 'HomeViewAuth';

export const HomeViewAnonymous = () => (
  <Centered>
    <div style={{ width: '400px' }}>
      <LoginSegment secondary>
        <Header icon="lock" content="Login to CORPIX" dividing />
        <LoginContainer />
      </LoginSegment>
    </div>
  </Centered>
);

HomeViewAnonymous.displayName = 'HomeViewAnonymous';

export const HomeView: React.SFC<Props> = ({ store }) => (
  <>
    <Choose>
      <When condition={!store.userId}>
        <HomeViewAnonymous />
      </When>
      <Otherwise>
        <HomeViewAuth />
      </Otherwise>
    </Choose>
  </>
);

HomeView.displayName = 'HomeView';

export const HomeContainer = inject('store')(observer(HomeView));
