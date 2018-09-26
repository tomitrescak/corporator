import { makeBindingClass, Options } from 'graphql-binding'
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import * as schema from  '../prisma/schema'

export interface Query {
    testQuery: <T = Boolean | null>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notificationsQuery: <T = Notification[]>(args: { input?: NotificationsInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    processes: <T = BpmnProcess[]>(args: { input: BpmnProcessesInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    process: <T = BpmnProcess>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnProcessInstancesQuery: <T = BpmnProcessInstance[]>(args: { input: BpmnProcessInstancesInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnProcessInstanceQuery: <T = BpmnProcessInstance | null>(args: { id: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnTaskInstancesQuery: <T = BpmnTaskInstance[]>(args: { input: BpmnTaskInstancesInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userQuery: <T = User | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersQuery: <T = User[]>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    resume: <T = AuthPayload>(args: { token: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    formQuery: <T = Form | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    resourceQuery: <T = Resource | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    documentQuery: <T = Document | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    testMutation: <T = Boolean | null>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    reset: <T = Boolean | null>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notify: <T = Notification>(args: { input?: NotifyInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    removeNotification: <T = String | null>(args: { id?: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    clearNotifications: <T = Boolean | null>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createProcess: <T = BpmnProcess | null>(args: { input: CreateProcessInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    launchProcessInstance: <T = BpmnProcessInstanceOutput | null>(args: { input: LaunchProcessInstanceInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    duplicateProcessInstance: <T = BpmnProcessInstanceOutput | null>(args: { input: DuplicateProcessInstanceInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    setProcessInstanceStatus: <T = BpmnProcessInstanceOutput | null>(args: { input: SetProcessInstanceStatusInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTaskInstance: <T = BpmnTaskInstance | null>(args: { input: CreateTaskInstanceInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateTaskInstanceStatus: <T = BpmnTaskInstance | null>(args: { input: UpdateTaskInstanceStatusInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    submitForm: <T = BpmnTaskInstance | null>(args: { input: SubmitFormInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    login: <T = AuthPayload>(args: { input: AuthInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    signup: <T = AuthPayload>(args: { input: AuthInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {}

export interface Binding {
  query: Query
  mutation: Mutation
  subscription: Subscription
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
      [key: string]: any;
  }, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
  delegateSubscription(fieldName: string, args?: {
      [key: string]: any;
  }, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
  getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  // @ts-ignore
  new(...args): T
}

// @ts-ignore
export const Binding = makeBindingClass<BindingConstructor<Binding>>({ schema })

/**
 * Types
*/

export type AccessConditionOrderByInput =   'organisationId_ASC' |
  'organisationId_DESC' |
  'roleId_ASC' |
  'roleId_DESC' |
  'userId_ASC' |
  'userId_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type FormControl =   'Input' |
  'Select' |
  'Checkbox' |
  'Radio' |
  'Textarea' |
  'Repeater' |
  'Table' |
  'Text' |
  'DeleteButton'

export type DataOrderByInput =   'id_ASC' |
  'id_DESC' |
  'organisationId_ASC' |
  'organisationId_DESC' |
  'version_ASC' |
  'version_DESC' |
  'date_ASC' |
  'date_DESC' |
  'value_ASC' |
  'value_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ValidatorOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BpmnProcessInstanceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'dateFinished_ASC' |
  'dateFinished_DESC' |
  'dateStarted_ASC' |
  'dateStarted_DESC' |
  'duration_ASC' |
  'duration_DESC' |
  'data_ASC' |
  'data_DESC' |
  'status_ASC' |
  'status_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BpmnProcessOrderByInput =   'id_ASC' |
  'id_DESC' |
  'actionCount_ASC' |
  'actionCount_DESC' |
  'description_ASC' |
  'description_DESC' |
  'model_ASC' |
  'model_DESC' |
  'name_ASC' |
  'name_DESC' |
  'type_ASC' |
  'type_DESC' |
  'status_ASC' |
  'status_DESC' |
  'version_ASC' |
  'version_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type DataType =   'Id' |
  'Boolean' |
  'Float' |
  'Int' |
  'String' |
  'Date' |
  'Object'

export type NotificationType =   'Info' |
  'Error' |
  'Warning'

export type NotificationOrderByInput =   'type_ASC' |
  'type_DESC' |
  'id_ASC' |
  'id_DESC' |
  'userId_ASC' |
  'userId_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'code_ASC' |
  'code_DESC' |
  'text_ASC' |
  'text_DESC' |
  'visible_ASC' |
  'visible_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type NotificationCode =   'ProcessStarted' |
  'ProcessFinished' |
  'ProcessAborted' |
  'ActionStarted' |
  'ActionFinished' |
  'ActionAborted' |
  'ActionRequired'

export type CommentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'text_ASC' |
  'text_DESC' |
  'date_ASC' |
  'date_DESC' |
  'replyTo_ASC' |
  'replyTo_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BpmnTaskInstanceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'dateFinished_ASC' |
  'dateFinished_DESC' |
  'dateStarted_ASC' |
  'dateStarted_DESC' |
  'duration_ASC' |
  'duration_DESC' |
  'performerId_ASC' |
  'performerId_DESC' |
  'data_ASC' |
  'data_DESC' |
  'status_ASC' |
  'status_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BpmnTaskInstanceStatus =   'Waiting' |
  'Paused' |
  'Aborted' |
  'Finished'

export type ResourceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'type_ASC' |
  'type_DESC' |
  'name_ASC' |
  'name_DESC' |
  'link_ASC' |
  'link_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type ResourceType =   'Url' |
  'File' |
  'Form' |
  'Report' |
  'Document'

export type LanguageCode =   'EN'

export type ProcessStatus =   'Draft' |
  'Proposal' |
  'Published'

export type ProcessType =   'HumanResources' |
  'Purchases' |
  'Sales' |
  'Travel'

export type BpmnTaskOrderByInput =   'id_ASC' |
  'id_DESC' |
  'taskId_ASC' |
  'taskId_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type DataDescriptorOrderByInput =   'id_ASC' |
  'id_DESC' |
  'defaultValue_ASC' |
  'defaultValue_DESC' |
  'description_ASC' |
  'description_DESC' |
  'expression_ASC' |
  'expression_DESC' |
  'isArray_ASC' |
  'isArray_DESC' |
  'clone_ASC' |
  'clone_DESC' |
  'name_ASC' |
  'name_DESC' |
  'type_ASC' |
  'type_DESC' |
  'parentDescriptor_ASC' |
  'parentDescriptor_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BpmnProcessInstanceStatus =   'Running' |
  'Finished' |
  'Aborted' |
  'Paused'

export type LogOrderByInput =   'elementId_ASC' |
  'elementId_DESC' |
  'elementName_ASC' |
  'elementName_DESC' |
  'date_ASC' |
  'date_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type FormElementOrderByInput =   'id_ASC' |
  'id_DESC' |
  'row_ASC' |
  'row_DESC' |
  'column_ASC' |
  'column_DESC' |
  'width_ASC' |
  'width_DESC' |
  'label_ASC' |
  'label_DESC' |
  'inline_ASC' |
  'inline_DESC' |
  'defaultValue_ASC' |
  'defaultValue_DESC' |
  'list_ASC' |
  'list_DESC' |
  'filterSource_ASC' |
  'filterSource_DESC' |
  'filterColumn_ASC' |
  'filterColumn_DESC' |
  'control_ASC' |
  'control_DESC' |
  'controlProps_ASC' |
  'controlProps_DESC' |
  'vertical_ASC' |
  'vertical_DESC' |
  'parentElement_ASC' |
  'parentElement_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface ValidatorWhereInput {
  AND?: ValidatorWhereInput[] | ValidatorWhereInput
  OR?: ValidatorWhereInput[] | ValidatorWhereInput
  NOT?: ValidatorWhereInput[] | ValidatorWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  _MagicalBackRelation_FormToValidator_every?: FormWhereInput
  _MagicalBackRelation_FormToValidator_some?: FormWhereInput
  _MagicalBackRelation_FormToValidator_none?: FormWhereInput
  _MagicalBackRelation_DataDescriptorToValidator_every?: DataDescriptorWhereInput
  _MagicalBackRelation_DataDescriptorToValidator_some?: DataDescriptorWhereInput
  _MagicalBackRelation_DataDescriptorToValidator_none?: DataDescriptorWhereInput
}

export interface LaunchProcessInstanceInput {
  processId: String
  role: String
}

export interface DuplicateProcessInstanceInput {
  processId: String
}

export interface CreateProcessInput {
  name: String
  description?: String
  model?: String
  status?: ProcessStatus
}

export interface FormElementWhereInput {
  AND?: FormElementWhereInput[] | FormElementWhereInput
  OR?: FormElementWhereInput[] | FormElementWhereInput
  NOT?: FormElementWhereInput[] | FormElementWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  row?: Int
  row_not?: Int
  row_in?: Int[] | Int
  row_not_in?: Int[] | Int
  row_lt?: Int
  row_lte?: Int
  row_gt?: Int
  row_gte?: Int
  column?: Int
  column_not?: Int
  column_in?: Int[] | Int
  column_not_in?: Int[] | Int
  column_lt?: Int
  column_lte?: Int
  column_gt?: Int
  column_gte?: Int
  width?: Int
  width_not?: Int
  width_in?: Int[] | Int
  width_not_in?: Int[] | Int
  width_lt?: Int
  width_lte?: Int
  width_gt?: Int
  width_gte?: Int
  label?: String
  label_not?: String
  label_in?: String[] | String
  label_not_in?: String[] | String
  label_lt?: String
  label_lte?: String
  label_gt?: String
  label_gte?: String
  label_contains?: String
  label_not_contains?: String
  label_starts_with?: String
  label_not_starts_with?: String
  label_ends_with?: String
  label_not_ends_with?: String
  inline?: Boolean
  inline_not?: Boolean
  defaultValue?: String
  defaultValue_not?: String
  defaultValue_in?: String[] | String
  defaultValue_not_in?: String[] | String
  defaultValue_lt?: String
  defaultValue_lte?: String
  defaultValue_gt?: String
  defaultValue_gte?: String
  defaultValue_contains?: String
  defaultValue_not_contains?: String
  defaultValue_starts_with?: String
  defaultValue_not_starts_with?: String
  defaultValue_ends_with?: String
  defaultValue_not_ends_with?: String
  list?: String
  list_not?: String
  list_in?: String[] | String
  list_not_in?: String[] | String
  list_lt?: String
  list_lte?: String
  list_gt?: String
  list_gte?: String
  list_contains?: String
  list_not_contains?: String
  list_starts_with?: String
  list_not_starts_with?: String
  list_ends_with?: String
  list_not_ends_with?: String
  filterSource?: String
  filterSource_not?: String
  filterSource_in?: String[] | String
  filterSource_not_in?: String[] | String
  filterSource_lt?: String
  filterSource_lte?: String
  filterSource_gt?: String
  filterSource_gte?: String
  filterSource_contains?: String
  filterSource_not_contains?: String
  filterSource_starts_with?: String
  filterSource_not_starts_with?: String
  filterSource_ends_with?: String
  filterSource_not_ends_with?: String
  filterColumn?: String
  filterColumn_not?: String
  filterColumn_in?: String[] | String
  filterColumn_not_in?: String[] | String
  filterColumn_lt?: String
  filterColumn_lte?: String
  filterColumn_gt?: String
  filterColumn_gte?: String
  filterColumn_contains?: String
  filterColumn_not_contains?: String
  filterColumn_starts_with?: String
  filterColumn_not_starts_with?: String
  filterColumn_ends_with?: String
  filterColumn_not_ends_with?: String
  control?: FormControl
  control_not?: FormControl
  control_in?: FormControl[] | FormControl
  control_not_in?: FormControl[] | FormControl
  vertical?: Boolean
  vertical_not?: Boolean
  parentElement?: ID_Input
  parentElement_not?: ID_Input
  parentElement_in?: ID_Input[] | ID_Input
  parentElement_not_in?: ID_Input[] | ID_Input
  parentElement_lt?: ID_Input
  parentElement_lte?: ID_Input
  parentElement_gt?: ID_Input
  parentElement_gte?: ID_Input
  parentElement_contains?: ID_Input
  parentElement_not_contains?: ID_Input
  parentElement_starts_with?: ID_Input
  parentElement_not_starts_with?: ID_Input
  parentElement_ends_with?: ID_Input
  parentElement_not_ends_with?: ID_Input
  source?: DataDescriptorWhereInput
  _MagicalBackRelation_FormToFormElement_every?: FormWhereInput
  _MagicalBackRelation_FormToFormElement_some?: FormWhereInput
  _MagicalBackRelation_FormToFormElement_none?: FormWhereInput
}

export interface NotifyInput {
  userId?: ID_Input
  processInstanceId?: ID_Input
  code?: NotificationCode
  params: String[] | String
  type: NotificationType
}

export interface ResourceWhereInput {
  AND?: ResourceWhereInput[] | ResourceWhereInput
  OR?: ResourceWhereInput[] | ResourceWhereInput
  NOT?: ResourceWhereInput[] | ResourceWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  type?: ResourceType
  type_not?: ResourceType
  type_in?: ResourceType[] | ResourceType
  type_not_in?: ResourceType[] | ResourceType
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  link?: String
  link_not?: String
  link_in?: String[] | String
  link_not_in?: String[] | String
  link_lt?: String
  link_lte?: String
  link_gt?: String
  link_gte?: String
  link_contains?: String
  link_not_contains?: String
  link_starts_with?: String
  link_not_starts_with?: String
  link_ends_with?: String
  link_not_ends_with?: String
  form?: FormWhereInput
  document?: DocumentWhereInput
  _MagicalBackRelation_BpmnTaskToResource_every?: BpmnTaskWhereInput
  _MagicalBackRelation_BpmnTaskToResource_some?: BpmnTaskWhereInput
  _MagicalBackRelation_BpmnTaskToResource_none?: BpmnTaskWhereInput
  _MagicalBackRelation_BpmnProcessResources_every?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessResources_some?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessResources_none?: BpmnProcessWhereInput
}

export interface NotificationWhereInput {
  AND?: NotificationWhereInput[] | NotificationWhereInput
  OR?: NotificationWhereInput[] | NotificationWhereInput
  NOT?: NotificationWhereInput[] | NotificationWhereInput
  type?: NotificationType
  type_not?: NotificationType
  type_in?: NotificationType[] | NotificationType
  type_not_in?: NotificationType[] | NotificationType
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  userId?: ID_Input
  userId_not?: ID_Input
  userId_in?: ID_Input[] | ID_Input
  userId_not_in?: ID_Input[] | ID_Input
  userId_lt?: ID_Input
  userId_lte?: ID_Input
  userId_gt?: ID_Input
  userId_gte?: ID_Input
  userId_contains?: ID_Input
  userId_not_contains?: ID_Input
  userId_starts_with?: ID_Input
  userId_not_starts_with?: ID_Input
  userId_ends_with?: ID_Input
  userId_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  code?: NotificationCode
  code_not?: NotificationCode
  code_in?: NotificationCode[] | NotificationCode
  code_not_in?: NotificationCode[] | NotificationCode
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  visible?: Boolean
  visible_not?: Boolean
  processInstance?: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_UserNotifications_every?: UserWhereInput
  _MagicalBackRelation_UserNotifications_some?: UserWhereInput
  _MagicalBackRelation_UserNotifications_none?: UserWhereInput
}

export interface BpmnTaskWhereInput {
  AND?: BpmnTaskWhereInput[] | BpmnTaskWhereInput
  OR?: BpmnTaskWhereInput[] | BpmnTaskWhereInput
  NOT?: BpmnTaskWhereInput[] | BpmnTaskWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  taskId?: ID_Input
  taskId_not?: ID_Input
  taskId_in?: ID_Input[] | ID_Input
  taskId_not_in?: ID_Input[] | ID_Input
  taskId_lt?: ID_Input
  taskId_lte?: ID_Input
  taskId_gt?: ID_Input
  taskId_gte?: ID_Input
  taskId_contains?: ID_Input
  taskId_not_contains?: ID_Input
  taskId_starts_with?: ID_Input
  taskId_not_starts_with?: ID_Input
  taskId_ends_with?: ID_Input
  taskId_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  resources_every?: ResourceWhereInput
  resources_some?: ResourceWhereInput
  resources_none?: ResourceWhereInput
  _MagicalBackRelation_BpmnTaskToBpmnTaskInstance_every?: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnTaskToBpmnTaskInstance_some?: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnTaskToBpmnTaskInstance_none?: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BomnProcessTasks_every?: BpmnProcessWhereInput
  _MagicalBackRelation_BomnProcessTasks_some?: BpmnProcessWhereInput
  _MagicalBackRelation_BomnProcessTasks_none?: BpmnProcessWhereInput
}

export interface BpmnTaskInstancesInput {
  processInstanceId: String
}

export interface BpmnProcessWhereInput {
  AND?: BpmnProcessWhereInput[] | BpmnProcessWhereInput
  OR?: BpmnProcessWhereInput[] | BpmnProcessWhereInput
  NOT?: BpmnProcessWhereInput[] | BpmnProcessWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  actionCount?: Int
  actionCount_not?: Int
  actionCount_in?: Int[] | Int
  actionCount_not_in?: Int[] | Int
  actionCount_lt?: Int
  actionCount_lte?: Int
  actionCount_gt?: Int
  actionCount_gte?: Int
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  model?: String
  model_not?: String
  model_in?: String[] | String
  model_not_in?: String[] | String
  model_lt?: String
  model_lte?: String
  model_gt?: String
  model_gte?: String
  model_contains?: String
  model_not_contains?: String
  model_starts_with?: String
  model_not_starts_with?: String
  model_ends_with?: String
  model_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  type?: ProcessType
  type_not?: ProcessType
  type_in?: ProcessType[] | ProcessType
  type_not_in?: ProcessType[] | ProcessType
  status?: ProcessStatus
  status_not?: ProcessStatus
  status_in?: ProcessStatus[] | ProcessStatus
  status_not_in?: ProcessStatus[] | ProcessStatus
  version?: Int
  version_not?: Int
  version_in?: Int[] | Int
  version_not_in?: Int[] | Int
  version_lt?: Int
  version_lte?: Int
  version_gt?: Int
  version_gte?: Int
  access?: AccessWhereInput
  dataDescriptors_every?: DataDescriptorWhereInput
  dataDescriptors_some?: DataDescriptorWhereInput
  dataDescriptors_none?: DataDescriptorWhereInput
  resources_every?: ResourceWhereInput
  resources_some?: ResourceWhereInput
  resources_none?: ResourceWhereInput
  versions_every?: BpmnProcessWhereInput
  versions_some?: BpmnProcessWhereInput
  versions_none?: BpmnProcessWhereInput
  tasks_every?: BpmnTaskWhereInput
  tasks_some?: BpmnTaskWhereInput
  tasks_none?: BpmnTaskWhereInput
  _MagicalBackRelation_BpmnProcessVersions_every?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessVersions_some?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessVersions_none?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessInstanceProcess_every?: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceProcess_some?: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceProcess_none?: BpmnProcessInstanceWhereInput
}

export interface BpmnProcessInstancesInput {
  status?: BpmnProcessInstanceStatus
  name?: String
  dateStarted?: DateTime
  dateFinished?: DateTime
  duration?: Int
  processId?: String
  skip?: Int
  first?: Int
}

export interface CreateTaskInstanceInput {
  processInstanceId: String
  taskId: String
  performerRoles: String[] | String
}

export interface BpmnProcessesInput {
  status?: ProcessStatus
  name?: String
  skip?: Int
  first?: Int
}

export interface SetProcessInstanceStatusInput {
  processId: String
  status: BpmnProcessInstanceStatus
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  uid?: String
  uid_not?: String
  uid_in?: String[] | String
  uid_not_in?: String[] | String
  uid_lt?: String
  uid_lte?: String
  uid_gt?: String
  uid_gte?: String
  uid_contains?: String
  uid_not_contains?: String
  uid_starts_with?: String
  uid_not_starts_with?: String
  uid_ends_with?: String
  uid_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  notifications_every?: NotificationWhereInput
  notifications_some?: NotificationWhereInput
  notifications_none?: NotificationWhereInput
  processes_every?: BpmnProcessInstanceWhereInput
  processes_some?: BpmnProcessInstanceWhereInput
  processes_none?: BpmnProcessInstanceWhereInput
  data_every?: DataWhereInput
  data_some?: DataWhereInput
  data_none?: DataWhereInput
  _MagicalBackRelation_BpmnTaskInstanceToUser_every?: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnTaskInstanceToUser_some?: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnTaskInstanceToUser_none?: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_CommentToUser_every?: CommentWhereInput
  _MagicalBackRelation_CommentToUser_some?: CommentWhereInput
  _MagicalBackRelation_CommentToUser_none?: CommentWhereInput
}

export interface AccessWhereInput {
  AND?: AccessWhereInput[] | AccessWhereInput
  OR?: AccessWhereInput[] | AccessWhereInput
  NOT?: AccessWhereInput[] | AccessWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdById?: ID_Input
  createdById_not?: ID_Input
  createdById_in?: ID_Input[] | ID_Input
  createdById_not_in?: ID_Input[] | ID_Input
  createdById_lt?: ID_Input
  createdById_lte?: ID_Input
  createdById_gt?: ID_Input
  createdById_gte?: ID_Input
  createdById_contains?: ID_Input
  createdById_not_contains?: ID_Input
  createdById_starts_with?: ID_Input
  createdById_not_starts_with?: ID_Input
  createdById_ends_with?: ID_Input
  createdById_not_ends_with?: ID_Input
  createdOn?: DateTime
  createdOn_not?: DateTime
  createdOn_in?: DateTime[] | DateTime
  createdOn_not_in?: DateTime[] | DateTime
  createdOn_lt?: DateTime
  createdOn_lte?: DateTime
  createdOn_gt?: DateTime
  createdOn_gte?: DateTime
  modifiedById?: ID_Input
  modifiedById_not?: ID_Input
  modifiedById_in?: ID_Input[] | ID_Input
  modifiedById_not_in?: ID_Input[] | ID_Input
  modifiedById_lt?: ID_Input
  modifiedById_lte?: ID_Input
  modifiedById_gt?: ID_Input
  modifiedById_gte?: ID_Input
  modifiedById_contains?: ID_Input
  modifiedById_not_contains?: ID_Input
  modifiedById_starts_with?: ID_Input
  modifiedById_not_starts_with?: ID_Input
  modifiedById_ends_with?: ID_Input
  modifiedById_not_ends_with?: ID_Input
  modifiedOn?: DateTime
  modifiedOn_not?: DateTime
  modifiedOn_in?: DateTime[] | DateTime
  modifiedOn_not_in?: DateTime[] | DateTime
  modifiedOn_lt?: DateTime
  modifiedOn_lte?: DateTime
  modifiedOn_gt?: DateTime
  modifiedOn_gte?: DateTime
  read_every?: AccessConditionWhereInput
  read_some?: AccessConditionWhereInput
  read_none?: AccessConditionWhereInput
  write_every?: AccessConditionWhereInput
  write_some?: AccessConditionWhereInput
  write_none?: AccessConditionWhereInput
  execute_every?: AccessConditionWhereInput
  execute_some?: AccessConditionWhereInput
  execute_none?: AccessConditionWhereInput
  _MagicalBackRelation_BpmnProcessAccess_every?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessAccess_some?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessAccess_none?: BpmnProcessWhereInput
  _MagicalBackRelation_AccessToDataDescriptor_every?: DataDescriptorWhereInput
  _MagicalBackRelation_AccessToDataDescriptor_some?: DataDescriptorWhereInput
  _MagicalBackRelation_AccessToDataDescriptor_none?: DataDescriptorWhereInput
}

export interface CommentWhereInput {
  AND?: CommentWhereInput[] | CommentWhereInput
  OR?: CommentWhereInput[] | CommentWhereInput
  NOT?: CommentWhereInput[] | CommentWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  date?: DateTime
  date_not?: DateTime
  date_in?: DateTime[] | DateTime
  date_not_in?: DateTime[] | DateTime
  date_lt?: DateTime
  date_lte?: DateTime
  date_gt?: DateTime
  date_gte?: DateTime
  replyTo?: String
  replyTo_not?: String
  replyTo_in?: String[] | String
  replyTo_not_in?: String[] | String
  replyTo_lt?: String
  replyTo_lte?: String
  replyTo_gt?: String
  replyTo_gte?: String
  replyTo_contains?: String
  replyTo_not_contains?: String
  replyTo_starts_with?: String
  replyTo_not_starts_with?: String
  replyTo_ends_with?: String
  replyTo_not_ends_with?: String
  user?: UserWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToComment_every?: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToComment_some?: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToComment_none?: BpmnProcessInstanceWhereInput
}

export interface DataWhereInput {
  AND?: DataWhereInput[] | DataWhereInput
  OR?: DataWhereInput[] | DataWhereInput
  NOT?: DataWhereInput[] | DataWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  organisationId?: String
  organisationId_not?: String
  organisationId_in?: String[] | String
  organisationId_not_in?: String[] | String
  organisationId_lt?: String
  organisationId_lte?: String
  organisationId_gt?: String
  organisationId_gte?: String
  organisationId_contains?: String
  organisationId_not_contains?: String
  organisationId_starts_with?: String
  organisationId_not_starts_with?: String
  organisationId_ends_with?: String
  organisationId_not_ends_with?: String
  version?: Int
  version_not?: Int
  version_in?: Int[] | Int
  version_not_in?: Int[] | Int
  version_lt?: Int
  version_lte?: Int
  version_gt?: Int
  version_gte?: Int
  date?: DateTime
  date_not?: DateTime
  date_in?: DateTime[] | DateTime
  date_not_in?: DateTime[] | DateTime
  date_lt?: DateTime
  date_lte?: DateTime
  date_gt?: DateTime
  date_gte?: DateTime
  value?: String
  value_not?: String
  value_in?: String[] | String
  value_not_in?: String[] | String
  value_lt?: String
  value_lte?: String
  value_gt?: String
  value_gte?: String
  value_contains?: String
  value_not_contains?: String
  value_starts_with?: String
  value_not_starts_with?: String
  value_ends_with?: String
  value_not_ends_with?: String
  descriptor?: DataDescriptorWhereInput
  _MagicalBackRelation_UserData_every?: UserWhereInput
  _MagicalBackRelation_UserData_some?: UserWhereInput
  _MagicalBackRelation_UserData_none?: UserWhereInput
}

export interface BpmnProcessInstanceWhereInput {
  AND?: BpmnProcessInstanceWhereInput[] | BpmnProcessInstanceWhereInput
  OR?: BpmnProcessInstanceWhereInput[] | BpmnProcessInstanceWhereInput
  NOT?: BpmnProcessInstanceWhereInput[] | BpmnProcessInstanceWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  dateFinished?: DateTime
  dateFinished_not?: DateTime
  dateFinished_in?: DateTime[] | DateTime
  dateFinished_not_in?: DateTime[] | DateTime
  dateFinished_lt?: DateTime
  dateFinished_lte?: DateTime
  dateFinished_gt?: DateTime
  dateFinished_gte?: DateTime
  dateStarted?: DateTime
  dateStarted_not?: DateTime
  dateStarted_in?: DateTime[] | DateTime
  dateStarted_not_in?: DateTime[] | DateTime
  dateStarted_lt?: DateTime
  dateStarted_lte?: DateTime
  dateStarted_gt?: DateTime
  dateStarted_gte?: DateTime
  duration?: Int
  duration_not?: Int
  duration_in?: Int[] | Int
  duration_not_in?: Int[] | Int
  duration_lt?: Int
  duration_lte?: Int
  duration_gt?: Int
  duration_gte?: Int
  status?: BpmnProcessInstanceStatus
  status_not?: BpmnProcessInstanceStatus
  status_in?: BpmnProcessInstanceStatus[] | BpmnProcessInstanceStatus
  status_not_in?: BpmnProcessInstanceStatus[] | BpmnProcessInstanceStatus
  comments_every?: CommentWhereInput
  comments_some?: CommentWhereInput
  comments_none?: CommentWhereInput
  owner?: UserWhereInput
  process?: BpmnProcessWhereInput
  log_every?: LogWhereInput
  log_some?: LogWhereInput
  log_none?: LogWhereInput
  tasks_every?: BpmnTaskInstanceWhereInput
  tasks_some?: BpmnTaskInstanceWhereInput
  tasks_none?: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToNotification_every?: NotificationWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToNotification_some?: NotificationWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToNotification_none?: NotificationWhereInput
  _MagicalBackRelation_BpmnProcessTasks_every?: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnProcessTasks_some?: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnProcessTasks_none?: BpmnTaskInstanceWhereInput
}

export interface DocumentWhereInput {
  AND?: DocumentWhereInput[] | DocumentWhereInput
  OR?: DocumentWhereInput[] | DocumentWhereInput
  NOT?: DocumentWhereInput[] | DocumentWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  content?: String
  content_not?: String
  content_in?: String[] | String
  content_not_in?: String[] | String
  content_lt?: String
  content_lte?: String
  content_gt?: String
  content_gte?: String
  content_contains?: String
  content_not_contains?: String
  content_starts_with?: String
  content_not_starts_with?: String
  content_ends_with?: String
  content_not_ends_with?: String
  version?: Int
  version_not?: Int
  version_in?: Int[] | Int
  version_not_in?: Int[] | Int
  version_lt?: Int
  version_lte?: Int
  version_gt?: Int
  version_gte?: Int
  _MagicalBackRelation_ResourceDocument_every?: ResourceWhereInput
  _MagicalBackRelation_ResourceDocument_some?: ResourceWhereInput
  _MagicalBackRelation_ResourceDocument_none?: ResourceWhereInput
}

export interface LogWhereInput {
  AND?: LogWhereInput[] | LogWhereInput
  OR?: LogWhereInput[] | LogWhereInput
  NOT?: LogWhereInput[] | LogWhereInput
  elementId?: String
  elementId_not?: String
  elementId_in?: String[] | String
  elementId_not_in?: String[] | String
  elementId_lt?: String
  elementId_lte?: String
  elementId_gt?: String
  elementId_gte?: String
  elementId_contains?: String
  elementId_not_contains?: String
  elementId_starts_with?: String
  elementId_not_starts_with?: String
  elementId_ends_with?: String
  elementId_not_ends_with?: String
  elementName?: String
  elementName_not?: String
  elementName_in?: String[] | String
  elementName_not_in?: String[] | String
  elementName_lt?: String
  elementName_lte?: String
  elementName_gt?: String
  elementName_gte?: String
  elementName_contains?: String
  elementName_not_contains?: String
  elementName_starts_with?: String
  elementName_not_starts_with?: String
  elementName_ends_with?: String
  elementName_not_ends_with?: String
  date?: DateTime
  date_not?: DateTime
  date_in?: DateTime[] | DateTime
  date_not_in?: DateTime[] | DateTime
  date_lt?: DateTime
  date_lte?: DateTime
  date_gt?: DateTime
  date_gte?: DateTime
  processInstance?: BpmnProcessInstanceWhereInput
}

export interface AuthInput {
  user?: String
  password?: String
}

export interface SubmitFormInput {
  taskId: String
  form: String[] | String
}

export interface UpdateTaskInstanceStatusInput {
  taskId: String
  status: BpmnTaskInstanceStatus
}

export interface AccessConditionWhereInput {
  AND?: AccessConditionWhereInput[] | AccessConditionWhereInput
  OR?: AccessConditionWhereInput[] | AccessConditionWhereInput
  NOT?: AccessConditionWhereInput[] | AccessConditionWhereInput
  organisationId?: ID_Input
  organisationId_not?: ID_Input
  organisationId_in?: ID_Input[] | ID_Input
  organisationId_not_in?: ID_Input[] | ID_Input
  organisationId_lt?: ID_Input
  organisationId_lte?: ID_Input
  organisationId_gt?: ID_Input
  organisationId_gte?: ID_Input
  organisationId_contains?: ID_Input
  organisationId_not_contains?: ID_Input
  organisationId_starts_with?: ID_Input
  organisationId_not_starts_with?: ID_Input
  organisationId_ends_with?: ID_Input
  organisationId_not_ends_with?: ID_Input
  roleId?: ID_Input
  roleId_not?: ID_Input
  roleId_in?: ID_Input[] | ID_Input
  roleId_not_in?: ID_Input[] | ID_Input
  roleId_lt?: ID_Input
  roleId_lte?: ID_Input
  roleId_gt?: ID_Input
  roleId_gte?: ID_Input
  roleId_contains?: ID_Input
  roleId_not_contains?: ID_Input
  roleId_starts_with?: ID_Input
  roleId_not_starts_with?: ID_Input
  roleId_ends_with?: ID_Input
  roleId_not_ends_with?: ID_Input
  userId?: ID_Input
  userId_not?: ID_Input
  userId_in?: ID_Input[] | ID_Input
  userId_not_in?: ID_Input[] | ID_Input
  userId_lt?: ID_Input
  userId_lte?: ID_Input
  userId_gt?: ID_Input
  userId_gte?: ID_Input
  userId_contains?: ID_Input
  userId_not_contains?: ID_Input
  userId_starts_with?: ID_Input
  userId_not_starts_with?: ID_Input
  userId_ends_with?: ID_Input
  userId_not_ends_with?: ID_Input
  _MagicalBackRelation_CanRead_every?: AccessWhereInput
  _MagicalBackRelation_CanRead_some?: AccessWhereInput
  _MagicalBackRelation_CanRead_none?: AccessWhereInput
  _MagicalBackRelation_CanWrite_every?: AccessWhereInput
  _MagicalBackRelation_CanWrite_some?: AccessWhereInput
  _MagicalBackRelation_CanWrite_none?: AccessWhereInput
  _MagicalBackRelation_CanExecute_every?: AccessWhereInput
  _MagicalBackRelation_CanExecute_some?: AccessWhereInput
  _MagicalBackRelation_CanExecute_none?: AccessWhereInput
}

export interface BpmnTaskInstanceWhereInput {
  AND?: BpmnTaskInstanceWhereInput[] | BpmnTaskInstanceWhereInput
  OR?: BpmnTaskInstanceWhereInput[] | BpmnTaskInstanceWhereInput
  NOT?: BpmnTaskInstanceWhereInput[] | BpmnTaskInstanceWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  dateFinished?: DateTime
  dateFinished_not?: DateTime
  dateFinished_in?: DateTime[] | DateTime
  dateFinished_not_in?: DateTime[] | DateTime
  dateFinished_lt?: DateTime
  dateFinished_lte?: DateTime
  dateFinished_gt?: DateTime
  dateFinished_gte?: DateTime
  dateStarted?: DateTime
  dateStarted_not?: DateTime
  dateStarted_in?: DateTime[] | DateTime
  dateStarted_not_in?: DateTime[] | DateTime
  dateStarted_lt?: DateTime
  dateStarted_lte?: DateTime
  dateStarted_gt?: DateTime
  dateStarted_gte?: DateTime
  duration?: Int
  duration_not?: Int
  duration_in?: Int[] | Int
  duration_not_in?: Int[] | Int
  duration_lt?: Int
  duration_lte?: Int
  duration_gt?: Int
  duration_gte?: Int
  performerId?: String
  performerId_not?: String
  performerId_in?: String[] | String
  performerId_not_in?: String[] | String
  performerId_lt?: String
  performerId_lte?: String
  performerId_gt?: String
  performerId_gte?: String
  performerId_contains?: String
  performerId_not_contains?: String
  performerId_starts_with?: String
  performerId_not_starts_with?: String
  performerId_ends_with?: String
  performerId_not_ends_with?: String
  status?: BpmnTaskInstanceStatus
  status_not?: BpmnTaskInstanceStatus
  status_in?: BpmnTaskInstanceStatus[] | BpmnTaskInstanceStatus
  status_not_in?: BpmnTaskInstanceStatus[] | BpmnTaskInstanceStatus
  performer?: UserWhereInput
  processInstance?: BpmnProcessInstanceWhereInput
  task?: BpmnTaskWhereInput
  _MagicalBackRelation_BpmnProcessInstanceTasks_every?: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceTasks_some?: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceTasks_none?: BpmnProcessInstanceWhereInput
}

export interface FormWhereInput {
  AND?: FormWhereInput[] | FormWhereInput
  OR?: FormWhereInput[] | FormWhereInput
  NOT?: FormWhereInput[] | FormWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  elements_every?: FormElementWhereInput
  elements_some?: FormElementWhereInput
  elements_none?: FormElementWhereInput
  validations_every?: ValidatorWhereInput
  validations_some?: ValidatorWhereInput
  validations_none?: ValidatorWhereInput
  _MagicalBackRelation_ResourceReport_every?: ResourceWhereInput
  _MagicalBackRelation_ResourceReport_some?: ResourceWhereInput
  _MagicalBackRelation_ResourceReport_none?: ResourceWhereInput
}

export interface DataDescriptorWhereInput {
  AND?: DataDescriptorWhereInput[] | DataDescriptorWhereInput
  OR?: DataDescriptorWhereInput[] | DataDescriptorWhereInput
  NOT?: DataDescriptorWhereInput[] | DataDescriptorWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  defaultValue?: String
  defaultValue_not?: String
  defaultValue_in?: String[] | String
  defaultValue_not_in?: String[] | String
  defaultValue_lt?: String
  defaultValue_lte?: String
  defaultValue_gt?: String
  defaultValue_gte?: String
  defaultValue_contains?: String
  defaultValue_not_contains?: String
  defaultValue_starts_with?: String
  defaultValue_not_starts_with?: String
  defaultValue_ends_with?: String
  defaultValue_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  expression?: String
  expression_not?: String
  expression_in?: String[] | String
  expression_not_in?: String[] | String
  expression_lt?: String
  expression_lte?: String
  expression_gt?: String
  expression_gte?: String
  expression_contains?: String
  expression_not_contains?: String
  expression_starts_with?: String
  expression_not_starts_with?: String
  expression_ends_with?: String
  expression_not_ends_with?: String
  isArray?: Boolean
  isArray_not?: Boolean
  clone?: Boolean
  clone_not?: Boolean
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  type?: DataType
  type_not?: DataType
  type_in?: DataType[] | DataType
  type_not_in?: DataType[] | DataType
  parentDescriptor?: ID_Input
  parentDescriptor_not?: ID_Input
  parentDescriptor_in?: ID_Input[] | ID_Input
  parentDescriptor_not_in?: ID_Input[] | ID_Input
  parentDescriptor_lt?: ID_Input
  parentDescriptor_lte?: ID_Input
  parentDescriptor_gt?: ID_Input
  parentDescriptor_gte?: ID_Input
  parentDescriptor_contains?: ID_Input
  parentDescriptor_not_contains?: ID_Input
  parentDescriptor_starts_with?: ID_Input
  parentDescriptor_not_starts_with?: ID_Input
  parentDescriptor_ends_with?: ID_Input
  parentDescriptor_not_ends_with?: ID_Input
  access?: AccessWhereInput
  validators?: ValidatorWhereInput
  _MagicalBackRelation_DataToDataDescriptor_every?: DataWhereInput
  _MagicalBackRelation_DataToDataDescriptor_some?: DataWhereInput
  _MagicalBackRelation_DataToDataDescriptor_none?: DataWhereInput
  _MagicalBackRelation_DataDescriptorToFormElement_every?: FormElementWhereInput
  _MagicalBackRelation_DataDescriptorToFormElement_some?: FormElementWhereInput
  _MagicalBackRelation_DataDescriptorToFormElement_none?: FormElementWhereInput
  _MagicalBackRelation_BpmnProcessToDataDescriptor_every?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessToDataDescriptor_some?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessToDataDescriptor_none?: BpmnProcessWhereInput
}

export interface NotificationsInput {
  visible?: Boolean
  skip?: Int
  first?: Int
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface ValidatorPreviousValues {
  id: ID_Output
  name: String
  params: String[]
}

export interface AggregateComment {
  count: Int
}

export interface Document extends Node {
  id: ID_Output
  title: String
  content?: String
  version?: Int
}

export interface CommentPreviousValues {
  id: ID_Output
  text: String
  date: DateTime
  replyTo?: String
}

export interface FormElement extends Node {
  id: ID_Output
  row?: Int
  column?: Int
  width?: Int
  source?: DataDescriptor
  label?: String
  inline?: Boolean
  defaultValue?: String
  list?: String
  filterSource?: String
  filterColumn?: String
  control?: FormControl
  controlProps?: Json
  vertical?: Boolean
  parentElement?: ID_Output
}

/*
 * An edge in a connection.

 */
export interface DataEdge {
  node: Data
  cursor: String
}

export interface Form extends Node {
  id: ID_Output
  name: String
  description?: String
  elements?: FormElement[]
  validations?: Validator[]
}

export interface AggregateData {
  count: Int
}

export interface Resource extends Node {
  id: ID_Output
  type: ResourceType
  name: String
  link?: String
  form?: Form
  document?: Document
}

/*
 * An edge in a connection.

 */
export interface DataDescriptorEdge {
  node: DataDescriptor
  cursor: String
}

export interface BpmnProcess extends Node {
  id: ID_Output
  access: Access
  actionCount: Int
  dataDescriptors?: DataDescriptor[]
  description?: String
  model: String
  name: String
  type: ProcessType
  resources?: Resource[]
  status: ProcessStatus
  version: Int
  versions?: BpmnProcess[]
  tasks?: BpmnTask[]
}

export interface AggregateDataDescriptor {
  count: Int
}

export interface AccessCondition {
  organisationId?: ID_Output
  roleId?: ID_Output
  userId?: ID_Output
}

export interface DataDescriptorPreviousValues {
  id: ID_Output
  defaultValue?: String
  description?: String
  expression?: String
  isArray?: Boolean
  clone?: Boolean
  name?: String
  type?: DataType
  parentDescriptor?: ID_Output
}

export interface Access extends Node {
  id: ID_Output
  createdById: ID_Output
  createdOn?: DateTime
  modifiedById?: ID_Output
  modifiedOn?: DateTime
  read?: AccessCondition[]
  write?: AccessCondition[]
  execute?: AccessCondition[]
}

export interface DataPreviousValues {
  id: ID_Output
  organisationId?: String
  version?: Int
  date?: DateTime
  value?: String
}

export interface Data extends Node {
  id: ID_Output
  descriptor?: DataDescriptor
  organisationId?: String
  version?: Int
  date?: DateTime
  value?: String
}

/*
 * An edge in a connection.

 */
export interface DocumentEdge {
  node: Document
  cursor: String
}

export interface User extends Node {
  id: ID_Output
  uid: String
  name: String
  roles: String[]
  description?: String
  password: String
  notifications?: Notification[]
  processes?: BpmnProcessInstance[]
  data?: Data[]
}

export interface AggregateDocument {
  count: Int
}

export interface BpmnProcessInstance extends Node {
  id: ID_Output
  comments?: Comment[]
  dateFinished?: DateTime
  dateStarted: DateTime
  duration?: Int
  owner: User
  process: BpmnProcess
  data: Json
  log?: Log[]
  status: BpmnProcessInstanceStatus
  tasks?: BpmnTaskInstance[]
}

export interface Comment extends Node {
  id: ID_Output
  text: String
  user: User
  date: DateTime
  replyTo?: String
}

export interface RolePreviousValues {
  id: ID_Output
  name: String
  description?: String
}

export interface UserPreviousValues {
  id: ID_Output
  uid: String
  name: String
  roles: String[]
  description?: String
  password: String
}

export interface DocumentPreviousValues {
  id: ID_Output
  title: String
  content?: String
  version?: Int
}

export interface AggregateUser {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface AccessConditionEdge {
  node: AccessCondition
  cursor: String
}

/*
 * An edge in a connection.

 */
export interface FormEdge {
  node: Form
  cursor: String
}

export interface Notification extends Node {
  type: NotificationType
  id: ID_Output
  userId: ID_Output
  createdAt: DateTime
  code: NotificationCode
  text?: String
  processInstance: BpmnProcessInstance
  params: String[]
  visible: Boolean
}

export interface AggregateForm {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface AccessEdge {
  node: Access
  cursor: String
}

/*
 * An edge in a connection.

 */
export interface FormElementEdge {
  node: FormElement
  cursor: String
}

export interface AccessPreviousValues {
  id: ID_Output
  createdById: ID_Output
  createdOn?: DateTime
  modifiedById?: ID_Output
  modifiedOn?: DateTime
}

export interface AggregateFormElement {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface BpmnProcessEdge {
  node: BpmnProcess
  cursor: String
}

export interface FormElementPreviousValues {
  id: ID_Output
  row?: Int
  column?: Int
  width?: Int
  label?: String
  inline?: Boolean
  defaultValue?: String
  list?: String
  filterSource?: String
  filterColumn?: String
  control?: FormControl
  controlProps?: Json
  vertical?: Boolean
  parentElement?: ID_Output
}

/*
 * An edge in a connection.

 */
export interface BpmnProcessInstanceEdge {
  node: BpmnProcessInstance
  cursor: String
}

export interface FormPreviousValues {
  id: ID_Output
  name: String
  description?: String
}

export interface BpmnProcessInstancePreviousValues {
  id: ID_Output
  dateFinished?: DateTime
  dateStarted: DateTime
  duration?: Int
  data: Json
  status: BpmnProcessInstanceStatus
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

/*
 * An edge in a connection.

 */
export interface BpmnTaskEdge {
  node: BpmnTask
  cursor: String
}

/*
 * An edge in a connection.

 */
export interface LocalisationEdge {
  node: Localisation
  cursor: String
}

/*
 * An edge in a connection.

 */
export interface BpmnTaskInstanceEdge {
  node: BpmnTaskInstance
  cursor: String
}

export interface Localisation extends Node {
  id: ID_Output
  code: String
  text: String
  language: LanguageCode
}

export interface BpmnTaskInstancePreviousValues {
  id: ID_Output
  dateFinished?: DateTime
  dateStarted: DateTime
  duration?: Int
  performerId?: String
  performerRoles: String[]
  data?: Json
  status: BpmnTaskInstanceStatus
}

export interface AggregateLocalisation {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface CommentEdge {
  node: Comment
  cursor: String
}

export interface LocalisationPreviousValues {
  id: ID_Output
  code: String
  text: String
  language: LanguageCode
}

export interface BpmnTask extends Node {
  id: ID_Output
  taskId: ID_Output
  resources?: Resource[]
  name: String
}

/*
 * An edge in a connection.

 */
export interface LogEdge {
  node: Log
  cursor: String
}

export interface BpmnTaskInstance extends Node {
  id: ID_Output
  dateFinished?: DateTime
  dateStarted: DateTime
  duration?: Int
  performer?: User
  performerId?: String
  performerRoles: String[]
  processInstance: BpmnProcessInstance
  data?: Json
  status: BpmnTaskInstanceStatus
  task: BpmnTask
}

export interface AggregateLog {
  count: Int
}

export interface AuthPayload {
  user: User
  token: String
}

export interface LogPreviousValues {
  elementId: String
  elementName: String
  date: DateTime
}

export interface BpmnProcessInstanceOutput {
  activeElements: String[]
  executedElements: String[]
  processInstance?: BpmnProcessInstance
}

/*
 * An edge in a connection.

 */
export interface NotificationEdge {
  node: Notification
  cursor: String
}

export interface AggregateAccessCondition {
  count: Int
}

export interface AggregateNotification {
  count: Int
}

export interface AggregateAccess {
  count: Int
}

export interface NotificationPreviousValues {
  type: NotificationType
  id: ID_Output
  userId: ID_Output
  createdAt: DateTime
  code: NotificationCode
  text?: String
  params: String[]
  visible: Boolean
}

export interface AggregateBpmnProcess {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface OrganisationEdge {
  node: Organisation
  cursor: String
}

export interface BpmnProcessPreviousValues {
  id: ID_Output
  actionCount: Int
  description?: String
  model: String
  name: String
  type: ProcessType
  status: ProcessStatus
  version: Int
}

export interface Organisation extends Node {
  id: ID_Output
  name: String
  description?: String
}

export interface AggregateBpmnTaskInstance {
  count: Int
}

export interface AggregateOrganisation {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface ValidatorEdge {
  node: Validator
  cursor: String
}

export interface OrganisationPreviousValues {
  id: ID_Output
  name: String
  description?: String
}

export interface Validator extends Node {
  id: ID_Output
  name: String
  params: String[]
}

/*
 * An edge in a connection.

 */
export interface ResourceEdge {
  node: Resource
  cursor: String
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface AggregateResource {
  count: Int
}

export interface AggregateValidator {
  count: Int
}

export interface AggregateBpmnTask {
  count: Int
}

export interface AggregateRole {
  count: Int
}

export interface Role extends Node {
  id: ID_Output
  name: String
  description?: String
}

/*
 * An edge in a connection.

 */
export interface RoleEdge {
  node: Role
  cursor: String
}

export interface ResourcePreviousValues {
  id: ID_Output
  type: ResourceType
  name: String
  link?: String
}

export interface BpmnTaskPreviousValues {
  id: ID_Output
  taskId: ID_Output
  name: String
}

export interface AggregateBpmnProcessInstance {
  count: Int
}

export interface AccessConditionPreviousValues {
  organisationId?: ID_Output
  roleId?: ID_Output
  userId?: ID_Output
}

export interface DataDescriptor extends Node {
  id: ID_Output
  access?: Access
  defaultValue?: String
  description?: String
  expression?: String
  isArray?: Boolean
  clone?: Boolean
  name?: String
  type?: DataType
  validators?: Validator
  parentDescriptor?: ID_Output
}

export interface Log {
  processInstance: BpmnProcessInstance
  elementId: String
  elementName: String
  date: DateTime
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
Raw JSON value
*/
export type Json = any

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number