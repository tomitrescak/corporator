export class AccessCondition {
  organisationId: string;
  roleId: string;
  userId: string;
  precondition: string;
  postcondition: string;
}

export class Access {
  createdById: string;
  createdOn: Date;
  modifiedById: string;
  modifiedOn: Date;
  read: AccessCondition[];
  write: AccessCondition[];
  execute: AccessCondition[];

  constructor(access: Corpix.Collections.AccessDao) {
    this.createdById = access.createdById;
    this.createdOn = access.createdOn;
    this.modifiedById = access.modifiedById;
    this.modifiedOn = access.modifiedOn;
  }
}
