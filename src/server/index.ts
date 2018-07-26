import * as session from 'express-session';

import { importSchema } from 'graphql-import';
import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from '../data/generated/prisma';

import { resolvers } from 'data/yoga/resolvers';

// opts for cors
// const opts = {
//   port: 4000,
//   cors: {
//     credentials: true,
//     origin: ['http://localhost:3000'] // your frontend url.
//   }
// };

// // manipulate context
// const context = (req: any) => ({
//   req: req.request
// });

const server = new GraphQLServer({
  typeDefs: importSchema('./src/data/yoga/schema.graphql'),
  resolvers,
  // resolverValidationOptions: {
  //   requireResolversForResolveType: false
  // },
  context: (req: any) => {
    const result: any = {
      ...req,
      req: req.request,
      db: new Prisma({
        endpoint: 'http://localhost:4466',
        debug: true
        // secret: 'my_secret123', // only needed if specified in `database/prisma.yml`
      })
    };

    // temporarily hard code user and language
    req.request.session.user = {
      id: '1'
    };
    req.request.session.language = 'EN';

    return result;
  }
});

// use session to maintain logged in state
server.express.use(
  session({
    name: 'qid',
    secret: `My%123#random^secret`, // TODO: Move to env
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1 * 24 * 60 * 60 * 1000 // 1 day
    }
  })
);

// tslint:disable-next-line:no-console
server.start(() => console.log('Server is running on http://localhost:4000'));
