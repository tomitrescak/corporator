/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FormQuery
// ====================================================

export interface FormQuery_formQuery_elements_source_validators {
  id: string;
  name: string;
  params: string[];
}

export interface FormQuery_formQuery_elements_source {
  id: string;
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  isArray: boolean | null;
  name: string | null;
  type: DataType | null;
  parentDescriptor: string | null;
  validators: FormQuery_formQuery_elements_source_validators | null;
}

export interface FormQuery_formQuery_elements {
  id: string;
  column: number | null;
  control: FormControl | null;
  controlProps: any | null;
  defaultValue: string | null;
  filterColumn: string | null;
  filterSource: string | null;
  inline: boolean | null;
  label: string | null;
  list: string | null;
  row: number | null;
  source: FormQuery_formQuery_elements_source | null;
  vertical: boolean | null;
  width: number | null;
  parentElement: string | null;
}

export interface FormQuery_formQuery_validations {
  id: string;
  name: string;
  params: string[];
}

export interface FormQuery_formQuery {
  id: string;
  name: string;
  description: string | null;
  elements: FormQuery_formQuery_elements[] | null;
  validations: FormQuery_formQuery_validations[] | null;
}

export interface FormQuery_process_dataDescriptors_validators {
  id: string;
  name: string;
  params: string[];
}

export interface FormQuery_process_dataDescriptors {
  id: string;
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  isArray: boolean | null;
  name: string | null;
  type: DataType | null;
  parentDescriptor: string | null;
  validators: FormQuery_process_dataDescriptors_validators | null;
}

export interface FormQuery_process {
  id: string;
  dataDescriptors: FormQuery_process_dataDescriptors[] | null;
}

export interface FormQuery {
  formQuery: FormQuery_formQuery | null;
  process: FormQuery_process;
}

