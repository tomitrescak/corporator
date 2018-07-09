import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    localisations: <T = Localisation[]>(args: { where?: LocalisationWhereInput, orderBy?: LocalisationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notifications: <T = Notification[]>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnProcessInstances: <T = BpmnProcessInstance[]>(args: { where?: BpmnProcessInstanceWhereInput, orderBy?: BpmnProcessInstanceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    localisation: <T = Localisation | null>(args: { where: LocalisationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnProcessInstance: <T = BpmnProcessInstance | null>(args: { where: BpmnProcessInstanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    localisationsConnection: <T = LocalisationConnection>(args: { where?: LocalisationWhereInput, orderBy?: LocalisationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notificationsConnection: <T = NotificationConnection>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnProcessInstancesConnection: <T = BpmnProcessInstanceConnection>(args: { where?: BpmnProcessInstanceWhereInput, orderBy?: BpmnProcessInstanceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLocalisation: <T = Localisation>(args: { data: LocalisationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNotification: <T = Notification>(args: { data: NotificationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBpmnProcessInstance: <T = BpmnProcessInstance>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLocalisation: <T = Localisation | null>(args: { data: LocalisationUpdateInput, where: LocalisationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateNotification: <T = Notification | null>(args: { data: NotificationUpdateInput, where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLocalisation: <T = Localisation | null>(args: { where: LocalisationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteNotification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteBpmnProcessInstance: <T = BpmnProcessInstance | null>(args: { where: BpmnProcessInstanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLocalisation: <T = Localisation>(args: { where: LocalisationWhereUniqueInput, create: LocalisationCreateInput, update: LocalisationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNotification: <T = Notification>(args: { where: NotificationWhereUniqueInput, create: NotificationCreateInput, update: NotificationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLocalisations: <T = BatchPayload>(args: { data: LocalisationUpdateInput, where?: LocalisationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNotifications: <T = BatchPayload>(args: { data: NotificationUpdateInput, where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLocalisations: <T = BatchPayload>(args: { where?: LocalisationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNotifications: <T = BatchPayload>(args: { where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBpmnProcessInstances: <T = BatchPayload>(args: { where?: BpmnProcessInstanceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    localisation: <T = LocalisationSubscriptionPayload | null>(args: { where?: LocalisationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    notification: <T = NotificationSubscriptionPayload | null>(args: { where?: NotificationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    bpmnProcessInstance: <T = BpmnProcessInstanceSubscriptionPayload | null>(args: { where?: BpmnProcessInstanceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Localisation: (where?: LocalisationWhereInput) => Promise<boolean>
  Notification: (where?: NotificationWhereInput) => Promise<boolean>
  BpmnProcessInstance: (where?: BpmnProcessInstanceWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateBpmnProcessInstance {
  count: Int!
}

type AggregateLocalisation {
  count: Int!
}

type AggregateNotification {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type BpmnProcessInstance implements Node {
  id: ID!
}

"""A connection to a list of items."""
type BpmnProcessInstanceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BpmnProcessInstanceEdge]!
  aggregate: AggregateBpmnProcessInstance!
}

input BpmnProcessInstanceCreateOneInput {
  connect: BpmnProcessInstanceWhereUniqueInput
}

"""An edge in a connection."""
type BpmnProcessInstanceEdge {
  """The item at the end of the edge."""
  node: BpmnProcessInstance!

  """A cursor for use in pagination."""
  cursor: String!
}

enum BpmnProcessInstanceOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type BpmnProcessInstancePreviousValues {
  id: ID!
}

type BpmnProcessInstanceSubscriptionPayload {
  mutation: MutationType!
  node: BpmnProcessInstance
  updatedFields: [String!]
  previousValues: BpmnProcessInstancePreviousValues
}

input BpmnProcessInstanceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BpmnProcessInstanceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BpmnProcessInstanceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BpmnProcessInstanceSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: BpmnProcessInstanceWhereInput
}

input BpmnProcessInstanceUpdateOneInput {
  connect: BpmnProcessInstanceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
}

input BpmnProcessInstanceWhereInput {
  """Logical AND on all given filters."""
  AND: [BpmnProcessInstanceWhereInput!]

  """Logical OR on all given filters."""
  OR: [BpmnProcessInstanceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BpmnProcessInstanceWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
}

input BpmnProcessInstanceWhereUniqueInput {
  id: ID
}

scalar DateTime

enum LanguageCode {
  EN
}

type Localisation implements Node {
  id: ID!
  text: String!
  language: LanguageCode!
}

"""A connection to a list of items."""
type LocalisationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LocalisationEdge]!
  aggregate: AggregateLocalisation!
}

input LocalisationCreateInput {
  text: String!
  language: LanguageCode!
}

input LocalisationCreateOneInput {
  create: LocalisationCreateInput
  connect: LocalisationWhereUniqueInput
}

"""An edge in a connection."""
type LocalisationEdge {
  """The item at the end of the edge."""
  node: Localisation!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LocalisationOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  language_ASC
  language_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type LocalisationPreviousValues {
  id: ID!
  text: String!
  language: LanguageCode!
}

type LocalisationSubscriptionPayload {
  mutation: MutationType!
  node: Localisation
  updatedFields: [String!]
  previousValues: LocalisationPreviousValues
}

input LocalisationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LocalisationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LocalisationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LocalisationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LocalisationWhereInput
}

input LocalisationUpdateDataInput {
  text: String
  language: LanguageCode
}

input LocalisationUpdateInput {
  text: String
  language: LanguageCode
}

input LocalisationUpdateOneInput {
  create: LocalisationCreateInput
  connect: LocalisationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: LocalisationUpdateDataInput
  upsert: LocalisationUpsertNestedInput
}

input LocalisationUpsertNestedInput {
  update: LocalisationUpdateDataInput!
  create: LocalisationCreateInput!
}

input LocalisationWhereInput {
  """Logical AND on all given filters."""
  AND: [LocalisationWhereInput!]

  """Logical OR on all given filters."""
  OR: [LocalisationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LocalisationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  text: String

  """All values that are not equal to given value."""
  text_not: String

  """All values that are contained in given list."""
  text_in: [String!]

  """All values that are not contained in given list."""
  text_not_in: [String!]

  """All values less than the given value."""
  text_lt: String

  """All values less than or equal the given value."""
  text_lte: String

  """All values greater than the given value."""
  text_gt: String

  """All values greater than or equal the given value."""
  text_gte: String

  """All values containing the given string."""
  text_contains: String

  """All values not containing the given string."""
  text_not_contains: String

  """All values starting with the given string."""
  text_starts_with: String

  """All values not starting with the given string."""
  text_not_starts_with: String

  """All values ending with the given string."""
  text_ends_with: String

  """All values not ending with the given string."""
  text_not_ends_with: String
  language: LanguageCode

  """All values that are not equal to given value."""
  language_not: LanguageCode

  """All values that are contained in given list."""
  language_in: [LanguageCode!]

  """All values that are not contained in given list."""
  language_not_in: [LanguageCode!]
}

input LocalisationWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createLocalisation(data: LocalisationCreateInput!): Localisation!
  createNotification(data: NotificationCreateInput!): Notification!
  createBpmnProcessInstance: BpmnProcessInstance!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateLocalisation(data: LocalisationUpdateInput!, where: LocalisationWhereUniqueInput!): Localisation
  updateNotification(data: NotificationUpdateInput!, where: NotificationWhereUniqueInput!): Notification
  deleteUser(where: UserWhereUniqueInput!): User
  deleteLocalisation(where: LocalisationWhereUniqueInput!): Localisation
  deleteNotification(where: NotificationWhereUniqueInput!): Notification
  deleteBpmnProcessInstance(where: BpmnProcessInstanceWhereUniqueInput!): BpmnProcessInstance
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertLocalisation(where: LocalisationWhereUniqueInput!, create: LocalisationCreateInput!, update: LocalisationUpdateInput!): Localisation!
  upsertNotification(where: NotificationWhereUniqueInput!, create: NotificationCreateInput!, update: NotificationUpdateInput!): Notification!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyLocalisations(data: LocalisationUpdateInput!, where: LocalisationWhereInput): BatchPayload!
  updateManyNotifications(data: NotificationUpdateInput!, where: NotificationWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyLocalisations(where: LocalisationWhereInput): BatchPayload!
  deleteManyNotifications(where: NotificationWhereInput): BatchPayload!
  deleteManyBpmnProcessInstances(where: BpmnProcessInstanceWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

type Notification implements Node {
  id: ID!
  processInstance(where: BpmnProcessInstanceWhereInput): BpmnProcessInstance
  owner(where: UserWhereInput): User!
  code: NotificationCode
  text(where: LocalisationWhereInput): Localisation
  params: [String!]
  date: DateTime
  visible: Boolean
}

enum NotificationCode {
  ServiceStarted
}

"""A connection to a list of items."""
type NotificationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NotificationEdge]!
  aggregate: AggregateNotification!
}

input NotificationCreateInput {
  code: NotificationCode
  date: DateTime
  visible: Boolean
  params: NotificationCreateparamsInput
  processInstance: BpmnProcessInstanceCreateOneInput
  owner: UserCreateOneInput!
  text: LocalisationCreateOneInput
}

input NotificationCreateparamsInput {
  set: [String!]
}

"""An edge in a connection."""
type NotificationEdge {
  """The item at the end of the edge."""
  node: Notification!

  """A cursor for use in pagination."""
  cursor: String!
}

enum NotificationOrderByInput {
  id_ASC
  id_DESC
  code_ASC
  code_DESC
  date_ASC
  date_DESC
  visible_ASC
  visible_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type NotificationPreviousValues {
  id: ID!
  code: NotificationCode
  params: [String!]
  date: DateTime
  visible: Boolean
}

type NotificationSubscriptionPayload {
  mutation: MutationType!
  node: Notification
  updatedFields: [String!]
  previousValues: NotificationPreviousValues
}

input NotificationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [NotificationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [NotificationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NotificationSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: NotificationWhereInput
}

input NotificationUpdateInput {
  code: NotificationCode
  date: DateTime
  visible: Boolean
  params: NotificationUpdateparamsInput
  processInstance: BpmnProcessInstanceUpdateOneInput
  owner: UserUpdateOneInput
  text: LocalisationUpdateOneInput
}

input NotificationUpdateparamsInput {
  set: [String!]
}

input NotificationWhereInput {
  """Logical AND on all given filters."""
  AND: [NotificationWhereInput!]

  """Logical OR on all given filters."""
  OR: [NotificationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NotificationWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  code: NotificationCode

  """All values that are not equal to given value."""
  code_not: NotificationCode

  """All values that are contained in given list."""
  code_in: [NotificationCode!]

  """All values that are not contained in given list."""
  code_not_in: [NotificationCode!]
  date: DateTime

  """All values that are not equal to given value."""
  date_not: DateTime

  """All values that are contained in given list."""
  date_in: [DateTime!]

  """All values that are not contained in given list."""
  date_not_in: [DateTime!]

  """All values less than the given value."""
  date_lt: DateTime

  """All values less than or equal the given value."""
  date_lte: DateTime

  """All values greater than the given value."""
  date_gt: DateTime

  """All values greater than or equal the given value."""
  date_gte: DateTime
  visible: Boolean

  """All values that are not equal to given value."""
  visible_not: Boolean
  processInstance: BpmnProcessInstanceWhereInput
  owner: UserWhereInput
  text: LocalisationWhereInput
}

input NotificationWhereUniqueInput {
  id: ID
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  localisations(where: LocalisationWhereInput, orderBy: LocalisationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Localisation]!
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification]!
  bpmnProcessInstances(where: BpmnProcessInstanceWhereInput, orderBy: BpmnProcessInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BpmnProcessInstance]!
  user(where: UserWhereUniqueInput!): User
  localisation(where: LocalisationWhereUniqueInput!): Localisation
  notification(where: NotificationWhereUniqueInput!): Notification
  bpmnProcessInstance(where: BpmnProcessInstanceWhereUniqueInput!): BpmnProcessInstance
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  localisationsConnection(where: LocalisationWhereInput, orderBy: LocalisationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocalisationConnection!
  notificationsConnection(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NotificationConnection!
  bpmnProcessInstancesConnection(where: BpmnProcessInstanceWhereInput, orderBy: BpmnProcessInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BpmnProcessInstanceConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  localisation(where: LocalisationSubscriptionWhereInput): LocalisationSubscriptionPayload
  notification(where: NotificationSubscriptionWhereInput): NotificationSubscriptionPayload
  bpmnProcessInstance(where: BpmnProcessInstanceSubscriptionWhereInput): BpmnProcessInstanceSubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
  roles: [String!]
  describe: String!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  describe: String!
  roles: UserCreaterolesInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreaterolesInput {
  set: [String!]
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  describe_ASC
  describe_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  roles: [String!]
  describe: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  name: String
  describe: String
  roles: UserUpdaterolesInput
}

input UserUpdateInput {
  name: String
  describe: String
  roles: UserUpdaterolesInput
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdaterolesInput {
  set: [String!]
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  describe: String

  """All values that are not equal to given value."""
  describe_not: String

  """All values that are contained in given list."""
  describe_in: [String!]

  """All values that are not contained in given list."""
  describe_not_in: [String!]

  """All values less than the given value."""
  describe_lt: String

  """All values less than or equal the given value."""
  describe_lte: String

  """All values greater than the given value."""
  describe_gt: String

  """All values greater than or equal the given value."""
  describe_gte: String

  """All values containing the given string."""
  describe_contains: String

  """All values not containing the given string."""
  describe_not_contains: String

  """All values starting with the given string."""
  describe_starts_with: String

  """All values not starting with the given string."""
  describe_not_starts_with: String

  """All values ending with the given string."""
  describe_ends_with: String

  """All values not ending with the given string."""
  describe_not_ends_with: String
}

input UserWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type LocalisationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'text_ASC' |
  'text_DESC' |
  'language_ASC' |
  'language_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type LanguageCode =   'EN'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type NotificationCode =   'ServiceStarted'

export type NotificationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'code_ASC' |
  'code_DESC' |
  'date_ASC' |
  'date_DESC' |
  'visible_ASC' |
  'visible_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BpmnProcessInstanceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'describe_ASC' |
  'describe_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface LocalisationWhereUniqueInput {
  id?: ID_Input
}

export interface NotificationCreateInput {
  code?: NotificationCode
  date?: DateTime
  visible?: Boolean
  params?: NotificationCreateparamsInput
  processInstance?: BpmnProcessInstanceCreateOneInput
  owner: UserCreateOneInput
  text?: LocalisationCreateOneInput
}

export interface UserUpdateDataInput {
  name?: String
  describe?: String
  roles?: UserUpdaterolesInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  describe?: String
  describe_not?: String
  describe_in?: String[] | String
  describe_not_in?: String[] | String
  describe_lt?: String
  describe_lte?: String
  describe_gt?: String
  describe_gte?: String
  describe_contains?: String
  describe_not_contains?: String
  describe_starts_with?: String
  describe_not_starts_with?: String
  describe_ends_with?: String
  describe_not_ends_with?: String
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface LocalisationWhereInput {
  AND?: LocalisationWhereInput[] | LocalisationWhereInput
  OR?: LocalisationWhereInput[] | LocalisationWhereInput
  NOT?: LocalisationWhereInput[] | LocalisationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  language?: LanguageCode
  language_not?: LanguageCode
  language_in?: LanguageCode[] | LanguageCode
  language_not_in?: LanguageCode[] | LanguageCode
}

export interface BpmnProcessInstanceUpdateOneInput {
  connect?: BpmnProcessInstanceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
}

export interface LocalisationUpsertNestedInput {
  update: LocalisationUpdateDataInput
  create: LocalisationCreateInput
}

export interface NotificationUpdateparamsInput {
  set?: String[] | String
}

export interface LocalisationSubscriptionWhereInput {
  AND?: LocalisationSubscriptionWhereInput[] | LocalisationSubscriptionWhereInput
  OR?: LocalisationSubscriptionWhereInput[] | LocalisationSubscriptionWhereInput
  NOT?: LocalisationSubscriptionWhereInput[] | LocalisationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LocalisationWhereInput
}

export interface NotificationUpdateInput {
  code?: NotificationCode
  date?: DateTime
  visible?: Boolean
  params?: NotificationUpdateparamsInput
  processInstance?: BpmnProcessInstanceUpdateOneInput
  owner?: UserUpdateOneInput
  text?: LocalisationUpdateOneInput
}

export interface LocalisationUpdateOneInput {
  create?: LocalisationCreateInput
  connect?: LocalisationWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: LocalisationUpdateDataInput
  upsert?: LocalisationUpsertNestedInput
}

export interface LocalisationUpdateInput {
  text?: String
  language?: LanguageCode
}

export interface UserWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdaterolesInput {
  set?: String[] | String
}

export interface NotificationWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateInput {
  name?: String
  describe?: String
  roles?: UserUpdaterolesInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface LocalisationCreateOneInput {
  create?: LocalisationCreateInput
  connect?: LocalisationWhereUniqueInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface LocalisationUpdateDataInput {
  text?: String
  language?: LanguageCode
}

export interface BpmnProcessInstanceCreateOneInput {
  connect?: BpmnProcessInstanceWhereUniqueInput
}

export interface BpmnProcessInstanceSubscriptionWhereInput {
  AND?: BpmnProcessInstanceSubscriptionWhereInput[] | BpmnProcessInstanceSubscriptionWhereInput
  OR?: BpmnProcessInstanceSubscriptionWhereInput[] | BpmnProcessInstanceSubscriptionWhereInput
  NOT?: BpmnProcessInstanceSubscriptionWhereInput[] | BpmnProcessInstanceSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BpmnProcessInstanceWhereInput
}

export interface LocalisationCreateInput {
  text: String
  language: LanguageCode
}

export interface UserCreaterolesInput {
  set?: String[] | String
}

export interface UserCreateInput {
  name: String
  describe: String
  roles?: UserCreaterolesInput
}

export interface NotificationCreateparamsInput {
  set?: String[] | String
}

export interface BpmnProcessInstanceWhereUniqueInput {
  id?: ID_Input
}

export interface NotificationSubscriptionWhereInput {
  AND?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput
  OR?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput
  NOT?: NotificationSubscriptionWhereInput[] | NotificationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: NotificationWhereInput
}

export interface BpmnProcessInstanceWhereInput {
  AND?: BpmnProcessInstanceWhereInput[] | BpmnProcessInstanceWhereInput
  OR?: BpmnProcessInstanceWhereInput[] | BpmnProcessInstanceWhereInput
  NOT?: BpmnProcessInstanceWhereInput[] | BpmnProcessInstanceWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
}

export interface NotificationWhereInput {
  AND?: NotificationWhereInput[] | NotificationWhereInput
  OR?: NotificationWhereInput[] | NotificationWhereInput
  NOT?: NotificationWhereInput[] | NotificationWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  code?: NotificationCode
  code_not?: NotificationCode
  code_in?: NotificationCode[] | NotificationCode
  code_not_in?: NotificationCode[] | NotificationCode
  date?: DateTime
  date_not?: DateTime
  date_in?: DateTime[] | DateTime
  date_not_in?: DateTime[] | DateTime
  date_lt?: DateTime
  date_lte?: DateTime
  date_gt?: DateTime
  date_gte?: DateTime
  visible?: Boolean
  visible_not?: Boolean
  processInstance?: BpmnProcessInstanceWhereInput
  owner?: UserWhereInput
  text?: LocalisationWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateBpmnProcessInstance {
  count: Int
}

export interface BpmnProcessInstance extends Node {
  id: ID_Output
}

export interface NotificationSubscriptionPayload {
  mutation: MutationType
  node?: Notification
  updatedFields?: String[]
  previousValues?: NotificationPreviousValues
}

export interface Notification extends Node {
  id: ID_Output
  processInstance?: BpmnProcessInstance
  owner: User
  code?: NotificationCode
  text?: Localisation
  params?: String[]
  date?: DateTime
  visible?: Boolean
}

export interface BpmnProcessInstancePreviousValues {
  id: ID_Output
}

/*
 * An edge in a connection.

 */
export interface BpmnProcessInstanceEdge {
  node: BpmnProcessInstance
  cursor: String
}

export interface AggregateNotification {
  count: Int
}

export interface BatchPayload {
  count: Long
}

/*
 * A connection to a list of items.

 */
export interface NotificationConnection {
  pageInfo: PageInfo
  edges: NotificationEdge[]
  aggregate: AggregateNotification
}

export interface BpmnProcessInstanceSubscriptionPayload {
  mutation: MutationType
  node?: BpmnProcessInstance
  updatedFields?: String[]
  previousValues?: BpmnProcessInstancePreviousValues
}

/*
 * An edge in a connection.

 */
export interface LocalisationEdge {
  node: Localisation
  cursor: String
}

export interface NotificationPreviousValues {
  id: ID_Output
  code?: NotificationCode
  params?: String[]
  date?: DateTime
  visible?: Boolean
}

export interface AggregateUser {
  count: Int
}

export interface Localisation extends Node {
  id: ID_Output
  text: String
  language: LanguageCode
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface BpmnProcessInstanceConnection {
  pageInfo: PageInfo
  edges: BpmnProcessInstanceEdge[]
  aggregate: AggregateBpmnProcessInstance
}

export interface AggregateLocalisation {
  count: Int
}

export interface LocalisationPreviousValues {
  id: ID_Output
  text: String
  language: LanguageCode
}

export interface LocalisationSubscriptionPayload {
  mutation: MutationType
  node?: Localisation
  updatedFields?: String[]
  previousValues?: LocalisationPreviousValues
}

export interface User extends Node {
  id: ID_Output
  name: String
  roles?: String[]
  describe: String
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  roles?: String[]
  describe: String
}

/*
 * A connection to a list of items.

 */
export interface LocalisationConnection {
  pageInfo: PageInfo
  edges: LocalisationEdge[]
  aggregate: AggregateLocalisation
}

/*
 * An edge in a connection.

 */
export interface NotificationEdge {
  node: Notification
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = Date | string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number