import * as React from 'react';

import { setStatefulModules } from 'fuse-box/modules/fuse-hmr';
import { Provider } from 'mobx-react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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

const getConfirmation = async (_message: string, callback: Function) => {
  const result = await context.Ui.confirmDialogAsync(
    context.i18n`If you change the current page, all your changes will be lost.`,
    context.i18n`You have unsaved changes!`,
    context.i18n`Change Page`
  );
  callback(result);
};

render(
  <ApolloProvider client={client()}>
    <Provider store={appStore} context={context}>
      <>
        <Router getUserConfirmation={getConfirmation}>
          <>
            <Route path="/" component={HeaderContainer} />

            {/* style={{ paddingLeft: '150px' }} */}
            <div id="pageContent">
              <Route path="/" exact component={HomeContainer} />
              <Route
                path="/process/:name/preview/:contentType/:resourceName/:sourceId/:resourceId"
                component={ProcessContainer}
              />
              <Route
                path="/process/:name/preview/:contentType/:sourceId"
                component={ProcessContainer}
              />
              <Route
                exact
                path="/process/:name/view/:contentType/:resourceName/:sourceId/:resourceId"
                component={ProcessInstanceContainer}
              />
              <Route
                exact
                path="/process/:name/view/:contentType/:sourceId"
                component={ProcessInstanceContainer}
              />
              <Route path="/notifications" component={NotificationsContainer} />
              <Route path="/process/create" component={ProcessListContainer} />
              <Route
                path="/process/running"
                component={(props: any) => (
                  <ProcessInstanceListContainer
                    {...props}
                    header={context.i18n`Running Processes`}
                    icon="tasks"
                    status={QueryTypes.BpmnProcessInstanceStatus.Running}
                    description={context.i18n`List and control your running processes`}
                  />
                )}
              />
              <Route
                path="/process/finished"
                component={(props: any) => (
                  <ProcessInstanceListContainer
                    {...props}
                    header={context.i18n`Finished Processes`}
                    icon="tasks"
                    status={QueryTypes.BpmnProcessInstanceStatus.Finished}
                    description={context.i18n`List your finished processes`}
                  />
                )}
              />
              <Route
                path="/process/all"
                component={(props: any) => (
                  <ProcessInstanceListContainer
                    {...props}
                    path=""
                    header={context.i18n`Processes`}
                    icon="tasks"
                    description={context.i18n`List and control your processes`}
                  />
                )}
              />
            </div>
          </>
        </Router>
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
