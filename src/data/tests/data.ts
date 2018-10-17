// import * as QueryTypes from 'data/generated/types';

// import { Context, Prisma, Yoga } from 'data/utils';

// const defaultUser: Yoga.User = {
//   id: 'u',
//   uid: '1000',
//   name: 'User',
//   description: 'User Description',
//   roles: null,
//   password: 'pw'
// };

// const otherUser: Yoga.User = {
//   id: 'o',
//   uid: '1000',
//   name: 'Other',
//   description: 'Other User Description',
//   roles: null,
//   password: 'other pw'
// };

// const createdDate = new Date(2018, 1, 2);
// const modifiedDate = new Date(2018, 1, 10);
// const finishedDate = new Date(2018, 2, 15);
// // const dateDuration = (finishedDate - createdDate);

// export const defaultAccess: Yoga.Access = {
//   id: 'a',
//   createdById: defaultUser.id,
//   createdOn: createdDate,
//   modifiedById: otherUser.id,
//   modifiedOn: modifiedDate,
//   read: null,
//   write: null,
//   execute: null
// };

// export const defaultRole: Yoga.Role = {
//   id: 'default',
//   name: 'Role',
//   description: 'Role description'
// };

// export const defaultOrganisation: Yoga.Organisation = {
//   id: 'default',
//   name: 'Organisation',
//   description: 'Organisation description'
// };

// // export const defaultAccessCondition: Yoga.AccessCondition = {
// //   organisationId: defaultOrganisation.id,
// //   roleId: defaultRole.id,
// //   userId: defaultUser.id
// //   // precondition: null,
// //   // postcondition: null
// // };

// export const defaultProcess: Yoga.BpmnProcess = {
//   id: 'bpmn',
//   name: 'Bpmn',
//   description: 'Default process',
//   createdById: null,
//   // generatedDescription: null,
//   model: '<xml />',
//   schema: '{}',
//   version: 0,
//   publicationStatus: 'Draft',
//   type: 'Travel',
//   // roles: ['default'],
//   actionCount: 0
// };

// export const defaultProcessInstance: Yoga.BpmnProcessInstance = {
//   id: 'aid',
//   process: defaultProcess,
//   data: null,
//   ownerId: null,
//   status: 'Running',
//   dateStarted: createdDate,
//   dateFinished: finishedDate,
//   duration: 0
// };

// const defaultData: Yoga.Data = {
//   id: '1',
//   descriptor: null,
//   organisationId: 'oId',
//   version: 0,
//   date: modifiedDate,
//   value: null
// };

// const defaultNotification: Yoga.Notification = {
//   id: '1',
//   processInstance: defaultProcessInstance,
//   code: 'ProcessStarted',
//   params: [],
//   createdAt: new Date(),
//   type: QueryTypes.NotificationType.Error,
//   userId: '1',
//   visible: true
// };

// const defaultDescriptor: Yoga.DataDescriptor = {
//   id: '1',
//   name: null,
//   description: 'Description',
//   expression: null,
//   type: QueryTypes.DataType.String,
//   isArray: false,
//   defaultValue: null,
//   validators: null,
//   parentDescriptor: null
// };

// /* =========================================================
//     CREATED
//    ======================================================== */

// const defaultBpmnProcessInstance: Prisma.BpmnProcessInstanceCreateInput = {
//   comments: null,
//   data: null,
//   dateFinished: finishedDate,
//   dateStarted: createdDate,
//   duration: 0,
//   log: null,
//   owner: null,
//   process: null,
//   status: 'Running',
//   tasks: null
// };

// // const defaultAccessCondition = TestData.defaultAccessCondition;
// const createAccessCondition: Prisma.AccessConditionCreateManyInput = {
//   create: []
// };

