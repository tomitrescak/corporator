/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BpmnProcessInstances
// ====================================================

export interface BpmnProcessInstancesBpmnProcessInstances {
  id: string;
  dateStarted: any | null;
}

export interface BpmnProcessInstances {
  bpmnProcessInstances: (BpmnProcessInstancesBpmnProcessInstances | null)[];
}

export interface BpmnProcessInstancesVariables {
  input: BpmnProcessInstancesInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProcessQuery
// ====================================================

export interface ProcessQueryProcessResources {
  name: string;
  type: ResourceType;
}

export interface ProcessQueryProcess {
  actionCount: number;
  description: string | null;
  id: string;
  model: string;
  resources: ProcessQueryProcessResources[] | null;
  status: ProcessStatus;
  version: number;
}

export interface ProcessQuery {
  process: ProcessQueryProcess;
}

export interface ProcessQueryVariables {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Processes
// ====================================================

export interface ProcessesProcesses {
  id: string;
  name: string;
}

export interface Processes {
  processes: (ProcessesProcesses | null)[];
}

export interface ProcessesVariables {
  input: BpmnProcessesInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FormQuery
// ====================================================

export interface FormQueryFormElementsSourceValidators {
  id: string;
  name: string;
  params: string[];
}

export interface FormQueryFormElementsSource {
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  id: string;
  isArray: boolean | null;
  name: string | null;
  type: DataType | null;
  parentDescriptor: string | null;
  validators: FormQueryFormElementsSourceValidators | null;
}

export interface FormQueryFormElements {
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
  source: FormQueryFormElementsSource | null;
  vertical: boolean | null;
  width: number | null;
  parentElement: string | null;
}

export interface FormQueryFormValidations {
  id: string;
  name: string;
  params: string[];
}

export interface FormQueryForm {
  id: string;
  name: string;
  description: string | null;
  elements: FormQueryFormElements[] | null;
  validations: FormQueryFormValidations[] | null;
}

export interface FormQueryProcessDataValidators {
  id: string;
  name: string;
  params: string[];
}

export interface FormQueryProcessData {
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  id: string;
  isArray: boolean | null;
  name: string | null;
  type: DataType | null;
  parentDescriptor: string | null;
  validators: FormQueryProcessDataValidators | null;
}

export interface FormQueryProcess {
  data: FormQueryProcessData[] | null;
}

export interface FormQuery {
  form: FormQueryForm | null;
  process: FormQueryProcess;
}

export interface FormQueryVariables {
  formId: string;
  processId: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveNotification
// ====================================================

export interface RemoveNotification {
  removeNotification: string | null;
}

export interface RemoveNotificationVariables {
  id?: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ClearNotifications
// ====================================================

export interface ClearNotifications {
  clearNotifications: boolean | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Notifications
// ====================================================

export interface NotificationsNotificationsProcessInstanceProcess {
  name: string;
}

export interface NotificationsNotificationsProcessInstance {
  id: string;
  process: NotificationsNotificationsProcessInstanceProcess | null;
}

export interface NotificationsNotifications {
  id: string;
  createdAt: any;
  text: string | null;
  type: NotificationType;
  processInstance: NotificationsNotificationsProcessInstance;
}

export interface Notifications {
  notifications: (NotificationsNotifications | null)[];
}

export interface NotificationsVariables {
  input?: NotificationsInput | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface LoginLoginUser {
  id: string;
  name: string;
}

export interface LoginLogin {
  user: LoginLoginUser;
  token: string;
}

export interface Login {
  login: LoginLogin;
}

export interface LoginVariables {
  input: AuthInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Resume
// ====================================================

export interface ResumeResumeUser {
  id: string;
  name: string;
}

export interface ResumeResume {
  user: ResumeResumeUser;
  token: string;
}

export interface Resume {
  resume: ResumeResume;
}

export interface ResumeVariables {
  token: string;
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

export interface DataDescriptorValidators {
  id: string;
  name: string;
  params: string[];
}

export interface DataDescriptor {
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  id: string;
  isArray: boolean | null;
  name: string | null;
  type: DataType | null;
  parentDescriptor: string | null;
  validators: DataDescriptorValidators | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FormElement
// ====================================================

export interface FormElementSourceValidators {
  id: string;
  name: string;
  params: string[];
}

export interface FormElementSource {
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  id: string;
  isArray: boolean | null;
  name: string | null;
  type: DataType | null;
  parentDescriptor: string | null;
  validators: FormElementSourceValidators | null;
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
  source: FormElementSource | null;
  vertical: boolean | null;
  width: number | null;
  parentElement: string | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Resource
// ====================================================

export interface ResourceFormElementsSourceValidators {
  id: string;
  name: string;
  params: string[];
}

export interface ResourceFormElementsSource {
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  id: string;
  isArray: boolean | null;
  name: string | null;
  type: DataType | null;
  parentDescriptor: string | null;
  validators: ResourceFormElementsSourceValidators | null;
}

export interface ResourceFormElements {
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
  source: ResourceFormElementsSource | null;
  vertical: boolean | null;
  width: number | null;
  parentElement: string | null;
}

export interface ResourceFormValidations {
  id: string;
  name: string;
  params: string[];
}

export interface ResourceForm {
  id: string;
  name: string;
  description: string | null;
  elements: ResourceFormElements[] | null;
  validations: ResourceFormValidations[] | null;
}

export interface Resource {
  content: string;
  form: ResourceForm | null;
  name: string;
  type: ResourceType;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Form
// ====================================================

export interface FormElementsSourceValidators {
  id: string;
  name: string;
  params: string[];
}

export interface FormElementsSource {
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  id: string;
  isArray: boolean | null;
  name: string | null;
  type: DataType | null;
  parentDescriptor: string | null;
  validators: FormElementsSourceValidators | null;
}

export interface FormElements {
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
  source: FormElementsSource | null;
  vertical: boolean | null;
  width: number | null;
  parentElement: string | null;
}

export interface FormValidations {
  id: string;
  name: string;
  params: string[];
}

export interface Form {
  id: string;
  name: string;
  description: string | null;
  elements: FormElements[] | null;
  validations: FormValidations[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: User
// ====================================================

export interface User {
  id: string;
  name: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

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

export enum ResourceType {
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
  status?: ProcessStatus | null;
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
