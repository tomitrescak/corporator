import { Prisma } from 'data/utils';

import { create } from './data';

export { create } from './data';

let db: Prisma.Prisma;
let context: ServerContext;

interface Options {
  user?: Partial<Prisma.User>;
  language?: Prisma.LanguageCode;
  clear?: string[];
  create?: any;
}

export async function its(
  name: string,
  options: Options = { language: 'EN' },
  impl: (context: ServerContext, user?: Prisma.User) => void
) {
  // init db
  if (!db) {
    db = new Prisma.Prisma({
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
      userId: null,
      i18n: null,
      cache: null
    };
  }

  // call the original it
  it(name, async () => {
    if (options.clear) {
      for (let key of options.clear) {
        const keyName = key[0].toLowerCase() + key.substring(1);

        const records = await (db.query as any)[
          keyName + (keyName[keyName.length - 1] === 's' ? 'es' : 's')
        ]({});
        if (records && records.length) {
          for (let record of records) {
            await (db.mutation as any)['delete' + key]({ where: { id: record.id } });
          }
        }
      }
    }

    if (options.user) {
      const users = await db.query.users({});
      if (users && users.length) {
        for (let user of users) {
          db.mutation.deleteUser({ where: { id: user.id } });
        }
      }

      const user = await create.user(context, options.user);

      context.getUser = async () => user;
      context.userId = user.id;
    }

    return impl(context);
  });
}