/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FormQuery
// ====================================================

export interface FormQuery_FormQuery_Elements_Source_Validators {
  id: string;
  name: string;
  params: string[];
}

export interface FormQuery_FormQuery_Elements_Source {
  id: string;
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  isArray: boolean | null;
  name: string | null;
  type: DataType | null;
  parentDescriptor: string | null;
  validators: FormQuery_FormQuery_Elements_Source_Validators | null;
}

export interface FormQuery_FormQuery_Elements {
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
  source: FormQuery_FormQuery_Elements_Source | null;
  vertical: boolean | null;
  width: number | null;
  parentElement: string | null;
}

export interface FormQuery_FormQuery_Validations {
  id: string;
  name: string;
  params: string[];
}

export interface FormQuery_FormQuery {
  id: string;
  name: string;
  description: string | null;
  elements: FormQuery_FormQuery_Elements[] | null;
  validations: FormQuery_FormQuery_Validations[] | null;
}

export interface FormQuery_Process_DataDescriptors_Validators {
  id: string;
  name: string;
  params: string[];
}

export interface FormQuery_Process_DataDescriptors {
  id: string;
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  isArray: boolean | null;
  name: string | null;
  type: DataType | null;
  parentDescriptor: string | null;
  validators: FormQuery_Process_DataDescriptors_Validators | null;
}

export interface FormQuery_Process {
  id: string;
  dataDescriptors: FormQuery_Process_DataDescriptors[] | null;
}

export interface FormQuery {
  formQuery: FormQuery_FormQuery | null;
  process: FormQuery_Process;
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
  process: NotificationsQuery_NotificationsQuery_ProcessInstance_Process;
}

