import * as React from 'react';

import { Mutation, MutationResult, QueryResult } from 'react-apollo';
import { Button, ButtonProps, Form } from 'semantic-ui-react';
import styled, { StyledComponentClass } from 'styled-components';

import { requiredValidator } from '../form/models/validation';
import { FormInput } from '../form/views/input_view';

import LOGIN_MUTATION = require('data/client/login.mutation.graphql');
import { Yoga } from 'data/yoga';
import { FirstArgument } from 'data/yoga/utils';

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

export const LoginButton = ({ store }: Props) => {
  return (
    <LoginMutation mutation={LOGIN_MUTATION}>
      {(login, { data, loading }) => {
        if (data) {
          store.setUser(data.login.user);
        }

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
