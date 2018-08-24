import * as React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

import styled from 'styled-components';
import { requiredValidator } from '../form/models/validation';
import { FormInput, InputView } from '../form/views/input_view';
import { LoginStore } from './login_store';

interface Props {
  store?: typeof LoginStore.Type;
}

const CentredButton = styled(Button)`
  margin: 'auto';
`;

const ForgotLink = styled.a`
  position: absolute !important;
  right: 20px;
  margin-top: 6px;
`;

export const LoginButton = () => {
  let input;

  return (
    <Mutation mutation={ADD_TODO}>
      {(addTodo, { data }) => (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              addTodo({ variables: { type: input.value } });
              input.value = '';
            }}
          >
            <input
              ref={node => {
                input = node;
              }}
            />
            <button type="submit">Add Todo</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};

export const LoginView = ({ store }: Props) => (
  <Form>
    <FormInput
      owner={store}
      label="User"
      name="user"
      icon="user"
      placeholder="Your Staff ID"
      fluid
      autoComplete="username"
      validators={[requiredValidator]}
    />
    <FormInput
      owner={store}
      label="Password"
      name="password"
      icon="lock"
      fluid
      autoComplete="current-password"
      type="password"
      validators={[requiredValidator]}
      placeholder="Your Password"
    />

    <div style={{ textAlign: 'center' }}>
      <CentredButton content="Login" primary icon="thumbs up" />
      <ForgotLink
        href="https://www.westernsydney.edu.au/information_technology_services/its/servicedesk/password_expiry_faq"
        target="_blank"
      >
        Forgot Password?
      </ForgotLink>
    </div>
  </Form>
);
