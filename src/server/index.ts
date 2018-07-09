import { importSchema } from 'graphql-import';
import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from '../data/generated/prisma';
import { Context } from './context';

const resolvers: any = {
  Query: {
    user(_parent: any, { id }, context: Context, info: any) {
      return context.db.query.user({ where: { id } }, info);
    },
    authenticate(parent, args, context: Context, info): any {
      return null;
    }
    // drafts(parent, args, context: Context, info) {
    //   return context.db.query.posts({ where: { isPublished: false } }, info)
    // },
    // post(parent, { id }, context: Context, info) {
    //   return context.db.query.post({ where: { id: id } }, info)
    // },
  },
  Mutation: {
    signup(parent, args, context: Context, info): any {
      return null;
    }
    // deletePost(parent, { id }, context: Context, info) {
    //   return context.db.mutation.deletePost({ where: { id } }, info)
    // },
    // publish(parent, { id }, context: Context, info) {
    //   return context.db.mutation.updatePost(
    //     {
    //       where: { id },
    //       data: { isPublished: true },
    //     },
    //     info,
    //   )
    // },
  }
};

const server = new GraphQLServer({
  typeDefs: './src/data/schema.graphql',
  resolvers,
  resolverValidationOptions: {
    requireResolversForResolveType: false
  },
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: 'http://localhost:4466', // the endpoint of the Prisma API
      debug: true // log all GraphQL queries & mutations sent to the Prisma API
      // secret: 'mysecret123', // only needed if specified in `database/prisma.yml`
    })
  })
});

server.start(() => console.log('Server is running on http://localhost:4000'));
