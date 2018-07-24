import { Prisma } from '../data/prisma';

export interface Context {
  db: Prisma;
  request: any;
}
