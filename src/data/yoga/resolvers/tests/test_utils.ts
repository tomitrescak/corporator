import { LanguageCode, Prisma, User } from '../../../generated/prisma';
import { Context } from '../../utils';

export { create } from './create';

let db: Prisma;
let context: Context;

interface Options {
  user?: Partial<User>;
  language?: LanguageCode;
  clear?: string[];
  create?: any;
}

export async function its(
  name: string,
  options: Options = { language: 'EN' },
  impl: (context: Context, user?: User) => void
) {
  // init db
  if (!db) {
    db = new Prisma({
      endpoint: 'http://localhost:4466',
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
      user: null,
      i18n: null,
      cache: null
    };
  }

  // call the original it
  it(name, async () => {
    if (options.clear) {
      for (let key of options.clear) {
        const keyName = key[0].toLowerCase() + key.substring(1);

        const records = await (db.query as any)[keyName + 's']({});
        if (records && records.length) {
          for (let record of records) {
            await (db.mutation as any)['delete' + key]({ where: { id: record.id } });
          }
        }
      }
    }

    // if (options.user) {
    //   const users = await db.query.users({});
    //   if (users && users.length) {
    //     for (let user of users) {
    //       db.mutation.deleteUser({ where: { id: user.id } });
    //     }
    //   }
    //   context.user = await create.user(context, options.user);
    //   context.userId = context.user.id;
    // }

    return impl(context);
  });
}
