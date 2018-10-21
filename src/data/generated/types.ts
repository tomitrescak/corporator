/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_Login_User {
  id: string;
  name: string;
  roles: string[];
}

export interface Login_Login {
  user: Login_Login_User;
  token: string;
}

export interface Login {
  login: Login_Login;
}

export interface LoginVariables {
  input: AuthInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Resume
// ====================================================

export interface Resume_Resume_User {
  id: string;
  name: string;
  roles: string[];
}

export interface Resume_Resume {
  user: Resume_Resume_User;
  token: string;
}

export interface Resume {
  resume: Resume_Resume;
}

export interface ResumeVariables {
  token: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveNotificationMutation
// ====================================================

export interface RemoveNotificationMutation {
  removeNotification: string | null;
}

export interface RemoveNotificationMutationVariables {
  id?: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ClearNotificationsMutation
// ====================================================

export interface ClearNotificationsMutation {
  clearNotifications: boolean | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: NotificationsQuery
// ====================================================

export interface NotificationsQuery_NotificationsQuery_ProcessInstance_Process {
  name: string;
}

export interface NotificationsQuery_NotificationsQuery_ProcessInstance {
  id: string;
  process: NotificationsQuery_NotificationsQuery_ProcessInstance_Process | null;
}

export interface NotificationsQuery_NotificationsQuery {
  id: string;
  createdAt: any;
  text: string | null;
  type: NotificationType;
  processInstance: NotificationsQuery_NotificationsQuery_ProcessInstance | null;
}

export interface NotificationsQuery {
  notificationsQuery: (NotificationsQuery_NotificationsQuery | null)[];
}

export interface NotificationsQueryVariables {
  input?: NotificationsInput | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProcessQuery
// ====================================================

export interface ProcessQuery_BpmnProcessQuery_Resources_Resource {
  id: string;
  type: ResourceType;
  title: string;
  content: string | null;
}

export interface ProcessQuery_BpmnProcessQuery_Resources {
  id: string;
  readRoles: string[] | null;
  resource: ProcessQuery_BpmnProcessQuery_Resources_Resource;
}

export interface ProcessQuery_BpmnProcessQuery {
  id: string;
  name: string;
  description: string | null;
  type: string;
  model: string;
  schema: any | null;
  resources: ProcessQuery_BpmnProcessQuery_Resources[] | null;
}

export interface ProcessQuery {
  bpmnProcessQuery: ProcessQuery_BpmnProcessQuery;
}

export interface ProcessQueryVariables {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BpmnProcessesQuery
// ====================================================

export interface BpmnProcessesQuery_BpmnProcessesQuery {
  actionCount: number;
  description: string | null;
  id: string;
  name: string;
  type: string;
}

export interface BpmnProcessesQuery {
  bpmnProcessesQuery: (BpmnProcessesQuery_BpmnProcessesQuery | null)[];
}

export interface BpmnProcessesQueryVariables {
  input: BpmnProcessesInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BpmnProcessInstanceQuery
// ====================================================

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Owner {
  id: string;
  name: string;
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks_Performer {
  id: string;
  name: string;
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks_Task {
  id: string;
  name: string;
  type: BpmnTaskType | null;
  resources: string[];
  performerRoles: string[];
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks {
  id: string;
  dateStarted: any;
  dateFinished: any | null;
  status: BpmnTaskInstanceStatus;
  performer: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks_Performer | null;
  data: any | null;
  task: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks_Task | null;
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Log_Performer {
  id: string;
  name: string;
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Log {
  id: string;
  date: any;
  elementId: string;
  elementName: string;
  performer: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Log_Performer | null;
  message: string | null;
  status: BpmnTaskInstanceStatus | null;
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Comments_User {
  name: string;
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Comments {
  id: string;
  date: any;
  replyTo: string | null;
  text: string;
  user: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Comments_User;
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery {
  id: string;
  status: BpmnProcessInstanceStatus;
  owner: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Owner | null;
  tasks: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks[];
  log: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Log[];
  comments: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Comments[];
  data: string;
  dateStarted: any;
  dateFinished: any | null;
}

export interface BpmnProcessInstanceQuery_BpmnProcessQuery_Resources_Resource {
  id: string;
  type: ResourceType;
  title: string;
  content: string | null;
}

export interface BpmnProcessInstanceQuery_BpmnProcessQuery_Resources {
  id: string;
  readRoles: string[] | null;
  resource: BpmnProcessInstanceQuery_BpmnProcessQuery_Resources_Resource;
}

export interface BpmnProcessInstanceQuery_BpmnProcessQuery {
  id: string;
  name: string;
  description: string | null;
  type: string;
  model: string;
  schema: any | null;
  resources: BpmnProcessInstanceQuery_BpmnProcessQuery_Resources[] | null;
}

export interface BpmnProcessInstanceQuery {
  bpmnProcessInstanceQuery: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery | null;
  bpmnProcessQuery: BpmnProcessInstanceQuery_BpmnProcessQuery;
}

export interface BpmnProcessInstanceQueryVariables {
  processId: string;
  processInstanceId: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BpmnProcessInstancesQuery
// ====================================================

export interface BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Process {
  id: string;
  name: string;
  description: string | null;
  type: string;
}

export interface BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Owner {
  id: string;
  name: string;
}

export interface BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Tasks_Task {
  id: string;
  name: string;
  performerRoles: string[];
}

export interface BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Tasks_Performer {
  id: string;
  name: string;
}

export interface BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Tasks {
  id: string;
  dateStarted: any;
  dateFinished: any | null;
  task: BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Tasks_Task | null;
  performer: BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Tasks_Performer | null;
}

export interface BpmnProcessInstancesQuery_BpmnProcessInstancesQuery {
  id: string;
  status: BpmnProcessInstanceStatus;
  process: BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Process | null;
  owner: BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Owner | null;
  tasks: BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Tasks[];
  dateStarted: any;
  dateFinished: any | null;
}

export interface BpmnProcessInstancesQuery {
  bpmnProcessInstancesQuery: (BpmnProcessInstancesQuery_BpmnProcessInstancesQuery | null)[];
}

export interface BpmnProcessInstancesQueryVariables {
  input: BpmnProcessInstancesInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FormQuery
// ====================================================

export interface FormQuery_ProcessResourceQuery {
  id: string;
  type: ResourceType;
  title: string;
  content: string | null;
}

export interface FormQuery_BpmnProcessQuery {
  id: string;
  schema: any | null;
}

export interface FormQuery {
  processResourceQuery: FormQuery_ProcessResourceQuery | null;
  bpmnProcessQuery: FormQuery_BpmnProcessQuery;
}

export interface FormQueryVariables {
  formId: string;
  processId: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProcessResourceQuery
// ====================================================

export interface ProcessResourceQuery_ProcessResourceQuery {
  id: string;
  type: ResourceType;
  title: string;
  content: string | null;
}

export interface ProcessResourceQuery {
  processResourceQuery: ProcessResourceQuery_ProcessResourceQuery | null;
}

export interface ProcessResourceQueryVariables {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ResourceQuery
// ====================================================

export interface ResourceQuery_ResourceQuery {
  id: string;
  type: ResourceType;
  title: string;
  content: string | null;
}

export interface ResourceQuery {
  resourceQuery: ResourceQuery_ResourceQuery | null;
}

export interface ResourceQueryVariables {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Schema
// ====================================================

export interface Schema {
  id: string;
  name: string;
  schema: any;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: User
// ====================================================

export interface User {
  id: string;
  name: string;
  roles: string[];
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Notifications
// ====================================================

export interface Notifications_ProcessInstance_Process {
  name: string;
}

export interface Notifications_ProcessInstance {
  id: string;
  process: Notifications_ProcessInstance_Process | null;
}

export interface Notifications {
  id: string;
  createdAt: any;
  text: string | null;
  type: NotificationType;
  processInstance: Notifications_ProcessInstance | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BpmnProcessResource
// ====================================================

export interface BpmnProcessResource_Resource {
  id: string;
  type: ResourceType;
  title: string;
  content: string | null;
}

export interface BpmnProcessResource {
  id: string;
  readRoles: string[] | null;
  resource: BpmnProcessResource_Resource;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BpmnProcessDefinition
// ====================================================

export interface BpmnProcessDefinition_Resources_Resource {
  id: string;
  type: ResourceType;
  title: string;
  content: string | null;
}

export interface BpmnProcessDefinition_Resources {
  id: string;
  readRoles: string[] | null;
  resource: BpmnProcessDefinition_Resources_Resource;
}

export interface BpmnProcessDefinition {
  id: string;
  name: string;
  description: string | null;
  type: string;
  model: string;
  schema: any | null;
  resources: BpmnProcessDefinition_Resources[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BpmnProcessItem
// ====================================================

export interface BpmnProcessItem {
  actionCount: number;
  description: string | null;
  id: string;
  name: string;
  type: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BpmnProcessComment
// ====================================================

export interface BpmnProcessComment_User {
  name: string;
}

export interface BpmnProcessComment {
  id: string;
  date: any;
  replyTo: string | null;
  text: string;
  user: BpmnProcessComment_User;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BpmnProcessInstanceTask
// ====================================================

export interface BpmnProcessInstanceTask_Performer {
  id: string;
  name: string;
}

export interface BpmnProcessInstanceTask_Task {
  id: string;
  name: string;
  type: BpmnTaskType | null;
  resources: string[];
  performerRoles: string[];
}

export interface BpmnProcessInstanceTask {
  id: string;
  dateStarted: any;
  dateFinished: any | null;
  status: BpmnTaskInstanceStatus;
  performer: BpmnProcessInstanceTask_Performer | null;
  data: any | null;
  task: BpmnProcessInstanceTask_Task | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LogMessage
// ====================================================

export interface LogMessage_Performer {
  id: string;
  name: string;
}

export interface LogMessage {
  id: string;
  date: any;
  elementId: string;
  elementName: string;
  performer: LogMessage_Performer | null;
  message: string | null;
  status: BpmnTaskInstanceStatus | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BpmnProcessInstance
// ====================================================

export interface BpmnProcessInstance_Owner {
  id: string;
  name: string;
}

export interface BpmnProcessInstance_Tasks_Performer {
  id: string;
  name: string;
}

export interface BpmnProcessInstance_Tasks_Task {
  id: string;
  name: string;
  type: BpmnTaskType | null;
  resources: string[];
  performerRoles: string[];
}

export interface BpmnProcessInstance_Tasks {
  id: string;
  dateStarted: any;
  dateFinished: any | null;
  status: BpmnTaskInstanceStatus;
  performer: BpmnProcessInstance_Tasks_Performer | null;
  data: any | null;
  task: BpmnProcessInstance_Tasks_Task | null;
}

export interface BpmnProcessInstance_Log_Performer {
  id: string;
  name: string;
}

export interface BpmnProcessInstance_Log {
  id: string;
  date: any;
  elementId: string;
  elementName: string;
  performer: BpmnProcessInstance_Log_Performer | null;
  message: string | null;
  status: BpmnTaskInstanceStatus | null;
}

export interface BpmnProcessInstance_Comments_User {
  name: string;
}

export interface BpmnProcessInstance_Comments {
  id: string;
  date: any;
  replyTo: string | null;
  text: string;
  user: BpmnProcessInstance_Comments_User;
}

export interface BpmnProcessInstance {
  id: string;
  status: BpmnProcessInstanceStatus;
  owner: BpmnProcessInstance_Owner | null;
  tasks: BpmnProcessInstance_Tasks[];
  log: BpmnProcessInstance_Log[];
  comments: BpmnProcessInstance_Comments[];
  data: string;
  dateStarted: any;
  dateFinished: any | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BpmnProcessInstanceItemTask
// ====================================================

export interface BpmnProcessInstanceItemTask_Task {
  id: string;
  name: string;
  performerRoles: string[];
}

export interface BpmnProcessInstanceItemTask_Performer {
  id: string;
  name: string;
}

export interface BpmnProcessInstanceItemTask {
  id: string;
  dateStarted: any;
  dateFinished: any | null;
  task: BpmnProcessInstanceItemTask_Task | null;
  performer: BpmnProcessInstanceItemTask_Performer | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BpmnProcessInstanceItem
// ====================================================

export interface BpmnProcessInstanceItem_Process {
  id: string;
  name: string;
  description: string | null;
  type: string;
}

export interface BpmnProcessInstanceItem_Owner {
  id: string;
  name: string;
}

export interface BpmnProcessInstanceItem_Tasks_Task {
  id: string;
  name: string;
  performerRoles: string[];
}

export interface BpmnProcessInstanceItem_Tasks_Performer {
  id: string;
  name: string;
}

export interface BpmnProcessInstanceItem_Tasks {
  id: string;
  dateStarted: any;
  dateFinished: any | null;
  task: BpmnProcessInstanceItem_Tasks_Task | null;
  performer: BpmnProcessInstanceItem_Tasks_Performer | null;
}

export interface BpmnProcessInstanceItem {
  id: string;
  status: BpmnProcessInstanceStatus;
  process: BpmnProcessInstanceItem_Process | null;
  owner: BpmnProcessInstanceItem_Owner | null;
  tasks: BpmnProcessInstanceItem_Tasks[];
  dateStarted: any;
  dateFinished: any | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Resource
// ====================================================

export interface Resource {
  id: string;
  type: ResourceType;
  title: string;
  content: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum BpmnProcessInstanceStatus {
  Aborted = "Aborted",
  Finished = "Finished",
  Paused = "Paused",
  Running = "Running",
}

export enum BpmnTaskInstanceStatus {
  Aborted = "Aborted",
  Approved = "Approved",
  Finished = "Finished",
  Paused = "Paused",
  Rejected = "Rejected",
  Started = "Started",
}

export enum BpmnTaskType {
  Form = "Form",
}

export enum NotificationType {
  Error = "Error",
  Info = "Info",
  Warning = "Warning",
}

export enum PublicationStatus {
  Draft = "Draft",
  Proposal = "Proposal",
  Published = "Published",
}

export enum ResourceType {
  Document = "Document",
  File = "File",
  Form = "Form",
  Url = "Url",
}

export interface AuthInput {
  user?: string | null;
  password?: string | null;
}

export interface BpmnProcessInstancesInput {
  status?: BpmnProcessInstanceStatus | null;
  name?: string | null;
  dateStarted?: any | null;
  dateFinished?: any | null;
  duration?: number | null;
  processId?: string | null;
  skip?: number | null;
  first?: number | null;
}

export interface BpmnProcessesInput {
  status?: PublicationStatus | null;
  name?: string | null;
  skip?: number | null;
  first?: number | null;
}

export interface NotificationsInput {
  visible?: boolean | null;
  skip?: number | null;
  first?: number | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
