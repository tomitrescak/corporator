import * as React from 'react';

import { inject, observer } from 'mobx-react';

import RESUME = require('data/client/resume_mutation.graphql');
import { Yoga } from 'data/yoga';
import { Dropdown } from 'semantic-ui-react';

type Props = {
  store?: App.Store;
  token: string;
};

@inject('store')
@observer
export class LogoutMenu extends React.Component<Props> {
  componentDidMount() {
    if (this.props.token) {
      this.props.store.client
        .mutate<{ resume: Yoga.AuthPayload }, { token: string }>({
          mutation: RESUME,
          variables: {
            token: this.props.token
          }
        })
        .then(({ data: { resume: { user, token } } }) => {
          this.props.store.setUser(user);
          localStorage.setItem('corpix.token', token);
        });
    }
  }

  logout() {
    this.props.store.logout();
  }

  render() {
    if (!this.props.store.userId) {
      return null;
    }
    return (
      <Dropdown item text={this.props.store.user.name}>
        <Dropdown.Item icon="logout" onClick={this.logout}>
          Logout
        </Dropdown.Item>
        {this.props.children}
      </Dropdown>
    );
  }
}
