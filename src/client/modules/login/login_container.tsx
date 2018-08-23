import { inject } from 'mobx-react';

import { LoginView } from './login_view';

export const LoginContainer = inject(stores => ({ store: stores.store.login }))(LoginView);
