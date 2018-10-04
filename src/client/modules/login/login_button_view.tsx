import * as React from 'react';

import { Mutation } from 'react-apollo';
import { Button, ButtonProps } from 'semantic-ui-react';
import styled, { StyledComponentClass } from 'styled-components';

import { gql, QueryTypes } from 'data/client';
import LOGIN_MUTATION_NF = require('./queries/login_mutation.graphql');
import USER_FRAGMENT from './queries/user.fragment.graphql';

const LOGIN_MUTATION = gql`
  ${LOGIN_MUTATION_NF}
  ${USER_FRAGMENT}
`;

interface Props {
  store?: App.Store;
}

const CentredButton: StyledComponentClass<ButtonProps, {}> = styled(Button)`
  margin: 'auto';
`;

// const ForgotLink = styled.a`
//   position: absolute !important;
//   right: 20px;
//   margin-top: 6px;
// `;

class LoginMutation extends Mutation<QueryTypes.Login, QueryTypes.LoginVariables> {}

export const LoginButton = ({ store }: Props) => {
  return (
    <LoginMutation
      mutation={LOGIN_MUTATION}
      onError={() => store.login.setError(store.i18n`User or password is incorrect`)}
      onCompleted={data => {
        store.localStorage.userId = data.login.user.id;
        store.localStorage.token = data.login.token;
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
