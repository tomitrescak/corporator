import * as React from 'react';

import { QueryTypes } from 'data/client';

import { inject, observer } from 'mobx-react';
import { Query } from 'react-apollo';
import { Divider, Dropdown, Icon, Loader, Menu } from 'semantic-ui-react';

import RESUME = require('data/users/client/resume_query.graphql');

/* ========================================================= 
    QUERY
   ======================================================== */

export class ResumeQuery extends Query<QueryTypes.Resume, QueryTypes.ResumeVariables> {
  static displayName = 'ResumeQuery';
}

/* =========================================================
    COMPONENT
   ======================================================== */

type Props = {
  store?: App.Store;
  token: string;
};

@inject('store')
@observer
export class LogoutMenu extends React.Component<Props> {
  logout = () => {
    this.props.store.logout();
  };

  onCompleted = (data: QueryTypes.Resume | {}) => {
    this.props.store.setUser((data as QueryTypes.Resume).resume.user);
  };

  onError = () => {
    if (process.env.NODE_ENV !== 'development') {
      this.props.store.logout();
    }
  };

  render() {
    if (!this.props.store.userId) {
      return null;
    }
    return (
      <ResumeQuery
        query={RESUME}
        variables={{ token: this.props.token }}
        onCompleted={this.onCompleted}
        onError={this.onError}
      >
        {({ loading, error, data }) => {
          /* == ERROR == */
          if (error) {
            return null;
          }
          /* == LOADING == */
          if (loading || !data) {
            return (
              <Menu.Item>
                <Loader active inline size="mini" />
              </Menu.Item>
            );
          }

          if (!data.resume.token) {
            return null;
          }

          return (
            <Dropdown
              item
              trigger={
                <span>
                  <Icon name="user" />
                  {data.resume.user.name}
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
        }}
      </ResumeQuery>
    );
  }
}
