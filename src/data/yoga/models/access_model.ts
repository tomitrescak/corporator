import { Prisma } from 'data/prisma';

interface IAccessNode {
  createdById: string;
  createdOn: Date;
  updatedById: string;
  updatedOn: Date;
  readRole: string;
  writeRole: string;
  executeRole: string;
}

export class Access {
  createdById: string;
  createdOn: Date;
  updatedById: string;
  updatedOn: Date;
  readRole: string[];
  writeRole: string[];
  executeRole: string[];

  constructor(access: IAccessNode) {
    this.createdById = access.createdById;
    this.createdOn = new Date(access.createdOn);
    this.updatedById = access.updatedById;
    this.updatedOn = new Date(access.updatedOn);
    this.readRole = access.readRole.split('|');
    this.writeRole = access.writeRole.split('|');
    this.executeRole = access.executeRole.split('|');
  }

  canRead(user: Prisma.User) {
    if (!this.readRole) {
      return true;
    }
    return this.readRole.some(role => user.roles.some(r => r.id === role));
  }

  canWrite(user: Prisma.User) {
    if (!this.writeRole) {
      return true;
    }
    return this.writeRole.some(role => user.roles.some(r => r.id === role));
  }

  canExecute(user: Prisma.User) {
    if (!this.executeRole) {
      return true;
    }
    return this.executeRole.some(role => user.roles.some(r => r.id === role));
  }
}
