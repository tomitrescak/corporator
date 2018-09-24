/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BpmnProcessInstances
// ====================================================

export interface BpmnProcessInstances_bpmnProcessInstances {
  id: string;
  dateStarted: any | null;
}

export interface BpmnProcessInstances {
  bpmnProcessInstances: (BpmnProcessInstances_bpmnProcessInstances | null)[];
}

export interface BpmnProcessInstancesVariables {
  input: BpmnProcessInstancesInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProcessQuery
// ====================================================

export interface ProcessQuery_process_resources {
  name: string;
  type: ResourceType;
}

export interface ProcessQuery_process {
  actionCount: number;
  description: string | null;
  id: string;
  model: string;
  resources: ProcessQuery_process_resources[] | null;
  status: ProcessStatus;
  version: number;
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
// GraphQL query operation: Processes
// ====================================================

export interface Processes_processes {
  id: string;
  name: string;
}

export interface Processes {
  processes: (Processes_processes | null)[];
}

export interface ProcessesVariables {
  input: BpmnProcessesInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FormQuery
// ====================================================

export interface FormQuery_form_elements_source_validators {
  id: string;
  name: string;
  params: string[];
}

export interface FormQuery_form_elements_source {
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  id: string;
  isArray: boolean | null;
  name: string | null;
  type: DataType | null;
  parentDescriptor: string | null;
  validators: FormQuery_form_elements_source_validators | null;
}

export interface FormQuery_form_elements {
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
  source: FormQuery_form_elements_source | null;
  vertical: boolean | null;
  width: number | null;
  parentElement: string | null;
}

export interface FormQuery_form_validations {
  id: string;
  name: string;
  params: string[];
}

export interface FormQuery_form {
  id: string;
  name: string;
  description: string | null;
  elements: FormQuery_form_elements[] | null;
  validations: FormQuery_form_validations[] | null;
}

export interface FormQuery_process_data_validators {
  id: string;
  name: string;
  params: string[];
}

export interface FormQuery_process_data {
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  id: string;
  isArray: boolean | null;
  name: string | null;
  type: DataType | null;
  parentDescriptor: string | null;
  validators: FormQuery_process_data_validators | null;
}

export interface FormQuery_process {
  data: FormQuery_process_data[] | null;
}

export interface FormQuery {
  form: FormQuery_form | null;
  process: FormQuery_process;
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

export interface Notifications_notifications_processInstance_process {
  name: string;
}

export interface Notifications_notifications_processInstance {
  id: string;
  process: Notifications_notifications_processInstance_process | null;
}

export interface Notifications_notifications {
  id: string;
  createdAt: any;
  text: string | null;
  type: NotificationType;
  processInstance: Notifications_notifications_processInstance;
}

export interface Notifications {
  notifications: (Notifications_notifications | null)[];
}

export interface NotificationsVariables {
  input?: NotificationsInput | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login_user {
  id: string;
  name: string;
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
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  id: string;
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
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  id: string;
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
// GraphQL fragment: Resource
// ====================================================

export interface Resource_form_elements_source_validators {
  id: string;
  name: string;
  params: string[];
}

export interface Resource_form_elements_source {
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  id: string;
  isArray: boolean | null;
  name: string | null;
  type: DataType | null;
  parentDescriptor: string | null;
  validators: Resource_form_elements_source_validators | null;
}

export interface Resource_form_elements {
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
  source: Resource_form_elements_source | null;
  vertical: boolean | null;
  width: number | null;
  parentElement: string | null;
}

export interface Resource_form_validations {
  id: string;
  name: string;
  params: string[];
}

export interface Resource_form {
  id: string;
  name: string;
  description: string | null;
  elements: Resource_form_elements[] | null;
  validations: Resource_form_validations[] | null;
}

export interface Resource {
  content: string;
  form: Resource_form | null;
  name: string;
  type: ResourceType;
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
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  id: string;
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
