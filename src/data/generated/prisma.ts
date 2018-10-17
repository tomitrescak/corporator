import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    bpmnTaskInstances: <T = BpmnTaskInstance[]>(args: { where?: BpmnTaskInstanceWhereInput, orderBy?: BpmnTaskInstanceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    localisations: <T = Localisation[]>(args: { where?: LocalisationWhereInput, orderBy?: LocalisationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notifications: <T = Notification[]>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    organisations: <T = Organisation[]>(args: { where?: OrganisationWhereInput, orderBy?: OrganisationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    roles: <T = Role[]>(args: { where?: RoleWhereInput, orderBy?: RoleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    resources: <T = Resource[]>(args: { where?: ResourceWhereInput, orderBy?: ResourceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnProcessInstances: <T = BpmnProcessInstance[]>(args: { where?: BpmnProcessInstanceWhereInput, orderBy?: BpmnProcessInstanceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comments: <T = Comment[]>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    processResources: <T = ProcessResource[]>(args: { where?: ProcessResourceWhereInput, orderBy?: ProcessResourceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    logs: <T = Log[]>(args: { where?: LogWhereInput, orderBy?: LogOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    schemas: <T = Schema[]>(args: { where?: SchemaWhereInput, orderBy?: SchemaOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnTasks: <T = BpmnTask[]>(args: { where?: BpmnTaskWhereInput, orderBy?: BpmnTaskOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    datas: <T = Data[]>(args: { where?: DataWhereInput, orderBy?: DataOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnProcesses: <T = BpmnProcess[]>(args: { where?: BpmnProcessWhereInput, orderBy?: BpmnProcessOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnTaskInstance: <T = BpmnTaskInstance | null>(args: { where: BpmnTaskInstanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    localisation: <T = Localisation | null>(args: { where: LocalisationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    organisation: <T = Organisation | null>(args: { where: OrganisationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    role: <T = Role | null>(args: { where: RoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    resource: <T = Resource | null>(args: { where: ResourceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnProcessInstance: <T = BpmnProcessInstance | null>(args: { where: BpmnProcessInstanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    processResource: <T = ProcessResource | null>(args: { where: ProcessResourceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    log: <T = Log | null>(args: { where: LogWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    schema: <T = Schema | null>(args: { where: SchemaWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnTask: <T = BpmnTask | null>(args: { where: BpmnTaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    data: <T = Data | null>(args: { where: DataWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnProcess: <T = BpmnProcess | null>(args: { where: BpmnProcessWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnTaskInstancesConnection: <T = BpmnTaskInstanceConnection>(args: { where?: BpmnTaskInstanceWhereInput, orderBy?: BpmnTaskInstanceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    localisationsConnection: <T = LocalisationConnection>(args: { where?: LocalisationWhereInput, orderBy?: LocalisationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notificationsConnection: <T = NotificationConnection>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    organisationsConnection: <T = OrganisationConnection>(args: { where?: OrganisationWhereInput, orderBy?: OrganisationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    rolesConnection: <T = RoleConnection>(args: { where?: RoleWhereInput, orderBy?: RoleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    resourcesConnection: <T = ResourceConnection>(args: { where?: ResourceWhereInput, orderBy?: ResourceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnProcessInstancesConnection: <T = BpmnProcessInstanceConnection>(args: { where?: BpmnProcessInstanceWhereInput, orderBy?: BpmnProcessInstanceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    commentsConnection: <T = CommentConnection>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    processResourcesConnection: <T = ProcessResourceConnection>(args: { where?: ProcessResourceWhereInput, orderBy?: ProcessResourceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    logsConnection: <T = LogConnection>(args: { where?: LogWhereInput, orderBy?: LogOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    schemasConnection: <T = SchemaConnection>(args: { where?: SchemaWhereInput, orderBy?: SchemaOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnTasksConnection: <T = BpmnTaskConnection>(args: { where?: BpmnTaskWhereInput, orderBy?: BpmnTaskOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    datasConnection: <T = DataConnection>(args: { where?: DataWhereInput, orderBy?: DataOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnProcessesConnection: <T = BpmnProcessConnection>(args: { where?: BpmnProcessWhereInput, orderBy?: BpmnProcessOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createBpmnTaskInstance: <T = BpmnTaskInstance>(args: { data: BpmnTaskInstanceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLocalisation: <T = Localisation>(args: { data: LocalisationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNotification: <T = Notification>(args: { data: NotificationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOrganisation: <T = Organisation>(args: { data: OrganisationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRole: <T = Role>(args: { data: RoleCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createResource: <T = Resource>(args: { data: ResourceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBpmnProcessInstance: <T = BpmnProcessInstance>(args: { data: BpmnProcessInstanceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createComment: <T = Comment>(args: { data: CommentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createProcessResource: <T = ProcessResource>(args: { data: ProcessResourceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLog: <T = Log>(args: { data: LogCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSchema: <T = Schema>(args: { data: SchemaCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBpmnTask: <T = BpmnTask>(args: { data: BpmnTaskCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createData: <T = Data>(args: { data: DataCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBpmnProcess: <T = BpmnProcess>(args: { data: BpmnProcessCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBpmnTaskInstance: <T = BpmnTaskInstance | null>(args: { data: BpmnTaskInstanceUpdateInput, where: BpmnTaskInstanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLocalisation: <T = Localisation | null>(args: { data: LocalisationUpdateInput, where: LocalisationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateNotification: <T = Notification | null>(args: { data: NotificationUpdateInput, where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOrganisation: <T = Organisation | null>(args: { data: OrganisationUpdateInput, where: OrganisationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateRole: <T = Role | null>(args: { data: RoleUpdateInput, where: RoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateResource: <T = Resource | null>(args: { data: ResourceUpdateInput, where: ResourceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBpmnProcessInstance: <T = BpmnProcessInstance | null>(args: { data: BpmnProcessInstanceUpdateInput, where: BpmnProcessInstanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateComment: <T = Comment | null>(args: { data: CommentUpdateInput, where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateProcessResource: <T = ProcessResource | null>(args: { data: ProcessResourceUpdateInput, where: ProcessResourceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLog: <T = Log | null>(args: { data: LogUpdateInput, where: LogWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSchema: <T = Schema | null>(args: { data: SchemaUpdateInput, where: SchemaWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBpmnTask: <T = BpmnTask | null>(args: { data: BpmnTaskUpdateInput, where: BpmnTaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateData: <T = Data | null>(args: { data: DataUpdateInput, where: DataWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBpmnProcess: <T = BpmnProcess | null>(args: { data: BpmnProcessUpdateInput, where: BpmnProcessWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteBpmnTaskInstance: <T = BpmnTaskInstance | null>(args: { where: BpmnTaskInstanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLocalisation: <T = Localisation | null>(args: { where: LocalisationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteNotification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteOrganisation: <T = Organisation | null>(args: { where: OrganisationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteRole: <T = Role | null>(args: { where: RoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteResource: <T = Resource | null>(args: { where: ResourceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteBpmnProcessInstance: <T = BpmnProcessInstance | null>(args: { where: BpmnProcessInstanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteComment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteProcessResource: <T = ProcessResource | null>(args: { where: ProcessResourceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLog: <T = Log | null>(args: { where: LogWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSchema: <T = Schema | null>(args: { where: SchemaWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteBpmnTask: <T = BpmnTask | null>(args: { where: BpmnTaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteData: <T = Data | null>(args: { where: DataWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteBpmnProcess: <T = BpmnProcess | null>(args: { where: BpmnProcessWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBpmnTaskInstance: <T = BpmnTaskInstance>(args: { where: BpmnTaskInstanceWhereUniqueInput, create: BpmnTaskInstanceCreateInput, update: BpmnTaskInstanceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLocalisation: <T = Localisation>(args: { where: LocalisationWhereUniqueInput, create: LocalisationCreateInput, update: LocalisationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNotification: <T = Notification>(args: { where: NotificationWhereUniqueInput, create: NotificationCreateInput, update: NotificationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertOrganisation: <T = Organisation>(args: { where: OrganisationWhereUniqueInput, create: OrganisationCreateInput, update: OrganisationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRole: <T = Role>(args: { where: RoleWhereUniqueInput, create: RoleCreateInput, update: RoleUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertResource: <T = Resource>(args: { where: ResourceWhereUniqueInput, create: ResourceCreateInput, update: ResourceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBpmnProcessInstance: <T = BpmnProcessInstance>(args: { where: BpmnProcessInstanceWhereUniqueInput, create: BpmnProcessInstanceCreateInput, update: BpmnProcessInstanceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertComment: <T = Comment>(args: { where: CommentWhereUniqueInput, create: CommentCreateInput, update: CommentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertProcessResource: <T = ProcessResource>(args: { where: ProcessResourceWhereUniqueInput, create: ProcessResourceCreateInput, update: ProcessResourceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLog: <T = Log>(args: { where: LogWhereUniqueInput, create: LogCreateInput, update: LogUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSchema: <T = Schema>(args: { where: SchemaWhereUniqueInput, create: SchemaCreateInput, update: SchemaUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBpmnTask: <T = BpmnTask>(args: { where: BpmnTaskWhereUniqueInput, create: BpmnTaskCreateInput, update: BpmnTaskUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertData: <T = Data>(args: { where: DataWhereUniqueInput, create: DataCreateInput, update: DataUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBpmnProcess: <T = BpmnProcess>(args: { where: BpmnProcessWhereUniqueInput, create: BpmnProcessCreateInput, update: BpmnProcessUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBpmnTaskInstances: <T = BatchPayload>(args: { data: BpmnTaskInstanceUpdateInput, where?: BpmnTaskInstanceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLocalisations: <T = BatchPayload>(args: { data: LocalisationUpdateInput, where?: LocalisationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNotifications: <T = BatchPayload>(args: { data: NotificationUpdateInput, where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyOrganisations: <T = BatchPayload>(args: { data: OrganisationUpdateInput, where?: OrganisationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRoles: <T = BatchPayload>(args: { data: RoleUpdateInput, where?: RoleWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyResources: <T = BatchPayload>(args: { data: ResourceUpdateInput, where?: ResourceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBpmnProcessInstances: <T = BatchPayload>(args: { data: BpmnProcessInstanceUpdateInput, where?: BpmnProcessInstanceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyComments: <T = BatchPayload>(args: { data: CommentUpdateInput, where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyProcessResources: <T = BatchPayload>(args: { data: ProcessResourceUpdateInput, where?: ProcessResourceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLogs: <T = BatchPayload>(args: { data: LogUpdateInput, where?: LogWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySchemas: <T = BatchPayload>(args: { data: SchemaUpdateInput, where?: SchemaWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBpmnTasks: <T = BatchPayload>(args: { data: BpmnTaskUpdateInput, where?: BpmnTaskWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyDatas: <T = BatchPayload>(args: { data: DataUpdateInput, where?: DataWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBpmnProcesses: <T = BatchPayload>(args: { data: BpmnProcessUpdateInput, where?: BpmnProcessWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBpmnTaskInstances: <T = BatchPayload>(args: { where?: BpmnTaskInstanceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLocalisations: <T = BatchPayload>(args: { where?: LocalisationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNotifications: <T = BatchPayload>(args: { where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyOrganisations: <T = BatchPayload>(args: { where?: OrganisationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRoles: <T = BatchPayload>(args: { where?: RoleWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyResources: <T = BatchPayload>(args: { where?: ResourceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBpmnProcessInstances: <T = BatchPayload>(args: { where?: BpmnProcessInstanceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyComments: <T = BatchPayload>(args: { where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyProcessResources: <T = BatchPayload>(args: { where?: ProcessResourceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLogs: <T = BatchPayload>(args: { where?: LogWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySchemas: <T = BatchPayload>(args: { where?: SchemaWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBpmnTasks: <T = BatchPayload>(args: { where?: BpmnTaskWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyDatas: <T = BatchPayload>(args: { where?: DataWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBpmnProcesses: <T = BatchPayload>(args: { where?: BpmnProcessWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    bpmnTaskInstance: <T = BpmnTaskInstanceSubscriptionPayload | null>(args: { where?: BpmnTaskInstanceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    localisation: <T = LocalisationSubscriptionPayload | null>(args: { where?: LocalisationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    notification: <T = NotificationSubscriptionPayload | null>(args: { where?: NotificationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    organisation: <T = OrganisationSubscriptionPayload | null>(args: { where?: OrganisationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    role: <T = RoleSubscriptionPayload | null>(args: { where?: RoleSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    resource: <T = ResourceSubscriptionPayload | null>(args: { where?: ResourceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    bpmnProcessInstance: <T = BpmnProcessInstanceSubscriptionPayload | null>(args: { where?: BpmnProcessInstanceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    comment: <T = CommentSubscriptionPayload | null>(args: { where?: CommentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    processResource: <T = ProcessResourceSubscriptionPayload | null>(args: { where?: ProcessResourceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    log: <T = LogSubscriptionPayload | null>(args: { where?: LogSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    schema: <T = SchemaSubscriptionPayload | null>(args: { where?: SchemaSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    bpmnTask: <T = BpmnTaskSubscriptionPayload | null>(args: { where?: BpmnTaskSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    data: <T = DataSubscriptionPayload | null>(args: { where?: DataSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    bpmnProcess: <T = BpmnProcessSubscriptionPayload | null>(args: { where?: BpmnProcessSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  BpmnTaskInstance: (where?: BpmnTaskInstanceWhereInput) => Promise<boolean>
  Localisation: (where?: LocalisationWhereInput) => Promise<boolean>
  Notification: (where?: NotificationWhereInput) => Promise<boolean>
  Organisation: (where?: OrganisationWhereInput) => Promise<boolean>
  Role: (where?: RoleWhereInput) => Promise<boolean>
  Resource: (where?: ResourceWhereInput) => Promise<boolean>
  BpmnProcessInstance: (where?: BpmnProcessInstanceWhereInput) => Promise<boolean>
  Comment: (where?: CommentWhereInput) => Promise<boolean>
  ProcessResource: (where?: ProcessResourceWhereInput) => Promise<boolean>
  Log: (where?: LogWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Schema: (where?: SchemaWhereInput) => Promise<boolean>
  BpmnTask: (where?: BpmnTaskWhereInput) => Promise<boolean>
  Data: (where?: DataWhereInput) => Promise<boolean>
  BpmnProcess: (where?: BpmnProcessWhereInput) => Promise<boolean>
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

const typeDefs = `type AggregateBpmnProcess {
  count: Int!
}

type AggregateBpmnProcessInstance {
  count: Int!
}

type AggregateBpmnTask {
  count: Int!
}

type AggregateBpmnTaskInstance {
  count: Int!
}

type AggregateComment {
  count: Int!
}

type AggregateData {
  count: Int!
}

type AggregateLocalisation {
  count: Int!
}

type AggregateLog {
  count: Int!
}

type AggregateNotification {
  count: Int!
}

type AggregateOrganisation {
  count: Int!
}

type AggregateProcessResource {
  count: Int!
}

type AggregateResource {
  count: Int!
}

type AggregateRole {
  count: Int!
}

type AggregateSchema {
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

"""A connection to a list of items."""
type BpmnProcessConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BpmnProcessEdge]!
  aggregate: AggregateBpmnProcess!
}

input BpmnProcessCreateInput {
  processID: ID
  actionCount: Int!
  schema: Json
  description: String
  model: String!
  name: String!
  type: String!
  publicationStatus: PublicationStatus!
  version: Int!
  createdById: ID!
  updatedById: ID
  readRole: String
  readUser: String
  writeRole: String
  writeUser: String
  executeRole: String
  executeUser: String
  tasks: BpmnTaskCreateManyInput
  resources: ProcessResourceCreateManyInput
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
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment!]
  dateFinished: DateTime
  dateStarted: DateTime!
  duration: Int
  ownerId: ID!
  owner(where: UserWhereInput): User
  processId: ID!
  process(where: BpmnProcessWhereInput): BpmnProcess
  data: String!
  log(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Log!]
  status: BpmnProcessInstanceStatus!
  tasks(where: BpmnTaskInstanceWhereInput, orderBy: BpmnTaskInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BpmnTaskInstance!]
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
  dateFinished: DateTime
  dateStarted: DateTime!
  duration: Int
  ownerId: ID!
  processId: ID!
  data: String!
  status: BpmnProcessInstanceStatus!
  comments: CommentCreateManyInput
  owner: UserCreateOneWithoutProcessesInput
  process: BpmnProcessCreateOneInput
  log: LogCreateManyInput
  tasks: BpmnTaskInstanceCreateManyWithoutProcessInstanceInput
}

input BpmnProcessInstanceCreateManyWithoutOwnerInput {
  create: [BpmnProcessInstanceCreateWithoutOwnerInput!]
  connect: [BpmnProcessInstanceWhereUniqueInput!]
}

input BpmnProcessInstanceCreateOneInput {
  create: BpmnProcessInstanceCreateInput
  connect: BpmnProcessInstanceWhereUniqueInput
}

input BpmnProcessInstanceCreateOneWithoutTasksInput {
  create: BpmnProcessInstanceCreateWithoutTasksInput
  connect: BpmnProcessInstanceWhereUniqueInput
}

input BpmnProcessInstanceCreateWithoutOwnerInput {
  dateFinished: DateTime
  dateStarted: DateTime!
  duration: Int
  ownerId: ID!
  processId: ID!
  data: String!
  status: BpmnProcessInstanceStatus!
  comments: CommentCreateManyInput
  process: BpmnProcessCreateOneInput
  log: LogCreateManyInput
  tasks: BpmnTaskInstanceCreateManyWithoutProcessInstanceInput
}

input BpmnProcessInstanceCreateWithoutTasksInput {
  dateFinished: DateTime
  dateStarted: DateTime!
  duration: Int
  ownerId: ID!
  processId: ID!
  data: String!
  status: BpmnProcessInstanceStatus!
  comments: CommentCreateManyInput
  owner: UserCreateOneWithoutProcessesInput
  process: BpmnProcessCreateOneInput
  log: LogCreateManyInput
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

type BpmnProcessInstancePreviousValues {
  id: ID!
  dateFinished: DateTime
  dateStarted: DateTime!
  duration: Int
  ownerId: ID!
  processId: ID!
  data: String!
  status: BpmnProcessInstanceStatus!
}

enum BpmnProcessInstanceStatus {
  Running
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
  dateFinished: DateTime
  dateStarted: DateTime
  duration: Int
  ownerId: ID
  processId: ID
  data: String
  status: BpmnProcessInstanceStatus
  comments: CommentUpdateManyInput
  owner: UserUpdateOneWithoutProcessesInput
  process: BpmnProcessUpdateOneInput
  log: LogUpdateManyInput
  tasks: BpmnTaskInstanceUpdateManyWithoutProcessInstanceInput
}

input BpmnProcessInstanceUpdateInput {
  dateFinished: DateTime
  dateStarted: DateTime
  duration: Int
  ownerId: ID
  processId: ID
  data: String
  status: BpmnProcessInstanceStatus
  comments: CommentUpdateManyInput
  owner: UserUpdateOneWithoutProcessesInput
  process: BpmnProcessUpdateOneInput
  log: LogUpdateManyInput
  tasks: BpmnTaskInstanceUpdateManyWithoutProcessInstanceInput
}

input BpmnProcessInstanceUpdateManyWithoutOwnerInput {
  create: [BpmnProcessInstanceCreateWithoutOwnerInput!]
  connect: [BpmnProcessInstanceWhereUniqueInput!]
  disconnect: [BpmnProcessInstanceWhereUniqueInput!]
  delete: [BpmnProcessInstanceWhereUniqueInput!]
  update: [BpmnProcessInstanceUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [BpmnProcessInstanceUpsertWithWhereUniqueWithoutOwnerInput!]
}

input BpmnProcessInstanceUpdateOneInput {
  create: BpmnProcessInstanceCreateInput
  connect: BpmnProcessInstanceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: BpmnProcessInstanceUpdateDataInput
  upsert: BpmnProcessInstanceUpsertNestedInput
}

input BpmnProcessInstanceUpdateOneWithoutTasksInput {
  create: BpmnProcessInstanceCreateWithoutTasksInput
  connect: BpmnProcessInstanceWhereUniqueInput
  delete: Boolean
  update: BpmnProcessInstanceUpdateWithoutTasksDataInput
  upsert: BpmnProcessInstanceUpsertWithoutTasksInput
}

input BpmnProcessInstanceUpdateWithoutOwnerDataInput {
  dateFinished: DateTime
  dateStarted: DateTime
  duration: Int
  ownerId: ID
  processId: ID
  data: String
  status: BpmnProcessInstanceStatus
  comments: CommentUpdateManyInput
  process: BpmnProcessUpdateOneInput
  log: LogUpdateManyInput
  tasks: BpmnTaskInstanceUpdateManyWithoutProcessInstanceInput
}

input BpmnProcessInstanceUpdateWithoutTasksDataInput {
  dateFinished: DateTime
  dateStarted: DateTime
  duration: Int
  ownerId: ID
  processId: ID
  data: String
  status: BpmnProcessInstanceStatus
  comments: CommentUpdateManyInput
  owner: UserUpdateOneWithoutProcessesInput
  process: BpmnProcessUpdateOneInput
  log: LogUpdateManyInput
}

input BpmnProcessInstanceUpdateWithWhereUniqueWithoutOwnerInput {
  where: BpmnProcessInstanceWhereUniqueInput!
  data: BpmnProcessInstanceUpdateWithoutOwnerDataInput!
}

input BpmnProcessInstanceUpsertNestedInput {
  update: BpmnProcessInstanceUpdateDataInput!
  create: BpmnProcessInstanceCreateInput!
}

input BpmnProcessInstanceUpsertWithoutTasksInput {
  update: BpmnProcessInstanceUpdateWithoutTasksDataInput!
  create: BpmnProcessInstanceCreateWithoutTasksInput!
}

input BpmnProcessInstanceUpsertWithWhereUniqueWithoutOwnerInput {
  where: BpmnProcessInstanceWhereUniqueInput!
  update: BpmnProcessInstanceUpdateWithoutOwnerDataInput!
  create: BpmnProcessInstanceCreateWithoutOwnerInput!
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
  processId: ID

  """All values that are not equal to given value."""
  processId_not: ID

  """All values that are contained in given list."""
  processId_in: [ID!]

  """All values that are not contained in given list."""
  processId_not_in: [ID!]

  """All values less than the given value."""
  processId_lt: ID

  """All values less than or equal the given value."""
  processId_lte: ID

  """All values greater than the given value."""
  processId_gt: ID

  """All values greater than or equal the given value."""
  processId_gte: ID

  """All values containing the given string."""
  processId_contains: ID

  """All values not containing the given string."""
  processId_not_contains: ID

  """All values starting with the given string."""
  processId_starts_with: ID

  """All values not starting with the given string."""
  processId_not_starts_with: ID

  """All values ending with the given string."""
  processId_ends_with: ID

  """All values not ending with the given string."""
  processId_not_ends_with: ID
  data: String

  """All values that are not equal to given value."""
  data_not: String

  """All values that are contained in given list."""
  data_in: [String!]

  """All values that are not contained in given list."""
  data_not_in: [String!]

  """All values less than the given value."""
  data_lt: String

  """All values less than or equal the given value."""
  data_lte: String

  """All values greater than the given value."""
  data_gt: String

  """All values greater than or equal the given value."""
  data_gte: String

  """All values containing the given string."""
  data_contains: String

  """All values not containing the given string."""
  data_not_contains: String

  """All values starting with the given string."""
  data_starts_with: String

  """All values not starting with the given string."""
  data_not_starts_with: String

  """All values ending with the given string."""
  data_ends_with: String

  """All values not ending with the given string."""
  data_not_ends_with: String
  status: BpmnProcessInstanceStatus

  """All values that are not equal to given value."""
  status_not: BpmnProcessInstanceStatus

  """All values that are contained in given list."""
  status_in: [BpmnProcessInstanceStatus!]

  """All values that are not contained in given list."""
  status_not_in: [BpmnProcessInstanceStatus!]
  comments_every: CommentWhereInput
  comments_some: CommentWhereInput
  comments_none: CommentWhereInput
  owner: UserWhereInput
  process: BpmnProcessWhereInput
  log_every: LogWhereInput
  log_some: LogWhereInput
  log_none: LogWhereInput
  tasks_every: BpmnTaskInstanceWhereInput
  tasks_some: BpmnTaskInstanceWhereInput
  tasks_none: BpmnTaskInstanceWhereInput
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
  processID_ASC
  processID_DESC
  actionCount_ASC
  actionCount_DESC
  schema_ASC
  schema_DESC
  description_ASC
  description_DESC
  model_ASC
  model_DESC
  name_ASC
  name_DESC
  type_ASC
  type_DESC
  publicationStatus_ASC
  publicationStatus_DESC
  version_ASC
  version_DESC
  createdAt_ASC
  createdAt_DESC
  createdById_ASC
  createdById_DESC
  updatedAt_ASC
  updatedAt_DESC
  updatedById_ASC
  updatedById_DESC
  readRole_ASC
  readRole_DESC
  readUser_ASC
  readUser_DESC
  writeRole_ASC
  writeRole_DESC
  writeUser_ASC
  writeUser_DESC
  executeRole_ASC
  executeRole_DESC
  executeUser_ASC
  executeUser_DESC
}

type BpmnProcessPreviousValues {
  id: ID!
  processID: ID
  actionCount: Int!
  schema: Json
  description: String
  model: String!
  name: String!
  type: String!
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
  processID: ID
  actionCount: Int
  schema: Json
  description: String
  model: String
  name: String
  type: String
  publicationStatus: PublicationStatus
  version: Int
  createdById: ID
  updatedById: ID
  readRole: String
  readUser: String
  writeRole: String
  writeUser: String
  executeRole: String
  executeUser: String
  tasks: BpmnTaskUpdateManyInput
  resources: ProcessResourceUpdateManyInput
}

input BpmnProcessUpdateInput {
  processID: ID
  actionCount: Int
  schema: Json
  description: String
  model: String
  name: String
  type: String
  publicationStatus: PublicationStatus
  version: Int
  createdById: ID
  updatedById: ID
  readRole: String
  readUser: String
  writeRole: String
  writeUser: String
  executeRole: String
  executeUser: String
  tasks: BpmnTaskUpdateManyInput
  resources: ProcessResourceUpdateManyInput
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
  processID: ID

  """All values that are not equal to given value."""
  processID_not: ID

  """All values that are contained in given list."""
  processID_in: [ID!]

  """All values that are not contained in given list."""
  processID_not_in: [ID!]

  """All values less than the given value."""
  processID_lt: ID

  """All values less than or equal the given value."""
  processID_lte: ID

  """All values greater than the given value."""
  processID_gt: ID

  """All values greater than or equal the given value."""
  processID_gte: ID

  """All values containing the given string."""
  processID_contains: ID

  """All values not containing the given string."""
  processID_not_contains: ID

  """All values starting with the given string."""
  processID_starts_with: ID

  """All values not starting with the given string."""
  processID_not_starts_with: ID

  """All values ending with the given string."""
  processID_ends_with: ID

  """All values not ending with the given string."""
  processID_not_ends_with: ID
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
  type: String

  """All values that are not equal to given value."""
  type_not: String

  """All values that are contained in given list."""
  type_in: [String!]

  """All values that are not contained in given list."""
  type_not_in: [String!]

  """All values less than the given value."""
  type_lt: String

  """All values less than or equal the given value."""
  type_lte: String

  """All values greater than the given value."""
  type_gt: String

  """All values greater than or equal the given value."""
  type_gte: String

  """All values containing the given string."""
  type_contains: String

  """All values not containing the given string."""
  type_not_contains: String

  """All values starting with the given string."""
  type_starts_with: String

  """All values not starting with the given string."""
  type_not_starts_with: String

  """All values ending with the given string."""
  type_ends_with: String

  """All values not ending with the given string."""
  type_not_ends_with: String
  publicationStatus: PublicationStatus

  """All values that are not equal to given value."""
  publicationStatus_not: PublicationStatus

  """All values that are contained in given list."""
  publicationStatus_in: [PublicationStatus!]

  """All values that are not contained in given list."""
  publicationStatus_not_in: [PublicationStatus!]
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
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
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
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  updatedById: ID

  """All values that are not equal to given value."""
  updatedById_not: ID

  """All values that are contained in given list."""
  updatedById_in: [ID!]

  """All values that are not contained in given list."""
  updatedById_not_in: [ID!]

  """All values less than the given value."""
  updatedById_lt: ID

  """All values less than or equal the given value."""
  updatedById_lte: ID

  """All values greater than the given value."""
  updatedById_gt: ID

  """All values greater than or equal the given value."""
  updatedById_gte: ID

  """All values containing the given string."""
  updatedById_contains: ID

  """All values not containing the given string."""
  updatedById_not_contains: ID

  """All values starting with the given string."""
  updatedById_starts_with: ID

  """All values not starting with the given string."""
  updatedById_not_starts_with: ID

  """All values ending with the given string."""
  updatedById_ends_with: ID

  """All values not ending with the given string."""
  updatedById_not_ends_with: ID
  readRole: String

  """All values that are not equal to given value."""
  readRole_not: String

  """All values that are contained in given list."""
  readRole_in: [String!]

  """All values that are not contained in given list."""
  readRole_not_in: [String!]

  """All values less than the given value."""
  readRole_lt: String

  """All values less than or equal the given value."""
  readRole_lte: String

  """All values greater than the given value."""
  readRole_gt: String

  """All values greater than or equal the given value."""
  readRole_gte: String

  """All values containing the given string."""
  readRole_contains: String

  """All values not containing the given string."""
  readRole_not_contains: String

  """All values starting with the given string."""
  readRole_starts_with: String

  """All values not starting with the given string."""
  readRole_not_starts_with: String

  """All values ending with the given string."""
  readRole_ends_with: String

  """All values not ending with the given string."""
  readRole_not_ends_with: String
  readUser: String

  """All values that are not equal to given value."""
  readUser_not: String

  """All values that are contained in given list."""
  readUser_in: [String!]

  """All values that are not contained in given list."""
  readUser_not_in: [String!]

  """All values less than the given value."""
  readUser_lt: String

  """All values less than or equal the given value."""
  readUser_lte: String

  """All values greater than the given value."""
  readUser_gt: String

  """All values greater than or equal the given value."""
  readUser_gte: String

  """All values containing the given string."""
  readUser_contains: String

  """All values not containing the given string."""
  readUser_not_contains: String

  """All values starting with the given string."""
  readUser_starts_with: String

  """All values not starting with the given string."""
  readUser_not_starts_with: String

  """All values ending with the given string."""
  readUser_ends_with: String

  """All values not ending with the given string."""
  readUser_not_ends_with: String
  writeRole: String

  """All values that are not equal to given value."""
  writeRole_not: String

  """All values that are contained in given list."""
  writeRole_in: [String!]

  """All values that are not contained in given list."""
  writeRole_not_in: [String!]

  """All values less than the given value."""
  writeRole_lt: String

  """All values less than or equal the given value."""
  writeRole_lte: String

  """All values greater than the given value."""
  writeRole_gt: String

  """All values greater than or equal the given value."""
  writeRole_gte: String

  """All values containing the given string."""
  writeRole_contains: String

  """All values not containing the given string."""
  writeRole_not_contains: String

  """All values starting with the given string."""
  writeRole_starts_with: String

  """All values not starting with the given string."""
  writeRole_not_starts_with: String

  """All values ending with the given string."""
  writeRole_ends_with: String

  """All values not ending with the given string."""
  writeRole_not_ends_with: String
  writeUser: String

  """All values that are not equal to given value."""
  writeUser_not: String

  """All values that are contained in given list."""
  writeUser_in: [String!]

  """All values that are not contained in given list."""
  writeUser_not_in: [String!]

  """All values less than the given value."""
  writeUser_lt: String

  """All values less than or equal the given value."""
  writeUser_lte: String

  """All values greater than the given value."""
  writeUser_gt: String

  """All values greater than or equal the given value."""
  writeUser_gte: String

  """All values containing the given string."""
  writeUser_contains: String

  """All values not containing the given string."""
  writeUser_not_contains: String

  """All values starting with the given string."""
  writeUser_starts_with: String

  """All values not starting with the given string."""
  writeUser_not_starts_with: String

  """All values ending with the given string."""
  writeUser_ends_with: String

  """All values not ending with the given string."""
  writeUser_not_ends_with: String
  executeRole: String

  """All values that are not equal to given value."""
  executeRole_not: String

  """All values that are contained in given list."""
  executeRole_in: [String!]

  """All values that are not contained in given list."""
  executeRole_not_in: [String!]

  """All values less than the given value."""
  executeRole_lt: String

  """All values less than or equal the given value."""
  executeRole_lte: String

  """All values greater than the given value."""
  executeRole_gt: String

  """All values greater than or equal the given value."""
  executeRole_gte: String

  """All values containing the given string."""
  executeRole_contains: String

  """All values not containing the given string."""
  executeRole_not_contains: String

  """All values starting with the given string."""
  executeRole_starts_with: String

  """All values not starting with the given string."""
  executeRole_not_starts_with: String

  """All values ending with the given string."""
  executeRole_ends_with: String

  """All values not ending with the given string."""
  executeRole_not_ends_with: String
  executeUser: String

  """All values that are not equal to given value."""
  executeUser_not: String

  """All values that are contained in given list."""
  executeUser_in: [String!]

  """All values that are not contained in given list."""
  executeUser_not_in: [String!]

  """All values less than the given value."""
  executeUser_lt: String

  """All values less than or equal the given value."""
  executeUser_lte: String

  """All values greater than the given value."""
  executeUser_gt: String

  """All values greater than or equal the given value."""
  executeUser_gte: String

  """All values containing the given string."""
  executeUser_contains: String

  """All values not containing the given string."""
  executeUser_not_contains: String

  """All values starting with the given string."""
  executeUser_starts_with: String

  """All values not starting with the given string."""
  executeUser_not_starts_with: String

  """All values ending with the given string."""
  executeUser_ends_with: String

  """All values not ending with the given string."""
  executeUser_not_ends_with: String
  tasks_every: BpmnTaskWhereInput
  tasks_some: BpmnTaskWhereInput
  tasks_none: BpmnTaskWhereInput
  resources_every: ProcessResourceWhereInput
  resources_some: ProcessResourceWhereInput
  resources_none: ProcessResourceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceProcess_every: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceProcess_some: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceProcess_none: BpmnProcessInstanceWhereInput
}

input BpmnProcessWhereUniqueInput {
  id: ID
}

type BpmnTask implements Node {
  id: ID!
  taskId: ID!
  resources(where: ResourceWhereInput, orderBy: ResourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Resource!]
  name: String!
  type: BpmnTaskType
}

"""A connection to a list of items."""
type BpmnTaskConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BpmnTaskEdge]!
  aggregate: AggregateBpmnTask!
}

input BpmnTaskCreateInput {
  taskId: ID!
  name: String!
  type: BpmnTaskType
  resources: ResourceCreateManyInput
}

input BpmnTaskCreateManyInput {
  create: [BpmnTaskCreateInput!]
  connect: [BpmnTaskWhereUniqueInput!]
}

input BpmnTaskCreateOneInput {
  create: BpmnTaskCreateInput
  connect: BpmnTaskWhereUniqueInput
}

"""An edge in a connection."""
type BpmnTaskEdge {
  """The item at the end of the edge."""
  node: BpmnTask!

  """A cursor for use in pagination."""
  cursor: String!
}

type BpmnTaskInstance implements Node {
  id: ID!
  dateFinished: DateTime
  dateStarted: DateTime!
  duration: Int
  performerId: ID
  performer(where: UserWhereInput): User
  performerRoleId: ID
  performerRole: ID
  processInstance(where: BpmnProcessInstanceWhereInput): BpmnProcessInstance!
  data: Json
  status: BpmnTaskInstanceStatus!
  taskId: ID!
  task(where: BpmnTaskWhereInput): BpmnTask
}

"""A connection to a list of items."""
type BpmnTaskInstanceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [BpmnTaskInstanceEdge]!
  aggregate: AggregateBpmnTaskInstance!
}

input BpmnTaskInstanceCreateInput {
  dateFinished: DateTime
  dateStarted: DateTime!
  duration: Int
  performerId: ID
  performerRoleId: ID
  performerRole: ID
  data: Json
  status: BpmnTaskInstanceStatus!
  taskId: ID!
  performer: UserCreateOneInput
  processInstance: BpmnProcessInstanceCreateOneWithoutTasksInput!
  task: BpmnTaskCreateOneInput
}

input BpmnTaskInstanceCreateManyWithoutProcessInstanceInput {
  create: [BpmnTaskInstanceCreateWithoutProcessInstanceInput!]
  connect: [BpmnTaskInstanceWhereUniqueInput!]
}

input BpmnTaskInstanceCreateWithoutProcessInstanceInput {
  dateFinished: DateTime
  dateStarted: DateTime!
  duration: Int
  performerId: ID
  performerRoleId: ID
  performerRole: ID
  data: Json
  status: BpmnTaskInstanceStatus!
  taskId: ID!
  performer: UserCreateOneInput
  task: BpmnTaskCreateOneInput
}

"""An edge in a connection."""
type BpmnTaskInstanceEdge {
  """The item at the end of the edge."""
  node: BpmnTaskInstance!

  """A cursor for use in pagination."""
  cursor: String!
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
  performerRoleId_ASC
  performerRoleId_DESC
  performerRole_ASC
  performerRole_DESC
  data_ASC
  data_DESC
  status_ASC
  status_DESC
  taskId_ASC
  taskId_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type BpmnTaskInstancePreviousValues {
  id: ID!
  dateFinished: DateTime
  dateStarted: DateTime!
  duration: Int
  performerId: ID
  performerRoleId: ID
  performerRole: ID
  data: Json
  status: BpmnTaskInstanceStatus!
  taskId: ID!
}

enum BpmnTaskInstanceStatus {
  Started
  Paused
  Aborted
  Finished
  Approved
  Rejected
}

type BpmnTaskInstanceSubscriptionPayload {
  mutation: MutationType!
  node: BpmnTaskInstance
  updatedFields: [String!]
  previousValues: BpmnTaskInstancePreviousValues
}

input BpmnTaskInstanceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BpmnTaskInstanceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BpmnTaskInstanceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BpmnTaskInstanceSubscriptionWhereInput!]

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
  node: BpmnTaskInstanceWhereInput
}

input BpmnTaskInstanceUpdateInput {
  dateFinished: DateTime
  dateStarted: DateTime
  duration: Int
  performerId: ID
  performerRoleId: ID
  performerRole: ID
  data: Json
  status: BpmnTaskInstanceStatus
  taskId: ID
  performer: UserUpdateOneInput
  processInstance: BpmnProcessInstanceUpdateOneWithoutTasksInput
  task: BpmnTaskUpdateOneInput
}

input BpmnTaskInstanceUpdateManyWithoutProcessInstanceInput {
  create: [BpmnTaskInstanceCreateWithoutProcessInstanceInput!]
  connect: [BpmnTaskInstanceWhereUniqueInput!]
  disconnect: [BpmnTaskInstanceWhereUniqueInput!]
  delete: [BpmnTaskInstanceWhereUniqueInput!]
  update: [BpmnTaskInstanceUpdateWithWhereUniqueWithoutProcessInstanceInput!]
  upsert: [BpmnTaskInstanceUpsertWithWhereUniqueWithoutProcessInstanceInput!]
}

input BpmnTaskInstanceUpdateWithoutProcessInstanceDataInput {
  dateFinished: DateTime
  dateStarted: DateTime
  duration: Int
  performerId: ID
  performerRoleId: ID
  performerRole: ID
  data: Json
  status: BpmnTaskInstanceStatus
  taskId: ID
  performer: UserUpdateOneInput
  task: BpmnTaskUpdateOneInput
}

input BpmnTaskInstanceUpdateWithWhereUniqueWithoutProcessInstanceInput {
  where: BpmnTaskInstanceWhereUniqueInput!
  data: BpmnTaskInstanceUpdateWithoutProcessInstanceDataInput!
}

input BpmnTaskInstanceUpsertWithWhereUniqueWithoutProcessInstanceInput {
  where: BpmnTaskInstanceWhereUniqueInput!
  update: BpmnTaskInstanceUpdateWithoutProcessInstanceDataInput!
  create: BpmnTaskInstanceCreateWithoutProcessInstanceInput!
}

input BpmnTaskInstanceWhereInput {
  """Logical AND on all given filters."""
  AND: [BpmnTaskInstanceWhereInput!]

  """Logical OR on all given filters."""
  OR: [BpmnTaskInstanceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BpmnTaskInstanceWhereInput!]
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
  performerId: ID

  """All values that are not equal to given value."""
  performerId_not: ID

  """All values that are contained in given list."""
  performerId_in: [ID!]

  """All values that are not contained in given list."""
  performerId_not_in: [ID!]

  """All values less than the given value."""
  performerId_lt: ID

  """All values less than or equal the given value."""
  performerId_lte: ID

  """All values greater than the given value."""
  performerId_gt: ID

  """All values greater than or equal the given value."""
  performerId_gte: ID

  """All values containing the given string."""
  performerId_contains: ID

  """All values not containing the given string."""
  performerId_not_contains: ID

  """All values starting with the given string."""
  performerId_starts_with: ID

  """All values not starting with the given string."""
  performerId_not_starts_with: ID

  """All values ending with the given string."""
  performerId_ends_with: ID

  """All values not ending with the given string."""
  performerId_not_ends_with: ID
  performerRoleId: ID

  """All values that are not equal to given value."""
  performerRoleId_not: ID

  """All values that are contained in given list."""
  performerRoleId_in: [ID!]

  """All values that are not contained in given list."""
  performerRoleId_not_in: [ID!]

  """All values less than the given value."""
  performerRoleId_lt: ID

  """All values less than or equal the given value."""
  performerRoleId_lte: ID

  """All values greater than the given value."""
  performerRoleId_gt: ID

  """All values greater than or equal the given value."""
  performerRoleId_gte: ID

  """All values containing the given string."""
  performerRoleId_contains: ID

  """All values not containing the given string."""
  performerRoleId_not_contains: ID

  """All values starting with the given string."""
  performerRoleId_starts_with: ID

  """All values not starting with the given string."""
  performerRoleId_not_starts_with: ID

  """All values ending with the given string."""
  performerRoleId_ends_with: ID

  """All values not ending with the given string."""
  performerRoleId_not_ends_with: ID
  performerRole: ID

  """All values that are not equal to given value."""
  performerRole_not: ID

  """All values that are contained in given list."""
  performerRole_in: [ID!]

  """All values that are not contained in given list."""
  performerRole_not_in: [ID!]

  """All values less than the given value."""
  performerRole_lt: ID

  """All values less than or equal the given value."""
  performerRole_lte: ID

  """All values greater than the given value."""
  performerRole_gt: ID

  """All values greater than or equal the given value."""
  performerRole_gte: ID

  """All values containing the given string."""
  performerRole_contains: ID

  """All values not containing the given string."""
  performerRole_not_contains: ID

  """All values starting with the given string."""
  performerRole_starts_with: ID

  """All values not starting with the given string."""
  performerRole_not_starts_with: ID

  """All values ending with the given string."""
  performerRole_ends_with: ID

  """All values not ending with the given string."""
  performerRole_not_ends_with: ID
  status: BpmnTaskInstanceStatus

  """All values that are not equal to given value."""
  status_not: BpmnTaskInstanceStatus

  """All values that are contained in given list."""
  status_in: [BpmnTaskInstanceStatus!]

  """All values that are not contained in given list."""
  status_not_in: [BpmnTaskInstanceStatus!]
  taskId: ID

  """All values that are not equal to given value."""
  taskId_not: ID

  """All values that are contained in given list."""
  taskId_in: [ID!]

  """All values that are not contained in given list."""
  taskId_not_in: [ID!]

  """All values less than the given value."""
  taskId_lt: ID

  """All values less than or equal the given value."""
  taskId_lte: ID

  """All values greater than the given value."""
  taskId_gt: ID

  """All values greater than or equal the given value."""
  taskId_gte: ID

  """All values containing the given string."""
  taskId_contains: ID

  """All values not containing the given string."""
  taskId_not_contains: ID

  """All values starting with the given string."""
  taskId_starts_with: ID

  """All values not starting with the given string."""
  taskId_not_starts_with: ID

  """All values ending with the given string."""
  taskId_ends_with: ID

  """All values not ending with the given string."""
  taskId_not_ends_with: ID
  performer: UserWhereInput
  processInstance: BpmnProcessInstanceWhereInput
  task: BpmnTaskWhereInput
}

input BpmnTaskInstanceWhereUniqueInput {
  id: ID
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

type BpmnTaskPreviousValues {
  id: ID!
  taskId: ID!
  name: String!
  type: BpmnTaskType
}

type BpmnTaskSubscriptionPayload {
  mutation: MutationType!
  node: BpmnTask
  updatedFields: [String!]
  previousValues: BpmnTaskPreviousValues
}

input BpmnTaskSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [BpmnTaskSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [BpmnTaskSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BpmnTaskSubscriptionWhereInput!]

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
  node: BpmnTaskWhereInput
}

enum BpmnTaskType {
  Form
}

input BpmnTaskUpdateDataInput {
  taskId: ID
  name: String
  type: BpmnTaskType
  resources: ResourceUpdateManyInput
}

input BpmnTaskUpdateInput {
  taskId: ID
  name: String
  type: BpmnTaskType
  resources: ResourceUpdateManyInput
}

input BpmnTaskUpdateManyInput {
  create: [BpmnTaskCreateInput!]
  connect: [BpmnTaskWhereUniqueInput!]
  disconnect: [BpmnTaskWhereUniqueInput!]
  delete: [BpmnTaskWhereUniqueInput!]
  update: [BpmnTaskUpdateWithWhereUniqueNestedInput!]
  upsert: [BpmnTaskUpsertWithWhereUniqueNestedInput!]
}

input BpmnTaskUpdateOneInput {
  create: BpmnTaskCreateInput
  connect: BpmnTaskWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: BpmnTaskUpdateDataInput
  upsert: BpmnTaskUpsertNestedInput
}

input BpmnTaskUpdateWithWhereUniqueNestedInput {
  where: BpmnTaskWhereUniqueInput!
  data: BpmnTaskUpdateDataInput!
}

input BpmnTaskUpsertNestedInput {
  update: BpmnTaskUpdateDataInput!
  create: BpmnTaskCreateInput!
}

input BpmnTaskUpsertWithWhereUniqueNestedInput {
  where: BpmnTaskWhereUniqueInput!
  update: BpmnTaskUpdateDataInput!
  create: BpmnTaskCreateInput!
}

input BpmnTaskWhereInput {
  """Logical AND on all given filters."""
  AND: [BpmnTaskWhereInput!]

  """Logical OR on all given filters."""
  OR: [BpmnTaskWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [BpmnTaskWhereInput!]
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
  taskId: ID

  """All values that are not equal to given value."""
  taskId_not: ID

  """All values that are contained in given list."""
  taskId_in: [ID!]

  """All values that are not contained in given list."""
  taskId_not_in: [ID!]

  """All values less than the given value."""
  taskId_lt: ID

  """All values less than or equal the given value."""
  taskId_lte: ID

  """All values greater than the given value."""
  taskId_gt: ID

  """All values greater than or equal the given value."""
  taskId_gte: ID

  """All values containing the given string."""
  taskId_contains: ID

  """All values not containing the given string."""
  taskId_not_contains: ID

  """All values starting with the given string."""
  taskId_starts_with: ID

  """All values not starting with the given string."""
  taskId_not_starts_with: ID

  """All values ending with the given string."""
  taskId_ends_with: ID

  """All values not ending with the given string."""
  taskId_not_ends_with: ID
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
  type: BpmnTaskType

  """All values that are not equal to given value."""
  type_not: BpmnTaskType

  """All values that are contained in given list."""
  type_in: [BpmnTaskType!]

  """All values that are not contained in given list."""
  type_not_in: [BpmnTaskType!]
  resources_every: ResourceWhereInput
  resources_some: ResourceWhereInput
  resources_none: ResourceWhereInput
  _MagicalBackRelation_BpmnProcessTasks_every: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessTasks_some: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessTasks_none: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnTaskToBpmnTaskInstance_every: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnTaskToBpmnTaskInstance_some: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnTaskToBpmnTaskInstance_none: BpmnTaskInstanceWhereInput
}

input BpmnTaskWhereUniqueInput {
  id: ID
  taskId: ID
}

type Comment implements Node {
  id: ID!
  text: String!
  userId: ID!
  user(where: UserWhereInput): User
  date: DateTime!
  replyTo: ID
}

"""A connection to a list of items."""
type CommentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CommentEdge]!
  aggregate: AggregateComment!
}

input CommentCreateInput {
  text: String!
  userId: ID!
  date: DateTime!
  replyTo: ID
  user: UserCreateOneInput
}

input CommentCreateManyInput {
  create: [CommentCreateInput!]
  connect: [CommentWhereUniqueInput!]
}

"""An edge in a connection."""
type CommentEdge {
  """The item at the end of the edge."""
  node: Comment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CommentOrderByInput {
  id_ASC
  id_DESC
  text_ASC
  text_DESC
  userId_ASC
  userId_DESC
  date_ASC
  date_DESC
  replyTo_ASC
  replyTo_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type CommentPreviousValues {
  id: ID!
  text: String!
  userId: ID!
  date: DateTime!
  replyTo: ID
}

type CommentSubscriptionPayload {
  mutation: MutationType!
  node: Comment
  updatedFields: [String!]
  previousValues: CommentPreviousValues
}

input CommentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentSubscriptionWhereInput!]

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
  node: CommentWhereInput
}

input CommentUpdateDataInput {
  text: String
  userId: ID
  date: DateTime
  replyTo: ID
  user: UserUpdateOneInput
}

input CommentUpdateInput {
  text: String
  userId: ID
  date: DateTime
  replyTo: ID
  user: UserUpdateOneInput
}

input CommentUpdateManyInput {
  create: [CommentCreateInput!]
  connect: [CommentWhereUniqueInput!]
  disconnect: [CommentWhereUniqueInput!]
  delete: [CommentWhereUniqueInput!]
  update: [CommentUpdateWithWhereUniqueNestedInput!]
  upsert: [CommentUpsertWithWhereUniqueNestedInput!]
}

input CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput!
  data: CommentUpdateDataInput!
}

input CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput!
  update: CommentUpdateDataInput!
  create: CommentCreateInput!
}

input CommentWhereInput {
  """Logical AND on all given filters."""
  AND: [CommentWhereInput!]

  """Logical OR on all given filters."""
  OR: [CommentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CommentWhereInput!]
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
  replyTo: ID

  """All values that are not equal to given value."""
  replyTo_not: ID

  """All values that are contained in given list."""
  replyTo_in: [ID!]

  """All values that are not contained in given list."""
  replyTo_not_in: [ID!]

  """All values less than the given value."""
  replyTo_lt: ID

  """All values less than or equal the given value."""
  replyTo_lte: ID

  """All values greater than the given value."""
  replyTo_gt: ID

  """All values greater than or equal the given value."""
  replyTo_gte: ID

  """All values containing the given string."""
  replyTo_contains: ID

  """All values not containing the given string."""
  replyTo_not_contains: ID

  """All values starting with the given string."""
  replyTo_starts_with: ID

  """All values not starting with the given string."""
  replyTo_not_starts_with: ID

  """All values ending with the given string."""
  replyTo_ends_with: ID

  """All values not ending with the given string."""
  replyTo_not_ends_with: ID
  user: UserWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToComment_every: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToComment_some: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToComment_none: BpmnProcessInstanceWhereInput
}

input CommentWhereUniqueInput {
  id: ID
}

type Data implements Node {
  id: ID!
  schemaId: ID!
  schema(where: SchemaWhereInput): Schema
  version: Int
  date: DateTime
  value: String
}

"""A connection to a list of items."""
type DataConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [DataEdge]!
  aggregate: AggregateData!
}

input DataCreateInput {
  schemaId: ID!
  version: Int
  date: DateTime
  value: String
  schema: SchemaCreateOneInput
}

input DataCreateManyInput {
  create: [DataCreateInput!]
  connect: [DataWhereUniqueInput!]
}

"""An edge in a connection."""
type DataEdge {
  """The item at the end of the edge."""
  node: Data!

  """A cursor for use in pagination."""
  cursor: String!
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

type DataPreviousValues {
  id: ID!
  schemaId: ID!
  version: Int
  date: DateTime
  value: String
}

type DataSubscriptionPayload {
  mutation: MutationType!
  node: Data
  updatedFields: [String!]
  previousValues: DataPreviousValues
}

input DataSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [DataSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [DataSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DataSubscriptionWhereInput!]

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
  node: DataWhereInput
}

input DataUpdateDataInput {
  schemaId: ID
  version: Int
  date: DateTime
  value: String
  schema: SchemaUpdateOneInput
}

input DataUpdateInput {
  schemaId: ID
  version: Int
  date: DateTime
  value: String
  schema: SchemaUpdateOneInput
}

input DataUpdateManyInput {
  create: [DataCreateInput!]
  connect: [DataWhereUniqueInput!]
  disconnect: [DataWhereUniqueInput!]
  delete: [DataWhereUniqueInput!]
  update: [DataUpdateWithWhereUniqueNestedInput!]
  upsert: [DataUpsertWithWhereUniqueNestedInput!]
}

input DataUpdateWithWhereUniqueNestedInput {
  where: DataWhereUniqueInput!
  data: DataUpdateDataInput!
}

input DataUpsertWithWhereUniqueNestedInput {
  where: DataWhereUniqueInput!
  update: DataUpdateDataInput!
  create: DataCreateInput!
}

input DataWhereInput {
  """Logical AND on all given filters."""
  AND: [DataWhereInput!]

  """Logical OR on all given filters."""
  OR: [DataWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DataWhereInput!]
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
  schemaId: ID

  """All values that are not equal to given value."""
  schemaId_not: ID

  """All values that are contained in given list."""
  schemaId_in: [ID!]

  """All values that are not contained in given list."""
  schemaId_not_in: [ID!]

  """All values less than the given value."""
  schemaId_lt: ID

  """All values less than or equal the given value."""
  schemaId_lte: ID

  """All values greater than the given value."""
  schemaId_gt: ID

  """All values greater than or equal the given value."""
  schemaId_gte: ID

  """All values containing the given string."""
  schemaId_contains: ID

  """All values not containing the given string."""
  schemaId_not_contains: ID

  """All values starting with the given string."""
  schemaId_starts_with: ID

  """All values not starting with the given string."""
  schemaId_not_starts_with: ID

  """All values ending with the given string."""
  schemaId_ends_with: ID

  """All values not ending with the given string."""
  schemaId_not_ends_with: ID
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
  value: String

  """All values that are not equal to given value."""
  value_not: String

  """All values that are contained in given list."""
  value_in: [String!]

  """All values that are not contained in given list."""
  value_not_in: [String!]

  """All values less than the given value."""
  value_lt: String

  """All values less than or equal the given value."""
  value_lte: String

  """All values greater than the given value."""
  value_gt: String

  """All values greater than or equal the given value."""
  value_gte: String

  """All values containing the given string."""
  value_contains: String

  """All values not containing the given string."""
  value_not_contains: String

  """All values starting with the given string."""
  value_starts_with: String

  """All values not starting with the given string."""
  value_not_starts_with: String

  """All values ending with the given string."""
  value_ends_with: String

  """All values not ending with the given string."""
  value_not_ends_with: String
  schema: SchemaWhereInput
  _MagicalBackRelation_UserData_every: UserWhereInput
  _MagicalBackRelation_UserData_some: UserWhereInput
  _MagicalBackRelation_UserData_none: UserWhereInput
}

input DataWhereUniqueInput {
  id: ID
}

scalar DateTime

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

input LocalisationUpdateInput {
  code: String
  text: String
  language: LanguageCode
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
}

input LocalisationWhereUniqueInput {
  id: ID
}

type Log implements Node {
  id: ID!
  elementId: String!
  elementName: String!
  date: DateTime!
  taskInstanceId: ID
  performer(where: UserWhereInput): User
  status: BpmnTaskInstanceStatus
  message: String
}

"""A connection to a list of items."""
type LogConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LogEdge]!
  aggregate: AggregateLog!
}

input LogCreateInput {
  elementId: String!
  elementName: String!
  date: DateTime!
  taskInstanceId: ID
  status: BpmnTaskInstanceStatus
  message: String
  performer: UserCreateOneInput
}

input LogCreateManyInput {
  create: [LogCreateInput!]
  connect: [LogWhereUniqueInput!]
}

"""An edge in a connection."""
type LogEdge {
  """The item at the end of the edge."""
  node: Log!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LogOrderByInput {
  id_ASC
  id_DESC
  elementId_ASC
  elementId_DESC
  elementName_ASC
  elementName_DESC
  date_ASC
  date_DESC
  taskInstanceId_ASC
  taskInstanceId_DESC
  status_ASC
  status_DESC
  message_ASC
  message_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type LogPreviousValues {
  id: ID!
  elementId: String!
  elementName: String!
  date: DateTime!
  taskInstanceId: ID
  status: BpmnTaskInstanceStatus
  message: String
}

type LogSubscriptionPayload {
  mutation: MutationType!
  node: Log
  updatedFields: [String!]
  previousValues: LogPreviousValues
}

input LogSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LogSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LogSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LogSubscriptionWhereInput!]

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
  node: LogWhereInput
}

input LogUpdateDataInput {
  elementId: String
  elementName: String
  date: DateTime
  taskInstanceId: ID
  status: BpmnTaskInstanceStatus
  message: String
  performer: UserUpdateOneInput
}

input LogUpdateInput {
  elementId: String
  elementName: String
  date: DateTime
  taskInstanceId: ID
  status: BpmnTaskInstanceStatus
  message: String
  performer: UserUpdateOneInput
}

input LogUpdateManyInput {
  create: [LogCreateInput!]
  connect: [LogWhereUniqueInput!]
  disconnect: [LogWhereUniqueInput!]
  delete: [LogWhereUniqueInput!]
  update: [LogUpdateWithWhereUniqueNestedInput!]
  upsert: [LogUpsertWithWhereUniqueNestedInput!]
}

input LogUpdateWithWhereUniqueNestedInput {
  where: LogWhereUniqueInput!
  data: LogUpdateDataInput!
}

input LogUpsertWithWhereUniqueNestedInput {
  where: LogWhereUniqueInput!
  update: LogUpdateDataInput!
  create: LogCreateInput!
}

input LogWhereInput {
  """Logical AND on all given filters."""
  AND: [LogWhereInput!]

  """Logical OR on all given filters."""
  OR: [LogWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LogWhereInput!]
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
  elementId: String

  """All values that are not equal to given value."""
  elementId_not: String

  """All values that are contained in given list."""
  elementId_in: [String!]

  """All values that are not contained in given list."""
  elementId_not_in: [String!]

  """All values less than the given value."""
  elementId_lt: String

  """All values less than or equal the given value."""
  elementId_lte: String

  """All values greater than the given value."""
  elementId_gt: String

  """All values greater than or equal the given value."""
  elementId_gte: String

  """All values containing the given string."""
  elementId_contains: String

  """All values not containing the given string."""
  elementId_not_contains: String

  """All values starting with the given string."""
  elementId_starts_with: String

  """All values not starting with the given string."""
  elementId_not_starts_with: String

  """All values ending with the given string."""
  elementId_ends_with: String

  """All values not ending with the given string."""
  elementId_not_ends_with: String
  elementName: String

  """All values that are not equal to given value."""
  elementName_not: String

  """All values that are contained in given list."""
  elementName_in: [String!]

  """All values that are not contained in given list."""
  elementName_not_in: [String!]

  """All values less than the given value."""
  elementName_lt: String

  """All values less than or equal the given value."""
  elementName_lte: String

  """All values greater than the given value."""
  elementName_gt: String

  """All values greater than or equal the given value."""
  elementName_gte: String

  """All values containing the given string."""
  elementName_contains: String

  """All values not containing the given string."""
  elementName_not_contains: String

  """All values starting with the given string."""
  elementName_starts_with: String

  """All values not starting with the given string."""
  elementName_not_starts_with: String

  """All values ending with the given string."""
  elementName_ends_with: String

  """All values not ending with the given string."""
  elementName_not_ends_with: String
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
  taskInstanceId: ID

  """All values that are not equal to given value."""
  taskInstanceId_not: ID

  """All values that are contained in given list."""
  taskInstanceId_in: [ID!]

  """All values that are not contained in given list."""
  taskInstanceId_not_in: [ID!]

  """All values less than the given value."""
  taskInstanceId_lt: ID

  """All values less than or equal the given value."""
  taskInstanceId_lte: ID

  """All values greater than the given value."""
  taskInstanceId_gt: ID

  """All values greater than or equal the given value."""
  taskInstanceId_gte: ID

  """All values containing the given string."""
  taskInstanceId_contains: ID

  """All values not containing the given string."""
  taskInstanceId_not_contains: ID

  """All values starting with the given string."""
  taskInstanceId_starts_with: ID

  """All values not starting with the given string."""
  taskInstanceId_not_starts_with: ID

  """All values ending with the given string."""
  taskInstanceId_ends_with: ID

  """All values not ending with the given string."""
  taskInstanceId_not_ends_with: ID
  status: BpmnTaskInstanceStatus

  """All values that are not equal to given value."""
  status_not: BpmnTaskInstanceStatus

  """All values that are contained in given list."""
  status_in: [BpmnTaskInstanceStatus!]

  """All values that are not contained in given list."""
  status_not_in: [BpmnTaskInstanceStatus!]
  message: String

  """All values that are not equal to given value."""
  message_not: String

  """All values that are contained in given list."""
  message_in: [String!]

  """All values that are not contained in given list."""
  message_not_in: [String!]

  """All values less than the given value."""
  message_lt: String

  """All values less than or equal the given value."""
  message_lte: String

  """All values greater than the given value."""
  message_gt: String

  """All values greater than or equal the given value."""
  message_gte: String

  """All values containing the given string."""
  message_contains: String

  """All values not containing the given string."""
  message_not_contains: String

  """All values starting with the given string."""
  message_starts_with: String

  """All values not starting with the given string."""
  message_not_starts_with: String

  """All values ending with the given string."""
  message_ends_with: String

  """All values not ending with the given string."""
  message_not_ends_with: String
  performer: UserWhereInput
  _MagicalBackRelation_BpmnProcessInstanceLog_every: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceLog_some: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceLog_none: BpmnProcessInstanceWhereInput
}

input LogWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createBpmnTaskInstance(data: BpmnTaskInstanceCreateInput!): BpmnTaskInstance!
  createLocalisation(data: LocalisationCreateInput!): Localisation!
  createNotification(data: NotificationCreateInput!): Notification!
  createOrganisation(data: OrganisationCreateInput!): Organisation!
  createRole(data: RoleCreateInput!): Role!
  createResource(data: ResourceCreateInput!): Resource!
  createBpmnProcessInstance(data: BpmnProcessInstanceCreateInput!): BpmnProcessInstance!
  createComment(data: CommentCreateInput!): Comment!
  createProcessResource(data: ProcessResourceCreateInput!): ProcessResource!
  createLog(data: LogCreateInput!): Log!
  createUser(data: UserCreateInput!): User!
  createSchema(data: SchemaCreateInput!): Schema!
  createBpmnTask(data: BpmnTaskCreateInput!): BpmnTask!
  createData(data: DataCreateInput!): Data!
  createBpmnProcess(data: BpmnProcessCreateInput!): BpmnProcess!
  updateBpmnTaskInstance(data: BpmnTaskInstanceUpdateInput!, where: BpmnTaskInstanceWhereUniqueInput!): BpmnTaskInstance
  updateLocalisation(data: LocalisationUpdateInput!, where: LocalisationWhereUniqueInput!): Localisation
  updateNotification(data: NotificationUpdateInput!, where: NotificationWhereUniqueInput!): Notification
  updateOrganisation(data: OrganisationUpdateInput!, where: OrganisationWhereUniqueInput!): Organisation
  updateRole(data: RoleUpdateInput!, where: RoleWhereUniqueInput!): Role
  updateResource(data: ResourceUpdateInput!, where: ResourceWhereUniqueInput!): Resource
  updateBpmnProcessInstance(data: BpmnProcessInstanceUpdateInput!, where: BpmnProcessInstanceWhereUniqueInput!): BpmnProcessInstance
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateProcessResource(data: ProcessResourceUpdateInput!, where: ProcessResourceWhereUniqueInput!): ProcessResource
  updateLog(data: LogUpdateInput!, where: LogWhereUniqueInput!): Log
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateSchema(data: SchemaUpdateInput!, where: SchemaWhereUniqueInput!): Schema
  updateBpmnTask(data: BpmnTaskUpdateInput!, where: BpmnTaskWhereUniqueInput!): BpmnTask
  updateData(data: DataUpdateInput!, where: DataWhereUniqueInput!): Data
  updateBpmnProcess(data: BpmnProcessUpdateInput!, where: BpmnProcessWhereUniqueInput!): BpmnProcess
  deleteBpmnTaskInstance(where: BpmnTaskInstanceWhereUniqueInput!): BpmnTaskInstance
  deleteLocalisation(where: LocalisationWhereUniqueInput!): Localisation
  deleteNotification(where: NotificationWhereUniqueInput!): Notification
  deleteOrganisation(where: OrganisationWhereUniqueInput!): Organisation
  deleteRole(where: RoleWhereUniqueInput!): Role
  deleteResource(where: ResourceWhereUniqueInput!): Resource
  deleteBpmnProcessInstance(where: BpmnProcessInstanceWhereUniqueInput!): BpmnProcessInstance
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteProcessResource(where: ProcessResourceWhereUniqueInput!): ProcessResource
  deleteLog(where: LogWhereUniqueInput!): Log
  deleteUser(where: UserWhereUniqueInput!): User
  deleteSchema(where: SchemaWhereUniqueInput!): Schema
  deleteBpmnTask(where: BpmnTaskWhereUniqueInput!): BpmnTask
  deleteData(where: DataWhereUniqueInput!): Data
  deleteBpmnProcess(where: BpmnProcessWhereUniqueInput!): BpmnProcess
  upsertBpmnTaskInstance(where: BpmnTaskInstanceWhereUniqueInput!, create: BpmnTaskInstanceCreateInput!, update: BpmnTaskInstanceUpdateInput!): BpmnTaskInstance!
  upsertLocalisation(where: LocalisationWhereUniqueInput!, create: LocalisationCreateInput!, update: LocalisationUpdateInput!): Localisation!
  upsertNotification(where: NotificationWhereUniqueInput!, create: NotificationCreateInput!, update: NotificationUpdateInput!): Notification!
  upsertOrganisation(where: OrganisationWhereUniqueInput!, create: OrganisationCreateInput!, update: OrganisationUpdateInput!): Organisation!
  upsertRole(where: RoleWhereUniqueInput!, create: RoleCreateInput!, update: RoleUpdateInput!): Role!
  upsertResource(where: ResourceWhereUniqueInput!, create: ResourceCreateInput!, update: ResourceUpdateInput!): Resource!
  upsertBpmnProcessInstance(where: BpmnProcessInstanceWhereUniqueInput!, create: BpmnProcessInstanceCreateInput!, update: BpmnProcessInstanceUpdateInput!): BpmnProcessInstance!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  upsertProcessResource(where: ProcessResourceWhereUniqueInput!, create: ProcessResourceCreateInput!, update: ProcessResourceUpdateInput!): ProcessResource!
  upsertLog(where: LogWhereUniqueInput!, create: LogCreateInput!, update: LogUpdateInput!): Log!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertSchema(where: SchemaWhereUniqueInput!, create: SchemaCreateInput!, update: SchemaUpdateInput!): Schema!
  upsertBpmnTask(where: BpmnTaskWhereUniqueInput!, create: BpmnTaskCreateInput!, update: BpmnTaskUpdateInput!): BpmnTask!
  upsertData(where: DataWhereUniqueInput!, create: DataCreateInput!, update: DataUpdateInput!): Data!
  upsertBpmnProcess(where: BpmnProcessWhereUniqueInput!, create: BpmnProcessCreateInput!, update: BpmnProcessUpdateInput!): BpmnProcess!
  updateManyBpmnTaskInstances(data: BpmnTaskInstanceUpdateInput!, where: BpmnTaskInstanceWhereInput): BatchPayload!
  updateManyLocalisations(data: LocalisationUpdateInput!, where: LocalisationWhereInput): BatchPayload!
  updateManyNotifications(data: NotificationUpdateInput!, where: NotificationWhereInput): BatchPayload!
  updateManyOrganisations(data: OrganisationUpdateInput!, where: OrganisationWhereInput): BatchPayload!
  updateManyRoles(data: RoleUpdateInput!, where: RoleWhereInput): BatchPayload!
  updateManyResources(data: ResourceUpdateInput!, where: ResourceWhereInput): BatchPayload!
  updateManyBpmnProcessInstances(data: BpmnProcessInstanceUpdateInput!, where: BpmnProcessInstanceWhereInput): BatchPayload!
  updateManyComments(data: CommentUpdateInput!, where: CommentWhereInput): BatchPayload!
  updateManyProcessResources(data: ProcessResourceUpdateInput!, where: ProcessResourceWhereInput): BatchPayload!
  updateManyLogs(data: LogUpdateInput!, where: LogWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManySchemas(data: SchemaUpdateInput!, where: SchemaWhereInput): BatchPayload!
  updateManyBpmnTasks(data: BpmnTaskUpdateInput!, where: BpmnTaskWhereInput): BatchPayload!
  updateManyDatas(data: DataUpdateInput!, where: DataWhereInput): BatchPayload!
  updateManyBpmnProcesses(data: BpmnProcessUpdateInput!, where: BpmnProcessWhereInput): BatchPayload!
  deleteManyBpmnTaskInstances(where: BpmnTaskInstanceWhereInput): BatchPayload!
  deleteManyLocalisations(where: LocalisationWhereInput): BatchPayload!
  deleteManyNotifications(where: NotificationWhereInput): BatchPayload!
  deleteManyOrganisations(where: OrganisationWhereInput): BatchPayload!
  deleteManyRoles(where: RoleWhereInput): BatchPayload!
  deleteManyResources(where: ResourceWhereInput): BatchPayload!
  deleteManyBpmnProcessInstances(where: BpmnProcessInstanceWhereInput): BatchPayload!
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  deleteManyProcessResources(where: ProcessResourceWhereInput): BatchPayload!
  deleteManyLogs(where: LogWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManySchemas(where: SchemaWhereInput): BatchPayload!
  deleteManyBpmnTasks(where: BpmnTaskWhereInput): BatchPayload!
  deleteManyDatas(where: DataWhereInput): BatchPayload!
  deleteManyBpmnProcesses(where: BpmnProcessWhereInput): BatchPayload!
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
  type: NotificationType!
  id: ID!
  userId: ID!
  user(where: UserWhereInput): User
  createdAt: DateTime!
  code: NotificationCode!
  text: String
  processInstanceId: ID!
  processInstance(where: BpmnProcessInstanceWhereInput): BpmnProcessInstance
  params: String
  visible: Boolean!
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

"""A connection to a list of items."""
type NotificationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [NotificationEdge]!
  aggregate: AggregateNotification!
}

input NotificationCreateInput {
  type: NotificationType!
  userId: ID!
  code: NotificationCode!
  text: String
  processInstanceId: ID!
  params: String
  visible: Boolean!
  user: UserCreateOneWithoutNotificationsInput
  processInstance: BpmnProcessInstanceCreateOneInput
}

input NotificationCreateManyWithoutUserInput {
  create: [NotificationCreateWithoutUserInput!]
  connect: [NotificationWhereUniqueInput!]
}

input NotificationCreateWithoutUserInput {
  type: NotificationType!
  userId: ID!
  code: NotificationCode!
  text: String
  processInstanceId: ID!
  params: String
  visible: Boolean!
  processInstance: BpmnProcessInstanceCreateOneInput
}

"""An edge in a connection."""
type NotificationEdge {
  """The item at the end of the edge."""
  node: Notification!

  """A cursor for use in pagination."""
  cursor: String!
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

type NotificationPreviousValues {
  type: NotificationType!
  id: ID!
  userId: ID!
  createdAt: DateTime!
  code: NotificationCode!
  text: String
  processInstanceId: ID!
  params: String
  visible: Boolean!
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

enum NotificationType {
  Info
  Error
  Warning
}

input NotificationUpdateInput {
  type: NotificationType
  userId: ID
  code: NotificationCode
  text: String
  processInstanceId: ID
  params: String
  visible: Boolean
  user: UserUpdateOneWithoutNotificationsInput
  processInstance: BpmnProcessInstanceUpdateOneInput
}

input NotificationUpdateManyWithoutUserInput {
  create: [NotificationCreateWithoutUserInput!]
  connect: [NotificationWhereUniqueInput!]
  disconnect: [NotificationWhereUniqueInput!]
  delete: [NotificationWhereUniqueInput!]
  update: [NotificationUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [NotificationUpsertWithWhereUniqueWithoutUserInput!]
}

input NotificationUpdateWithoutUserDataInput {
  type: NotificationType
  userId: ID
  code: NotificationCode
  text: String
  processInstanceId: ID
  params: String
  visible: Boolean
  processInstance: BpmnProcessInstanceUpdateOneInput
}

input NotificationUpdateWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput!
  data: NotificationUpdateWithoutUserDataInput!
}

input NotificationUpsertWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput!
  update: NotificationUpdateWithoutUserDataInput!
  create: NotificationCreateWithoutUserInput!
}

input NotificationWhereInput {
  """Logical AND on all given filters."""
  AND: [NotificationWhereInput!]

  """Logical OR on all given filters."""
  OR: [NotificationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [NotificationWhereInput!]
  type: NotificationType

  """All values that are not equal to given value."""
  type_not: NotificationType

  """All values that are contained in given list."""
  type_in: [NotificationType!]

  """All values that are not contained in given list."""
  type_not_in: [NotificationType!]
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
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  code: NotificationCode

  """All values that are not equal to given value."""
  code_not: NotificationCode

  """All values that are contained in given list."""
  code_in: [NotificationCode!]

  """All values that are not contained in given list."""
  code_not_in: [NotificationCode!]
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
  processInstanceId: ID

  """All values that are not equal to given value."""
  processInstanceId_not: ID

  """All values that are contained in given list."""
  processInstanceId_in: [ID!]

  """All values that are not contained in given list."""
  processInstanceId_not_in: [ID!]

  """All values less than the given value."""
  processInstanceId_lt: ID

  """All values less than or equal the given value."""
  processInstanceId_lte: ID

  """All values greater than the given value."""
  processInstanceId_gt: ID

  """All values greater than or equal the given value."""
  processInstanceId_gte: ID

  """All values containing the given string."""
  processInstanceId_contains: ID

  """All values not containing the given string."""
  processInstanceId_not_contains: ID

  """All values starting with the given string."""
  processInstanceId_starts_with: ID

  """All values not starting with the given string."""
  processInstanceId_not_starts_with: ID

  """All values ending with the given string."""
  processInstanceId_ends_with: ID

  """All values not ending with the given string."""
  processInstanceId_not_ends_with: ID
  params: String

  """All values that are not equal to given value."""
  params_not: String

  """All values that are contained in given list."""
  params_in: [String!]

  """All values that are not contained in given list."""
  params_not_in: [String!]

  """All values less than the given value."""
  params_lt: String

  """All values less than or equal the given value."""
  params_lte: String

  """All values greater than the given value."""
  params_gt: String

  """All values greater than or equal the given value."""
  params_gte: String

  """All values containing the given string."""
  params_contains: String

  """All values not containing the given string."""
  params_not_contains: String

  """All values starting with the given string."""
  params_starts_with: String

  """All values not starting with the given string."""
  params_not_starts_with: String

  """All values ending with the given string."""
  params_ends_with: String

  """All values not ending with the given string."""
  params_not_ends_with: String
  visible: Boolean

  """All values that are not equal to given value."""
  visible_not: Boolean
  user: UserWhereInput
  processInstance: BpmnProcessInstanceWhereInput
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

type ProcessResource implements Node {
  id: ID!
  resourceId: ID!
  resource(where: ResourceWhereInput): Resource
  readRole: String
}

"""A connection to a list of items."""
type ProcessResourceConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ProcessResourceEdge]!
  aggregate: AggregateProcessResource!
}

input ProcessResourceCreateInput {
  resourceId: ID!
  readRole: String
  resource: ResourceCreateOneInput
}

input ProcessResourceCreateManyInput {
  create: [ProcessResourceCreateInput!]
  connect: [ProcessResourceWhereUniqueInput!]
}

"""An edge in a connection."""
type ProcessResourceEdge {
  """The item at the end of the edge."""
  node: ProcessResource!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ProcessResourceOrderByInput {
  id_ASC
  id_DESC
  resourceId_ASC
  resourceId_DESC
  readRole_ASC
  readRole_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ProcessResourcePreviousValues {
  id: ID!
  resourceId: ID!
  readRole: String
}

type ProcessResourceSubscriptionPayload {
  mutation: MutationType!
  node: ProcessResource
  updatedFields: [String!]
  previousValues: ProcessResourcePreviousValues
}

input ProcessResourceSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ProcessResourceSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProcessResourceSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProcessResourceSubscriptionWhereInput!]

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
  node: ProcessResourceWhereInput
}

input ProcessResourceUpdateDataInput {
  resourceId: ID
  readRole: String
  resource: ResourceUpdateOneInput
}

input ProcessResourceUpdateInput {
  resourceId: ID
  readRole: String
  resource: ResourceUpdateOneInput
}

input ProcessResourceUpdateManyInput {
  create: [ProcessResourceCreateInput!]
  connect: [ProcessResourceWhereUniqueInput!]
  disconnect: [ProcessResourceWhereUniqueInput!]
  delete: [ProcessResourceWhereUniqueInput!]
  update: [ProcessResourceUpdateWithWhereUniqueNestedInput!]
  upsert: [ProcessResourceUpsertWithWhereUniqueNestedInput!]
}

input ProcessResourceUpdateWithWhereUniqueNestedInput {
  where: ProcessResourceWhereUniqueInput!
  data: ProcessResourceUpdateDataInput!
}

input ProcessResourceUpsertWithWhereUniqueNestedInput {
  where: ProcessResourceWhereUniqueInput!
  update: ProcessResourceUpdateDataInput!
  create: ProcessResourceCreateInput!
}

input ProcessResourceWhereInput {
  """Logical AND on all given filters."""
  AND: [ProcessResourceWhereInput!]

  """Logical OR on all given filters."""
  OR: [ProcessResourceWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ProcessResourceWhereInput!]
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
  resourceId: ID

  """All values that are not equal to given value."""
  resourceId_not: ID

  """All values that are contained in given list."""
  resourceId_in: [ID!]

  """All values that are not contained in given list."""
  resourceId_not_in: [ID!]

  """All values less than the given value."""
  resourceId_lt: ID

  """All values less than or equal the given value."""
  resourceId_lte: ID

  """All values greater than the given value."""
  resourceId_gt: ID

  """All values greater than or equal the given value."""
  resourceId_gte: ID

  """All values containing the given string."""
  resourceId_contains: ID

  """All values not containing the given string."""
  resourceId_not_contains: ID

  """All values starting with the given string."""
  resourceId_starts_with: ID

  """All values not starting with the given string."""
  resourceId_not_starts_with: ID

  """All values ending with the given string."""
  resourceId_ends_with: ID

  """All values not ending with the given string."""
  resourceId_not_ends_with: ID
  readRole: String

  """All values that are not equal to given value."""
  readRole_not: String

  """All values that are contained in given list."""
  readRole_in: [String!]

  """All values that are not contained in given list."""
  readRole_not_in: [String!]

  """All values less than the given value."""
  readRole_lt: String

  """All values less than or equal the given value."""
  readRole_lte: String

  """All values greater than the given value."""
  readRole_gt: String

  """All values greater than or equal the given value."""
  readRole_gte: String

  """All values containing the given string."""
  readRole_contains: String

  """All values not containing the given string."""
  readRole_not_contains: String

  """All values starting with the given string."""
  readRole_starts_with: String

  """All values not starting with the given string."""
  readRole_not_starts_with: String

  """All values ending with the given string."""
  readRole_ends_with: String

  """All values not ending with the given string."""
  readRole_not_ends_with: String
  resource: ResourceWhereInput
  _MagicalBackRelation_BpmnProcessResources_every: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessResources_some: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessResources_none: BpmnProcessWhereInput
}

input ProcessResourceWhereUniqueInput {
  id: ID
}

enum PublicationStatus {
  Draft
  Proposal
  Published
}

type Query {
  bpmnTaskInstances(where: BpmnTaskInstanceWhereInput, orderBy: BpmnTaskInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BpmnTaskInstance]!
  localisations(where: LocalisationWhereInput, orderBy: LocalisationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Localisation]!
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification]!
  organisations(where: OrganisationWhereInput, orderBy: OrganisationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Organisation]!
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role]!
  resources(where: ResourceWhereInput, orderBy: ResourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Resource]!
  bpmnProcessInstances(where: BpmnProcessInstanceWhereInput, orderBy: BpmnProcessInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BpmnProcessInstance]!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  processResources(where: ProcessResourceWhereInput, orderBy: ProcessResourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ProcessResource]!
  logs(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Log]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  schemas(where: SchemaWhereInput, orderBy: SchemaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Schema]!
  bpmnTasks(where: BpmnTaskWhereInput, orderBy: BpmnTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BpmnTask]!
  datas(where: DataWhereInput, orderBy: DataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Data]!
  bpmnProcesses(where: BpmnProcessWhereInput, orderBy: BpmnProcessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BpmnProcess]!
  bpmnTaskInstance(where: BpmnTaskInstanceWhereUniqueInput!): BpmnTaskInstance
  localisation(where: LocalisationWhereUniqueInput!): Localisation
  notification(where: NotificationWhereUniqueInput!): Notification
  organisation(where: OrganisationWhereUniqueInput!): Organisation
  role(where: RoleWhereUniqueInput!): Role
  resource(where: ResourceWhereUniqueInput!): Resource
  bpmnProcessInstance(where: BpmnProcessInstanceWhereUniqueInput!): BpmnProcessInstance
  comment(where: CommentWhereUniqueInput!): Comment
  processResource(where: ProcessResourceWhereUniqueInput!): ProcessResource
  log(where: LogWhereUniqueInput!): Log
  user(where: UserWhereUniqueInput!): User
  schema(where: SchemaWhereUniqueInput!): Schema
  bpmnTask(where: BpmnTaskWhereUniqueInput!): BpmnTask
  data(where: DataWhereUniqueInput!): Data
  bpmnProcess(where: BpmnProcessWhereUniqueInput!): BpmnProcess
  bpmnTaskInstancesConnection(where: BpmnTaskInstanceWhereInput, orderBy: BpmnTaskInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BpmnTaskInstanceConnection!
  localisationsConnection(where: LocalisationWhereInput, orderBy: LocalisationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocalisationConnection!
  notificationsConnection(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NotificationConnection!
  organisationsConnection(where: OrganisationWhereInput, orderBy: OrganisationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrganisationConnection!
  rolesConnection(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoleConnection!
  resourcesConnection(where: ResourceWhereInput, orderBy: ResourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ResourceConnection!
  bpmnProcessInstancesConnection(where: BpmnProcessInstanceWhereInput, orderBy: BpmnProcessInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BpmnProcessInstanceConnection!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  processResourcesConnection(where: ProcessResourceWhereInput, orderBy: ProcessResourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProcessResourceConnection!
  logsConnection(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LogConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  schemasConnection(where: SchemaWhereInput, orderBy: SchemaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SchemaConnection!
  bpmnTasksConnection(where: BpmnTaskWhereInput, orderBy: BpmnTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BpmnTaskConnection!
  datasConnection(where: DataWhereInput, orderBy: DataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DataConnection!
  bpmnProcessesConnection(where: BpmnProcessWhereInput, orderBy: BpmnProcessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BpmnProcessConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Resource implements Node {
  id: ID!
  resourceId: ID!
  type: ResourceType!
  title: String!
  content: String!
  version: Int!
  publicationStatus: PublicationStatus!
  createdById: ID!
  updatedById: ID
  readRole: String
  readUser: String
  writeRole: String
  writeUser: String
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
  resourceId: ID!
  type: ResourceType!
  title: String!
  content: String!
  version: Int!
  publicationStatus: PublicationStatus!
  createdById: ID!
  updatedById: ID
  readRole: String
  readUser: String
  writeRole: String
  writeUser: String
}

input ResourceCreateManyInput {
  create: [ResourceCreateInput!]
  connect: [ResourceWhereUniqueInput!]
}

input ResourceCreateOneInput {
  create: ResourceCreateInput
  connect: ResourceWhereUniqueInput
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
  resourceId_ASC
  resourceId_DESC
  type_ASC
  type_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
  version_ASC
  version_DESC
  publicationStatus_ASC
  publicationStatus_DESC
  createdById_ASC
  createdById_DESC
  updatedById_ASC
  updatedById_DESC
  readRole_ASC
  readRole_DESC
  readUser_ASC
  readUser_DESC
  writeRole_ASC
  writeRole_DESC
  writeUser_ASC
  writeUser_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ResourcePreviousValues {
  id: ID!
  resourceId: ID!
  type: ResourceType!
  title: String!
  content: String!
  version: Int!
  publicationStatus: PublicationStatus!
  createdById: ID!
  updatedById: ID
  readRole: String
  readUser: String
  writeRole: String
  writeUser: String
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
  Document
}

input ResourceUpdateDataInput {
  resourceId: ID
  type: ResourceType
  title: String
  content: String
  version: Int
  publicationStatus: PublicationStatus
  createdById: ID
  updatedById: ID
  readRole: String
  readUser: String
  writeRole: String
  writeUser: String
}

input ResourceUpdateInput {
  resourceId: ID
  type: ResourceType
  title: String
  content: String
  version: Int
  publicationStatus: PublicationStatus
  createdById: ID
  updatedById: ID
  readRole: String
  readUser: String
  writeRole: String
  writeUser: String
}

input ResourceUpdateManyInput {
  create: [ResourceCreateInput!]
  connect: [ResourceWhereUniqueInput!]
  disconnect: [ResourceWhereUniqueInput!]
  delete: [ResourceWhereUniqueInput!]
  update: [ResourceUpdateWithWhereUniqueNestedInput!]
  upsert: [ResourceUpsertWithWhereUniqueNestedInput!]
}

input ResourceUpdateOneInput {
  create: ResourceCreateInput
  connect: ResourceWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ResourceUpdateDataInput
  upsert: ResourceUpsertNestedInput
}

input ResourceUpdateWithWhereUniqueNestedInput {
  where: ResourceWhereUniqueInput!
  data: ResourceUpdateDataInput!
}

input ResourceUpsertNestedInput {
  update: ResourceUpdateDataInput!
  create: ResourceCreateInput!
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
  resourceId: ID

  """All values that are not equal to given value."""
  resourceId_not: ID

  """All values that are contained in given list."""
  resourceId_in: [ID!]

  """All values that are not contained in given list."""
  resourceId_not_in: [ID!]

  """All values less than the given value."""
  resourceId_lt: ID

  """All values less than or equal the given value."""
  resourceId_lte: ID

  """All values greater than the given value."""
  resourceId_gt: ID

  """All values greater than or equal the given value."""
  resourceId_gte: ID

  """All values containing the given string."""
  resourceId_contains: ID

  """All values not containing the given string."""
  resourceId_not_contains: ID

  """All values starting with the given string."""
  resourceId_starts_with: ID

  """All values not starting with the given string."""
  resourceId_not_starts_with: ID

  """All values ending with the given string."""
  resourceId_ends_with: ID

  """All values not ending with the given string."""
  resourceId_not_ends_with: ID
  type: ResourceType

  """All values that are not equal to given value."""
  type_not: ResourceType

  """All values that are contained in given list."""
  type_in: [ResourceType!]

  """All values that are not contained in given list."""
  type_not_in: [ResourceType!]
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
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
  publicationStatus: PublicationStatus

  """All values that are not equal to given value."""
  publicationStatus_not: PublicationStatus

  """All values that are contained in given list."""
  publicationStatus_in: [PublicationStatus!]

  """All values that are not contained in given list."""
  publicationStatus_not_in: [PublicationStatus!]
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
  updatedById: ID

  """All values that are not equal to given value."""
  updatedById_not: ID

  """All values that are contained in given list."""
  updatedById_in: [ID!]

  """All values that are not contained in given list."""
  updatedById_not_in: [ID!]

  """All values less than the given value."""
  updatedById_lt: ID

  """All values less than or equal the given value."""
  updatedById_lte: ID

  """All values greater than the given value."""
  updatedById_gt: ID

  """All values greater than or equal the given value."""
  updatedById_gte: ID

  """All values containing the given string."""
  updatedById_contains: ID

  """All values not containing the given string."""
  updatedById_not_contains: ID

  """All values starting with the given string."""
  updatedById_starts_with: ID

  """All values not starting with the given string."""
  updatedById_not_starts_with: ID

  """All values ending with the given string."""
  updatedById_ends_with: ID

  """All values not ending with the given string."""
  updatedById_not_ends_with: ID
  readRole: String

  """All values that are not equal to given value."""
  readRole_not: String

  """All values that are contained in given list."""
  readRole_in: [String!]

  """All values that are not contained in given list."""
  readRole_not_in: [String!]

  """All values less than the given value."""
  readRole_lt: String

  """All values less than or equal the given value."""
  readRole_lte: String

  """All values greater than the given value."""
  readRole_gt: String

  """All values greater than or equal the given value."""
  readRole_gte: String

  """All values containing the given string."""
  readRole_contains: String

  """All values not containing the given string."""
  readRole_not_contains: String

  """All values starting with the given string."""
  readRole_starts_with: String

  """All values not starting with the given string."""
  readRole_not_starts_with: String

  """All values ending with the given string."""
  readRole_ends_with: String

  """All values not ending with the given string."""
  readRole_not_ends_with: String
  readUser: String

  """All values that are not equal to given value."""
  readUser_not: String

  """All values that are contained in given list."""
  readUser_in: [String!]

  """All values that are not contained in given list."""
  readUser_not_in: [String!]

  """All values less than the given value."""
  readUser_lt: String

  """All values less than or equal the given value."""
  readUser_lte: String

  """All values greater than the given value."""
  readUser_gt: String

  """All values greater than or equal the given value."""
  readUser_gte: String

  """All values containing the given string."""
  readUser_contains: String

  """All values not containing the given string."""
  readUser_not_contains: String

  """All values starting with the given string."""
  readUser_starts_with: String

  """All values not starting with the given string."""
  readUser_not_starts_with: String

  """All values ending with the given string."""
  readUser_ends_with: String

  """All values not ending with the given string."""
  readUser_not_ends_with: String
  writeRole: String

  """All values that are not equal to given value."""
  writeRole_not: String

  """All values that are contained in given list."""
  writeRole_in: [String!]

  """All values that are not contained in given list."""
  writeRole_not_in: [String!]

  """All values less than the given value."""
  writeRole_lt: String

  """All values less than or equal the given value."""
  writeRole_lte: String

  """All values greater than the given value."""
  writeRole_gt: String

  """All values greater than or equal the given value."""
  writeRole_gte: String

  """All values containing the given string."""
  writeRole_contains: String

  """All values not containing the given string."""
  writeRole_not_contains: String

  """All values starting with the given string."""
  writeRole_starts_with: String

  """All values not starting with the given string."""
  writeRole_not_starts_with: String

  """All values ending with the given string."""
  writeRole_ends_with: String

  """All values not ending with the given string."""
  writeRole_not_ends_with: String
  writeUser: String

  """All values that are not equal to given value."""
  writeUser_not: String

  """All values that are contained in given list."""
  writeUser_in: [String!]

  """All values that are not contained in given list."""
  writeUser_not_in: [String!]

  """All values less than the given value."""
  writeUser_lt: String

  """All values less than or equal the given value."""
  writeUser_lte: String

  """All values greater than the given value."""
  writeUser_gt: String

  """All values greater than or equal the given value."""
  writeUser_gte: String

  """All values containing the given string."""
  writeUser_contains: String

  """All values not containing the given string."""
  writeUser_not_contains: String

  """All values starting with the given string."""
  writeUser_starts_with: String

  """All values not starting with the given string."""
  writeUser_not_starts_with: String

  """All values ending with the given string."""
  writeUser_ends_with: String

  """All values not ending with the given string."""
  writeUser_not_ends_with: String
  _MagicalBackRelation_ProcessResourceToResource_every: ProcessResourceWhereInput
  _MagicalBackRelation_ProcessResourceToResource_some: ProcessResourceWhereInput
  _MagicalBackRelation_ProcessResourceToResource_none: ProcessResourceWhereInput
  _MagicalBackRelation_BpmnTaskToResource_every: BpmnTaskWhereInput
  _MagicalBackRelation_BpmnTaskToResource_some: BpmnTaskWhereInput
  _MagicalBackRelation_BpmnTaskToResource_none: BpmnTaskWhereInput
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

type Schema implements Node {
  id: ID!
  name: String!
  description: String!
  schema: Json!
  version: Int
  date: DateTime
}

"""A connection to a list of items."""
type SchemaConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SchemaEdge]!
  aggregate: AggregateSchema!
}

input SchemaCreateInput {
  name: String!
  description: String!
  schema: Json!
  version: Int
  date: DateTime
}

input SchemaCreateOneInput {
  create: SchemaCreateInput
  connect: SchemaWhereUniqueInput
}

"""An edge in a connection."""
type SchemaEdge {
  """The item at the end of the edge."""
  node: Schema!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SchemaOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  schema_ASC
  schema_DESC
  version_ASC
  version_DESC
  date_ASC
  date_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type SchemaPreviousValues {
  id: ID!
  name: String!
  description: String!
  schema: Json!
  version: Int
  date: DateTime
}

type SchemaSubscriptionPayload {
  mutation: MutationType!
  node: Schema
  updatedFields: [String!]
  previousValues: SchemaPreviousValues
}

input SchemaSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SchemaSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SchemaSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SchemaSubscriptionWhereInput!]

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
  node: SchemaWhereInput
}

input SchemaUpdateDataInput {
  name: String
  description: String
  schema: Json
  version: Int
  date: DateTime
}

input SchemaUpdateInput {
  name: String
  description: String
  schema: Json
  version: Int
  date: DateTime
}

input SchemaUpdateOneInput {
  create: SchemaCreateInput
  connect: SchemaWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: SchemaUpdateDataInput
  upsert: SchemaUpsertNestedInput
}

input SchemaUpsertNestedInput {
  update: SchemaUpdateDataInput!
  create: SchemaCreateInput!
}

input SchemaWhereInput {
  """Logical AND on all given filters."""
  AND: [SchemaWhereInput!]

  """Logical OR on all given filters."""
  OR: [SchemaWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SchemaWhereInput!]
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
  _MagicalBackRelation_DataSchema_every: DataWhereInput
  _MagicalBackRelation_DataSchema_some: DataWhereInput
  _MagicalBackRelation_DataSchema_none: DataWhereInput
}

input SchemaWhereUniqueInput {
  id: ID
  name: String
}

type Subscription {
  bpmnTaskInstance(where: BpmnTaskInstanceSubscriptionWhereInput): BpmnTaskInstanceSubscriptionPayload
  localisation(where: LocalisationSubscriptionWhereInput): LocalisationSubscriptionPayload
  notification(where: NotificationSubscriptionWhereInput): NotificationSubscriptionPayload
  organisation(where: OrganisationSubscriptionWhereInput): OrganisationSubscriptionPayload
  role(where: RoleSubscriptionWhereInput): RoleSubscriptionPayload
  resource(where: ResourceSubscriptionWhereInput): ResourceSubscriptionPayload
  bpmnProcessInstance(where: BpmnProcessInstanceSubscriptionWhereInput): BpmnProcessInstanceSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  processResource(where: ProcessResourceSubscriptionWhereInput): ProcessResourceSubscriptionPayload
  log(where: LogSubscriptionWhereInput): LogSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  schema(where: SchemaSubscriptionWhereInput): SchemaSubscriptionPayload
  bpmnTask(where: BpmnTaskSubscriptionWhereInput): BpmnTaskSubscriptionPayload
  data(where: DataSubscriptionWhereInput): DataSubscriptionPayload
  bpmnProcess(where: BpmnProcessSubscriptionWhereInput): BpmnProcessSubscriptionPayload
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

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  uid: String!
  name: String!
  description: String
  password: String!
  roles: UserCreaterolesInput
  notifications: NotificationCreateManyWithoutUserInput
  processes: BpmnProcessInstanceCreateManyWithoutOwnerInput
  data: DataCreateManyInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutNotificationsInput {
  create: UserCreateWithoutNotificationsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutProcessesInput {
  create: UserCreateWithoutProcessesInput
  connect: UserWhereUniqueInput
}

input UserCreaterolesInput {
  set: [ID!]
}

input UserCreateWithoutNotificationsInput {
  uid: String!
  name: String!
  description: String
  password: String!
  roles: UserCreaterolesInput
  processes: BpmnProcessInstanceCreateManyWithoutOwnerInput
  data: DataCreateManyInput
}

input UserCreateWithoutProcessesInput {
  uid: String!
  name: String!
  description: String
  password: String!
  roles: UserCreaterolesInput
  notifications: NotificationCreateManyWithoutUserInput
  data: DataCreateManyInput
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
  uid_ASC
  uid_DESC
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
  uid: String!
  name: String!
  roles: [ID!]!
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

input UserUpdateDataInput {
  uid: String
  name: String
  description: String
  password: String
  roles: UserUpdaterolesInput
  notifications: NotificationUpdateManyWithoutUserInput
  processes: BpmnProcessInstanceUpdateManyWithoutOwnerInput
  data: DataUpdateManyInput
}

input UserUpdateInput {
  uid: String
  name: String
  description: String
  password: String
  roles: UserUpdaterolesInput
  notifications: NotificationUpdateManyWithoutUserInput
  processes: BpmnProcessInstanceUpdateManyWithoutOwnerInput
  data: DataUpdateManyInput
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneWithoutNotificationsInput {
  create: UserCreateWithoutNotificationsInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutNotificationsDataInput
  upsert: UserUpsertWithoutNotificationsInput
}

input UserUpdateOneWithoutProcessesInput {
  create: UserCreateWithoutProcessesInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutProcessesDataInput
  upsert: UserUpsertWithoutProcessesInput
}

input UserUpdaterolesInput {
  set: [ID!]
}

input UserUpdateWithoutNotificationsDataInput {
  uid: String
  name: String
  description: String
  password: String
  roles: UserUpdaterolesInput
  processes: BpmnProcessInstanceUpdateManyWithoutOwnerInput
  data: DataUpdateManyInput
}

input UserUpdateWithoutProcessesDataInput {
  uid: String
  name: String
  description: String
  password: String
  roles: UserUpdaterolesInput
  notifications: NotificationUpdateManyWithoutUserInput
  data: DataUpdateManyInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutNotificationsInput {
  update: UserUpdateWithoutNotificationsDataInput!
  create: UserCreateWithoutNotificationsInput!
}

input UserUpsertWithoutProcessesInput {
  update: UserUpdateWithoutProcessesDataInput!
  create: UserCreateWithoutProcessesInput!
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
  uid: String

  """All values that are not equal to given value."""
  uid_not: String

  """All values that are contained in given list."""
  uid_in: [String!]

  """All values that are not contained in given list."""
  uid_not_in: [String!]

  """All values less than the given value."""
  uid_lt: String

  """All values less than or equal the given value."""
  uid_lte: String

  """All values greater than the given value."""
  uid_gt: String

  """All values greater than or equal the given value."""
  uid_gte: String

  """All values containing the given string."""
  uid_contains: String

  """All values not containing the given string."""
  uid_not_contains: String

  """All values starting with the given string."""
  uid_starts_with: String

  """All values not starting with the given string."""
  uid_not_starts_with: String

  """All values ending with the given string."""
  uid_ends_with: String

  """All values not ending with the given string."""
  uid_not_ends_with: String
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
  processes_every: BpmnProcessInstanceWhereInput
  processes_some: BpmnProcessInstanceWhereInput
  processes_none: BpmnProcessInstanceWhereInput
  data_every: DataWhereInput
  data_some: DataWhereInput
  data_none: DataWhereInput
  _MagicalBackRelation_CommentToUser_every: CommentWhereInput
  _MagicalBackRelation_CommentToUser_some: CommentWhereInput
  _MagicalBackRelation_CommentToUser_none: CommentWhereInput
  _MagicalBackRelation_LogToUser_every: LogWhereInput
  _MagicalBackRelation_LogToUser_some: LogWhereInput
  _MagicalBackRelation_LogToUser_none: LogWhereInput
  _MagicalBackRelation_UserTasks_every: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_UserTasks_some: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_UserTasks_none: BpmnTaskInstanceWhereInput
}

input UserWhereUniqueInput {
  id: ID
  uid: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type LanguageCode =   'EN'

export type NotificationOrderByInput =   'type_ASC' |
  'type_DESC' |
  'id_ASC' |
  'id_DESC' |
  'userId_ASC' |
  'userId_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'code_ASC' |
  'code_DESC' |
  'text_ASC' |
  'text_DESC' |
  'processInstanceId_ASC' |
  'processInstanceId_DESC' |
  'params_ASC' |
  'params_DESC' |
  'visible_ASC' |
  'visible_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type DataOrderByInput =   'id_ASC' |
  'id_DESC' |
  'schemaId_ASC' |
  'schemaId_DESC' |
  'version_ASC' |
  'version_DESC' |
  'date_ASC' |
  'date_DESC' |
  'value_ASC' |
  'value_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BpmnProcessOrderByInput =   'id_ASC' |
  'id_DESC' |
  'processID_ASC' |
  'processID_DESC' |
  'actionCount_ASC' |
  'actionCount_DESC' |
  'schema_ASC' |
  'schema_DESC' |
  'description_ASC' |
  'description_DESC' |
  'model_ASC' |
  'model_DESC' |
  'name_ASC' |
  'name_DESC' |
  'type_ASC' |
  'type_DESC' |
  'publicationStatus_ASC' |
  'publicationStatus_DESC' |
  'version_ASC' |
  'version_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'createdById_ASC' |
  'createdById_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'updatedById_ASC' |
  'updatedById_DESC' |
  'readRole_ASC' |
  'readRole_DESC' |
  'readUser_ASC' |
  'readUser_DESC' |
  'writeRole_ASC' |
  'writeRole_DESC' |
  'writeUser_ASC' |
  'writeUser_DESC' |
  'executeRole_ASC' |
  'executeRole_DESC' |
  'executeUser_ASC' |
  'executeUser_DESC'

export type PublicationStatus =   'Draft' |
  'Proposal' |
  'Published'

export type SchemaOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'schema_ASC' |
  'schema_DESC' |
  'version_ASC' |
  'version_DESC' |
  'date_ASC' |
  'date_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BpmnProcessInstanceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'dateFinished_ASC' |
  'dateFinished_DESC' |
  'dateStarted_ASC' |
  'dateStarted_DESC' |
  'duration_ASC' |
  'duration_DESC' |
  'ownerId_ASC' |
  'ownerId_DESC' |
  'processId_ASC' |
  'processId_DESC' |
  'data_ASC' |
  'data_DESC' |
  'status_ASC' |
  'status_DESC' |
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

export type BpmnTaskType =   'Form'

export type NotificationCode =   'ProcessStarted' |
  'ProcessFinished' |
  'ProcessAborted' |
  'ActionStarted' |
  'ActionFinished' |
  'ActionAborted' |
  'ActionRequired'

export type LogOrderByInput =   'id_ASC' |
  'id_DESC' |
  'elementId_ASC' |
  'elementId_DESC' |
  'elementName_ASC' |
  'elementName_DESC' |
  'date_ASC' |
  'date_DESC' |
  'taskInstanceId_ASC' |
  'taskInstanceId_DESC' |
  'status_ASC' |
  'status_DESC' |
  'message_ASC' |
  'message_DESC' |
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

export type ResourceType =   'Url' |
  'File' |
  'Form' |
  'Document'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type ProcessResourceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'resourceId_ASC' |
  'resourceId_DESC' |
  'readRole_ASC' |
  'readRole_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'uid_ASC' |
  'uid_DESC' |
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

export type BpmnTaskInstanceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'dateFinished_ASC' |
  'dateFinished_DESC' |
  'dateStarted_ASC' |
  'dateStarted_DESC' |
  'duration_ASC' |
  'duration_DESC' |
  'performerId_ASC' |
  'performerId_DESC' |
  'performerRoleId_ASC' |
  'performerRoleId_DESC' |
  'performerRole_ASC' |
  'performerRole_DESC' |
  'data_ASC' |
  'data_DESC' |
  'status_ASC' |
  'status_DESC' |
  'taskId_ASC' |
  'taskId_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type CommentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'text_ASC' |
  'text_DESC' |
  'userId_ASC' |
  'userId_DESC' |
  'date_ASC' |
  'date_DESC' |
  'replyTo_ASC' |
  'replyTo_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BpmnTaskOrderByInput =   'id_ASC' |
  'id_DESC' |
  'taskId_ASC' |
  'taskId_DESC' |
  'name_ASC' |
  'name_DESC' |
  'type_ASC' |
  'type_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ResourceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'resourceId_ASC' |
  'resourceId_DESC' |
  'type_ASC' |
  'type_DESC' |
  'title_ASC' |
  'title_DESC' |
  'content_ASC' |
  'content_DESC' |
  'version_ASC' |
  'version_DESC' |
  'publicationStatus_ASC' |
  'publicationStatus_DESC' |
  'createdById_ASC' |
  'createdById_DESC' |
  'updatedById_ASC' |
  'updatedById_DESC' |
  'readRole_ASC' |
  'readRole_DESC' |
  'readUser_ASC' |
  'readUser_DESC' |
  'writeRole_ASC' |
  'writeRole_DESC' |
  'writeUser_ASC' |
  'writeUser_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type NotificationType =   'Info' |
  'Error' |
  'Warning'

export type BpmnTaskInstanceStatus =   'Started' |
  'Paused' |
  'Aborted' |
  'Finished' |
  'Approved' |
  'Rejected'

export type BpmnProcessInstanceStatus =   'Running' |
  'Finished' |
  'Aborted' |
  'Paused'

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

export interface ProcessResourceCreateManyInput {
  create?: ProcessResourceCreateInput[] | ProcessResourceCreateInput
  connect?: ProcessResourceWhereUniqueInput[] | ProcessResourceWhereUniqueInput
}

export interface BpmnTaskInstanceWhereInput {
  AND?: BpmnTaskInstanceWhereInput[] | BpmnTaskInstanceWhereInput
  OR?: BpmnTaskInstanceWhereInput[] | BpmnTaskInstanceWhereInput
  NOT?: BpmnTaskInstanceWhereInput[] | BpmnTaskInstanceWhereInput
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
  dateFinished?: DateTime
  dateFinished_not?: DateTime
  dateFinished_in?: DateTime[] | DateTime
  dateFinished_not_in?: DateTime[] | DateTime
  dateFinished_lt?: DateTime
  dateFinished_lte?: DateTime
  dateFinished_gt?: DateTime
  dateFinished_gte?: DateTime
  dateStarted?: DateTime
  dateStarted_not?: DateTime
  dateStarted_in?: DateTime[] | DateTime
  dateStarted_not_in?: DateTime[] | DateTime
  dateStarted_lt?: DateTime
  dateStarted_lte?: DateTime
  dateStarted_gt?: DateTime
  dateStarted_gte?: DateTime
  duration?: Int
  duration_not?: Int
  duration_in?: Int[] | Int
  duration_not_in?: Int[] | Int
  duration_lt?: Int
  duration_lte?: Int
  duration_gt?: Int
  duration_gte?: Int
  performerId?: ID_Input
  performerId_not?: ID_Input
  performerId_in?: ID_Input[] | ID_Input
  performerId_not_in?: ID_Input[] | ID_Input
  performerId_lt?: ID_Input
  performerId_lte?: ID_Input
  performerId_gt?: ID_Input
  performerId_gte?: ID_Input
  performerId_contains?: ID_Input
  performerId_not_contains?: ID_Input
  performerId_starts_with?: ID_Input
  performerId_not_starts_with?: ID_Input
  performerId_ends_with?: ID_Input
  performerId_not_ends_with?: ID_Input
  performerRoleId?: ID_Input
  performerRoleId_not?: ID_Input
  performerRoleId_in?: ID_Input[] | ID_Input
  performerRoleId_not_in?: ID_Input[] | ID_Input
  performerRoleId_lt?: ID_Input
  performerRoleId_lte?: ID_Input
  performerRoleId_gt?: ID_Input
  performerRoleId_gte?: ID_Input
  performerRoleId_contains?: ID_Input
  performerRoleId_not_contains?: ID_Input
  performerRoleId_starts_with?: ID_Input
  performerRoleId_not_starts_with?: ID_Input
  performerRoleId_ends_with?: ID_Input
  performerRoleId_not_ends_with?: ID_Input
  performerRole?: ID_Input
  performerRole_not?: ID_Input
  performerRole_in?: ID_Input[] | ID_Input
  performerRole_not_in?: ID_Input[] | ID_Input
  performerRole_lt?: ID_Input
  performerRole_lte?: ID_Input
  performerRole_gt?: ID_Input
  performerRole_gte?: ID_Input
  performerRole_contains?: ID_Input
  performerRole_not_contains?: ID_Input
  performerRole_starts_with?: ID_Input
  performerRole_not_starts_with?: ID_Input
  performerRole_ends_with?: ID_Input
  performerRole_not_ends_with?: ID_Input
  status?: BpmnTaskInstanceStatus
  status_not?: BpmnTaskInstanceStatus
  status_in?: BpmnTaskInstanceStatus[] | BpmnTaskInstanceStatus
  status_not_in?: BpmnTaskInstanceStatus[] | BpmnTaskInstanceStatus
  taskId?: ID_Input
  taskId_not?: ID_Input
  taskId_in?: ID_Input[] | ID_Input
  taskId_not_in?: ID_Input[] | ID_Input
  taskId_lt?: ID_Input
  taskId_lte?: ID_Input
  taskId_gt?: ID_Input
  taskId_gte?: ID_Input
  taskId_contains?: ID_Input
  taskId_not_contains?: ID_Input
  taskId_starts_with?: ID_Input
  taskId_not_starts_with?: ID_Input
  taskId_ends_with?: ID_Input
  taskId_not_ends_with?: ID_Input
  performer?: UserWhereInput
  processInstance?: BpmnProcessInstanceWhereInput
  task?: BpmnTaskWhereInput
}

export interface LogUpdateWithWhereUniqueNestedInput {
  where: LogWhereUniqueInput
  data: LogUpdateDataInput
}

export interface BpmnTaskUpdateManyInput {
  create?: BpmnTaskCreateInput[] | BpmnTaskCreateInput
  connect?: BpmnTaskWhereUniqueInput[] | BpmnTaskWhereUniqueInput
  disconnect?: BpmnTaskWhereUniqueInput[] | BpmnTaskWhereUniqueInput
  delete?: BpmnTaskWhereUniqueInput[] | BpmnTaskWhereUniqueInput
  update?: BpmnTaskUpdateWithWhereUniqueNestedInput[] | BpmnTaskUpdateWithWhereUniqueNestedInput
  upsert?: BpmnTaskUpsertWithWhereUniqueNestedInput[] | BpmnTaskUpsertWithWhereUniqueNestedInput
}

export interface LogUpdateManyInput {
  create?: LogCreateInput[] | LogCreateInput
  connect?: LogWhereUniqueInput[] | LogWhereUniqueInput
  disconnect?: LogWhereUniqueInput[] | LogWhereUniqueInput
  delete?: LogWhereUniqueInput[] | LogWhereUniqueInput
  update?: LogUpdateWithWhereUniqueNestedInput[] | LogUpdateWithWhereUniqueNestedInput
  upsert?: LogUpsertWithWhereUniqueNestedInput[] | LogUpsertWithWhereUniqueNestedInput
}

export interface NotificationCreateInput {
  type: NotificationType
  userId: ID_Input
  code: NotificationCode
  text?: String
  processInstanceId: ID_Input
  params?: String
  visible: Boolean
  user?: UserCreateOneWithoutNotificationsInput
  processInstance?: BpmnProcessInstanceCreateOneInput
}

export interface BpmnProcessUpsertNestedInput {
  update: BpmnProcessUpdateDataInput
  create: BpmnProcessCreateInput
}

export interface DataSubscriptionWhereInput {
  AND?: DataSubscriptionWhereInput[] | DataSubscriptionWhereInput
  OR?: DataSubscriptionWhereInput[] | DataSubscriptionWhereInput
  NOT?: DataSubscriptionWhereInput[] | DataSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: DataWhereInput
}

export interface ProcessResourceUpsertWithWhereUniqueNestedInput {
  where: ProcessResourceWhereUniqueInput
  update: ProcessResourceUpdateDataInput
  create: ProcessResourceCreateInput
}

export interface SchemaWhereInput {
  AND?: SchemaWhereInput[] | SchemaWhereInput
  OR?: SchemaWhereInput[] | SchemaWhereInput
  NOT?: SchemaWhereInput[] | SchemaWhereInput
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
  version?: Int
  version_not?: Int
  version_in?: Int[] | Int
  version_not_in?: Int[] | Int
  version_lt?: Int
  version_lte?: Int
  version_gt?: Int
  version_gte?: Int
  date?: DateTime
  date_not?: DateTime
  date_in?: DateTime[] | DateTime
  date_not_in?: DateTime[] | DateTime
  date_lt?: DateTime
  date_lte?: DateTime
  date_gt?: DateTime
  date_gte?: DateTime
  _MagicalBackRelation_DataSchema_every?: DataWhereInput
  _MagicalBackRelation_DataSchema_some?: DataWhereInput
  _MagicalBackRelation_DataSchema_none?: DataWhereInput
}

export interface ResourceUpsertNestedInput {
  update: ResourceUpdateDataInput
  create: ResourceCreateInput
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

export interface ResourceUpdateOneInput {
  create?: ResourceCreateInput
  connect?: ResourceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ResourceUpdateDataInput
  upsert?: ResourceUpsertNestedInput
}

export interface DataWhereInput {
  AND?: DataWhereInput[] | DataWhereInput
  OR?: DataWhereInput[] | DataWhereInput
  NOT?: DataWhereInput[] | DataWhereInput
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
  schemaId?: ID_Input
  schemaId_not?: ID_Input
  schemaId_in?: ID_Input[] | ID_Input
  schemaId_not_in?: ID_Input[] | ID_Input
  schemaId_lt?: ID_Input
  schemaId_lte?: ID_Input
  schemaId_gt?: ID_Input
  schemaId_gte?: ID_Input
  schemaId_contains?: ID_Input
  schemaId_not_contains?: ID_Input
  schemaId_starts_with?: ID_Input
  schemaId_not_starts_with?: ID_Input
  schemaId_ends_with?: ID_Input
  schemaId_not_ends_with?: ID_Input
  version?: Int
  version_not?: Int
  version_in?: Int[] | Int
  version_not_in?: Int[] | Int
  version_lt?: Int
  version_lte?: Int
  version_gt?: Int
  version_gte?: Int
  date?: DateTime
  date_not?: DateTime
  date_in?: DateTime[] | DateTime
  date_not_in?: DateTime[] | DateTime
  date_lt?: DateTime
  date_lte?: DateTime
  date_gt?: DateTime
  date_gte?: DateTime
  value?: String
  value_not?: String
  value_in?: String[] | String
  value_not_in?: String[] | String
  value_lt?: String
  value_lte?: String
  value_gt?: String
  value_gte?: String
  value_contains?: String
  value_not_contains?: String
  value_starts_with?: String
  value_not_starts_with?: String
  value_ends_with?: String
  value_not_ends_with?: String
  schema?: SchemaWhereInput
  _MagicalBackRelation_UserData_every?: UserWhereInput
  _MagicalBackRelation_UserData_some?: UserWhereInput
  _MagicalBackRelation_UserData_none?: UserWhereInput
}

export interface ProcessResourceUpdateDataInput {
  resourceId?: ID_Input
  readRole?: String
  resource?: ResourceUpdateOneInput
}

export interface LogWhereInput {
  AND?: LogWhereInput[] | LogWhereInput
  OR?: LogWhereInput[] | LogWhereInput
  NOT?: LogWhereInput[] | LogWhereInput
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
  elementId?: String
  elementId_not?: String
  elementId_in?: String[] | String
  elementId_not_in?: String[] | String
  elementId_lt?: String
  elementId_lte?: String
  elementId_gt?: String
  elementId_gte?: String
  elementId_contains?: String
  elementId_not_contains?: String
  elementId_starts_with?: String
  elementId_not_starts_with?: String
  elementId_ends_with?: String
  elementId_not_ends_with?: String
  elementName?: String
  elementName_not?: String
  elementName_in?: String[] | String
  elementName_not_in?: String[] | String
  elementName_lt?: String
  elementName_lte?: String
  elementName_gt?: String
  elementName_gte?: String
  elementName_contains?: String
  elementName_not_contains?: String
  elementName_starts_with?: String
  elementName_not_starts_with?: String
  elementName_ends_with?: String
  elementName_not_ends_with?: String
  date?: DateTime
  date_not?: DateTime
  date_in?: DateTime[] | DateTime
  date_not_in?: DateTime[] | DateTime
  date_lt?: DateTime
  date_lte?: DateTime
  date_gt?: DateTime
  date_gte?: DateTime
  taskInstanceId?: ID_Input
  taskInstanceId_not?: ID_Input
  taskInstanceId_in?: ID_Input[] | ID_Input
  taskInstanceId_not_in?: ID_Input[] | ID_Input
  taskInstanceId_lt?: ID_Input
  taskInstanceId_lte?: ID_Input
  taskInstanceId_gt?: ID_Input
  taskInstanceId_gte?: ID_Input
  taskInstanceId_contains?: ID_Input
  taskInstanceId_not_contains?: ID_Input
  taskInstanceId_starts_with?: ID_Input
  taskInstanceId_not_starts_with?: ID_Input
  taskInstanceId_ends_with?: ID_Input
  taskInstanceId_not_ends_with?: ID_Input
  status?: BpmnTaskInstanceStatus
  status_not?: BpmnTaskInstanceStatus
  status_in?: BpmnTaskInstanceStatus[] | BpmnTaskInstanceStatus
  status_not_in?: BpmnTaskInstanceStatus[] | BpmnTaskInstanceStatus
  message?: String
  message_not?: String
  message_in?: String[] | String
  message_not_in?: String[] | String
  message_lt?: String
  message_lte?: String
  message_gt?: String
  message_gte?: String
  message_contains?: String
  message_not_contains?: String
  message_starts_with?: String
  message_not_starts_with?: String
  message_ends_with?: String
  message_not_ends_with?: String
  performer?: UserWhereInput
  _MagicalBackRelation_BpmnProcessInstanceLog_every?: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceLog_some?: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceLog_none?: BpmnProcessInstanceWhereInput
}

export interface ProcessResourceUpdateWithWhereUniqueNestedInput {
  where: ProcessResourceWhereUniqueInput
  data: ProcessResourceUpdateDataInput
}

export interface ProcessResourceWhereInput {
  AND?: ProcessResourceWhereInput[] | ProcessResourceWhereInput
  OR?: ProcessResourceWhereInput[] | ProcessResourceWhereInput
  NOT?: ProcessResourceWhereInput[] | ProcessResourceWhereInput
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
  resourceId?: ID_Input
  resourceId_not?: ID_Input
  resourceId_in?: ID_Input[] | ID_Input
  resourceId_not_in?: ID_Input[] | ID_Input
  resourceId_lt?: ID_Input
  resourceId_lte?: ID_Input
  resourceId_gt?: ID_Input
  resourceId_gte?: ID_Input
  resourceId_contains?: ID_Input
  resourceId_not_contains?: ID_Input
  resourceId_starts_with?: ID_Input
  resourceId_not_starts_with?: ID_Input
  resourceId_ends_with?: ID_Input
  resourceId_not_ends_with?: ID_Input
  readRole?: String
  readRole_not?: String
  readRole_in?: String[] | String
  readRole_not_in?: String[] | String
  readRole_lt?: String
  readRole_lte?: String
  readRole_gt?: String
  readRole_gte?: String
  readRole_contains?: String
  readRole_not_contains?: String
  readRole_starts_with?: String
  readRole_not_starts_with?: String
  readRole_ends_with?: String
  readRole_not_ends_with?: String
  resource?: ResourceWhereInput
  _MagicalBackRelation_BpmnProcessResources_every?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessResources_some?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessResources_none?: BpmnProcessWhereInput
}

export interface ProcessResourceUpdateManyInput {
  create?: ProcessResourceCreateInput[] | ProcessResourceCreateInput
  connect?: ProcessResourceWhereUniqueInput[] | ProcessResourceWhereUniqueInput
  disconnect?: ProcessResourceWhereUniqueInput[] | ProcessResourceWhereUniqueInput
  delete?: ProcessResourceWhereUniqueInput[] | ProcessResourceWhereUniqueInput
  update?: ProcessResourceUpdateWithWhereUniqueNestedInput[] | ProcessResourceUpdateWithWhereUniqueNestedInput
  upsert?: ProcessResourceUpsertWithWhereUniqueNestedInput[] | ProcessResourceUpsertWithWhereUniqueNestedInput
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
  resourceId?: ID_Input
  resourceId_not?: ID_Input
  resourceId_in?: ID_Input[] | ID_Input
  resourceId_not_in?: ID_Input[] | ID_Input
  resourceId_lt?: ID_Input
  resourceId_lte?: ID_Input
  resourceId_gt?: ID_Input
  resourceId_gte?: ID_Input
  resourceId_contains?: ID_Input
  resourceId_not_contains?: ID_Input
  resourceId_starts_with?: ID_Input
  resourceId_not_starts_with?: ID_Input
  resourceId_ends_with?: ID_Input
  resourceId_not_ends_with?: ID_Input
  type?: ResourceType
  type_not?: ResourceType
  type_in?: ResourceType[] | ResourceType
  type_not_in?: ResourceType[] | ResourceType
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
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
  version?: Int
  version_not?: Int
  version_in?: Int[] | Int
  version_not_in?: Int[] | Int
  version_lt?: Int
  version_lte?: Int
  version_gt?: Int
  version_gte?: Int
  publicationStatus?: PublicationStatus
  publicationStatus_not?: PublicationStatus
  publicationStatus_in?: PublicationStatus[] | PublicationStatus
  publicationStatus_not_in?: PublicationStatus[] | PublicationStatus
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
  updatedById?: ID_Input
  updatedById_not?: ID_Input
  updatedById_in?: ID_Input[] | ID_Input
  updatedById_not_in?: ID_Input[] | ID_Input
  updatedById_lt?: ID_Input
  updatedById_lte?: ID_Input
  updatedById_gt?: ID_Input
  updatedById_gte?: ID_Input
  updatedById_contains?: ID_Input
  updatedById_not_contains?: ID_Input
  updatedById_starts_with?: ID_Input
  updatedById_not_starts_with?: ID_Input
  updatedById_ends_with?: ID_Input
  updatedById_not_ends_with?: ID_Input
  readRole?: String
  readRole_not?: String
  readRole_in?: String[] | String
  readRole_not_in?: String[] | String
  readRole_lt?: String
  readRole_lte?: String
  readRole_gt?: String
  readRole_gte?: String
  readRole_contains?: String
  readRole_not_contains?: String
  readRole_starts_with?: String
  readRole_not_starts_with?: String
  readRole_ends_with?: String
  readRole_not_ends_with?: String
  readUser?: String
  readUser_not?: String
  readUser_in?: String[] | String
  readUser_not_in?: String[] | String
  readUser_lt?: String
  readUser_lte?: String
  readUser_gt?: String
  readUser_gte?: String
  readUser_contains?: String
  readUser_not_contains?: String
  readUser_starts_with?: String
  readUser_not_starts_with?: String
  readUser_ends_with?: String
  readUser_not_ends_with?: String
  writeRole?: String
  writeRole_not?: String
  writeRole_in?: String[] | String
  writeRole_not_in?: String[] | String
  writeRole_lt?: String
  writeRole_lte?: String
  writeRole_gt?: String
  writeRole_gte?: String
  writeRole_contains?: String
  writeRole_not_contains?: String
  writeRole_starts_with?: String
  writeRole_not_starts_with?: String
  writeRole_ends_with?: String
  writeRole_not_ends_with?: String
  writeUser?: String
  writeUser_not?: String
  writeUser_in?: String[] | String
  writeUser_not_in?: String[] | String
  writeUser_lt?: String
  writeUser_lte?: String
  writeUser_gt?: String
  writeUser_gte?: String
  writeUser_contains?: String
  writeUser_not_contains?: String
  writeUser_starts_with?: String
  writeUser_not_starts_with?: String
  writeUser_ends_with?: String
  writeUser_not_ends_with?: String
  _MagicalBackRelation_ProcessResourceToResource_every?: ProcessResourceWhereInput
  _MagicalBackRelation_ProcessResourceToResource_some?: ProcessResourceWhereInput
  _MagicalBackRelation_ProcessResourceToResource_none?: ProcessResourceWhereInput
  _MagicalBackRelation_BpmnTaskToResource_every?: BpmnTaskWhereInput
  _MagicalBackRelation_BpmnTaskToResource_some?: BpmnTaskWhereInput
  _MagicalBackRelation_BpmnTaskToResource_none?: BpmnTaskWhereInput
}

export interface BpmnTaskUpsertWithWhereUniqueNestedInput {
  where: BpmnTaskWhereUniqueInput
  update: BpmnTaskUpdateDataInput
  create: BpmnTaskCreateInput
}

export interface BpmnTaskWhereInput {
  AND?: BpmnTaskWhereInput[] | BpmnTaskWhereInput
  OR?: BpmnTaskWhereInput[] | BpmnTaskWhereInput
  NOT?: BpmnTaskWhereInput[] | BpmnTaskWhereInput
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
  taskId?: ID_Input
  taskId_not?: ID_Input
  taskId_in?: ID_Input[] | ID_Input
  taskId_not_in?: ID_Input[] | ID_Input
  taskId_lt?: ID_Input
  taskId_lte?: ID_Input
  taskId_gt?: ID_Input
  taskId_gte?: ID_Input
  taskId_contains?: ID_Input
  taskId_not_contains?: ID_Input
  taskId_starts_with?: ID_Input
  taskId_not_starts_with?: ID_Input
  taskId_ends_with?: ID_Input
  taskId_not_ends_with?: ID_Input
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
  type?: BpmnTaskType
  type_not?: BpmnTaskType
  type_in?: BpmnTaskType[] | BpmnTaskType
  type_not_in?: BpmnTaskType[] | BpmnTaskType
  resources_every?: ResourceWhereInput
  resources_some?: ResourceWhereInput
  resources_none?: ResourceWhereInput
  _MagicalBackRelation_BpmnProcessTasks_every?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessTasks_some?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessTasks_none?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnTaskToBpmnTaskInstance_every?: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnTaskToBpmnTaskInstance_some?: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnTaskToBpmnTaskInstance_none?: BpmnTaskInstanceWhereInput
}

export interface ResourceUpsertWithWhereUniqueNestedInput {
  where: ResourceWhereUniqueInput
  update: ResourceUpdateDataInput
  create: ResourceCreateInput
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

export interface ResourceUpdateDataInput {
  resourceId?: ID_Input
  type?: ResourceType
  title?: String
  content?: String
  version?: Int
  publicationStatus?: PublicationStatus
  createdById?: ID_Input
  updatedById?: ID_Input
  readRole?: String
  readUser?: String
  writeRole?: String
  writeUser?: String
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
}

export interface ResourceUpdateWithWhereUniqueNestedInput {
  where: ResourceWhereUniqueInput
  data: ResourceUpdateDataInput
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
  dateFinished?: DateTime
  dateFinished_not?: DateTime
  dateFinished_in?: DateTime[] | DateTime
  dateFinished_not_in?: DateTime[] | DateTime
  dateFinished_lt?: DateTime
  dateFinished_lte?: DateTime
  dateFinished_gt?: DateTime
  dateFinished_gte?: DateTime
  dateStarted?: DateTime
  dateStarted_not?: DateTime
  dateStarted_in?: DateTime[] | DateTime
  dateStarted_not_in?: DateTime[] | DateTime
  dateStarted_lt?: DateTime
  dateStarted_lte?: DateTime
  dateStarted_gt?: DateTime
  dateStarted_gte?: DateTime
  duration?: Int
  duration_not?: Int
  duration_in?: Int[] | Int
  duration_not_in?: Int[] | Int
  duration_lt?: Int
  duration_lte?: Int
  duration_gt?: Int
  duration_gte?: Int
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
  processId?: ID_Input
  processId_not?: ID_Input
  processId_in?: ID_Input[] | ID_Input
  processId_not_in?: ID_Input[] | ID_Input
  processId_lt?: ID_Input
  processId_lte?: ID_Input
  processId_gt?: ID_Input
  processId_gte?: ID_Input
  processId_contains?: ID_Input
  processId_not_contains?: ID_Input
  processId_starts_with?: ID_Input
  processId_not_starts_with?: ID_Input
  processId_ends_with?: ID_Input
  processId_not_ends_with?: ID_Input
  data?: String
  data_not?: String
  data_in?: String[] | String
  data_not_in?: String[] | String
  data_lt?: String
  data_lte?: String
  data_gt?: String
  data_gte?: String
  data_contains?: String
  data_not_contains?: String
  data_starts_with?: String
  data_not_starts_with?: String
  data_ends_with?: String
  data_not_ends_with?: String
  status?: BpmnProcessInstanceStatus
  status_not?: BpmnProcessInstanceStatus
  status_in?: BpmnProcessInstanceStatus[] | BpmnProcessInstanceStatus
  status_not_in?: BpmnProcessInstanceStatus[] | BpmnProcessInstanceStatus
  comments_every?: CommentWhereInput
  comments_some?: CommentWhereInput
  comments_none?: CommentWhereInput
  owner?: UserWhereInput
  process?: BpmnProcessWhereInput
  log_every?: LogWhereInput
  log_some?: LogWhereInput
  log_none?: LogWhereInput
  tasks_every?: BpmnTaskInstanceWhereInput
  tasks_some?: BpmnTaskInstanceWhereInput
  tasks_none?: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToNotification_every?: NotificationWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToNotification_some?: NotificationWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToNotification_none?: NotificationWhereInput
}

export interface ResourceUpdateManyInput {
  create?: ResourceCreateInput[] | ResourceCreateInput
  connect?: ResourceWhereUniqueInput[] | ResourceWhereUniqueInput
  disconnect?: ResourceWhereUniqueInput[] | ResourceWhereUniqueInput
  delete?: ResourceWhereUniqueInput[] | ResourceWhereUniqueInput
  update?: ResourceUpdateWithWhereUniqueNestedInput[] | ResourceUpdateWithWhereUniqueNestedInput
  upsert?: ResourceUpsertWithWhereUniqueNestedInput[] | ResourceUpsertWithWhereUniqueNestedInput
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

export interface BpmnTaskInstanceCreateInput {
  dateFinished?: DateTime
  dateStarted: DateTime
  duration?: Int
  performerId?: ID_Input
  performerRoleId?: ID_Input
  performerRole?: ID_Input
  data?: Json
  status: BpmnTaskInstanceStatus
  taskId: ID_Input
  performer?: UserCreateOneInput
  processInstance: BpmnProcessInstanceCreateOneWithoutTasksInput
  task?: BpmnTaskCreateOneInput
}

export interface BpmnTaskInstanceSubscriptionWhereInput {
  AND?: BpmnTaskInstanceSubscriptionWhereInput[] | BpmnTaskInstanceSubscriptionWhereInput
  OR?: BpmnTaskInstanceSubscriptionWhereInput[] | BpmnTaskInstanceSubscriptionWhereInput
  NOT?: BpmnTaskInstanceSubscriptionWhereInput[] | BpmnTaskInstanceSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BpmnTaskInstanceWhereInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface NotificationWhereInput {
  AND?: NotificationWhereInput[] | NotificationWhereInput
  OR?: NotificationWhereInput[] | NotificationWhereInput
  NOT?: NotificationWhereInput[] | NotificationWhereInput
  type?: NotificationType
  type_not?: NotificationType
  type_in?: NotificationType[] | NotificationType
  type_not_in?: NotificationType[] | NotificationType
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
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  code?: NotificationCode
  code_not?: NotificationCode
  code_in?: NotificationCode[] | NotificationCode
  code_not_in?: NotificationCode[] | NotificationCode
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
  processInstanceId?: ID_Input
  processInstanceId_not?: ID_Input
  processInstanceId_in?: ID_Input[] | ID_Input
  processInstanceId_not_in?: ID_Input[] | ID_Input
  processInstanceId_lt?: ID_Input
  processInstanceId_lte?: ID_Input
  processInstanceId_gt?: ID_Input
  processInstanceId_gte?: ID_Input
  processInstanceId_contains?: ID_Input
  processInstanceId_not_contains?: ID_Input
  processInstanceId_starts_with?: ID_Input
  processInstanceId_not_starts_with?: ID_Input
  processInstanceId_ends_with?: ID_Input
  processInstanceId_not_ends_with?: ID_Input
  params?: String
  params_not?: String
  params_in?: String[] | String
  params_not_in?: String[] | String
  params_lt?: String
  params_lte?: String
  params_gt?: String
  params_gte?: String
  params_contains?: String
  params_not_contains?: String
  params_starts_with?: String
  params_not_starts_with?: String
  params_ends_with?: String
  params_not_ends_with?: String
  visible?: Boolean
  visible_not?: Boolean
  user?: UserWhereInput
  processInstance?: BpmnProcessInstanceWhereInput
}

export interface UserCreateInput {
  uid: String
  name: String
  description?: String
  password: String
  roles?: UserCreaterolesInput
  notifications?: NotificationCreateManyWithoutUserInput
  processes?: BpmnProcessInstanceCreateManyWithoutOwnerInput
  data?: DataCreateManyInput
}

export interface DataUpdateInput {
  schemaId?: ID_Input
  version?: Int
  date?: DateTime
  value?: String
  schema?: SchemaUpdateOneInput
}

export interface UserCreaterolesInput {
  set?: ID_Input[] | ID_Input
}

export interface BpmnTaskUpdateInput {
  taskId?: ID_Input
  name?: String
  type?: BpmnTaskType
  resources?: ResourceUpdateManyInput
}

export interface NotificationCreateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[] | NotificationCreateWithoutUserInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
}

export interface LocalisationWhereUniqueInput {
  id?: ID_Input
}

export interface NotificationCreateWithoutUserInput {
  type: NotificationType
  userId: ID_Input
  code: NotificationCode
  text?: String
  processInstanceId: ID_Input
  params?: String
  visible: Boolean
  processInstance?: BpmnProcessInstanceCreateOneInput
}

export interface OrganisationWhereUniqueInput {
  id?: ID_Input
}

export interface BpmnProcessInstanceCreateOneInput {
  create?: BpmnProcessInstanceCreateInput
  connect?: BpmnProcessInstanceWhereUniqueInput
}

export interface ResourceWhereUniqueInput {
  id?: ID_Input
}

export interface BpmnProcessInstanceCreateInput {
  dateFinished?: DateTime
  dateStarted: DateTime
  duration?: Int
  ownerId: ID_Input
  processId: ID_Input
  data: String
  status: BpmnProcessInstanceStatus
  comments?: CommentCreateManyInput
  owner?: UserCreateOneWithoutProcessesInput
  process?: BpmnProcessCreateOneInput
  log?: LogCreateManyInput
  tasks?: BpmnTaskInstanceCreateManyWithoutProcessInstanceInput
}

export interface CommentWhereUniqueInput {
  id?: ID_Input
}

export interface CommentCreateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
}

export interface LogWhereUniqueInput {
  id?: ID_Input
}

export interface CommentCreateInput {
  text: String
  userId: ID_Input
  date: DateTime
  replyTo?: ID_Input
  user?: UserCreateOneInput
}

export interface SchemaWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface UserCreateOneWithoutProcessesInput {
  create?: UserCreateWithoutProcessesInput
  connect?: UserWhereUniqueInput
}

export interface DataWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateWithoutProcessesInput {
  uid: String
  name: String
  description?: String
  password: String
  roles?: UserCreaterolesInput
  notifications?: NotificationCreateManyWithoutUserInput
  data?: DataCreateManyInput
}

export interface SchemaUpdateInput {
  name?: String
  description?: String
  schema?: Json
  version?: Int
  date?: DateTime
}

export interface DataCreateManyInput {
  create?: DataCreateInput[] | DataCreateInput
  connect?: DataWhereUniqueInput[] | DataWhereUniqueInput
}

export interface LogUpdateInput {
  elementId?: String
  elementName?: String
  date?: DateTime
  taskInstanceId?: ID_Input
  status?: BpmnTaskInstanceStatus
  message?: String
  performer?: UserUpdateOneInput
}

export interface DataCreateInput {
  schemaId: ID_Input
  version?: Int
  date?: DateTime
  value?: String
  schema?: SchemaCreateOneInput
}

export interface CommentUpdateInput {
  text?: String
  userId?: ID_Input
  date?: DateTime
  replyTo?: ID_Input
  user?: UserUpdateOneInput
}

export interface SchemaCreateOneInput {
  create?: SchemaCreateInput
  connect?: SchemaWhereUniqueInput
}

export interface ResourceUpdateInput {
  resourceId?: ID_Input
  type?: ResourceType
  title?: String
  content?: String
  version?: Int
  publicationStatus?: PublicationStatus
  createdById?: ID_Input
  updatedById?: ID_Input
  readRole?: String
  readUser?: String
  writeRole?: String
  writeUser?: String
}

export interface SchemaCreateInput {
  name: String
  description: String
  schema: Json
  version?: Int
  date?: DateTime
}

export interface OrganisationUpdateInput {
  name?: String
  description?: String
}

export interface BpmnProcessCreateOneInput {
  create?: BpmnProcessCreateInput
  connect?: BpmnProcessWhereUniqueInput
}

export interface UserUpdateWithoutNotificationsDataInput {
  uid?: String
  name?: String
  description?: String
  password?: String
  roles?: UserUpdaterolesInput
  processes?: BpmnProcessInstanceUpdateManyWithoutOwnerInput
  data?: DataUpdateManyInput
}

export interface BpmnProcessCreateInput {
  processID?: ID_Input
  actionCount: Int
  schema?: Json
  description?: String
  model: String
  name: String
  type: String
  publicationStatus: PublicationStatus
  version: Int
  createdById: ID_Input
  updatedById?: ID_Input
  readRole?: String
  readUser?: String
  writeRole?: String
  writeUser?: String
  executeRole?: String
  executeUser?: String
  tasks?: BpmnTaskCreateManyInput
  resources?: ProcessResourceCreateManyInput
}

export interface NotificationUpdateInput {
  type?: NotificationType
  userId?: ID_Input
  code?: NotificationCode
  text?: String
  processInstanceId?: ID_Input
  params?: String
  visible?: Boolean
  user?: UserUpdateOneWithoutNotificationsInput
  processInstance?: BpmnProcessInstanceUpdateOneInput
}

export interface BpmnTaskCreateManyInput {
  create?: BpmnTaskCreateInput[] | BpmnTaskCreateInput
  connect?: BpmnTaskWhereUniqueInput[] | BpmnTaskWhereUniqueInput
}

export interface BpmnProcessInstanceUpsertWithoutTasksInput {
  update: BpmnProcessInstanceUpdateWithoutTasksDataInput
  create: BpmnProcessInstanceCreateWithoutTasksInput
}

export interface BpmnTaskCreateInput {
  taskId: ID_Input
  name: String
  type?: BpmnTaskType
  resources?: ResourceCreateManyInput
}

export interface BpmnProcessInstanceUpdateOneWithoutTasksInput {
  create?: BpmnProcessInstanceCreateWithoutTasksInput
  connect?: BpmnProcessInstanceWhereUniqueInput
  delete?: Boolean
  update?: BpmnProcessInstanceUpdateWithoutTasksDataInput
  upsert?: BpmnProcessInstanceUpsertWithoutTasksInput
}

export interface ResourceCreateManyInput {
  create?: ResourceCreateInput[] | ResourceCreateInput
  connect?: ResourceWhereUniqueInput[] | ResourceWhereUniqueInput
}

export interface BpmnProcessInstanceUpsertWithWhereUniqueWithoutOwnerInput {
  where: BpmnProcessInstanceWhereUniqueInput
  update: BpmnProcessInstanceUpdateWithoutOwnerDataInput
  create: BpmnProcessInstanceCreateWithoutOwnerInput
}

export interface ResourceCreateInput {
  resourceId: ID_Input
  type: ResourceType
  title: String
  content: String
  version: Int
  publicationStatus: PublicationStatus
  createdById: ID_Input
  updatedById?: ID_Input
  readRole?: String
  readUser?: String
  writeRole?: String
  writeUser?: String
}

export interface BpmnProcessInstanceUpdateWithWhereUniqueWithoutOwnerInput {
  where: BpmnProcessInstanceWhereUniqueInput
  data: BpmnProcessInstanceUpdateWithoutOwnerDataInput
}

export interface BpmnTaskUpdateDataInput {
  taskId?: ID_Input
  name?: String
  type?: BpmnTaskType
  resources?: ResourceUpdateManyInput
}

export interface NotificationUpsertWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput
  update: NotificationUpdateWithoutUserDataInput
  create: NotificationCreateWithoutUserInput
}

export interface ProcessResourceCreateInput {
  resourceId: ID_Input
  readRole?: String
  resource?: ResourceCreateOneInput
}

export interface BpmnTaskInstanceUpsertWithWhereUniqueWithoutProcessInstanceInput {
  where: BpmnTaskInstanceWhereUniqueInput
  update: BpmnTaskInstanceUpdateWithoutProcessInstanceDataInput
  create: BpmnTaskInstanceCreateWithoutProcessInstanceInput
}

export interface ResourceCreateOneInput {
  create?: ResourceCreateInput
  connect?: ResourceWhereUniqueInput
}

export interface BpmnTaskUpdateOneInput {
  create?: BpmnTaskCreateInput
  connect?: BpmnTaskWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: BpmnTaskUpdateDataInput
  upsert?: BpmnTaskUpsertNestedInput
}

export interface LogCreateManyInput {
  create?: LogCreateInput[] | LogCreateInput
  connect?: LogWhereUniqueInput[] | LogWhereUniqueInput
}

export interface BpmnTaskInstanceUpdateWithWhereUniqueWithoutProcessInstanceInput {
  where: BpmnTaskInstanceWhereUniqueInput
  data: BpmnTaskInstanceUpdateWithoutProcessInstanceDataInput
}

export interface LogCreateInput {
  elementId: String
  elementName: String
  date: DateTime
  taskInstanceId?: ID_Input
  status?: BpmnTaskInstanceStatus
  message?: String
  performer?: UserCreateOneInput
}

export interface LogUpsertWithWhereUniqueNestedInput {
  where: LogWhereUniqueInput
  update: LogUpdateDataInput
  create: LogCreateInput
}

export interface BpmnTaskInstanceCreateManyWithoutProcessInstanceInput {
  create?: BpmnTaskInstanceCreateWithoutProcessInstanceInput[] | BpmnTaskInstanceCreateWithoutProcessInstanceInput
  connect?: BpmnTaskInstanceWhereUniqueInput[] | BpmnTaskInstanceWhereUniqueInput
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

export interface BpmnTaskInstanceCreateWithoutProcessInstanceInput {
  dateFinished?: DateTime
  dateStarted: DateTime
  duration?: Int
  performerId?: ID_Input
  performerRoleId?: ID_Input
  performerRole?: ID_Input
  data?: Json
  status: BpmnTaskInstanceStatus
  taskId: ID_Input
  performer?: UserCreateOneInput
  task?: BpmnTaskCreateOneInput
}

export interface SchemaSubscriptionWhereInput {
  AND?: SchemaSubscriptionWhereInput[] | SchemaSubscriptionWhereInput
  OR?: SchemaSubscriptionWhereInput[] | SchemaSubscriptionWhereInput
  NOT?: SchemaSubscriptionWhereInput[] | SchemaSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: SchemaWhereInput
}

export interface BpmnTaskCreateOneInput {
  create?: BpmnTaskCreateInput
  connect?: BpmnTaskWhereUniqueInput
}

export interface ProcessResourceSubscriptionWhereInput {
  AND?: ProcessResourceSubscriptionWhereInput[] | ProcessResourceSubscriptionWhereInput
  OR?: ProcessResourceSubscriptionWhereInput[] | ProcessResourceSubscriptionWhereInput
  NOT?: ProcessResourceSubscriptionWhereInput[] | ProcessResourceSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ProcessResourceWhereInput
}

export interface BpmnProcessInstanceCreateManyWithoutOwnerInput {
  create?: BpmnProcessInstanceCreateWithoutOwnerInput[] | BpmnProcessInstanceCreateWithoutOwnerInput
  connect?: BpmnProcessInstanceWhereUniqueInput[] | BpmnProcessInstanceWhereUniqueInput
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

export interface BpmnProcessInstanceCreateWithoutOwnerInput {
  dateFinished?: DateTime
  dateStarted: DateTime
  duration?: Int
  ownerId: ID_Input
  processId: ID_Input
  data: String
  status: BpmnProcessInstanceStatus
  comments?: CommentCreateManyInput
  process?: BpmnProcessCreateOneInput
  log?: LogCreateManyInput
  tasks?: BpmnTaskInstanceCreateManyWithoutProcessInstanceInput
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
  processID?: ID_Input
  processID_not?: ID_Input
  processID_in?: ID_Input[] | ID_Input
  processID_not_in?: ID_Input[] | ID_Input
  processID_lt?: ID_Input
  processID_lte?: ID_Input
  processID_gt?: ID_Input
  processID_gte?: ID_Input
  processID_contains?: ID_Input
  processID_not_contains?: ID_Input
  processID_starts_with?: ID_Input
  processID_not_starts_with?: ID_Input
  processID_ends_with?: ID_Input
  processID_not_ends_with?: ID_Input
  actionCount?: Int
  actionCount_not?: Int
  actionCount_in?: Int[] | Int
  actionCount_not_in?: Int[] | Int
  actionCount_lt?: Int
  actionCount_lte?: Int
  actionCount_gt?: Int
  actionCount_gte?: Int
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
  type?: String
  type_not?: String
  type_in?: String[] | String
  type_not_in?: String[] | String
  type_lt?: String
  type_lte?: String
  type_gt?: String
  type_gte?: String
  type_contains?: String
  type_not_contains?: String
  type_starts_with?: String
  type_not_starts_with?: String
  type_ends_with?: String
  type_not_ends_with?: String
  publicationStatus?: PublicationStatus
  publicationStatus_not?: PublicationStatus
  publicationStatus_in?: PublicationStatus[] | PublicationStatus
  publicationStatus_not_in?: PublicationStatus[] | PublicationStatus
  version?: Int
  version_not?: Int
  version_in?: Int[] | Int
  version_not_in?: Int[] | Int
  version_lt?: Int
  version_lte?: Int
  version_gt?: Int
  version_gte?: Int
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
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
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  updatedById?: ID_Input
  updatedById_not?: ID_Input
  updatedById_in?: ID_Input[] | ID_Input
  updatedById_not_in?: ID_Input[] | ID_Input
  updatedById_lt?: ID_Input
  updatedById_lte?: ID_Input
  updatedById_gt?: ID_Input
  updatedById_gte?: ID_Input
  updatedById_contains?: ID_Input
  updatedById_not_contains?: ID_Input
  updatedById_starts_with?: ID_Input
  updatedById_not_starts_with?: ID_Input
  updatedById_ends_with?: ID_Input
  updatedById_not_ends_with?: ID_Input
  readRole?: String
  readRole_not?: String
  readRole_in?: String[] | String
  readRole_not_in?: String[] | String
  readRole_lt?: String
  readRole_lte?: String
  readRole_gt?: String
  readRole_gte?: String
  readRole_contains?: String
  readRole_not_contains?: String
  readRole_starts_with?: String
  readRole_not_starts_with?: String
  readRole_ends_with?: String
  readRole_not_ends_with?: String
  readUser?: String
  readUser_not?: String
  readUser_in?: String[] | String
  readUser_not_in?: String[] | String
  readUser_lt?: String
  readUser_lte?: String
  readUser_gt?: String
  readUser_gte?: String
  readUser_contains?: String
  readUser_not_contains?: String
  readUser_starts_with?: String
  readUser_not_starts_with?: String
  readUser_ends_with?: String
  readUser_not_ends_with?: String
  writeRole?: String
  writeRole_not?: String
  writeRole_in?: String[] | String
  writeRole_not_in?: String[] | String
  writeRole_lt?: String
  writeRole_lte?: String
  writeRole_gt?: String
  writeRole_gte?: String
  writeRole_contains?: String
  writeRole_not_contains?: String
  writeRole_starts_with?: String
  writeRole_not_starts_with?: String
  writeRole_ends_with?: String
  writeRole_not_ends_with?: String
  writeUser?: String
  writeUser_not?: String
  writeUser_in?: String[] | String
  writeUser_not_in?: String[] | String
  writeUser_lt?: String
  writeUser_lte?: String
  writeUser_gt?: String
  writeUser_gte?: String
  writeUser_contains?: String
  writeUser_not_contains?: String
  writeUser_starts_with?: String
  writeUser_not_starts_with?: String
  writeUser_ends_with?: String
  writeUser_not_ends_with?: String
  executeRole?: String
  executeRole_not?: String
  executeRole_in?: String[] | String
  executeRole_not_in?: String[] | String
  executeRole_lt?: String
  executeRole_lte?: String
  executeRole_gt?: String
  executeRole_gte?: String
  executeRole_contains?: String
  executeRole_not_contains?: String
  executeRole_starts_with?: String
  executeRole_not_starts_with?: String
  executeRole_ends_with?: String
  executeRole_not_ends_with?: String
  executeUser?: String
  executeUser_not?: String
  executeUser_in?: String[] | String
  executeUser_not_in?: String[] | String
  executeUser_lt?: String
  executeUser_lte?: String
  executeUser_gt?: String
  executeUser_gte?: String
  executeUser_contains?: String
  executeUser_not_contains?: String
  executeUser_starts_with?: String
  executeUser_not_starts_with?: String
  executeUser_ends_with?: String
  executeUser_not_ends_with?: String
  tasks_every?: BpmnTaskWhereInput
  tasks_some?: BpmnTaskWhereInput
  tasks_none?: BpmnTaskWhereInput
  resources_every?: ProcessResourceWhereInput
  resources_some?: ProcessResourceWhereInput
  resources_none?: ProcessResourceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceProcess_every?: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceProcess_some?: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceProcess_none?: BpmnProcessInstanceWhereInput
}

export interface BpmnProcessInstanceCreateOneWithoutTasksInput {
  create?: BpmnProcessInstanceCreateWithoutTasksInput
  connect?: BpmnProcessInstanceWhereUniqueInput
}

export interface CommentWhereInput {
  AND?: CommentWhereInput[] | CommentWhereInput
  OR?: CommentWhereInput[] | CommentWhereInput
  NOT?: CommentWhereInput[] | CommentWhereInput
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
  date?: DateTime
  date_not?: DateTime
  date_in?: DateTime[] | DateTime
  date_not_in?: DateTime[] | DateTime
  date_lt?: DateTime
  date_lte?: DateTime
  date_gt?: DateTime
  date_gte?: DateTime
  replyTo?: ID_Input
  replyTo_not?: ID_Input
  replyTo_in?: ID_Input[] | ID_Input
  replyTo_not_in?: ID_Input[] | ID_Input
  replyTo_lt?: ID_Input
  replyTo_lte?: ID_Input
  replyTo_gt?: ID_Input
  replyTo_gte?: ID_Input
  replyTo_contains?: ID_Input
  replyTo_not_contains?: ID_Input
  replyTo_starts_with?: ID_Input
  replyTo_not_starts_with?: ID_Input
  replyTo_ends_with?: ID_Input
  replyTo_not_ends_with?: ID_Input
  user?: UserWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToComment_every?: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToComment_some?: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToComment_none?: BpmnProcessInstanceWhereInput
}

export interface BpmnProcessInstanceCreateWithoutTasksInput {
  dateFinished?: DateTime
  dateStarted: DateTime
  duration?: Int
  ownerId: ID_Input
  processId: ID_Input
  data: String
  status: BpmnProcessInstanceStatus
  comments?: CommentCreateManyInput
  owner?: UserCreateOneWithoutProcessesInput
  process?: BpmnProcessCreateOneInput
  log?: LogCreateManyInput
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

export interface LocalisationCreateInput {
  code: String
  text: String
  language: LanguageCode
}

export interface BpmnProcessUpdateInput {
  processID?: ID_Input
  actionCount?: Int
  schema?: Json
  description?: String
  model?: String
  name?: String
  type?: String
  publicationStatus?: PublicationStatus
  version?: Int
  createdById?: ID_Input
  updatedById?: ID_Input
  readRole?: String
  readUser?: String
  writeRole?: String
  writeUser?: String
  executeRole?: String
  executeUser?: String
  tasks?: BpmnTaskUpdateManyInput
  resources?: ProcessResourceUpdateManyInput
}

export interface BpmnTaskUpdateWithWhereUniqueNestedInput {
  where: BpmnTaskWhereUniqueInput
  data: BpmnTaskUpdateDataInput
}

export interface BpmnTaskInstanceWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateOneWithoutNotificationsInput {
  create?: UserCreateWithoutNotificationsInput
  connect?: UserWhereUniqueInput
}

export interface RoleWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateWithoutNotificationsInput {
  uid: String
  name: String
  description?: String
  password: String
  roles?: UserCreaterolesInput
  processes?: BpmnProcessInstanceCreateManyWithoutOwnerInput
  data?: DataCreateManyInput
}

export interface ProcessResourceWhereUniqueInput {
  id?: ID_Input
}

export interface OrganisationCreateInput {
  name: String
  description?: String
}

export interface BpmnTaskWhereUniqueInput {
  id?: ID_Input
  taskId?: ID_Input
}

export interface RoleCreateInput {
  name: String
  description?: String
}

export interface UserUpdateInput {
  uid?: String
  name?: String
  description?: String
  password?: String
  roles?: UserUpdaterolesInput
  notifications?: NotificationUpdateManyWithoutUserInput
  processes?: BpmnProcessInstanceUpdateManyWithoutOwnerInput
  data?: DataUpdateManyInput
}

export interface BpmnTaskInstanceUpdateInput {
  dateFinished?: DateTime
  dateStarted?: DateTime
  duration?: Int
  performerId?: ID_Input
  performerRoleId?: ID_Input
  performerRole?: ID_Input
  data?: Json
  status?: BpmnTaskInstanceStatus
  taskId?: ID_Input
  performer?: UserUpdateOneInput
  processInstance?: BpmnProcessInstanceUpdateOneWithoutTasksInput
  task?: BpmnTaskUpdateOneInput
}

export interface BpmnProcessInstanceUpdateInput {
  dateFinished?: DateTime
  dateStarted?: DateTime
  duration?: Int
  ownerId?: ID_Input
  processId?: ID_Input
  data?: String
  status?: BpmnProcessInstanceStatus
  comments?: CommentUpdateManyInput
  owner?: UserUpdateOneWithoutProcessesInput
  process?: BpmnProcessUpdateOneInput
  log?: LogUpdateManyInput
  tasks?: BpmnTaskInstanceUpdateManyWithoutProcessInstanceInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface UserUpsertWithoutNotificationsInput {
  update: UserUpdateWithoutNotificationsDataInput
  create: UserCreateWithoutNotificationsInput
}

export interface UserUpdateDataInput {
  uid?: String
  name?: String
  description?: String
  password?: String
  roles?: UserUpdaterolesInput
  notifications?: NotificationUpdateManyWithoutUserInput
  processes?: BpmnProcessInstanceUpdateManyWithoutOwnerInput
  data?: DataUpdateManyInput
}

export interface LocalisationUpdateInput {
  code?: String
  text?: String
  language?: LanguageCode
}

export interface UserUpdaterolesInput {
  set?: ID_Input[] | ID_Input
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface NotificationUpdateManyWithoutUserInput {
  create?: NotificationCreateWithoutUserInput[] | NotificationCreateWithoutUserInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  disconnect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  delete?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  update?: NotificationUpdateWithWhereUniqueWithoutUserInput[] | NotificationUpdateWithWhereUniqueWithoutUserInput
  upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput[] | NotificationUpsertWithWhereUniqueWithoutUserInput
}

export interface BpmnProcessInstanceUpdateManyWithoutOwnerInput {
  create?: BpmnProcessInstanceCreateWithoutOwnerInput[] | BpmnProcessInstanceCreateWithoutOwnerInput
  connect?: BpmnProcessInstanceWhereUniqueInput[] | BpmnProcessInstanceWhereUniqueInput
  disconnect?: BpmnProcessInstanceWhereUniqueInput[] | BpmnProcessInstanceWhereUniqueInput
  delete?: BpmnProcessInstanceWhereUniqueInput[] | BpmnProcessInstanceWhereUniqueInput
  update?: BpmnProcessInstanceUpdateWithWhereUniqueWithoutOwnerInput[] | BpmnProcessInstanceUpdateWithWhereUniqueWithoutOwnerInput
  upsert?: BpmnProcessInstanceUpsertWithWhereUniqueWithoutOwnerInput[] | BpmnProcessInstanceUpsertWithWhereUniqueWithoutOwnerInput
}

export interface NotificationUpdateWithWhereUniqueWithoutUserInput {
  where: NotificationWhereUniqueInput
  data: NotificationUpdateWithoutUserDataInput
}

export interface BpmnTaskUpsertNestedInput {
  update: BpmnTaskUpdateDataInput
  create: BpmnTaskCreateInput
}

export interface NotificationUpdateWithoutUserDataInput {
  type?: NotificationType
  userId?: ID_Input
  code?: NotificationCode
  text?: String
  processInstanceId?: ID_Input
  params?: String
  visible?: Boolean
  processInstance?: BpmnProcessInstanceUpdateOneInput
}

export interface BpmnTaskInstanceUpdateManyWithoutProcessInstanceInput {
  create?: BpmnTaskInstanceCreateWithoutProcessInstanceInput[] | BpmnTaskInstanceCreateWithoutProcessInstanceInput
  connect?: BpmnTaskInstanceWhereUniqueInput[] | BpmnTaskInstanceWhereUniqueInput
  disconnect?: BpmnTaskInstanceWhereUniqueInput[] | BpmnTaskInstanceWhereUniqueInput
  delete?: BpmnTaskInstanceWhereUniqueInput[] | BpmnTaskInstanceWhereUniqueInput
  update?: BpmnTaskInstanceUpdateWithWhereUniqueWithoutProcessInstanceInput[] | BpmnTaskInstanceUpdateWithWhereUniqueWithoutProcessInstanceInput
  upsert?: BpmnTaskInstanceUpsertWithWhereUniqueWithoutProcessInstanceInput[] | BpmnTaskInstanceUpsertWithWhereUniqueWithoutProcessInstanceInput
}

export interface BpmnProcessInstanceUpdateOneInput {
  create?: BpmnProcessInstanceCreateInput
  connect?: BpmnProcessInstanceWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: BpmnProcessInstanceUpdateDataInput
  upsert?: BpmnProcessInstanceUpsertNestedInput
}

export interface BpmnTaskSubscriptionWhereInput {
  AND?: BpmnTaskSubscriptionWhereInput[] | BpmnTaskSubscriptionWhereInput
  OR?: BpmnTaskSubscriptionWhereInput[] | BpmnTaskSubscriptionWhereInput
  NOT?: BpmnTaskSubscriptionWhereInput[] | BpmnTaskSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BpmnTaskWhereInput
}

export interface BpmnProcessInstanceUpdateDataInput {
  dateFinished?: DateTime
  dateStarted?: DateTime
  duration?: Int
  ownerId?: ID_Input
  processId?: ID_Input
  data?: String
  status?: BpmnProcessInstanceStatus
  comments?: CommentUpdateManyInput
  owner?: UserUpdateOneWithoutProcessesInput
  process?: BpmnProcessUpdateOneInput
  log?: LogUpdateManyInput
  tasks?: BpmnTaskInstanceUpdateManyWithoutProcessInstanceInput
}

export interface CommentSubscriptionWhereInput {
  AND?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  OR?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  NOT?: CommentSubscriptionWhereInput[] | CommentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CommentWhereInput
}

export interface CommentUpdateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  update?: CommentUpdateWithWhereUniqueNestedInput[] | CommentUpdateWithWhereUniqueNestedInput
  upsert?: CommentUpsertWithWhereUniqueNestedInput[] | CommentUpsertWithWhereUniqueNestedInput
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

export interface CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  data: CommentUpdateDataInput
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

export interface CommentUpdateDataInput {
  text?: String
  userId?: ID_Input
  date?: DateTime
  replyTo?: ID_Input
  user?: UserUpdateOneInput
}

export interface NotificationWhereUniqueInput {
  id?: ID_Input
}

export interface CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  update: CommentUpdateDataInput
  create: CommentCreateInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  uid?: String
}

export interface UserUpdateOneWithoutProcessesInput {
  create?: UserCreateWithoutProcessesInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutProcessesDataInput
  upsert?: UserUpsertWithoutProcessesInput
}

export interface ProcessResourceUpdateInput {
  resourceId?: ID_Input
  readRole?: String
  resource?: ResourceUpdateOneInput
}

export interface UserUpdateWithoutProcessesDataInput {
  uid?: String
  name?: String
  description?: String
  password?: String
  roles?: UserUpdaterolesInput
  notifications?: NotificationUpdateManyWithoutUserInput
  data?: DataUpdateManyInput
}

export interface UserUpdateOneWithoutNotificationsInput {
  create?: UserCreateWithoutNotificationsInput
  connect?: UserWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: UserUpdateWithoutNotificationsDataInput
  upsert?: UserUpsertWithoutNotificationsInput
}

export interface DataUpdateManyInput {
  create?: DataCreateInput[] | DataCreateInput
  connect?: DataWhereUniqueInput[] | DataWhereUniqueInput
  disconnect?: DataWhereUniqueInput[] | DataWhereUniqueInput
  delete?: DataWhereUniqueInput[] | DataWhereUniqueInput
  update?: DataUpdateWithWhereUniqueNestedInput[] | DataUpdateWithWhereUniqueNestedInput
  upsert?: DataUpsertWithWhereUniqueNestedInput[] | DataUpsertWithWhereUniqueNestedInput
}

export interface BpmnProcessInstanceUpdateWithoutOwnerDataInput {
  dateFinished?: DateTime
  dateStarted?: DateTime
  duration?: Int
  ownerId?: ID_Input
  processId?: ID_Input
  data?: String
  status?: BpmnProcessInstanceStatus
  comments?: CommentUpdateManyInput
  process?: BpmnProcessUpdateOneInput
  log?: LogUpdateManyInput
  tasks?: BpmnTaskInstanceUpdateManyWithoutProcessInstanceInput
}

export interface DataUpdateWithWhereUniqueNestedInput {
  where: DataWhereUniqueInput
  data: DataUpdateDataInput
}

export interface BpmnTaskInstanceUpdateWithoutProcessInstanceDataInput {
  dateFinished?: DateTime
  dateStarted?: DateTime
  duration?: Int
  performerId?: ID_Input
  performerRoleId?: ID_Input
  performerRole?: ID_Input
  data?: Json
  status?: BpmnTaskInstanceStatus
  taskId?: ID_Input
  performer?: UserUpdateOneInput
  task?: BpmnTaskUpdateOneInput
}

export interface DataUpdateDataInput {
  schemaId?: ID_Input
  version?: Int
  date?: DateTime
  value?: String
  schema?: SchemaUpdateOneInput
}

export interface LogSubscriptionWhereInput {
  AND?: LogSubscriptionWhereInput[] | LogSubscriptionWhereInput
  OR?: LogSubscriptionWhereInput[] | LogSubscriptionWhereInput
  NOT?: LogSubscriptionWhereInput[] | LogSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: LogWhereInput
}

export interface SchemaUpdateOneInput {
  create?: SchemaCreateInput
  connect?: SchemaWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: SchemaUpdateDataInput
  upsert?: SchemaUpsertNestedInput
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

export interface SchemaUpdateDataInput {
  name?: String
  description?: String
  schema?: Json
  version?: Int
  date?: DateTime
}

export interface BpmnProcessInstanceWhereUniqueInput {
  id?: ID_Input
}

export interface SchemaUpsertNestedInput {
  update: SchemaUpdateDataInput
  create: SchemaCreateInput
}

export interface RoleUpdateInput {
  name?: String
  description?: String
}

export interface BpmnProcessInstanceUpsertNestedInput {
  update: BpmnProcessInstanceUpdateDataInput
  create: BpmnProcessInstanceCreateInput
}

export interface BpmnProcessUpdateDataInput {
  processID?: ID_Input
  actionCount?: Int
  schema?: Json
  description?: String
  model?: String
  name?: String
  type?: String
  publicationStatus?: PublicationStatus
  version?: Int
  createdById?: ID_Input
  updatedById?: ID_Input
  readRole?: String
  readUser?: String
  writeRole?: String
  writeUser?: String
  executeRole?: String
  executeUser?: String
  tasks?: BpmnTaskUpdateManyInput
  resources?: ProcessResourceUpdateManyInput
}

export interface BpmnProcessUpdateOneInput {
  create?: BpmnProcessCreateInput
  connect?: BpmnProcessWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: BpmnProcessUpdateDataInput
  upsert?: BpmnProcessUpsertNestedInput
}

export interface UserUpsertWithoutProcessesInput {
  update: UserUpdateWithoutProcessesDataInput
  create: UserCreateWithoutProcessesInput
}

export interface DataUpsertWithWhereUniqueNestedInput {
  where: DataWhereUniqueInput
  update: DataUpdateDataInput
  create: DataCreateInput
}

export interface LogUpdateDataInput {
  elementId?: String
  elementName?: String
  date?: DateTime
  taskInstanceId?: ID_Input
  status?: BpmnTaskInstanceStatus
  message?: String
  performer?: UserUpdateOneInput
}

export interface BpmnProcessInstanceUpdateWithoutTasksDataInput {
  dateFinished?: DateTime
  dateStarted?: DateTime
  duration?: Int
  ownerId?: ID_Input
  processId?: ID_Input
  data?: String
  status?: BpmnProcessInstanceStatus
  comments?: CommentUpdateManyInput
  owner?: UserUpdateOneWithoutProcessesInput
  process?: BpmnProcessUpdateOneInput
  log?: LogUpdateManyInput
}

export interface BpmnProcessWhereUniqueInput {
  id?: ID_Input
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
  uid?: String
  uid_not?: String
  uid_in?: String[] | String
  uid_not_in?: String[] | String
  uid_lt?: String
  uid_lte?: String
  uid_gt?: String
  uid_gte?: String
  uid_contains?: String
  uid_not_contains?: String
  uid_starts_with?: String
  uid_not_starts_with?: String
  uid_ends_with?: String
  uid_not_ends_with?: String
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
  processes_every?: BpmnProcessInstanceWhereInput
  processes_some?: BpmnProcessInstanceWhereInput
  processes_none?: BpmnProcessInstanceWhereInput
  data_every?: DataWhereInput
  data_some?: DataWhereInput
  data_none?: DataWhereInput
  _MagicalBackRelation_CommentToUser_every?: CommentWhereInput
  _MagicalBackRelation_CommentToUser_some?: CommentWhereInput
  _MagicalBackRelation_CommentToUser_none?: CommentWhereInput
  _MagicalBackRelation_LogToUser_every?: LogWhereInput
  _MagicalBackRelation_LogToUser_some?: LogWhereInput
  _MagicalBackRelation_LogToUser_none?: LogWhereInput
  _MagicalBackRelation_UserTasks_every?: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_UserTasks_some?: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_UserTasks_none?: BpmnTaskInstanceWhereInput
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

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface BpmnProcessPreviousValues {
  id: ID_Output
  processID?: ID_Output
  actionCount: Int
  schema?: Json
  description?: String
  model: String
  name: String
  type: String
  publicationStatus: PublicationStatus
  version: Int
  createdAt: DateTime
  createdById: ID_Output
  updatedAt: DateTime
  updatedById?: ID_Output
  readRole?: String
  readUser?: String
  writeRole?: String
  writeUser?: String
  executeRole?: String
  executeUser?: String
}

export interface User extends Node {
  id: ID_Output
  uid: String
  name: String
  roles: ID_Output[]
  description?: String
  password: String
  notifications?: Notification[]
  processes?: BpmnProcessInstance[]
  data?: Data[]
}

export interface Role extends Node {
  id: ID_Output
  name: String
  description?: String
}

export interface AggregateBpmnProcess {
  count: Int
}

export interface BatchPayload {
  count: Long
}

/*
 * A connection to a list of items.

 */
export interface BpmnProcessConnection {
  pageInfo: PageInfo
  edges: BpmnProcessEdge[]
  aggregate: AggregateBpmnProcess
}

/*
 * An edge in a connection.

 */
export interface BpmnProcessEdge {
  node: BpmnProcess
  cursor: String
}

export interface BpmnTaskPreviousValues {
  id: ID_Output
  taskId: ID_Output
  name: String
  type?: BpmnTaskType
}

export interface AggregateData {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface DataEdge {
  node: Data
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface DataConnection {
  pageInfo: PageInfo
  edges: DataEdge[]
  aggregate: AggregateData
}

/*
 * An edge in a connection.

 */
export interface BpmnTaskEdge {
  node: BpmnTask
  cursor: String
}

export interface Organisation extends Node {
  id: ID_Output
  name: String
  description?: String
}

export interface AggregateSchema {
  count: Int
}

export interface DataPreviousValues {
  id: ID_Output
  schemaId: ID_Output
  version?: Int
  date?: DateTime
  value?: String
}

/*
 * A connection to a list of items.

 */
export interface SchemaConnection {
  pageInfo: PageInfo
  edges: SchemaEdge[]
  aggregate: AggregateSchema
}

export interface BpmnTaskInstanceSubscriptionPayload {
  mutation: MutationType
  node?: BpmnTaskInstance
  updatedFields?: String[]
  previousValues?: BpmnTaskInstancePreviousValues
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface BpmnTaskInstancePreviousValues {
  id: ID_Output
  dateFinished?: DateTime
  dateStarted: DateTime
  duration?: Int
  performerId?: ID_Output
  performerRoleId?: ID_Output
  performerRole?: ID_Output
  data?: Json
  status: BpmnTaskInstanceStatus
  taskId: ID_Output
}

export interface AggregateLog {
  count: Int
}

export interface DataSubscriptionPayload {
  mutation: MutationType
  node?: Data
  updatedFields?: String[]
  previousValues?: DataPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface LogConnection {
  pageInfo: PageInfo
  edges: LogEdge[]
  aggregate: AggregateLog
}

export interface LocalisationSubscriptionPayload {
  mutation: MutationType
  node?: Localisation
  updatedFields?: String[]
  previousValues?: LocalisationPreviousValues
}

/*
 * An edge in a connection.

 */
export interface ProcessResourceEdge {
  node: ProcessResource
  cursor: String
}

export interface LocalisationPreviousValues {
  id: ID_Output
  code: String
  text: String
  language: LanguageCode
}

export interface AggregateComment {
  count: Int
}

export interface Localisation extends Node {
  id: ID_Output
  code: String
  text: String
  language: LanguageCode
}

/*
 * A connection to a list of items.

 */
export interface CommentConnection {
  pageInfo: PageInfo
  edges: CommentEdge[]
  aggregate: AggregateComment
}

export interface NotificationSubscriptionPayload {
  mutation: MutationType
  node?: Notification
  updatedFields?: String[]
  previousValues?: NotificationPreviousValues
}

/*
 * An edge in a connection.

 */
export interface BpmnProcessInstanceEdge {
  node: BpmnProcessInstance
  cursor: String
}

export interface NotificationPreviousValues {
  type: NotificationType
  id: ID_Output
  userId: ID_Output
  createdAt: DateTime
  code: NotificationCode
  text?: String
  processInstanceId: ID_Output
  params?: String
  visible: Boolean
}

export interface AggregateResource {
  count: Int
}

export interface Schema extends Node {
  id: ID_Output
  name: String
  description: String
  schema: Json
  version?: Int
  date?: DateTime
}

/*
 * A connection to a list of items.

 */
export interface ResourceConnection {
  pageInfo: PageInfo
  edges: ResourceEdge[]
  aggregate: AggregateResource
}

export interface OrganisationSubscriptionPayload {
  mutation: MutationType
  node?: Organisation
  updatedFields?: String[]
  previousValues?: OrganisationPreviousValues
}

/*
 * An edge in a connection.

 */
export interface RoleEdge {
  node: Role
  cursor: String
}

export interface OrganisationPreviousValues {
  id: ID_Output
  name: String
  description?: String
}

export interface AggregateOrganisation {
  count: Int
}

export interface Data extends Node {
  id: ID_Output
  schemaId: ID_Output
  schema?: Schema
  version?: Int
  date?: DateTime
  value?: String
}

/*
 * A connection to a list of items.

 */
export interface OrganisationConnection {
  pageInfo: PageInfo
  edges: OrganisationEdge[]
  aggregate: AggregateOrganisation
}

export interface RoleSubscriptionPayload {
  mutation: MutationType
  node?: Role
  updatedFields?: String[]
  previousValues?: RolePreviousValues
}

/*
 * An edge in a connection.

 */
export interface NotificationEdge {
  node: Notification
  cursor: String
}

export interface RolePreviousValues {
  id: ID_Output
  name: String
  description?: String
}

export interface AggregateLocalisation {
  count: Int
}

export interface Log extends Node {
  id: ID_Output
  elementId: String
  elementName: String
  date: DateTime
  taskInstanceId?: ID_Output
  performer?: User
  status?: BpmnTaskInstanceStatus
  message?: String
}

/*
 * A connection to a list of items.

 */
export interface LocalisationConnection {
  pageInfo: PageInfo
  edges: LocalisationEdge[]
  aggregate: AggregateLocalisation
}

export interface ResourceSubscriptionPayload {
  mutation: MutationType
  node?: Resource
  updatedFields?: String[]
  previousValues?: ResourcePreviousValues
}

/*
 * An edge in a connection.

 */
export interface BpmnTaskInstanceEdge {
  node: BpmnTaskInstance
  cursor: String
}

export interface ResourcePreviousValues {
  id: ID_Output
  resourceId: ID_Output
  type: ResourceType
  title: String
  content: String
  version: Int
  publicationStatus: PublicationStatus
  createdById: ID_Output
  updatedById?: ID_Output
  readRole?: String
  readUser?: String
  writeRole?: String
  writeUser?: String
}

/*
 * A connection to a list of items.

 */
export interface BpmnTaskInstanceConnection {
  pageInfo: PageInfo
  edges: BpmnTaskInstanceEdge[]
  aggregate: AggregateBpmnTaskInstance
}

export interface ProcessResource extends Node {
  id: ID_Output
  resourceId: ID_Output
  resource?: Resource
  readRole?: String
}

export interface BpmnTaskInstance extends Node {
  id: ID_Output
  dateFinished?: DateTime
  dateStarted: DateTime
  duration?: Int
  performerId?: ID_Output
  performer?: User
  performerRoleId?: ID_Output
  performerRole?: ID_Output
  processInstance: BpmnProcessInstance
  data?: Json
  status: BpmnTaskInstanceStatus
  taskId: ID_Output
  task?: BpmnTask
}

export interface BpmnProcessInstanceSubscriptionPayload {
  mutation: MutationType
  node?: BpmnProcessInstance
  updatedFields?: String[]
  previousValues?: BpmnProcessInstancePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface BpmnTaskConnection {
  pageInfo: PageInfo
  edges: BpmnTaskEdge[]
  aggregate: AggregateBpmnTask
}

export interface BpmnProcessInstancePreviousValues {
  id: ID_Output
  dateFinished?: DateTime
  dateStarted: DateTime
  duration?: Int
  ownerId: ID_Output
  processId: ID_Output
  data: String
  status: BpmnProcessInstanceStatus
}

export interface AggregateUser {
  count: Int
}

export interface Resource extends Node {
  id: ID_Output
  resourceId: ID_Output
  type: ResourceType
  title: String
  content: String
  version: Int
  publicationStatus: PublicationStatus
  createdById: ID_Output
  updatedById?: ID_Output
  readRole?: String
  readUser?: String
  writeRole?: String
  writeUser?: String
}

/*
 * An edge in a connection.

 */
export interface LogEdge {
  node: Log
  cursor: String
}

export interface CommentSubscriptionPayload {
  mutation: MutationType
  node?: Comment
  updatedFields?: String[]
  previousValues?: CommentPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ProcessResourceConnection {
  pageInfo: PageInfo
  edges: ProcessResourceEdge[]
  aggregate: AggregateProcessResource
}

export interface CommentPreviousValues {
  id: ID_Output
  text: String
  userId: ID_Output
  date: DateTime
  replyTo?: ID_Output
}

export interface AggregateBpmnProcessInstance {
  count: Int
}

export interface BpmnTask extends Node {
  id: ID_Output
  taskId: ID_Output
  resources?: Resource[]
  name: String
  type?: BpmnTaskType
}

/*
 * An edge in a connection.

 */
export interface ResourceEdge {
  node: Resource
  cursor: String
}

export interface ProcessResourceSubscriptionPayload {
  mutation: MutationType
  node?: ProcessResource
  updatedFields?: String[]
  previousValues?: ProcessResourcePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface RoleConnection {
  pageInfo: PageInfo
  edges: RoleEdge[]
  aggregate: AggregateRole
}

export interface ProcessResourcePreviousValues {
  id: ID_Output
  resourceId: ID_Output
  readRole?: String
}

export interface AggregateNotification {
  count: Int
}

export interface Notification extends Node {
  type: NotificationType
  id: ID_Output
  userId: ID_Output
  user?: User
  createdAt: DateTime
  code: NotificationCode
  text?: String
  processInstanceId: ID_Output
  processInstance?: BpmnProcessInstance
  params?: String
  visible: Boolean
}

/*
 * An edge in a connection.

 */
export interface LocalisationEdge {
  node: Localisation
  cursor: String
}

export interface LogSubscriptionPayload {
  mutation: MutationType
  node?: Log
  updatedFields?: String[]
  previousValues?: LogPreviousValues
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

export interface LogPreviousValues {
  id: ID_Output
  elementId: String
  elementName: String
  date: DateTime
  taskInstanceId?: ID_Output
  status?: BpmnTaskInstanceStatus
  message?: String
}

export interface AggregateBpmnTask {
  count: Int
}

export interface BpmnProcess extends Node {
  id: ID_Output
  processID?: ID_Output
  actionCount: Int
  schema?: Json
  description?: String
  model: String
  name: String
  tasks?: BpmnTask[]
  type: String
  resources?: ProcessResource[]
  publicationStatus: PublicationStatus
  version: Int
  createdAt: DateTime
  createdById: ID_Output
  updatedAt: DateTime
  updatedById?: ID_Output
  readRole?: String
  readUser?: String
  writeRole?: String
  writeUser?: String
  executeRole?: String
  executeUser?: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * An edge in a connection.

 */
export interface CommentEdge {
  node: Comment
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  uid: String
  name: String
  roles: ID_Output[]
  description?: String
  password: String
}

export interface AggregateRole {
  count: Int
}

export interface Comment extends Node {
  id: ID_Output
  text: String
  userId: ID_Output
  user?: User
  date: DateTime
  replyTo?: ID_Output
}

/*
 * A connection to a list of items.

 */
export interface NotificationConnection {
  pageInfo: PageInfo
  edges: NotificationEdge[]
  aggregate: AggregateNotification
}

export interface BpmnProcessSubscriptionPayload {
  mutation: MutationType
  node?: BpmnProcess
  updatedFields?: String[]
  previousValues?: BpmnProcessPreviousValues
}

export interface BpmnTaskSubscriptionPayload {
  mutation: MutationType
  node?: BpmnTask
  updatedFields?: String[]
  previousValues?: BpmnTaskPreviousValues
}

export interface BpmnProcessInstance extends Node {
  id: ID_Output
  comments?: Comment[]
  dateFinished?: DateTime
  dateStarted: DateTime
  duration?: Int
  ownerId: ID_Output
  owner?: User
  processId: ID_Output
  process?: BpmnProcess
  data: String
  log?: Log[]
  status: BpmnProcessInstanceStatus
  tasks?: BpmnTaskInstance[]
}

export interface SchemaPreviousValues {
  id: ID_Output
  name: String
  description: String
  schema: Json
  version?: Int
  date?: DateTime
}

export interface SchemaSubscriptionPayload {
  mutation: MutationType
  node?: Schema
  updatedFields?: String[]
  previousValues?: SchemaPreviousValues
}

/*
 * An edge in a connection.

 */
export interface SchemaEdge {
  node: Schema
  cursor: String
}

export interface AggregateBpmnTaskInstance {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface OrganisationEdge {
  node: Organisation
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface BpmnProcessInstanceConnection {
  pageInfo: PageInfo
  edges: BpmnProcessInstanceEdge[]
  aggregate: AggregateBpmnProcessInstance
}

export interface AggregateProcessResource {
  count: Int
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

export type DateTime = Date | string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
Raw JSON value
*/
export type Json = any