import * as React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

import styled from 'styled-components';
import { requiredValidator } from '../form/models/validation';
import { FormInput, InputView } from '../form/views/input_view';
import { LoginStore } from './login_store';

interface Props {
  store: typeof LoginStore.Type;
}

const CentredButton = styled(Button)`
  margin: 'auto';
`;

export const LoginView = ({ store }: Props) => (
  <Form>
    <Segment>
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
        <span style={{ position: 'absolute', right: '20px', marginTop: '6px' }}>
          Forgot Password?
        </span>
      </div>
    </Segment>
  </Form>
);
