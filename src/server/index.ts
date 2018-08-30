// import * as session from 'express-session';

import { importSchema } from 'graphql-import';
import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from '../data/prisma';

import { fixtures, resolvers } from 'data/yoga/resolvers';
import { Loader } from 'data/yoga/resolvers/loader';
import { loadDefaultLocalisations, Localisation } from 'data/yoga/resolvers/localisation_resolver';
import { authenticate } from 'data/yoga/resolvers/user_resolver';

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

/* =========================================================
    CACHE
   ======================================================== */

let db: Prisma.Prisma;
let dbf = () => db;

export const i18n = {
  EN: new Localisation(dbf, 'EN')
};

export const cache = {
  user: new Loader<Prisma.User>(dbf, 'user', 'users')
};

/* =========================================================
    SERVER
   ======================================================== */

async function initContext(req: any) {
  db = new Prisma.Prisma({
    endpoint: 'http://localhost:4466'
    // debug: true
    // secret: 'my_secret123', // only needed if specified in `database/prisma.yml`
  });

  const result: ServerContext = {
    ...req,
    req: req.request,
    db,
    cache,
    i18n: i18n.EN, // add more languages if needed
    userId: null
  };

  // proceed with authentication
  authenticate(result);

  // load fixtures
  await fixtures(result);

  // load default localisations
  await loadDefaultLocalisations(result);

  return result;
}

const server = new GraphQLServer({
  typeDefs: importSchema('./src/data/yoga/schema.graphql'),
  resolvers,
  // resolverValidationOptions: {
  //   requireResolversForResolveType: false
  // },
  context: async (req: any) => {
    return initContext(req);
  }
});

// use session to maintain logged in state
// server.express.use(
//   session({
//     name: 'qid',
//     secret: `My%123#random^secret`, // TODO: Move to env
//     resave: true,
//     saveUninitialized: true,
//     cookie: {
//       secure: process.env.NODE_ENV === 'production',
//       maxAge: 1 * 24 * 60 * 60 * 1000 // 1 day
//     }
//   })
// );

// tslint:disable-next-line:no-console
server.start(() => console.log('Server is running on http://localhost:4000'));
