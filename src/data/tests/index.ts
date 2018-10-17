import { ApolloFetch, createApolloFetch } from 'apollo-fetch';

import { fragmentReplacements } from 'data/resolvers';
import { Prisma } from 'data/utils';
import { cache } from 'server/cache';
import { create } from './create_data';

export { create } from './create_data';

type Helpers = {
  ctx: ServerContext;
  user?: Prisma.User;
  fetch: ApolloFetch;
};

type HelperContext = ServerContext & Helpers;

let db: Prisma.Prisma;
let context: HelperContext;

type TestUser = {
  name: string;
  roles?: string[];
  uid?: string;
  password?: string;
};

interface Options {
  user?: TestUser;
  roles?: string[];
  language?: Prisma.LanguageCode;
  clear?: string[];
  create?: any;
  db?: Prisma.Prisma;
}

async function clear(options: Options) {
  if (options.clear) {
    for (let key of options.clear) {
      const pluralKey = 'deleteMany' + (key + (key[key.length - 1] === 's' ? 'es' : 's'));
      try {
        await (db.mutation as any)[pluralKey]({});
      } catch (ex) {
        // tslint:disable-next-line:no-console
        console.log('Mutation does not exist: ' + pluralKey);
        throw ex;
      }
    }
  }
}

export async function its(
  name: string,
  options: Options = { language: 'EN' },
  impl: (context: HelperContext) => void
) {
  // init db
  if (!db) {
    // console.log('Starting Prisma ...');
    // console.log(fragmentReplacements);
    db = new Prisma.Prisma({
      fragmentReplacements,
      endpoint: 'http://localhost:4466/test',
      debug: true
      // secret: 'my_secret123', // only needed if specified in `database/prisma.yml`
    });
  }

  // init context
  if (!context) {
    context = {
      db,
      request: {},
      response: {},
      userId: null,
      user: null,
      i18n: null,
      ctx: null,
      fetch: createApolloFetch({
        uri: 'http://localhost:4000'
      }),
      cache: cache(db)
    };
    context.ctx = context;
  }

  // call the original it
  it(name, async () => {
    await clear(options);

    let user: Prisma.User;

    if (options.roles) {
      for (let role of options.roles) {
        await context.db.mutation.createRole({ data: { name: role } });
      }
    }

    if (options.user) {
      await db.mutation.deleteManyUsers({});

      // create roles
      // const roles: Prisma.Role[] = [];
      // if (options.user.roles) {
      //   for (let role of options.user.roles) {
      //     let dbRoles = await context.db.query.roles({ where: { name: role } });
      //     if (dbRoles.length === 0) {
      //       let dbRole = await context.db.mutation.createRole({ data: { name: role } });
      //       roles.push(dbRole);
      //     } else {
      //       roles.push(dbRoles[0]);
      //     }
      //   }
      // }

      const userCreate: Prisma.UserCreateInput = {
        name: options.user.name,
        uid: options.user.uid || '1234000',
        password: options.user.password || '123',
        roles: {
          set: options.roles
        }
      };

      user = await create.userMutation(userCreate);

      context.getUser = () => user as any;
      context.userId = user.id;
      context.user = user;
    }

    const result = await impl(context);
    await clear(options);

    return result;
  });
}