export interface FormQueryVariables {
  formId: string;
  processId: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login_user {
  id: string;
  name: string;
  roles: string[];
}

export interface Login_login {
  user: Login_login_user;
  token: string;
}

export interface Login {
  login: Login_login;
}

export interface LoginVariables {
  input: AuthInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Resume
// ====================================================

export interface Resume_resume_user {
  id: string;
  name: string;
  roles: string[];
}

export interface Resume_resume {
  user: Resume_resume_user;
  token: string;
}

export interface Resume {
  resume: Resume_resume;
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

export interface NotificationsQuery_notificationsQuery_processInstance_process {
  name: string;
}

export interface NotificationsQuery_notificationsQuery_processInstance {
  id: string;
  process: NotificationsQuery_notificationsQuery_processInstance_process;
}

export interface NotificationsQuery_notificationsQuery {
  id: string;
  createdAt: any;
  text: string | null;
  type: NotificationType;
  processInstance: NotificationsQuery_notificationsQuery_processInstance;
}

export interface NotificationsQuery {
  notificationsQuery: (NotificationsQuery_notificationsQuery | null)[];
}

export interface NotificationsQueryVariables {
  input?: NotificationsInput | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProcessQuery
// ====================================================

export interface ProcessQuery_process_resources_form {
  id: string;
}

export interface ProcessQuery_process_resources_document {
  id: string;
}

export interface ProcessQuery_process_resources {
  name: string;
  type: ResourceType;
  id: string;
  link: string | null;
  form: ProcessQuery_process_resources_form | null;
  document: ProcessQuery_process_resources_document | null;
}

export interface ProcessQuery_process {
  id: string;
  name: string;
  description: string | null;
  type: ProcessType;
  model: string;
  resources: ProcessQuery_process_resources[] | null;
}

export interface ProcessQuery {
  process: ProcessQuery_process;
}

export interface ProcessQueryVariables {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProcessesQuery
// ====================================================

export interface ProcessesQuery_processes {
  actionCount: number;
  description: string | null;
  id: string;
  name: string;
  type: ProcessType;
}

export interface ProcessesQuery {
  processes: (ProcessesQuery_processes | null)[];
}

export interface ProcessesQueryVariables {
  input: BpmnProcessesInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BpmnProcessInstanceQuery
// ====================================================

export interface BpmnProcessInstanceQuery_bpmnProcessInstanceQuery_process_resources_form {
  id: string;
}

export interface BpmnProcessInstanceQuery_bpmnProcessInstanceQuery_process_resources_document {
  id: string;
}

export interface BpmnProcessInstanceQuery_bpmnProcessInstanceQuery_process_resources {
  name: string;
  type: ResourceType;
  id: string;
  link: string | null;
  form: BpmnProcessInstanceQuery_bpmnProcessInstanceQuery_process_resources_form | null;
  document: BpmnProcessInstanceQuery_bpmnProcessInstanceQuery_process_resources_document | null;
}

export interface BpmnProcessInstanceQuery_bpmnProcessInstanceQuery_process {
  id: string;
  name: string;
  description: string | null;
  type: ProcessType;
  model: string;
  resources: BpmnProcessInstanceQuery_bpmnProcessInstanceQuery_process_resources[] | null;
}

export interface BpmnProcessInstanceQuery_bpmnProcessInstanceQuery_owner {
  name: string;
}

export interface BpmnProcessInstanceQuery_bpmnProcessInstanceQuery_tasks_performer {
  name: string;
}

export interface BpmnProcessInstanceQuery_bpmnProcessInstanceQuery_tasks_task_resources {
  id: string;
}

export interface BpmnProcessInstanceQuery_bpmnProcessInstanceQuery_tasks_task {
  name: string;
  type: BpmnTaskType;
  resources: BpmnProcessInstanceQuery_bpmnProcessInstanceQuery_tasks_task_resources[] | null;
}

export interface BpmnProcessInstanceQuery_bpmnProcessInstanceQuery_tasks {
  id: string;
  dateStarted: any;
  dateFinished: any | null;
  status: BpmnTaskInstanceStatus;
  performer: BpmnProcessInstanceQuery_bpmnProcessInstanceQuery_tasks_performer | null;
  task: BpmnProcessInstanceQuery_bpmnProcessInstanceQuery_tasks_task;
  performerRoles: string[];
}

export interface BpmnProcessInstanceQuery_bpmnProcessInstanceQuery_log {
  date: any;
  elementId: string;
}

export interface BpmnProcessInstanceQuery_bpmnProcessInstanceQuery_comments_user {
  name: string;
}

export interface BpmnProcessInstanceQuery_bpmnProcessInstanceQuery_comments {
  id: string;
  date: any;
  replyTo: string | null;
  text: string;
  user: BpmnProcessInstanceQuery_bpmnProcessInstanceQuery_comments_user;
}

export interface BpmnProcessInstanceQuery_bpmnProcessInstanceQuery {
  id: string;
  status: BpmnProcessInstanceStatus;
  process: BpmnProcessInstanceQuery_bpmnProcessInstanceQuery_process;
  owner: BpmnProcessInstanceQuery_bpmnProcessInstanceQuery_owner;
  tasks: BpmnProcessInstanceQuery_bpmnProcessInstanceQuery_tasks[] | null;
  log: BpmnProcessInstanceQuery_bpmnProcessInstanceQuery_log[] | null;
  comments: BpmnProcessInstanceQuery_bpmnProcessInstanceQuery_comments[] | null;
  data: any;
  dateStarted: any;
  dateFinished: any | null;
}

export interface BpmnProcessInstanceQuery {
  bpmnProcessInstanceQuery: BpmnProcessInstanceQuery_bpmnProcessInstanceQuery | null;
}

export interface BpmnProcessInstanceQueryVariables {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BpmnProcessInstancesQuery
// ====================================================

export interface BpmnProcessInstancesQuery_bpmnProcessInstancesQuery_process {
  name: string;
  description: string | null;
  type: ProcessType;
}

export interface BpmnProcessInstancesQuery_bpmnProcessInstancesQuery_owner {
  name: string;
}

export interface BpmnProcessInstancesQuery_bpmnProcessInstancesQuery_tasks_task {
  name: string;
}

export interface BpmnProcessInstancesQuery_bpmnProcessInstancesQuery_tasks_performer {
  name: string;
}

export interface BpmnProcessInstancesQuery_bpmnProcessInstancesQuery_tasks {
  dateStarted: any;
  dateFinished: any | null;
  task: BpmnProcessInstancesQuery_bpmnProcessInstancesQuery_tasks_task;
  performer: BpmnProcessInstancesQuery_bpmnProcessInstancesQuery_tasks_performer | null;
  performerRoles: string[];
}

export interface BpmnProcessInstancesQuery_bpmnProcessInstancesQuery {
  id: string;
  status: BpmnProcessInstanceStatus;
  process: BpmnProcessInstancesQuery_bpmnProcessInstancesQuery_process;
  owner: BpmnProcessInstancesQuery_bpmnProcessInstancesQuery_owner;
  tasks: BpmnProcessInstancesQuery_bpmnProcessInstancesQuery_tasks[] | null;
  dateStarted: any;
  dateFinished: any | null;
}

export interface BpmnProcessInstancesQuery {
  bpmnProcessInstancesQuery: (BpmnProcessInstancesQuery_bpmnProcessInstancesQuery | null)[];
}

export interface BpmnProcessInstancesQueryVariables {
  input: BpmnProcessInstancesInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: DocumentQuery
// ====================================================

export interface DocumentQuery_documentQuery {
  content: string | null;
  id: string;
  title: string;
  version: number | null;
}

export interface DocumentQuery {
  documentQuery: DocumentQuery_documentQuery | null;
}

export interface DocumentQueryVariables {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Validator
// ====================================================

export interface Validator {
  id: string;
  name: string;
  params: string[];
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: DataDescriptor
// ====================================================

export interface DataDescriptor_validators {
  id: string;
  name: string;
  params: string[];
}

export interface DataDescriptor {
  id: string;
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  isArray: boolean | null;
  name: string | null;
  type: DataType | null;
  parentDescriptor: string | null;
  validators: DataDescriptor_validators | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FormElement
// ====================================================

export interface FormElement_source_validators {
  id: string;
  name: string;
  params: string[];
}

export interface FormElement_source {
  id: string;
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  isArray: boolean | null;
  name: string | null;
  type: DataType | null;
  parentDescriptor: string | null;
  validators: FormElement_source_validators | null;
}

export interface FormElement {
  id: string;
  column: number | null;
  control: FormControl | null;
  controlProps: any | null;
  defaultValue: string | null;
  filterColumn: string | null;
  filterSource: string | null;
  inline: boolean | null;
  label: string | null;
  list: string | null;
  row: number | null;
  source: FormElement_source | null;
  vertical: boolean | null;
  width: number | null;
  parentElement: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Form
// ====================================================

export interface Form_elements_source_validators {
  id: string;
  name: string;
  params: string[];
}

export interface Form_elements_source {
  id: string;
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  isArray: boolean | null;
  name: string | null;
  type: DataType | null;
  parentDescriptor: string | null;
  validators: Form_elements_source_validators | null;
}

export interface Form_elements {
  id: string;
  column: number | null;
  control: FormControl | null;
  controlProps: any | null;
  defaultValue: string | null;
  filterColumn: string | null;
  filterSource: string | null;
  inline: boolean | null;
  label: string | null;
  list: string | null;
  row: number | null;
  source: Form_elements_source | null;
  vertical: boolean | null;
  width: number | null;
  parentElement: string | null;
}

export interface Form_validations {
  id: string;
  name: string;
  params: string[];
}

export interface Form {
  id: string;
  name: string;
  description: string | null;
  elements: Form_elements[] | null;
  validations: Form_validations[] | null;
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

export interface Notifications_processInstance_process {
  name: string;
}

export interface Notifications_processInstance {
  id: string;
  process: Notifications_processInstance_process;
}

export interface Notifications {
  id: string;
  createdAt: any;
  text: string | null;
  type: NotificationType;
  processInstance: Notifications_processInstance;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BpmnProcessResource
// ====================================================

export interface BpmnProcessResource_form {
  id: string;
}

export interface BpmnProcessResource_document {
  id: string;
}

export interface BpmnProcessResource {
  name: string;
  type: ResourceType;
  id: string;
  link: string | null;
  form: BpmnProcessResource_form | null;
  document: BpmnProcessResource_document | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BpmnProcessDefinition
// ====================================================

export interface BpmnProcessDefinition_resources_form {
  id: string;
}

export interface BpmnProcessDefinition_resources_document {
  id: string;
}

export interface BpmnProcessDefinition_resources {
  name: string;
  type: ResourceType;
  id: string;
  link: string | null;
  form: BpmnProcessDefinition_resources_form | null;
  document: BpmnProcessDefinition_resources_document | null;
}

export interface BpmnProcessDefinition {
  id: string;
  name: string;
  description: string | null;
  type: ProcessType;
  model: string;
  resources: BpmnProcessDefinition_resources[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BpmnProcessComment
// ====================================================

export interface BpmnProcessComment_user {
  name: string;
}

export interface BpmnProcessComment {
  id: string;
  date: any;
  replyTo: string | null;
  text: string;
  user: BpmnProcessComment_user;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BpmnProcessTask
// ====================================================

export interface BpmnProcessTask_performer {
  name: string;
}

export interface BpmnProcessTask_task_resources {
  id: string;
}

export interface BpmnProcessTask_task {
  name: string;
  type: BpmnTaskType;
  resources: BpmnProcessTask_task_resources[] | null;
}

export interface BpmnProcessTask {
  id: string;
  dateStarted: any;
  dateFinished: any | null;
  status: BpmnTaskInstanceStatus;
  performer: BpmnProcessTask_performer | null;
  task: BpmnProcessTask_task;
  performerRoles: string[];
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BpmnProcessInstance
// ====================================================

export interface BpmnProcessInstance_process_resources_form {
  id: string;
}

export interface BpmnProcessInstance_process_resources_document {
  id: string;
}

export interface BpmnProcessInstance_process_resources {
  name: string;
  type: ResourceType;
  id: string;
  link: string | null;
  form: BpmnProcessInstance_process_resources_form | null;
  document: BpmnProcessInstance_process_resources_document | null;
}

export interface BpmnProcessInstance_process {
  id: string;
  name: string;
  description: string | null;
  type: ProcessType;
  model: string;
  resources: BpmnProcessInstance_process_resources[] | null;
}

export interface BpmnProcessInstance_owner {
  name: string;
}

export interface BpmnProcessInstance_tasks_performer {
  name: string;
}

export interface BpmnProcessInstance_tasks_task_resources {
  id: string;
}

export interface BpmnProcessInstance_tasks_task {
  name: string;
  type: BpmnTaskType;
  resources: BpmnProcessInstance_tasks_task_resources[] | null;
}

export interface BpmnProcessInstance_tasks {
  id: string;
  dateStarted: any;
  dateFinished: any | null;
  status: BpmnTaskInstanceStatus;
  performer: BpmnProcessInstance_tasks_performer | null;
  task: BpmnProcessInstance_tasks_task;
  performerRoles: string[];
}

export interface BpmnProcessInstance_log {
  date: any;
  elementId: string;
}

export interface BpmnProcessInstance_comments_user {
  name: string;
}

export interface BpmnProcessInstance_comments {
  id: string;
  date: any;
  replyTo: string | null;
  text: string;
  user: BpmnProcessInstance_comments_user;
}

export interface BpmnProcessInstance {
  id: string;
  status: BpmnProcessInstanceStatus;
  process: BpmnProcessInstance_process;
  owner: BpmnProcessInstance_owner;
  tasks: BpmnProcessInstance_tasks[] | null;
  log: BpmnProcessInstance_log[] | null;
  comments: BpmnProcessInstance_comments[] | null;
  data: any;
  dateStarted: any;
  dateFinished: any | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BpmnProcessInstanceItem
// ====================================================

export interface BpmnProcessInstanceItem_process {
  name: string;
  description: string | null;
  type: ProcessType;
}

export interface BpmnProcessInstanceItem_owner {
  name: string;
}

export interface BpmnProcessInstanceItem_tasks_task {
  name: string;
}

export interface BpmnProcessInstanceItem_tasks_performer {
  name: string;
}

export interface BpmnProcessInstanceItem_tasks {
  dateStarted: any;
  dateFinished: any | null;
  task: BpmnProcessInstanceItem_tasks_task;
  performer: BpmnProcessInstanceItem_tasks_performer | null;
  performerRoles: string[];
}

export interface BpmnProcessInstanceItem {
  id: string;
  status: BpmnProcessInstanceStatus;
  process: BpmnProcessInstanceItem_process;
  owner: BpmnProcessInstanceItem_owner;
  tasks: BpmnProcessInstanceItem_tasks[] | null;
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
  Waiting = "Waiting",
}

export enum BpmnTaskType {
  Form = "Form",
  Report = "Report",
}

export enum DataType {
  Boolean = "Boolean",
  Date = "Date",
  Float = "Float",
  Id = "Id",
  Int = "Int",
  Object = "Object",
  String = "String",
}

export enum FormControl {
  Checkbox = "Checkbox",
  DeleteButton = "DeleteButton",
  Input = "Input",
  Radio = "Radio",
  Repeater = "Repeater",
  Select = "Select",
  Table = "Table",
  Text = "Text",
  Textarea = "Textarea",
}

export enum NotificationType {
  Error = "Error",
  Info = "Info",
  Warning = "Warning",
}

export enum ProcessStatus {
  Draft = "Draft",
  Proposal = "Proposal",
  Published = "Published",
}

export enum ProcessType {
  HumanResources = "HumanResources",
  Purchases = "Purchases",
  Sales = "Sales",
  Travel = "Travel",
}

export enum ResourceType {
  Document = "Document",
  File = "File",
  Form = "Form",
  Report = "Report",
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
  status?: ProcessStatus | null;
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