export interface NotificationsQuery_NotificationsQuery {
  id: string;
  createdAt: any;
  text: string | null;
  type: NotificationType;
  processInstance: NotificationsQuery_NotificationsQuery_ProcessInstance;
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

export interface ProcessQuery_Process_Resources_Form {
  id: string;
}

export interface ProcessQuery_Process_Resources_Document {
  id: string;
}

export interface ProcessQuery_Process_Resources {
  name: string;
  type: ResourceType;
  id: string;
  link: string | null;
  form: ProcessQuery_Process_Resources_Form | null;
  document: ProcessQuery_Process_Resources_Document | null;
}

export interface ProcessQuery_Process {
  id: string;
  name: string;
  description: string | null;
  type: ProcessType;
  model: string;
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
  type: ProcessType;
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

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Process_Resources_Form {
  id: string;
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Process_Resources_Document {
  id: string;
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Process_Resources {
  name: string;
  type: ResourceType;
  id: string;
  link: string | null;
  form: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Process_Resources_Form | null;
  document: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Process_Resources_Document | null;
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Process {
  id: string;
  name: string;
  description: string | null;
  type: ProcessType;
  model: string;
  resources: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Process_Resources[] | null;
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Owner {
  name: string;
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks_Performer {
  name: string;
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks_Task_Resources_Form {
  id: string;
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks_Task_Resources {
  id: string;
  type: ResourceType;
  name: string;
  form: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks_Task_Resources_Form | null;
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks_Task {
  name: string;
  type: BpmnTaskType | null;
  resources: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks_Task_Resources[] | null;
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks {
  id: string;
  dateStarted: any;
  dateFinished: any | null;
  status: BpmnTaskInstanceStatus;
  performer: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks_Performer | null;
  data: any | null;
  task: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks_Task;
  performerRoles: string[];
}

export interface BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Log_Performer {
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
  process: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Process;
  owner: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Owner;
  tasks: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Tasks[] | null;
  log: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Log[] | null;
  comments: BpmnProcessInstanceQuery_BpmnProcessInstanceQuery_Comments[] | null;
  data: any;
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
  name: string;
  description: string | null;
  type: ProcessType;
}

export interface BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Owner {
  name: string;
}

export interface BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Tasks_Task {
  name: string;
}

export interface BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Tasks_Performer {
  name: string;
}

export interface BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Tasks {
  dateStarted: any;
  dateFinished: any | null;
  task: BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Tasks_Task;
  performer: BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Tasks_Performer | null;
  performerRoles: string[];
}

export interface BpmnProcessInstancesQuery_BpmnProcessInstancesQuery {
  id: string;
  status: BpmnProcessInstanceStatus;
  process: BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Process;
  owner: BpmnProcessInstancesQuery_BpmnProcessInstancesQuery_Owner;
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
  content: string | null;
  id: string;
  title: string;
  version: number | null;
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

export interface DataDescriptor_Validators {
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
  validators: DataDescriptor_Validators | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FormElement
// ====================================================

export interface FormElement_Source_Validators {
  id: string;
  name: string;
  params: string[];
}

export interface FormElement_Source {
  id: string;
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  isArray: boolean | null;
  name: string | null;
  type: DataType | null;
  parentDescriptor: string | null;
  validators: FormElement_Source_Validators | null;
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
  source: FormElement_Source | null;
  vertical: boolean | null;
  width: number | null;
  parentElement: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Form
// ====================================================

export interface Form_Elements_Source_Validators {
  id: string;
  name: string;
  params: string[];
}

export interface Form_Elements_Source {
  id: string;
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  isArray: boolean | null;
  name: string | null;
  type: DataType | null;
  parentDescriptor: string | null;
  validators: Form_Elements_Source_Validators | null;
}

export interface Form_Elements {
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
  source: Form_Elements_Source | null;
  vertical: boolean | null;
  width: number | null;
  parentElement: string | null;
}

export interface Form_Validations {
  id: string;
  name: string;
  params: string[];
}

export interface Form {
  id: string;
  name: string;
  description: string | null;
  elements: Form_Elements[] | null;
  validations: Form_Validations[] | null;
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
  process: Notifications_ProcessInstance_Process;
}

export interface Notifications {
  id: string;
  createdAt: any;
  text: string | null;
  type: NotificationType;
  processInstance: Notifications_ProcessInstance;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BpmnProcessResource
// ====================================================

export interface BpmnProcessResource_Form {
  id: string;
}

export interface BpmnProcessResource_Document {
  id: string;
}

export interface BpmnProcessResource {
  name: string;
  type: ResourceType;
  id: string;
  link: string | null;
  form: BpmnProcessResource_Form | null;
  document: BpmnProcessResource_Document | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BpmnProcessDefinition
// ====================================================

export interface BpmnProcessDefinition_Resources_Form {
  id: string;
}

export interface BpmnProcessDefinition_Resources_Document {
  id: string;
}

export interface BpmnProcessDefinition_Resources {
  name: string;
  type: ResourceType;
  id: string;
  link: string | null;
  form: BpmnProcessDefinition_Resources_Form | null;
  document: BpmnProcessDefinition_Resources_Document | null;
}

export interface BpmnProcessDefinition {
  id: string;
  name: string;
  description: string | null;
  type: ProcessType;
  model: string;
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
  user: BpmnProcessComment_User;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BpmnProcessInstanceTask
// ====================================================

export interface BpmnProcessInstanceTask_Performer {
  name: string;
}

export interface BpmnProcessInstanceTask_Task_Resources_Form {
  id: string;
}

export interface BpmnProcessInstanceTask_Task_Resources {
  id: string;
  type: ResourceType;
  name: string;
  form: BpmnProcessInstanceTask_Task_Resources_Form | null;
}

export interface BpmnProcessInstanceTask_Task {
  name: string;
  type: BpmnTaskType | null;
  resources: BpmnProcessInstanceTask_Task_Resources[] | null;
}

export interface BpmnProcessInstanceTask {
  id: string;
  dateStarted: any;
  dateFinished: any | null;
  status: BpmnTaskInstanceStatus;
  performer: BpmnProcessInstanceTask_Performer | null;
  data: any | null;
  task: BpmnProcessInstanceTask_Task;
  performerRoles: string[];
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: LogMessage
// ====================================================

export interface LogMessage_Performer {
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

export interface BpmnProcessInstance_Process_Resources_Form {
  id: string;
}

export interface BpmnProcessInstance_Process_Resources_Document {
  id: string;
}

export interface BpmnProcessInstance_Process_Resources {
  name: string;
  type: ResourceType;
  id: string;
  link: string | null;
  form: BpmnProcessInstance_Process_Resources_Form | null;
  document: BpmnProcessInstance_Process_Resources_Document | null;
}

export interface BpmnProcessInstance_Process {
  id: string;
  name: string;
  description: string | null;
  type: ProcessType;
  model: string;
  resources: BpmnProcessInstance_Process_Resources[] | null;
}

export interface BpmnProcessInstance_Owner {
  name: string;
}

export interface BpmnProcessInstance_Tasks_Performer {
  name: string;
}

export interface BpmnProcessInstance_Tasks_Task_Resources_Form {
  id: string;
}

export interface BpmnProcessInstance_Tasks_Task_Resources {
  id: string;
  type: ResourceType;
  name: string;
  form: BpmnProcessInstance_Tasks_Task_Resources_Form | null;
}

export interface BpmnProcessInstance_Tasks_Task {
  name: string;
  type: BpmnTaskType | null;
  resources: BpmnProcessInstance_Tasks_Task_Resources[] | null;
}

export interface BpmnProcessInstance_Tasks {
  id: string;
  dateStarted: any;
  dateFinished: any | null;
  status: BpmnTaskInstanceStatus;
  performer: BpmnProcessInstance_Tasks_Performer | null;
  data: any | null;
  task: BpmnProcessInstance_Tasks_Task;
  performerRoles: string[];
}

export interface BpmnProcessInstance_Log_Performer {
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
  process: BpmnProcessInstance_Process;
  owner: BpmnProcessInstance_Owner;
  tasks: BpmnProcessInstance_Tasks[] | null;
  log: BpmnProcessInstance_Log[] | null;
  comments: BpmnProcessInstance_Comments[] | null;
  data: any;
  dateStarted: any;
  dateFinished: any | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BpmnProcessInstanceItemTask
// ====================================================

export interface BpmnProcessInstanceItemTask_Task {
  name: string;
}

export interface BpmnProcessInstanceItemTask_Performer {
  name: string;
}

export interface BpmnProcessInstanceItemTask {
  dateStarted: any;
  dateFinished: any | null;
  task: BpmnProcessInstanceItemTask_Task;
  performer: BpmnProcessInstanceItemTask_Performer | null;
  performerRoles: string[];
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BpmnProcessInstanceItem
// ====================================================

export interface BpmnProcessInstanceItem_Process {
  name: string;
  description: string | null;
  type: ProcessType;
}

export interface BpmnProcessInstanceItem_Owner {
  name: string;
}

export interface BpmnProcessInstanceItem_Tasks_Task {
  name: string;
}

export interface BpmnProcessInstanceItem_Tasks_Performer {
  name: string;
}

export interface BpmnProcessInstanceItem_Tasks {
  dateStarted: any;
  dateFinished: any | null;
  task: BpmnProcessInstanceItem_Tasks_Task;
  performer: BpmnProcessInstanceItem_Tasks_Performer | null;
  performerRoles: string[];
}

export interface BpmnProcessInstanceItem {
  id: string;
  status: BpmnProcessInstanceStatus;
  process: BpmnProcessInstanceItem_Process;
  owner: BpmnProcessInstanceItem_Owner;
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