// const createAccess: Prisma.AccessCreateInput = {
//   createdById: defaultAccess.createdById,
//   createdOn: defaultAccess.createdOn,
//   modifiedById: defaultAccess.modifiedById,
//   modifiedOn: defaultAccess.modifiedOn,
//   read: createAccessCondition,
//   write: createAccessCondition,
//   execute: createAccessCondition
// };
// const createAccessInput: Prisma.AccessCreateOneInput = {
//   create: createAccess
// };

// const createProcess: Prisma.BpmnProcessCreateInput = {
//   actionCount: defaultProcess.actionCount,
//   access: createAccessInput,
//   description: defaultProcess.description,
//   model: defaultProcess.model,
//   name: defaultProcess.name,
//   status: defaultProcess.status,
//   version: defaultProcess.version,
//   type: defaultProcess.type
// };

// function merge<T>(a: any, b: T): T {
//   for (let key of Object.getOwnPropertyNames(b)) {
//     if ((b as any)[key]) {
//       a[key] = (b as any)[key];
//     }
//   }
//   return a;
// }

// export const create = {
//   /* =========================================================
//       DAO
//      ======================================================== */

//   userDao(from: Partial<Yoga.User> = {}): Yoga.User {
//     return { ...defaultUser, ...from };
//   },
//   accessDao(from: Partial<Yoga.Access> = {}): Yoga.Access {
//     return { ...defaultAccess, ...from };
//   },
//   accessConditionDao(from: Partial<Yoga.AccessCondition> = {}): Yoga.AccessCondition {
//     return { ...defaultAccessCondition, ...from };
//   },
//   activityDao(from: Partial<Yoga.BpmnProcessInstance> = {}): Yoga.BpmnProcessInstance {
//     return { ...defaultProcessInstance, ...from };
//   },
//   dataDao(data: Partial<Yoga.Data> = {}): Yoga.Data {
//     return { ...defaultData, ...data };
//   },
//   descriptorDao(data: Partial<Yoga.DataDescriptor> = {}): Yoga.DataDescriptor {
//     return { ...defaultDescriptor, ...data };
//   },
//   processDao(
//     from: Partial<Yoga.BpmnProcess> = {},
//     access: Partial<Yoga.Access> = {}
//   ): Yoga.BpmnProcess {
//     const result = { ...defaultProcess, ...from };
//     result.access = { ...defaultAccess, ...access };
//     return result;
//   },
//   processInstanceDao(
//     from: Partial<Yoga.BpmnProcessInstance> = {},
//     process: Partial<Yoga.BpmnProcess> = {}
//   ): Yoga.BpmnProcessInstance {
//     const result = { ...defaultProcessInstance, ...from };
//     result.process = { ...defaultProcess, ...process };
//     return result;
//   },
//   notificationDao(from: Partial<Yoga.Notification> = {}): Yoga.Notification {
//     return { ...defaultNotification, ...from };
//   },

//   /* =========================================================
//       CREATE
//      ======================================================== */

//   user(ctx: Context, data: Partial<Prisma.User> = {}): Promise<Yoga.User> {
//     const input: Prisma.UserCreateInput = {
//       name: data.name,
//       uid: data.uid,
//       password: '',
//       roles: {
//         set: data.roles
//       }
//     };
//     const merged = merge(defaultUser, input);
//     delete (merged as any).id;
//     return ctx.db.mutation.createUser({
//       data: merged
//     });
//   },
//   process(
//     ctx: Context,
//     data: Partial<Prisma.BpmnProcessCreateInput> = {},
//     customAccess: Partial<Prisma.AccessCreateInput> = {}
//   ) {
//     const props = { ...createProcess, ...data };
//     props.access = { create: { ...createAccess, ...customAccess } };
//     return ctx.db.mutation.createBpmnProcess({ data: props });
//   },
//   bpmnProcessInstance(ctx: Context, data: Partial<Prisma.BpmnProcessInstanceCreateInput> = {}) {
//     return ctx.db.mutation.createBpmnProcessInstance({
//       data: { ...defaultBpmnProcessInstance, ...data }
//     });
//   }
// };
