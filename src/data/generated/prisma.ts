import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    organisations: <T = Organisation[]>(args: { where?: OrganisationWhereInput, orderBy?: OrganisationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    roles: <T = Role[]>(args: { where?: RoleWhereInput, orderBy?: RoleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    localisations: <T = Localisation[]>(args: { where?: LocalisationWhereInput, orderBy?: LocalisationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    forms: <T = Form[]>(args: { where?: FormWhereInput, orderBy?: FormOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    accesses: <T = Access[]>(args: { where?: AccessWhereInput, orderBy?: AccessOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnProcessInstances: <T = BpmnProcessInstance[]>(args: { where?: BpmnProcessInstanceWhereInput, orderBy?: BpmnProcessInstanceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notifications: <T = Notification[]>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    dataDescriptors: <T = DataDescriptor[]>(args: { where?: DataDescriptorWhereInput, orderBy?: DataDescriptorOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    resources: <T = Resource[]>(args: { where?: ResourceWhereInput, orderBy?: ResourceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnProcesses: <T = BpmnProcess[]>(args: { where?: BpmnProcessWhereInput, orderBy?: BpmnProcessOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    accessConditions: <T = AccessCondition[]>(args: { where?: AccessConditionWhereInput, orderBy?: AccessConditionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    organisation: <T = Organisation | null>(args: { where: OrganisationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    role: <T = Role | null>(args: { where: RoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    localisation: <T = Localisation | null>(args: { where: LocalisationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    form: <T = Form | null>(args: { where: FormWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    access: <T = Access | null>(args: { where: AccessWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnProcessInstance: <T = BpmnProcessInstance | null>(args: { where: BpmnProcessInstanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    dataDescriptor: <T = DataDescriptor | null>(args: { where: DataDescriptorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    resource: <T = Resource | null>(args: { where: ResourceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnProcess: <T = BpmnProcess | null>(args: { where: BpmnProcessWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    organisationsConnection: <T = OrganisationConnection>(args: { where?: OrganisationWhereInput, orderBy?: OrganisationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    rolesConnection: <T = RoleConnection>(args: { where?: RoleWhereInput, orderBy?: RoleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    localisationsConnection: <T = LocalisationConnection>(args: { where?: LocalisationWhereInput, orderBy?: LocalisationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    formsConnection: <T = FormConnection>(args: { where?: FormWhereInput, orderBy?: FormOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    accessesConnection: <T = AccessConnection>(args: { where?: AccessWhereInput, orderBy?: AccessOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnProcessInstancesConnection: <T = BpmnProcessInstanceConnection>(args: { where?: BpmnProcessInstanceWhereInput, orderBy?: BpmnProcessInstanceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notificationsConnection: <T = NotificationConnection>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    dataDescriptorsConnection: <T = DataDescriptorConnection>(args: { where?: DataDescriptorWhereInput, orderBy?: DataDescriptorOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    resourcesConnection: <T = ResourceConnection>(args: { where?: ResourceWhereInput, orderBy?: ResourceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnProcessesConnection: <T = BpmnProcessConnection>(args: { where?: BpmnProcessWhereInput, orderBy?: BpmnProcessOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    accessConditionsConnection: <T = AccessConditionConnection>(args: { where?: AccessConditionWhereInput, orderBy?: AccessConditionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createOrganisation: <T = Organisation>(args: { data: OrganisationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRole: <T = Role>(args: { data: RoleCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLocalisation: <T = Localisation>(args: { data: LocalisationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createForm: <T = Form>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAccess: <T = Access>(args: { data: AccessCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBpmnProcessInstance: <T = BpmnProcessInstance>(args: { data: BpmnProcessInstanceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNotification: <T = Notification>(args: { data: NotificationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createDataDescriptor: <T = DataDescriptor>(args?: {}, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createResource: <T = Resource>(args: { data: ResourceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBpmnProcess: <T = BpmnProcess>(args: { data: BpmnProcessCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAccessCondition: <T = AccessCondition>(args: { data: AccessConditionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOrganisation: <T = Organisation | null>(args: { data: OrganisationUpdateInput, where: OrganisationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateRole: <T = Role | null>(args: { data: RoleUpdateInput, where: RoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLocalisation: <T = Localisation | null>(args: { data: LocalisationUpdateInput, where: LocalisationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAccess: <T = Access | null>(args: { data: AccessUpdateInput, where: AccessWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBpmnProcessInstance: <T = BpmnProcessInstance | null>(args: { data: BpmnProcessInstanceUpdateInput, where: BpmnProcessInstanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateNotification: <T = Notification | null>(args: { data: NotificationUpdateInput, where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateResource: <T = Resource | null>(args: { data: ResourceUpdateInput, where: ResourceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBpmnProcess: <T = BpmnProcess | null>(args: { data: BpmnProcessUpdateInput, where: BpmnProcessWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteOrganisation: <T = Organisation | null>(args: { where: OrganisationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteRole: <T = Role | null>(args: { where: RoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLocalisation: <T = Localisation | null>(args: { where: LocalisationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteForm: <T = Form | null>(args: { where: FormWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAccess: <T = Access | null>(args: { where: AccessWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteBpmnProcessInstance: <T = BpmnProcessInstance | null>(args: { where: BpmnProcessInstanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteNotification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteDataDescriptor: <T = DataDescriptor | null>(args: { where: DataDescriptorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteResource: <T = Resource | null>(args: { where: ResourceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteBpmnProcess: <T = BpmnProcess | null>(args: { where: BpmnProcessWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertOrganisation: <T = Organisation>(args: { where: OrganisationWhereUniqueInput, create: OrganisationCreateInput, update: OrganisationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRole: <T = Role>(args: { where: RoleWhereUniqueInput, create: RoleCreateInput, update: RoleUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLocalisation: <T = Localisation>(args: { where: LocalisationWhereUniqueInput, create: LocalisationCreateInput, update: LocalisationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAccess: <T = Access>(args: { where: AccessWhereUniqueInput, create: AccessCreateInput, update: AccessUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBpmnProcessInstance: <T = BpmnProcessInstance>(args: { where: BpmnProcessInstanceWhereUniqueInput, create: BpmnProcessInstanceCreateInput, update: BpmnProcessInstanceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNotification: <T = Notification>(args: { where: NotificationWhereUniqueInput, create: NotificationCreateInput, update: NotificationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertResource: <T = Resource>(args: { where: ResourceWhereUniqueInput, create: ResourceCreateInput, update: ResourceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBpmnProcess: <T = BpmnProcess>(args: { where: BpmnProcessWhereUniqueInput, create: BpmnProcessCreateInput, update: BpmnProcessUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyOrganisations: <T = BatchPayload>(args: { data: OrganisationUpdateInput, where?: OrganisationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRoles: <T = BatchPayload>(args: { data: RoleUpdateInput, where?: RoleWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLocalisations: <T = BatchPayload>(args: { data: LocalisationUpdateInput, where?: LocalisationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAccesses: <T = BatchPayload>(args: { data: AccessUpdateInput, where?: AccessWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBpmnProcessInstances: <T = BatchPayload>(args: { data: BpmnProcessInstanceUpdateInput, where?: BpmnProcessInstanceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNotifications: <T = BatchPayload>(args: { data: NotificationUpdateInput, where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyResources: <T = BatchPayload>(args: { data: ResourceUpdateInput, where?: ResourceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBpmnProcesses: <T = BatchPayload>(args: { data: BpmnProcessUpdateInput, where?: BpmnProcessWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAccessConditions: <T = BatchPayload>(args: { data: AccessConditionUpdateInput, where?: AccessConditionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyOrganisations: <T = BatchPayload>(args: { where?: OrganisationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRoles: <T = BatchPayload>(args: { where?: RoleWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLocalisations: <T = BatchPayload>(args: { where?: LocalisationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyForms: <T = BatchPayload>(args: { where?: FormWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAccesses: <T = BatchPayload>(args: { where?: AccessWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBpmnProcessInstances: <T = BatchPayload>(args: { where?: BpmnProcessInstanceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNotifications: <T = BatchPayload>(args: { where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyDataDescriptors: <T = BatchPayload>(args: { where?: DataDescriptorWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyResources: <T = BatchPayload>(args: { where?: ResourceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBpmnProcesses: <T = BatchPayload>(args: { where?: BpmnProcessWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAccessConditions: <T = BatchPayload>(args: { where?: AccessConditionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    organisation: <T = OrganisationSubscriptionPayload | null>(args: { where?: OrganisationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    role: <T = RoleSubscriptionPayload | null>(args: { where?: RoleSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    localisation: <T = LocalisationSubscriptionPayload | null>(args: { where?: LocalisationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    form: <T = FormSubscriptionPayload | null>(args: { where?: FormSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    access: <T = AccessSubscriptionPayload | null>(args: { where?: AccessSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    bpmnProcessInstance: <T = BpmnProcessInstanceSubscriptionPayload | null>(args: { where?: BpmnProcessInstanceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    notification: <T = NotificationSubscriptionPayload | null>(args: { where?: NotificationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    dataDescriptor: <T = DataDescriptorSubscriptionPayload | null>(args: { where?: DataDescriptorSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    resource: <T = ResourceSubscriptionPayload | null>(args: { where?: ResourceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    bpmnProcess: <T = BpmnProcessSubscriptionPayload | null>(args: { where?: BpmnProcessSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    accessCondition: <T = AccessConditionSubscriptionPayload | null>(args: { where?: AccessConditionSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Organisation: (where?: OrganisationWhereInput) => Promise<boolean>
  Role: (where?: RoleWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Localisation: (where?: LocalisationWhereInput) => Promise<boolean>
  Form: (where?: FormWhereInput) => Promise<boolean>
  Access: (where?: AccessWhereInput) => Promise<boolean>
  BpmnProcessInstance: (where?: BpmnProcessInstanceWhereInput) => Promise<boolean>
  Notification: (where?: NotificationWhereInput) => Promise<boolean>
  DataDescriptor: (where?: DataDescriptorWhereInput) => Promise<boolean>
  Resource: (where?: ResourceWhereInput) => Promise<boolean>
  BpmnProcess: (where?: BpmnProcessWhereInput) => Promise<boolean>
  AccessCondition: (where?: AccessConditionWhereInput) => Promise<boolean>
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

const typeDefs = `type Access implements Node {
  id: ID!
  createdById: ID!
  createdOn: DateTime
  modifiedById: ID
  modifiedOn: DateTime
  read(where: AccessConditionWhereInput, orderBy: AccessConditionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AccessCondition!]
  write(where: AccessConditionWhereInput, orderBy: AccessConditionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AccessCondition!]
  execute(where: AccessConditionWhereInput, orderBy: AccessConditionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AccessCondition!]
}

type AccessCondition {
  organisationId: ID
  roleId: ID
  userId: ID
}

"""A connection to a list of items."""
type AccessConditionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AccessConditionEdge]!
  aggregate: AggregateAccessCondition!
}

input AccessConditionCreateInput {
  organisationId: ID
  roleId: ID
  userId: ID
}

input AccessConditionCreateManyInput {
  create: [AccessConditionCreateInput!]
}

"""An edge in a connection."""
type AccessConditionEdge {
  """The item at the end of the edge."""
  node: AccessCondition!

  """A cursor for use in pagination."""
  cursor: String!
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

type AccessConditionPreviousValues {
  organisationId: ID
  roleId: ID
  userId: ID
}

type AccessConditionSubscriptionPayload {
  mutation: MutationType!
  node: AccessCondition
  updatedFields: [String!]
  previousValues: AccessConditionPreviousValues
}

input AccessConditionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AccessConditionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AccessConditionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AccessConditionSubscriptionWhereInput!]

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
  node: AccessConditionWhereInput
}

input AccessConditionUpdateInput {
  organisationId: ID
  roleId: ID
  userId: ID
}

input AccessConditionUpdateManyInput {
  create: [AccessConditionCreateInput!]
}

input AccessConditionWhereInput {
  """Logical AND on all given filters."""
  AND: [AccessConditionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AccessConditionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AccessConditionWhereInput!]
  organisationId: ID

  """All values that are not equal to given value."""
  organisationId_not: ID

  """All values that are contained in given list."""
  organisationId_in: [ID!]

  """All values that are not contained in given list."""
  organisationId_not_in: [ID!]

  """All values less than the given value."""
  organisationId_lt: ID

  """All values less than or equal the given value."""
  organisationId_lte: ID

  """All values greater than the given value."""
  organisationId_gt: ID

  """All values greater than or equal the given value."""
  organisationId_gte: ID

  """All values containing the given string."""
  organisationId_contains: ID

  """All values not containing the given string."""
  organisationId_not_contains: ID

  """All values starting with the given string."""
  organisationId_starts_with: ID

  """All values not starting with the given string."""
  organisationId_not_starts_with: ID

  """All values ending with the given string."""
  organisationId_ends_with: ID

  """All values not ending with the given string."""
  organisationId_not_ends_with: ID
  roleId: ID

  """All values that are not equal to given value."""
  roleId_not: ID

  """All values that are contained in given list."""
  roleId_in: [ID!]

  """All values that are not contained in given list."""
  roleId_not_in: [ID!]

  """All values less than the given value."""
  roleId_lt: ID

  """All values less than or equal the given value."""
  roleId_lte: ID

  """All values greater than the given value."""
  roleId_gt: ID

  """All values greater than or equal the given value."""
  roleId_gte: ID

  """All values containing the given string."""
  roleId_contains: ID

  """All values not containing the given string."""
  roleId_not_contains: ID

  """All values starting with the given string."""
  roleId_starts_with: ID

  """All values not starting with the given string."""
  roleId_not_starts_with: ID

  """All values ending with the given string."""
  roleId_ends_with: ID

  """All values not ending with the given string."""
  roleId_not_ends_with: ID
  userId: ID

  """All values that are not equal to given value."""
  userId_not: ID

  """All values that are contained in given list."""
  userId_in: [ID!]

  """All values that are not contained in given list."""
  userId_not_in: [ID!]

  """All values less than the given value."""
  userId_lt: ID

  """All values less than or equal the given value."""
  userId_lte: ID

  """All values greater than the given value."""
  userId_gt: ID

  """All values greater than or equal the given value."""
  userId_gte: ID

  """All values containing the given string."""
  userId_contains: ID

  """All values not containing the given string."""
  userId_not_contains: ID

  """All values starting with the given string."""
  userId_starts_with: ID

  """All values not starting with the given string."""
  userId_not_starts_with: ID

  """All values ending with the given string."""
  userId_ends_with: ID

  """All values not ending with the given string."""
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

"""A connection to a list of items."""
type AccessConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [AccessEdge]!
  aggregate: AggregateAccess!
}

input AccessCreateInput {
  createdById: ID!
  createdOn: DateTime
  modifiedById: ID
  modifiedOn: DateTime
  read: AccessConditionCreateManyInput
  write: AccessConditionCreateManyInput
  execute: AccessConditionCreateManyInput
}

input AccessCreateOneInput {
  create: AccessCreateInput
  connect: AccessWhereUniqueInput
}

"""An edge in a connection."""
type AccessEdge {
  """The item at the end of the edge."""
  node: Access!

  """A cursor for use in pagination."""
  cursor: String!
}

enum AccessOrderByInput {
  id_ASC
  id_DESC
  createdById_ASC
  createdById_DESC
  createdOn_ASC
  createdOn_DESC
  modifiedById_ASC
  modifiedById_DESC
  modifiedOn_ASC
  modifiedOn_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type AccessPreviousValues {
  id: ID!
  createdById: ID!
  createdOn: DateTime
  modifiedById: ID
  modifiedOn: DateTime
}

type AccessSubscriptionPayload {
  mutation: MutationType!
  node: Access
  updatedFields: [String!]
  previousValues: AccessPreviousValues
}

input AccessSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [AccessSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [AccessSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AccessSubscriptionWhereInput!]

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
  node: AccessWhereInput
}

input AccessUpdateDataInput {
  createdById: ID
  createdOn: DateTime
  modifiedById: ID
  modifiedOn: DateTime
  read: AccessConditionUpdateManyInput
  write: AccessConditionUpdateManyInput
  execute: AccessConditionUpdateManyInput
}

input AccessUpdateInput {
  createdById: ID
  createdOn: DateTime
  modifiedById: ID
  modifiedOn: DateTime
  read: AccessConditionUpdateManyInput
  write: AccessConditionUpdateManyInput
  execute: AccessConditionUpdateManyInput
}

input AccessUpdateOneInput {
  create: AccessCreateInput
  connect: AccessWhereUniqueInput
  delete: Boolean
  update: AccessUpdateDataInput
  upsert: AccessUpsertNestedInput
}

input AccessUpsertNestedInput {
  update: AccessUpdateDataInput!
  create: AccessCreateInput!
}

input AccessWhereInput {
  """Logical AND on all given filters."""
  AND: [AccessWhereInput!]

  """Logical OR on all given filters."""
  OR: [AccessWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [AccessWhereInput!]
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
  createdById: ID

  """All values that are not equal to given value."""
  createdById_not: ID

  """All values that are contained in given list."""
  createdById_in: [ID!]

  """All values that are not contained in given list."""
  createdById_not_in: [ID!]

  """All values less than the given value."""
  createdById_lt: ID

  """All values less than or equal the given value."""
  createdById_lte: ID

  """All values greater than the given value."""
  createdById_gt: ID

  """All values greater than or equal the given value."""
  createdById_gte: ID

  """All values containing the given string."""
  createdById_contains: ID

  """All values not containing the given string."""
  createdById_not_contains: ID

  """All values starting with the given string."""
  createdById_starts_with: ID

  """All values not starting with the given string."""
  createdById_not_starts_with: ID

  """All values ending with the given string."""
  createdById_ends_with: ID

  """All values not ending with the given string."""
  createdById_not_ends_with: ID
  createdOn: DateTime

  """All values that are not equal to given value."""
  createdOn_not: DateTime

  """All values that are contained in given list."""
  createdOn_in: [DateTime!]

  """All values that are not contained in given list."""
  createdOn_not_in: [DateTime!]

  """All values less than the given value."""
  createdOn_lt: DateTime

  """All values less than or equal the given value."""
  createdOn_lte: DateTime

  """All values greater than the given value."""
  createdOn_gt: DateTime

  """All values greater than or equal the given value."""
  createdOn_gte: DateTime
  modifiedById: ID

  """All values that are not equal to given value."""
  modifiedById_not: ID

  """All values that are contained in given list."""
  modifiedById_in: [ID!]

  """All values that are not contained in given list."""
  modifiedById_not_in: [ID!]

  """All values less than the given value."""
  modifiedById_lt: ID

  """All values less than or equal the given value."""
  modifiedById_lte: ID

  """All values greater than the given value."""
  modifiedById_gt: ID

  """All values greater than or equal the given value."""
  modifiedById_gte: ID

  """All values containing the given string."""
  modifiedById_contains: ID

  """All values not containing the given string."""
  modifiedById_not_contains: ID

  """All values starting with the given string."""
  modifiedById_starts_with: ID

  """All values not starting with the given string."""
  modifiedById_not_starts_with: ID

  """All values ending with the given string."""
  modifiedById_ends_with: ID

  """All values not ending with the given string."""
  modifiedById_not_ends_with: ID
  modifiedOn: DateTime

  """All values that are not equal to given value."""
  modifiedOn_not: DateTime

  """All values that are contained in given list."""
  modifiedOn_in: [DateTime!]

  """All values that are not contained in given list."""
  modifiedOn_not_in: [DateTime!]

  """All values less than the given value."""
  modifiedOn_lt: DateTime

  """All values less than or equal the given value."""
  modifiedOn_lte: DateTime

  """All values greater than the given value."""
  modifiedOn_gt: DateTime

  """All values greater than or equal the given value."""
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
}

input AccessWhereUniqueInput {
  id: ID
}

type AggregateAccess {
  count: Int!
}

type AggregateAccessCondition {
  count: Int!
}

type AggregateBpmnProcess {
  count: Int!
}

type AggregateBpmnProcessInstance {
  count: Int!
}

type AggregateDataDescriptor {
  count: Int!
}

type AggregateForm {
  count: Int!
}

type AggregateLocalisation {
  count: Int!
}

type AggregateNotification {
  count: Int!
}

type AggregateOrganisation {
  count: Int!
}

type AggregateResource {
  count: Int!
}

type AggregateRole {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type BpmnProcess implements Node {
  id: ID!
  name: String!
  description: String
  access(where: AccessWhereInput): Access!
  model: String!
  definition: String
  resources(where: ResourceWhereInput, orderBy: ResourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Resource!]
  data(where: DataDescriptorWhereInput, orderBy: DataDescriptorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DataDescriptor!]
  version: Int!
  status: ProcessStatus!
  actionCount: Int!
}

"""A connection to a list of items."""
type BpmnProcessConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BpmnProcessEdge]!
  aggregate: AggregateBpmnProcess!
}

input BpmnProcessCreateInput {
  name: String!
  description: String
  model: String!
  definition: String
  version: Int!
  status: ProcessStatus!
  actionCount: Int!
  access: AccessCreateOneInput!
  resources: ResourceCreateManyInput
  data: DataDescriptorCreateManyInput
}

input BpmnProcessCreateOneInput {
  create: BpmnProcessCreateInput
  connect: BpmnProcessWhereUniqueInput
}

"""An edge in a connection."""
type BpmnProcessEdge {
  """The item at the end of the edge."""
  node: BpmnProcess!

  """A cursor for use in pagination."""
  cursor: String!
}

type BpmnProcessInstance implements Node {
  id: ID!
  name: String!
  description: String
  process(where: BpmnProcessWhereInput): BpmnProcess
  resources: Json
  ownerId: ID
  status: BpmnProcessInstanceStatus
  dateStarted: DateTime
  dateFinished: DateTime
  duration: Int
}

"""A connection to a list of items."""
type BpmnProcessInstanceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BpmnProcessInstanceEdge]!
  aggregate: AggregateBpmnProcessInstance!
}

input BpmnProcessInstanceCreateInput {
  name: String!
  description: String
  resources: Json
  ownerId: ID
  status: BpmnProcessInstanceStatus
  dateStarted: DateTime
  dateFinished: DateTime
  duration: Int
  process: BpmnProcessCreateOneInput
}

input BpmnProcessInstanceCreateOneInput {
  create: BpmnProcessInstanceCreateInput
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
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  resources_ASC
  resources_DESC
  ownerId_ASC
  ownerId_DESC
  status_ASC
  status_DESC
  dateStarted_ASC
  dateStarted_DESC
  dateFinished_ASC
  dateFinished_DESC
  duration_ASC
  duration_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type BpmnProcessInstancePreviousValues {
  id: ID!
  name: String!
  description: String
  resources: Json
  ownerId: ID
  status: BpmnProcessInstanceStatus
  dateStarted: DateTime
  dateFinished: DateTime
  duration: Int
}

enum BpmnProcessInstanceStatus {
  Started
  Finished
  Aborted
  Paused
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

input BpmnProcessInstanceUpdateDataInput {
  name: String
  description: String
  resources: Json
  ownerId: ID
  status: BpmnProcessInstanceStatus
  dateStarted: DateTime
  dateFinished: DateTime
  duration: Int
  process: BpmnProcessUpdateOneInput
}

input BpmnProcessInstanceUpdateInput {
  name: String
  description: String
  resources: Json
  ownerId: ID
  status: BpmnProcessInstanceStatus
  dateStarted: DateTime
  dateFinished: DateTime
  duration: Int
  process: BpmnProcessUpdateOneInput
}

input BpmnProcessInstanceUpdateOneInput {
  create: BpmnProcessInstanceCreateInput
  connect: BpmnProcessInstanceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: BpmnProcessInstanceUpdateDataInput
  upsert: BpmnProcessInstanceUpsertNestedInput
}

input BpmnProcessInstanceUpsertNestedInput {
  update: BpmnProcessInstanceUpdateDataInput!
  create: BpmnProcessInstanceCreateInput!
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
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  ownerId: ID

  """All values that are not equal to given value."""
  ownerId_not: ID

  """All values that are contained in given list."""
  ownerId_in: [ID!]

  """All values that are not contained in given list."""
  ownerId_not_in: [ID!]

  """All values less than the given value."""
  ownerId_lt: ID

  """All values less than or equal the given value."""
  ownerId_lte: ID

  """All values greater than the given value."""
  ownerId_gt: ID

  """All values greater than or equal the given value."""
  ownerId_gte: ID

  """All values containing the given string."""
  ownerId_contains: ID

  """All values not containing the given string."""
  ownerId_not_contains: ID

  """All values starting with the given string."""
  ownerId_starts_with: ID

  """All values not starting with the given string."""
  ownerId_not_starts_with: ID

  """All values ending with the given string."""
  ownerId_ends_with: ID

  """All values not ending with the given string."""
  ownerId_not_ends_with: ID
  status: BpmnProcessInstanceStatus

  """All values that are not equal to given value."""
  status_not: BpmnProcessInstanceStatus

  """All values that are contained in given list."""
  status_in: [BpmnProcessInstanceStatus!]

  """All values that are not contained in given list."""
  status_not_in: [BpmnProcessInstanceStatus!]
  dateStarted: DateTime

  """All values that are not equal to given value."""
  dateStarted_not: DateTime

  """All values that are contained in given list."""
  dateStarted_in: [DateTime!]

  """All values that are not contained in given list."""
  dateStarted_not_in: [DateTime!]

  """All values less than the given value."""
  dateStarted_lt: DateTime

  """All values less than or equal the given value."""
  dateStarted_lte: DateTime

  """All values greater than the given value."""
  dateStarted_gt: DateTime

  """All values greater than or equal the given value."""
  dateStarted_gte: DateTime
  dateFinished: DateTime

  """All values that are not equal to given value."""
  dateFinished_not: DateTime

  """All values that are contained in given list."""
  dateFinished_in: [DateTime!]

  """All values that are not contained in given list."""
  dateFinished_not_in: [DateTime!]

  """All values less than the given value."""
  dateFinished_lt: DateTime

  """All values less than or equal the given value."""
  dateFinished_lte: DateTime

  """All values greater than the given value."""
  dateFinished_gt: DateTime

  """All values greater than or equal the given value."""
  dateFinished_gte: DateTime
  duration: Int

  """All values that are not equal to given value."""
  duration_not: Int

  """All values that are contained in given list."""
  duration_in: [Int!]

  """All values that are not contained in given list."""
  duration_not_in: [Int!]

  """All values less than the given value."""
  duration_lt: Int

  """All values less than or equal the given value."""
  duration_lte: Int

  """All values greater than the given value."""
  duration_gt: Int

  """All values greater than or equal the given value."""
  duration_gte: Int
  process: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToNotification_every: NotificationWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToNotification_some: NotificationWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToNotification_none: NotificationWhereInput
}

input BpmnProcessInstanceWhereUniqueInput {
  id: ID
}

enum BpmnProcessOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  model_ASC
  model_DESC
  definition_ASC
  definition_DESC
  version_ASC
  version_DESC
  status_ASC
  status_DESC
  actionCount_ASC
  actionCount_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type BpmnProcessPreviousValues {
  id: ID!
  name: String!
  description: String
  model: String!
  definition: String
  version: Int!
  status: ProcessStatus!
  actionCount: Int!
}

type BpmnProcessSubscriptionPayload {
  mutation: MutationType!
  node: BpmnProcess
  updatedFields: [String!]
  previousValues: BpmnProcessPreviousValues
}

input BpmnProcessSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BpmnProcessSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BpmnProcessSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BpmnProcessSubscriptionWhereInput!]

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
  node: BpmnProcessWhereInput
}

input BpmnProcessUpdateDataInput {
  name: String
  description: String
  model: String
  definition: String
  version: Int
  status: ProcessStatus
  actionCount: Int
  access: AccessUpdateOneInput
  resources: ResourceUpdateManyInput
  data: DataDescriptorUpdateManyInput
}

input BpmnProcessUpdateInput {
  name: String
  description: String
  model: String
  definition: String
  version: Int
  status: ProcessStatus
  actionCount: Int
  access: AccessUpdateOneInput
  resources: ResourceUpdateManyInput
  data: DataDescriptorUpdateManyInput
}

input BpmnProcessUpdateOneInput {
  create: BpmnProcessCreateInput
  connect: BpmnProcessWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: BpmnProcessUpdateDataInput
  upsert: BpmnProcessUpsertNestedInput
}

input BpmnProcessUpsertNestedInput {
  update: BpmnProcessUpdateDataInput!
  create: BpmnProcessCreateInput!
}

input BpmnProcessWhereInput {
  """Logical AND on all given filters."""
  AND: [BpmnProcessWhereInput!]

  """Logical OR on all given filters."""
  OR: [BpmnProcessWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BpmnProcessWhereInput!]
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
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  model: String

  """All values that are not equal to given value."""
  model_not: String

  """All values that are contained in given list."""
  model_in: [String!]

  """All values that are not contained in given list."""
  model_not_in: [String!]

  """All values less than the given value."""
  model_lt: String

  """All values less than or equal the given value."""
  model_lte: String

  """All values greater than the given value."""
  model_gt: String

  """All values greater than or equal the given value."""
  model_gte: String

  """All values containing the given string."""
  model_contains: String

  """All values not containing the given string."""
  model_not_contains: String

  """All values starting with the given string."""
  model_starts_with: String

  """All values not starting with the given string."""
  model_not_starts_with: String

  """All values ending with the given string."""
  model_ends_with: String

  """All values not ending with the given string."""
  model_not_ends_with: String
  definition: String

  """All values that are not equal to given value."""
  definition_not: String

  """All values that are contained in given list."""
  definition_in: [String!]

  """All values that are not contained in given list."""
  definition_not_in: [String!]

  """All values less than the given value."""
  definition_lt: String

  """All values less than or equal the given value."""
  definition_lte: String

  """All values greater than the given value."""
  definition_gt: String

  """All values greater than or equal the given value."""
  definition_gte: String

  """All values containing the given string."""
  definition_contains: String

  """All values not containing the given string."""
  definition_not_contains: String

  """All values starting with the given string."""
  definition_starts_with: String

  """All values not starting with the given string."""
  definition_not_starts_with: String

  """All values ending with the given string."""
  definition_ends_with: String

  """All values not ending with the given string."""
  definition_not_ends_with: String
  version: Int

  """All values that are not equal to given value."""
  version_not: Int

  """All values that are contained in given list."""
  version_in: [Int!]

  """All values that are not contained in given list."""
  version_not_in: [Int!]

  """All values less than the given value."""
  version_lt: Int

  """All values less than or equal the given value."""
  version_lte: Int

  """All values greater than the given value."""
  version_gt: Int

  """All values greater than or equal the given value."""
  version_gte: Int
  status: ProcessStatus

  """All values that are not equal to given value."""
  status_not: ProcessStatus

  """All values that are contained in given list."""
  status_in: [ProcessStatus!]

  """All values that are not contained in given list."""
  status_not_in: [ProcessStatus!]
  actionCount: Int

  """All values that are not equal to given value."""
  actionCount_not: Int

  """All values that are contained in given list."""
  actionCount_in: [Int!]

  """All values that are not contained in given list."""
  actionCount_not_in: [Int!]

  """All values less than the given value."""
  actionCount_lt: Int

  """All values less than or equal the given value."""
  actionCount_lte: Int

  """All values greater than the given value."""
  actionCount_gt: Int

  """All values greater than or equal the given value."""
  actionCount_gte: Int
  access: AccessWhereInput
  resources_every: ResourceWhereInput
  resources_some: ResourceWhereInput
  resources_none: ResourceWhereInput
  data_every: DataDescriptorWhereInput
  data_some: DataDescriptorWhereInput
  data_none: DataDescriptorWhereInput
  _MagicalBackRelation_BpmnProcessToBpmnProcessInstance_every: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessToBpmnProcessInstance_some: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessToBpmnProcessInstance_none: BpmnProcessInstanceWhereInput
}

input BpmnProcessWhereUniqueInput {
  id: ID
}

type DataDescriptor implements Node {
  id: ID!
}

"""A connection to a list of items."""
type DataDescriptorConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [DataDescriptorEdge]!
  aggregate: AggregateDataDescriptor!
}

input DataDescriptorCreateManyInput {
  connect: [DataDescriptorWhereUniqueInput!]
}

"""An edge in a connection."""
type DataDescriptorEdge {
  """The item at the end of the edge."""
  node: DataDescriptor!

  """A cursor for use in pagination."""
  cursor: String!
}

enum DataDescriptorOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type DataDescriptorPreviousValues {
  id: ID!
}

type DataDescriptorSubscriptionPayload {
  mutation: MutationType!
  node: DataDescriptor
  updatedFields: [String!]
  previousValues: DataDescriptorPreviousValues
}

input DataDescriptorSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [DataDescriptorSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [DataDescriptorSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DataDescriptorSubscriptionWhereInput!]

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
  node: DataDescriptorWhereInput
}

input DataDescriptorUpdateManyInput {
  connect: [DataDescriptorWhereUniqueInput!]
  disconnect: [DataDescriptorWhereUniqueInput!]
  delete: [DataDescriptorWhereUniqueInput!]
}

input DataDescriptorWhereInput {
  """Logical AND on all given filters."""
  AND: [DataDescriptorWhereInput!]

  """Logical OR on all given filters."""
  OR: [DataDescriptorWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DataDescriptorWhereInput!]
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
  _MagicalBackRelation_BpmnProcessToDataDescriptor_every: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessToDataDescriptor_some: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessToDataDescriptor_none: BpmnProcessWhereInput
}

input DataDescriptorWhereUniqueInput {
  id: ID
}

scalar DateTime

type Form implements Node {
  id: ID!
}

"""A connection to a list of items."""
type FormConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FormEdge]!
  aggregate: AggregateForm!
}

input FormCreateOneInput {
  connect: FormWhereUniqueInput
}

"""An edge in a connection."""
type FormEdge {
  """The item at the end of the edge."""
  node: Form!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FormOrderByInput {
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type FormPreviousValues {
  id: ID!
}

type FormSubscriptionPayload {
  mutation: MutationType!
  node: Form
  updatedFields: [String!]
  previousValues: FormPreviousValues
}

input FormSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FormSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FormSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FormSubscriptionWhereInput!]

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
  node: FormWhereInput
}

input FormUpdateOneInput {
  connect: FormWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
}

input FormWhereInput {
  """Logical AND on all given filters."""
  AND: [FormWhereInput!]

  """Logical OR on all given filters."""
  OR: [FormWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FormWhereInput!]
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
  _MagicalBackRelation_FormToResource_every: ResourceWhereInput
  _MagicalBackRelation_FormToResource_some: ResourceWhereInput
  _MagicalBackRelation_FormToResource_none: ResourceWhereInput
}

input FormWhereUniqueInput {
  id: ID
}

"""Raw JSON value"""
scalar Json

enum LanguageCode {
  EN
}

type Localisation implements Node {
  id: ID!
  code: String!
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
  code: String!
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
  code_ASC
  code_DESC
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
  code: String!
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
  code: String
  text: String
  language: LanguageCode
}

input LocalisationUpdateInput {
  code: String
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
  code: String

  """All values that are not equal to given value."""
  code_not: String

  """All values that are contained in given list."""
  code_in: [String!]

  """All values that are not contained in given list."""
  code_not_in: [String!]

  """All values less than the given value."""
  code_lt: String

  """All values less than or equal the given value."""
  code_lte: String

  """All values greater than the given value."""
  code_gt: String

  """All values greater than or equal the given value."""
  code_gte: String

  """All values containing the given string."""
  code_contains: String

  """All values not containing the given string."""
  code_not_contains: String

  """All values starting with the given string."""
  code_starts_with: String

  """All values not starting with the given string."""
  code_not_starts_with: String

  """All values ending with the given string."""
  code_ends_with: String

  """All values not ending with the given string."""
  code_not_ends_with: String
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
  _MagicalBackRelation_LocalisationToNotification_every: NotificationWhereInput
  _MagicalBackRelation_LocalisationToNotification_some: NotificationWhereInput
  _MagicalBackRelation_LocalisationToNotification_none: NotificationWhereInput
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
  createOrganisation(data: OrganisationCreateInput!): Organisation!
  createRole(data: RoleCreateInput!): Role!
  createUser(data: UserCreateInput!): User!
  createLocalisation(data: LocalisationCreateInput!): Localisation!
  createForm: Form!
  createAccess(data: AccessCreateInput!): Access!
  createBpmnProcessInstance(data: BpmnProcessInstanceCreateInput!): BpmnProcessInstance!
  createNotification(data: NotificationCreateInput!): Notification!
  createDataDescriptor: DataDescriptor!
  createResource(data: ResourceCreateInput!): Resource!
  createBpmnProcess(data: BpmnProcessCreateInput!): BpmnProcess!
  createAccessCondition(data: AccessConditionCreateInput!): AccessCondition!
  updateOrganisation(data: OrganisationUpdateInput!, where: OrganisationWhereUniqueInput!): Organisation
  updateRole(data: RoleUpdateInput!, where: RoleWhereUniqueInput!): Role
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateLocalisation(data: LocalisationUpdateInput!, where: LocalisationWhereUniqueInput!): Localisation
  updateAccess(data: AccessUpdateInput!, where: AccessWhereUniqueInput!): Access
  updateBpmnProcessInstance(data: BpmnProcessInstanceUpdateInput!, where: BpmnProcessInstanceWhereUniqueInput!): BpmnProcessInstance
  updateNotification(data: NotificationUpdateInput!, where: NotificationWhereUniqueInput!): Notification
  updateResource(data: ResourceUpdateInput!, where: ResourceWhereUniqueInput!): Resource
  updateBpmnProcess(data: BpmnProcessUpdateInput!, where: BpmnProcessWhereUniqueInput!): BpmnProcess
  deleteOrganisation(where: OrganisationWhereUniqueInput!): Organisation
  deleteRole(where: RoleWhereUniqueInput!): Role
  deleteUser(where: UserWhereUniqueInput!): User
  deleteLocalisation(where: LocalisationWhereUniqueInput!): Localisation
  deleteForm(where: FormWhereUniqueInput!): Form
  deleteAccess(where: AccessWhereUniqueInput!): Access
  deleteBpmnProcessInstance(where: BpmnProcessInstanceWhereUniqueInput!): BpmnProcessInstance
  deleteNotification(where: NotificationWhereUniqueInput!): Notification
  deleteDataDescriptor(where: DataDescriptorWhereUniqueInput!): DataDescriptor
  deleteResource(where: ResourceWhereUniqueInput!): Resource
  deleteBpmnProcess(where: BpmnProcessWhereUniqueInput!): BpmnProcess
  upsertOrganisation(where: OrganisationWhereUniqueInput!, create: OrganisationCreateInput!, update: OrganisationUpdateInput!): Organisation!
  upsertRole(where: RoleWhereUniqueInput!, create: RoleCreateInput!, update: RoleUpdateInput!): Role!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertLocalisation(where: LocalisationWhereUniqueInput!, create: LocalisationCreateInput!, update: LocalisationUpdateInput!): Localisation!
  upsertAccess(where: AccessWhereUniqueInput!, create: AccessCreateInput!, update: AccessUpdateInput!): Access!
  upsertBpmnProcessInstance(where: BpmnProcessInstanceWhereUniqueInput!, create: BpmnProcessInstanceCreateInput!, update: BpmnProcessInstanceUpdateInput!): BpmnProcessInstance!
  upsertNotification(where: NotificationWhereUniqueInput!, create: NotificationCreateInput!, update: NotificationUpdateInput!): Notification!
  upsertResource(where: ResourceWhereUniqueInput!, create: ResourceCreateInput!, update: ResourceUpdateInput!): Resource!
  upsertBpmnProcess(where: BpmnProcessWhereUniqueInput!, create: BpmnProcessCreateInput!, update: BpmnProcessUpdateInput!): BpmnProcess!
  updateManyOrganisations(data: OrganisationUpdateInput!, where: OrganisationWhereInput): BatchPayload!
  updateManyRoles(data: RoleUpdateInput!, where: RoleWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyLocalisations(data: LocalisationUpdateInput!, where: LocalisationWhereInput): BatchPayload!
  updateManyAccesses(data: AccessUpdateInput!, where: AccessWhereInput): BatchPayload!
  updateManyBpmnProcessInstances(data: BpmnProcessInstanceUpdateInput!, where: BpmnProcessInstanceWhereInput): BatchPayload!
  updateManyNotifications(data: NotificationUpdateInput!, where: NotificationWhereInput): BatchPayload!
  updateManyResources(data: ResourceUpdateInput!, where: ResourceWhereInput): BatchPayload!
  updateManyBpmnProcesses(data: BpmnProcessUpdateInput!, where: BpmnProcessWhereInput): BatchPayload!
  updateManyAccessConditions(data: AccessConditionUpdateInput!, where: AccessConditionWhereInput): BatchPayload!
  deleteManyOrganisations(where: OrganisationWhereInput): BatchPayload!
  deleteManyRoles(where: RoleWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyLocalisations(where: LocalisationWhereInput): BatchPayload!
  deleteManyForms(where: FormWhereInput): BatchPayload!
  deleteManyAccesses(where: AccessWhereInput): BatchPayload!
  deleteManyBpmnProcessInstances(where: BpmnProcessInstanceWhereInput): BatchPayload!
  deleteManyNotifications(where: NotificationWhereInput): BatchPayload!
  deleteManyDataDescriptors(where: DataDescriptorWhereInput): BatchPayload!
  deleteManyResources(where: ResourceWhereInput): BatchPayload!
  deleteManyBpmnProcesses(where: BpmnProcessWhereInput): BatchPayload!
  deleteManyAccessConditions(where: AccessConditionWhereInput): BatchPayload!
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
  code: NotificationCode
  text(where: LocalisationWhereInput): Localisation
  params: [String!]!
  visible: Boolean
}

enum NotificationCode {
  ServiceStarted
  ServiceStopped
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
  visible: Boolean
  params: NotificationCreateparamsInput
  processInstance: BpmnProcessInstanceCreateOneInput
  text: LocalisationCreateOneInput
}

input NotificationCreateManyInput {
  create: [NotificationCreateInput!]
  connect: [NotificationWhereUniqueInput!]
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
  params: [String!]!
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

input NotificationUpdateDataInput {
  code: NotificationCode
  visible: Boolean
  params: NotificationUpdateparamsInput
  processInstance: BpmnProcessInstanceUpdateOneInput
  text: LocalisationUpdateOneInput
}

input NotificationUpdateInput {
  code: NotificationCode
  visible: Boolean
  params: NotificationUpdateparamsInput
  processInstance: BpmnProcessInstanceUpdateOneInput
  text: LocalisationUpdateOneInput
}

input NotificationUpdateManyInput {
  create: [NotificationCreateInput!]
  connect: [NotificationWhereUniqueInput!]
  disconnect: [NotificationWhereUniqueInput!]
  delete: [NotificationWhereUniqueInput!]
  update: [NotificationUpdateWithWhereUniqueNestedInput!]
  upsert: [NotificationUpsertWithWhereUniqueNestedInput!]
}

input NotificationUpdateparamsInput {
  set: [String!]
}

input NotificationUpdateWithWhereUniqueNestedInput {
  where: NotificationWhereUniqueInput!
  data: NotificationUpdateDataInput!
}

input NotificationUpsertWithWhereUniqueNestedInput {
  where: NotificationWhereUniqueInput!
  update: NotificationUpdateDataInput!
  create: NotificationCreateInput!
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
  visible: Boolean

  """All values that are not equal to given value."""
  visible_not: Boolean
  processInstance: BpmnProcessInstanceWhereInput
  text: LocalisationWhereInput
  _MagicalBackRelation_UserNotifications_every: UserWhereInput
  _MagicalBackRelation_UserNotifications_some: UserWhereInput
  _MagicalBackRelation_UserNotifications_none: UserWhereInput
}

input NotificationWhereUniqueInput {
  id: ID
}

type Organisation implements Node {
  id: ID!
  name: String!
  description: String
}

"""A connection to a list of items."""
type OrganisationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [OrganisationEdge]!
  aggregate: AggregateOrganisation!
}

input OrganisationCreateInput {
  name: String!
  description: String
}

"""An edge in a connection."""
type OrganisationEdge {
  """The item at the end of the edge."""
  node: Organisation!

  """A cursor for use in pagination."""
  cursor: String!
}

enum OrganisationOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type OrganisationPreviousValues {
  id: ID!
  name: String!
  description: String
}

type OrganisationSubscriptionPayload {
  mutation: MutationType!
  node: Organisation
  updatedFields: [String!]
  previousValues: OrganisationPreviousValues
}

input OrganisationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [OrganisationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrganisationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrganisationSubscriptionWhereInput!]

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
  node: OrganisationWhereInput
}

input OrganisationUpdateInput {
  name: String
  description: String
}

input OrganisationWhereInput {
  """Logical AND on all given filters."""
  AND: [OrganisationWhereInput!]

  """Logical OR on all given filters."""
  OR: [OrganisationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [OrganisationWhereInput!]
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
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
}

input OrganisationWhereUniqueInput {
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

enum ProcessStatus {
  Draft
  Proposal
  Published
}

type Query {
  organisations(where: OrganisationWhereInput, orderBy: OrganisationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Organisation]!
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  localisations(where: LocalisationWhereInput, orderBy: LocalisationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Localisation]!
  forms(where: FormWhereInput, orderBy: FormOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Form]!
  accesses(where: AccessWhereInput, orderBy: AccessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Access]!
  bpmnProcessInstances(where: BpmnProcessInstanceWhereInput, orderBy: BpmnProcessInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BpmnProcessInstance]!
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification]!
  dataDescriptors(where: DataDescriptorWhereInput, orderBy: DataDescriptorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DataDescriptor]!
  resources(where: ResourceWhereInput, orderBy: ResourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Resource]!
  bpmnProcesses(where: BpmnProcessWhereInput, orderBy: BpmnProcessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BpmnProcess]!
  accessConditions(where: AccessConditionWhereInput, orderBy: AccessConditionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AccessCondition]!
  organisation(where: OrganisationWhereUniqueInput!): Organisation
  role(where: RoleWhereUniqueInput!): Role
  user(where: UserWhereUniqueInput!): User
  localisation(where: LocalisationWhereUniqueInput!): Localisation
  form(where: FormWhereUniqueInput!): Form
  access(where: AccessWhereUniqueInput!): Access
  bpmnProcessInstance(where: BpmnProcessInstanceWhereUniqueInput!): BpmnProcessInstance
  notification(where: NotificationWhereUniqueInput!): Notification
  dataDescriptor(where: DataDescriptorWhereUniqueInput!): DataDescriptor
  resource(where: ResourceWhereUniqueInput!): Resource
  bpmnProcess(where: BpmnProcessWhereUniqueInput!): BpmnProcess
  organisationsConnection(where: OrganisationWhereInput, orderBy: OrganisationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrganisationConnection!
  rolesConnection(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoleConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  localisationsConnection(where: LocalisationWhereInput, orderBy: LocalisationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocalisationConnection!
  formsConnection(where: FormWhereInput, orderBy: FormOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FormConnection!
  accessesConnection(where: AccessWhereInput, orderBy: AccessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AccessConnection!
  bpmnProcessInstancesConnection(where: BpmnProcessInstanceWhereInput, orderBy: BpmnProcessInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BpmnProcessInstanceConnection!
  notificationsConnection(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NotificationConnection!
  dataDescriptorsConnection(where: DataDescriptorWhereInput, orderBy: DataDescriptorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DataDescriptorConnection!
  resourcesConnection(where: ResourceWhereInput, orderBy: ResourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ResourceConnection!
  bpmnProcessesConnection(where: BpmnProcessWhereInput, orderBy: BpmnProcessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BpmnProcessConnection!
  accessConditionsConnection(where: AccessConditionWhereInput, orderBy: AccessConditionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AccessConditionConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Resource implements Node {
  id: ID!
  type: ResourceType!
  name: String!
  content: String!
  form(where: FormWhereInput): Form
}

"""A connection to a list of items."""
type ResourceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ResourceEdge]!
  aggregate: AggregateResource!
}

input ResourceCreateInput {
  type: ResourceType!
  name: String!
  content: String!
  form: FormCreateOneInput
}

input ResourceCreateManyInput {
  create: [ResourceCreateInput!]
  connect: [ResourceWhereUniqueInput!]
}

"""An edge in a connection."""
type ResourceEdge {
  """The item at the end of the edge."""
  node: Resource!

  """A cursor for use in pagination."""
  cursor: String!
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

type ResourcePreviousValues {
  id: ID!
  type: ResourceType!
  name: String!
  content: String!
}

type ResourceSubscriptionPayload {
  mutation: MutationType!
  node: Resource
  updatedFields: [String!]
  previousValues: ResourcePreviousValues
}

input ResourceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ResourceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ResourceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ResourceSubscriptionWhereInput!]

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
  node: ResourceWhereInput
}

enum ResourceType {
  Url
  File
  Form
  Report
}

input ResourceUpdateDataInput {
  type: ResourceType
  name: String
  content: String
  form: FormUpdateOneInput
}

input ResourceUpdateInput {
  type: ResourceType
  name: String
  content: String
  form: FormUpdateOneInput
}

input ResourceUpdateManyInput {
  create: [ResourceCreateInput!]
  connect: [ResourceWhereUniqueInput!]
  disconnect: [ResourceWhereUniqueInput!]
  delete: [ResourceWhereUniqueInput!]
  update: [ResourceUpdateWithWhereUniqueNestedInput!]
  upsert: [ResourceUpsertWithWhereUniqueNestedInput!]
}

input ResourceUpdateWithWhereUniqueNestedInput {
  where: ResourceWhereUniqueInput!
  data: ResourceUpdateDataInput!
}

input ResourceUpsertWithWhereUniqueNestedInput {
  where: ResourceWhereUniqueInput!
  update: ResourceUpdateDataInput!
  create: ResourceCreateInput!
}

input ResourceWhereInput {
  """Logical AND on all given filters."""
  AND: [ResourceWhereInput!]

  """Logical OR on all given filters."""
  OR: [ResourceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ResourceWhereInput!]
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
  type: ResourceType

  """All values that are not equal to given value."""
  type_not: ResourceType

  """All values that are contained in given list."""
  type_in: [ResourceType!]

  """All values that are not contained in given list."""
  type_not_in: [ResourceType!]
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
  content: String

  """All values that are not equal to given value."""
  content_not: String

  """All values that are contained in given list."""
  content_in: [String!]

  """All values that are not contained in given list."""
  content_not_in: [String!]

  """All values less than the given value."""
  content_lt: String

  """All values less than or equal the given value."""
  content_lte: String

  """All values greater than the given value."""
  content_gt: String

  """All values greater than or equal the given value."""
  content_gte: String

  """All values containing the given string."""
  content_contains: String

  """All values not containing the given string."""
  content_not_contains: String

  """All values starting with the given string."""
  content_starts_with: String

  """All values not starting with the given string."""
  content_not_starts_with: String

  """All values ending with the given string."""
  content_ends_with: String

  """All values not ending with the given string."""
  content_not_ends_with: String
  form: FormWhereInput
  _MagicalBackRelation_BpmnProcessResources_every: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessResources_some: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessResources_none: BpmnProcessWhereInput
}

input ResourceWhereUniqueInput {
  id: ID
}

type Role implements Node {
  id: ID!
  name: String!
  description: String
}

"""A connection to a list of items."""
type RoleConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RoleEdge]!
  aggregate: AggregateRole!
}

input RoleCreateInput {
  name: String!
  description: String
}

"""An edge in a connection."""
type RoleEdge {
  """The item at the end of the edge."""
  node: Role!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RoleOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type RolePreviousValues {
  id: ID!
  name: String!
  description: String
}

type RoleSubscriptionPayload {
  mutation: MutationType!
  node: Role
  updatedFields: [String!]
  previousValues: RolePreviousValues
}

input RoleSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RoleSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RoleSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RoleSubscriptionWhereInput!]

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
  node: RoleWhereInput
}

input RoleUpdateInput {
  name: String
  description: String
}

input RoleWhereInput {
  """Logical AND on all given filters."""
  AND: [RoleWhereInput!]

  """Logical OR on all given filters."""
  OR: [RoleWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RoleWhereInput!]
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
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
}

input RoleWhereUniqueInput {
  id: ID
}

type Subscription {
  organisation(where: OrganisationSubscriptionWhereInput): OrganisationSubscriptionPayload
  role(where: RoleSubscriptionWhereInput): RoleSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  localisation(where: LocalisationSubscriptionWhereInput): LocalisationSubscriptionPayload
  form(where: FormSubscriptionWhereInput): FormSubscriptionPayload
  access(where: AccessSubscriptionWhereInput): AccessSubscriptionPayload
  bpmnProcessInstance(where: BpmnProcessInstanceSubscriptionWhereInput): BpmnProcessInstanceSubscriptionPayload
  notification(where: NotificationSubscriptionWhereInput): NotificationSubscriptionPayload
  dataDescriptor(where: DataDescriptorSubscriptionWhereInput): DataDescriptorSubscriptionPayload
  resource(where: ResourceSubscriptionWhereInput): ResourceSubscriptionPayload
  bpmnProcess(where: BpmnProcessSubscriptionWhereInput): BpmnProcessSubscriptionPayload
  accessCondition(where: AccessConditionSubscriptionWhereInput): AccessConditionSubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
  roles: [String!]!
  description: String
  password: String!
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification!]
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
  description: String
  password: String!
  roles: UserCreaterolesInput
  notifications: NotificationCreateManyInput
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
  description_ASC
  description_DESC
  password_ASC
  password_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  roles: [String!]!
  description: String
  password: String!
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

input UserUpdateInput {
  name: String
  description: String
  password: String
  roles: UserUpdaterolesInput
  notifications: NotificationUpdateManyInput
}

input UserUpdaterolesInput {
  set: [String!]
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
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  notifications_every: NotificationWhereInput
  notifications_some: NotificationWhereInput
  notifications_none: NotificationWhereInput
}

input UserWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type ResourceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'type_ASC' |
  'type_DESC' |
  'name_ASC' |
  'name_DESC' |
  'content_ASC' |
  'content_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ResourceType =   'Url' |
  'File' |
  'Form' |
  'Report'

export type NotificationCode =   'ServiceStarted' |
  'ServiceStopped'

export type BpmnProcessOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'model_ASC' |
  'model_DESC' |
  'definition_ASC' |
  'definition_DESC' |
  'version_ASC' |
  'version_DESC' |
  'status_ASC' |
  'status_DESC' |
  'actionCount_ASC' |
  'actionCount_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type AccessOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdById_ASC' |
  'createdById_DESC' |
  'createdOn_ASC' |
  'createdOn_DESC' |
  'modifiedById_ASC' |
  'modifiedById_DESC' |
  'modifiedOn_ASC' |
  'modifiedOn_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type AccessConditionOrderByInput =   'organisationId_ASC' |
  'organisationId_DESC' |
  'roleId_ASC' |
  'roleId_DESC' |
  'userId_ASC' |
  'userId_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type RoleOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BpmnProcessInstanceStatus =   'Started' |
  'Finished' |
  'Aborted' |
  'Paused'

export type DataDescriptorOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type LanguageCode =   'EN'

export type ProcessStatus =   'Draft' |
  'Proposal' |
  'Published'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'password_ASC' |
  'password_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type NotificationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'code_ASC' |
  'code_DESC' |
  'visible_ASC' |
  'visible_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type OrganisationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type LocalisationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'code_ASC' |
  'code_DESC' |
  'text_ASC' |
  'text_DESC' |
  'language_ASC' |
  'language_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type FormOrderByInput =   'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BpmnProcessInstanceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'resources_ASC' |
  'resources_DESC' |
  'ownerId_ASC' |
  'ownerId_DESC' |
  'status_ASC' |
  'status_DESC' |
  'dateStarted_ASC' |
  'dateStarted_DESC' |
  'dateFinished_ASC' |
  'dateFinished_DESC' |
  'duration_ASC' |
  'duration_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface DataDescriptorWhereUniqueInput {
  id?: ID_Input
}

export interface AccessConditionCreateInput {
  organisationId?: ID_Input
  roleId?: ID_Input
  userId?: ID_Input
}

export interface BpmnProcessInstanceUpsertNestedInput {
  update: BpmnProcessInstanceUpdateDataInput
  create: BpmnProcessInstanceCreateInput
}

export interface OrganisationWhereInput {
  AND?: OrganisationWhereInput[] | OrganisationWhereInput
  OR?: OrganisationWhereInput[] | OrganisationWhereInput
  NOT?: OrganisationWhereInput[] | OrganisationWhereInput
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
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
}

export interface BpmnProcessUpsertNestedInput {
  update: BpmnProcessUpdateDataInput
  create: BpmnProcessCreateInput
}

export interface ResourceWhereInput {
  AND?: ResourceWhereInput[] | ResourceWhereInput
  OR?: ResourceWhereInput[] | ResourceWhereInput
  NOT?: ResourceWhereInput[] | ResourceWhereInput
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
  type?: ResourceType
  type_not?: ResourceType
  type_in?: ResourceType[] | ResourceType
  type_not_in?: ResourceType[] | ResourceType
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
  content?: String
  content_not?: String
  content_in?: String[] | String
  content_not_in?: String[] | String
  content_lt?: String
  content_lte?: String
  content_gt?: String
  content_gte?: String
  content_contains?: String
  content_not_contains?: String
  content_starts_with?: String
  content_not_starts_with?: String
  content_ends_with?: String
  content_not_ends_with?: String
  form?: FormWhereInput
  _MagicalBackRelation_BpmnProcessResources_every?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessResources_some?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessResources_none?: BpmnProcessWhereInput
}

export interface DataDescriptorUpdateManyInput {
  connect?: DataDescriptorWhereUniqueInput[] | DataDescriptorWhereUniqueInput
  disconnect?: DataDescriptorWhereUniqueInput[] | DataDescriptorWhereUniqueInput
  delete?: DataDescriptorWhereUniqueInput[] | DataDescriptorWhereUniqueInput
}

export interface FormWhereInput {
  AND?: FormWhereInput[] | FormWhereInput
  OR?: FormWhereInput[] | FormWhereInput
  NOT?: FormWhereInput[] | FormWhereInput
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
  _MagicalBackRelation_FormToResource_every?: ResourceWhereInput
  _MagicalBackRelation_FormToResource_some?: ResourceWhereInput
  _MagicalBackRelation_FormToResource_none?: ResourceWhereInput
}

export interface ResourceUpsertWithWhereUniqueNestedInput {
  where: ResourceWhereUniqueInput
  update: ResourceUpdateDataInput
  create: ResourceCreateInput
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
  code?: String
  code_not?: String
  code_in?: String[] | String
  code_not_in?: String[] | String
  code_lt?: String
  code_lte?: String
  code_gt?: String
  code_gte?: String
  code_contains?: String
  code_not_contains?: String
  code_starts_with?: String
  code_not_starts_with?: String
  code_ends_with?: String
  code_not_ends_with?: String
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
  _MagicalBackRelation_LocalisationToNotification_every?: NotificationWhereInput
  _MagicalBackRelation_LocalisationToNotification_some?: NotificationWhereInput
  _MagicalBackRelation_LocalisationToNotification_none?: NotificationWhereInput
}

export interface FormUpdateOneInput {
  connect?: FormWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
}

export interface BpmnProcessWhereInput {
  AND?: BpmnProcessWhereInput[] | BpmnProcessWhereInput
  OR?: BpmnProcessWhereInput[] | BpmnProcessWhereInput
  NOT?: BpmnProcessWhereInput[] | BpmnProcessWhereInput
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
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  model?: String
  model_not?: String
  model_in?: String[] | String
  model_not_in?: String[] | String
  model_lt?: String
  model_lte?: String
  model_gt?: String
  model_gte?: String
  model_contains?: String
  model_not_contains?: String
  model_starts_with?: String
  model_not_starts_with?: String
  model_ends_with?: String
  model_not_ends_with?: String
  definition?: String
  definition_not?: String
  definition_in?: String[] | String
  definition_not_in?: String[] | String
  definition_lt?: String
  definition_lte?: String
  definition_gt?: String
  definition_gte?: String
  definition_contains?: String
  definition_not_contains?: String
  definition_starts_with?: String
  definition_not_starts_with?: String
  definition_ends_with?: String
  definition_not_ends_with?: String
  version?: Int
  version_not?: Int
  version_in?: Int[] | Int
  version_not_in?: Int[] | Int
  version_lt?: Int
  version_lte?: Int
  version_gt?: Int
  version_gte?: Int
  status?: ProcessStatus
  status_not?: ProcessStatus
  status_in?: ProcessStatus[] | ProcessStatus
  status_not_in?: ProcessStatus[] | ProcessStatus
  actionCount?: Int
  actionCount_not?: Int
  actionCount_in?: Int[] | Int
  actionCount_not_in?: Int[] | Int
  actionCount_lt?: Int
  actionCount_lte?: Int
  actionCount_gt?: Int
  actionCount_gte?: Int
  access?: AccessWhereInput
  resources_every?: ResourceWhereInput
  resources_some?: ResourceWhereInput
  resources_none?: ResourceWhereInput
  data_every?: DataDescriptorWhereInput
  data_some?: DataDescriptorWhereInput
  data_none?: DataDescriptorWhereInput
  _MagicalBackRelation_BpmnProcessToBpmnProcessInstance_every?: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessToBpmnProcessInstance_some?: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessToBpmnProcessInstance_none?: BpmnProcessInstanceWhereInput
}

export interface ResourceUpdateDataInput {
  type?: ResourceType
  name?: String
  content?: String
  form?: FormUpdateOneInput
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

export interface ResourceUpdateWithWhereUniqueNestedInput {
  where: ResourceWhereUniqueInput
  data: ResourceUpdateDataInput
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

export interface ResourceUpdateManyInput {
  create?: ResourceCreateInput[] | ResourceCreateInput
  connect?: ResourceWhereUniqueInput[] | ResourceWhereUniqueInput
  disconnect?: ResourceWhereUniqueInput[] | ResourceWhereUniqueInput
  delete?: ResourceWhereUniqueInput[] | ResourceWhereUniqueInput
  update?: ResourceUpdateWithWhereUniqueNestedInput[] | ResourceUpdateWithWhereUniqueNestedInput
  upsert?: ResourceUpsertWithWhereUniqueNestedInput[] | ResourceUpsertWithWhereUniqueNestedInput
}

export interface RoleSubscriptionWhereInput {
  AND?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput
  OR?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput
  NOT?: RoleSubscriptionWhereInput[] | RoleSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: RoleWhereInput
}

export interface AccessUpsertNestedInput {
  update: AccessUpdateDataInput
  create: AccessCreateInput
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

export interface AccessConditionUpdateManyInput {
  create?: AccessConditionCreateInput[] | AccessConditionCreateInput
}

export interface OrganisationSubscriptionWhereInput {
  AND?: OrganisationSubscriptionWhereInput[] | OrganisationSubscriptionWhereInput
  OR?: OrganisationSubscriptionWhereInput[] | OrganisationSubscriptionWhereInput
  NOT?: OrganisationSubscriptionWhereInput[] | OrganisationSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: OrganisationWhereInput
}

export interface AccessUpdateDataInput {
  createdById?: ID_Input
  createdOn?: DateTime
  modifiedById?: ID_Input
  modifiedOn?: DateTime
  read?: AccessConditionUpdateManyInput
  write?: AccessConditionUpdateManyInput
  execute?: AccessConditionUpdateManyInput
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
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  notifications_every?: NotificationWhereInput
  notifications_some?: NotificationWhereInput
  notifications_none?: NotificationWhereInput
}

export interface AccessUpdateOneInput {
  create?: AccessCreateInput
  connect?: AccessWhereUniqueInput
  delete?: Boolean
  update?: AccessUpdateDataInput
  upsert?: AccessUpsertNestedInput
}

export interface ResourceUpdateInput {
  type?: ResourceType
  name?: String
  content?: String
  form?: FormUpdateOneInput
}

export interface BpmnProcessUpdateDataInput {
  name?: String
  description?: String
  model?: String
  definition?: String
  version?: Int
  status?: ProcessStatus
  actionCount?: Int
  access?: AccessUpdateOneInput
  resources?: ResourceUpdateManyInput
  data?: DataDescriptorUpdateManyInput
}

export interface DataDescriptorSubscriptionWhereInput {
  AND?: DataDescriptorSubscriptionWhereInput[] | DataDescriptorSubscriptionWhereInput
  OR?: DataDescriptorSubscriptionWhereInput[] | DataDescriptorSubscriptionWhereInput
  NOT?: DataDescriptorSubscriptionWhereInput[] | DataDescriptorSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: DataDescriptorWhereInput
}

export interface BpmnProcessUpdateOneInput {
  create?: BpmnProcessCreateInput
  connect?: BpmnProcessWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: BpmnProcessUpdateDataInput
  upsert?: BpmnProcessUpsertNestedInput
}

export interface BpmnProcessSubscriptionWhereInput {
  AND?: BpmnProcessSubscriptionWhereInput[] | BpmnProcessSubscriptionWhereInput
  OR?: BpmnProcessSubscriptionWhereInput[] | BpmnProcessSubscriptionWhereInput
  NOT?: BpmnProcessSubscriptionWhereInput[] | BpmnProcessSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BpmnProcessWhereInput
}

export interface BpmnProcessInstanceUpdateDataInput {
  name?: String
  description?: String
  resources?: Json
  ownerId?: ID_Input
  status?: BpmnProcessInstanceStatus
  dateStarted?: DateTime
  dateFinished?: DateTime
  duration?: Int
  process?: BpmnProcessUpdateOneInput
}

export interface RoleWhereUniqueInput {
  id?: ID_Input
}

export interface BpmnProcessInstanceUpdateOneInput {
  create?: BpmnProcessInstanceCreateInput
  connect?: BpmnProcessInstanceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: BpmnProcessInstanceUpdateDataInput
  upsert?: BpmnProcessInstanceUpsertNestedInput
}

export interface LocalisationWhereUniqueInput {
  id?: ID_Input
}

export interface NotificationUpdateparamsInput {
  set?: String[] | String
}

export interface AccessWhereUniqueInput {
  id?: ID_Input
}

export interface NotificationUpdateDataInput {
  code?: NotificationCode
  visible?: Boolean
  params?: NotificationUpdateparamsInput
  processInstance?: BpmnProcessInstanceUpdateOneInput
  text?: LocalisationUpdateOneInput
}

export interface NotificationWhereUniqueInput {
  id?: ID_Input
}

export interface NotificationUpdateWithWhereUniqueNestedInput {
  where: NotificationWhereUniqueInput
  data: NotificationUpdateDataInput
}

export interface ResourceWhereUniqueInput {
  id?: ID_Input
}

export interface NotificationUpdateManyInput {
  create?: NotificationCreateInput[] | NotificationCreateInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  disconnect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  delete?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  update?: NotificationUpdateWithWhereUniqueNestedInput[] | NotificationUpdateWithWhereUniqueNestedInput
  upsert?: NotificationUpsertWithWhereUniqueNestedInput[] | NotificationUpsertWithWhereUniqueNestedInput
}

export interface BpmnProcessInstanceUpdateInput {
  name?: String
  description?: String
  resources?: Json
  ownerId?: ID_Input
  status?: BpmnProcessInstanceStatus
  dateStarted?: DateTime
  dateFinished?: DateTime
  duration?: Int
  process?: BpmnProcessUpdateOneInput
}

export interface UserUpdaterolesInput {
  set?: String[] | String
}

export interface LocalisationUpdateInput {
  code?: String
  text?: String
  language?: LanguageCode
}

export interface UserUpdateInput {
  name?: String
  description?: String
  password?: String
  roles?: UserUpdaterolesInput
  notifications?: NotificationUpdateManyInput
}

export interface LocalisationUpsertNestedInput {
  update: LocalisationUpdateDataInput
  create: LocalisationCreateInput
}

export interface RoleUpdateInput {
  name?: String
  description?: String
}

export interface LocalisationUpdateOneInput {
  create?: LocalisationCreateInput
  connect?: LocalisationWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: LocalisationUpdateDataInput
  upsert?: LocalisationUpsertNestedInput
}

export interface OrganisationUpdateInput {
  name?: String
  description?: String
}

export interface DataDescriptorWhereInput {
  AND?: DataDescriptorWhereInput[] | DataDescriptorWhereInput
  OR?: DataDescriptorWhereInput[] | DataDescriptorWhereInput
  NOT?: DataDescriptorWhereInput[] | DataDescriptorWhereInput
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
  _MagicalBackRelation_BpmnProcessToDataDescriptor_every?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessToDataDescriptor_some?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessToDataDescriptor_none?: BpmnProcessWhereInput
}

export interface LocalisationCreateInput {
  code: String
  text: String
  language: LanguageCode
}

export interface AccessSubscriptionWhereInput {
  AND?: AccessSubscriptionWhereInput[] | AccessSubscriptionWhereInput
  OR?: AccessSubscriptionWhereInput[] | AccessSubscriptionWhereInput
  NOT?: AccessSubscriptionWhereInput[] | AccessSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AccessWhereInput
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

export interface DataDescriptorCreateManyInput {
  connect?: DataDescriptorWhereUniqueInput[] | DataDescriptorWhereUniqueInput
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
  visible?: Boolean
  visible_not?: Boolean
  processInstance?: BpmnProcessInstanceWhereInput
  text?: LocalisationWhereInput
  _MagicalBackRelation_UserNotifications_every?: UserWhereInput
  _MagicalBackRelation_UserNotifications_some?: UserWhereInput
  _MagicalBackRelation_UserNotifications_none?: UserWhereInput
}

export interface FormCreateOneInput {
  connect?: FormWhereUniqueInput
}

export interface BpmnProcessUpdateInput {
  name?: String
  description?: String
  model?: String
  definition?: String
  version?: Int
  status?: ProcessStatus
  actionCount?: Int
  access?: AccessUpdateOneInput
  resources?: ResourceUpdateManyInput
  data?: DataDescriptorUpdateManyInput
}

export interface ResourceCreateInput {
  type: ResourceType
  name: String
  content: String
  form?: FormCreateOneInput
}

export interface RoleWhereInput {
  AND?: RoleWhereInput[] | RoleWhereInput
  OR?: RoleWhereInput[] | RoleWhereInput
  NOT?: RoleWhereInput[] | RoleWhereInput
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
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
}

export interface ResourceCreateManyInput {
  create?: ResourceCreateInput[] | ResourceCreateInput
  connect?: ResourceWhereUniqueInput[] | ResourceWhereUniqueInput
}

export interface OrganisationWhereUniqueInput {
  id?: ID_Input
}

export interface OrganisationCreateInput {
  name: String
  description?: String
}

export interface FormWhereUniqueInput {
  id?: ID_Input
}

export interface RoleCreateInput {
  name: String
  description?: String
}

export interface AccessConditionSubscriptionWhereInput {
  AND?: AccessConditionSubscriptionWhereInput[] | AccessConditionSubscriptionWhereInput
  OR?: AccessConditionSubscriptionWhereInput[] | AccessConditionSubscriptionWhereInput
  NOT?: AccessConditionSubscriptionWhereInput[] | AccessConditionSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: AccessConditionWhereInput
}

export interface UserCreateInput {
  name: String
  description?: String
  password: String
  roles?: UserCreaterolesInput
  notifications?: NotificationCreateManyInput
}

export interface AccessUpdateInput {
  createdById?: ID_Input
  createdOn?: DateTime
  modifiedById?: ID_Input
  modifiedOn?: DateTime
  read?: AccessConditionUpdateManyInput
  write?: AccessConditionUpdateManyInput
  execute?: AccessConditionUpdateManyInput
}

export interface UserCreaterolesInput {
  set?: String[] | String
}

export interface LocalisationUpdateDataInput {
  code?: String
  text?: String
  language?: LanguageCode
}

export interface NotificationCreateManyInput {
  create?: NotificationCreateInput[] | NotificationCreateInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
}

export interface AccessWhereInput {
  AND?: AccessWhereInput[] | AccessWhereInput
  OR?: AccessWhereInput[] | AccessWhereInput
  NOT?: AccessWhereInput[] | AccessWhereInput
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
  createdById?: ID_Input
  createdById_not?: ID_Input
  createdById_in?: ID_Input[] | ID_Input
  createdById_not_in?: ID_Input[] | ID_Input
  createdById_lt?: ID_Input
  createdById_lte?: ID_Input
  createdById_gt?: ID_Input
  createdById_gte?: ID_Input
  createdById_contains?: ID_Input
  createdById_not_contains?: ID_Input
  createdById_starts_with?: ID_Input
  createdById_not_starts_with?: ID_Input
  createdById_ends_with?: ID_Input
  createdById_not_ends_with?: ID_Input
  createdOn?: DateTime
  createdOn_not?: DateTime
  createdOn_in?: DateTime[] | DateTime
  createdOn_not_in?: DateTime[] | DateTime
  createdOn_lt?: DateTime
  createdOn_lte?: DateTime
  createdOn_gt?: DateTime
  createdOn_gte?: DateTime
  modifiedById?: ID_Input
  modifiedById_not?: ID_Input
  modifiedById_in?: ID_Input[] | ID_Input
  modifiedById_not_in?: ID_Input[] | ID_Input
  modifiedById_lt?: ID_Input
  modifiedById_lte?: ID_Input
  modifiedById_gt?: ID_Input
  modifiedById_gte?: ID_Input
  modifiedById_contains?: ID_Input
  modifiedById_not_contains?: ID_Input
  modifiedById_starts_with?: ID_Input
  modifiedById_not_starts_with?: ID_Input
  modifiedById_ends_with?: ID_Input
  modifiedById_not_ends_with?: ID_Input
  modifiedOn?: DateTime
  modifiedOn_not?: DateTime
  modifiedOn_in?: DateTime[] | DateTime
  modifiedOn_not_in?: DateTime[] | DateTime
  modifiedOn_lt?: DateTime
  modifiedOn_lte?: DateTime
  modifiedOn_gt?: DateTime
  modifiedOn_gte?: DateTime
  read_every?: AccessConditionWhereInput
  read_some?: AccessConditionWhereInput
  read_none?: AccessConditionWhereInput
  write_every?: AccessConditionWhereInput
  write_some?: AccessConditionWhereInput
  write_none?: AccessConditionWhereInput
  execute_every?: AccessConditionWhereInput
  execute_some?: AccessConditionWhereInput
  execute_none?: AccessConditionWhereInput
  _MagicalBackRelation_BpmnProcessAccess_every?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessAccess_some?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessAccess_none?: BpmnProcessWhereInput
}

export interface NotificationCreateInput {
  code?: NotificationCode
  visible?: Boolean
  params?: NotificationCreateparamsInput
  processInstance?: BpmnProcessInstanceCreateOneInput
  text?: LocalisationCreateOneInput
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
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  ownerId?: ID_Input
  ownerId_not?: ID_Input
  ownerId_in?: ID_Input[] | ID_Input
  ownerId_not_in?: ID_Input[] | ID_Input
  ownerId_lt?: ID_Input
  ownerId_lte?: ID_Input
  ownerId_gt?: ID_Input
  ownerId_gte?: ID_Input
  ownerId_contains?: ID_Input
  ownerId_not_contains?: ID_Input
  ownerId_starts_with?: ID_Input
  ownerId_not_starts_with?: ID_Input
  ownerId_ends_with?: ID_Input
  ownerId_not_ends_with?: ID_Input
  status?: BpmnProcessInstanceStatus
  status_not?: BpmnProcessInstanceStatus
  status_in?: BpmnProcessInstanceStatus[] | BpmnProcessInstanceStatus
  status_not_in?: BpmnProcessInstanceStatus[] | BpmnProcessInstanceStatus
  dateStarted?: DateTime
  dateStarted_not?: DateTime
  dateStarted_in?: DateTime[] | DateTime
  dateStarted_not_in?: DateTime[] | DateTime
  dateStarted_lt?: DateTime
  dateStarted_lte?: DateTime
  dateStarted_gt?: DateTime
  dateStarted_gte?: DateTime
  dateFinished?: DateTime
  dateFinished_not?: DateTime
  dateFinished_in?: DateTime[] | DateTime
  dateFinished_not_in?: DateTime[] | DateTime
  dateFinished_lt?: DateTime
  dateFinished_lte?: DateTime
  dateFinished_gt?: DateTime
  dateFinished_gte?: DateTime
  duration?: Int
  duration_not?: Int
  duration_in?: Int[] | Int
  duration_not_in?: Int[] | Int
  duration_lt?: Int
  duration_lte?: Int
  duration_gt?: Int
  duration_gte?: Int
  process?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToNotification_every?: NotificationWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToNotification_some?: NotificationWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToNotification_none?: NotificationWhereInput
}

export interface NotificationCreateparamsInput {
  set?: String[] | String
}

export interface NotificationUpdateInput {
  code?: NotificationCode
  visible?: Boolean
  params?: NotificationUpdateparamsInput
  processInstance?: BpmnProcessInstanceUpdateOneInput
  text?: LocalisationUpdateOneInput
}

export interface BpmnProcessInstanceCreateOneInput {
  create?: BpmnProcessInstanceCreateInput
  connect?: BpmnProcessInstanceWhereUniqueInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
}

export interface BpmnProcessInstanceCreateInput {
  name: String
  description?: String
  resources?: Json
  ownerId?: ID_Input
  status?: BpmnProcessInstanceStatus
  dateStarted?: DateTime
  dateFinished?: DateTime
  duration?: Int
  process?: BpmnProcessCreateOneInput
}

export interface BpmnProcessWhereUniqueInput {
  id?: ID_Input
}

export interface BpmnProcessCreateOneInput {
  create?: BpmnProcessCreateInput
  connect?: BpmnProcessWhereUniqueInput
}

export interface AccessConditionWhereInput {
  AND?: AccessConditionWhereInput[] | AccessConditionWhereInput
  OR?: AccessConditionWhereInput[] | AccessConditionWhereInput
  NOT?: AccessConditionWhereInput[] | AccessConditionWhereInput
  organisationId?: ID_Input
  organisationId_not?: ID_Input
  organisationId_in?: ID_Input[] | ID_Input
  organisationId_not_in?: ID_Input[] | ID_Input
  organisationId_lt?: ID_Input
  organisationId_lte?: ID_Input
  organisationId_gt?: ID_Input
  organisationId_gte?: ID_Input
  organisationId_contains?: ID_Input
  organisationId_not_contains?: ID_Input
  organisationId_starts_with?: ID_Input
  organisationId_not_starts_with?: ID_Input
  organisationId_ends_with?: ID_Input
  organisationId_not_ends_with?: ID_Input
  roleId?: ID_Input
  roleId_not?: ID_Input
  roleId_in?: ID_Input[] | ID_Input
  roleId_not_in?: ID_Input[] | ID_Input
  roleId_lt?: ID_Input
  roleId_lte?: ID_Input
  roleId_gt?: ID_Input
  roleId_gte?: ID_Input
  roleId_contains?: ID_Input
  roleId_not_contains?: ID_Input
  roleId_starts_with?: ID_Input
  roleId_not_starts_with?: ID_Input
  roleId_ends_with?: ID_Input
  roleId_not_ends_with?: ID_Input
  userId?: ID_Input
  userId_not?: ID_Input
  userId_in?: ID_Input[] | ID_Input
  userId_not_in?: ID_Input[] | ID_Input
  userId_lt?: ID_Input
  userId_lte?: ID_Input
  userId_gt?: ID_Input
  userId_gte?: ID_Input
  userId_contains?: ID_Input
  userId_not_contains?: ID_Input
  userId_starts_with?: ID_Input
  userId_not_starts_with?: ID_Input
  userId_ends_with?: ID_Input
  userId_not_ends_with?: ID_Input
  _MagicalBackRelation_CanExecute_every?: AccessWhereInput
  _MagicalBackRelation_CanExecute_some?: AccessWhereInput
  _MagicalBackRelation_CanExecute_none?: AccessWhereInput
  _MagicalBackRelation_CanWrite_every?: AccessWhereInput
  _MagicalBackRelation_CanWrite_some?: AccessWhereInput
  _MagicalBackRelation_CanWrite_none?: AccessWhereInput
  _MagicalBackRelation_CanRead_every?: AccessWhereInput
  _MagicalBackRelation_CanRead_some?: AccessWhereInput
  _MagicalBackRelation_CanRead_none?: AccessWhereInput
}

export interface AccessConditionCreateManyInput {
  create?: AccessConditionCreateInput[] | AccessConditionCreateInput
}

export interface AccessCreateInput {
  createdById: ID_Input
  createdOn?: DateTime
  modifiedById?: ID_Input
  modifiedOn?: DateTime
  read?: AccessConditionCreateManyInput
  write?: AccessConditionCreateManyInput
  execute?: AccessConditionCreateManyInput
}

export interface AccessCreateOneInput {
  create?: AccessCreateInput
  connect?: AccessWhereUniqueInput
}

export interface BpmnProcessCreateInput {
  name: String
  description?: String
  model: String
  definition?: String
  version: Int
  status: ProcessStatus
  actionCount: Int
  access: AccessCreateOneInput
  resources?: ResourceCreateManyInput
  data?: DataDescriptorCreateManyInput
}

export interface FormSubscriptionWhereInput {
  AND?: FormSubscriptionWhereInput[] | FormSubscriptionWhereInput
  OR?: FormSubscriptionWhereInput[] | FormSubscriptionWhereInput
  NOT?: FormSubscriptionWhereInput[] | FormSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FormWhereInput
}

export interface NotificationUpsertWithWhereUniqueNestedInput {
  where: NotificationWhereUniqueInput
  update: NotificationUpdateDataInput
  create: NotificationCreateInput
}

export interface BpmnProcessInstanceWhereUniqueInput {
  id?: ID_Input
}

export interface ResourceSubscriptionWhereInput {
  AND?: ResourceSubscriptionWhereInput[] | ResourceSubscriptionWhereInput
  OR?: ResourceSubscriptionWhereInput[] | ResourceSubscriptionWhereInput
  NOT?: ResourceSubscriptionWhereInput[] | ResourceSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ResourceWhereInput
}

export interface AccessConditionUpdateInput {
  organisationId?: ID_Input
  roleId?: ID_Input
  userId?: ID_Input
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateAccessCondition {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface AccessConditionPreviousValues {
  organisationId?: ID_Output
  roleId?: ID_Output
  userId?: ID_Output
}

export interface AccessConditionSubscriptionPayload {
  mutation: MutationType
  node?: AccessCondition
  updatedFields?: String[]
  previousValues?: AccessConditionPreviousValues
}

export interface ResourcePreviousValues {
  id: ID_Output
  type: ResourceType
  name: String
  content: String
}

export interface DataDescriptor extends Node {
  id: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface AccessConditionConnection {
  pageInfo: PageInfo
  edges: AccessConditionEdge[]
  aggregate: AggregateAccessCondition
}

/*
 * An edge in a connection.

 */
export interface AccessConditionEdge {
  node: AccessCondition
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface BpmnProcessConnection {
  pageInfo: PageInfo
  edges: BpmnProcessEdge[]
  aggregate: AggregateBpmnProcess
}

export interface AggregateBpmnProcess {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface ResourceEdge {
  node: Resource
  cursor: String
}

export interface Form extends Node {
  id: ID_Output
}

export interface AggregateDataDescriptor {
  count: Int
}

export interface Resource extends Node {
  id: ID_Output
  type: ResourceType
  name: String
  content: String
  form?: Form
}

/*
 * A connection to a list of items.

 */
export interface DataDescriptorConnection {
  pageInfo: PageInfo
  edges: DataDescriptorEdge[]
  aggregate: AggregateDataDescriptor
}

export interface AccessCondition {
  organisationId?: ID_Output
  roleId?: ID_Output
  userId?: ID_Output
}

/*
 * An edge in a connection.

 */
export interface NotificationEdge {
  node: Notification
  cursor: String
}

export interface OrganisationSubscriptionPayload {
  mutation: MutationType
  node?: Organisation
  updatedFields?: String[]
  previousValues?: OrganisationPreviousValues
}

export interface AggregateBpmnProcessInstance {
  count: Int
}

export interface OrganisationPreviousValues {
  id: ID_Output
  name: String
  description?: String
}

/*
 * A connection to a list of items.

 */
export interface BpmnProcessInstanceConnection {
  pageInfo: PageInfo
  edges: BpmnProcessInstanceEdge[]
  aggregate: AggregateBpmnProcessInstance
}

export interface Access extends Node {
  id: ID_Output
  createdById: ID_Output
  createdOn?: DateTime
  modifiedById?: ID_Output
  modifiedOn?: DateTime
  read?: AccessCondition[]
  write?: AccessCondition[]
  execute?: AccessCondition[]
}

/*
 * An edge in a connection.

 */
export interface AccessEdge {
  node: Access
  cursor: String
}

export interface RoleSubscriptionPayload {
  mutation: MutationType
  node?: Role
  updatedFields?: String[]
  previousValues?: RolePreviousValues
}

export interface AggregateForm {
  count: Int
}

export interface RolePreviousValues {
  id: ID_Output
  name: String
  description?: String
}

/*
 * A connection to a list of items.

 */
export interface FormConnection {
  pageInfo: PageInfo
  edges: FormEdge[]
  aggregate: AggregateForm
}

export interface BpmnProcess extends Node {
  id: ID_Output
  name: String
  description?: String
  access: Access
  model: String
  definition?: String
  resources?: Resource[]
  data?: DataDescriptor[]
  version: Int
  status: ProcessStatus
  actionCount: Int
}

/*
 * An edge in a connection.

 */
export interface LocalisationEdge {
  node: Localisation
  cursor: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface AggregateUser {
  count: Int
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  roles: String[]
  description?: String
  password: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface BpmnProcessInstance extends Node {
  id: ID_Output
  name: String
  description?: String
  process?: BpmnProcess
  resources?: Json
  ownerId?: ID_Output
  status?: BpmnProcessInstanceStatus
  dateStarted?: DateTime
  dateFinished?: DateTime
  duration?: Int
}

/*
 * An edge in a connection.

 */
export interface RoleEdge {
  node: Role
  cursor: String
}

export interface LocalisationSubscriptionPayload {
  mutation: MutationType
  node?: Localisation
  updatedFields?: String[]
  previousValues?: LocalisationPreviousValues
}

export interface AggregateOrganisation {
  count: Int
}

export interface LocalisationPreviousValues {
  id: ID_Output
  code: String
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

export interface Notification extends Node {
  id: ID_Output
  processInstance?: BpmnProcessInstance
  code?: NotificationCode
  text?: Localisation
  params: String[]
  visible?: Boolean
}

export interface Localisation extends Node {
  id: ID_Output
  code: String
  text: String
  language: LanguageCode
}

export interface FormSubscriptionPayload {
  mutation: MutationType
  node?: Form
  updatedFields?: String[]
  previousValues?: FormPreviousValues
}

export interface AggregateResource {
  count: Int
}

export interface FormPreviousValues {
  id: ID_Output
}

/*
 * An edge in a connection.

 */
export interface DataDescriptorEdge {
  node: DataDescriptor
  cursor: String
}

export interface User extends Node {
  id: ID_Output
  name: String
  roles: String[]
  description?: String
  password: String
  notifications?: Notification[]
}

/*
 * A connection to a list of items.

 */
export interface NotificationConnection {
  pageInfo: PageInfo
  edges: NotificationEdge[]
  aggregate: AggregateNotification
}

export interface AccessSubscriptionPayload {
  mutation: MutationType
  node?: Access
  updatedFields?: String[]
  previousValues?: AccessPreviousValues
}

export interface AggregateAccess {
  count: Int
}

export interface AccessPreviousValues {
  id: ID_Output
  createdById: ID_Output
  createdOn?: DateTime
  modifiedById?: ID_Output
  modifiedOn?: DateTime
}

/*
 * An edge in a connection.

 */
export interface FormEdge {
  node: Form
  cursor: String
}

export interface BpmnProcessPreviousValues {
  id: ID_Output
  name: String
  description?: String
  model: String
  definition?: String
  version: Int
  status: ProcessStatus
  actionCount: Int
}

/*
 * A connection to a list of items.

 */
export interface LocalisationConnection {
  pageInfo: PageInfo
  edges: LocalisationEdge[]
  aggregate: AggregateLocalisation
}

export interface BpmnProcessInstanceSubscriptionPayload {
  mutation: MutationType
  node?: BpmnProcessInstance
  updatedFields?: String[]
  previousValues?: BpmnProcessInstancePreviousValues
}

export interface AggregateRole {
  count: Int
}

export interface BpmnProcessInstancePreviousValues {
  id: ID_Output
  name: String
  description?: String
  resources?: Json
  ownerId?: ID_Output
  status?: BpmnProcessInstanceStatus
  dateStarted?: DateTime
  dateFinished?: DateTime
  duration?: Int
}

/*
 * An edge in a connection.

 */
export interface OrganisationEdge {
  node: Organisation
  cursor: String
}

export interface BpmnProcessSubscriptionPayload {
  mutation: MutationType
  node?: BpmnProcess
  updatedFields?: String[]
  previousValues?: BpmnProcessPreviousValues
}

/*
 * An edge in a connection.

 */
export interface BpmnProcessEdge {
  node: BpmnProcess
  cursor: String
}

export interface NotificationSubscriptionPayload {
  mutation: MutationType
  node?: Notification
  updatedFields?: String[]
  previousValues?: NotificationPreviousValues
}

export interface AggregateNotification {
  count: Int
}

export interface NotificationPreviousValues {
  id: ID_Output
  code?: NotificationCode
  params: String[]
  visible?: Boolean
}

/*
 * A connection to a list of items.

 */
export interface AccessConnection {
  pageInfo: PageInfo
  edges: AccessEdge[]
  aggregate: AggregateAccess
}

export interface Role extends Node {
  id: ID_Output
  name: String
  description?: String
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface OrganisationConnection {
  pageInfo: PageInfo
  edges: OrganisationEdge[]
  aggregate: AggregateOrganisation
}

export interface ResourceSubscriptionPayload {
  mutation: MutationType
  node?: Resource
  updatedFields?: String[]
  previousValues?: ResourcePreviousValues
}

export interface Organisation extends Node {
  id: ID_Output
  name: String
  description?: String
}

export interface DataDescriptorPreviousValues {
  id: ID_Output
}

export interface DataDescriptorSubscriptionPayload {
  mutation: MutationType
  node?: DataDescriptor
  updatedFields?: String[]
  previousValues?: DataDescriptorPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ResourceConnection {
  pageInfo: PageInfo
  edges: ResourceEdge[]
  aggregate: AggregateResource
}

/*
 * A connection to a list of items.

 */
export interface RoleConnection {
  pageInfo: PageInfo
  edges: RoleEdge[]
  aggregate: AggregateRole
}

export interface AggregateLocalisation {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface BpmnProcessInstanceEdge {
  node: BpmnProcessInstance
  cursor: String
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
Raw JSON value
*/
export type Json = any

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

export type DateTime = Date | string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number