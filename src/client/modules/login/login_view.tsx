import * as React from 'react';

import { Mutation } from 'react-apollo';
import { Button, ButtonProps, Form, Message } from 'semantic-ui-react';
import styled, { StyledComponentClass } from 'styled-components';

import { FormInput } from '../form/views/input_view';

import LOGIN_MUTATION = require('data/client/login_mutation.graphql');
import { Yoga } from 'data/yoga';
import { observer } from 'mobx-react';

interface Props {
  store?: App.Store;
}

const CentredButton: StyledComponentClass<ButtonProps, {}> = styled(Button)`
  margin: 'auto';
`;

const ForgotLink = styled.a`
  position: absolute !important;
  right: 20px;
  margin-top: 6px;
`;

class LoginMutation extends Mutation<{ login: Yoga.AuthPayload }, { input: Yoga.AuthInput }> {}

type ErrorViewProps = { owner: { error: string } };
export const ErrorView: React.SFC<ErrorViewProps> = observer(({ owner }) => {
  if (owner.error) {
    return <Message negative content={owner.error} />;
  }
  return null;
});

export const LoginButton = ({ store }: Props) => {
  return (
    <LoginMutation
      mutation={LOGIN_MUTATION}
      onError={() => store.login.setError(store.i18n`User or password is incorrect`)}
      onCompleted={data => {
        localStorage.setItem('corpix.token', data.login.token);
        store.setUser(data.login.user);
      }}
    >
      {(login, { loading }) => {
        return (
          <CentredButton
            content="Login"
            primary
            loading={loading}
            icon="thumbs up"
            onClick={() => {
              if (store.login.validate()) {
                login({
                  variables: { input: { user: store.login.user, password: store.login.password } }
                });
              }
            }}
          />
        );
      }}
    </LoginMutation>
  );
};

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
