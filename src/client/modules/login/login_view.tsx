import * as React from 'react';

import { Form, Message } from 'semantic-ui-react';
import styled from 'styled-components';

import { FormInput } from '../form/views/input_view';

import { observer } from 'mobx-react';
import { LoginButton } from './login_button_view';

interface Props {
  store?: App.Store;
}

const ForgotLink = styled.a`
  position: absolute !important;
  right: 20px;
  margin-top: 6px;
`;

type ErrorViewProps = { owner: { error: string } };
export const ErrorView: React.SFC<ErrorViewProps> = observer(({ owner }) => {
  if (owner.error) {
    return <Message negative content={owner.error} />;
  }
  return null;
});

export const LoginView = ({ store }: Props) => {
  return (
    <Form>
      <ErrorView owner={store.login} />
      <FormInput
        owner={store.login}
        label="User"
        name="user"
        icon="user"
        placeholder="Your Staff ID"
        fluid
        autoComplete="username"
      />
      <FormInput
        owner={store.login}
        label="Password"
        name="password"
        icon="lock"
        fluid
        autoComplete="current-password"
        type="password"
        placeholder="Your Password"
      />

      <div style={{ textAlign: 'center' }}>
        <LoginButton store={store} />
        <ForgotLink
          href="https://www.westernsydney.edu.au/information_technology_services/its/servicedesk/password_expiry_faq"
          target="_blank"
        >
          Forgot Password?
        </ForgotLink>
      </div>
    </Form>
  );
};
