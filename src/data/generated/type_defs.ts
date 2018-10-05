export const typeDefs = `type Query {
  testQuery: Boolean
  notificationsQuery(input: NotificationsInput): [Notification]!
  bpmnProcessesQuery(input: BpmnProcessesInput!): [BpmnProcess]!
  bpmnProcessQuery(id: ID!): BpmnProcess!
  bpmnProcessInstancesQuery(input: BpmnProcessInstancesInput!): [BpmnProcessInstance]!
  bpmnProcessInstanceQuery(id: ID!): BpmnProcessInstance
  bpmnTaskInstancesQuery(input: BpmnTaskInstancesInput!): [BpmnTaskInstance]!
  userQuery(id: ID!): User
  usersQuery: [User]!
  resume(token: String!): AuthPayload!
  resourceQuery(id: ID!): Resource
  processResourceQuery(id: ID!): Resource
}

type Mutation {
  testMutation: Boolean
  reset: Boolean
  notify(input: NotifyInput): Notification!
  removeNotification(id: String): String
  clearNotifications: Boolean
  createProcess(input: CreateProcessInput!): BpmnProcess
  launchProcessInstance(input: LaunchProcessInstanceInput!): BpmnProcessInstanceOutput
  duplicateProcessInstance(input: DuplicateProcessInstanceInput!): BpmnProcessInstanceOutput
  setProcessInstanceStatus(input: SetProcessInstanceStatusInput!): BpmnProcessInstanceOutput
  createTaskInstance(input: CreateTaskInstanceInput!): BpmnTaskInstance
  updateTaskInstanceStatus(input: UpdateTaskInstanceStatusInput!): BpmnTaskInstance
  submitForm(input: SubmitFormInput!): BpmnTaskInstance
  login(input: AuthInput!): AuthPayload!
  signup(input: AuthInput!): AuthPayload!
}

type BpmnProcessInstance {
  id: ID!
  comments: [Comment!]!
  dateFinished: DateTime
  dateStarted: DateTime!
  duration: Int
  ownerId: ID!
  owner: User
  processId: ID!
  process: BpmnProcess
  data: String!
  log: [Log!]!
  status: BpmnProcessInstanceStatus!
  tasks: [BpmnTaskInstance!]!
}

type BpmnTaskInstance {
  id: ID!
  dateFinished: DateTime
  dateStarted: DateTime!
  duration: Int
  performerId: ID
  performer: User
  processInstanceId: ID
  processInstance: BpmnProcessInstance!
  data: Json
  status: BpmnTaskInstanceStatus!
  taskId: ID!
  task: BpmnTask
}

type Comment {
  id: ID!
  text: String!
  userId: ID!
  user: User!
  date: DateTime!
  replyTo: ID
}

type Log {
  id: ID!
  elementId: String!
  elementName: String!
  date: DateTime!
  taskInstanceId: ID
  performerId: ID
  performer: User
  status: BpmnTaskInstanceStatus
  message: String
}

type Notification {
  type: NotificationType!
  id: ID!
  userId: ID!
  user: User
  createdAt: DateTime!
  code: NotificationCode!
  text: String
  processInstanceId: ID!
  processInstance: BpmnProcessInstance
  params: String
  visible: Boolean!
}

type ProcessResource {
  id: ID!
  resourceId: ID!
  resource: Resource!
  readRoles: [String!]
}

input NotificationsInput {
  visible: Boolean
  skip: Int
  first: Int
}

type BpmnProcess implements Node {
  id: ID!
  processID: ID
  actionCount: Int!
  schema: Json
  description: String
  model: String!
  name: String!
  tasks(where: BpmnTaskWhereInput, orderBy: BpmnTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BpmnTask!]
  type: String!
  resources(where: ProcessResourceWhereInput, orderBy: ProcessResourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProcessResource!]
  publicationStatus: PublicationStatus!
  version: Int!
  createdAt: DateTime!
  createdById: ID!
  updatedAt: DateTime!
  updatedById: ID
  readRole: String
  readUser: String
  writeRole: String
  writeUser: String
  executeRole: String
  executeUser: String
}

input BpmnProcessesInput {
  status: PublicationStatus
  name: String
  skip: Int
  first: Int
}

input BpmnProcessInstancesInput {
  status: BpmnProcessInstanceStatus
  name: String
  dateStarted: DateTime
  dateFinished: DateTime
  duration: Int
  processId: String
  skip: Int
  first: Int
}

input BpmnTaskInstancesInput {
  processInstanceId: String!
}

type User implements Node {
  id: ID!
  uid: String!
  name: String!
  roles: [ID!]!
  description: String
  password: String!
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification!]
  processes(where: BpmnProcessInstanceWhereInput, orderBy: BpmnProcessInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BpmnProcessInstance!]
  data(where: DataWhereInput, orderBy: DataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Data!]
}

type AuthPayload {
  user: User!
  token: String!
}

type Resource implements Node {
  id: ID!
  resourceId: ID!
  type: ResourceType!
  title: String!
  content: String
  version: Int!
  publicationStatus: PublicationStatus!
  createdById: ID!
  updatedById: ID
  readRole: String
  readUser: String
  writeRole: String
  writeUser: String
}

input NotifyInput {
  userId: ID
  processInstanceId: ID
  code: NotificationCode
  params: [String!]!
  type: NotificationType!
}

input CreateProcessInput {
  name: String!
  description: String
  model: String
  status: PublicationStatus
}

type BpmnProcessInstanceOutput {
  activeElements: [String!]!
  executedElements: [String!]!
  processInstance: BpmnProcessInstance
}

input LaunchProcessInstanceInput {
  processId: String!
  role: String!
}

input DuplicateProcessInstanceInput {
  processId: String!
}

input SetProcessInstanceStatusInput {
  processId: String!
  status: BpmnProcessInstanceStatus!
}

input CreateTaskInstanceInput {
  processInstanceId: String!
  taskId: String!
  performerRoles: [String!]!
}

input UpdateTaskInstanceStatusInput {
  taskId: String!
  status: BpmnTaskInstanceStatus!
}

input SubmitFormInput {
  taskId: String!
  form: [String!]!
}

input AuthInput {
  user: String
  password: String
}

scalar DateTime

enum BpmnProcessInstanceStatus {
  Running
  Finished
  Aborted
  Paused
}

"""
Raw JSON value
"""
scalar Json

enum BpmnTaskInstanceStatus {
  Started
  Paused
  Aborted
  Finished
  Approved
  Rejected
}

type BpmnTask implements Node {
  id: ID!
  taskId: ID!
  performerRoles: [ID!]!
  resources: [ID!]!
  name: String!
  type: BpmnTaskType
}

enum NotificationType {
  Info
  Error
  Warning
}

enum NotificationCode {
  ProcessStarted
  ProcessFinished
  ProcessAborted
  ActionStarted
  ActionFinished
  ActionAborted
  ActionRequired
}

"""
An object with an ID
"""
interface Node {
  """
  The id of the object.
  """
  id: ID!
}

input BpmnTaskWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [BpmnTaskWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [BpmnTaskWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [BpmnTaskWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  taskId: ID
  """
  All values that are not equal to given value.
  """
  taskId_not: ID
  """
  All values that are contained in given list.
  """
  taskId_in: [ID!]
  """
  All values that are not contained in given list.
  """
  taskId_not_in: [ID!]
  """
  All values less than the given value.
  """
  taskId_lt: ID
  """
  All values less than or equal the given value.
  """
  taskId_lte: ID
  """
  All values greater than the given value.
  """
  taskId_gt: ID
  """
  All values greater than or equal the given value.
  """
  taskId_gte: ID
  """
  All values containing the given string.
  """
  taskId_contains: ID
  """
  All values not containing the given string.
  """
  taskId_not_contains: ID
  """
  All values starting with the given string.
  """
  taskId_starts_with: ID
  """
  All values not starting with the given string.
  """
  taskId_not_starts_with: ID
  """
  All values ending with the given string.
  """
  taskId_ends_with: ID
  """
  All values not ending with the given string.
  """
  taskId_not_ends_with: ID
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  type: BpmnTaskType
  """
  All values that are not equal to given value.
  """
  type_not: BpmnTaskType
  """
  All values that are contained in given list.
  """
  type_in: [BpmnTaskType!]
  """
  All values that are not contained in given list.
  """
  type_not_in: [BpmnTaskType!]
  _MagicalBackRelation_BpmnProcessTasks_every: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessTasks_some: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessTasks_none: BpmnProcessWhereInput
}

enum BpmnTaskOrderByInput {
  id_ASC
  id_DESC
  taskId_ASC
  taskId_DESC
  name_ASC
  name_DESC
  type_ASC
  type_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

input ProcessResourceWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ProcessResourceWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ProcessResourceWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ProcessResourceWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  resourceId: ID
  """
  All values that are not equal to given value.
  """
  resourceId_not: ID
  """
  All values that are contained in given list.
  """
  resourceId_in: [ID!]
  """
  All values that are not contained in given list.
  """
  resourceId_not_in: [ID!]
  """
  All values less than the given value.
  """
  resourceId_lt: ID
  """
  All values less than or equal the given value.
  """
  resourceId_lte: ID
  """
  All values greater than the given value.
  """
  resourceId_gt: ID
  """
  All values greater than or equal the given value.
  """
  resourceId_gte: ID
  """
  All values containing the given string.
  """
  resourceId_contains: ID
  """
  All values not containing the given string.
  """
  resourceId_not_contains: ID
  """
  All values starting with the given string.
  """
  resourceId_starts_with: ID
  """
  All values not starting with the given string.
  """
  resourceId_not_starts_with: ID
  """
  All values ending with the given string.
  """
  resourceId_ends_with: ID
  """
  All values not ending with the given string.
  """
  resourceId_not_ends_with: ID
  _MagicalBackRelation_BpmnProcessResources_every: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessResources_some: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessResources_none: BpmnProcessWhereInput
}

enum ProcessResourceOrderByInput {
  id_ASC
  id_DESC
  resourceId_ASC
  resourceId_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

enum PublicationStatus {
  Draft
  Proposal
  Published
}

input NotificationWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [NotificationWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [NotificationWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [NotificationWhereInput!]
  type: NotificationType
  """
  All values that are not equal to given value.
  """
  type_not: NotificationType
  """
  All values that are contained in given list.
  """
  type_in: [NotificationType!]
  """
  All values that are not contained in given list.
  """
  type_not_in: [NotificationType!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  userId: ID
  """
  All values that are not equal to given value.
  """
  userId_not: ID
  """
  All values that are contained in given list.
  """
  userId_in: [ID!]
  """
  All values that are not contained in given list.
  """
  userId_not_in: [ID!]
  """
  All values less than the given value.
  """
  userId_lt: ID
  """
  All values less than or equal the given value.
  """
  userId_lte: ID
  """
  All values greater than the given value.
  """
  userId_gt: ID
  """
  All values greater than or equal the given value.
  """
  userId_gte: ID
  """
  All values containing the given string.
  """
  userId_contains: ID
  """
  All values not containing the given string.
  """
  userId_not_contains: ID
  """
  All values starting with the given string.
  """
  userId_starts_with: ID
  """
  All values not starting with the given string.
  """
  userId_not_starts_with: ID
  """
  All values ending with the given string.
  """
  userId_ends_with: ID
  """
  All values not ending with the given string.
  """
  userId_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  code: NotificationCode
  """
  All values that are not equal to given value.
  """
  code_not: NotificationCode
  """
  All values that are contained in given list.
  """
  code_in: [NotificationCode!]
  """
  All values that are not contained in given list.
  """
  code_not_in: [NotificationCode!]
  text: String
  """
  All values that are not equal to given value.
  """
  text_not: String
  """
  All values that are contained in given list.
  """
  text_in: [String!]
  """
  All values that are not contained in given list.
  """
  text_not_in: [String!]
  """
  All values less than the given value.
  """
  text_lt: String
  """
  All values less than or equal the given value.
  """
  text_lte: String
  """
  All values greater than the given value.
  """
  text_gt: String
  """
  All values greater than or equal the given value.
  """
  text_gte: String
  """
  All values containing the given string.
  """
  text_contains: String
  """
  All values not containing the given string.
  """
  text_not_contains: String
  """
  All values starting with the given string.
  """
  text_starts_with: String
  """
  All values not starting with the given string.
  """
  text_not_starts_with: String
  """
  All values ending with the given string.
  """
  text_ends_with: String
  """
  All values not ending with the given string.
  """
  text_not_ends_with: String
  processInstanceId: ID
  """
  All values that are not equal to given value.
  """
  processInstanceId_not: ID
  """
  All values that are contained in given list.
  """
  processInstanceId_in: [ID!]
  """
  All values that are not contained in given list.
  """
  processInstanceId_not_in: [ID!]
  """
  All values less than the given value.
  """
  processInstanceId_lt: ID
  """
  All values less than or equal the given value.
  """
  processInstanceId_lte: ID
  """
  All values greater than the given value.
  """
  processInstanceId_gt: ID
  """
  All values greater than or equal the given value.
  """
  processInstanceId_gte: ID
  """
  All values containing the given string.
  """
  processInstanceId_contains: ID
  """
  All values not containing the given string.
  """
  processInstanceId_not_contains: ID
  """
  All values starting with the given string.
  """
  processInstanceId_starts_with: ID
  """
  All values not starting with the given string.
  """
  processInstanceId_not_starts_with: ID
  """
  All values ending with the given string.
  """
  processInstanceId_ends_with: ID
  """
  All values not ending with the given string.
  """
  processInstanceId_not_ends_with: ID
  params: String
  """
  All values that are not equal to given value.
  """
  params_not: String
  """
  All values that are contained in given list.
  """
  params_in: [String!]
  """
  All values that are not contained in given list.
  """
  params_not_in: [String!]
  """
  All values less than the given value.
  """
  params_lt: String
  """
  All values less than or equal the given value.
  """
  params_lte: String
  """
  All values greater than the given value.
  """
  params_gt: String
  """
  All values greater than or equal the given value.
  """
  params_gte: String
  """
  All values containing the given string.
  """
  params_contains: String
  """
  All values not containing the given string.
  """
  params_not_contains: String
  """
  All values starting with the given string.
  """
  params_starts_with: String
  """
  All values not starting with the given string.
  """
  params_not_starts_with: String
  """
  All values ending with the given string.
  """
  params_ends_with: String
  """
  All values not ending with the given string.
  """
  params_not_ends_with: String
  visible: Boolean
  """
  All values that are not equal to given value.
  """
  visible_not: Boolean
  _MagicalBackRelation_UserNotifications_every: UserWhereInput
  _MagicalBackRelation_UserNotifications_some: UserWhereInput
  _MagicalBackRelation_UserNotifications_none: UserWhereInput
}

enum NotificationOrderByInput {
  type_ASC
  type_DESC
  id_ASC
  id_DESC
  userId_ASC
  userId_DESC
  createdAt_ASC
  createdAt_DESC
  code_ASC
  code_DESC
  text_ASC
  text_DESC
  processInstanceId_ASC
  processInstanceId_DESC
  params_ASC
  params_DESC
  visible_ASC
  visible_DESC
  updatedAt_ASC
  updatedAt_DESC
}

input BpmnProcessInstanceWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [BpmnProcessInstanceWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [BpmnProcessInstanceWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [BpmnProcessInstanceWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  dateFinished: DateTime
  """
  All values that are not equal to given value.
  """
  dateFinished_not: DateTime
  """
  All values that are contained in given list.
  """
  dateFinished_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  dateFinished_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  dateFinished_lt: DateTime
  """
  All values less than or equal the given value.
  """
  dateFinished_lte: DateTime
  """
  All values greater than the given value.
  """
  dateFinished_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  dateFinished_gte: DateTime
  dateStarted: DateTime
  """
  All values that are not equal to given value.
  """
  dateStarted_not: DateTime
  """
  All values that are contained in given list.
  """
  dateStarted_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  dateStarted_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  dateStarted_lt: DateTime
  """
  All values less than or equal the given value.
  """
  dateStarted_lte: DateTime
  """
  All values greater than the given value.
  """
  dateStarted_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  dateStarted_gte: DateTime
  duration: Int
  """
  All values that are not equal to given value.
  """
  duration_not: Int
  """
  All values that are contained in given list.
  """
  duration_in: [Int!]
  """
  All values that are not contained in given list.
  """
  duration_not_in: [Int!]
  """
  All values less than the given value.
  """
  duration_lt: Int
  """
  All values less than or equal the given value.
  """
  duration_lte: Int
  """
  All values greater than the given value.
  """
  duration_gt: Int
  """
  All values greater than or equal the given value.
  """
  duration_gte: Int
  ownerId: ID
  """
  All values that are not equal to given value.
  """
  ownerId_not: ID
  """
  All values that are contained in given list.
  """
  ownerId_in: [ID!]
  """
  All values that are not contained in given list.
  """
  ownerId_not_in: [ID!]
  """
  All values less than the given value.
  """
  ownerId_lt: ID
  """
  All values less than or equal the given value.
  """
  ownerId_lte: ID
  """
  All values greater than the given value.
  """
  ownerId_gt: ID
  """
  All values greater than or equal the given value.
  """
  ownerId_gte: ID
  """
  All values containing the given string.
  """
  ownerId_contains: ID
  """
  All values not containing the given string.
  """
  ownerId_not_contains: ID
  """
  All values starting with the given string.
  """
  ownerId_starts_with: ID
  """
  All values not starting with the given string.
  """
  ownerId_not_starts_with: ID
  """
  All values ending with the given string.
  """
  ownerId_ends_with: ID
  """
  All values not ending with the given string.
  """
  ownerId_not_ends_with: ID
  processId: ID
  """
  All values that are not equal to given value.
  """
  processId_not: ID
  """
  All values that are contained in given list.
  """
  processId_in: [ID!]
  """
  All values that are not contained in given list.
  """
  processId_not_in: [ID!]
  """
  All values less than the given value.
  """
  processId_lt: ID
  """
  All values less than or equal the given value.
  """
  processId_lte: ID
  """
  All values greater than the given value.
  """
  processId_gt: ID
  """
  All values greater than or equal the given value.
  """
  processId_gte: ID
  """
  All values containing the given string.
  """
  processId_contains: ID
  """
  All values not containing the given string.
  """
  processId_not_contains: ID
  """
  All values starting with the given string.
  """
  processId_starts_with: ID
  """
  All values not starting with the given string.
  """
  processId_not_starts_with: ID
  """
  All values ending with the given string.
  """
  processId_ends_with: ID
  """
  All values not ending with the given string.
  """
  processId_not_ends_with: ID
  data: String
  """
  All values that are not equal to given value.
  """
  data_not: String
  """
  All values that are contained in given list.
  """
  data_in: [String!]
  """
  All values that are not contained in given list.
  """
  data_not_in: [String!]
  """
  All values less than the given value.
  """
  data_lt: String
  """
  All values less than or equal the given value.
  """
  data_lte: String
  """
  All values greater than the given value.
  """
  data_gt: String
  """
  All values greater than or equal the given value.
  """
  data_gte: String
  """
  All values containing the given string.
  """
  data_contains: String
  """
  All values not containing the given string.
  """
  data_not_contains: String
  """
  All values starting with the given string.
  """
  data_starts_with: String
  """
  All values not starting with the given string.
  """
  data_not_starts_with: String
  """
  All values ending with the given string.
  """
  data_ends_with: String
  """
  All values not ending with the given string.
  """
  data_not_ends_with: String
  status: BpmnProcessInstanceStatus
  """
  All values that are not equal to given value.
  """
  status_not: BpmnProcessInstanceStatus
  """
  All values that are contained in given list.
  """
  status_in: [BpmnProcessInstanceStatus!]
  """
  All values that are not contained in given list.
  """
  status_not_in: [BpmnProcessInstanceStatus!]
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  log_every: LogWhereInput
  log_some: LogWhereInput
  log_none: LogWhereInput
  tasks_every: BpmnTaskInstanceWhereInput
  tasks_some: BpmnTaskInstanceWhereInput
  tasks_none: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_UserProcesses_every: UserWhereInput
  _MagicalBackRelation_UserProcesses_some: UserWhereInput
  _MagicalBackRelation_UserProcesses_none: UserWhereInput
}

enum BpmnProcessInstanceOrderByInput {
  id_ASC
  id_DESC
  dateFinished_ASC
  dateFinished_DESC
  dateStarted_ASC
  dateStarted_DESC
  duration_ASC
  duration_DESC
  ownerId_ASC
  ownerId_DESC
  processId_ASC
  processId_DESC
  data_ASC
  data_DESC
  status_ASC
  status_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type Data implements Node {
  id: ID!
  schemaId: ID!
  version: Int
  date: DateTime
  value: String
}

input DataWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [DataWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [DataWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [DataWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  schemaId: ID
  """
  All values that are not equal to given value.
  """
  schemaId_not: ID
  """
  All values that are contained in given list.
  """
  schemaId_in: [ID!]
  """
  All values that are not contained in given list.
  """
  schemaId_not_in: [ID!]
  """
  All values less than the given value.
  """
  schemaId_lt: ID
  """
  All values less than or equal the given value.
  """
  schemaId_lte: ID
  """
  All values greater than the given value.
  """
  schemaId_gt: ID
  """
  All values greater than or equal the given value.
  """
  schemaId_gte: ID
  """
  All values containing the given string.
  """
  schemaId_contains: ID
  """
  All values not containing the given string.
  """
  schemaId_not_contains: ID
  """
  All values starting with the given string.
  """
  schemaId_starts_with: ID
  """
  All values not starting with the given string.
  """
  schemaId_not_starts_with: ID
  """
  All values ending with the given string.
  """
  schemaId_ends_with: ID
  """
  All values not ending with the given string.
  """
  schemaId_not_ends_with: ID
  version: Int
  """
  All values that are not equal to given value.
  """
  version_not: Int
  """
  All values that are contained in given list.
  """
  version_in: [Int!]
  """
  All values that are not contained in given list.
  """
  version_not_in: [Int!]
  """
  All values less than the given value.
  """
  version_lt: Int
  """
  All values less than or equal the given value.
  """
  version_lte: Int
  """
  All values greater than the given value.
  """
  version_gt: Int
  """
  All values greater than or equal the given value.
  """
  version_gte: Int
  date: DateTime
  """
  All values that are not equal to given value.
  """
  date_not: DateTime
  """
  All values that are contained in given list.
  """
  date_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  date_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  date_lt: DateTime
  """
  All values less than or equal the given value.
  """
  date_lte: DateTime
  """
  All values greater than the given value.
  """
  date_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  date_gte: DateTime
  value: String
  """
  All values that are not equal to given value.
  """
  value_not: String
  """
  All values that are contained in given list.
  """
  value_in: [String!]
  """
  All values that are not contained in given list.
  """
  value_not_in: [String!]
  """
  All values less than the given value.
  """
  value_lt: String
  """
  All values less than or equal the given value.
  """
  value_lte: String
  """
  All values greater than the given value.
  """
  value_gt: String
  """
  All values greater than or equal the given value.
  """
  value_gte: String
  """
  All values containing the given string.
  """
  value_contains: String
  """
  All values not containing the given string.
  """
  value_not_contains: String
  """
  All values starting with the given string.
  """
  value_starts_with: String
  """
  All values not starting with the given string.
  """
  value_not_starts_with: String
  """
  All values ending with the given string.
  """
  value_ends_with: String
  """
  All values not ending with the given string.
  """
  value_not_ends_with: String
  _MagicalBackRelation_UserData_every: UserWhereInput
  _MagicalBackRelation_UserData_some: UserWhereInput
  _MagicalBackRelation_UserData_none: UserWhereInput
}

enum DataOrderByInput {
  id_ASC
  id_DESC
  schemaId_ASC
  schemaId_DESC
  version_ASC
  version_DESC
  date_ASC
  date_DESC
  value_ASC
  value_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

enum ResourceType {
  Url
  File
  Form
  Document
}

enum BpmnTaskType {
  Form
}

type Localisation implements Node {
  id: ID!
  code: String!
  text: String!
  language: LanguageCode!
}

type Organisation implements Node {
  id: ID!
  name: String!
  description: String
}

type Role implements Node {
  id: ID!
  roleId: String!
  name: String!
  description: String
}

type Schema implements Node {
  id: ID!
  name: String!
  description: String!
  schema: Json!
  version: Int
  date: DateTime
}

input BpmnProcessWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [BpmnProcessWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [BpmnProcessWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [BpmnProcessWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  processID: ID
  """
  All values that are not equal to given value.
  """
  processID_not: ID
  """
  All values that are contained in given list.
  """
  processID_in: [ID!]
  """
  All values that are not contained in given list.
  """
  processID_not_in: [ID!]
  """
  All values less than the given value.
  """
  processID_lt: ID
  """
  All values less than or equal the given value.
  """
  processID_lte: ID
  """
  All values greater than the given value.
  """
  processID_gt: ID
  """
  All values greater than or equal the given value.
  """
  processID_gte: ID
  """
  All values containing the given string.
  """
  processID_contains: ID
  """
  All values not containing the given string.
  """
  processID_not_contains: ID
  """
  All values starting with the given string.
  """
  processID_starts_with: ID
  """
  All values not starting with the given string.
  """
  processID_not_starts_with: ID
  """
  All values ending with the given string.
  """
  processID_ends_with: ID
  """
  All values not ending with the given string.
  """
  processID_not_ends_with: ID
  actionCount: Int
  """
  All values that are not equal to given value.
  """
  actionCount_not: Int
  """
  All values that are contained in given list.
  """
  actionCount_in: [Int!]
  """
  All values that are not contained in given list.
  """
  actionCount_not_in: [Int!]
  """
  All values less than the given value.
  """
  actionCount_lt: Int
  """
  All values less than or equal the given value.
  """
  actionCount_lte: Int
  """
  All values greater than the given value.
  """
  actionCount_gt: Int
  """
  All values greater than or equal the given value.
  """
  actionCount_gte: Int
  description: String
  """
  All values that are not equal to given value.
  """
  description_not: String
  """
  All values that are contained in given list.
  """
  description_in: [String!]
  """
  All values that are not contained in given list.
  """
  description_not_in: [String!]
  """
  All values less than the given value.
  """
  description_lt: String
  """
  All values less than or equal the given value.
  """
  description_lte: String
  """
  All values greater than the given value.
  """
  description_gt: String
  """
  All values greater than or equal the given value.
  """
  description_gte: String
  """
  All values containing the given string.
  """
  description_contains: String
  """
  All values not containing the given string.
  """
  description_not_contains: String
  """
  All values starting with the given string.
  """
  description_starts_with: String
  """
  All values not starting with the given string.
  """
  description_not_starts_with: String
  """
  All values ending with the given string.
  """
  description_ends_with: String
  """
  All values not ending with the given string.
  """
  description_not_ends_with: String
  model: String
  """
  All values that are not equal to given value.
  """
  model_not: String
  """
  All values that are contained in given list.
  """
  model_in: [String!]
  """
  All values that are not contained in given list.
  """
  model_not_in: [String!]
  """
  All values less than the given value.
  """
  model_lt: String
  """
  All values less than or equal the given value.
  """
  model_lte: String
  """
  All values greater than the given value.
  """
  model_gt: String
  """
  All values greater than or equal the given value.
  """
  model_gte: String
  """
  All values containing the given string.
  """
  model_contains: String
  """
  All values not containing the given string.
  """
  model_not_contains: String
  """
  All values starting with the given string.
  """
  model_starts_with: String
  """
  All values not starting with the given string.
  """
  model_not_starts_with: String
  """
  All values ending with the given string.
  """
  model_ends_with: String
  """
  All values not ending with the given string.
  """
  model_not_ends_with: String
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  type: String
  """
  All values that are not equal to given value.
  """
  type_not: String
  """
  All values that are contained in given list.
  """
  type_in: [String!]
  """
  All values that are not contained in given list.
  """
  type_not_in: [String!]
  """
  All values less than the given value.
  """
  type_lt: String
  """
  All values less than or equal the given value.
  """
  type_lte: String
  """
  All values greater than the given value.
  """
  type_gt: String
  """
  All values greater than or equal the given value.
  """
  type_gte: String
  """
  All values containing the given string.
  """
  type_contains: String
  """
  All values not containing the given string.
  """
  type_not_contains: String
  """
  All values starting with the given string.
  """
  type_starts_with: String
  """
  All values not starting with the given string.
  """
  type_not_starts_with: String
  """
  All values ending with the given string.
  """
  type_ends_with: String
  """
  All values not ending with the given string.
  """
  type_not_ends_with: String
  publicationStatus: PublicationStatus
  """
  All values that are not equal to given value.
  """
  publicationStatus_not: PublicationStatus
  """
  All values that are contained in given list.
  """
  publicationStatus_in: [PublicationStatus!]
  """
  All values that are not contained in given list.
  """
  publicationStatus_not_in: [PublicationStatus!]
  version: Int
  """
  All values that are not equal to given value.
  """
  version_not: Int
  """
  All values that are contained in given list.
  """
  version_in: [Int!]
  """
  All values that are not contained in given list.
  """
  version_not_in: [Int!]
  """
  All values less than the given value.
  """
  version_lt: Int
  """
  All values less than or equal the given value.
  """
  version_lte: Int
  """
  All values greater than the given value.
  """
  version_gt: Int
  """
  All values greater than or equal the given value.
  """
  version_gte: Int
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  createdById: ID
  """
  All values that are not equal to given value.
  """
  createdById_not: ID
  """
  All values that are contained in given list.
  """
  createdById_in: [ID!]
  """
  All values that are not contained in given list.
  """
  createdById_not_in: [ID!]
  """
  All values less than the given value.
  """
  createdById_lt: ID
  """
  All values less than or equal the given value.
  """
  createdById_lte: ID
  """
  All values greater than the given value.
  """
  createdById_gt: ID
  """
  All values greater than or equal the given value.
  """
  createdById_gte: ID
  """
  All values containing the given string.
  """
  createdById_contains: ID
  """
  All values not containing the given string.
  """
  createdById_not_contains: ID
  """
  All values starting with the given string.
  """
  createdById_starts_with: ID
  """
  All values not starting with the given string.
  """
  createdById_not_starts_with: ID
  """
  All values ending with the given string.
  """
  createdById_ends_with: ID
  """
  All values not ending with the given string.
  """
  createdById_not_ends_with: ID
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  updatedById: ID
  """
  All values that are not equal to given value.
  """
  updatedById_not: ID
  """
  All values that are contained in given list.
  """
  updatedById_in: [ID!]
  """
  All values that are not contained in given list.
  """
  updatedById_not_in: [ID!]
  """
  All values less than the given value.
  """
  updatedById_lt: ID
  """
  All values less than or equal the given value.
  """
  updatedById_lte: ID
  """
  All values greater than the given value.
  """
  updatedById_gt: ID
  """
  All values greater than or equal the given value.
  """
  updatedById_gte: ID
  """
  All values containing the given string.
  """
  updatedById_contains: ID
  """
  All values not containing the given string.
  """
  updatedById_not_contains: ID
  """
  All values starting with the given string.
  """
  updatedById_starts_with: ID
  """
  All values not starting with the given string.
  """
  updatedById_not_starts_with: ID
  """
  All values ending with the given string.
  """
  updatedById_ends_with: ID
  """
  All values not ending with the given string.
  """
  updatedById_not_ends_with: ID
  readRole: String
  """
  All values that are not equal to given value.
  """
  readRole_not: String
  """
  All values that are contained in given list.
  """
  readRole_in: [String!]
  """
  All values that are not contained in given list.
  """
  readRole_not_in: [String!]
  """
  All values less than the given value.
  """
  readRole_lt: String
  """
  All values less than or equal the given value.
  """
  readRole_lte: String
  """
  All values greater than the given value.
  """
  readRole_gt: String
  """
  All values greater than or equal the given value.
  """
  readRole_gte: String
  """
  All values containing the given string.
  """
  readRole_contains: String
  """
  All values not containing the given string.
  """
  readRole_not_contains: String
  """
  All values starting with the given string.
  """
  readRole_starts_with: String
  """
  All values not starting with the given string.
  """
  readRole_not_starts_with: String
  """
  All values ending with the given string.
  """
  readRole_ends_with: String
  """
  All values not ending with the given string.
  """
  readRole_not_ends_with: String
  readUser: String
  """
  All values that are not equal to given value.
  """
  readUser_not: String
  """
  All values that are contained in given list.
  """
  readUser_in: [String!]
  """
  All values that are not contained in given list.
  """
  readUser_not_in: [String!]
  """
  All values less than the given value.
  """
  readUser_lt: String
  """
  All values less than or equal the given value.
  """
  readUser_lte: String
  """
  All values greater than the given value.
  """
  readUser_gt: String
  """
  All values greater than or equal the given value.
  """
  readUser_gte: String
  """
  All values containing the given string.
  """
  readUser_contains: String
  """
  All values not containing the given string.
  """
  readUser_not_contains: String
  """
  All values starting with the given string.
  """
  readUser_starts_with: String
  """
  All values not starting with the given string.
  """
  readUser_not_starts_with: String
  """
  All values ending with the given string.
  """
  readUser_ends_with: String
  """
  All values not ending with the given string.
  """
  readUser_not_ends_with: String
  writeRole: String
  """
  All values that are not equal to given value.
  """
  writeRole_not: String
  """
  All values that are contained in given list.
  """
  writeRole_in: [String!]
  """
  All values that are not contained in given list.
  """
  writeRole_not_in: [String!]
  """
  All values less than the given value.
  """
  writeRole_lt: String
  """
  All values less than or equal the given value.
  """
  writeRole_lte: String
  """
  All values greater than the given value.
  """
  writeRole_gt: String
  """
  All values greater than or equal the given value.
  """
  writeRole_gte: String
  """
  All values containing the given string.
  """
  writeRole_contains: String
  """
  All values not containing the given string.
  """
  writeRole_not_contains: String
  """
  All values starting with the given string.
  """
  writeRole_starts_with: String
  """
  All values not starting with the given string.
  """
  writeRole_not_starts_with: String
  """
  All values ending with the given string.
  """
  writeRole_ends_with: String
  """
  All values not ending with the given string.
  """
  writeRole_not_ends_with: String
  writeUser: String
  """
  All values that are not equal to given value.
  """
  writeUser_not: String
  """
  All values that are contained in given list.
  """
  writeUser_in: [String!]
  """
  All values that are not contained in given list.
  """
  writeUser_not_in: [String!]
  """
  All values less than the given value.
  """
  writeUser_lt: String
  """
  All values less than or equal the given value.
  """
  writeUser_lte: String
  """
  All values greater than the given value.
  """
  writeUser_gt: String
  """
  All values greater than or equal the given value.
  """
  writeUser_gte: String
  """
  All values containing the given string.
  """
  writeUser_contains: String
  """
  All values not containing the given string.
  """
  writeUser_not_contains: String
  """
  All values starting with the given string.
  """
  writeUser_starts_with: String
  """
  All values not starting with the given string.
  """
  writeUser_not_starts_with: String
  """
  All values ending with the given string.
  """
  writeUser_ends_with: String
  """
  All values not ending with the given string.
  """
  writeUser_not_ends_with: String
  executeRole: String
  """
  All values that are not equal to given value.
  """
  executeRole_not: String
  """
  All values that are contained in given list.
  """
  executeRole_in: [String!]
  """
  All values that are not contained in given list.
  """
  executeRole_not_in: [String!]
  """
  All values less than the given value.
  """
  executeRole_lt: String
  """
  All values less than or equal the given value.
  """
  executeRole_lte: String
  """
  All values greater than the given value.
  """
  executeRole_gt: String
  """
  All values greater than or equal the given value.
  """
  executeRole_gte: String
  """
  All values containing the given string.
  """
  executeRole_contains: String
  """
  All values not containing the given string.
  """
  executeRole_not_contains: String
  """
  All values starting with the given string.
  """
  executeRole_starts_with: String
  """
  All values not starting with the given string.
  """
  executeRole_not_starts_with: String
  """
  All values ending with the given string.
  """
  executeRole_ends_with: String
  """
  All values not ending with the given string.
  """
  executeRole_not_ends_with: String
  executeUser: String
  """
  All values that are not equal to given value.
  """
  executeUser_not: String
  """
  All values that are contained in given list.
  """
  executeUser_in: [String!]
  """
  All values that are not contained in given list.
  """
  executeUser_not_in: [String!]
  """
  All values less than the given value.
  """
  executeUser_lt: String
  """
  All values less than or equal the given value.
  """
  executeUser_lte: String
  """
  All values greater than the given value.
  """
  executeUser_gt: String
  """
  All values greater than or equal the given value.
  """
  executeUser_gte: String
  """
  All values containing the given string.
  """
  executeUser_contains: String
  """
  All values not containing the given string.
  """
  executeUser_not_contains: String
  """
  All values starting with the given string.
  """
  executeUser_starts_with: String
  """
  All values not starting with the given string.
  """
  executeUser_not_starts_with: String
  """
  All values ending with the given string.
  """
  executeUser_ends_with: String
  """
  All values not ending with the given string.
  """
  executeUser_not_ends_with: String
  tasks_every: BpmnTaskWhereInput
  tasks_some: BpmnTaskWhereInput
  tasks_none: BpmnTaskWhereInput
  resources_every: ProcessResourceWhereInput
  resources_some: ProcessResourceWhereInput
  resources_none: ProcessResourceWhereInput
}

input UserWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [UserWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  uid: String
  """
  All values that are not equal to given value.
  """
  uid_not: String
  """
  All values that are contained in given list.
  """
  uid_in: [String!]
  """
  All values that are not contained in given list.
  """
  uid_not_in: [String!]
  """
  All values less than the given value.
  """
  uid_lt: String
  """
  All values less than or equal the given value.
  """
  uid_lte: String
  """
  All values greater than the given value.
  """
  uid_gt: String
  """
  All values greater than or equal the given value.
  """
  uid_gte: String
  """
  All values containing the given string.
  """
  uid_contains: String
  """
  All values not containing the given string.
  """
  uid_not_contains: String
  """
  All values starting with the given string.
  """
  uid_starts_with: String
  """
  All values not starting with the given string.
  """
  uid_not_starts_with: String
  """
  All values ending with the given string.
  """
  uid_ends_with: String
  """
  All values not ending with the given string.
  """
  uid_not_ends_with: String
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  description: String
  """
  All values that are not equal to given value.
  """
  description_not: String
  """
  All values that are contained in given list.
  """
  description_in: [String!]
  """
  All values that are not contained in given list.
  """
  description_not_in: [String!]
  """
  All values less than the given value.
  """
  description_lt: String
  """
  All values less than or equal the given value.
  """
  description_lte: String
  """
  All values greater than the given value.
  """
  description_gt: String
  """
  All values greater than or equal the given value.
  """
  description_gte: String
  """
  All values containing the given string.
  """
  description_contains: String
  """
  All values not containing the given string.
  """
  description_not_contains: String
  """
  All values starting with the given string.
  """
  description_starts_with: String
  """
  All values not starting with the given string.
  """
  description_not_starts_with: String
  """
  All values ending with the given string.
  """
  description_ends_with: String
  """
  All values not ending with the given string.
  """
  description_not_ends_with: String
  password: String
  """
  All values that are not equal to given value.
  """
  password_not: String
  """
  All values that are contained in given list.
  """
  password_in: [String!]
  """
  All values that are not contained in given list.
  """
  password_not_in: [String!]
  """
  All values less than the given value.
  """
  password_lt: String
  """
  All values less than or equal the given value.
  """
  password_lte: String
  """
  All values greater than the given value.
  """
  password_gt: String
  """
  All values greater than or equal the given value.
  """
  password_gte: String
  """
  All values containing the given string.
  """
  password_contains: String
  """
  All values not containing the given string.
  """
  password_not_contains: String
  """
  All values starting with the given string.
  """
  password_starts_with: String
  """
  All values not starting with the given string.
  """
  password_not_starts_with: String
  """
  All values ending with the given string.
  """
  password_ends_with: String
  """
  All values not ending with the given string.
  """
  password_not_ends_with: String
  notifications_every: NotificationWhereInput
  notifications_some: NotificationWhereInput
  notifications_none: NotificationWhereInput
  processes_every: BpmnProcessInstanceWhereInput
  processes_some: BpmnProcessInstanceWhereInput
  processes_none: BpmnProcessInstanceWhereInput
  data_every: DataWhereInput
  data_some: DataWhereInput
  data_none: DataWhereInput
}

input CommentWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CommentWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CommentWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [CommentWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  text: String
  """
  All values that are not equal to given value.
  """
  text_not: String
  """
  All values that are contained in given list.
  """
  text_in: [String!]
  """
  All values that are not contained in given list.
  """
  text_not_in: [String!]
  """
  All values less than the given value.
  """
  text_lt: String
  """
  All values less than or equal the given value.
  """
  text_lte: String
  """
  All values greater than the given value.
  """
  text_gt: String
  """
  All values greater than or equal the given value.
  """
  text_gte: String
  """
  All values containing the given string.
  """
  text_contains: String
  """
  All values not containing the given string.
  """
  text_not_contains: String
  """
  All values starting with the given string.
  """
  text_starts_with: String
  """
  All values not starting with the given string.
  """
  text_not_starts_with: String
  """
  All values ending with the given string.
  """
  text_ends_with: String
  """
  All values not ending with the given string.
  """
  text_not_ends_with: String
  userId: ID
  """
  All values that are not equal to given value.
  """
  userId_not: ID
  """
  All values that are contained in given list.
  """
  userId_in: [ID!]
  """
  All values that are not contained in given list.
  """
  userId_not_in: [ID!]
  """
  All values less than the given value.
  """
  userId_lt: ID
  """
  All values less than or equal the given value.
  """
  userId_lte: ID
  """
  All values greater than the given value.
  """
  userId_gt: ID
  """
  All values greater than or equal the given value.
  """
  userId_gte: ID
  """
  All values containing the given string.
  """
  userId_contains: ID
  """
  All values not containing the given string.
  """
  userId_not_contains: ID
  """
  All values starting with the given string.
  """
  userId_starts_with: ID
  """
  All values not starting with the given string.
  """
  userId_not_starts_with: ID
  """
  All values ending with the given string.
  """
  userId_ends_with: ID
  """
  All values not ending with the given string.
  """
  userId_not_ends_with: ID
  date: DateTime
  """
  All values that are not equal to given value.
  """
  date_not: DateTime
  """
  All values that are contained in given list.
  """
  date_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  date_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  date_lt: DateTime
  """
  All values less than or equal the given value.
  """
  date_lte: DateTime
  """
  All values greater than the given value.
  """
  date_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  date_gte: DateTime
  replyTo: ID
  """
  All values that are not equal to given value.
  """
  replyTo_not: ID
  """
  All values that are contained in given list.
  """
  replyTo_in: [ID!]
  """
  All values that are not contained in given list.
  """
  replyTo_not_in: [ID!]
  """
  All values less than the given value.
  """
  replyTo_lt: ID
  """
  All values less than or equal the given value.
  """
  replyTo_lte: ID
  """
  All values greater than the given value.
  """
  replyTo_gt: ID
  """
  All values greater than or equal the given value.
  """
  replyTo_gte: ID
  """
  All values containing the given string.
  """
  replyTo_contains: ID
  """
  All values not containing the given string.
  """
  replyTo_not_contains: ID
  """
  All values starting with the given string.
  """
  replyTo_starts_with: ID
  """
  All values not starting with the given string.
  """
  replyTo_not_starts_with: ID
  """
  All values ending with the given string.
  """
  replyTo_ends_with: ID
  """
  All values not ending with the given string.
  """
  replyTo_not_ends_with: ID
  _MagicalBackRelation_BpmnProcessInstanceComments_every: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceComments_some: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceComments_none: BpmnProcessInstanceWhereInput
}

input LogWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [LogWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [LogWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [LogWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  elementId: String
  """
  All values that are not equal to given value.
  """
  elementId_not: String
  """
  All values that are contained in given list.
  """
  elementId_in: [String!]
  """
  All values that are not contained in given list.
  """
  elementId_not_in: [String!]
  """
  All values less than the given value.
  """
  elementId_lt: String
  """
  All values less than or equal the given value.
  """
  elementId_lte: String
  """
  All values greater than the given value.
  """
  elementId_gt: String
  """
  All values greater than or equal the given value.
  """
  elementId_gte: String
  """
  All values containing the given string.
  """
  elementId_contains: String
  """
  All values not containing the given string.
  """
  elementId_not_contains: String
  """
  All values starting with the given string.
  """
  elementId_starts_with: String
  """
  All values not starting with the given string.
  """
  elementId_not_starts_with: String
  """
  All values ending with the given string.
  """
  elementId_ends_with: String
  """
  All values not ending with the given string.
  """
  elementId_not_ends_with: String
  elementName: String
  """
  All values that are not equal to given value.
  """
  elementName_not: String
  """
  All values that are contained in given list.
  """
  elementName_in: [String!]
  """
  All values that are not contained in given list.
  """
  elementName_not_in: [String!]
  """
  All values less than the given value.
  """
  elementName_lt: String
  """
  All values less than or equal the given value.
  """
  elementName_lte: String
  """
  All values greater than the given value.
  """
  elementName_gt: String
  """
  All values greater than or equal the given value.
  """
  elementName_gte: String
  """
  All values containing the given string.
  """
  elementName_contains: String
  """
  All values not containing the given string.
  """
  elementName_not_contains: String
  """
  All values starting with the given string.
  """
  elementName_starts_with: String
  """
  All values not starting with the given string.
  """
  elementName_not_starts_with: String
  """
  All values ending with the given string.
  """
  elementName_ends_with: String
  """
  All values not ending with the given string.
  """
  elementName_not_ends_with: String
  date: DateTime
  """
  All values that are not equal to given value.
  """
  date_not: DateTime
  """
  All values that are contained in given list.
  """
  date_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  date_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  date_lt: DateTime
  """
  All values less than or equal the given value.
  """
  date_lte: DateTime
  """
  All values greater than the given value.
  """
  date_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  date_gte: DateTime
  taskInstanceId: ID
  """
  All values that are not equal to given value.
  """
  taskInstanceId_not: ID
  """
  All values that are contained in given list.
  """
  taskInstanceId_in: [ID!]
  """
  All values that are not contained in given list.
  """
  taskInstanceId_not_in: [ID!]
  """
  All values less than the given value.
  """
  taskInstanceId_lt: ID
  """
  All values less than or equal the given value.
  """
  taskInstanceId_lte: ID
  """
  All values greater than the given value.
  """
  taskInstanceId_gt: ID
  """
  All values greater than or equal the given value.
  """
  taskInstanceId_gte: ID
  """
  All values containing the given string.
  """
  taskInstanceId_contains: ID
  """
  All values not containing the given string.
  """
  taskInstanceId_not_contains: ID
  """
  All values starting with the given string.
  """
  taskInstanceId_starts_with: ID
  """
  All values not starting with the given string.
  """
  taskInstanceId_not_starts_with: ID
  """
  All values ending with the given string.
  """
  taskInstanceId_ends_with: ID
  """
  All values not ending with the given string.
  """
  taskInstanceId_not_ends_with: ID
  performerId: ID
  """
  All values that are not equal to given value.
  """
  performerId_not: ID
  """
  All values that are contained in given list.
  """
  performerId_in: [ID!]
  """
  All values that are not contained in given list.
  """
  performerId_not_in: [ID!]
  """
  All values less than the given value.
  """
  performerId_lt: ID
  """
  All values less than or equal the given value.
  """
  performerId_lte: ID
  """
  All values greater than the given value.
  """
  performerId_gt: ID
  """
  All values greater than or equal the given value.
  """
  performerId_gte: ID
  """
  All values containing the given string.
  """
  performerId_contains: ID
  """
  All values not containing the given string.
  """
  performerId_not_contains: ID
  """
  All values starting with the given string.
  """
  performerId_starts_with: ID
  """
  All values not starting with the given string.
  """
  performerId_not_starts_with: ID
  """
  All values ending with the given string.
  """
  performerId_ends_with: ID
  """
  All values not ending with the given string.
  """
  performerId_not_ends_with: ID
  status: BpmnTaskInstanceStatus
  """
  All values that are not equal to given value.
  """
  status_not: BpmnTaskInstanceStatus
  """
  All values that are contained in given list.
  """
  status_in: [BpmnTaskInstanceStatus!]
  """
  All values that are not contained in given list.
  """
  status_not_in: [BpmnTaskInstanceStatus!]
  message: String
  """
  All values that are not equal to given value.
  """
  message_not: String
  """
  All values that are contained in given list.
  """
  message_in: [String!]
  """
  All values that are not contained in given list.
  """
  message_not_in: [String!]
  """
  All values less than the given value.
  """
  message_lt: String
  """
  All values less than or equal the given value.
  """
  message_lte: String
  """
  All values greater than the given value.
  """
  message_gt: String
  """
  All values greater than or equal the given value.
  """
  message_gte: String
  """
  All values containing the given string.
  """
  message_contains: String
  """
  All values not containing the given string.
  """
  message_not_contains: String
  """
  All values starting with the given string.
  """
  message_starts_with: String
  """
  All values not starting with the given string.
  """
  message_not_starts_with: String
  """
  All values ending with the given string.
  """
  message_ends_with: String
  """
  All values not ending with the given string.
  """
  message_not_ends_with: String
  _MagicalBackRelation_BpmnProcessInstanceLog_every: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceLog_some: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceLog_none: BpmnProcessInstanceWhereInput
}

input BpmnTaskInstanceWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [BpmnTaskInstanceWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [BpmnTaskInstanceWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [BpmnTaskInstanceWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  dateFinished: DateTime
  """
  All values that are not equal to given value.
  """
  dateFinished_not: DateTime
  """
  All values that are contained in given list.
  """
  dateFinished_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  dateFinished_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  dateFinished_lt: DateTime
  """
  All values less than or equal the given value.
  """
  dateFinished_lte: DateTime
  """
  All values greater than the given value.
  """
  dateFinished_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  dateFinished_gte: DateTime
  dateStarted: DateTime
  """
  All values that are not equal to given value.
  """
  dateStarted_not: DateTime
  """
  All values that are contained in given list.
  """
  dateStarted_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  dateStarted_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  dateStarted_lt: DateTime
  """
  All values less than or equal the given value.
  """
  dateStarted_lte: DateTime
  """
  All values greater than the given value.
  """
  dateStarted_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  dateStarted_gte: DateTime
  duration: Int
  """
  All values that are not equal to given value.
  """
  duration_not: Int
  """
  All values that are contained in given list.
  """
  duration_in: [Int!]
  """
  All values that are not contained in given list.
  """
  duration_not_in: [Int!]
  """
  All values less than the given value.
  """
  duration_lt: Int
  """
  All values less than or equal the given value.
  """
  duration_lte: Int
  """
  All values greater than the given value.
  """
  duration_gt: Int
  """
  All values greater than or equal the given value.
  """
  duration_gte: Int
  performerId: ID
  """
  All values that are not equal to given value.
  """
  performerId_not: ID
  """
  All values that are contained in given list.
  """
  performerId_in: [ID!]
  """
  All values that are not contained in given list.
  """
  performerId_not_in: [ID!]
  """
  All values less than the given value.
  """
  performerId_lt: ID
  """
  All values less than or equal the given value.
  """
  performerId_lte: ID
  """
  All values greater than the given value.
  """
  performerId_gt: ID
  """
  All values greater than or equal the given value.
  """
  performerId_gte: ID
  """
  All values containing the given string.
  """
  performerId_contains: ID
  """
  All values not containing the given string.
  """
  performerId_not_contains: ID
  """
  All values starting with the given string.
  """
  performerId_starts_with: ID
  """
  All values not starting with the given string.
  """
  performerId_not_starts_with: ID
  """
  All values ending with the given string.
  """
  performerId_ends_with: ID
  """
  All values not ending with the given string.
  """
  performerId_not_ends_with: ID
  processInstanceId: ID
  """
  All values that are not equal to given value.
  """
  processInstanceId_not: ID
  """
  All values that are contained in given list.
  """
  processInstanceId_in: [ID!]
  """
  All values that are not contained in given list.
  """
  processInstanceId_not_in: [ID!]
  """
  All values less than the given value.
  """
  processInstanceId_lt: ID
  """
  All values less than or equal the given value.
  """
  processInstanceId_lte: ID
  """
  All values greater than the given value.
  """
  processInstanceId_gt: ID
  """
  All values greater than or equal the given value.
  """
  processInstanceId_gte: ID
  """
  All values containing the given string.
  """
  processInstanceId_contains: ID
  """
  All values not containing the given string.
  """
  processInstanceId_not_contains: ID
  """
  All values starting with the given string.
  """
  processInstanceId_starts_with: ID
  """
  All values not starting with the given string.
  """
  processInstanceId_not_starts_with: ID
  """
  All values ending with the given string.
  """
  processInstanceId_ends_with: ID
  """
  All values not ending with the given string.
  """
  processInstanceId_not_ends_with: ID
  status: BpmnTaskInstanceStatus
  """
  All values that are not equal to given value.
  """
  status_not: BpmnTaskInstanceStatus
  """
  All values that are contained in given list.
  """
  status_in: [BpmnTaskInstanceStatus!]
  """
  All values that are not contained in given list.
  """
  status_not_in: [BpmnTaskInstanceStatus!]
  taskId: ID
  """
  All values that are not equal to given value.
  """
  taskId_not: ID
  """
  All values that are contained in given list.
  """
  taskId_in: [ID!]
  """
  All values that are not contained in given list.
  """
  taskId_not_in: [ID!]
  """
  All values less than the given value.
  """
  taskId_lt: ID
  """
  All values less than or equal the given value.
  """
  taskId_lte: ID
  """
  All values greater than the given value.
  """
  taskId_gt: ID
  """
  All values greater than or equal the given value.
  """
  taskId_gte: ID
  """
  All values containing the given string.
  """
  taskId_contains: ID
  """
  All values not containing the given string.
  """
  taskId_not_contains: ID
  """
  All values starting with the given string.
  """
  taskId_starts_with: ID
  """
  All values not starting with the given string.
  """
  taskId_not_starts_with: ID
  """
  All values ending with the given string.
  """
  taskId_ends_with: ID
  """
  All values not ending with the given string.
  """
  taskId_not_ends_with: ID
  _MagicalBackRelation_BpmnProcessInstanceTasks_every: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceTasks_some: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceTasks_none: BpmnProcessInstanceWhereInput
}

enum LanguageCode {
  EN
}
`;
