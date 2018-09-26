import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

import { Mutation, Query } from 'data/utils';

if (!process.env.JWT_SECRET) {
  process.env.JWT_SECRET = 'QWERTY%$#@!12345';
}

export function authenticate(req: any) {
  // VERSION WITH TOKENS
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.match(/Bearer /)) {
    return null;
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as any;
    return decoded.userId;
  } catch (ex) {
    throw new Error('Invalid token');
  }

  // const { token } = req.cookies;
  // if (!token) {
  //   return null;
  // }
  // try {
  //   const { userId } = jwt.verify(token, process.env.JWT_SECRET) as any;
  //   req.userId = userId;
  //   return userId;
  // } catch (ex) {
  //   throw new Error('Invalid token');
  // }
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
  async usersQuery(_, _args, ctx) {
    return ctx.cache.user.findAll();
  },

  async resume(_, args, ctx) {
    let userId = '';
    try {
      const decoded = jwt.verify(args.token, process.env.JWT_SECRET) as any;
      userId = decoded.userId;
    } catch (ex) {
      throw new Error('Invalid token');
    }
    const user = await ctx.cache.user.findById(userId);
    if (!user) {
      throw new Error('User does not exist');
    }

    return {
      token: jwt.sign({ userId: user.id }, process.env.JWT_SECRET),
      user
    };
  }
};
