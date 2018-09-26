import * as React from 'react';

import { QueryResult } from 'react-apollo';
import { List, Loader, Message } from 'semantic-ui-react';
import styled from 'styled-components';

import { context } from '../config/context';

const LoaderHolder = styled.div`
  margin: 12px;
`;

export function renderResult(
  result: QueryResult<any, any>,
  Component: () => JSX.Element
): JSX.Element {
  if (result.loading) {
    return (
      <LoaderHolder>
        <Loader inline size="tiny" active={true} />
        &nbsp;
        {context.i18n` Loading ...`}
      </LoaderHolder>
    );
  }
  if (result.error) {
    return (
      <div>
        {/* {result.error.message && (
          <Message negative header="Error" content={<pre>{result.error.message}</pre>} />
        )} */}
        {!!result.error.graphQLErrors &&
          !!result.error.graphQLErrors.length && (
            <Message
              negative
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
            negative
            header="Network Error"
            content={JSON.stringify(result.error.networkError)}
          />
        )}
      </div>
    );
  }
  return Component();
}
