import { Context, Mutation, Query, Yoga } from '../utils';

import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Loader } from './loader';

const userLoader = new Loader<string, Yoga.User>('user', 'users');

if (!process.env.JWT_SECRET) {
  process.env.JWT_SECRET = 'QWERTY%$#@!12345';
}

export function authenticate(context: ServerContext) {
  const authHeader = context.request.headers.authorization;
  if (!authHeader || !authHeader.match(/Bearer /)) {
    return;
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as any;
    context.userId = decoded.userId;
  } catch (ex) {
    throw new Error('Invalid token');
  }
}

export const mutation: Mutation = {
  // async signup(_, args, ctx) {
  //   const password = await bcrypt.hash(args.password, 10);
  //   const user = await ctx.db.mutation.createUser({
  //     data: { password, uid: args.name, description: '', name:  }
  //   });

  //   return {
  //     token: jwt.sign({ userId: user.id }, process.env.JWT_SECRET),
  //     user
  //   };
  // },

  async login(_, { input: { user, password } }, ctx) {
    const userDb = await ctx.db.query.user({ where: { uid: user } });
    if (!userDb) {
      throw new Error(`AUTHENTICATION ERROR`);
    }

    const valid = await bcrypt.compare(password, userDb.password);
    if (!valid) {
      throw new Error('AUTHENTICATION ERROR');
    }

    return {
      token: jwt.sign({ userId: userDb.id }, process.env.JWT_SECRET),
      user: userDb
    };
  }
};

export const query: Query = {
  async resume(_, args, ctx) {
    let userId = '';
    try {
      const decoded = jwt.verify(args.token, process.env.JWT_SECRET) as any;
      userId = decoded.userId;
    } catch (ex) {
      throw new Error('Invalid token');
    }
    const user = await userLoader.findById(ctx.db, userId);
    if (!user) {
      throw new Error('User does not exist');
    }

    return {
      token: jwt.sign({ userId: user.id }, process.env.JWT_SECRET),
      user
    };
  }
};

/* =========================================================
    FIXTURES
   ======================================================== */

export async function fixtures(context: Context): Promise<string> {
  const hasUsers = await userLoader.exists(context.db);
  if (!hasUsers) {
    // tslint:disable-next-line:no-console
    console.log('Fixtures users');

    const password = await bcrypt.hash('1234567', 10);

    const user = await context.db.mutation.createUser({
      data: {
        name: 'Tomas Trescak',
        uid: '30031005',
        roles: {
          set: ['admin']
        },
        password
      }
    });

    return user.id;
  }

  return null;
}
