import * as React from 'react';

import { Router } from '@reach/router';
import { setStatefulModules } from 'fuse-box/modules/fuse-hmr';
import { Provider } from 'mobx-react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';

import { client } from 'client/config/apollo';
import { context } from 'client/config/context';
import { HeaderContainer } from 'client/modules/headers/header_view';
import { HomeContainer } from 'client/modules/home/home_view';
import { NotificationsContainer } from 'client/modules/notifications/notifications_view';

import { appStore } from 'client/stores/app_store';

import { ProcessContainer } from 'client/modules/process/definition/containers/process_container';
import { ProcessListContainer } from 'client/modules/process/definition/containers/process_list_container';
import { ProcessInstanceContainer } from 'client/modules/process/instance/containers/process_instance_container';
import { ProcessInstanceListContainer } from 'client/modules/process/instance/containers/process_instance_list_container';
import { QueryTypes } from 'data/client';
import './style.css';

render(
  <ApolloProvider client={client()}>
    <Provider store={appStore} context={context}>
      <>
        <Router>
          <HeaderContainer path="/*" />
        </Router>
        <div>
          {/* style={{ paddingLeft: '150px' }} */}
          <Router id="pageContent">
            <HomeContainer path="/" />
            <ProcessContainer path="/process/:name/preview/:contentType/:resourceName/:sourceId/:resourceId" />
            <ProcessContainer path="/process/:name/preview/:contentType/:sourceId" />
            <ProcessInstanceContainer path="/process/:name/view/:contentType/:resourceName/:sourceId/:resourceId" />
            <ProcessInstanceContainer path="/process/:name/view/:contentType/:sourceId" />
            <NotificationsContainer path="/notifications" />
            <ProcessListContainer path="/process/create" />
            <ProcessInstanceListContainer
              path="/process/running"
              header={context.i18n`Running Processes`}
              icon="tasks"
              status={QueryTypes.BpmnProcessInstanceStatus.Running}
              description={context.i18n`List and control your running processes`}
            />
            <ProcessInstanceListContainer
              path="/process/finished"
              header={context.i18n`Finished Processes`}
              icon="tasks"
              status={QueryTypes.BpmnProcessInstanceStatus.Finished}
              description={context.i18n`List your finished processes`}
            />
            <ProcessInstanceListContainer
              path="/process/all"
              header={context.i18n`Processes`}
              icon="tasks"
              description={context.i18n`List and control your processes`}
            />
          </Router>
        </div>
      </>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

// set stateful modules
if (process.env.NODE_ENV !== 'production') {
  setStatefulModules(name => {
    return name.match(/store|context|apollo/) != null;
  });
}
