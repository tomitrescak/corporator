declare namespace Corpix.Collections {
  interface Dao {
    id: string;
  }

  interface EntityDao extends Dao {
    name: string;
    description: string;
  }

  interface UserDao extends EntityDao {}

  interface AccessConditionDao {
    organisationId: string;
    roleId: string;
    userId: string;
    precondition: string;
    postcondition: string;
  }

  interface AccessDao {
    createdById: string;
    createdOn: Date;
    modifiedById: string;
    modifiedOn: Date;
    read: AccessConditionDao[];
    write: AccessConditionDao[];
    execute: AccessConditionDao[];
  }

  interface RoleDao extends EntityDao {}

  interface OrganisationDao extends EntityDao {}

  interface BpmnProcessDao extends EntityDao {
    access: AccessDao;
    definition: string;
    generatedDescription: string;
    version: number;
    status: string;
    roles: string[];
    actionCount: number;
  }
}
