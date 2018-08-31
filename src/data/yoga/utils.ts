// import * as jwt from 'jsonwebtoken';

// import { Prisma as Types } from '../../prisma';
export * from '../generated/prisma';

export { Yoga } from '../yoga';

import { GraphQLResolveInfo } from 'graphql';

import { Prisma } from 'data/generated/prisma';
import { Mutation as PrismaMutation, Query as PrismaQuery, User } from 'data/generated/yoga';
import { cache } from 'server/index';
import { Localisation } from './resolvers/localisation_resolver';

export { default as gql } from 'graphql-tag';

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
  cache: typeof cache;
  i18n: Localisation;
  user: User;
}

type ResolverFunction<T> = (parent: T, args: any, ctx: Context, info: GraphQLResolveInfo) => any;
type DirectResolver<T> = {
  [index: string]: {
    //  [U in keyof Partial<typeof Types>]: {
    [P in keyof Partial<T>]: ResolverFunction<T>
  };
};
type FragmentedResolver<T> = {
  [index: string]: {
    //  [U in keyof Partial<typeof Types>]: {
    [P in keyof Partial<T>]: {
      fragment: string;
      resolve: ResolverFunction<T>;
    }
  };
};
export type Resolver<T> = DirectResolver<T> | FragmentedResolver<T>;

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
    Object.assign(parent, resolver.resolver);
  }
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized');
  }
}

export function purge<T>(params: T): T {
  for (let key of Object.getOwnPropertyNames(params)) {
    if (!(params as any)[key]) {
      delete (params as any)[key];
    }
  }
  return params;
}
