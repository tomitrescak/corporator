import { makeBindingClass, Options } from 'graphql-binding';
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql';
import { IResolvers } from 'graphql-tools/dist/Interfaces';
import * as schema from '..\prisma\schema';

export interface Query {
  testQuery: <T = Boolean>(
    args?: {},
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  notificationsQuery: <T = Notification[]>(
    args: { input?: NotificationsInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  bpmnProcessesQuery: <T = BpmnProcess[]>(
    args: { input: BpmnProcessesInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  bpmnProcessQuery: <T = BpmnProcess>(
    args: { id: ID_Output },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  bpmnProcessInstancesQuery: <T = BpmnProcessInstance[]>(
    args: { input: BpmnProcessInstancesInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  bpmnProcessInstanceQuery: <T = BpmnProcessInstance>(
    args: { id: ID_Output },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  bpmnTaskInstancesQuery: <T = BpmnTaskInstance[]>(
    args: { input: BpmnTaskInstancesInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  userQuery: <T = User>(
    args: { id: ID_Output },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  usersQuery: <T = User[]>(
    args?: {},
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  resume: <T = AuthPayload>(
    args: { token: String },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  resourceQuery: <T = Resource>(
    args: { id: ID_Output },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  processResourceQuery: <T = Resource>(
    args: { id: ID_Output },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
}

export interface Mutation {
  testMutation: <T = Boolean>(
    args?: {},
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  reset: <T = Boolean>(
    args?: {},
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  notify: <T = Notification>(
    args: { input?: NotifyInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  removeNotification: <T = String>(
    args: { id?: String },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  clearNotifications: <T = Boolean>(
    args?: {},
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  createProcess: <T = BpmnProcess>(
    args: { input: CreateProcessInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  launchProcessInstance: <T = BpmnProcessInstanceOutput>(
    args: { input: LaunchProcessInstanceInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  duplicateProcessInstance: <T = BpmnProcessInstanceOutput>(
    args: { input: DuplicateProcessInstanceInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  setProcessInstanceStatus: <T = BpmnProcessInstanceOutput>(
    args: { input: SetProcessInstanceStatusInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  createTaskInstance: <T = BpmnTaskInstance>(
    args: { input: CreateTaskInstanceInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  updateTaskInstanceStatus: <T = BpmnTaskInstance>(
    args: { input: UpdateTaskInstanceStatusInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  submitForm: <T = BpmnTaskInstance>(
    args: { input: SubmitFormInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T | null>;
  login: <T = AuthPayload>(
    args: { input: AuthInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
  signup: <T = AuthPayload>(
    args: { input: AuthInput },
    info?: GraphQLResolveInfo | string,
    options?: Options
  ) => Promise<T>;
}

export interface Subscription {}

export interface Binding {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
  request: <T = any>(query: string, variables?: { [key: string]: any }) => Promise<T>;
  delegate(
    operation: 'query' | 'mutation',
    fieldName: string,
    args: {
      [key: string]: any;
    },
    infoOrQuery?: GraphQLResolveInfo | string,
    options?: Options
  ): Promise<any>;
  delegateSubscription(
    fieldName: string,
    args?: {
      [key: string]: any;
    },
    infoOrQuery?: GraphQLResolveInfo | string,
    options?: Options
  ): Promise<AsyncIterator<any>>;
  getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  // @ts-ignore
  // @ts-ignore
  new (...args): T;
}

// @ts-ignore
// @ts-ignore
export const Binding = makeBindingClass<BindingConstructor<Binding>>({ schema });

/**
 * Types
 */

export type BpmnTaskType = 'Form';

export type BpmnProcessInstanceStatus = 'Running' | 'Finished' | 'Aborted' | 'Paused';

export type BpmnProcessInstanceOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'dateFinished_ASC'
  | 'dateFinished_DESC'
  | 'dateStarted_ASC'
  | 'dateStarted_DESC'
  | 'duration_ASC'
  | 'duration_DESC'
  | 'ownerId_ASC'
  | 'ownerId_DESC'
  | 'processId_ASC'
  | 'processId_DESC'
  | 'data_ASC'
  | 'data_DESC'
  | 'status_ASC'
  | 'status_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC';

export type DataOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'schemaId_ASC'
  | 'schemaId_DESC'
  | 'version_ASC'
  | 'version_DESC'
  | 'date_ASC'
  | 'date_DESC'
  | 'value_ASC'
  | 'value_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC';

export type NotificationType = 'Info' | 'Error' | 'Warning';

export type BpmnTaskInstanceStatus =
  | 'Started'
  | 'Paused'
  | 'Aborted'
  | 'Finished'
  | 'Approved'
  | 'Rejected';

export type LanguageCode = 'EN';

export type NotificationCode =
  | 'ProcessStarted'
  | 'ProcessFinished'
  | 'ProcessAborted'
  | 'ActionStarted'
  | 'ActionFinished'
  | 'ActionAborted'
  | 'ActionRequired';

export type NotificationOrderByInput =
  | 'type_ASC'
  | 'type_DESC'
  | 'id_ASC'
  | 'id_DESC'
  | 'userId_ASC'
  | 'userId_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'code_ASC'
  | 'code_DESC'
  | 'text_ASC'
  | 'text_DESC'
  | 'processInstanceId_ASC'
  | 'processInstanceId_DESC'
  | 'params_ASC'
  | 'params_DESC'
  | 'visible_ASC'
  | 'visible_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC';

export type ProcessResourceOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'resourceId_ASC'
  | 'resourceId_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC';

export type ResourceType = 'Url' | 'File' | 'Form' | 'Document';

export type PublicationStatus = 'Draft' | 'Proposal' | 'Published';

export type BpmnTaskOrderByInput =
  | 'id_ASC'
  | 'id_DESC'
  | 'taskId_ASC'
  | 'taskId_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'type_ASC'
  | 'type_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC';

export interface DataWhereInput {
  AND?: DataWhereInput[] | DataWhereInput;
  OR?: DataWhereInput[] | DataWhereInput;
  NOT?: DataWhereInput[] | DataWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  schemaId?: ID_Input;
  schemaId_not?: ID_Input;
  schemaId_in?: ID_Input[] | ID_Input;
  schemaId_not_in?: ID_Input[] | ID_Input;
  schemaId_lt?: ID_Input;
  schemaId_lte?: ID_Input;
  schemaId_gt?: ID_Input;
  schemaId_gte?: ID_Input;
  schemaId_contains?: ID_Input;
  schemaId_not_contains?: ID_Input;
  schemaId_starts_with?: ID_Input;
  schemaId_not_starts_with?: ID_Input;
  schemaId_ends_with?: ID_Input;
  schemaId_not_ends_with?: ID_Input;
  version?: Int;
  version_not?: Int;
  version_in?: Int[] | Int;
  version_not_in?: Int[] | Int;
  version_lt?: Int;
  version_lte?: Int;
  version_gt?: Int;
  version_gte?: Int;
  date?: DateTime;
  date_not?: DateTime;
  date_in?: DateTime[] | DateTime;
  date_not_in?: DateTime[] | DateTime;
  date_lt?: DateTime;
  date_lte?: DateTime;
  date_gt?: DateTime;
  date_gte?: DateTime;
  value?: String;
  value_not?: String;
  value_in?: String[] | String;
  value_not_in?: String[] | String;
  value_lt?: String;
  value_lte?: String;
  value_gt?: String;
  value_gte?: String;
  value_contains?: String;
  value_not_contains?: String;
  value_starts_with?: String;
  value_not_starts_with?: String;
  value_ends_with?: String;
  value_not_ends_with?: String;
  _MagicalBackRelation_UserData_every?: UserWhereInput;
  _MagicalBackRelation_UserData_some?: UserWhereInput;
  _MagicalBackRelation_UserData_none?: UserWhereInput;
}

export interface BpmnTaskWhereInput {
  AND?: BpmnTaskWhereInput[] | BpmnTaskWhereInput;
  OR?: BpmnTaskWhereInput[] | BpmnTaskWhereInput;
  NOT?: BpmnTaskWhereInput[] | BpmnTaskWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  taskId?: ID_Input;
  taskId_not?: ID_Input;
  taskId_in?: ID_Input[] | ID_Input;
  taskId_not_in?: ID_Input[] | ID_Input;
  taskId_lt?: ID_Input;
  taskId_lte?: ID_Input;
  taskId_gt?: ID_Input;
  taskId_gte?: ID_Input;
  taskId_contains?: ID_Input;
  taskId_not_contains?: ID_Input;
  taskId_starts_with?: ID_Input;
  taskId_not_starts_with?: ID_Input;
  taskId_ends_with?: ID_Input;
  taskId_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  type?: BpmnTaskType;
  type_not?: BpmnTaskType;
  type_in?: BpmnTaskType[] | BpmnTaskType;
  type_not_in?: BpmnTaskType[] | BpmnTaskType;
  _MagicalBackRelation_BpmnProcessTasks_every?: BpmnProcessWhereInput;
  _MagicalBackRelation_BpmnProcessTasks_some?: BpmnProcessWhereInput;
  _MagicalBackRelation_BpmnProcessTasks_none?: BpmnProcessWhereInput;
}

export interface ProcessResourceWhereInput {
  AND?: ProcessResourceWhereInput[] | ProcessResourceWhereInput;
  OR?: ProcessResourceWhereInput[] | ProcessResourceWhereInput;
  NOT?: ProcessResourceWhereInput[] | ProcessResourceWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  resourceId?: ID_Input;
  resourceId_not?: ID_Input;
  resourceId_in?: ID_Input[] | ID_Input;
  resourceId_not_in?: ID_Input[] | ID_Input;
  resourceId_lt?: ID_Input;
  resourceId_lte?: ID_Input;
  resourceId_gt?: ID_Input;
  resourceId_gte?: ID_Input;
  resourceId_contains?: ID_Input;
  resourceId_not_contains?: ID_Input;
  resourceId_starts_with?: ID_Input;
  resourceId_not_starts_with?: ID_Input;
  resourceId_ends_with?: ID_Input;
  resourceId_not_ends_with?: ID_Input;
  _MagicalBackRelation_BpmnProcessResources_every?: BpmnProcessWhereInput;
  _MagicalBackRelation_BpmnProcessResources_some?: BpmnProcessWhereInput;
  _MagicalBackRelation_BpmnProcessResources_none?: BpmnProcessWhereInput;
}

export interface CreateTaskInstanceInput {
  processInstanceId: String;
  taskId: String;
  performerRoles: String[] | String;
}

export interface CommentWhereInput {
  AND?: CommentWhereInput[] | CommentWhereInput;
  OR?: CommentWhereInput[] | CommentWhereInput;
  NOT?: CommentWhereInput[] | CommentWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  text?: String;
  text_not?: String;
  text_in?: String[] | String;
  text_not_in?: String[] | String;
  text_lt?: String;
  text_lte?: String;
  text_gt?: String;
  text_gte?: String;
  text_contains?: String;
  text_not_contains?: String;
  text_starts_with?: String;
  text_not_starts_with?: String;
  text_ends_with?: String;
  text_not_ends_with?: String;
  userId?: ID_Input;
  userId_not?: ID_Input;
  userId_in?: ID_Input[] | ID_Input;
  userId_not_in?: ID_Input[] | ID_Input;
  userId_lt?: ID_Input;
  userId_lte?: ID_Input;
  userId_gt?: ID_Input;
  userId_gte?: ID_Input;
  userId_contains?: ID_Input;
  userId_not_contains?: ID_Input;
  userId_starts_with?: ID_Input;
  userId_not_starts_with?: ID_Input;
  userId_ends_with?: ID_Input;
  userId_not_ends_with?: ID_Input;
  date?: DateTime;
  date_not?: DateTime;
  date_in?: DateTime[] | DateTime;
  date_not_in?: DateTime[] | DateTime;
  date_lt?: DateTime;
  date_lte?: DateTime;
  date_gt?: DateTime;
  date_gte?: DateTime;
  replyTo?: ID_Input;
  replyTo_not?: ID_Input;
  replyTo_in?: ID_Input[] | ID_Input;
  replyTo_not_in?: ID_Input[] | ID_Input;
  replyTo_lt?: ID_Input;
  replyTo_lte?: ID_Input;
  replyTo_gt?: ID_Input;
  replyTo_gte?: ID_Input;
  replyTo_contains?: ID_Input;
  replyTo_not_contains?: ID_Input;
  replyTo_starts_with?: ID_Input;
  replyTo_not_starts_with?: ID_Input;
  replyTo_ends_with?: ID_Input;
  replyTo_not_ends_with?: ID_Input;
  _MagicalBackRelation_BpmnProcessInstanceComments_every?: BpmnProcessInstanceWhereInput;
  _MagicalBackRelation_BpmnProcessInstanceComments_some?: BpmnProcessInstanceWhereInput;
  _MagicalBackRelation_BpmnProcessInstanceComments_none?: BpmnProcessInstanceWhereInput;
}

export interface ResourceWhereInput {
  AND?: ResourceWhereInput[] | ResourceWhereInput;
  OR?: ResourceWhereInput[] | ResourceWhereInput;
  NOT?: ResourceWhereInput[] | ResourceWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  processID?: ID_Input;
  processID_not?: ID_Input;
  processID_in?: ID_Input[] | ID_Input;
  processID_not_in?: ID_Input[] | ID_Input;
  processID_lt?: ID_Input;
  processID_lte?: ID_Input;
  processID_gt?: ID_Input;
  processID_gte?: ID_Input;
  processID_contains?: ID_Input;
  processID_not_contains?: ID_Input;
  processID_starts_with?: ID_Input;
  processID_not_starts_with?: ID_Input;
  processID_ends_with?: ID_Input;
  processID_not_ends_with?: ID_Input;
  actionCount?: Int;
  actionCount_not?: Int;
  actionCount_in?: Int[] | Int;
  actionCount_not_in?: Int[] | Int;
  actionCount_lt?: Int;
  actionCount_lte?: Int;
  actionCount_gt?: Int;
  actionCount_gte?: Int;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  model?: String;
  model_not?: String;
  model_in?: String[] | String;
  model_not_in?: String[] | String;
  model_lt?: String;
  model_lte?: String;
  model_gt?: String;
  model_gte?: String;
  model_contains?: String;
  model_not_contains?: String;
  model_starts_with?: String;
  model_not_starts_with?: String;
  model_ends_with?: String;
  model_not_ends_with?: String;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  type?: String;
  type_not?: String;
  type_in?: String[] | String;
  type_not_in?: String[] | String;
  type_lt?: String;
  type_lte?: String;
  type_gt?: String;
  type_gte?: String;
  type_contains?: String;
  type_not_contains?: String;
  type_starts_with?: String;
  type_not_starts_with?: String;
  type_ends_with?: String;
  type_not_ends_with?: String;
  publicationStatus?: PublicationStatus;
  publicationStatus_not?: PublicationStatus;
  publicationStatus_in?: PublicationStatus[] | PublicationStatus;
  publicationStatus_not_in?: PublicationStatus[] | PublicationStatus;
  version?: Int;
  version_not?: Int;
  version_in?: Int[] | Int;
  version_not_in?: Int[] | Int;
  version_lt?: Int;
  version_lte?: Int;
  version_gt?: Int;
  version_gte?: Int;
  createdAt?: DateTime;
  createdAt_not?: DateTime;
  createdAt_in?: DateTime[] | DateTime;
  createdAt_not_in?: DateTime[] | DateTime;
  createdAt_lt?: DateTime;
  createdAt_lte?: DateTime;
  createdAt_gt?: DateTime;
  createdAt_gte?: DateTime;
  createdById?: ID_Input;
  createdById_not?: ID_Input;
  createdById_in?: ID_Input[] | ID_Input;
  createdById_not_in?: ID_Input[] | ID_Input;
  createdById_lt?: ID_Input;
  createdById_lte?: ID_Input;
  createdById_gt?: ID_Input;
  createdById_gte?: ID_Input;
  createdById_contains?: ID_Input;
  createdById_not_contains?: ID_Input;
  createdById_starts_with?: ID_Input;
  createdById_not_starts_with?: ID_Input;
  createdById_ends_with?: ID_Input;
  createdById_not_ends_with?: ID_Input;
  updatedAt?: DateTime;
  updatedAt_not?: DateTime;
  updatedAt_in?: DateTime[] | DateTime;
  updatedAt_not_in?: DateTime[] | DateTime;
  updatedAt_lt?: DateTime;
  updatedAt_lte?: DateTime;
  updatedAt_gt?: DateTime;
  updatedAt_gte?: DateTime;
  updatedById?: ID_Input;
  updatedById_not?: ID_Input;
  updatedById_in?: ID_Input[] | ID_Input;
  updatedById_not_in?: ID_Input[] | ID_Input;
  updatedById_lt?: ID_Input;
  updatedById_lte?: ID_Input;
  updatedById_gt?: ID_Input;
  updatedById_gte?: ID_Input;
  updatedById_contains?: ID_Input;
  updatedById_not_contains?: ID_Input;
  updatedById_starts_with?: ID_Input;
  updatedById_not_starts_with?: ID_Input;
  updatedById_ends_with?: ID_Input;
  updatedById_not_ends_with?: ID_Input;
  readRole?: String;
  readRole_not?: String;
  readRole_in?: String[] | String;
  readRole_not_in?: String[] | String;
  readRole_lt?: String;
  readRole_lte?: String;
  readRole_gt?: String;
  readRole_gte?: String;
  readRole_contains?: String;
  readRole_not_contains?: String;
  readRole_starts_with?: String;
  readRole_not_starts_with?: String;
  readRole_ends_with?: String;
  readRole_not_ends_with?: String;
  readUser?: String;
  readUser_not?: String;
  readUser_in?: String[] | String;
  readUser_not_in?: String[] | String;
  readUser_lt?: String;
  readUser_lte?: String;
  readUser_gt?: String;
  readUser_gte?: String;
  readUser_contains?: String;
  readUser_not_contains?: String;
  readUser_starts_with?: String;
  readUser_not_starts_with?: String;
  readUser_ends_with?: String;
  readUser_not_ends_with?: String;
  writeRole?: String;
  writeRole_not?: String;
  writeRole_in?: String[] | String;
  writeRole_not_in?: String[] | String;
  writeRole_lt?: String;
  writeRole_lte?: String;
  writeRole_gt?: String;
  writeRole_gte?: String;
  writeRole_contains?: String;
  writeRole_not_contains?: String;
  writeRole_starts_with?: String;
  writeRole_not_starts_with?: String;
  writeRole_ends_with?: String;
  writeRole_not_ends_with?: String;
  writeUser?: String;
  writeUser_not?: String;
  writeUser_in?: String[] | String;
  writeUser_not_in?: String[] | String;
  writeUser_lt?: String;
  writeUser_lte?: String;
  writeUser_gt?: String;
  writeUser_gte?: String;
  writeUser_contains?: String;
  writeUser_not_contains?: String;
  writeUser_starts_with?: String;
  writeUser_not_starts_with?: String;
  writeUser_ends_with?: String;
  writeUser_not_ends_with?: String;
  executeRole?: String;
  executeRole_not?: String;
  executeRole_in?: String[] | String;
  executeRole_not_in?: String[] | String;
  executeRole_lt?: String;
  executeRole_lte?: String;
  executeRole_gt?: String;
  executeRole_gte?: String;
  executeRole_contains?: String;
  executeRole_not_contains?: String;
  executeRole_starts_with?: String;
  executeRole_not_starts_with?: String;
  executeRole_ends_with?: String;
  executeRole_not_ends_with?: String;
  executeUser?: String;
  executeUser_not?: String;
  executeUser_in?: String[] | String;
  executeUser_not_in?: String[] | String;
  executeUser_lt?: String;
  executeUser_lte?: String;
  executeUser_gt?: String;
  executeUser_gte?: String;
  executeUser_contains?: String;
  executeUser_not_contains?: String;
  executeUser_starts_with?: String;
  executeUser_not_starts_with?: String;
  executeUser_ends_with?: String;
  executeUser_not_ends_with?: String;
  tasks_every?: BpmnTaskWhereInput;
  tasks_some?: BpmnTaskWhereInput;
  tasks_none?: BpmnTaskWhereInput;
  resources_every?: ProcessResourceWhereInput;
  resources_some?: ProcessResourceWhereInput;
  resources_none?: ProcessResourceWhereInput;
}

export interface BpmnProcessInstanceWhereInput {
  AND?: BpmnProcessInstanceWhereInput[] | BpmnProcessInstanceWhereInput;
  OR?: BpmnProcessInstanceWhereInput[] | BpmnProcessInstanceWhereInput;
  NOT?: BpmnProcessInstanceWhereInput[] | BpmnProcessInstanceWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  dateFinished?: DateTime;
  dateFinished_not?: DateTime;
  dateFinished_in?: DateTime[] | DateTime;
  dateFinished_not_in?: DateTime[] | DateTime;
  dateFinished_lt?: DateTime;
  dateFinished_lte?: DateTime;
  dateFinished_gt?: DateTime;
  dateFinished_gte?: DateTime;
  dateStarted?: DateTime;
  dateStarted_not?: DateTime;
  dateStarted_in?: DateTime[] | DateTime;
  dateStarted_not_in?: DateTime[] | DateTime;
  dateStarted_lt?: DateTime;
  dateStarted_lte?: DateTime;
  dateStarted_gt?: DateTime;
  dateStarted_gte?: DateTime;
  duration?: Int;
  duration_not?: Int;
  duration_in?: Int[] | Int;
  duration_not_in?: Int[] | Int;
  duration_lt?: Int;
  duration_lte?: Int;
  duration_gt?: Int;
  duration_gte?: Int;
  ownerId?: ID_Input;
  ownerId_not?: ID_Input;
  ownerId_in?: ID_Input[] | ID_Input;
  ownerId_not_in?: ID_Input[] | ID_Input;
  ownerId_lt?: ID_Input;
  ownerId_lte?: ID_Input;
  ownerId_gt?: ID_Input;
  ownerId_gte?: ID_Input;
  ownerId_contains?: ID_Input;
  ownerId_not_contains?: ID_Input;
  ownerId_starts_with?: ID_Input;
  ownerId_not_starts_with?: ID_Input;
  ownerId_ends_with?: ID_Input;
  ownerId_not_ends_with?: ID_Input;
  processId?: ID_Input;
  processId_not?: ID_Input;
  processId_in?: ID_Input[] | ID_Input;
  processId_not_in?: ID_Input[] | ID_Input;
  processId_lt?: ID_Input;
  processId_lte?: ID_Input;
  processId_gt?: ID_Input;
  processId_gte?: ID_Input;
  processId_contains?: ID_Input;
  processId_not_contains?: ID_Input;
  processId_starts_with?: ID_Input;
  processId_not_starts_with?: ID_Input;
  processId_ends_with?: ID_Input;
  processId_not_ends_with?: ID_Input;
  data?: String;
  data_not?: String;
  data_in?: String[] | String;
  data_not_in?: String[] | String;
  data_lt?: String;
  data_lte?: String;
  data_gt?: String;
  data_gte?: String;
  data_contains?: String;
  data_not_contains?: String;
  data_starts_with?: String;
  data_not_starts_with?: String;
  data_ends_with?: String;
  data_not_ends_with?: String;
  status?: BpmnProcessInstanceStatus;
  status_not?: BpmnProcessInstanceStatus;
  status_in?: BpmnProcessInstanceStatus[] | BpmnProcessInstanceStatus;
  status_not_in?: BpmnProcessInstanceStatus[] | BpmnProcessInstanceStatus;
  comments_every?: CommentWhereInput;
  comments_some?: CommentWhereInput;
  comments_none?: CommentWhereInput;
  log_every?: LogWhereInput;
  log_some?: LogWhereInput;
  log_none?: LogWhereInput;
  tasks_every?: BpmnTaskInstanceWhereInput;
  tasks_some?: BpmnTaskInstanceWhereInput;
  tasks_none?: BpmnTaskInstanceWhereInput;
  _MagicalBackRelation_UserProcesses_every?: UserWhereInput;
  _MagicalBackRelation_UserProcesses_some?: UserWhereInput;
  _MagicalBackRelation_UserProcesses_none?: UserWhereInput;
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  uid?: String;
  uid_not?: String;
  uid_in?: String[] | String;
  uid_not_in?: String[] | String;
  uid_lt?: String;
  uid_lte?: String;
  uid_gt?: String;
  uid_gte?: String;
  uid_contains?: String;
  uid_not_contains?: String;
  uid_starts_with?: String;
  uid_not_starts_with?: String;
  uid_ends_with?: String;
  uid_not_ends_with?: String;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  description?: String;
  description_not?: String;
  description_in?: String[] | String;
  description_not_in?: String[] | String;
  description_lt?: String;
  description_lte?: String;
  description_gt?: String;
  description_gte?: String;
  description_contains?: String;
  description_not_contains?: String;
  description_starts_with?: String;
  description_not_starts_with?: String;
  description_ends_with?: String;
  description_not_ends_with?: String;
  password?: String;
  password_not?: String;
  password_in?: String[] | String;
  password_not_in?: String[] | String;
  password_lt?: String;
  password_lte?: String;
  password_gt?: String;
  password_gte?: String;
  password_contains?: String;
  password_not_contains?: String;
  password_starts_with?: String;
  password_not_starts_with?: String;
  password_ends_with?: String;
  password_not_ends_with?: String;
  notifications_every?: NotificationWhereInput;
  notifications_some?: NotificationWhereInput;
  notifications_none?: NotificationWhereInput;
  processes_every?: BpmnProcessInstanceWhereInput;
  processes_some?: BpmnProcessInstanceWhereInput;
  processes_none?: BpmnProcessInstanceWhereInput;
  data_every?: DataWhereInput;
  data_some?: DataWhereInput;
  data_none?: DataWhereInput;
}

export interface NotificationWhereInput {
  AND?: NotificationWhereInput[] | NotificationWhereInput;
  OR?: NotificationWhereInput[] | NotificationWhereInput;
  NOT?: NotificationWhereInput[] | NotificationWhereInput;
  type?: NotificationType;
  type_not?: NotificationType;
  type_in?: NotificationType[] | NotificationType;
  type_not_in?: NotificationType[] | NotificationType;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  userId?: ID_Input;
  userId_not?: ID_Input;
  userId_in?: ID_Input[] | ID_Input;
  userId_not_in?: ID_Input[] | ID_Input;
  userId_lt?: ID_Input;
  userId_lte?: ID_Input;
  userId_gt?: ID_Input;
  userId_gte?: ID_Input;
  userId_contains?: ID_Input;
  userId_not_contains?: ID_Input;
  userId_starts_with?: ID_Input;
  userId_not_starts_with?: ID_Input;
  userId_ends_with?: ID_Input;
  userId_not_ends_with?: ID_Input;
  createdAt?: DateTime;
  createdAt_not?: DateTime;
  createdAt_in?: DateTime[] | DateTime;
  createdAt_not_in?: DateTime[] | DateTime;
  createdAt_lt?: DateTime;
  createdAt_lte?: DateTime;
  createdAt_gt?: DateTime;
  createdAt_gte?: DateTime;
  code?: NotificationCode;
  code_not?: NotificationCode;
  code_in?: NotificationCode[] | NotificationCode;
  code_not_in?: NotificationCode[] | NotificationCode;
  text?: String;
  text_not?: String;
  text_in?: String[] | String;
  text_not_in?: String[] | String;
  text_lt?: String;
  text_lte?: String;
  text_gt?: String;
  text_gte?: String;
  text_contains?: String;
  text_not_contains?: String;
  text_starts_with?: String;
  text_not_starts_with?: String;
  text_ends_with?: String;
  text_not_ends_with?: String;
  processInstanceId?: ID_Input;
  processInstanceId_not?: ID_Input;
  processInstanceId_in?: ID_Input[] | ID_Input;
  processInstanceId_not_in?: ID_Input[] | ID_Input;
  processInstanceId_lt?: ID_Input;
  processInstanceId_lte?: ID_Input;
  processInstanceId_gt?: ID_Input;
  processInstanceId_gte?: ID_Input;
  processInstanceId_contains?: ID_Input;
  processInstanceId_not_contains?: ID_Input;
  processInstanceId_starts_with?: ID_Input;
  processInstanceId_not_starts_with?: ID_Input;
  processInstanceId_ends_with?: ID_Input;
  processInstanceId_not_ends_with?: ID_Input;
  params?: String;
  params_not?: String;
  params_in?: String[] | String;
  params_not_in?: String[] | String;
  params_lt?: String;
  params_lte?: String;
  params_gt?: String;
  params_gte?: String;
  params_contains?: String;
  params_not_contains?: String;
  params_starts_with?: String;
  params_not_starts_with?: String;
  params_ends_with?: String;
  params_not_ends_with?: String;
  visible?: Boolean;
  visible_not?: Boolean;
  _MagicalBackRelation_UserNotifications_every?: UserWhereInput;
  _MagicalBackRelation_UserNotifications_some?: UserWhereInput;
  _MagicalBackRelation_UserNotifications_none?: UserWhereInput;
}

export interface NotificationsInput {
  visible?: Boolean;
  skip?: Int;
  first?: Int;
}

export interface LaunchProcessInstanceInput {
  processId: String;
  role: String;
}

export interface UpdateTaskInstanceStatusInput {
  taskId: String;
  status: BpmnTaskInstanceStatus;
}

export interface NotifyInput {
  userId?: ID_Input;
  processInstanceId?: ID_Input;
  code?: NotificationCode;
  params: String[] | String;
  type: NotificationType;
}

export interface BpmnTaskInstancesInput {
  processInstanceId: String;
}

export interface BpmnTaskInstanceWhereInput {
  AND?: BpmnTaskInstanceWhereInput[] | BpmnTaskInstanceWhereInput;
  OR?: BpmnTaskInstanceWhereInput[] | BpmnTaskInstanceWhereInput;
  NOT?: BpmnTaskInstanceWhereInput[] | BpmnTaskInstanceWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  dateFinished?: DateTime;
  dateFinished_not?: DateTime;
  dateFinished_in?: DateTime[] | DateTime;
  dateFinished_not_in?: DateTime[] | DateTime;
  dateFinished_lt?: DateTime;
  dateFinished_lte?: DateTime;
  dateFinished_gt?: DateTime;
  dateFinished_gte?: DateTime;
  dateStarted?: DateTime;
  dateStarted_not?: DateTime;
  dateStarted_in?: DateTime[] | DateTime;
  dateStarted_not_in?: DateTime[] | DateTime;
  dateStarted_lt?: DateTime;
  dateStarted_lte?: DateTime;
  dateStarted_gt?: DateTime;
  dateStarted_gte?: DateTime;
  duration?: Int;
  duration_not?: Int;
  duration_in?: Int[] | Int;
  duration_not_in?: Int[] | Int;
  duration_lt?: Int;
  duration_lte?: Int;
  duration_gt?: Int;
  duration_gte?: Int;
  performerId?: ID_Input;
  performerId_not?: ID_Input;
  performerId_in?: ID_Input[] | ID_Input;
  performerId_not_in?: ID_Input[] | ID_Input;
  performerId_lt?: ID_Input;
  performerId_lte?: ID_Input;
  performerId_gt?: ID_Input;
  performerId_gte?: ID_Input;
  performerId_contains?: ID_Input;
  performerId_not_contains?: ID_Input;
  performerId_starts_with?: ID_Input;
  performerId_not_starts_with?: ID_Input;
  performerId_ends_with?: ID_Input;
  performerId_not_ends_with?: ID_Input;
  processInstanceId?: ID_Input;
  processInstanceId_not?: ID_Input;
  processInstanceId_in?: ID_Input[] | ID_Input;
  processInstanceId_not_in?: ID_Input[] | ID_Input;
  processInstanceId_lt?: ID_Input;
  processInstanceId_lte?: ID_Input;
  processInstanceId_gt?: ID_Input;
  processInstanceId_gte?: ID_Input;
  processInstanceId_contains?: ID_Input;
  processInstanceId_not_contains?: ID_Input;
  processInstanceId_starts_with?: ID_Input;
  processInstanceId_not_starts_with?: ID_Input;
  processInstanceId_ends_with?: ID_Input;
  processInstanceId_not_ends_with?: ID_Input;
  status?: BpmnTaskInstanceStatus;
  status_not?: BpmnTaskInstanceStatus;
  status_in?: BpmnTaskInstanceStatus[] | BpmnTaskInstanceStatus;
  status_not_in?: BpmnTaskInstanceStatus[] | BpmnTaskInstanceStatus;
  taskId?: ID_Input;
  taskId_not?: ID_Input;
  taskId_in?: ID_Input[] | ID_Input;
  taskId_not_in?: ID_Input[] | ID_Input;
  taskId_lt?: ID_Input;
  taskId_lte?: ID_Input;
  taskId_gt?: ID_Input;
  taskId_gte?: ID_Input;
  taskId_contains?: ID_Input;
  taskId_not_contains?: ID_Input;
  taskId_starts_with?: ID_Input;
  taskId_not_starts_with?: ID_Input;
  taskId_ends_with?: ID_Input;
  taskId_not_ends_with?: ID_Input;
  _MagicalBackRelation_BpmnProcessInstanceTasks_every?: BpmnProcessInstanceWhereInput;
  _MagicalBackRelation_BpmnProcessInstanceTasks_some?: BpmnProcessInstanceWhereInput;
  _MagicalBackRelation_BpmnProcessInstanceTasks_none?: BpmnProcessInstanceWhereInput;
}

export interface AuthInput {
  user?: String;
  password?: String;
}

export interface BpmnProcessesInput {
  status?: PublicationStatus;
  name?: String;
  skip?: Int;
  first?: Int;
}

export interface BpmnProcessInstancesInput {
  status?: BpmnProcessInstanceStatus;
  name?: String;
  dateStarted?: DateTime;
  dateFinished?: DateTime;
  duration?: Int;
  processId?: String;
  skip?: Int;
  first?: Int;
}

export interface SubmitFormInput {
  taskId: String;
  form: String[] | String;
}

export interface SetProcessInstanceStatusInput {
  processId: String;
  status: BpmnProcessInstanceStatus;
}

export interface LogWhereInput {
  AND?: LogWhereInput[] | LogWhereInput;
  OR?: LogWhereInput[] | LogWhereInput;
  NOT?: LogWhereInput[] | LogWhereInput;
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  elementId?: String;
  elementId_not?: String;
  elementId_in?: String[] | String;
  elementId_not_in?: String[] | String;
  elementId_lt?: String;
  elementId_lte?: String;
  elementId_gt?: String;
  elementId_gte?: String;
  elementId_contains?: String;
  elementId_not_contains?: String;
  elementId_starts_with?: String;
  elementId_not_starts_with?: String;
  elementId_ends_with?: String;
  elementId_not_ends_with?: String;
  elementName?: String;
  elementName_not?: String;
  elementName_in?: String[] | String;
  elementName_not_in?: String[] | String;
  elementName_lt?: String;
  elementName_lte?: String;
  elementName_gt?: String;
  elementName_gte?: String;
  elementName_contains?: String;
  elementName_not_contains?: String;
  elementName_starts_with?: String;
  elementName_not_starts_with?: String;
  elementName_ends_with?: String;
  elementName_not_ends_with?: String;
  date?: DateTime;
  date_not?: DateTime;
  date_in?: DateTime[] | DateTime;
  date_not_in?: DateTime[] | DateTime;
  date_lt?: DateTime;
  date_lte?: DateTime;
  date_gt?: DateTime;
  date_gte?: DateTime;
  taskInstanceId?: ID_Input;
  taskInstanceId_not?: ID_Input;
  taskInstanceId_in?: ID_Input[] | ID_Input;
  taskInstanceId_not_in?: ID_Input[] | ID_Input;
  taskInstanceId_lt?: ID_Input;
  taskInstanceId_lte?: ID_Input;
  taskInstanceId_gt?: ID_Input;
  taskInstanceId_gte?: ID_Input;
  taskInstanceId_contains?: ID_Input;
  taskInstanceId_not_contains?: ID_Input;
  taskInstanceId_starts_with?: ID_Input;
  taskInstanceId_not_starts_with?: ID_Input;
  taskInstanceId_ends_with?: ID_Input;
  taskInstanceId_not_ends_with?: ID_Input;
  performerId?: ID_Input;
  performerId_not?: ID_Input;
  performerId_in?: ID_Input[] | ID_Input;
  performerId_not_in?: ID_Input[] | ID_Input;
  performerId_lt?: ID_Input;
  performerId_lte?: ID_Input;
  performerId_gt?: ID_Input;
  performerId_gte?: ID_Input;
  performerId_contains?: ID_Input;
  performerId_not_contains?: ID_Input;
  performerId_starts_with?: ID_Input;
  performerId_not_starts_with?: ID_Input;
  performerId_ends_with?: ID_Input;
  performerId_not_ends_with?: ID_Input;
  status?: BpmnTaskInstanceStatus;
  status_not?: BpmnTaskInstanceStatus;
  status_in?: BpmnTaskInstanceStatus[] | BpmnTaskInstanceStatus;
  status_not_in?: BpmnTaskInstanceStatus[] | BpmnTaskInstanceStatus;
  message?: String;
  message_not?: String;
  message_in?: String[] | String;
  message_not_in?: String[] | String;
  message_lt?: String;
  message_lte?: String;
  message_gt?: String;
  message_gte?: String;
  message_contains?: String;
  message_not_contains?: String;
  message_starts_with?: String;
  message_not_starts_with?: String;
  message_ends_with?: String;
  message_not_ends_with?: String;
  _MagicalBackRelation_BpmnProcessInstanceLog_every?: BpmnProcessInstanceWhereInput;
  _MagicalBackRelation_BpmnProcessInstanceLog_some?: BpmnProcessInstanceWhereInput;
  _MagicalBackRelation_BpmnProcessInstanceLog_none?: BpmnProcessInstanceWhereInput;
}

export interface CreateProcessInput {
  name: String;
  description?: String;
  model?: String;
  status?: PublicationStatus;
}

export interface DuplicateProcessInstanceInput {
  processId: String;
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output;
}

export interface Schema extends Node {
  id: ID_Output;
  name: String;
  description: String;
  schema: Json;
  version?: Int;
  date?: DateTime;
}

export interface BpmnProcessInstance {
  id: ID_Output;
  comments: Comment[];
  dateFinished?: DateTime;
  dateStarted: DateTime;
  duration?: Int;
  ownerId: ID_Output;
  owner?: User;
  processId: ID_Output;
  process?: BpmnProcess;
  data: String;
  log: Log[];
  status: BpmnProcessInstanceStatus;
  tasks: BpmnTaskInstance[];
}

export interface BpmnTaskInstance {
  id: ID_Output;
  dateFinished?: DateTime;
  dateStarted: DateTime;
  duration?: Int;
  performerId?: ID_Output;
  performer?: User;
  processInstanceId?: ID_Output;
  processInstance: BpmnProcessInstance;
  data?: Json;
  status: BpmnTaskInstanceStatus;
  taskId: ID_Output;
  task?: BpmnTask;
}

/*
 * An edge in a connection.

 */
export interface ValidatorEdge {
  node: Validator;
  cursor: String;
}

export interface Notification {
  type: NotificationType;
  id: ID_Output;
  userId: ID_Output;
  user?: User;
  createdAt: DateTime;
  code: NotificationCode;
  text?: String;
  processInstanceId: ID_Output;
  processInstance?: BpmnProcessInstance;
  params?: String;
  visible: Boolean;
}

export interface Log {
  id: ID_Output;
  elementId: String;
  elementName: String;
  date: DateTime;
  taskInstanceId?: ID_Output;
  performerId?: ID_Output;
  performer?: User;
  status?: BpmnTaskInstanceStatus;
  message?: String;
}

export interface Data extends Node {
  id: ID_Output;
  schemaId: ID_Output;
  version?: Int;
  date?: DateTime;
  value?: String;
}

export interface BpmnTask extends Node {
  id: ID_Output;
  taskId: ID_Output;
  performerRoles: ID_Output[];
  resources: ID_Output[];
  name: String;
  type?: BpmnTaskType;
}

export interface Localisation extends Node {
  id: ID_Output;
  code: String;
  text: String;
  language: LanguageCode;
}

export interface User extends Node {
  id: ID_Output;
  uid: String;
  name: String;
  roles: ID_Output[];
  description?: String;
  password: String;
  notifications?: Notification[];
  processes?: BpmnProcessInstance[];
  data?: Data[];
}

export interface Organisation extends Node {
  id: ID_Output;
  name: String;
  description?: String;
}

export interface Resource extends Node {
  id: ID_Output;
  resourceId: ID_Output;
  type: ResourceType;
  title: String;
  content?: String;
  version: Int;
  publicationStatus: PublicationStatus;
  createdById: ID_Output;
  updatedById?: ID_Output;
  readRole?: String;
  readUser?: String;
  writeRole?: String;
  writeUser?: String;
}

export interface AuthPayload {
  user: User;
  token: String;
}

export interface ProcessResource {
  id: ID_Output;
  resourceId: ID_Output;
  resource: Resource;
  readRoles?: String[];
}

export interface Comment {
  id: ID_Output;
  text: String;
  userId: ID_Output;
  user: User;
  date: DateTime;
  replyTo?: ID_Output;
}

export interface BpmnProcess extends Node {
  id: ID_Output;
  processID?: ID_Output;
  actionCount: Int;
  schema?: Json;
  description?: String;
  model: String;
  name: String;
  tasks?: BpmnTask[];
  type: String;
  resources?: ProcessResource[];
  publicationStatus: PublicationStatus;
  version: Int;
  createdAt: DateTime;
  createdById: ID_Output;
  updatedAt: DateTime;
  updatedById?: ID_Output;
  readRole?: String;
  readUser?: String;
  writeRole?: String;
  writeUser?: String;
  executeRole?: String;
  executeUser?: String;
}

export interface Role extends Node {
  id: ID_Output;
  roleId: String;
  name: String;
  description?: String;
}

export type DateTime = Date | string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
Raw JSON value
*/
export type Json = any;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

export type DateTime = Date | string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;
