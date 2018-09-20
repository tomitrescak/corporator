/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BpmnProcessInstancesQuery
// ====================================================

export interface BpmnProcessInstancesQuery_BpmnProcessInstances_Process {
  name: string;
  description: string | null;
  type: ProcessType;
}

export interface BpmnProcessInstancesQuery_BpmnProcessInstances {
  id: string;
  status: BpmnProcessInstanceStatus | null;
  process: BpmnProcessInstancesQuery_BpmnProcessInstances_Process | null;
  dateStarted: any | null;
}

export interface BpmnProcessInstancesQuery {
  bpmnProcessInstances: (BpmnProcessInstancesQuery_BpmnProcessInstances | null)[];
}

export interface BpmnProcessInstancesQueryVariables {
  input: BpmnProcessInstancesInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ProcessQuery
// ====================================================

export interface ProcessQuery_Process_Resources {
  name: string;
  type: ResourceType;
}

export interface ProcessQuery_Process {
  actionCount: number;
  description: string | null;
  id: string;
  model: string;
  resources: ProcessQuery_Process_Resources[] | null;
  status: ProcessStatus;
  version: number;
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
// GraphQL query operation: FormQuery
// ====================================================

export interface FormQuery_Form_Elements_Source_Validators {
  id: string;
  name: string;
  params: string[];
}

export interface FormQuery_Form_Elements_Source {
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  id: string;
  isArray: boolean | null;
  name: string | null;
  type: DataType | null;
  parentDescriptor: string | null;
  validators: FormQuery_Form_Elements_Source_Validators | null;
}

export interface FormQuery_Form_Elements {
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
  source: FormQuery_Form_Elements_Source | null;
  vertical: boolean | null;
  width: number | null;
  parentElement: string | null;
}

export interface FormQuery_Form_Validations {
  id: string;
  name: string;
  params: string[];
}

export interface FormQuery_Form {
  id: string;
  name: string;
  description: string | null;
  elements: FormQuery_Form_Elements[] | null;
  validations: FormQuery_Form_Validations[] | null;
}

export interface FormQuery_Process_Data_Validators {
  id: string;
  name: string;
  params: string[];
}

export interface FormQuery_Process_Data {
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  id: string;
  isArray: boolean | null;
  name: string | null;
  type: DataType | null;
  parentDescriptor: string | null;
  validators: FormQuery_Process_Data_Validators | null;
}

export interface FormQuery_Process {
  data: FormQuery_Process_Data[] | null;
}

export interface FormQuery {
  form: FormQuery_Form | null;
  process: FormQuery_Process;
}

export interface FormQueryVariables {
  formId: string;
  processId: string;
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

export interface NotificationsQuery_Notifications_ProcessInstance_Process {
  name: string;
}

export interface NotificationsQuery_Notifications_ProcessInstance {
  id: string;
  process: NotificationsQuery_Notifications_ProcessInstance_Process | null;
}

export interface NotificationsQuery_Notifications {
  id: string;
  createdAt: any;
  text: string | null;
  type: NotificationType;
  processInstance: NotificationsQuery_Notifications_ProcessInstance;
}

export interface NotificationsQuery {
  notifications: (NotificationsQuery_Notifications | null)[];
}

export interface NotificationsQueryVariables {
  input?: NotificationsInput | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_Login_User {
  id: string;
  name: string;
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
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  id: string;
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
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  id: string;
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
// GraphQL fragment: Resource
// ====================================================

export interface Resource_Form_Elements_Source_Validators {
  id: string;
  name: string;
  params: string[];
}

export interface Resource_Form_Elements_Source {
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  id: string;
  isArray: boolean | null;
  name: string | null;
  type: DataType | null;
  parentDescriptor: string | null;
  validators: Resource_Form_Elements_Source_Validators | null;
}

export interface Resource_Form_Elements {
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
  source: Resource_Form_Elements_Source | null;
  vertical: boolean | null;
  width: number | null;
  parentElement: string | null;
}

export interface Resource_Form_Validations {
  id: string;
  name: string;
  params: string[];
}

export interface Resource_Form {
  id: string;
  name: string;
  description: string | null;
  elements: Resource_Form_Elements[] | null;
  validations: Resource_Form_Validations[] | null;
}

export interface Resource {
  content: string;
  form: Resource_Form | null;
  name: string;
  type: ResourceType;
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
  defaultValue: string | null;
  description: string | null;
  expression: string | null;
  id: string;
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

export enum ProcessType {
  HumanResources = "HumanResources",
  Purchases = "Purchases",
  Sales = "Sales",
  Travel = "Travel",
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
