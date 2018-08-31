import * as React from 'react';

import { inject, observer } from 'mobx-react';

import { HeaderAnonymous } from './header_anonymous';
import { HeaderAuthorised } from './header_authorised';

type Props = {
  store?: App.Store;
  path: string;
};

export const Header: React.SFC<Props> = ({ store }) => {
  if (store.userId) {
    return <HeaderAuthorised />;
  } else {
    return <HeaderAnonymous />;
  }
};

export const HeaderContainer = inject('store')(observer(Header));

Header.displayName = 'Header';
HeaderContainer.displayName = 'HeaderContainer';
