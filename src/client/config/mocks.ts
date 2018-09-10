// other option: https://github.com/MadRabbit/graphql-mock
import { SchemaLink } from 'apollo-link-schema';
import { typeDefs } from 'data/generated/type_defs';
import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';

const schema = makeExecutableSchema({ typeDefs });
const mocks = {
  Query: () => ({
    books: () => [{ title: 'Book1 ', author: 'Tomas' }, { title: 'Book 2', author: 'Valeria' }]
  })
};
addMockFunctionsToSchema({ mocks, schema });
export const schemaLink = new SchemaLink({ schema });
