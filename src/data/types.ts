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
