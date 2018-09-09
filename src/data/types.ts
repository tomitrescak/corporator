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

//==============================================================
// START Enums and Input Objects
//==============================================================

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

export interface AuthInput {
  user?: string | null;
  password?: string | null;
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
