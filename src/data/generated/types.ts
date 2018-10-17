/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ResourceQuery
// ====================================================

export interface ResourceQuery_ResourceQuery {
  id: string;
  type: ResourceType;
  title: string;
  content: string;
}

export interface ResourceQuery_Process {
  id: string;
  schema: any | null;
}

export interface ResourceQuery {
  resourceQuery: ResourceQuery_ResourceQuery | null;
  process: ResourceQuery_Process;
}

export interface ResourceQueryVariables {
  formId: string;
  processId: string;
}

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

export interface ProcessQuery_Process_Resources_Resource {
  type: ResourceType;
  title: string;
  content: string;
}

export interface ProcessQuery_Process_Resources {
  id: string;
  readRole: string | null;
  resource: ProcessQuery_Process_Resources_Resource | null;
}

export interface ProcessQuery_Process {
  id: string;
  name: string;
  description: string | null;
  type: string;
  model: string;
  schema: any | null;
  resources: ProcessQuery_Process_Resources[] | null;
}

export interface ProcessQuery {
  process: ProcessQuery_Process;
}

export interface ProcessQueryVariables {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProcessesQuery
// ====================================================

export interface ProcessesQuery_Processes {
  actionCount: number;
  description: string | null;
  id: string;
  name: string;
  type: string;
}

export interface ProcessesQuery {
  processes: (ProcessesQuery_Processes | null)[];
}

export interface ProcessesQueryVariables {
  input: BpmnProcessesInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BpmnProcessInstanceQuery
// ====================================================

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Process_Resources_Resource {
  type: ResourceType;
  title: string;
  content: string;
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Process_Resources {
  id: string;
  readRole: string | null;
  resource: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Process_Resources_Resource | null;
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Process {
  id: string;
  name: string;
  description: string | null;
  type: string;
  model: string;
  schema: any | null;
  resources: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Process_Resources[] | null;
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Owner {
  id: string;
  name: string;
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks_Performer {
  id: string;
  name: string;
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks_Task_Resources {
  id: string;
  type: ResourceType;
  title: string;
  content: string;
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks_Task {
  id: string;
  name: string;
  type: BpmnTaskType | null;
  resources: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks_Task_Resources[] | null;
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks_PerformerRole {
  name: string;
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks {
  id: string;
  dateStarted: any;
  dateFinished: any | null;
  status: BpmnTaskInstanceStatus;
  performer: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks_Performer | null;
  data: any | null;
  task: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks_Task | null;
  performerRole: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks_PerformerRole | null;
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
  user: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Comments_User | null;
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery {
  id: string;
  status: BpmnProcessInstanceStatus;
  process: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Process | null;
  owner: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Owner | null;
  tasks: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks[] | null;
  log: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Log[] | null;
  comments: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Comments[] | null;
  data: string;
  dateStarted: any;
  dateFinished: any | null;
}

export interface BpmnProcessInstanceQuery {
  bpmnProcessInstanceQuery: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery | null;
}

export interface BpmnProcessInstanceQueryVariables {
  id: string;
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
}

export interface BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Tasks_Performer {
  id: string;
  name: string;
}

export interface BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Tasks_PerformerRole {
  name: string;
}

export interface BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Tasks {
  id: string;
  dateStarted: any;
  dateFinished: any | null;
  task: BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Tasks_Task | null;
  performer: BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Tasks_Performer | null;
  performerRole: BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Tasks_PerformerRole | null;
}

export interface BpmnProcessInstancesQuery_BpmnProcessInstancesQuery {
  id: string;
  status: BpmnProcessInstanceStatus;
  process: BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Process | null;
  owner: BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Owner | null;
  tasks: BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Tasks[] | null;
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
// GraphQL query operation: DocumentQuery
// ====================================================

export interface DocumentQuery_DocumentQuery {
  content: string;
  id: string;
  title: string;
  version: number;
}

export interface DocumentQuery {
  documentQuery: DocumentQuery_DocumentQuery | null;
}

export interface DocumentQueryVariables {
  id: string;
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
  content: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Schema
// ====================================================

export interface Schema {
  id: string;
  name: string;
  schema: any | null;
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
  type: ResourceType;
  title: string;
  content: string;
}

export interface BpmnProcessResource {
  id: string;
  readRole: string | null;
  resource: BpmnProcessResource_Resource | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BpmnProcessDefinition
// ====================================================

export interface BpmnProcessDefinition_Resources_Resource {
  type: ResourceType;
  title: string;
  content: string;
}

export interface BpmnProcessDefinition_Resources {
  id: string;
  readRole: string | null;
  resource: BpmnProcessDefinition_Resources_Resource | null;
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
  user: BpmnProcessComment_User | null;
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

export interface BpmnProcessInstanceTask_Task_Resources {
  id: string;
  type: ResourceType;
  title: string;
  content: string;
}

export interface BpmnProcessInstanceTask_Task {
  id: string;
  name: string;
  type: BpmnTaskType | null;
  resources: BpmnProcessInstanceTask_Task_Resources[] | null;
}

export interface BpmnProcessInstanceTask_PerformerRole {
  name: string;
}

export interface BpmnProcessInstanceTask {
  id: string;
  dateStarted: any;
  dateFinished: any | null;
  status: BpmnTaskInstanceStatus;
  performer: BpmnProcessInstanceTask_Performer | null;
  data: any | null;
  task: BpmnProcessInstanceTask_Task | null;
  performerRole: BpmnProcessInstanceTask_PerformerRole | null;
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

export interface BpmnProcessInstance_Process_Resources_Resource {
  type: ResourceType;
  title: string;
  content: string;
}

export interface BpmnProcessInstance_Process_Resources {
  id: string;
  readRole: string | null;
  resource: BpmnProcessInstance_Process_Resources_Resource | null;
}

export interface BpmnProcessInstance_Process {
  id: string;
  name: string;
  description: string | null;
  type: string;
  model: string;
  schema: any | null;
  resources: BpmnProcessInstance_Process_Resources[] | null;
}

export interface BpmnProcessInstance_Owner {
  id: string;
  name: string;
}

export interface BpmnProcessInstance_Tasks_Performer {
  id: string;
  name: string;
}

export interface BpmnProcessInstance_Tasks_Task_Resources {
  id: string;
  type: ResourceType;
  title: string;
  content: string;
}

export interface BpmnProcessInstance_Tasks_Task {
  id: string;
  name: string;
  type: BpmnTaskType | null;
  resources: BpmnProcessInstance_Tasks_Task_Resources[] | null;
}

export interface BpmnProcessInstance_Tasks_PerformerRole {
  name: string;
}

export interface BpmnProcessInstance_Tasks {
  id: string;
  dateStarted: any;
  dateFinished: any | null;
  status: BpmnTaskInstanceStatus;
  performer: BpmnProcessInstance_Tasks_Performer | null;
  data: any | null;
  task: BpmnProcessInstance_Tasks_Task | null;
  performerRole: BpmnProcessInstance_Tasks_PerformerRole | null;
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
  user: BpmnProcessInstance_Comments_User | null;
}

export interface BpmnProcessInstance {
  id: string;
  status: BpmnProcessInstanceStatus;
  process: BpmnProcessInstance_Process | null;
  owner: BpmnProcessInstance_Owner | null;
  tasks: BpmnProcessInstance_Tasks[] | null;
  log: BpmnProcessInstance_Log[] | null;
  comments: BpmnProcessInstance_Comments[] | null;
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
}

export interface BpmnProcessInstanceItemTask_Performer {
  id: string;
  name: string;
}

export interface BpmnProcessInstanceItemTask_PerformerRole {
  name: string;
}

export interface BpmnProcessInstanceItemTask {
  id: string;
  dateStarted: any;
  dateFinished: any | null;
  task: BpmnProcessInstanceItemTask_Task | null;
  performer: BpmnProcessInstanceItemTask_Performer | null;
  performerRole: BpmnProcessInstanceItemTask_PerformerRole | null;
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
}

export interface BpmnProcessInstanceItem_Tasks_Performer {
  id: string;
  name: string;
}

export interface BpmnProcessInstanceItem_Tasks_PerformerRole {
  name: string;
}

export interface BpmnProcessInstanceItem_Tasks {
  id: string;
  dateStarted: any;
  dateFinished: any | null;
  task: BpmnProcessInstanceItem_Tasks_Task | null;
  performer: BpmnProcessInstanceItem_Tasks_Performer | null;
  performerRole: BpmnProcessInstanceItem_Tasks_PerformerRole | null;
}

export interface BpmnProcessInstanceItem {
  id: string;
  status: BpmnProcessInstanceStatus;
  process: BpmnProcessInstanceItem_Process | null;
  owner: BpmnProcessInstanceItem_Owner | null;
  tasks: BpmnProcessInstanceItem_Tasks[] | null;
  dateStarted: any;
  dateFinished: any | null;
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
