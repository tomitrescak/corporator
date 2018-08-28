import * as React from 'react';

import { inject, observer } from 'mobx-react';

import RESUME = require('data/client/resume_mutation.graphql');
import { Yoga } from 'data/yoga';
import { Divider, Dropdown, Icon, Loader, Menu } from 'semantic-ui-react';

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
          this.props.store.localStorage.token = token;
        })
        .catch(() => {
          if (process.env.NODE_ENV === 'production') {
            this.props.store.logout();
          }
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
    if (!this.props.store.user) {
      return (
        <Menu.Item>
          <Loader active inline size="mini" />
        </Menu.Item>
      );
    }
    return (
      <Dropdown
        item
        trigger={
          <span>
            <Icon name="user" />
            {this.props.store.user.name}
          </span>
        }
      >
        <Dropdown.Menu>
          {this.props.children}
          <Divider />
          <Dropdown.Item
            icon="sign out"
            onClick={this.logout}
            content={this.props.store.i18n`Logout`}
          />
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
