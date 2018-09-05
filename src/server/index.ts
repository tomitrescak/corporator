// import * as session from 'express-session';

import { importSchema } from 'graphql-import';
import { GraphQLServer } from 'graphql-yoga';
import { Server as HttpServer } from 'http';

import {
  loadDefaultLocalisations,
  Localisation
} from 'data/localisations/server/localisation_resolver';
import { Prisma } from 'data/prisma';
import { fragmentReplacements, resolvers } from 'data/resolvers';
import { authenticate } from 'data/users/server/user_resolver';
import { getUser, getUserId, Loader, Yoga } from 'data/utils';

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
    fragmentReplacements,
    endpoint: 'http://localhost:4466'
    // debug: true
    // secret: 'my_secret123', // only needed if specified in `database/prisma.yml`
  });

  const userId = authenticate(req.request);
  let user: Yoga.User;

  const result: ServerContext = {
    ...req,
    req: req.request,
    db,
    cache,
    i18n: i18n.EN, // add more languages if needed
    get userId() {
      return userId || getUserId(userId);
    },
    async user() {
      return user || (user = await getUser(result));
    }
  };

  // proceed with authentication

  // load default localisations
  await loadDefaultLocalisations(result);

  // load fixtures
  // await fixtures(result);

  return result;
}

const server = new GraphQLServer({
  typeDefs: importSchema('./src/data/yoga.graphql'),
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

let appServer: HttpServer;

async function start() {
  appServer = (await server.start()) as HttpServer;
  // tslint:disable-next-line:no-console
  console.log('Server is running on http://localhost:4000');
}

start();

/* =========================================================
    FUSEBOX
   ======================================================== */

function wait(time = 5) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

export async function shutdown() {
  // Fuse box is quite quick so sometimes shutdown will be called before the server finished initializing
  // spinWait hopefully stops this race condition
  const spinWait = async () => {
    for (let i = 0; i < 5; i++) {
      if (server != null && appServer.listening) {
        return;
      }
      await wait();
    }
    throw new Error(`Wait timed out.`);
  };
  await spinWait();
  await new Promise(resolve => {
    if (server != null) {
      appServer.close(resolve);
    }
  });
  appServer = undefined;
}
