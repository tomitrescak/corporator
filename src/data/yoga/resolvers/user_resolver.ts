import { Mutation, Query, Resolver, User } from '../utils';

import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

export const query: Query = {};

if (!process.env.JWT_SECRET) {
  process.env.JWT_SECRET = 'QWERY%$#@!12345';
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

  async resume(_, args, ctx) {
    let userId = '';
    try {
      const decoded = jwt.verify(args.token, process.env.JWT_SECRET) as any;
      userId = decoded.userId;
    } catch (ex) {
      throw new Error('Invalid token');
    }
    const user = await ctx.db.query.user({ where: { id: userId } });
    if (!user) {
      throw new Error('User does not exist');
    }

    return {
      token: jwt.sign({ userId: user.id }, process.env.JWT_SECRET),
      user
    };
  },

  async login(_, { input: { user, password } }, ctx) {
    const userDb = await ctx.db.query.user({ where: { uid: user } });
    if (!userDb) {
      throw new Error(`No such user found for username: ${user}`);
    }

    const valid = await bcrypt.compare(password, userDb.password);
    if (!valid) {
      throw new Error('Invalid password');
    }

    return {
      token: jwt.sign({ userId: userDb.id }, process.env.JWT_SECRET),
      user: userDb
    };
  }
};
