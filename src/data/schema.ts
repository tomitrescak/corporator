// for typescript types generation only
import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = importSchema('./src/data/yoga/schema.graphql');
const schema = makeExecutableSchema({
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  typeDefs: typeDefs
});

module.exports = schema;