// import * as jwt from 'jsonwebtoken';

// import { Prisma as Types } from '../../prisma';
export * from '../generated/prisma';

export { Yoga } from '../yoga';

import { GraphQLResolveInfo } from 'graphql';

import { LanguageCode, Prisma, User } from '../generated/prisma';
import { Mutation as PrismaMutation, Query as PrismaQuery } from '../generated/yoga';

// import { Prisma, User } from '../../generated/prisma';

export type FirstArgument<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : any;
// type SecondArgument<T> = T extends (arg1: any, arg2: infer U, ...args: any[]) => any ? U : any;

export type Remapped<T> = {
  [P in keyof T]: (
    parent: null | undefined,
    args: FirstArgument<T[P]>,
    ctx: Context,
    info?: GraphQLResolveInfo
  ) => any
};

export type Query = Partial<Remapped<PrismaQuery>>;
export type Mutation = Partial<Remapped<PrismaMutation>>;

// export type Query = Remap<PrismaQuery>;
// export type Mutation = Remap<PrismaMutation>;

declare global {
  type ServerContext = Context;
}

export interface Context {
  db: Prisma;
  request: any;
  userId: string;
  user: User;
  session: {
    language: LanguageCode;
  };
}

export type Resolver<T> = {
  [index: string]: {
    //  [U in keyof Partial<typeof Types>]: {
    [P in keyof Partial<T>]: (parent: T, args: any, ctx: Context, info: GraphQLResolveInfo) => any
  };
};

export function getUserId(ctx: Context): string {
  // const Authorization = ctx.request.get('Authorization');
  // if (Authorization) {
  //   const token = Authorization.replace('Bearer ', '');
  //   const { userId } = jwt.verify(token, process.env.APP_SECRET) as { userId: string };
  //   return userId;
  // }

  // try session
  if (ctx.userId) {
    return ctx.userId;
  }

  throw new AuthError();
}

export async function getUser(ctx: Context): Promise<User> {
  // const Authorization = ctx.request.get('Authorization');
  // if (Authorization) {
  //   const token = Authorization.replace('Bearer ', '');
  //   const { userId } = jwt.verify(token, process.env.APP_SECRET) as { userId: string };
  //   return userId;
  // }

  if (ctx.user) {
    return ctx.user;
  }

  if (ctx.userId) {
    const user = await ctx.db.query.user({ where: { id: ctx.userId } });

    if (user) {
      // try session
      ctx.user = user;
      return user;
    }
  }

  throw new AuthError();
}

type ParentResolver = {
  Query: object;
  Mutation: object;
};

type EntityResolver = {
  query?: object;
  mutation?: object;
  resolver?: object;
};

export function addResolver(parent: ParentResolver, resolver: EntityResolver) {
  if (resolver.query) {
    // tslint:disable-next-line:prefer-object-spread
    parent.Query = { ...parent.Query, ...resolver.query };
  }
  if (resolver.mutation) {
    parent.Mutation = { ...parent.Mutation, ...resolver.mutation };
  }
  if (resolver.resolver) {
    parent = { ...parent, ...resolver.resolver };
  }
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized');
  }
}
