// import * as session from 'express-session';

import { importSchema } from 'graphql-import';
import { GraphQLServer } from 'graphql-yoga';
import { Server as HttpServer } from 'http';

import { Localisation } from 'data/localisations/server/localisation_resolver';
import { Prisma } from 'data/prisma';
import { fragmentReplacements, resolvers } from 'data/resolvers';
import { authenticate } from 'data/users/server/user_resolver';
import { getUser, getUserId } from 'data/utils';
import { cache } from './cache';

const express = require('express');
const historyAPIFallback = require('connect-history-api-fallback');

require('dotenv').config({});

// opts for cors
// const opts = {
//   port: 4000,
//   cors: {
//     credentials: true,
//     origin: ['http://localhost:3000'] // your frontend url.
//   }
// };

/* =========================================================
    CACHE
   ======================================================== */

// tslint:disable-next-line:no-console
console.log('Connecting to: ' + process.env.ENDPOINT);

let db: Prisma.Prisma = new Prisma.Prisma({
  fragmentReplacements,
  endpoint: process.env.ENDPOINT
  // debug: true
  // secret: 'my_secret123', // only needed if specified in `database/prisma.yml`
});

export const i18n = {
  EN: new Localisation(() => db, 'EN')
};

/* =========================================================
    SERVER
   ======================================================== */

async function initContext(req: any) {
  const userId = authenticate(req.request);

  const result: ServerContext = {
    ...req,
    req: req.request,
    db,
    cache: cache(db),
    i18n: i18n.EN, // add more languages if needed
    userId,
    getUserId: () => getUserId(userId),
    getUser: () => getUser(result)
  };

  return result;
}

export const server = new GraphQLServer({
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

export async function start(port = 3000) {
  appServer = (await server.start({
    port,
    endpoint: '/graphql',
    playground: '/graphiql'
  })) as HttpServer;

  server.express.use(historyAPIFallback());
  server.express.use('/', express.static('dist'));

  // tslint:disable-next-line:no-console
  console.log(`Server is running on http://localhost:${port}`);

  return {
    server,
    appServer
  };
}
