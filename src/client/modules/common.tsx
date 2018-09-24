import * as React from 'react';
import { QueryResult } from 'react-apollo';
import { List, Loader, Message } from 'semantic-ui-react';
import { context } from '../config/context';

export function renderResult(
  result: QueryResult<any, any>,
  Component: () => JSX.Element
): JSX.Element {
  if (result.loading) {
    return (
      <div>
        <Loader inline size="tiny" active={true} />
        &nbsp;
        {context.i18n` Loading ...`}
      </div>
    );
  }
  if (result.error) {
    return (
      <div>
        {result.error.graphQLErrors &&
          result.error.graphQLErrors.length && (
            <Message
              error={true}
              header="👾 Unexpected Error. We apologise for any inconvenience. Please contact your admins with the message below."
              content={
                <List>
                  {result.error.graphQLErrors.map((e, i) => (
                    <List.Item key={i}>{e.message}</List.Item>
                  ))}
                </List>
              }
            />
          )}
        {result.error.networkError && (
          <Message
            error={true}
            header="Network Error"
            content={JSON.stringify(result.error.networkError)}
          />
        )}
      </div>
    );
  }
  return Component();
}