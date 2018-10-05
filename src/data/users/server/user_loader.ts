import { Loader, Prisma } from 'data/utils';
import { userFragment } from './user_resolver';

export class UserLoader extends Loader<Prisma.User, Prisma.UserWhereInput> {
  static loader: UserLoader;
  static instance(db: () => Prisma.Prisma) {
    if (!UserLoader.loader) {
      UserLoader.loader = new UserLoader(db);
    }
    return UserLoader.loader;
  }
  constructor(db: () => Prisma.Prisma) {
    super(db, 'user', 'users', userFragment, id => ({ id }));
  }
}
