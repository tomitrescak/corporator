// import * as jwt from 'jsonwebtoken';
import { Mutation as PrismaMutation, Query as PrismaQuery } from '../generated/api';
import { Prisma, User } from '../generated/prisma';

type FirstArgument<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : any;
// type SecondArgument<T> = T extends (arg1: any, arg2: infer U, ...args: any[]) => any ? U : any;

export type Remapped<T> = {
  [P in keyof T]: (parent: any, args: FirstArgument<T[P]>, ctx: Context, info: any) => any
};

export type Query = Partial<Remapped<PrismaQuery>>;
export type Mutation = Partial<Remapped<PrismaMutation>>;

// export type Query = Remap<PrismaQuery>;
// export type Mutation = Remap<PrismaMutation>;

export interface Context {
  db: Prisma;
  request: any;
  session: {
    user: User;
  };
}

export interface Resolver {
  [index: string]: <T>(parent: any, args: T, ctx: Context, info: any) => any;
}

export function getUserId(ctx: Context): string {
  // const Authorization = ctx.request.get('Authorization');
  // if (Authorization) {
  //   const token = Authorization.replace('Bearer ', '');
  //   const { userId } = jwt.verify(token, process.env.APP_SECRET) as { userId: string };
  //   return userId;
  // }

  // try session
  if (ctx.session.user) {
    return ctx.session.user.id;
  }

  throw new AuthError();
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized');
  }
}
