import * as React from 'react';
import * as wait from 'waait';

import { MockedProvider } from 'react-apollo/test-utils';
import { create } from 'react-test-renderer';

import { createData } from 'shared/test_data';
import { ProcessListContainer, QUERY } from '../process_list_container';

// const client = new ApolloClient({
//   uri: 'http://localhost:4000'
// });

let client;

describe('Process', () => {
  describe('List', () => {
    storyOf(
      'Container',
      {
        componentWithData() {
          const mocks = [
            {
              request: { query: QUERY },
              result: {
                data: {
                  notifications: [createData.notification(), createData.notification()]
                }
              }
            }
          ];

          return (
            <MockedProvider mocks={mocks}>
              <ProcessListContainer />
            </MockedProvider>
          );
        }
      },
      data => {
        it('renders loading', () => {
          const root = create(data.componentWithData());
          expect(root).toMatchSnapshot();
        });

        it('renders data', async () => {
          const root = create(data.componentWithData());

          await wait(0);

          expect(root).toMatchSnapshot();
        });
      }
    );
  });
});
