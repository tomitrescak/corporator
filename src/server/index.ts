// import * as session from 'express-session';
import { GraphQLServer } from 'graphql-yoga';
import { Server as HttpServer } from 'http';

import { start } from './prisma';

let server: GraphQLServer;
let appServer: HttpServer;

async function startApp() {
  let result = await start();
  server = result.server;
  appServer = result.appServer;
}

startApp();

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
}
