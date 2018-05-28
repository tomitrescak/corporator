// src/components/app.jsx
import * as React from 'react';
import * as BooksQuery from '../../../graphql/queries/books.graphql';

import { graphql } from 'react-apollo';

type Response = {
  books: any[];
};

const ApolloComponentView: React.SFC<QueryData<Response>> = ({ data: { books } }) => (
  <div>{books ? books.length : 'Loading ...'}</div>
);

export const BooksContainer = graphql<{}, Response, {}>(BooksQuery)(ApolloComponentView);
