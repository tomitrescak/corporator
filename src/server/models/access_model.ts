export class AccessCondition {
  organisationId: string;
  roleId: string;
  userId: string;
  precondition: string;
  postcondition: string;

  constructor(accessCondition: Corpix.Collections.AccessConditionDao) {
    this.organisationId = accessCondition.organisationId;
    this.roleId = accessCondition.roleId;
    this.userId = accessCondition.userId;
    this.precondition = accessCondition.precondition;
    this.postcondition = accessCondition.postcondition;
  }
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
    this.read = access.read;
    this.write = access.write;
    this.execute = access.execute;
  }

  canRead(user: Corpix.Collections.UserDao) {
    if(!this.read) return true; // ?
    
    let allowed = false;
    this.read.forEach((condition) => {
      if( user.roles.includes(condition.roleId) ) {
        allowed = true;    
      }
    });
    return allowed;
  }

  canWrite(user: Corpix.Collections.UserDao) {
    if(!this.write) return true; // ?
    
    let allowed = false;
    this.write.forEach((condition) => {
      if( user.roles.includes(condition.roleId) ) {
        allowed = true;
      }
    });
    return allowed;
  }

  canExecute(user: Corpix.Collections.UserDao) {
    if(!this.execute) return true; // ?
    
    let allowed = false;
    this.execute.forEach((condition) => {
      if( user.roles.includes(condition.roleId) ) {
        allowed = true;
      }
    });
    return allowed;
  }
}
