// declare namespace Corpix.Collections {
//   enum InstanceStatus {
//     Running = 'running',
//     Paused = 'paused',
//     Finished = 'finished',
//     Aborted = 'aborted'
//   }

//   interface Dao {
//     id: string;
//   }

//   interface EntityDao extends Dao {
//     name: string;
//     description: string;
//   }

//   interface UserDao extends EntityDao {
//     roles: string[],
//     password: string
//   }

//   interface AccessConditionDao {
//     organisationId: string;
//     roleId: string;
//     userId: string;
//     precondition: string;
//     postcondition: string;
//   }

//   interface AccessDao {
//     createdById: string;
//     createdOn: Date;
//     modifiedById: string;
//     modifiedOn: Date;
//     read: AccessConditionDao[];
//     write: AccessConditionDao[];
//     execute: AccessConditionDao[];
//   }

//   interface BpmnProcessInstanceDao extends EntityDao {
//     processId: string;
//     resources: string;
//     ownerId: string;
//     status: InstanceStatus;
//     dateStarted: Date;
//     dateFinished: Date;
//     duration: number;
//   }

//   interface BpmnTaskInstanceDao extends Dao {
//     processInstanceId: string;
//     task: Bpmn.Task;
//     performerId: string;
//     performerRoles: string[];
//     dateStarted: Date;
//     dateFinished: Date;
//     duration: number;
//     snapshot: string; //json
//   }

//   interface RoleDao extends EntityDao {}

//   interface OrganisationDao extends EntityDao {}

//   interface BpmnProcessDao extends EntityDao {
//     access: AccessDao;
//     definition: string;
//     generatedDescription: string;
//     version: number;
//     status: string;
//     roles: string[];
//     actionCount: number;
//   }
// }
