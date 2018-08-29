export const typeDefs = `type Query {
  testQuery: Boolean
  notifications(input: NotificationsInput): [NotificationsPayload]!
  bpmnProcesses(input: BpmnProcessesInput!): [BpmnProcess]!
  bpmnProcessInstances(input: BpmnProcessInstancesInput!): [BpmnProcessInstance]!
  bpmnTasks(input: BpmnTasksInput!): [BpmnTaskInstance]!
  user(id: ID!): User
  users: [User]!
  resume(token: String!): AuthPayload!
}

type Mutation {
  testMutation: Boolean
  notify(input: NotifyInput): Notification!
  createProcess(input: CreateProcessInput!): BpmnProcess
  login(input: AuthInput!): AuthPayload!
  signup(input: AuthInput!): AuthPayload!
}

type NotificationsPayload {
  id: ID
  date: DateTime
  text: String
}

input NotificationsInput {
  visible: Boolean
  skip: Int
  first: Int
}

type BpmnProcess implements Node {
  id: ID!
  access(where: AccessWhereInput): Access!
  actionCount: Int!
  data(where: DataDescriptorWhereInput, orderBy: DataDescriptorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DataDescriptor!]
  description: String
  model: String!
  name: String!
  resources(where: ResourceWhereInput, orderBy: ResourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Resource!]
  status: ProcessStatus!
  version: Int!
  versions(where: BpmnProcessWhereInput, orderBy: BpmnProcessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BpmnProcess!]
}

input BpmnProcessesInput {
  status: ProcessStatus
  name: String
  descritpion: String
  skip: Int
  first: Int
}

type BpmnProcessInstance implements Node {
  id: ID!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  dateFinished: DateTime
  dateStarted: DateTime
  description: String
  duration: Int
  name: String!
  ownerId: ID
  process(where: BpmnProcessWhereInput): BpmnProcess
  resources: Json
  status: BpmnProcessInstanceStatus
  tasks(where: BpmnTaskInstanceWhereInput, orderBy: BpmnTaskInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BpmnTaskInstance!]
}

input BpmnProcessInstancesInput {
  status: ProcessStatus
  name: String
  dateStarted: DateTime
  dateFinished: DateTime
  duration: Int
  processId: String
  skip: Int
  first: Int
}

type BpmnTaskInstance implements Node {
  id: ID!
  dateFinished: DateTime
  dateStarted: DateTime
  duration: Int
  performer(where: UserWhereInput): User
  performerId: String
  performerRoles: [String!]!
  processInstance(where: BpmnProcessWhereInput): BpmnProcess
  snapshot: Json
  taskId: String
}

input BpmnTasksInput {
  processInstanceId: String!
}

type User implements Node {
  id: ID!
  uid: String!
  name: String!
  roles: [String!]!
  description: String
  password: String!
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification!]
  data(where: DataWhereInput, orderBy: DataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Data!]
}

type AuthPayload {
  user: User!
  token: String!
}

type Notification implements Node {
  id: ID!
  date: DateTime
  processInstance(where: BpmnProcessInstanceWhereInput): BpmnProcessInstance
  code: NotificationCode
  text(where: LocalisationWhereInput): Localisation
  params: [String!]!
  visible: Boolean
}

input NotifyInput {
  userId: ID
  processInstanceId: ID
  code: NotificationCode
  params: [String!]!
}

input CreateProcessInput {
  name: String!
  description: String
  model: String
  status: ProcessStatus
}

input AuthInput {
  user: String
  password: String
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

scalar DateTime

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
  process: BpmnProcessWhereInput
  tasks_every: BpmnTaskInstanceWhereInput
  tasks_some: BpmnTaskInstanceWhereInput
  tasks_none: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToNotification_every: NotificationWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToNotification_some: NotificationWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToNotification_none: NotificationWhereInput
}

enum NotificationCode {
  ProcessStarted
  ProcessFinished
  ProcessAborted
  ActionStarted
  ActionFinished
  ActionRequired
}

type Localisation implements Node {
  id: ID!
  code: String!
  text: String!
  language: LanguageCode!
}

input LocalisationWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [LocalisationWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [LocalisationWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [LocalisationWhereInput!]
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
  code: String
  """
  All values that are not equal to given value.
  """
  code_not: String
  """
  All values that are contained in given list.
  """
  code_in: [String!]
  """
  All values that are not contained in given list.
  """
  code_not_in: [String!]
  """
  All values less than the given value.
  """
  code_lt: String
  """
  All values less than or equal the given value.
  """
  code_lte: String
  """
  All values greater than the given value.
  """
  code_gt: String
  """
  All values greater than or equal the given value.
  """
  code_gte: String
  """
  All values containing the given string.
  """
  code_contains: String
  """
  All values not containing the given string.
  """
  code_not_contains: String
  """
  All values starting with the given string.
  """
  code_starts_with: String
  """
  All values not starting with the given string.
  """
  code_not_starts_with: String
  """
  All values ending with the given string.
  """
  code_ends_with: String
  """
  All values not ending with the given string.
  """
  code_not_ends_with: String
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
  language: LanguageCode
  """
  All values that are not equal to given value.
  """
  language_not: LanguageCode
  """
  All values that are contained in given list.
  """
  language_in: [LanguageCode!]
  """
  All values that are not contained in given list.
  """
  language_not_in: [LanguageCode!]
  _MagicalBackRelation_LocalisationToNotification_every: NotificationWhereInput
  _MagicalBackRelation_LocalisationToNotification_some: NotificationWhereInput
  _MagicalBackRelation_LocalisationToNotification_none: NotificationWhereInput
}

type Access implements Node {
  id: ID!
  createdById: ID!
  createdOn: DateTime
  modifiedById: ID
  modifiedOn: DateTime
  read(where: AccessConditionWhereInput, orderBy: AccessConditionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AccessCondition!]
  write(where: AccessConditionWhereInput, orderBy: AccessConditionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AccessCondition!]
  execute(where: AccessConditionWhereInput, orderBy: AccessConditionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AccessCondition!]
}

input AccessWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [AccessWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [AccessWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [AccessWhereInput!]
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
  createdOn: DateTime
  """
  All values that are not equal to given value.
  """
  createdOn_not: DateTime
  """
  All values that are contained in given list.
  """
  createdOn_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdOn_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdOn_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdOn_lte: DateTime
  """
  All values greater than the given value.
  """
  createdOn_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdOn_gte: DateTime
  modifiedById: ID
  """
  All values that are not equal to given value.
  """
  modifiedById_not: ID
  """
  All values that are contained in given list.
  """
  modifiedById_in: [ID!]
  """
  All values that are not contained in given list.
  """
  modifiedById_not_in: [ID!]
  """
  All values less than the given value.
  """
  modifiedById_lt: ID
  """
  All values less than or equal the given value.
  """
  modifiedById_lte: ID
  """
  All values greater than the given value.
  """
  modifiedById_gt: ID
  """
  All values greater than or equal the given value.
  """
  modifiedById_gte: ID
  """
  All values containing the given string.
  """
  modifiedById_contains: ID
  """
  All values not containing the given string.
  """
  modifiedById_not_contains: ID
  """
  All values starting with the given string.
  """
  modifiedById_starts_with: ID
  """
  All values not starting with the given string.
  """
  modifiedById_not_starts_with: ID
  """
  All values ending with the given string.
  """
  modifiedById_ends_with: ID
  """
  All values not ending with the given string.
  """
  modifiedById_not_ends_with: ID
  modifiedOn: DateTime
  """
  All values that are not equal to given value.
  """
  modifiedOn_not: DateTime
  """
  All values that are contained in given list.
  """
  modifiedOn_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  modifiedOn_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  modifiedOn_lt: DateTime
  """
  All values less than or equal the given value.
  """
  modifiedOn_lte: DateTime
  """
  All values greater than the given value.
  """
  modifiedOn_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  modifiedOn_gte: DateTime
  read_every: AccessConditionWhereInput
  read_some: AccessConditionWhereInput
  read_none: AccessConditionWhereInput
  write_every: AccessConditionWhereInput
  write_some: AccessConditionWhereInput
  write_none: AccessConditionWhereInput
  execute_every: AccessConditionWhereInput
  execute_some: AccessConditionWhereInput
  execute_none: AccessConditionWhereInput
  _MagicalBackRelation_BpmnProcessAccess_every: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessAccess_some: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessAccess_none: BpmnProcessWhereInput
  _MagicalBackRelation_AccessToDataDescriptor_every: DataDescriptorWhereInput
  _MagicalBackRelation_AccessToDataDescriptor_some: DataDescriptorWhereInput
  _MagicalBackRelation_AccessToDataDescriptor_none: DataDescriptorWhereInput
}

type DataDescriptor implements Node {
  id: ID!
  access(where: AccessWhereInput): Access
  defaultValue: String
  description: String
  descriptors(where: DataDescriptorWhereInput, orderBy: DataDescriptorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DataDescriptor!]
  expression: String
  isArray: Boolean
  name: String
  type: DataType
  validators(where: ValidatorWhereInput): Validator
}

input DataDescriptorWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [DataDescriptorWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [DataDescriptorWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [DataDescriptorWhereInput!]
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
  defaultValue: String
  """
  All values that are not equal to given value.
  """
  defaultValue_not: String
  """
  All values that are contained in given list.
  """
  defaultValue_in: [String!]
  """
  All values that are not contained in given list.
  """
  defaultValue_not_in: [String!]
  """
  All values less than the given value.
  """
  defaultValue_lt: String
  """
  All values less than or equal the given value.
  """
  defaultValue_lte: String
  """
  All values greater than the given value.
  """
  defaultValue_gt: String
  """
  All values greater than or equal the given value.
  """
  defaultValue_gte: String
  """
  All values containing the given string.
  """
  defaultValue_contains: String
  """
  All values not containing the given string.
  """
  defaultValue_not_contains: String
  """
  All values starting with the given string.
  """
  defaultValue_starts_with: String
  """
  All values not starting with the given string.
  """
  defaultValue_not_starts_with: String
  """
  All values ending with the given string.
  """
  defaultValue_ends_with: String
  """
  All values not ending with the given string.
  """
  defaultValue_not_ends_with: String
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
  expression: String
  """
  All values that are not equal to given value.
  """
  expression_not: String
  """
  All values that are contained in given list.
  """
  expression_in: [String!]
  """
  All values that are not contained in given list.
  """
  expression_not_in: [String!]
  """
  All values less than the given value.
  """
  expression_lt: String
  """
  All values less than or equal the given value.
  """
  expression_lte: String
  """
  All values greater than the given value.
  """
  expression_gt: String
  """
  All values greater than or equal the given value.
  """
  expression_gte: String
  """
  All values containing the given string.
  """
  expression_contains: String
  """
  All values not containing the given string.
  """
  expression_not_contains: String
  """
  All values starting with the given string.
  """
  expression_starts_with: String
  """
  All values not starting with the given string.
  """
  expression_not_starts_with: String
  """
  All values ending with the given string.
  """
  expression_ends_with: String
  """
  All values not ending with the given string.
  """
  expression_not_ends_with: String
  isArray: Boolean
  """
  All values that are not equal to given value.
  """
  isArray_not: Boolean
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
  type: DataType
  """
  All values that are not equal to given value.
  """
  type_not: DataType
  """
  All values that are contained in given list.
  """
  type_in: [DataType!]
  """
  All values that are not contained in given list.
  """
  type_not_in: [DataType!]
  access: AccessWhereInput
  descriptors_every: DataDescriptorWhereInput
  descriptors_some: DataDescriptorWhereInput
  descriptors_none: DataDescriptorWhereInput
  validators: ValidatorWhereInput
  _MagicalBackRelation_DataToDataDescriptor_every: DataWhereInput
  _MagicalBackRelation_DataToDataDescriptor_some: DataWhereInput
  _MagicalBackRelation_DataToDataDescriptor_none: DataWhereInput
  _MagicalBackRelation_DataDescriptorToFormElement_every: FormElementWhereInput
  _MagicalBackRelation_DataDescriptorToFormElement_some: FormElementWhereInput
  _MagicalBackRelation_DataDescriptorToFormElement_none: FormElementWhereInput
  _MagicalBackRelation_DataDescriptorToDataDescriptor_every: DataDescriptorWhereInput
  _MagicalBackRelation_DataDescriptorToDataDescriptor_some: DataDescriptorWhereInput
  _MagicalBackRelation_DataDescriptorToDataDescriptor_none: DataDescriptorWhereInput
  _MagicalBackRelation_BpmnProcessToDataDescriptor_every: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessToDataDescriptor_some: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessToDataDescriptor_none: BpmnProcessWhereInput
}

enum DataDescriptorOrderByInput {
  id_ASC
  id_DESC
  defaultValue_ASC
  defaultValue_DESC
  description_ASC
  description_DESC
  expression_ASC
  expression_DESC
  isArray_ASC
  isArray_DESC
  name_ASC
  name_DESC
  type_ASC
  type_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type Resource implements Node {
  id: ID!
  type: ResourceType!
  name: String!
  content: String!
  form(where: FormWhereInput): Form
}

input ResourceWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ResourceWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ResourceWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ResourceWhereInput!]
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
  type: ResourceType
  """
  All values that are not equal to given value.
  """
  type_not: ResourceType
  """
  All values that are contained in given list.
  """
  type_in: [ResourceType!]
  """
  All values that are not contained in given list.
  """
  type_not_in: [ResourceType!]
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
  content: String
  """
  All values that are not equal to given value.
  """
  content_not: String
  """
  All values that are contained in given list.
  """
  content_in: [String!]
  """
  All values that are not contained in given list.
  """
  content_not_in: [String!]
  """
  All values less than the given value.
  """
  content_lt: String
  """
  All values less than or equal the given value.
  """
  content_lte: String
  """
  All values greater than the given value.
  """
  content_gt: String
  """
  All values greater than or equal the given value.
  """
  content_gte: String
  """
  All values containing the given string.
  """
  content_contains: String
  """
  All values not containing the given string.
  """
  content_not_contains: String
  """
  All values starting with the given string.
  """
  content_starts_with: String
  """
  All values not starting with the given string.
  """
  content_not_starts_with: String
  """
  All values ending with the given string.
  """
  content_ends_with: String
  """
  All values not ending with the given string.
  """
  content_not_ends_with: String
  form: FormWhereInput
  _MagicalBackRelation_BpmnProcessResources_every: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessResources_some: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessResources_none: BpmnProcessWhereInput
}

enum ResourceOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  name_ASC
  name_DESC
  content_ASC
  content_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

enum ProcessStatus {
  Draft
  Proposal
  Published
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
  status: ProcessStatus
  """
  All values that are not equal to given value.
  """
  status_not: ProcessStatus
  """
  All values that are contained in given list.
  """
  status_in: [ProcessStatus!]
  """
  All values that are not contained in given list.
  """
  status_not_in: [ProcessStatus!]
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
  access: AccessWhereInput
  data_every: DataDescriptorWhereInput
  data_some: DataDescriptorWhereInput
  data_none: DataDescriptorWhereInput
  resources_every: ResourceWhereInput
  resources_some: ResourceWhereInput
  resources_none: ResourceWhereInput
  versions_every: BpmnProcessWhereInput
  versions_some: BpmnProcessWhereInput
  versions_none: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessToBpmnTaskInstance_every: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnProcessToBpmnTaskInstance_some: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnProcessToBpmnTaskInstance_none: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnProcessVersions_every: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessVersions_some: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessVersions_none: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessToBpmnProcessInstance_every: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessToBpmnProcessInstance_some: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessToBpmnProcessInstance_none: BpmnProcessInstanceWhereInput
}

enum BpmnProcessOrderByInput {
  id_ASC
  id_DESC
  actionCount_ASC
  actionCount_DESC
  description_ASC
  description_DESC
  model_ASC
  model_DESC
  name_ASC
  name_DESC
  status_ASC
  status_DESC
  version_ASC
  version_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type Comment {
  text: String!
  user(where: UserWhereInput): User!
  date: DateTime!
  replyTo: String
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
  replyTo: String
  """
  All values that are not equal to given value.
  """
  replyTo_not: String
  """
  All values that are contained in given list.
  """
  replyTo_in: [String!]
  """
  All values that are not contained in given list.
  """
  replyTo_not_in: [String!]
  """
  All values less than the given value.
  """
  replyTo_lt: String
  """
  All values less than or equal the given value.
  """
  replyTo_lte: String
  """
  All values greater than the given value.
  """
  replyTo_gt: String
  """
  All values greater than or equal the given value.
  """
  replyTo_gte: String
  """
  All values containing the given string.
  """
  replyTo_contains: String
  """
  All values not containing the given string.
  """
  replyTo_not_contains: String
  """
  All values starting with the given string.
  """
  replyTo_starts_with: String
  """
  All values not starting with the given string.
  """
  replyTo_not_starts_with: String
  """
  All values ending with the given string.
  """
  replyTo_ends_with: String
  """
  All values not ending with the given string.
  """
  replyTo_not_ends_with: String
  user: UserWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToComment_every: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToComment_some: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToComment_none: BpmnProcessInstanceWhereInput
}

enum CommentOrderByInput {
  text_ASC
  text_DESC
  date_ASC
  date_DESC
  replyTo_ASC
  replyTo_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

"""
Raw JSON value
"""
scalar Json

enum BpmnProcessInstanceStatus {
  Running
  Finished
  Aborted
  Paused
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
  performerId: String
  """
  All values that are not equal to given value.
  """
  performerId_not: String
  """
  All values that are contained in given list.
  """
  performerId_in: [String!]
  """
  All values that are not contained in given list.
  """
  performerId_not_in: [String!]
  """
  All values less than the given value.
  """
  performerId_lt: String
  """
  All values less than or equal the given value.
  """
  performerId_lte: String
  """
  All values greater than the given value.
  """
  performerId_gt: String
  """
  All values greater than or equal the given value.
  """
  performerId_gte: String
  """
  All values containing the given string.
  """
  performerId_contains: String
  """
  All values not containing the given string.
  """
  performerId_not_contains: String
  """
  All values starting with the given string.
  """
  performerId_starts_with: String
  """
  All values not starting with the given string.
  """
  performerId_not_starts_with: String
  """
  All values ending with the given string.
  """
  performerId_ends_with: String
  """
  All values not ending with the given string.
  """
  performerId_not_ends_with: String
  taskId: String
  """
  All values that are not equal to given value.
  """
  taskId_not: String
  """
  All values that are contained in given list.
  """
  taskId_in: [String!]
  """
  All values that are not contained in given list.
  """
  taskId_not_in: [String!]
  """
  All values less than the given value.
  """
  taskId_lt: String
  """
  All values less than or equal the given value.
  """
  taskId_lte: String
  """
  All values greater than the given value.
  """
  taskId_gt: String
  """
  All values greater than or equal the given value.
  """
  taskId_gte: String
  """
  All values containing the given string.
  """
  taskId_contains: String
  """
  All values not containing the given string.
  """
  taskId_not_contains: String
  """
  All values starting with the given string.
  """
  taskId_starts_with: String
  """
  All values not starting with the given string.
  """
  taskId_not_starts_with: String
  """
  All values ending with the given string.
  """
  taskId_ends_with: String
  """
  All values not ending with the given string.
  """
  taskId_not_ends_with: String
  performer: UserWhereInput
  processInstance: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessTasks_every: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessTasks_some: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessTasks_none: BpmnProcessInstanceWhereInput
}

enum BpmnTaskInstanceOrderByInput {
  id_ASC
  id_DESC
  dateFinished_ASC
  dateFinished_DESC
  dateStarted_ASC
  dateStarted_DESC
  duration_ASC
  duration_DESC
  performerId_ASC
  performerId_DESC
  snapshot_ASC
  snapshot_DESC
  taskId_ASC
  taskId_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
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
  data_every: DataWhereInput
  data_some: DataWhereInput
  data_none: DataWhereInput
  _MagicalBackRelation_BpmnTaskInstanceToUser_every: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnTaskInstanceToUser_some: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnTaskInstanceToUser_none: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_CommentToUser_every: CommentWhereInput
  _MagicalBackRelation_CommentToUser_some: CommentWhereInput
  _MagicalBackRelation_CommentToUser_none: CommentWhereInput
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
  visible: Boolean
  """
  All values that are not equal to given value.
  """
  visible_not: Boolean
  processInstance: BpmnProcessInstanceWhereInput
  text: LocalisationWhereInput
  _MagicalBackRelation_UserNotifications_every: UserWhereInput
  _MagicalBackRelation_UserNotifications_some: UserWhereInput
  _MagicalBackRelation_UserNotifications_none: UserWhereInput
}

enum NotificationOrderByInput {
  id_ASC
  id_DESC
  date_ASC
  date_DESC
  code_ASC
  code_DESC
  visible_ASC
  visible_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type Data implements Node {
  id: ID!
  descriptor(where: DataDescriptorWhereInput): DataDescriptor
  organisationId: String
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
  organisationId: String
  """
  All values that are not equal to given value.
  """
  organisationId_not: String
  """
  All values that are contained in given list.
  """
  organisationId_in: [String!]
  """
  All values that are not contained in given list.
  """
  organisationId_not_in: [String!]
  """
  All values less than the given value.
  """
  organisationId_lt: String
  """
  All values less than or equal the given value.
  """
  organisationId_lte: String
  """
  All values greater than the given value.
  """
  organisationId_gt: String
  """
  All values greater than or equal the given value.
  """
  organisationId_gte: String
  """
  All values containing the given string.
  """
  organisationId_contains: String
  """
  All values not containing the given string.
  """
  organisationId_not_contains: String
  """
  All values starting with the given string.
  """
  organisationId_starts_with: String
  """
  All values not starting with the given string.
  """
  organisationId_not_starts_with: String
  """
  All values ending with the given string.
  """
  organisationId_ends_with: String
  """
  All values not ending with the given string.
  """
  organisationId_not_ends_with: String
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
  descriptor: DataDescriptorWhereInput
  _MagicalBackRelation_UserData_every: UserWhereInput
  _MagicalBackRelation_UserData_some: UserWhereInput
  _MagicalBackRelation_UserData_none: UserWhereInput
}

enum DataOrderByInput {
  id_ASC
  id_DESC
  organisationId_ASC
  organisationId_DESC
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

type Form implements Node {
  id: ID!
  name: String!
  description: String
  elements(where: FormElementWhereInput, orderBy: FormElementOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FormElement!]
  validations(where: ValidatorWhereInput, orderBy: ValidatorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Validator!]
}

type FormElement implements Node {
  id: ID!
  row: Int
  column: Int
  width: Int
  source(where: DataDescriptorWhereInput): DataDescriptor
  label: String
  inline: Boolean
  defaultValue: String
  list: String
  filterSource: String
  filterColumn: String
  control: FormControl
  controlProps: Json
  vertical: Boolean
  elements(where: FormElementWhereInput, orderBy: FormElementOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FormElement!]
}

type Organisation implements Node {
  id: ID!
  name: String!
  description: String
}

type Role implements Node {
  id: ID!
  name: String!
  description: String
}

type Validator implements Node {
  id: ID!
  name: String!
  params: [String!]!
}

enum LanguageCode {
  EN
}

type AccessCondition {
  organisationId: ID
  roleId: ID
  userId: ID
}

input AccessConditionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [AccessConditionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [AccessConditionWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [AccessConditionWhereInput!]
  organisationId: ID
  """
  All values that are not equal to given value.
  """
  organisationId_not: ID
  """
  All values that are contained in given list.
  """
  organisationId_in: [ID!]
  """
  All values that are not contained in given list.
  """
  organisationId_not_in: [ID!]
  """
  All values less than the given value.
  """
  organisationId_lt: ID
  """
  All values less than or equal the given value.
  """
  organisationId_lte: ID
  """
  All values greater than the given value.
  """
  organisationId_gt: ID
  """
  All values greater than or equal the given value.
  """
  organisationId_gte: ID
  """
  All values containing the given string.
  """
  organisationId_contains: ID
  """
  All values not containing the given string.
  """
  organisationId_not_contains: ID
  """
  All values starting with the given string.
  """
  organisationId_starts_with: ID
  """
  All values not starting with the given string.
  """
  organisationId_not_starts_with: ID
  """
  All values ending with the given string.
  """
  organisationId_ends_with: ID
  """
  All values not ending with the given string.
  """
  organisationId_not_ends_with: ID
  roleId: ID
  """
  All values that are not equal to given value.
  """
  roleId_not: ID
  """
  All values that are contained in given list.
  """
  roleId_in: [ID!]
  """
  All values that are not contained in given list.
  """
  roleId_not_in: [ID!]
  """
  All values less than the given value.
  """
  roleId_lt: ID
  """
  All values less than or equal the given value.
  """
  roleId_lte: ID
  """
  All values greater than the given value.
  """
  roleId_gt: ID
  """
  All values greater than or equal the given value.
  """
  roleId_gte: ID
  """
  All values containing the given string.
  """
  roleId_contains: ID
  """
  All values not containing the given string.
  """
  roleId_not_contains: ID
  """
  All values starting with the given string.
  """
  roleId_starts_with: ID
  """
  All values not starting with the given string.
  """
  roleId_not_starts_with: ID
  """
  All values ending with the given string.
  """
  roleId_ends_with: ID
  """
  All values not ending with the given string.
  """
  roleId_not_ends_with: ID
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
  _MagicalBackRelation_CanExecute_every: AccessWhereInput
  _MagicalBackRelation_CanExecute_some: AccessWhereInput
  _MagicalBackRelation_CanExecute_none: AccessWhereInput
  _MagicalBackRelation_CanWrite_every: AccessWhereInput
  _MagicalBackRelation_CanWrite_some: AccessWhereInput
  _MagicalBackRelation_CanWrite_none: AccessWhereInput
  _MagicalBackRelation_CanRead_every: AccessWhereInput
  _MagicalBackRelation_CanRead_some: AccessWhereInput
  _MagicalBackRelation_CanRead_none: AccessWhereInput
}

enum AccessConditionOrderByInput {
  organisationId_ASC
  organisationId_DESC
  roleId_ASC
  roleId_DESC
  userId_ASC
  userId_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

enum DataType {
  Id
  Boolean
  Float
  Int
  String
  Date
  Object
}

input ValidatorWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ValidatorWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ValidatorWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [ValidatorWhereInput!]
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
  _MagicalBackRelation_FormToValidator_every: FormWhereInput
  _MagicalBackRelation_FormToValidator_some: FormWhereInput
  _MagicalBackRelation_FormToValidator_none: FormWhereInput
  _MagicalBackRelation_DataDescriptorToValidator_every: DataDescriptorWhereInput
  _MagicalBackRelation_DataDescriptorToValidator_some: DataDescriptorWhereInput
  _MagicalBackRelation_DataDescriptorToValidator_none: DataDescriptorWhereInput
}

input FormElementWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [FormElementWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [FormElementWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [FormElementWhereInput!]
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
  row: Int
  """
  All values that are not equal to given value.
  """
  row_not: Int
  """
  All values that are contained in given list.
  """
  row_in: [Int!]
  """
  All values that are not contained in given list.
  """
  row_not_in: [Int!]
  """
  All values less than the given value.
  """
  row_lt: Int
  """
  All values less than or equal the given value.
  """
  row_lte: Int
  """
  All values greater than the given value.
  """
  row_gt: Int
  """
  All values greater than or equal the given value.
  """
  row_gte: Int
  column: Int
  """
  All values that are not equal to given value.
  """
  column_not: Int
  """
  All values that are contained in given list.
  """
  column_in: [Int!]
  """
  All values that are not contained in given list.
  """
  column_not_in: [Int!]
  """
  All values less than the given value.
  """
  column_lt: Int
  """
  All values less than or equal the given value.
  """
  column_lte: Int
  """
  All values greater than the given value.
  """
  column_gt: Int
  """
  All values greater than or equal the given value.
  """
  column_gte: Int
  width: Int
  """
  All values that are not equal to given value.
  """
  width_not: Int
  """
  All values that are contained in given list.
  """
  width_in: [Int!]
  """
  All values that are not contained in given list.
  """
  width_not_in: [Int!]
  """
  All values less than the given value.
  """
  width_lt: Int
  """
  All values less than or equal the given value.
  """
  width_lte: Int
  """
  All values greater than the given value.
  """
  width_gt: Int
  """
  All values greater than or equal the given value.
  """
  width_gte: Int
  label: String
  """
  All values that are not equal to given value.
  """
  label_not: String
  """
  All values that are contained in given list.
  """
  label_in: [String!]
  """
  All values that are not contained in given list.
  """
  label_not_in: [String!]
  """
  All values less than the given value.
  """
  label_lt: String
  """
  All values less than or equal the given value.
  """
  label_lte: String
  """
  All values greater than the given value.
  """
  label_gt: String
  """
  All values greater than or equal the given value.
  """
  label_gte: String
  """
  All values containing the given string.
  """
  label_contains: String
  """
  All values not containing the given string.
  """
  label_not_contains: String
  """
  All values starting with the given string.
  """
  label_starts_with: String
  """
  All values not starting with the given string.
  """
  label_not_starts_with: String
  """
  All values ending with the given string.
  """
  label_ends_with: String
  """
  All values not ending with the given string.
  """
  label_not_ends_with: String
  inline: Boolean
  """
  All values that are not equal to given value.
  """
  inline_not: Boolean
  defaultValue: String
  """
  All values that are not equal to given value.
  """
  defaultValue_not: String
  """
  All values that are contained in given list.
  """
  defaultValue_in: [String!]
  """
  All values that are not contained in given list.
  """
  defaultValue_not_in: [String!]
  """
  All values less than the given value.
  """
  defaultValue_lt: String
  """
  All values less than or equal the given value.
  """
  defaultValue_lte: String
  """
  All values greater than the given value.
  """
  defaultValue_gt: String
  """
  All values greater than or equal the given value.
  """
  defaultValue_gte: String
  """
  All values containing the given string.
  """
  defaultValue_contains: String
  """
  All values not containing the given string.
  """
  defaultValue_not_contains: String
  """
  All values starting with the given string.
  """
  defaultValue_starts_with: String
  """
  All values not starting with the given string.
  """
  defaultValue_not_starts_with: String
  """
  All values ending with the given string.
  """
  defaultValue_ends_with: String
  """
  All values not ending with the given string.
  """
  defaultValue_not_ends_with: String
  list: String
  """
  All values that are not equal to given value.
  """
  list_not: String
  """
  All values that are contained in given list.
  """
  list_in: [String!]
  """
  All values that are not contained in given list.
  """
  list_not_in: [String!]
  """
  All values less than the given value.
  """
  list_lt: String
  """
  All values less than or equal the given value.
  """
  list_lte: String
  """
  All values greater than the given value.
  """
  list_gt: String
  """
  All values greater than or equal the given value.
  """
  list_gte: String
  """
  All values containing the given string.
  """
  list_contains: String
  """
  All values not containing the given string.
  """
  list_not_contains: String
  """
  All values starting with the given string.
  """
  list_starts_with: String
  """
  All values not starting with the given string.
  """
  list_not_starts_with: String
  """
  All values ending with the given string.
  """
  list_ends_with: String
  """
  All values not ending with the given string.
  """
  list_not_ends_with: String
  filterSource: String
  """
  All values that are not equal to given value.
  """
  filterSource_not: String
  """
  All values that are contained in given list.
  """
  filterSource_in: [String!]
  """
  All values that are not contained in given list.
  """
  filterSource_not_in: [String!]
  """
  All values less than the given value.
  """
  filterSource_lt: String
  """
  All values less than or equal the given value.
  """
  filterSource_lte: String
  """
  All values greater than the given value.
  """
  filterSource_gt: String
  """
  All values greater than or equal the given value.
  """
  filterSource_gte: String
  """
  All values containing the given string.
  """
  filterSource_contains: String
  """
  All values not containing the given string.
  """
  filterSource_not_contains: String
  """
  All values starting with the given string.
  """
  filterSource_starts_with: String
  """
  All values not starting with the given string.
  """
  filterSource_not_starts_with: String
  """
  All values ending with the given string.
  """
  filterSource_ends_with: String
  """
  All values not ending with the given string.
  """
  filterSource_not_ends_with: String
  filterColumn: String
  """
  All values that are not equal to given value.
  """
  filterColumn_not: String
  """
  All values that are contained in given list.
  """
  filterColumn_in: [String!]
  """
  All values that are not contained in given list.
  """
  filterColumn_not_in: [String!]
  """
  All values less than the given value.
  """
  filterColumn_lt: String
  """
  All values less than or equal the given value.
  """
  filterColumn_lte: String
  """
  All values greater than the given value.
  """
  filterColumn_gt: String
  """
  All values greater than or equal the given value.
  """
  filterColumn_gte: String
  """
  All values containing the given string.
  """
  filterColumn_contains: String
  """
  All values not containing the given string.
  """
  filterColumn_not_contains: String
  """
  All values starting with the given string.
  """
  filterColumn_starts_with: String
  """
  All values not starting with the given string.
  """
  filterColumn_not_starts_with: String
  """
  All values ending with the given string.
  """
  filterColumn_ends_with: String
  """
  All values not ending with the given string.
  """
  filterColumn_not_ends_with: String
  control: FormControl
  """
  All values that are not equal to given value.
  """
  control_not: FormControl
  """
  All values that are contained in given list.
  """
  control_in: [FormControl!]
  """
  All values that are not contained in given list.
  """
  control_not_in: [FormControl!]
  vertical: Boolean
  """
  All values that are not equal to given value.
  """
  vertical_not: Boolean
  source: DataDescriptorWhereInput
  elements_every: FormElementWhereInput
  elements_some: FormElementWhereInput
  elements_none: FormElementWhereInput
  _MagicalBackRelation_FormToFormElement_every: FormWhereInput
  _MagicalBackRelation_FormToFormElement_some: FormWhereInput
  _MagicalBackRelation_FormToFormElement_none: FormWhereInput
  _MagicalBackRelation_FormElementToFormElement_every: FormElementWhereInput
  _MagicalBackRelation_FormElementToFormElement_some: FormElementWhereInput
  _MagicalBackRelation_FormElementToFormElement_none: FormElementWhereInput
}

enum ResourceType {
  Url
  File
  Form
  Report
}

input FormWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [FormWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [FormWhereInput!]
  """
  Logical NOT on all given filters combined by AND.
  """
  NOT: [FormWhereInput!]
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
  elements_every: FormElementWhereInput
  elements_some: FormElementWhereInput
  elements_none: FormElementWhereInput
  validations_every: ValidatorWhereInput
  validations_some: ValidatorWhereInput
  validations_none: ValidatorWhereInput
  _MagicalBackRelation_FormToResource_every: ResourceWhereInput
  _MagicalBackRelation_FormToResource_some: ResourceWhereInput
  _MagicalBackRelation_FormToResource_none: ResourceWhereInput
}

enum FormElementOrderByInput {
  id_ASC
  id_DESC
  row_ASC
  row_DESC
  column_ASC
  column_DESC
  width_ASC
  width_DESC
  label_ASC
  label_DESC
  inline_ASC
  inline_DESC
  defaultValue_ASC
  defaultValue_DESC
  list_ASC
  list_DESC
  filterSource_ASC
  filterSource_DESC
  filterColumn_ASC
  filterColumn_DESC
  control_ASC
  control_DESC
  controlProps_ASC
  controlProps_DESC
  vertical_ASC
  vertical_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

enum ValidatorOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

enum FormControl {
  Input
  Select
  Checkbox
  Radio
  Textarea
  Repeater
  Table
  DeleteButton
}
`