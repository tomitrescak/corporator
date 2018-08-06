import * as books from '../../graphql/schema/books.graphql';
import * as query from '../../graphql/schema/query.graphql';

export const typeDefs = () => [books, query];
