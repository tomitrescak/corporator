import { userFragment } from 'data/users/server/user_resolver';
import { Loader, Prisma } from 'data/utils';

export type CacheType = {
  user: Loader<Prisma.User>;
};

export const cache = (dbf: Prisma.Prisma) => {
  return {
    user: new Loader<Prisma.User>(dbf, 'user', 'users', userFragment)
  };
};
