import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    localisations: <T = Localisation[]>(args: { where?: LocalisationWhereInput, orderBy?: LocalisationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    organisations: <T = Organisation[]>(args: { where?: OrganisationWhereInput, orderBy?: OrganisationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    roles: <T = Role[]>(args: { where?: RoleWhereInput, orderBy?: RoleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    validators: <T = Validator[]>(args: { where?: ValidatorWhereInput, orderBy?: ValidatorOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    forms: <T = Form[]>(args: { where?: FormWhereInput, orderBy?: FormOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    formElements: <T = FormElement[]>(args: { where?: FormElementWhereInput, orderBy?: FormElementOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comments: <T = Comment[]>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notifications: <T = Notification[]>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    documents: <T = Document[]>(args: { where?: DocumentWhereInput, orderBy?: DocumentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    logs: <T = Log[]>(args: { where?: LogWhereInput, orderBy?: LogOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    accessConditions: <T = AccessCondition[]>(args: { where?: AccessConditionWhereInput, orderBy?: AccessConditionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    dataDescriptors: <T = DataDescriptor[]>(args: { where?: DataDescriptorWhereInput, orderBy?: DataDescriptorOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    resources: <T = Resource[]>(args: { where?: ResourceWhereInput, orderBy?: ResourceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    accesses: <T = Access[]>(args: { where?: AccessWhereInput, orderBy?: AccessOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    datas: <T = Data[]>(args: { where?: DataWhereInput, orderBy?: DataOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnTaskInstances: <T = BpmnTaskInstance[]>(args: { where?: BpmnTaskInstanceWhereInput, orderBy?: BpmnTaskInstanceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnProcesses: <T = BpmnProcess[]>(args: { where?: BpmnProcessWhereInput, orderBy?: BpmnProcessOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnTasks: <T = BpmnTask[]>(args: { where?: BpmnTaskWhereInput, orderBy?: BpmnTaskOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnProcessInstances: <T = BpmnProcessInstance[]>(args: { where?: BpmnProcessInstanceWhereInput, orderBy?: BpmnProcessInstanceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    localisation: <T = Localisation | null>(args: { where: LocalisationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    organisation: <T = Organisation | null>(args: { where: OrganisationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    role: <T = Role | null>(args: { where: RoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    validator: <T = Validator | null>(args: { where: ValidatorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    form: <T = Form | null>(args: { where: FormWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    formElement: <T = FormElement | null>(args: { where: FormElementWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    comment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    document: <T = Document | null>(args: { where: DocumentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    log: <T = Log | null>(args: { where: LogWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    dataDescriptor: <T = DataDescriptor | null>(args: { where: DataDescriptorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    resource: <T = Resource | null>(args: { where: ResourceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    access: <T = Access | null>(args: { where: AccessWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    data: <T = Data | null>(args: { where: DataWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnTaskInstance: <T = BpmnTaskInstance | null>(args: { where: BpmnTaskInstanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnProcess: <T = BpmnProcess | null>(args: { where: BpmnProcessWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnTask: <T = BpmnTask | null>(args: { where: BpmnTaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnProcessInstance: <T = BpmnProcessInstance | null>(args: { where: BpmnProcessInstanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    localisationsConnection: <T = LocalisationConnection>(args: { where?: LocalisationWhereInput, orderBy?: LocalisationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    organisationsConnection: <T = OrganisationConnection>(args: { where?: OrganisationWhereInput, orderBy?: OrganisationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    rolesConnection: <T = RoleConnection>(args: { where?: RoleWhereInput, orderBy?: RoleOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    validatorsConnection: <T = ValidatorConnection>(args: { where?: ValidatorWhereInput, orderBy?: ValidatorOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    formsConnection: <T = FormConnection>(args: { where?: FormWhereInput, orderBy?: FormOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    formElementsConnection: <T = FormElementConnection>(args: { where?: FormElementWhereInput, orderBy?: FormElementOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    commentsConnection: <T = CommentConnection>(args: { where?: CommentWhereInput, orderBy?: CommentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    notificationsConnection: <T = NotificationConnection>(args: { where?: NotificationWhereInput, orderBy?: NotificationOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    documentsConnection: <T = DocumentConnection>(args: { where?: DocumentWhereInput, orderBy?: DocumentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    logsConnection: <T = LogConnection>(args: { where?: LogWhereInput, orderBy?: LogOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    accessConditionsConnection: <T = AccessConditionConnection>(args: { where?: AccessConditionWhereInput, orderBy?: AccessConditionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    dataDescriptorsConnection: <T = DataDescriptorConnection>(args: { where?: DataDescriptorWhereInput, orderBy?: DataDescriptorOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    resourcesConnection: <T = ResourceConnection>(args: { where?: ResourceWhereInput, orderBy?: ResourceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    accessesConnection: <T = AccessConnection>(args: { where?: AccessWhereInput, orderBy?: AccessOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    datasConnection: <T = DataConnection>(args: { where?: DataWhereInput, orderBy?: DataOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnTaskInstancesConnection: <T = BpmnTaskInstanceConnection>(args: { where?: BpmnTaskInstanceWhereInput, orderBy?: BpmnTaskInstanceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnProcessesConnection: <T = BpmnProcessConnection>(args: { where?: BpmnProcessWhereInput, orderBy?: BpmnProcessOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnTasksConnection: <T = BpmnTaskConnection>(args: { where?: BpmnTaskWhereInput, orderBy?: BpmnTaskOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    bpmnProcessInstancesConnection: <T = BpmnProcessInstanceConnection>(args: { where?: BpmnProcessInstanceWhereInput, orderBy?: BpmnProcessInstanceOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createLocalisation: <T = Localisation>(args: { data: LocalisationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createOrganisation: <T = Organisation>(args: { data: OrganisationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createRole: <T = Role>(args: { data: RoleCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createValidator: <T = Validator>(args: { data: ValidatorCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createForm: <T = Form>(args: { data: FormCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFormElement: <T = FormElement>(args: { data: FormElementCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createComment: <T = Comment>(args: { data: CommentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createNotification: <T = Notification>(args: { data: NotificationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createDocument: <T = Document>(args: { data: DocumentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLog: <T = Log>(args: { data: LogCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAccessCondition: <T = AccessCondition>(args: { data: AccessConditionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createDataDescriptor: <T = DataDescriptor>(args: { data: DataDescriptorCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createResource: <T = Resource>(args: { data: ResourceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createAccess: <T = Access>(args: { data: AccessCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createData: <T = Data>(args: { data: DataCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBpmnTaskInstance: <T = BpmnTaskInstance>(args: { data: BpmnTaskInstanceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBpmnProcess: <T = BpmnProcess>(args: { data: BpmnProcessCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBpmnTask: <T = BpmnTask>(args: { data: BpmnTaskCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createBpmnProcessInstance: <T = BpmnProcessInstance>(args: { data: BpmnProcessInstanceCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLocalisation: <T = Localisation | null>(args: { data: LocalisationUpdateInput, where: LocalisationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateOrganisation: <T = Organisation | null>(args: { data: OrganisationUpdateInput, where: OrganisationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateRole: <T = Role | null>(args: { data: RoleUpdateInput, where: RoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateValidator: <T = Validator | null>(args: { data: ValidatorUpdateInput, where: ValidatorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateForm: <T = Form | null>(args: { data: FormUpdateInput, where: FormWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFormElement: <T = FormElement | null>(args: { data: FormElementUpdateInput, where: FormElementWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateComment: <T = Comment | null>(args: { data: CommentUpdateInput, where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateNotification: <T = Notification | null>(args: { data: NotificationUpdateInput, where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateDocument: <T = Document | null>(args: { data: DocumentUpdateInput, where: DocumentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateLog: <T = Log | null>(args: { data: LogUpdateInput, where: LogWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateDataDescriptor: <T = DataDescriptor | null>(args: { data: DataDescriptorUpdateInput, where: DataDescriptorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateResource: <T = Resource | null>(args: { data: ResourceUpdateInput, where: ResourceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateAccess: <T = Access | null>(args: { data: AccessUpdateInput, where: AccessWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateData: <T = Data | null>(args: { data: DataUpdateInput, where: DataWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBpmnTaskInstance: <T = BpmnTaskInstance | null>(args: { data: BpmnTaskInstanceUpdateInput, where: BpmnTaskInstanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBpmnProcess: <T = BpmnProcess | null>(args: { data: BpmnProcessUpdateInput, where: BpmnProcessWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBpmnTask: <T = BpmnTask | null>(args: { data: BpmnTaskUpdateInput, where: BpmnTaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateBpmnProcessInstance: <T = BpmnProcessInstance | null>(args: { data: BpmnProcessInstanceUpdateInput, where: BpmnProcessInstanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLocalisation: <T = Localisation | null>(args: { where: LocalisationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteOrganisation: <T = Organisation | null>(args: { where: OrganisationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteRole: <T = Role | null>(args: { where: RoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteValidator: <T = Validator | null>(args: { where: ValidatorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteForm: <T = Form | null>(args: { where: FormWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFormElement: <T = FormElement | null>(args: { where: FormElementWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteComment: <T = Comment | null>(args: { where: CommentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteNotification: <T = Notification | null>(args: { where: NotificationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteDocument: <T = Document | null>(args: { where: DocumentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteLog: <T = Log | null>(args: { where: LogWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteDataDescriptor: <T = DataDescriptor | null>(args: { where: DataDescriptorWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteResource: <T = Resource | null>(args: { where: ResourceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteAccess: <T = Access | null>(args: { where: AccessWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteData: <T = Data | null>(args: { where: DataWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteBpmnTaskInstance: <T = BpmnTaskInstance | null>(args: { where: BpmnTaskInstanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteBpmnProcess: <T = BpmnProcess | null>(args: { where: BpmnProcessWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteBpmnTask: <T = BpmnTask | null>(args: { where: BpmnTaskWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteBpmnProcessInstance: <T = BpmnProcessInstance | null>(args: { where: BpmnProcessInstanceWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLocalisation: <T = Localisation>(args: { where: LocalisationWhereUniqueInput, create: LocalisationCreateInput, update: LocalisationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertOrganisation: <T = Organisation>(args: { where: OrganisationWhereUniqueInput, create: OrganisationCreateInput, update: OrganisationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertRole: <T = Role>(args: { where: RoleWhereUniqueInput, create: RoleCreateInput, update: RoleUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertValidator: <T = Validator>(args: { where: ValidatorWhereUniqueInput, create: ValidatorCreateInput, update: ValidatorUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertForm: <T = Form>(args: { where: FormWhereUniqueInput, create: FormCreateInput, update: FormUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFormElement: <T = FormElement>(args: { where: FormElementWhereUniqueInput, create: FormElementCreateInput, update: FormElementUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertComment: <T = Comment>(args: { where: CommentWhereUniqueInput, create: CommentCreateInput, update: CommentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertNotification: <T = Notification>(args: { where: NotificationWhereUniqueInput, create: NotificationCreateInput, update: NotificationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertDocument: <T = Document>(args: { where: DocumentWhereUniqueInput, create: DocumentCreateInput, update: DocumentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLog: <T = Log>(args: { where: LogWhereUniqueInput, create: LogCreateInput, update: LogUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertDataDescriptor: <T = DataDescriptor>(args: { where: DataDescriptorWhereUniqueInput, create: DataDescriptorCreateInput, update: DataDescriptorUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertResource: <T = Resource>(args: { where: ResourceWhereUniqueInput, create: ResourceCreateInput, update: ResourceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertAccess: <T = Access>(args: { where: AccessWhereUniqueInput, create: AccessCreateInput, update: AccessUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertData: <T = Data>(args: { where: DataWhereUniqueInput, create: DataCreateInput, update: DataUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBpmnTaskInstance: <T = BpmnTaskInstance>(args: { where: BpmnTaskInstanceWhereUniqueInput, create: BpmnTaskInstanceCreateInput, update: BpmnTaskInstanceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBpmnProcess: <T = BpmnProcess>(args: { where: BpmnProcessWhereUniqueInput, create: BpmnProcessCreateInput, update: BpmnProcessUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBpmnTask: <T = BpmnTask>(args: { where: BpmnTaskWhereUniqueInput, create: BpmnTaskCreateInput, update: BpmnTaskUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertBpmnProcessInstance: <T = BpmnProcessInstance>(args: { where: BpmnProcessInstanceWhereUniqueInput, create: BpmnProcessInstanceCreateInput, update: BpmnProcessInstanceUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLocalisations: <T = BatchPayload>(args: { data: LocalisationUpdateInput, where?: LocalisationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyOrganisations: <T = BatchPayload>(args: { data: OrganisationUpdateInput, where?: OrganisationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRoles: <T = BatchPayload>(args: { data: RoleUpdateInput, where?: RoleWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyValidators: <T = BatchPayload>(args: { data: ValidatorUpdateInput, where?: ValidatorWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyForms: <T = BatchPayload>(args: { data: FormUpdateInput, where?: FormWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFormElements: <T = BatchPayload>(args: { data: FormElementUpdateInput, where?: FormElementWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyComments: <T = BatchPayload>(args: { data: CommentUpdateInput, where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyNotifications: <T = BatchPayload>(args: { data: NotificationUpdateInput, where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyDocuments: <T = BatchPayload>(args: { data: DocumentUpdateInput, where?: DocumentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLogs: <T = BatchPayload>(args: { data: LogUpdateInput, where?: LogWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAccessConditions: <T = BatchPayload>(args: { data: AccessConditionUpdateInput, where?: AccessConditionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyDataDescriptors: <T = BatchPayload>(args: { data: DataDescriptorUpdateInput, where?: DataDescriptorWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyResources: <T = BatchPayload>(args: { data: ResourceUpdateInput, where?: ResourceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyAccesses: <T = BatchPayload>(args: { data: AccessUpdateInput, where?: AccessWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyDatas: <T = BatchPayload>(args: { data: DataUpdateInput, where?: DataWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBpmnTaskInstances: <T = BatchPayload>(args: { data: BpmnTaskInstanceUpdateInput, where?: BpmnTaskInstanceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBpmnProcesses: <T = BatchPayload>(args: { data: BpmnProcessUpdateInput, where?: BpmnProcessWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBpmnTasks: <T = BatchPayload>(args: { data: BpmnTaskUpdateInput, where?: BpmnTaskWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyBpmnProcessInstances: <T = BatchPayload>(args: { data: BpmnProcessInstanceUpdateInput, where?: BpmnProcessInstanceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLocalisations: <T = BatchPayload>(args: { where?: LocalisationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyOrganisations: <T = BatchPayload>(args: { where?: OrganisationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRoles: <T = BatchPayload>(args: { where?: RoleWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyValidators: <T = BatchPayload>(args: { where?: ValidatorWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyForms: <T = BatchPayload>(args: { where?: FormWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFormElements: <T = BatchPayload>(args: { where?: FormElementWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyComments: <T = BatchPayload>(args: { where?: CommentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyNotifications: <T = BatchPayload>(args: { where?: NotificationWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyDocuments: <T = BatchPayload>(args: { where?: DocumentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLogs: <T = BatchPayload>(args: { where?: LogWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAccessConditions: <T = BatchPayload>(args: { where?: AccessConditionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyDataDescriptors: <T = BatchPayload>(args: { where?: DataDescriptorWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyResources: <T = BatchPayload>(args: { where?: ResourceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyAccesses: <T = BatchPayload>(args: { where?: AccessWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyDatas: <T = BatchPayload>(args: { where?: DataWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBpmnTaskInstances: <T = BatchPayload>(args: { where?: BpmnTaskInstanceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBpmnProcesses: <T = BatchPayload>(args: { where?: BpmnProcessWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBpmnTasks: <T = BatchPayload>(args: { where?: BpmnTaskWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyBpmnProcessInstances: <T = BatchPayload>(args: { where?: BpmnProcessInstanceWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    localisation: <T = LocalisationSubscriptionPayload | null>(args: { where?: LocalisationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    organisation: <T = OrganisationSubscriptionPayload | null>(args: { where?: OrganisationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    role: <T = RoleSubscriptionPayload | null>(args: { where?: RoleSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    validator: <T = ValidatorSubscriptionPayload | null>(args: { where?: ValidatorSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    form: <T = FormSubscriptionPayload | null>(args: { where?: FormSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    formElement: <T = FormElementSubscriptionPayload | null>(args: { where?: FormElementSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    comment: <T = CommentSubscriptionPayload | null>(args: { where?: CommentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    notification: <T = NotificationSubscriptionPayload | null>(args: { where?: NotificationSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    document: <T = DocumentSubscriptionPayload | null>(args: { where?: DocumentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    log: <T = LogSubscriptionPayload | null>(args: { where?: LogSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    accessCondition: <T = AccessConditionSubscriptionPayload | null>(args: { where?: AccessConditionSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    dataDescriptor: <T = DataDescriptorSubscriptionPayload | null>(args: { where?: DataDescriptorSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    resource: <T = ResourceSubscriptionPayload | null>(args: { where?: ResourceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    access: <T = AccessSubscriptionPayload | null>(args: { where?: AccessSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    data: <T = DataSubscriptionPayload | null>(args: { where?: DataSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    bpmnTaskInstance: <T = BpmnTaskInstanceSubscriptionPayload | null>(args: { where?: BpmnTaskInstanceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    bpmnProcess: <T = BpmnProcessSubscriptionPayload | null>(args: { where?: BpmnProcessSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    bpmnTask: <T = BpmnTaskSubscriptionPayload | null>(args: { where?: BpmnTaskSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    bpmnProcessInstance: <T = BpmnProcessInstanceSubscriptionPayload | null>(args: { where?: BpmnProcessInstanceSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Localisation: (where?: LocalisationWhereInput) => Promise<boolean>
  Organisation: (where?: OrganisationWhereInput) => Promise<boolean>
  Role: (where?: RoleWhereInput) => Promise<boolean>
  Validator: (where?: ValidatorWhereInput) => Promise<boolean>
  Form: (where?: FormWhereInput) => Promise<boolean>
  FormElement: (where?: FormElementWhereInput) => Promise<boolean>
  Comment: (where?: CommentWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Notification: (where?: NotificationWhereInput) => Promise<boolean>
  Document: (where?: DocumentWhereInput) => Promise<boolean>
  Log: (where?: LogWhereInput) => Promise<boolean>
  AccessCondition: (where?: AccessConditionWhereInput) => Promise<boolean>
  DataDescriptor: (where?: DataDescriptorWhereInput) => Promise<boolean>
  Resource: (where?: ResourceWhereInput) => Promise<boolean>
  Access: (where?: AccessWhereInput) => Promise<boolean>
  Data: (where?: DataWhereInput) => Promise<boolean>
  BpmnTaskInstance: (where?: BpmnTaskInstanceWhereInput) => Promise<boolean>
  BpmnProcess: (where?: BpmnProcessWhereInput) => Promise<boolean>
  BpmnTask: (where?: BpmnTaskWhereInput) => Promise<boolean>
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
  _MagicalBackRelation_CanRead_every: AccessWhereInput
  _MagicalBackRelation_CanRead_some: AccessWhereInput
  _MagicalBackRelation_CanRead_none: AccessWhereInput
  _MagicalBackRelation_CanWrite_every: AccessWhereInput
  _MagicalBackRelation_CanWrite_some: AccessWhereInput
  _MagicalBackRelation_CanWrite_none: AccessWhereInput
  _MagicalBackRelation_CanExecute_every: AccessWhereInput
  _MagicalBackRelation_CanExecute_some: AccessWhereInput
  _MagicalBackRelation_CanExecute_none: AccessWhereInput
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
  disconnect: Boolean
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
  _MagicalBackRelation_AccessToDataDescriptor_every: DataDescriptorWhereInput
  _MagicalBackRelation_AccessToDataDescriptor_some: DataDescriptorWhereInput
  _MagicalBackRelation_AccessToDataDescriptor_none: DataDescriptorWhereInput
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

type AggregateDataDescriptor {
  count: Int!
}

type AggregateDocument {
  count: Int!
}

type AggregateForm {
  count: Int!
}

type AggregateFormElement {
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

type AggregateResource {
  count: Int!
}

type AggregateRole {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateValidator {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type BpmnProcess implements Node {
  id: ID!
  access(where: AccessWhereInput): Access!
  actionCount: Int!
  dataDescriptors(where: DataDescriptorWhereInput, orderBy: DataDescriptorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DataDescriptor!]
  description: String
  model: String!
  name: String!
  type: ProcessType!
  resources(where: ResourceWhereInput, orderBy: ResourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Resource!]
  status: ProcessStatus!
  version: Int!
  versions(where: BpmnProcessWhereInput, orderBy: BpmnProcessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BpmnProcess!]
  tasks(where: BpmnTaskWhereInput, orderBy: BpmnTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BpmnTask!]
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
  actionCount: Int!
  description: String
  model: String!
  name: String!
  type: ProcessType!
  status: ProcessStatus!
  version: Int!
  access: AccessCreateOneInput!
  dataDescriptors: DataDescriptorCreateManyInput
  resources: ResourceCreateManyInput
  versions: BpmnProcessCreateManyInput
  tasks: BpmnTaskCreateManyInput
}

input BpmnProcessCreateManyInput {
  create: [BpmnProcessCreateInput!]
  connect: [BpmnProcessWhereUniqueInput!]
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
  owner(where: UserWhereInput): User!
  process(where: BpmnProcessWhereInput): BpmnProcess!
  data: Json!
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
  data: Json!
  status: BpmnProcessInstanceStatus!
  comments: CommentCreateManyInput
  owner: UserCreateOneWithoutProcessesInput!
  process: BpmnProcessCreateOneInput!
  log: LogCreateManyInput
  tasks: BpmnTaskInstanceCreateManyInput
}

input BpmnProcessInstanceCreateManyWithoutOwnerInput {
  create: [BpmnProcessInstanceCreateWithoutOwnerInput!]
  connect: [BpmnProcessInstanceWhereUniqueInput!]
}

input BpmnProcessInstanceCreateOneInput {
  create: BpmnProcessInstanceCreateInput
  connect: BpmnProcessInstanceWhereUniqueInput
}

input BpmnProcessInstanceCreateWithoutOwnerInput {
  dateFinished: DateTime
  dateStarted: DateTime!
  duration: Int
  data: Json!
  status: BpmnProcessInstanceStatus!
  comments: CommentCreateManyInput
  process: BpmnProcessCreateOneInput!
  log: LogCreateManyInput
  tasks: BpmnTaskInstanceCreateManyInput
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
  data: Json!
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
  data: Json
  status: BpmnProcessInstanceStatus
  comments: CommentUpdateManyInput
  owner: UserUpdateOneWithoutProcessesInput
  process: BpmnProcessUpdateOneInput
  log: LogUpdateManyInput
  tasks: BpmnTaskInstanceUpdateManyInput
}

input BpmnProcessInstanceUpdateInput {
  dateFinished: DateTime
  dateStarted: DateTime
  duration: Int
  data: Json
  status: BpmnProcessInstanceStatus
  comments: CommentUpdateManyInput
  owner: UserUpdateOneWithoutProcessesInput
  process: BpmnProcessUpdateOneInput
  log: LogUpdateManyInput
  tasks: BpmnTaskInstanceUpdateManyInput
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
  delete: Boolean
  update: BpmnProcessInstanceUpdateDataInput
  upsert: BpmnProcessInstanceUpsertNestedInput
}

input BpmnProcessInstanceUpdateWithoutOwnerDataInput {
  dateFinished: DateTime
  dateStarted: DateTime
  duration: Int
  data: Json
  status: BpmnProcessInstanceStatus
  comments: CommentUpdateManyInput
  process: BpmnProcessUpdateOneInput
  log: LogUpdateManyInput
  tasks: BpmnTaskInstanceUpdateManyInput
}

input BpmnProcessInstanceUpdateWithWhereUniqueWithoutOwnerInput {
  where: BpmnProcessInstanceWhereUniqueInput!
  data: BpmnProcessInstanceUpdateWithoutOwnerDataInput!
}

input BpmnProcessInstanceUpsertNestedInput {
  update: BpmnProcessInstanceUpdateDataInput!
  create: BpmnProcessInstanceCreateInput!
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
  _MagicalBackRelation_BpmnProcessTasks_every: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnProcessTasks_some: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnProcessTasks_none: BpmnTaskInstanceWhereInput
}

input BpmnProcessInstanceWhereUniqueInput {
  id: ID
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
  type_ASC
  type_DESC
  status_ASC
  status_DESC
  version_ASC
  version_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type BpmnProcessPreviousValues {
  id: ID!
  actionCount: Int!
  description: String
  model: String!
  name: String!
  type: ProcessType!
  status: ProcessStatus!
  version: Int!
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
  actionCount: Int
  description: String
  model: String
  name: String
  type: ProcessType
  status: ProcessStatus
  version: Int
  access: AccessUpdateOneInput
  dataDescriptors: DataDescriptorUpdateManyInput
  resources: ResourceUpdateManyInput
  versions: BpmnProcessUpdateManyInput
  tasks: BpmnTaskUpdateManyInput
}

input BpmnProcessUpdateInput {
  actionCount: Int
  description: String
  model: String
  name: String
  type: ProcessType
  status: ProcessStatus
  version: Int
  access: AccessUpdateOneInput
  dataDescriptors: DataDescriptorUpdateManyInput
  resources: ResourceUpdateManyInput
  versions: BpmnProcessUpdateManyInput
  tasks: BpmnTaskUpdateManyInput
}

input BpmnProcessUpdateManyInput {
  create: [BpmnProcessCreateInput!]
  connect: [BpmnProcessWhereUniqueInput!]
  disconnect: [BpmnProcessWhereUniqueInput!]
  delete: [BpmnProcessWhereUniqueInput!]
  update: [BpmnProcessUpdateWithWhereUniqueNestedInput!]
  upsert: [BpmnProcessUpsertWithWhereUniqueNestedInput!]
}

input BpmnProcessUpdateOneInput {
  create: BpmnProcessCreateInput
  connect: BpmnProcessWhereUniqueInput
  delete: Boolean
  update: BpmnProcessUpdateDataInput
  upsert: BpmnProcessUpsertNestedInput
}

input BpmnProcessUpdateWithWhereUniqueNestedInput {
  where: BpmnProcessWhereUniqueInput!
  data: BpmnProcessUpdateDataInput!
}

input BpmnProcessUpsertNestedInput {
  update: BpmnProcessUpdateDataInput!
  create: BpmnProcessCreateInput!
}

input BpmnProcessUpsertWithWhereUniqueNestedInput {
  where: BpmnProcessWhereUniqueInput!
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
  type: ProcessType

  """All values that are not equal to given value."""
  type_not: ProcessType

  """All values that are contained in given list."""
  type_in: [ProcessType!]

  """All values that are not contained in given list."""
  type_not_in: [ProcessType!]
  status: ProcessStatus

  """All values that are not equal to given value."""
  status_not: ProcessStatus

  """All values that are contained in given list."""
  status_in: [ProcessStatus!]

  """All values that are not contained in given list."""
  status_not_in: [ProcessStatus!]
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
  access: AccessWhereInput
  dataDescriptors_every: DataDescriptorWhereInput
  dataDescriptors_some: DataDescriptorWhereInput
  dataDescriptors_none: DataDescriptorWhereInput
  resources_every: ResourceWhereInput
  resources_some: ResourceWhereInput
  resources_none: ResourceWhereInput
  versions_every: BpmnProcessWhereInput
  versions_some: BpmnProcessWhereInput
  versions_none: BpmnProcessWhereInput
  tasks_every: BpmnTaskWhereInput
  tasks_some: BpmnTaskWhereInput
  tasks_none: BpmnTaskWhereInput
  _MagicalBackRelation_BpmnProcessVersions_every: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessVersions_some: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessVersions_none: BpmnProcessWhereInput
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
  performer(where: UserWhereInput): User
  performerRoles: [String!]!
  processInstance(where: BpmnProcessInstanceWhereInput): BpmnProcessInstance!
  data: Json
  status: BpmnTaskInstanceStatus!
  task(where: BpmnTaskWhereInput): BpmnTask!
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
  data: Json
  status: BpmnTaskInstanceStatus!
  performerRoles: BpmnTaskInstanceCreateperformerRolesInput
  performer: UserCreateOneInput
  processInstance: BpmnProcessInstanceCreateOneInput!
  task: BpmnTaskCreateOneInput!
}

input BpmnTaskInstanceCreateManyInput {
  create: [BpmnTaskInstanceCreateInput!]
  connect: [BpmnTaskInstanceWhereUniqueInput!]
}

input BpmnTaskInstanceCreateperformerRolesInput {
  set: [String!]
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
  data_ASC
  data_DESC
  status_ASC
  status_DESC
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
  performerRoles: [String!]!
  data: Json
  status: BpmnTaskInstanceStatus!
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

input BpmnTaskInstanceUpdateDataInput {
  dateFinished: DateTime
  dateStarted: DateTime
  duration: Int
  data: Json
  status: BpmnTaskInstanceStatus
  performerRoles: BpmnTaskInstanceUpdateperformerRolesInput
  performer: UserUpdateOneInput
  processInstance: BpmnProcessInstanceUpdateOneInput
  task: BpmnTaskUpdateOneInput
}

input BpmnTaskInstanceUpdateInput {
  dateFinished: DateTime
  dateStarted: DateTime
  duration: Int
  data: Json
  status: BpmnTaskInstanceStatus
  performerRoles: BpmnTaskInstanceUpdateperformerRolesInput
  performer: UserUpdateOneInput
  processInstance: BpmnProcessInstanceUpdateOneInput
  task: BpmnTaskUpdateOneInput
}

input BpmnTaskInstanceUpdateManyInput {
  create: [BpmnTaskInstanceCreateInput!]
  connect: [BpmnTaskInstanceWhereUniqueInput!]
  disconnect: [BpmnTaskInstanceWhereUniqueInput!]
  delete: [BpmnTaskInstanceWhereUniqueInput!]
  update: [BpmnTaskInstanceUpdateWithWhereUniqueNestedInput!]
  upsert: [BpmnTaskInstanceUpsertWithWhereUniqueNestedInput!]
}

input BpmnTaskInstanceUpdateperformerRolesInput {
  set: [String!]
}

input BpmnTaskInstanceUpdateWithWhereUniqueNestedInput {
  where: BpmnTaskInstanceWhereUniqueInput!
  data: BpmnTaskInstanceUpdateDataInput!
}

input BpmnTaskInstanceUpsertWithWhereUniqueNestedInput {
  where: BpmnTaskInstanceWhereUniqueInput!
  update: BpmnTaskInstanceUpdateDataInput!
  create: BpmnTaskInstanceCreateInput!
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
  status: BpmnTaskInstanceStatus

  """All values that are not equal to given value."""
  status_not: BpmnTaskInstanceStatus

  """All values that are contained in given list."""
  status_in: [BpmnTaskInstanceStatus!]

  """All values that are not contained in given list."""
  status_not_in: [BpmnTaskInstanceStatus!]
  performer: UserWhereInput
  processInstance: BpmnProcessInstanceWhereInput
  task: BpmnTaskWhereInput
  _MagicalBackRelation_BpmnProcessInstanceTasks_every: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceTasks_some: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceTasks_none: BpmnProcessInstanceWhereInput
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
  _MagicalBackRelation_BpmnTaskToBpmnTaskInstance_every: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnTaskToBpmnTaskInstance_some: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnTaskToBpmnTaskInstance_none: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BomnProcessTasks_every: BpmnProcessWhereInput
  _MagicalBackRelation_BomnProcessTasks_some: BpmnProcessWhereInput
  _MagicalBackRelation_BomnProcessTasks_none: BpmnProcessWhereInput
}

input BpmnTaskWhereUniqueInput {
  id: ID
  taskId: ID
}

type Comment implements Node {
  id: ID!
  text: String!
  user(where: UserWhereInput): User!
  date: DateTime!
  replyTo: String
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
  date: DateTime!
  replyTo: String
  user: UserCreateOneInput!
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
  date: DateTime!
  replyTo: String
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
  date: DateTime
  replyTo: String
  user: UserUpdateOneInput
}

input CommentUpdateInput {
  text: String
  date: DateTime
  replyTo: String
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
  replyTo: String

  """All values that are not equal to given value."""
  replyTo_not: String

  """All values that are contained in given list."""
  replyTo_in: [String!]

  """All values that are not contained in given list."""
  replyTo_not_in: [String!]

  """All values less than the given value."""
  replyTo_lt: String

  """All values less than or equal the given value."""
  replyTo_lte: String

  """All values greater than the given value."""
  replyTo_gt: String

  """All values greater than or equal the given value."""
  replyTo_gte: String

  """All values containing the given string."""
  replyTo_contains: String

  """All values not containing the given string."""
  replyTo_not_contains: String

  """All values starting with the given string."""
  replyTo_starts_with: String

  """All values not starting with the given string."""
  replyTo_not_starts_with: String

  """All values ending with the given string."""
  replyTo_ends_with: String

  """All values not ending with the given string."""
  replyTo_not_ends_with: String
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
  descriptor(where: DataDescriptorWhereInput): DataDescriptor
  organisationId: String
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
  organisationId: String
  version: Int
  date: DateTime
  value: String
  descriptor: DataDescriptorCreateOneInput
}

input DataCreateManyInput {
  create: [DataCreateInput!]
  connect: [DataWhereUniqueInput!]
}

type DataDescriptor implements Node {
  id: ID!
  access(where: AccessWhereInput): Access
  defaultValue: String
  description: String
  expression: String
  isArray: Boolean
  clone: Boolean
  name: String
  type: DataType
  validators(where: ValidatorWhereInput): Validator
  parentDescriptor: ID
}

"""A connection to a list of items."""
type DataDescriptorConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [DataDescriptorEdge]!
  aggregate: AggregateDataDescriptor!
}

input DataDescriptorCreateInput {
  defaultValue: String
  description: String
  expression: String
  isArray: Boolean
  clone: Boolean
  name: String
  type: DataType
  parentDescriptor: ID
  access: AccessCreateOneInput
  validators: ValidatorCreateOneInput
}

input DataDescriptorCreateManyInput {
  create: [DataDescriptorCreateInput!]
  connect: [DataDescriptorWhereUniqueInput!]
}

input DataDescriptorCreateOneInput {
  create: DataDescriptorCreateInput
  connect: DataDescriptorWhereUniqueInput
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
  defaultValue_ASC
  defaultValue_DESC
  description_ASC
  description_DESC
  expression_ASC
  expression_DESC
  isArray_ASC
  isArray_DESC
  clone_ASC
  clone_DESC
  name_ASC
  name_DESC
  type_ASC
  type_DESC
  parentDescriptor_ASC
  parentDescriptor_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type DataDescriptorPreviousValues {
  id: ID!
  defaultValue: String
  description: String
  expression: String
  isArray: Boolean
  clone: Boolean
  name: String
  type: DataType
  parentDescriptor: ID
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

input DataDescriptorUpdateDataInput {
  defaultValue: String
  description: String
  expression: String
  isArray: Boolean
  clone: Boolean
  name: String
  type: DataType
  parentDescriptor: ID
  access: AccessUpdateOneInput
  validators: ValidatorUpdateOneInput
}

input DataDescriptorUpdateInput {
  defaultValue: String
  description: String
  expression: String
  isArray: Boolean
  clone: Boolean
  name: String
  type: DataType
  parentDescriptor: ID
  access: AccessUpdateOneInput
  validators: ValidatorUpdateOneInput
}

input DataDescriptorUpdateManyInput {
  create: [DataDescriptorCreateInput!]
  connect: [DataDescriptorWhereUniqueInput!]
  disconnect: [DataDescriptorWhereUniqueInput!]
  delete: [DataDescriptorWhereUniqueInput!]
  update: [DataDescriptorUpdateWithWhereUniqueNestedInput!]
  upsert: [DataDescriptorUpsertWithWhereUniqueNestedInput!]
}

input DataDescriptorUpdateOneInput {
  create: DataDescriptorCreateInput
  connect: DataDescriptorWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: DataDescriptorUpdateDataInput
  upsert: DataDescriptorUpsertNestedInput
}

input DataDescriptorUpdateWithWhereUniqueNestedInput {
  where: DataDescriptorWhereUniqueInput!
  data: DataDescriptorUpdateDataInput!
}

input DataDescriptorUpsertNestedInput {
  update: DataDescriptorUpdateDataInput!
  create: DataDescriptorCreateInput!
}

input DataDescriptorUpsertWithWhereUniqueNestedInput {
  where: DataDescriptorWhereUniqueInput!
  update: DataDescriptorUpdateDataInput!
  create: DataDescriptorCreateInput!
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
  defaultValue: String

  """All values that are not equal to given value."""
  defaultValue_not: String

  """All values that are contained in given list."""
  defaultValue_in: [String!]

  """All values that are not contained in given list."""
  defaultValue_not_in: [String!]

  """All values less than the given value."""
  defaultValue_lt: String

  """All values less than or equal the given value."""
  defaultValue_lte: String

  """All values greater than the given value."""
  defaultValue_gt: String

  """All values greater than or equal the given value."""
  defaultValue_gte: String

  """All values containing the given string."""
  defaultValue_contains: String

  """All values not containing the given string."""
  defaultValue_not_contains: String

  """All values starting with the given string."""
  defaultValue_starts_with: String

  """All values not starting with the given string."""
  defaultValue_not_starts_with: String

  """All values ending with the given string."""
  defaultValue_ends_with: String

  """All values not ending with the given string."""
  defaultValue_not_ends_with: String
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
  expression: String

  """All values that are not equal to given value."""
  expression_not: String

  """All values that are contained in given list."""
  expression_in: [String!]

  """All values that are not contained in given list."""
  expression_not_in: [String!]

  """All values less than the given value."""
  expression_lt: String

  """All values less than or equal the given value."""
  expression_lte: String

  """All values greater than the given value."""
  expression_gt: String

  """All values greater than or equal the given value."""
  expression_gte: String

  """All values containing the given string."""
  expression_contains: String

  """All values not containing the given string."""
  expression_not_contains: String

  """All values starting with the given string."""
  expression_starts_with: String

  """All values not starting with the given string."""
  expression_not_starts_with: String

  """All values ending with the given string."""
  expression_ends_with: String

  """All values not ending with the given string."""
  expression_not_ends_with: String
  isArray: Boolean

  """All values that are not equal to given value."""
  isArray_not: Boolean
  clone: Boolean

  """All values that are not equal to given value."""
  clone_not: Boolean
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
  type: DataType

  """All values that are not equal to given value."""
  type_not: DataType

  """All values that are contained in given list."""
  type_in: [DataType!]

  """All values that are not contained in given list."""
  type_not_in: [DataType!]
  parentDescriptor: ID

  """All values that are not equal to given value."""
  parentDescriptor_not: ID

  """All values that are contained in given list."""
  parentDescriptor_in: [ID!]

  """All values that are not contained in given list."""
  parentDescriptor_not_in: [ID!]

  """All values less than the given value."""
  parentDescriptor_lt: ID

  """All values less than or equal the given value."""
  parentDescriptor_lte: ID

  """All values greater than the given value."""
  parentDescriptor_gt: ID

  """All values greater than or equal the given value."""
  parentDescriptor_gte: ID

  """All values containing the given string."""
  parentDescriptor_contains: ID

  """All values not containing the given string."""
  parentDescriptor_not_contains: ID

  """All values starting with the given string."""
  parentDescriptor_starts_with: ID

  """All values not starting with the given string."""
  parentDescriptor_not_starts_with: ID

  """All values ending with the given string."""
  parentDescriptor_ends_with: ID

  """All values not ending with the given string."""
  parentDescriptor_not_ends_with: ID
  access: AccessWhereInput
  validators: ValidatorWhereInput
  _MagicalBackRelation_DataToDataDescriptor_every: DataWhereInput
  _MagicalBackRelation_DataToDataDescriptor_some: DataWhereInput
  _MagicalBackRelation_DataToDataDescriptor_none: DataWhereInput
  _MagicalBackRelation_DataDescriptorToFormElement_every: FormElementWhereInput
  _MagicalBackRelation_DataDescriptorToFormElement_some: FormElementWhereInput
  _MagicalBackRelation_DataDescriptorToFormElement_none: FormElementWhereInput
  _MagicalBackRelation_BpmnProcessToDataDescriptor_every: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessToDataDescriptor_some: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessToDataDescriptor_none: BpmnProcessWhereInput
}

input DataDescriptorWhereUniqueInput {
  id: ID
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

type DataPreviousValues {
  id: ID!
  organisationId: String
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

enum DataType {
  Id
  Boolean
  Float
  Int
  String
  Date
  Object
}

input DataUpdateDataInput {
  organisationId: String
  version: Int
  date: DateTime
  value: String
  descriptor: DataDescriptorUpdateOneInput
}

input DataUpdateInput {
  organisationId: String
  version: Int
  date: DateTime
  value: String
  descriptor: DataDescriptorUpdateOneInput
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
  organisationId: String

  """All values that are not equal to given value."""
  organisationId_not: String

  """All values that are contained in given list."""
  organisationId_in: [String!]

  """All values that are not contained in given list."""
  organisationId_not_in: [String!]

  """All values less than the given value."""
  organisationId_lt: String

  """All values less than or equal the given value."""
  organisationId_lte: String

  """All values greater than the given value."""
  organisationId_gt: String

  """All values greater than or equal the given value."""
  organisationId_gte: String

  """All values containing the given string."""
  organisationId_contains: String

  """All values not containing the given string."""
  organisationId_not_contains: String

  """All values starting with the given string."""
  organisationId_starts_with: String

  """All values not starting with the given string."""
  organisationId_not_starts_with: String

  """All values ending with the given string."""
  organisationId_ends_with: String

  """All values not ending with the given string."""
  organisationId_not_ends_with: String
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
  descriptor: DataDescriptorWhereInput
  _MagicalBackRelation_UserData_every: UserWhereInput
  _MagicalBackRelation_UserData_some: UserWhereInput
  _MagicalBackRelation_UserData_none: UserWhereInput
}

input DataWhereUniqueInput {
  id: ID
}

scalar DateTime

type Document implements Node {
  id: ID!
  title: String!
  content: String
  version: Int
}

"""A connection to a list of items."""
type DocumentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [DocumentEdge]!
  aggregate: AggregateDocument!
}

input DocumentCreateInput {
  title: String!
  content: String
  version: Int
}

input DocumentCreateOneInput {
  create: DocumentCreateInput
  connect: DocumentWhereUniqueInput
}

"""An edge in a connection."""
type DocumentEdge {
  """The item at the end of the edge."""
  node: Document!

  """A cursor for use in pagination."""
  cursor: String!
}

enum DocumentOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
  version_ASC
  version_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type DocumentPreviousValues {
  id: ID!
  title: String!
  content: String
  version: Int
}

type DocumentSubscriptionPayload {
  mutation: MutationType!
  node: Document
  updatedFields: [String!]
  previousValues: DocumentPreviousValues
}

input DocumentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [DocumentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [DocumentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DocumentSubscriptionWhereInput!]

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
  node: DocumentWhereInput
}

input DocumentUpdateDataInput {
  title: String
  content: String
  version: Int
}

input DocumentUpdateInput {
  title: String
  content: String
  version: Int
}

input DocumentUpdateOneInput {
  create: DocumentCreateInput
  connect: DocumentWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: DocumentUpdateDataInput
  upsert: DocumentUpsertNestedInput
}

input DocumentUpsertNestedInput {
  update: DocumentUpdateDataInput!
  create: DocumentCreateInput!
}

input DocumentWhereInput {
  """Logical AND on all given filters."""
  AND: [DocumentWhereInput!]

  """Logical OR on all given filters."""
  OR: [DocumentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DocumentWhereInput!]
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
  _MagicalBackRelation_ResourceDocument_every: ResourceWhereInput
  _MagicalBackRelation_ResourceDocument_some: ResourceWhereInput
  _MagicalBackRelation_ResourceDocument_none: ResourceWhereInput
}

input DocumentWhereUniqueInput {
  id: ID
}

type Form implements Node {
  id: ID!
  name: String!
  description: String
  elements(where: FormElementWhereInput, orderBy: FormElementOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FormElement!]
  validations(where: ValidatorWhereInput, orderBy: ValidatorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Validator!]
}

"""A connection to a list of items."""
type FormConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FormEdge]!
  aggregate: AggregateForm!
}

enum FormControl {
  Input
  Select
  Checkbox
  Radio
  Textarea
  Repeater
  Table
  Text
  DeleteButton
}

input FormCreateInput {
  name: String!
  description: String
  elements: FormElementCreateManyInput
  validations: ValidatorCreateManyInput
}

input FormCreateOneInput {
  create: FormCreateInput
  connect: FormWhereUniqueInput
}

"""An edge in a connection."""
type FormEdge {
  """The item at the end of the edge."""
  node: Form!

  """A cursor for use in pagination."""
  cursor: String!
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
  parentElement: ID
}

"""A connection to a list of items."""
type FormElementConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FormElementEdge]!
  aggregate: AggregateFormElement!
}

input FormElementCreateInput {
  row: Int
  column: Int
  width: Int
  label: String
  inline: Boolean
  defaultValue: String
  list: String
  filterSource: String
  filterColumn: String
  control: FormControl
  controlProps: Json
  vertical: Boolean
  parentElement: ID
  source: DataDescriptorCreateOneInput
}

input FormElementCreateManyInput {
  create: [FormElementCreateInput!]
  connect: [FormElementWhereUniqueInput!]
}

"""An edge in a connection."""
type FormElementEdge {
  """The item at the end of the edge."""
  node: FormElement!

  """A cursor for use in pagination."""
  cursor: String!
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
  parentElement_ASC
  parentElement_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type FormElementPreviousValues {
  id: ID!
  row: Int
  column: Int
  width: Int
  label: String
  inline: Boolean
  defaultValue: String
  list: String
  filterSource: String
  filterColumn: String
  control: FormControl
  controlProps: Json
  vertical: Boolean
  parentElement: ID
}

type FormElementSubscriptionPayload {
  mutation: MutationType!
  node: FormElement
  updatedFields: [String!]
  previousValues: FormElementPreviousValues
}

input FormElementSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FormElementSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FormElementSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FormElementSubscriptionWhereInput!]

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
  node: FormElementWhereInput
}

input FormElementUpdateDataInput {
  row: Int
  column: Int
  width: Int
  label: String
  inline: Boolean
  defaultValue: String
  list: String
  filterSource: String
  filterColumn: String
  control: FormControl
  controlProps: Json
  vertical: Boolean
  parentElement: ID
  source: DataDescriptorUpdateOneInput
}

input FormElementUpdateInput {
  row: Int
  column: Int
  width: Int
  label: String
  inline: Boolean
  defaultValue: String
  list: String
  filterSource: String
  filterColumn: String
  control: FormControl
  controlProps: Json
  vertical: Boolean
  parentElement: ID
  source: DataDescriptorUpdateOneInput
}

input FormElementUpdateManyInput {
  create: [FormElementCreateInput!]
  connect: [FormElementWhereUniqueInput!]
  disconnect: [FormElementWhereUniqueInput!]
  delete: [FormElementWhereUniqueInput!]
  update: [FormElementUpdateWithWhereUniqueNestedInput!]
  upsert: [FormElementUpsertWithWhereUniqueNestedInput!]
}

input FormElementUpdateWithWhereUniqueNestedInput {
  where: FormElementWhereUniqueInput!
  data: FormElementUpdateDataInput!
}

input FormElementUpsertWithWhereUniqueNestedInput {
  where: FormElementWhereUniqueInput!
  update: FormElementUpdateDataInput!
  create: FormElementCreateInput!
}

input FormElementWhereInput {
  """Logical AND on all given filters."""
  AND: [FormElementWhereInput!]

  """Logical OR on all given filters."""
  OR: [FormElementWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FormElementWhereInput!]
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
  row: Int

  """All values that are not equal to given value."""
  row_not: Int

  """All values that are contained in given list."""
  row_in: [Int!]

  """All values that are not contained in given list."""
  row_not_in: [Int!]

  """All values less than the given value."""
  row_lt: Int

  """All values less than or equal the given value."""
  row_lte: Int

  """All values greater than the given value."""
  row_gt: Int

  """All values greater than or equal the given value."""
  row_gte: Int
  column: Int

  """All values that are not equal to given value."""
  column_not: Int

  """All values that are contained in given list."""
  column_in: [Int!]

  """All values that are not contained in given list."""
  column_not_in: [Int!]

  """All values less than the given value."""
  column_lt: Int

  """All values less than or equal the given value."""
  column_lte: Int

  """All values greater than the given value."""
  column_gt: Int

  """All values greater than or equal the given value."""
  column_gte: Int
  width: Int

  """All values that are not equal to given value."""
  width_not: Int

  """All values that are contained in given list."""
  width_in: [Int!]

  """All values that are not contained in given list."""
  width_not_in: [Int!]

  """All values less than the given value."""
  width_lt: Int

  """All values less than or equal the given value."""
  width_lte: Int

  """All values greater than the given value."""
  width_gt: Int

  """All values greater than or equal the given value."""
  width_gte: Int
  label: String

  """All values that are not equal to given value."""
  label_not: String

  """All values that are contained in given list."""
  label_in: [String!]

  """All values that are not contained in given list."""
  label_not_in: [String!]

  """All values less than the given value."""
  label_lt: String

  """All values less than or equal the given value."""
  label_lte: String

  """All values greater than the given value."""
  label_gt: String

  """All values greater than or equal the given value."""
  label_gte: String

  """All values containing the given string."""
  label_contains: String

  """All values not containing the given string."""
  label_not_contains: String

  """All values starting with the given string."""
  label_starts_with: String

  """All values not starting with the given string."""
  label_not_starts_with: String

  """All values ending with the given string."""
  label_ends_with: String

  """All values not ending with the given string."""
  label_not_ends_with: String
  inline: Boolean

  """All values that are not equal to given value."""
  inline_not: Boolean
  defaultValue: String

  """All values that are not equal to given value."""
  defaultValue_not: String

  """All values that are contained in given list."""
  defaultValue_in: [String!]

  """All values that are not contained in given list."""
  defaultValue_not_in: [String!]

  """All values less than the given value."""
  defaultValue_lt: String

  """All values less than or equal the given value."""
  defaultValue_lte: String

  """All values greater than the given value."""
  defaultValue_gt: String

  """All values greater than or equal the given value."""
  defaultValue_gte: String

  """All values containing the given string."""
  defaultValue_contains: String

  """All values not containing the given string."""
  defaultValue_not_contains: String

  """All values starting with the given string."""
  defaultValue_starts_with: String

  """All values not starting with the given string."""
  defaultValue_not_starts_with: String

  """All values ending with the given string."""
  defaultValue_ends_with: String

  """All values not ending with the given string."""
  defaultValue_not_ends_with: String
  list: String

  """All values that are not equal to given value."""
  list_not: String

  """All values that are contained in given list."""
  list_in: [String!]

  """All values that are not contained in given list."""
  list_not_in: [String!]

  """All values less than the given value."""
  list_lt: String

  """All values less than or equal the given value."""
  list_lte: String

  """All values greater than the given value."""
  list_gt: String

  """All values greater than or equal the given value."""
  list_gte: String

  """All values containing the given string."""
  list_contains: String

  """All values not containing the given string."""
  list_not_contains: String

  """All values starting with the given string."""
  list_starts_with: String

  """All values not starting with the given string."""
  list_not_starts_with: String

  """All values ending with the given string."""
  list_ends_with: String

  """All values not ending with the given string."""
  list_not_ends_with: String
  filterSource: String

  """All values that are not equal to given value."""
  filterSource_not: String

  """All values that are contained in given list."""
  filterSource_in: [String!]

  """All values that are not contained in given list."""
  filterSource_not_in: [String!]

  """All values less than the given value."""
  filterSource_lt: String

  """All values less than or equal the given value."""
  filterSource_lte: String

  """All values greater than the given value."""
  filterSource_gt: String

  """All values greater than or equal the given value."""
  filterSource_gte: String

  """All values containing the given string."""
  filterSource_contains: String

  """All values not containing the given string."""
  filterSource_not_contains: String

  """All values starting with the given string."""
  filterSource_starts_with: String

  """All values not starting with the given string."""
  filterSource_not_starts_with: String

  """All values ending with the given string."""
  filterSource_ends_with: String

  """All values not ending with the given string."""
  filterSource_not_ends_with: String
  filterColumn: String

  """All values that are not equal to given value."""
  filterColumn_not: String

  """All values that are contained in given list."""
  filterColumn_in: [String!]

  """All values that are not contained in given list."""
  filterColumn_not_in: [String!]

  """All values less than the given value."""
  filterColumn_lt: String

  """All values less than or equal the given value."""
  filterColumn_lte: String

  """All values greater than the given value."""
  filterColumn_gt: String

  """All values greater than or equal the given value."""
  filterColumn_gte: String

  """All values containing the given string."""
  filterColumn_contains: String

  """All values not containing the given string."""
  filterColumn_not_contains: String

  """All values starting with the given string."""
  filterColumn_starts_with: String

  """All values not starting with the given string."""
  filterColumn_not_starts_with: String

  """All values ending with the given string."""
  filterColumn_ends_with: String

  """All values not ending with the given string."""
  filterColumn_not_ends_with: String
  control: FormControl

  """All values that are not equal to given value."""
  control_not: FormControl

  """All values that are contained in given list."""
  control_in: [FormControl!]

  """All values that are not contained in given list."""
  control_not_in: [FormControl!]
  vertical: Boolean

  """All values that are not equal to given value."""
  vertical_not: Boolean
  parentElement: ID

  """All values that are not equal to given value."""
  parentElement_not: ID

  """All values that are contained in given list."""
  parentElement_in: [ID!]

  """All values that are not contained in given list."""
  parentElement_not_in: [ID!]

  """All values less than the given value."""
  parentElement_lt: ID

  """All values less than or equal the given value."""
  parentElement_lte: ID

  """All values greater than the given value."""
  parentElement_gt: ID

  """All values greater than or equal the given value."""
  parentElement_gte: ID

  """All values containing the given string."""
  parentElement_contains: ID

  """All values not containing the given string."""
  parentElement_not_contains: ID

  """All values starting with the given string."""
  parentElement_starts_with: ID

  """All values not starting with the given string."""
  parentElement_not_starts_with: ID

  """All values ending with the given string."""
  parentElement_ends_with: ID

  """All values not ending with the given string."""
  parentElement_not_ends_with: ID
  source: DataDescriptorWhereInput
  _MagicalBackRelation_FormToFormElement_every: FormWhereInput
  _MagicalBackRelation_FormToFormElement_some: FormWhereInput
  _MagicalBackRelation_FormToFormElement_none: FormWhereInput
}

input FormElementWhereUniqueInput {
  id: ID
}

enum FormOrderByInput {
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

type FormPreviousValues {
  id: ID!
  name: String!
  description: String
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

input FormUpdateDataInput {
  name: String
  description: String
  elements: FormElementUpdateManyInput
  validations: ValidatorUpdateManyInput
}

input FormUpdateInput {
  name: String
  description: String
  elements: FormElementUpdateManyInput
  validations: ValidatorUpdateManyInput
}

input FormUpdateOneInput {
  create: FormCreateInput
  connect: FormWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: FormUpdateDataInput
  upsert: FormUpsertNestedInput
}

input FormUpsertNestedInput {
  update: FormUpdateDataInput!
  create: FormCreateInput!
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
  elements_every: FormElementWhereInput
  elements_some: FormElementWhereInput
  elements_none: FormElementWhereInput
  validations_every: ValidatorWhereInput
  validations_some: ValidatorWhereInput
  validations_none: ValidatorWhereInput
  _MagicalBackRelation_ResourceReport_every: ResourceWhereInput
  _MagicalBackRelation_ResourceReport_some: ResourceWhereInput
  _MagicalBackRelation_ResourceReport_none: ResourceWhereInput
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
  createLocalisation(data: LocalisationCreateInput!): Localisation!
  createOrganisation(data: OrganisationCreateInput!): Organisation!
  createRole(data: RoleCreateInput!): Role!
  createValidator(data: ValidatorCreateInput!): Validator!
  createForm(data: FormCreateInput!): Form!
  createFormElement(data: FormElementCreateInput!): FormElement!
  createComment(data: CommentCreateInput!): Comment!
  createUser(data: UserCreateInput!): User!
  createNotification(data: NotificationCreateInput!): Notification!
  createDocument(data: DocumentCreateInput!): Document!
  createLog(data: LogCreateInput!): Log!
  createAccessCondition(data: AccessConditionCreateInput!): AccessCondition!
  createDataDescriptor(data: DataDescriptorCreateInput!): DataDescriptor!
  createResource(data: ResourceCreateInput!): Resource!
  createAccess(data: AccessCreateInput!): Access!
  createData(data: DataCreateInput!): Data!
  createBpmnTaskInstance(data: BpmnTaskInstanceCreateInput!): BpmnTaskInstance!
  createBpmnProcess(data: BpmnProcessCreateInput!): BpmnProcess!
  createBpmnTask(data: BpmnTaskCreateInput!): BpmnTask!
  createBpmnProcessInstance(data: BpmnProcessInstanceCreateInput!): BpmnProcessInstance!
  updateLocalisation(data: LocalisationUpdateInput!, where: LocalisationWhereUniqueInput!): Localisation
  updateOrganisation(data: OrganisationUpdateInput!, where: OrganisationWhereUniqueInput!): Organisation
  updateRole(data: RoleUpdateInput!, where: RoleWhereUniqueInput!): Role
  updateValidator(data: ValidatorUpdateInput!, where: ValidatorWhereUniqueInput!): Validator
  updateForm(data: FormUpdateInput!, where: FormWhereUniqueInput!): Form
  updateFormElement(data: FormElementUpdateInput!, where: FormElementWhereUniqueInput!): FormElement
  updateComment(data: CommentUpdateInput!, where: CommentWhereUniqueInput!): Comment
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateNotification(data: NotificationUpdateInput!, where: NotificationWhereUniqueInput!): Notification
  updateDocument(data: DocumentUpdateInput!, where: DocumentWhereUniqueInput!): Document
  updateLog(data: LogUpdateInput!, where: LogWhereUniqueInput!): Log
  updateDataDescriptor(data: DataDescriptorUpdateInput!, where: DataDescriptorWhereUniqueInput!): DataDescriptor
  updateResource(data: ResourceUpdateInput!, where: ResourceWhereUniqueInput!): Resource
  updateAccess(data: AccessUpdateInput!, where: AccessWhereUniqueInput!): Access
  updateData(data: DataUpdateInput!, where: DataWhereUniqueInput!): Data
  updateBpmnTaskInstance(data: BpmnTaskInstanceUpdateInput!, where: BpmnTaskInstanceWhereUniqueInput!): BpmnTaskInstance
  updateBpmnProcess(data: BpmnProcessUpdateInput!, where: BpmnProcessWhereUniqueInput!): BpmnProcess
  updateBpmnTask(data: BpmnTaskUpdateInput!, where: BpmnTaskWhereUniqueInput!): BpmnTask
  updateBpmnProcessInstance(data: BpmnProcessInstanceUpdateInput!, where: BpmnProcessInstanceWhereUniqueInput!): BpmnProcessInstance
  deleteLocalisation(where: LocalisationWhereUniqueInput!): Localisation
  deleteOrganisation(where: OrganisationWhereUniqueInput!): Organisation
  deleteRole(where: RoleWhereUniqueInput!): Role
  deleteValidator(where: ValidatorWhereUniqueInput!): Validator
  deleteForm(where: FormWhereUniqueInput!): Form
  deleteFormElement(where: FormElementWhereUniqueInput!): FormElement
  deleteComment(where: CommentWhereUniqueInput!): Comment
  deleteUser(where: UserWhereUniqueInput!): User
  deleteNotification(where: NotificationWhereUniqueInput!): Notification
  deleteDocument(where: DocumentWhereUniqueInput!): Document
  deleteLog(where: LogWhereUniqueInput!): Log
  deleteDataDescriptor(where: DataDescriptorWhereUniqueInput!): DataDescriptor
  deleteResource(where: ResourceWhereUniqueInput!): Resource
  deleteAccess(where: AccessWhereUniqueInput!): Access
  deleteData(where: DataWhereUniqueInput!): Data
  deleteBpmnTaskInstance(where: BpmnTaskInstanceWhereUniqueInput!): BpmnTaskInstance
  deleteBpmnProcess(where: BpmnProcessWhereUniqueInput!): BpmnProcess
  deleteBpmnTask(where: BpmnTaskWhereUniqueInput!): BpmnTask
  deleteBpmnProcessInstance(where: BpmnProcessInstanceWhereUniqueInput!): BpmnProcessInstance
  upsertLocalisation(where: LocalisationWhereUniqueInput!, create: LocalisationCreateInput!, update: LocalisationUpdateInput!): Localisation!
  upsertOrganisation(where: OrganisationWhereUniqueInput!, create: OrganisationCreateInput!, update: OrganisationUpdateInput!): Organisation!
  upsertRole(where: RoleWhereUniqueInput!, create: RoleCreateInput!, update: RoleUpdateInput!): Role!
  upsertValidator(where: ValidatorWhereUniqueInput!, create: ValidatorCreateInput!, update: ValidatorUpdateInput!): Validator!
  upsertForm(where: FormWhereUniqueInput!, create: FormCreateInput!, update: FormUpdateInput!): Form!
  upsertFormElement(where: FormElementWhereUniqueInput!, create: FormElementCreateInput!, update: FormElementUpdateInput!): FormElement!
  upsertComment(where: CommentWhereUniqueInput!, create: CommentCreateInput!, update: CommentUpdateInput!): Comment!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertNotification(where: NotificationWhereUniqueInput!, create: NotificationCreateInput!, update: NotificationUpdateInput!): Notification!
  upsertDocument(where: DocumentWhereUniqueInput!, create: DocumentCreateInput!, update: DocumentUpdateInput!): Document!
  upsertLog(where: LogWhereUniqueInput!, create: LogCreateInput!, update: LogUpdateInput!): Log!
  upsertDataDescriptor(where: DataDescriptorWhereUniqueInput!, create: DataDescriptorCreateInput!, update: DataDescriptorUpdateInput!): DataDescriptor!
  upsertResource(where: ResourceWhereUniqueInput!, create: ResourceCreateInput!, update: ResourceUpdateInput!): Resource!
  upsertAccess(where: AccessWhereUniqueInput!, create: AccessCreateInput!, update: AccessUpdateInput!): Access!
  upsertData(where: DataWhereUniqueInput!, create: DataCreateInput!, update: DataUpdateInput!): Data!
  upsertBpmnTaskInstance(where: BpmnTaskInstanceWhereUniqueInput!, create: BpmnTaskInstanceCreateInput!, update: BpmnTaskInstanceUpdateInput!): BpmnTaskInstance!
  upsertBpmnProcess(where: BpmnProcessWhereUniqueInput!, create: BpmnProcessCreateInput!, update: BpmnProcessUpdateInput!): BpmnProcess!
  upsertBpmnTask(where: BpmnTaskWhereUniqueInput!, create: BpmnTaskCreateInput!, update: BpmnTaskUpdateInput!): BpmnTask!
  upsertBpmnProcessInstance(where: BpmnProcessInstanceWhereUniqueInput!, create: BpmnProcessInstanceCreateInput!, update: BpmnProcessInstanceUpdateInput!): BpmnProcessInstance!
  updateManyLocalisations(data: LocalisationUpdateInput!, where: LocalisationWhereInput): BatchPayload!
  updateManyOrganisations(data: OrganisationUpdateInput!, where: OrganisationWhereInput): BatchPayload!
  updateManyRoles(data: RoleUpdateInput!, where: RoleWhereInput): BatchPayload!
  updateManyValidators(data: ValidatorUpdateInput!, where: ValidatorWhereInput): BatchPayload!
  updateManyForms(data: FormUpdateInput!, where: FormWhereInput): BatchPayload!
  updateManyFormElements(data: FormElementUpdateInput!, where: FormElementWhereInput): BatchPayload!
  updateManyComments(data: CommentUpdateInput!, where: CommentWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyNotifications(data: NotificationUpdateInput!, where: NotificationWhereInput): BatchPayload!
  updateManyDocuments(data: DocumentUpdateInput!, where: DocumentWhereInput): BatchPayload!
  updateManyLogs(data: LogUpdateInput!, where: LogWhereInput): BatchPayload!
  updateManyAccessConditions(data: AccessConditionUpdateInput!, where: AccessConditionWhereInput): BatchPayload!
  updateManyDataDescriptors(data: DataDescriptorUpdateInput!, where: DataDescriptorWhereInput): BatchPayload!
  updateManyResources(data: ResourceUpdateInput!, where: ResourceWhereInput): BatchPayload!
  updateManyAccesses(data: AccessUpdateInput!, where: AccessWhereInput): BatchPayload!
  updateManyDatas(data: DataUpdateInput!, where: DataWhereInput): BatchPayload!
  updateManyBpmnTaskInstances(data: BpmnTaskInstanceUpdateInput!, where: BpmnTaskInstanceWhereInput): BatchPayload!
  updateManyBpmnProcesses(data: BpmnProcessUpdateInput!, where: BpmnProcessWhereInput): BatchPayload!
  updateManyBpmnTasks(data: BpmnTaskUpdateInput!, where: BpmnTaskWhereInput): BatchPayload!
  updateManyBpmnProcessInstances(data: BpmnProcessInstanceUpdateInput!, where: BpmnProcessInstanceWhereInput): BatchPayload!
  deleteManyLocalisations(where: LocalisationWhereInput): BatchPayload!
  deleteManyOrganisations(where: OrganisationWhereInput): BatchPayload!
  deleteManyRoles(where: RoleWhereInput): BatchPayload!
  deleteManyValidators(where: ValidatorWhereInput): BatchPayload!
  deleteManyForms(where: FormWhereInput): BatchPayload!
  deleteManyFormElements(where: FormElementWhereInput): BatchPayload!
  deleteManyComments(where: CommentWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyNotifications(where: NotificationWhereInput): BatchPayload!
  deleteManyDocuments(where: DocumentWhereInput): BatchPayload!
  deleteManyLogs(where: LogWhereInput): BatchPayload!
  deleteManyAccessConditions(where: AccessConditionWhereInput): BatchPayload!
  deleteManyDataDescriptors(where: DataDescriptorWhereInput): BatchPayload!
  deleteManyResources(where: ResourceWhereInput): BatchPayload!
  deleteManyAccesses(where: AccessWhereInput): BatchPayload!
  deleteManyDatas(where: DataWhereInput): BatchPayload!
  deleteManyBpmnTaskInstances(where: BpmnTaskInstanceWhereInput): BatchPayload!
  deleteManyBpmnProcesses(where: BpmnProcessWhereInput): BatchPayload!
  deleteManyBpmnTasks(where: BpmnTaskWhereInput): BatchPayload!
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
  type: NotificationType!
  id: ID!
  userId: ID!
  createdAt: DateTime!
  code: NotificationCode!
  text: String
  processInstance(where: BpmnProcessInstanceWhereInput): BpmnProcessInstance!
  params: [String!]!
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
  visible: Boolean!
  params: NotificationCreateparamsInput
  processInstance: BpmnProcessInstanceCreateOneInput!
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
  params: [String!]!
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

input NotificationUpdateDataInput {
  type: NotificationType
  userId: ID
  code: NotificationCode
  text: String
  visible: Boolean
  params: NotificationUpdateparamsInput
  processInstance: BpmnProcessInstanceUpdateOneInput
}

input NotificationUpdateInput {
  type: NotificationType
  userId: ID
  code: NotificationCode
  text: String
  visible: Boolean
  params: NotificationUpdateparamsInput
  processInstance: BpmnProcessInstanceUpdateOneInput
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
  visible: Boolean

  """All values that are not equal to given value."""
  visible_not: Boolean
  processInstance: BpmnProcessInstanceWhereInput
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

enum ProcessType {
  HumanResources
  Purchases
  Sales
  Travel
}

type Query {
  localisations(where: LocalisationWhereInput, orderBy: LocalisationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Localisation]!
  organisations(where: OrganisationWhereInput, orderBy: OrganisationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Organisation]!
  roles(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Role]!
  validators(where: ValidatorWhereInput, orderBy: ValidatorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Validator]!
  forms(where: FormWhereInput, orderBy: FormOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Form]!
  formElements(where: FormElementWhereInput, orderBy: FormElementOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FormElement]!
  comments(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Comment]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  notifications(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Notification]!
  documents(where: DocumentWhereInput, orderBy: DocumentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Document]!
  logs(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Log]!
  accessConditions(where: AccessConditionWhereInput, orderBy: AccessConditionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AccessCondition]!
  dataDescriptors(where: DataDescriptorWhereInput, orderBy: DataDescriptorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [DataDescriptor]!
  resources(where: ResourceWhereInput, orderBy: ResourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Resource]!
  accesses(where: AccessWhereInput, orderBy: AccessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Access]!
  datas(where: DataWhereInput, orderBy: DataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Data]!
  bpmnTaskInstances(where: BpmnTaskInstanceWhereInput, orderBy: BpmnTaskInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BpmnTaskInstance]!
  bpmnProcesses(where: BpmnProcessWhereInput, orderBy: BpmnProcessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BpmnProcess]!
  bpmnTasks(where: BpmnTaskWhereInput, orderBy: BpmnTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BpmnTask]!
  bpmnProcessInstances(where: BpmnProcessInstanceWhereInput, orderBy: BpmnProcessInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BpmnProcessInstance]!
  localisation(where: LocalisationWhereUniqueInput!): Localisation
  organisation(where: OrganisationWhereUniqueInput!): Organisation
  role(where: RoleWhereUniqueInput!): Role
  validator(where: ValidatorWhereUniqueInput!): Validator
  form(where: FormWhereUniqueInput!): Form
  formElement(where: FormElementWhereUniqueInput!): FormElement
  comment(where: CommentWhereUniqueInput!): Comment
  user(where: UserWhereUniqueInput!): User
  notification(where: NotificationWhereUniqueInput!): Notification
  document(where: DocumentWhereUniqueInput!): Document
  log(where: LogWhereUniqueInput!): Log
  dataDescriptor(where: DataDescriptorWhereUniqueInput!): DataDescriptor
  resource(where: ResourceWhereUniqueInput!): Resource
  access(where: AccessWhereUniqueInput!): Access
  data(where: DataWhereUniqueInput!): Data
  bpmnTaskInstance(where: BpmnTaskInstanceWhereUniqueInput!): BpmnTaskInstance
  bpmnProcess(where: BpmnProcessWhereUniqueInput!): BpmnProcess
  bpmnTask(where: BpmnTaskWhereUniqueInput!): BpmnTask
  bpmnProcessInstance(where: BpmnProcessInstanceWhereUniqueInput!): BpmnProcessInstance
  localisationsConnection(where: LocalisationWhereInput, orderBy: LocalisationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocalisationConnection!
  organisationsConnection(where: OrganisationWhereInput, orderBy: OrganisationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrganisationConnection!
  rolesConnection(where: RoleWhereInput, orderBy: RoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RoleConnection!
  validatorsConnection(where: ValidatorWhereInput, orderBy: ValidatorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ValidatorConnection!
  formsConnection(where: FormWhereInput, orderBy: FormOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FormConnection!
  formElementsConnection(where: FormElementWhereInput, orderBy: FormElementOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FormElementConnection!
  commentsConnection(where: CommentWhereInput, orderBy: CommentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CommentConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  notificationsConnection(where: NotificationWhereInput, orderBy: NotificationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NotificationConnection!
  documentsConnection(where: DocumentWhereInput, orderBy: DocumentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DocumentConnection!
  logsConnection(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LogConnection!
  accessConditionsConnection(where: AccessConditionWhereInput, orderBy: AccessConditionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AccessConditionConnection!
  dataDescriptorsConnection(where: DataDescriptorWhereInput, orderBy: DataDescriptorOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DataDescriptorConnection!
  resourcesConnection(where: ResourceWhereInput, orderBy: ResourceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ResourceConnection!
  accessesConnection(where: AccessWhereInput, orderBy: AccessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AccessConnection!
  datasConnection(where: DataWhereInput, orderBy: DataOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DataConnection!
  bpmnTaskInstancesConnection(where: BpmnTaskInstanceWhereInput, orderBy: BpmnTaskInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BpmnTaskInstanceConnection!
  bpmnProcessesConnection(where: BpmnProcessWhereInput, orderBy: BpmnProcessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BpmnProcessConnection!
  bpmnTasksConnection(where: BpmnTaskWhereInput, orderBy: BpmnTaskOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BpmnTaskConnection!
  bpmnProcessInstancesConnection(where: BpmnProcessInstanceWhereInput, orderBy: BpmnProcessInstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BpmnProcessInstanceConnection!

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
  link: String
  form(where: FormWhereInput): Form
  document(where: DocumentWhereInput): Document
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
  link: String
  form: FormCreateOneInput
  document: DocumentCreateOneInput
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
  link_ASC
  link_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ResourcePreviousValues {
  id: ID!
  type: ResourceType!
  name: String!
  link: String
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
  type: ResourceType
  name: String
  link: String
  form: FormUpdateOneInput
  document: DocumentUpdateOneInput
}

input ResourceUpdateInput {
  type: ResourceType
  name: String
  link: String
  form: FormUpdateOneInput
  document: DocumentUpdateOneInput
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
  link: String

  """All values that are not equal to given value."""
  link_not: String

  """All values that are contained in given list."""
  link_in: [String!]

  """All values that are not contained in given list."""
  link_not_in: [String!]

  """All values less than the given value."""
  link_lt: String

  """All values less than or equal the given value."""
  link_lte: String

  """All values greater than the given value."""
  link_gt: String

  """All values greater than or equal the given value."""
  link_gte: String

  """All values containing the given string."""
  link_contains: String

  """All values not containing the given string."""
  link_not_contains: String

  """All values starting with the given string."""
  link_starts_with: String

  """All values not starting with the given string."""
  link_not_starts_with: String

  """All values ending with the given string."""
  link_ends_with: String

  """All values not ending with the given string."""
  link_not_ends_with: String
  form: FormWhereInput
  document: DocumentWhereInput
  _MagicalBackRelation_BpmnTaskToResource_every: BpmnTaskWhereInput
  _MagicalBackRelation_BpmnTaskToResource_some: BpmnTaskWhereInput
  _MagicalBackRelation_BpmnTaskToResource_none: BpmnTaskWhereInput
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
  localisation(where: LocalisationSubscriptionWhereInput): LocalisationSubscriptionPayload
  organisation(where: OrganisationSubscriptionWhereInput): OrganisationSubscriptionPayload
  role(where: RoleSubscriptionWhereInput): RoleSubscriptionPayload
  validator(where: ValidatorSubscriptionWhereInput): ValidatorSubscriptionPayload
  form(where: FormSubscriptionWhereInput): FormSubscriptionPayload
  formElement(where: FormElementSubscriptionWhereInput): FormElementSubscriptionPayload
  comment(where: CommentSubscriptionWhereInput): CommentSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  notification(where: NotificationSubscriptionWhereInput): NotificationSubscriptionPayload
  document(where: DocumentSubscriptionWhereInput): DocumentSubscriptionPayload
  log(where: LogSubscriptionWhereInput): LogSubscriptionPayload
  accessCondition(where: AccessConditionSubscriptionWhereInput): AccessConditionSubscriptionPayload
  dataDescriptor(where: DataDescriptorSubscriptionWhereInput): DataDescriptorSubscriptionPayload
  resource(where: ResourceSubscriptionWhereInput): ResourceSubscriptionPayload
  access(where: AccessSubscriptionWhereInput): AccessSubscriptionPayload
  data(where: DataSubscriptionWhereInput): DataSubscriptionPayload
  bpmnTaskInstance(where: BpmnTaskInstanceSubscriptionWhereInput): BpmnTaskInstanceSubscriptionPayload
  bpmnProcess(where: BpmnProcessSubscriptionWhereInput): BpmnProcessSubscriptionPayload
  bpmnTask(where: BpmnTaskSubscriptionWhereInput): BpmnTaskSubscriptionPayload
  bpmnProcessInstance(where: BpmnProcessInstanceSubscriptionWhereInput): BpmnProcessInstanceSubscriptionPayload
}

type User implements Node {
  id: ID!
  uid: String!
  name: String!
  roles: [String!]!
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
  notifications: NotificationCreateManyInput
  processes: BpmnProcessInstanceCreateManyWithoutOwnerInput
  data: DataCreateManyInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutProcessesInput {
  create: UserCreateWithoutProcessesInput
  connect: UserWhereUniqueInput
}

input UserCreaterolesInput {
  set: [String!]
}

input UserCreateWithoutProcessesInput {
  uid: String!
  name: String!
  description: String
  password: String!
  roles: UserCreaterolesInput
  notifications: NotificationCreateManyInput
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

input UserUpdateDataInput {
  uid: String
  name: String
  description: String
  password: String
  roles: UserUpdaterolesInput
  notifications: NotificationUpdateManyInput
  processes: BpmnProcessInstanceUpdateManyWithoutOwnerInput
  data: DataUpdateManyInput
}

input UserUpdateInput {
  uid: String
  name: String
  description: String
  password: String
  roles: UserUpdaterolesInput
  notifications: NotificationUpdateManyInput
  processes: BpmnProcessInstanceUpdateManyWithoutOwnerInput
  data: DataUpdateManyInput
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneWithoutProcessesInput {
  create: UserCreateWithoutProcessesInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateWithoutProcessesDataInput
  upsert: UserUpsertWithoutProcessesInput
}

input UserUpdaterolesInput {
  set: [String!]
}

input UserUpdateWithoutProcessesDataInput {
  uid: String
  name: String
  description: String
  password: String
  roles: UserUpdaterolesInput
  notifications: NotificationUpdateManyInput
  data: DataUpdateManyInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
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
  _MagicalBackRelation_TaskPerformer_every: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_TaskPerformer_some: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_TaskPerformer_none: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_LogToUser_every: LogWhereInput
  _MagicalBackRelation_LogToUser_some: LogWhereInput
  _MagicalBackRelation_LogToUser_none: LogWhereInput
}

input UserWhereUniqueInput {
  id: ID
  uid: String
}

type Validator implements Node {
  id: ID!
  name: String!
  params: [String!]!
}

"""A connection to a list of items."""
type ValidatorConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ValidatorEdge]!
  aggregate: AggregateValidator!
}

input ValidatorCreateInput {
  name: String!
  params: ValidatorCreateparamsInput
}

input ValidatorCreateManyInput {
  create: [ValidatorCreateInput!]
  connect: [ValidatorWhereUniqueInput!]
}

input ValidatorCreateOneInput {
  create: ValidatorCreateInput
  connect: ValidatorWhereUniqueInput
}

input ValidatorCreateparamsInput {
  set: [String!]
}

"""An edge in a connection."""
type ValidatorEdge {
  """The item at the end of the edge."""
  node: Validator!

  """A cursor for use in pagination."""
  cursor: String!
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

type ValidatorPreviousValues {
  id: ID!
  name: String!
  params: [String!]!
}

type ValidatorSubscriptionPayload {
  mutation: MutationType!
  node: Validator
  updatedFields: [String!]
  previousValues: ValidatorPreviousValues
}

input ValidatorSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ValidatorSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ValidatorSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ValidatorSubscriptionWhereInput!]

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
  node: ValidatorWhereInput
}

input ValidatorUpdateDataInput {
  name: String
  params: ValidatorUpdateparamsInput
}

input ValidatorUpdateInput {
  name: String
  params: ValidatorUpdateparamsInput
}

input ValidatorUpdateManyInput {
  create: [ValidatorCreateInput!]
  connect: [ValidatorWhereUniqueInput!]
  disconnect: [ValidatorWhereUniqueInput!]
  delete: [ValidatorWhereUniqueInput!]
  update: [ValidatorUpdateWithWhereUniqueNestedInput!]
  upsert: [ValidatorUpsertWithWhereUniqueNestedInput!]
}

input ValidatorUpdateOneInput {
  create: ValidatorCreateInput
  connect: ValidatorWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: ValidatorUpdateDataInput
  upsert: ValidatorUpsertNestedInput
}

input ValidatorUpdateparamsInput {
  set: [String!]
}

input ValidatorUpdateWithWhereUniqueNestedInput {
  where: ValidatorWhereUniqueInput!
  data: ValidatorUpdateDataInput!
}

input ValidatorUpsertNestedInput {
  update: ValidatorUpdateDataInput!
  create: ValidatorCreateInput!
}

input ValidatorUpsertWithWhereUniqueNestedInput {
  where: ValidatorWhereUniqueInput!
  update: ValidatorUpdateDataInput!
  create: ValidatorCreateInput!
}

input ValidatorWhereInput {
  """Logical AND on all given filters."""
  AND: [ValidatorWhereInput!]

  """Logical OR on all given filters."""
  OR: [ValidatorWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ValidatorWhereInput!]
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
  _MagicalBackRelation_FormToValidator_every: FormWhereInput
  _MagicalBackRelation_FormToValidator_some: FormWhereInput
  _MagicalBackRelation_FormToValidator_none: FormWhereInput
  _MagicalBackRelation_DataDescriptorToValidator_every: DataDescriptorWhereInput
  _MagicalBackRelation_DataDescriptorToValidator_some: DataDescriptorWhereInput
  _MagicalBackRelation_DataDescriptorToValidator_none: DataDescriptorWhereInput
}

input ValidatorWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type DataDescriptorOrderByInput =   'id_ASC' |
  'id_DESC' |
  'defaultValue_ASC' |
  'defaultValue_DESC' |
  'description_ASC' |
  'description_DESC' |
  'expression_ASC' |
  'expression_DESC' |
  'isArray_ASC' |
  'isArray_DESC' |
  'clone_ASC' |
  'clone_DESC' |
  'name_ASC' |
  'name_DESC' |
  'type_ASC' |
  'type_DESC' |
  'parentDescriptor_ASC' |
  'parentDescriptor_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BpmnTaskInstanceStatus =   'Started' |
  'Paused' |
  'Aborted' |
  'Finished' |
  'Approved' |
  'Rejected'

export type FormControl =   'Input' |
  'Select' |
  'Checkbox' |
  'Radio' |
  'Textarea' |
  'Repeater' |
  'Table' |
  'Text' |
  'DeleteButton'

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
  'visible_ASC' |
  'visible_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

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

export type DataType =   'Id' |
  'Boolean' |
  'Float' |
  'Int' |
  'String' |
  'Date' |
  'Object'

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

export type CommentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'text_ASC' |
  'text_DESC' |
  'date_ASC' |
  'date_DESC' |
  'replyTo_ASC' |
  'replyTo_DESC' |
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

export type BpmnTaskInstanceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'dateFinished_ASC' |
  'dateFinished_DESC' |
  'dateStarted_ASC' |
  'dateStarted_DESC' |
  'duration_ASC' |
  'duration_DESC' |
  'data_ASC' |
  'data_DESC' |
  'status_ASC' |
  'status_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type FormElementOrderByInput =   'id_ASC' |
  'id_DESC' |
  'row_ASC' |
  'row_DESC' |
  'column_ASC' |
  'column_DESC' |
  'width_ASC' |
  'width_DESC' |
  'label_ASC' |
  'label_DESC' |
  'inline_ASC' |
  'inline_DESC' |
  'defaultValue_ASC' |
  'defaultValue_DESC' |
  'list_ASC' |
  'list_DESC' |
  'filterSource_ASC' |
  'filterSource_DESC' |
  'filterColumn_ASC' |
  'filterColumn_DESC' |
  'control_ASC' |
  'control_DESC' |
  'controlProps_ASC' |
  'controlProps_DESC' |
  'vertical_ASC' |
  'vertical_DESC' |
  'parentElement_ASC' |
  'parentElement_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

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

export type FormOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BpmnProcessOrderByInput =   'id_ASC' |
  'id_DESC' |
  'actionCount_ASC' |
  'actionCount_DESC' |
  'description_ASC' |
  'description_DESC' |
  'model_ASC' |
  'model_DESC' |
  'name_ASC' |
  'name_DESC' |
  'type_ASC' |
  'type_DESC' |
  'status_ASC' |
  'status_DESC' |
  'version_ASC' |
  'version_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ProcessType =   'HumanResources' |
  'Purchases' |
  'Sales' |
  'Travel'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type ProcessStatus =   'Draft' |
  'Proposal' |
  'Published'

export type DocumentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'title_ASC' |
  'title_DESC' |
  'content_ASC' |
  'content_DESC' |
  'version_ASC' |
  'version_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ValidatorOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
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
  'data_ASC' |
  'data_DESC' |
  'status_ASC' |
  'status_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type ResourceType =   'Url' |
  'File' |
  'Form' |
  'Document'

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

export type NotificationType =   'Info' |
  'Error' |
  'Warning'

export type BpmnTaskType =   'Form'

export type NotificationCode =   'ProcessStarted' |
  'ProcessFinished' |
  'ProcessAborted' |
  'ActionStarted' |
  'ActionFinished' |
  'ActionAborted' |
  'ActionRequired'

export type BpmnProcessInstanceStatus =   'Running' |
  'Finished' |
  'Aborted' |
  'Paused'

export type ResourceOrderByInput =   'id_ASC' |
  'id_DESC' |
  'type_ASC' |
  'type_DESC' |
  'name_ASC' |
  'name_DESC' |
  'link_ASC' |
  'link_DESC' |
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

export type DataOrderByInput =   'id_ASC' |
  'id_DESC' |
  'organisationId_ASC' |
  'organisationId_DESC' |
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

export interface UserCreateOneWithoutProcessesInput {
  create?: UserCreateWithoutProcessesInput
  connect?: UserWhereUniqueInput
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

export interface BpmnTaskInstanceCreateManyInput {
  create?: BpmnTaskInstanceCreateInput[] | BpmnTaskInstanceCreateInput
  connect?: BpmnTaskInstanceWhereUniqueInput[] | BpmnTaskInstanceWhereUniqueInput
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
  _MagicalBackRelation_TaskPerformer_every?: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_TaskPerformer_some?: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_TaskPerformer_none?: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_LogToUser_every?: LogWhereInput
  _MagicalBackRelation_LogToUser_some?: LogWhereInput
  _MagicalBackRelation_LogToUser_none?: LogWhereInput
}

export interface BpmnTaskInstanceCreateInput {
  dateFinished?: DateTime
  dateStarted: DateTime
  duration?: Int
  data?: Json
  status: BpmnTaskInstanceStatus
  performerRoles?: BpmnTaskInstanceCreateperformerRolesInput
  performer?: UserCreateOneInput
  processInstance: BpmnProcessInstanceCreateOneInput
  task: BpmnTaskCreateOneInput
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
  status?: BpmnTaskInstanceStatus
  status_not?: BpmnTaskInstanceStatus
  status_in?: BpmnTaskInstanceStatus[] | BpmnTaskInstanceStatus
  status_not_in?: BpmnTaskInstanceStatus[] | BpmnTaskInstanceStatus
  performer?: UserWhereInput
  processInstance?: BpmnProcessInstanceWhereInput
  task?: BpmnTaskWhereInput
  _MagicalBackRelation_BpmnProcessInstanceTasks_every?: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceTasks_some?: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceTasks_none?: BpmnProcessInstanceWhereInput
}

export interface BpmnTaskInstanceCreateperformerRolesInput {
  set?: String[] | String
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
  _MagicalBackRelation_BpmnProcessTasks_every?: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnProcessTasks_some?: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnProcessTasks_none?: BpmnTaskInstanceWhereInput
}

export interface BpmnTaskCreateOneInput {
  create?: BpmnTaskCreateInput
  connect?: BpmnTaskWhereUniqueInput
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
  date?: DateTime
  date_not?: DateTime
  date_in?: DateTime[] | DateTime
  date_not_in?: DateTime[] | DateTime
  date_lt?: DateTime
  date_lte?: DateTime
  date_gt?: DateTime
  date_gte?: DateTime
  replyTo?: String
  replyTo_not?: String
  replyTo_in?: String[] | String
  replyTo_not_in?: String[] | String
  replyTo_lt?: String
  replyTo_lte?: String
  replyTo_gt?: String
  replyTo_gte?: String
  replyTo_contains?: String
  replyTo_not_contains?: String
  replyTo_starts_with?: String
  replyTo_not_starts_with?: String
  replyTo_ends_with?: String
  replyTo_not_ends_with?: String
  user?: UserWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToComment_every?: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToComment_some?: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceToComment_none?: BpmnProcessInstanceWhereInput
}

export interface BpmnProcessInstanceCreateManyWithoutOwnerInput {
  create?: BpmnProcessInstanceCreateWithoutOwnerInput[] | BpmnProcessInstanceCreateWithoutOwnerInput
  connect?: BpmnProcessInstanceWhereUniqueInput[] | BpmnProcessInstanceWhereUniqueInput
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
  organisationId?: String
  organisationId_not?: String
  organisationId_in?: String[] | String
  organisationId_not_in?: String[] | String
  organisationId_lt?: String
  organisationId_lte?: String
  organisationId_gt?: String
  organisationId_gte?: String
  organisationId_contains?: String
  organisationId_not_contains?: String
  organisationId_starts_with?: String
  organisationId_not_starts_with?: String
  organisationId_ends_with?: String
  organisationId_not_ends_with?: String
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
  descriptor?: DataDescriptorWhereInput
  _MagicalBackRelation_UserData_every?: UserWhereInput
  _MagicalBackRelation_UserData_some?: UserWhereInput
  _MagicalBackRelation_UserData_none?: UserWhereInput
}

export interface DataDescriptorUpsertWithWhereUniqueNestedInput {
  where: DataDescriptorWhereUniqueInput
  update: DataDescriptorUpdateDataInput
  create: DataDescriptorCreateInput
}

export interface BpmnProcessInstanceUpdateDataInput {
  dateFinished?: DateTime
  dateStarted?: DateTime
  duration?: Int
  data?: Json
  status?: BpmnProcessInstanceStatus
  comments?: CommentUpdateManyInput
  owner?: UserUpdateOneWithoutProcessesInput
  process?: BpmnProcessUpdateOneInput
  log?: LogUpdateManyInput
  tasks?: BpmnTaskInstanceUpdateManyInput
}

export interface DataDescriptorUpdateWithWhereUniqueNestedInput {
  where: DataDescriptorWhereUniqueInput
  data: DataDescriptorUpdateDataInput
}

export interface BpmnProcessInstanceCreateWithoutOwnerInput {
  dateFinished?: DateTime
  dateStarted: DateTime
  duration?: Int
  data: Json
  status: BpmnProcessInstanceStatus
  comments?: CommentCreateManyInput
  process: BpmnProcessCreateOneInput
  log?: LogCreateManyInput
  tasks?: BpmnTaskInstanceCreateManyInput
}

export interface DataDescriptorUpdateManyInput {
  create?: DataDescriptorCreateInput[] | DataDescriptorCreateInput
  connect?: DataDescriptorWhereUniqueInput[] | DataDescriptorWhereUniqueInput
  disconnect?: DataDescriptorWhereUniqueInput[] | DataDescriptorWhereUniqueInput
  delete?: DataDescriptorWhereUniqueInput[] | DataDescriptorWhereUniqueInput
  update?: DataDescriptorUpdateWithWhereUniqueNestedInput[] | DataDescriptorUpdateWithWhereUniqueNestedInput
  upsert?: DataDescriptorUpsertWithWhereUniqueNestedInput[] | DataDescriptorUpsertWithWhereUniqueNestedInput
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
  _MagicalBackRelation_CanRead_every?: AccessWhereInput
  _MagicalBackRelation_CanRead_some?: AccessWhereInput
  _MagicalBackRelation_CanRead_none?: AccessWhereInput
  _MagicalBackRelation_CanWrite_every?: AccessWhereInput
  _MagicalBackRelation_CanWrite_some?: AccessWhereInput
  _MagicalBackRelation_CanWrite_none?: AccessWhereInput
  _MagicalBackRelation_CanExecute_every?: AccessWhereInput
  _MagicalBackRelation_CanExecute_some?: AccessWhereInput
  _MagicalBackRelation_CanExecute_none?: AccessWhereInput
}

export interface BpmnProcessUpdateDataInput {
  actionCount?: Int
  description?: String
  model?: String
  name?: String
  type?: ProcessType
  status?: ProcessStatus
  version?: Int
  access?: AccessUpdateOneInput
  dataDescriptors?: DataDescriptorUpdateManyInput
  resources?: ResourceUpdateManyInput
  versions?: BpmnProcessUpdateManyInput
  tasks?: BpmnTaskUpdateManyInput
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

export interface BpmnProcessUpdateOneInput {
  create?: BpmnProcessCreateInput
  connect?: BpmnProcessWhereUniqueInput
  delete?: Boolean
  update?: BpmnProcessUpdateDataInput
  upsert?: BpmnProcessUpsertNestedInput
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

export interface UserUpsertWithoutProcessesInput {
  update: UserUpdateWithoutProcessesDataInput
  create: UserCreateWithoutProcessesInput
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

export interface DataUpsertWithWhereUniqueNestedInput {
  where: DataWhereUniqueInput
  update: DataUpdateDataInput
  create: DataCreateInput
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

export interface DataUpdateDataInput {
  organisationId?: String
  version?: Int
  date?: DateTime
  value?: String
  descriptor?: DataDescriptorUpdateOneInput
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
  defaultValue?: String
  defaultValue_not?: String
  defaultValue_in?: String[] | String
  defaultValue_not_in?: String[] | String
  defaultValue_lt?: String
  defaultValue_lte?: String
  defaultValue_gt?: String
  defaultValue_gte?: String
  defaultValue_contains?: String
  defaultValue_not_contains?: String
  defaultValue_starts_with?: String
  defaultValue_not_starts_with?: String
  defaultValue_ends_with?: String
  defaultValue_not_ends_with?: String
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
  expression?: String
  expression_not?: String
  expression_in?: String[] | String
  expression_not_in?: String[] | String
  expression_lt?: String
  expression_lte?: String
  expression_gt?: String
  expression_gte?: String
  expression_contains?: String
  expression_not_contains?: String
  expression_starts_with?: String
  expression_not_starts_with?: String
  expression_ends_with?: String
  expression_not_ends_with?: String
  isArray?: Boolean
  isArray_not?: Boolean
  clone?: Boolean
  clone_not?: Boolean
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
  type?: DataType
  type_not?: DataType
  type_in?: DataType[] | DataType
  type_not_in?: DataType[] | DataType
  parentDescriptor?: ID_Input
  parentDescriptor_not?: ID_Input
  parentDescriptor_in?: ID_Input[] | ID_Input
  parentDescriptor_not_in?: ID_Input[] | ID_Input
  parentDescriptor_lt?: ID_Input
  parentDescriptor_lte?: ID_Input
  parentDescriptor_gt?: ID_Input
  parentDescriptor_gte?: ID_Input
  parentDescriptor_contains?: ID_Input
  parentDescriptor_not_contains?: ID_Input
  parentDescriptor_starts_with?: ID_Input
  parentDescriptor_not_starts_with?: ID_Input
  parentDescriptor_ends_with?: ID_Input
  parentDescriptor_not_ends_with?: ID_Input
  access?: AccessWhereInput
  validators?: ValidatorWhereInput
  _MagicalBackRelation_DataToDataDescriptor_every?: DataWhereInput
  _MagicalBackRelation_DataToDataDescriptor_some?: DataWhereInput
  _MagicalBackRelation_DataToDataDescriptor_none?: DataWhereInput
  _MagicalBackRelation_DataDescriptorToFormElement_every?: FormElementWhereInput
  _MagicalBackRelation_DataDescriptorToFormElement_some?: FormElementWhereInput
  _MagicalBackRelation_DataDescriptorToFormElement_none?: FormElementWhereInput
  _MagicalBackRelation_BpmnProcessToDataDescriptor_every?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessToDataDescriptor_some?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessToDataDescriptor_none?: BpmnProcessWhereInput
}

export interface DataUpdateWithWhereUniqueNestedInput {
  where: DataWhereUniqueInput
  data: DataUpdateDataInput
}

export interface DocumentSubscriptionWhereInput {
  AND?: DocumentSubscriptionWhereInput[] | DocumentSubscriptionWhereInput
  OR?: DocumentSubscriptionWhereInput[] | DocumentSubscriptionWhereInput
  NOT?: DocumentSubscriptionWhereInput[] | DocumentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: DocumentWhereInput
}

export interface DataUpdateManyInput {
  create?: DataCreateInput[] | DataCreateInput
  connect?: DataWhereUniqueInput[] | DataWhereUniqueInput
  disconnect?: DataWhereUniqueInput[] | DataWhereUniqueInput
  delete?: DataWhereUniqueInput[] | DataWhereUniqueInput
  update?: DataUpdateWithWhereUniqueNestedInput[] | DataUpdateWithWhereUniqueNestedInput
  upsert?: DataUpsertWithWhereUniqueNestedInput[] | DataUpsertWithWhereUniqueNestedInput
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

export interface UserUpdateWithoutProcessesDataInput {
  uid?: String
  name?: String
  description?: String
  password?: String
  roles?: UserUpdaterolesInput
  notifications?: NotificationUpdateManyInput
  data?: DataUpdateManyInput
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

export interface UserUpdateOneWithoutProcessesInput {
  create?: UserCreateWithoutProcessesInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateWithoutProcessesDataInput
  upsert?: UserUpsertWithoutProcessesInput
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
  elements_every?: FormElementWhereInput
  elements_some?: FormElementWhereInput
  elements_none?: FormElementWhereInput
  validations_every?: ValidatorWhereInput
  validations_some?: ValidatorWhereInput
  validations_none?: ValidatorWhereInput
  _MagicalBackRelation_ResourceReport_every?: ResourceWhereInput
  _MagicalBackRelation_ResourceReport_some?: ResourceWhereInput
  _MagicalBackRelation_ResourceReport_none?: ResourceWhereInput
}

export interface CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  update: CommentUpdateDataInput
  create: CommentCreateInput
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

export interface CommentUpdateDataInput {
  text?: String
  date?: DateTime
  replyTo?: String
  user?: UserUpdateOneInput
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

export interface CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput
  data: CommentUpdateDataInput
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

export interface LocalisationCreateInput {
  code: String
  text: String
  language: LanguageCode
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

export interface OrganisationCreateInput {
  name: String
  description?: String
}

export interface BpmnTaskUpdateInput {
  taskId?: ID_Input
  name?: String
  type?: BpmnTaskType
  resources?: ResourceUpdateManyInput
}

export interface RoleCreateInput {
  name: String
  description?: String
}

export interface OrganisationWhereUniqueInput {
  id?: ID_Input
}

export interface ValidatorCreateInput {
  name: String
  params?: ValidatorCreateparamsInput
}

export interface ValidatorWhereUniqueInput {
  id?: ID_Input
}

export interface ValidatorCreateparamsInput {
  set?: String[] | String
}

export interface FormElementWhereUniqueInput {
  id?: ID_Input
}

export interface FormCreateInput {
  name: String
  description?: String
  elements?: FormElementCreateManyInput
  validations?: ValidatorCreateManyInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  uid?: String
}

export interface FormElementCreateManyInput {
  create?: FormElementCreateInput[] | FormElementCreateInput
  connect?: FormElementWhereUniqueInput[] | FormElementWhereUniqueInput
}

export interface DocumentWhereUniqueInput {
  id?: ID_Input
}

export interface FormElementCreateInput {
  row?: Int
  column?: Int
  width?: Int
  label?: String
  inline?: Boolean
  defaultValue?: String
  list?: String
  filterSource?: String
  filterColumn?: String
  control?: FormControl
  controlProps?: Json
  vertical?: Boolean
  parentElement?: ID_Input
  source?: DataDescriptorCreateOneInput
}

export interface DataDescriptorWhereUniqueInput {
  id?: ID_Input
}

export interface DataDescriptorCreateOneInput {
  create?: DataDescriptorCreateInput
  connect?: DataDescriptorWhereUniqueInput
}

export interface AccessWhereUniqueInput {
  id?: ID_Input
}

export interface DataDescriptorCreateInput {
  defaultValue?: String
  description?: String
  expression?: String
  isArray?: Boolean
  clone?: Boolean
  name?: String
  type?: DataType
  parentDescriptor?: ID_Input
  access?: AccessCreateOneInput
  validators?: ValidatorCreateOneInput
}

export interface BpmnTaskInstanceWhereUniqueInput {
  id?: ID_Input
}

export interface AccessCreateOneInput {
  create?: AccessCreateInput
  connect?: AccessWhereUniqueInput
}

export interface BpmnTaskWhereUniqueInput {
  id?: ID_Input
  taskId?: ID_Input
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

export interface BpmnProcessUpdateInput {
  actionCount?: Int
  description?: String
  model?: String
  name?: String
  type?: ProcessType
  status?: ProcessStatus
  version?: Int
  access?: AccessUpdateOneInput
  dataDescriptors?: DataDescriptorUpdateManyInput
  resources?: ResourceUpdateManyInput
  versions?: BpmnProcessUpdateManyInput
  tasks?: BpmnTaskUpdateManyInput
}

export interface AccessConditionCreateManyInput {
  create?: AccessConditionCreateInput[] | AccessConditionCreateInput
}

export interface DataUpdateInput {
  organisationId?: String
  version?: Int
  date?: DateTime
  value?: String
  descriptor?: DataDescriptorUpdateOneInput
}

export interface AccessConditionCreateInput {
  organisationId?: ID_Input
  roleId?: ID_Input
  userId?: ID_Input
}

export interface ResourceUpdateInput {
  type?: ResourceType
  name?: String
  link?: String
  form?: FormUpdateOneInput
  document?: DocumentUpdateOneInput
}

export interface ValidatorCreateOneInput {
  create?: ValidatorCreateInput
  connect?: ValidatorWhereUniqueInput
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

export interface ValidatorCreateManyInput {
  create?: ValidatorCreateInput[] | ValidatorCreateInput
  connect?: ValidatorWhereUniqueInput[] | ValidatorWhereUniqueInput
}

export interface NotificationUpdateInput {
  type?: NotificationType
  userId?: ID_Input
  code?: NotificationCode
  text?: String
  visible?: Boolean
  params?: NotificationUpdateparamsInput
  processInstance?: BpmnProcessInstanceUpdateOneInput
}

export interface CommentCreateInput {
  text: String
  date: DateTime
  replyTo?: String
  user: UserCreateOneInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface BpmnProcessInstanceUpdateWithoutOwnerDataInput {
  dateFinished?: DateTime
  dateStarted?: DateTime
  duration?: Int
  data?: Json
  status?: BpmnProcessInstanceStatus
  comments?: CommentUpdateManyInput
  process?: BpmnProcessUpdateOneInput
  log?: LogUpdateManyInput
  tasks?: BpmnTaskInstanceUpdateManyInput
}

export interface UserCreateInput {
  uid: String
  name: String
  description?: String
  password: String
  roles?: UserCreaterolesInput
  notifications?: NotificationCreateManyInput
  processes?: BpmnProcessInstanceCreateManyWithoutOwnerInput
  data?: DataCreateManyInput
}

export interface BpmnProcessInstanceUpdateManyWithoutOwnerInput {
  create?: BpmnProcessInstanceCreateWithoutOwnerInput[] | BpmnProcessInstanceCreateWithoutOwnerInput
  connect?: BpmnProcessInstanceWhereUniqueInput[] | BpmnProcessInstanceWhereUniqueInput
  disconnect?: BpmnProcessInstanceWhereUniqueInput[] | BpmnProcessInstanceWhereUniqueInput
  delete?: BpmnProcessInstanceWhereUniqueInput[] | BpmnProcessInstanceWhereUniqueInput
  update?: BpmnProcessInstanceUpdateWithWhereUniqueWithoutOwnerInput[] | BpmnProcessInstanceUpdateWithWhereUniqueWithoutOwnerInput
  upsert?: BpmnProcessInstanceUpsertWithWhereUniqueWithoutOwnerInput[] | BpmnProcessInstanceUpsertWithWhereUniqueWithoutOwnerInput
}

export interface UserCreaterolesInput {
  set?: String[] | String
}

export interface BpmnProcessInstanceUpsertNestedInput {
  update: BpmnProcessInstanceUpdateDataInput
  create: BpmnProcessInstanceCreateInput
}

export interface NotificationCreateManyInput {
  create?: NotificationCreateInput[] | NotificationCreateInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
}

export interface BpmnTaskUpsertNestedInput {
  update: BpmnTaskUpdateDataInput
  create: BpmnTaskCreateInput
}

export interface NotificationCreateInput {
  type: NotificationType
  userId: ID_Input
  code: NotificationCode
  text?: String
  visible: Boolean
  params?: NotificationCreateparamsInput
  processInstance: BpmnProcessInstanceCreateOneInput
}

export interface BpmnTaskInstanceUpdateperformerRolesInput {
  set?: String[] | String
}

export interface NotificationCreateparamsInput {
  set?: String[] | String
}

export interface BpmnTaskInstanceUpdateWithWhereUniqueNestedInput {
  where: BpmnTaskInstanceWhereUniqueInput
  data: BpmnTaskInstanceUpdateDataInput
}

export interface BpmnProcessInstanceCreateOneInput {
  create?: BpmnProcessInstanceCreateInput
  connect?: BpmnProcessInstanceWhereUniqueInput
}

export interface LogUpsertWithWhereUniqueNestedInput {
  where: LogWhereUniqueInput
  update: LogUpdateDataInput
  create: LogCreateInput
}

export interface BpmnProcessInstanceCreateInput {
  dateFinished?: DateTime
  dateStarted: DateTime
  duration?: Int
  data: Json
  status: BpmnProcessInstanceStatus
  comments?: CommentCreateManyInput
  owner: UserCreateOneWithoutProcessesInput
  process: BpmnProcessCreateOneInput
  log?: LogCreateManyInput
  tasks?: BpmnTaskInstanceCreateManyInput
}

export interface LogUpdateWithWhereUniqueNestedInput {
  where: LogWhereUniqueInput
  data: LogUpdateDataInput
}

export interface CommentCreateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
}

export interface BpmnProcessUpsertNestedInput {
  update: BpmnProcessUpdateDataInput
  create: BpmnProcessCreateInput
}

export interface CommentUpdateManyInput {
  create?: CommentCreateInput[] | CommentCreateInput
  connect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  disconnect?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  delete?: CommentWhereUniqueInput[] | CommentWhereUniqueInput
  update?: CommentUpdateWithWhereUniqueNestedInput[] | CommentUpdateWithWhereUniqueNestedInput
  upsert?: CommentUpsertWithWhereUniqueNestedInput[] | CommentUpsertWithWhereUniqueNestedInput
}

export interface BpmnTaskUpdateDataInput {
  taskId?: ID_Input
  name?: String
  type?: BpmnTaskType
  resources?: ResourceUpdateManyInput
}

export interface UserCreateWithoutProcessesInput {
  uid: String
  name: String
  description?: String
  password: String
  roles?: UserCreaterolesInput
  notifications?: NotificationCreateManyInput
  data?: DataCreateManyInput
}

export interface BpmnTaskUpdateManyInput {
  create?: BpmnTaskCreateInput[] | BpmnTaskCreateInput
  connect?: BpmnTaskWhereUniqueInput[] | BpmnTaskWhereUniqueInput
  disconnect?: BpmnTaskWhereUniqueInput[] | BpmnTaskWhereUniqueInput
  delete?: BpmnTaskWhereUniqueInput[] | BpmnTaskWhereUniqueInput
  update?: BpmnTaskUpdateWithWhereUniqueNestedInput[] | BpmnTaskUpdateWithWhereUniqueNestedInput
  upsert?: BpmnTaskUpsertWithWhereUniqueNestedInput[] | BpmnTaskUpsertWithWhereUniqueNestedInput
}

export interface DataCreateManyInput {
  create?: DataCreateInput[] | DataCreateInput
  connect?: DataWhereUniqueInput[] | DataWhereUniqueInput
}

export interface BpmnProcessUpdateWithWhereUniqueNestedInput {
  where: BpmnProcessWhereUniqueInput
  data: BpmnProcessUpdateDataInput
}

export interface DataCreateInput {
  organisationId?: String
  version?: Int
  date?: DateTime
  value?: String
  descriptor?: DataDescriptorCreateOneInput
}

export interface ResourceUpsertWithWhereUniqueNestedInput {
  where: ResourceWhereUniqueInput
  update: ResourceUpdateDataInput
  create: ResourceCreateInput
}

export interface BpmnProcessCreateOneInput {
  create?: BpmnProcessCreateInput
  connect?: BpmnProcessWhereUniqueInput
}

export interface DocumentUpdateDataInput {
  title?: String
  content?: String
  version?: Int
}

export interface BpmnProcessCreateInput {
  actionCount: Int
  description?: String
  model: String
  name: String
  type: ProcessType
  status: ProcessStatus
  version: Int
  access: AccessCreateOneInput
  dataDescriptors?: DataDescriptorCreateManyInput
  resources?: ResourceCreateManyInput
  versions?: BpmnProcessCreateManyInput
  tasks?: BpmnTaskCreateManyInput
}

export interface FormUpsertNestedInput {
  update: FormUpdateDataInput
  create: FormCreateInput
}

export interface DataDescriptorCreateManyInput {
  create?: DataDescriptorCreateInput[] | DataDescriptorCreateInput
  connect?: DataDescriptorWhereUniqueInput[] | DataDescriptorWhereUniqueInput
}

export interface FormUpdateOneInput {
  create?: FormCreateInput
  connect?: FormWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: FormUpdateDataInput
  upsert?: FormUpsertNestedInput
}

export interface ResourceCreateManyInput {
  create?: ResourceCreateInput[] | ResourceCreateInput
  connect?: ResourceWhereUniqueInput[] | ResourceWhereUniqueInput
}

export interface ResourceUpdateWithWhereUniqueNestedInput {
  where: ResourceWhereUniqueInput
  data: ResourceUpdateDataInput
}

export interface ResourceCreateInput {
  type: ResourceType
  name: String
  link?: String
  form?: FormCreateOneInput
  document?: DocumentCreateOneInput
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

export interface FormCreateOneInput {
  create?: FormCreateInput
  connect?: FormWhereUniqueInput
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

export interface DocumentCreateOneInput {
  create?: DocumentCreateInput
  connect?: DocumentWhereUniqueInput
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
  _MagicalBackRelation_AccessToDataDescriptor_every?: DataDescriptorWhereInput
  _MagicalBackRelation_AccessToDataDescriptor_some?: DataDescriptorWhereInput
  _MagicalBackRelation_AccessToDataDescriptor_none?: DataDescriptorWhereInput
}

export interface DocumentCreateInput {
  title: String
  content?: String
  version?: Int
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

export interface BpmnProcessCreateManyInput {
  create?: BpmnProcessCreateInput[] | BpmnProcessCreateInput
  connect?: BpmnProcessWhereUniqueInput[] | BpmnProcessWhereUniqueInput
}

export interface FormElementWhereInput {
  AND?: FormElementWhereInput[] | FormElementWhereInput
  OR?: FormElementWhereInput[] | FormElementWhereInput
  NOT?: FormElementWhereInput[] | FormElementWhereInput
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
  row?: Int
  row_not?: Int
  row_in?: Int[] | Int
  row_not_in?: Int[] | Int
  row_lt?: Int
  row_lte?: Int
  row_gt?: Int
  row_gte?: Int
  column?: Int
  column_not?: Int
  column_in?: Int[] | Int
  column_not_in?: Int[] | Int
  column_lt?: Int
  column_lte?: Int
  column_gt?: Int
  column_gte?: Int
  width?: Int
  width_not?: Int
  width_in?: Int[] | Int
  width_not_in?: Int[] | Int
  width_lt?: Int
  width_lte?: Int
  width_gt?: Int
  width_gte?: Int
  label?: String
  label_not?: String
  label_in?: String[] | String
  label_not_in?: String[] | String
  label_lt?: String
  label_lte?: String
  label_gt?: String
  label_gte?: String
  label_contains?: String
  label_not_contains?: String
  label_starts_with?: String
  label_not_starts_with?: String
  label_ends_with?: String
  label_not_ends_with?: String
  inline?: Boolean
  inline_not?: Boolean
  defaultValue?: String
  defaultValue_not?: String
  defaultValue_in?: String[] | String
  defaultValue_not_in?: String[] | String
  defaultValue_lt?: String
  defaultValue_lte?: String
  defaultValue_gt?: String
  defaultValue_gte?: String
  defaultValue_contains?: String
  defaultValue_not_contains?: String
  defaultValue_starts_with?: String
  defaultValue_not_starts_with?: String
  defaultValue_ends_with?: String
  defaultValue_not_ends_with?: String
  list?: String
  list_not?: String
  list_in?: String[] | String
  list_not_in?: String[] | String
  list_lt?: String
  list_lte?: String
  list_gt?: String
  list_gte?: String
  list_contains?: String
  list_not_contains?: String
  list_starts_with?: String
  list_not_starts_with?: String
  list_ends_with?: String
  list_not_ends_with?: String
  filterSource?: String
  filterSource_not?: String
  filterSource_in?: String[] | String
  filterSource_not_in?: String[] | String
  filterSource_lt?: String
  filterSource_lte?: String
  filterSource_gt?: String
  filterSource_gte?: String
  filterSource_contains?: String
  filterSource_not_contains?: String
  filterSource_starts_with?: String
  filterSource_not_starts_with?: String
  filterSource_ends_with?: String
  filterSource_not_ends_with?: String
  filterColumn?: String
  filterColumn_not?: String
  filterColumn_in?: String[] | String
  filterColumn_not_in?: String[] | String
  filterColumn_lt?: String
  filterColumn_lte?: String
  filterColumn_gt?: String
  filterColumn_gte?: String
  filterColumn_contains?: String
  filterColumn_not_contains?: String
  filterColumn_starts_with?: String
  filterColumn_not_starts_with?: String
  filterColumn_ends_with?: String
  filterColumn_not_ends_with?: String
  control?: FormControl
  control_not?: FormControl
  control_in?: FormControl[] | FormControl
  control_not_in?: FormControl[] | FormControl
  vertical?: Boolean
  vertical_not?: Boolean
  parentElement?: ID_Input
  parentElement_not?: ID_Input
  parentElement_in?: ID_Input[] | ID_Input
  parentElement_not_in?: ID_Input[] | ID_Input
  parentElement_lt?: ID_Input
  parentElement_lte?: ID_Input
  parentElement_gt?: ID_Input
  parentElement_gte?: ID_Input
  parentElement_contains?: ID_Input
  parentElement_not_contains?: ID_Input
  parentElement_starts_with?: ID_Input
  parentElement_not_starts_with?: ID_Input
  parentElement_ends_with?: ID_Input
  parentElement_not_ends_with?: ID_Input
  source?: DataDescriptorWhereInput
  _MagicalBackRelation_FormToFormElement_every?: FormWhereInput
  _MagicalBackRelation_FormToFormElement_some?: FormWhereInput
  _MagicalBackRelation_FormToFormElement_none?: FormWhereInput
}

export interface BpmnTaskCreateManyInput {
  create?: BpmnTaskCreateInput[] | BpmnTaskCreateInput
  connect?: BpmnTaskWhereUniqueInput[] | BpmnTaskWhereUniqueInput
}

export interface ValidatorWhereInput {
  AND?: ValidatorWhereInput[] | ValidatorWhereInput
  OR?: ValidatorWhereInput[] | ValidatorWhereInput
  NOT?: ValidatorWhereInput[] | ValidatorWhereInput
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
  _MagicalBackRelation_FormToValidator_every?: FormWhereInput
  _MagicalBackRelation_FormToValidator_some?: FormWhereInput
  _MagicalBackRelation_FormToValidator_none?: FormWhereInput
  _MagicalBackRelation_DataDescriptorToValidator_every?: DataDescriptorWhereInput
  _MagicalBackRelation_DataDescriptorToValidator_some?: DataDescriptorWhereInput
  _MagicalBackRelation_DataDescriptorToValidator_none?: DataDescriptorWhereInput
}

export interface BpmnTaskCreateInput {
  taskId: ID_Input
  name: String
  type?: BpmnTaskType
  resources?: ResourceCreateManyInput
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

export interface LogCreateManyInput {
  create?: LogCreateInput[] | LogCreateInput
  connect?: LogWhereUniqueInput[] | LogWhereUniqueInput
}

export interface AccessConditionUpdateInput {
  organisationId?: ID_Input
  roleId?: ID_Input
  userId?: ID_Input
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

export interface LocalisationWhereUniqueInput {
  id?: ID_Input
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
  visible?: Boolean
  visible_not?: Boolean
  processInstance?: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_UserNotifications_every?: UserWhereInput
  _MagicalBackRelation_UserNotifications_some?: UserWhereInput
  _MagicalBackRelation_UserNotifications_none?: UserWhereInput
}

export interface FormWhereUniqueInput {
  id?: ID_Input
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
  _MagicalBackRelation_BpmnTaskToBpmnTaskInstance_every?: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnTaskToBpmnTaskInstance_some?: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BpmnTaskToBpmnTaskInstance_none?: BpmnTaskInstanceWhereInput
  _MagicalBackRelation_BomnProcessTasks_every?: BpmnProcessWhereInput
  _MagicalBackRelation_BomnProcessTasks_some?: BpmnProcessWhereInput
  _MagicalBackRelation_BomnProcessTasks_none?: BpmnProcessWhereInput
}

export interface NotificationWhereUniqueInput {
  id?: ID_Input
}

export interface DocumentWhereInput {
  AND?: DocumentWhereInput[] | DocumentWhereInput
  OR?: DocumentWhereInput[] | DocumentWhereInput
  NOT?: DocumentWhereInput[] | DocumentWhereInput
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
  _MagicalBackRelation_ResourceDocument_every?: ResourceWhereInput
  _MagicalBackRelation_ResourceDocument_some?: ResourceWhereInput
  _MagicalBackRelation_ResourceDocument_none?: ResourceWhereInput
}

export interface ResourceWhereUniqueInput {
  id?: ID_Input
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

export interface BpmnProcessWhereUniqueInput {
  id?: ID_Input
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
  link?: String
  link_not?: String
  link_in?: String[] | String
  link_not_in?: String[] | String
  link_lt?: String
  link_lte?: String
  link_gt?: String
  link_gte?: String
  link_contains?: String
  link_not_contains?: String
  link_starts_with?: String
  link_not_starts_with?: String
  link_ends_with?: String
  link_not_ends_with?: String
  form?: FormWhereInput
  document?: DocumentWhereInput
  _MagicalBackRelation_BpmnTaskToResource_every?: BpmnTaskWhereInput
  _MagicalBackRelation_BpmnTaskToResource_some?: BpmnTaskWhereInput
  _MagicalBackRelation_BpmnTaskToResource_none?: BpmnTaskWhereInput
  _MagicalBackRelation_BpmnProcessResources_every?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessResources_some?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessResources_none?: BpmnProcessWhereInput
}

export interface BpmnTaskInstanceUpdateInput {
  dateFinished?: DateTime
  dateStarted?: DateTime
  duration?: Int
  data?: Json
  status?: BpmnTaskInstanceStatus
  performerRoles?: BpmnTaskInstanceUpdateperformerRolesInput
  performer?: UserUpdateOneInput
  processInstance?: BpmnProcessInstanceUpdateOneInput
  task?: BpmnTaskUpdateOneInput
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
  type?: ProcessType
  type_not?: ProcessType
  type_in?: ProcessType[] | ProcessType
  type_not_in?: ProcessType[] | ProcessType
  status?: ProcessStatus
  status_not?: ProcessStatus
  status_in?: ProcessStatus[] | ProcessStatus
  status_not_in?: ProcessStatus[] | ProcessStatus
  version?: Int
  version_not?: Int
  version_in?: Int[] | Int
  version_not_in?: Int[] | Int
  version_lt?: Int
  version_lte?: Int
  version_gt?: Int
  version_gte?: Int
  access?: AccessWhereInput
  dataDescriptors_every?: DataDescriptorWhereInput
  dataDescriptors_some?: DataDescriptorWhereInput
  dataDescriptors_none?: DataDescriptorWhereInput
  resources_every?: ResourceWhereInput
  resources_some?: ResourceWhereInput
  resources_none?: ResourceWhereInput
  versions_every?: BpmnProcessWhereInput
  versions_some?: BpmnProcessWhereInput
  versions_none?: BpmnProcessWhereInput
  tasks_every?: BpmnTaskWhereInput
  tasks_some?: BpmnTaskWhereInput
  tasks_none?: BpmnTaskWhereInput
  _MagicalBackRelation_BpmnProcessVersions_every?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessVersions_some?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessVersions_none?: BpmnProcessWhereInput
  _MagicalBackRelation_BpmnProcessInstanceProcess_every?: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceProcess_some?: BpmnProcessInstanceWhereInput
  _MagicalBackRelation_BpmnProcessInstanceProcess_none?: BpmnProcessInstanceWhereInput
}

export interface DataDescriptorUpdateInput {
  defaultValue?: String
  description?: String
  expression?: String
  isArray?: Boolean
  clone?: Boolean
  name?: String
  type?: DataType
  parentDescriptor?: ID_Input
  access?: AccessUpdateOneInput
  validators?: ValidatorUpdateOneInput
}

export interface LocalisationUpdateInput {
  code?: String
  text?: String
  language?: LanguageCode
}

export interface UserUpdateInput {
  uid?: String
  name?: String
  description?: String
  password?: String
  roles?: UserUpdaterolesInput
  notifications?: NotificationUpdateManyInput
  processes?: BpmnProcessInstanceUpdateManyWithoutOwnerInput
  data?: DataUpdateManyInput
}

export interface OrganisationUpdateInput {
  name?: String
  description?: String
}

export interface BpmnProcessInstanceUpdateWithWhereUniqueWithoutOwnerInput {
  where: BpmnProcessInstanceWhereUniqueInput
  data: BpmnProcessInstanceUpdateWithoutOwnerDataInput
}

export interface RoleUpdateInput {
  name?: String
  description?: String
}

export interface BpmnTaskInstanceUpsertWithWhereUniqueNestedInput {
  where: BpmnTaskInstanceWhereUniqueInput
  update: BpmnTaskInstanceUpdateDataInput
  create: BpmnTaskInstanceCreateInput
}

export interface ValidatorUpdateInput {
  name?: String
  params?: ValidatorUpdateparamsInput
}

export interface BpmnTaskInstanceUpdateDataInput {
  dateFinished?: DateTime
  dateStarted?: DateTime
  duration?: Int
  data?: Json
  status?: BpmnTaskInstanceStatus
  performerRoles?: BpmnTaskInstanceUpdateperformerRolesInput
  performer?: UserUpdateOneInput
  processInstance?: BpmnProcessInstanceUpdateOneInput
  task?: BpmnTaskUpdateOneInput
}

export interface ValidatorUpdateparamsInput {
  set?: String[] | String
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

export interface FormUpdateInput {
  name?: String
  description?: String
  elements?: FormElementUpdateManyInput
  validations?: ValidatorUpdateManyInput
}

export interface BpmnTaskUpsertWithWhereUniqueNestedInput {
  where: BpmnTaskWhereUniqueInput
  update: BpmnTaskUpdateDataInput
  create: BpmnTaskCreateInput
}

export interface FormElementUpdateManyInput {
  create?: FormElementCreateInput[] | FormElementCreateInput
  connect?: FormElementWhereUniqueInput[] | FormElementWhereUniqueInput
  disconnect?: FormElementWhereUniqueInput[] | FormElementWhereUniqueInput
  delete?: FormElementWhereUniqueInput[] | FormElementWhereUniqueInput
  update?: FormElementUpdateWithWhereUniqueNestedInput[] | FormElementUpdateWithWhereUniqueNestedInput
  upsert?: FormElementUpsertWithWhereUniqueNestedInput[] | FormElementUpsertWithWhereUniqueNestedInput
}

export interface BpmnProcessUpsertWithWhereUniqueNestedInput {
  where: BpmnProcessWhereUniqueInput
  update: BpmnProcessUpdateDataInput
  create: BpmnProcessCreateInput
}

export interface FormElementUpdateWithWhereUniqueNestedInput {
  where: FormElementWhereUniqueInput
  data: FormElementUpdateDataInput
}

export interface DocumentUpsertNestedInput {
  update: DocumentUpdateDataInput
  create: DocumentCreateInput
}

export interface FormElementUpdateDataInput {
  row?: Int
  column?: Int
  width?: Int
  label?: String
  inline?: Boolean
  defaultValue?: String
  list?: String
  filterSource?: String
  filterColumn?: String
  control?: FormControl
  controlProps?: Json
  vertical?: Boolean
  parentElement?: ID_Input
  source?: DataDescriptorUpdateOneInput
}

export interface FormUpdateDataInput {
  name?: String
  description?: String
  elements?: FormElementUpdateManyInput
  validations?: ValidatorUpdateManyInput
}

export interface DataDescriptorUpdateOneInput {
  create?: DataDescriptorCreateInput
  connect?: DataDescriptorWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: DataDescriptorUpdateDataInput
  upsert?: DataDescriptorUpsertNestedInput
}

export interface ResourceUpdateManyInput {
  create?: ResourceCreateInput[] | ResourceCreateInput
  connect?: ResourceWhereUniqueInput[] | ResourceWhereUniqueInput
  disconnect?: ResourceWhereUniqueInput[] | ResourceWhereUniqueInput
  delete?: ResourceWhereUniqueInput[] | ResourceWhereUniqueInput
  update?: ResourceUpdateWithWhereUniqueNestedInput[] | ResourceUpdateWithWhereUniqueNestedInput
  upsert?: ResourceUpsertWithWhereUniqueNestedInput[] | ResourceUpsertWithWhereUniqueNestedInput
}

export interface DataDescriptorUpdateDataInput {
  defaultValue?: String
  description?: String
  expression?: String
  isArray?: Boolean
  clone?: Boolean
  name?: String
  type?: DataType
  parentDescriptor?: ID_Input
  access?: AccessUpdateOneInput
  validators?: ValidatorUpdateOneInput
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

export interface AccessUpdateOneInput {
  create?: AccessCreateInput
  connect?: AccessWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: AccessUpdateDataInput
  upsert?: AccessUpsertNestedInput
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

export interface AccessUpdateDataInput {
  createdById?: ID_Input
  createdOn?: DateTime
  modifiedById?: ID_Input
  modifiedOn?: DateTime
  read?: AccessConditionUpdateManyInput
  write?: AccessConditionUpdateManyInput
  execute?: AccessConditionUpdateManyInput
}

export interface ValidatorSubscriptionWhereInput {
  AND?: ValidatorSubscriptionWhereInput[] | ValidatorSubscriptionWhereInput
  OR?: ValidatorSubscriptionWhereInput[] | ValidatorSubscriptionWhereInput
  NOT?: ValidatorSubscriptionWhereInput[] | ValidatorSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ValidatorWhereInput
}

export interface AccessConditionUpdateManyInput {
  create?: AccessConditionCreateInput[] | AccessConditionCreateInput
}

export interface BpmnProcessInstanceUpdateInput {
  dateFinished?: DateTime
  dateStarted?: DateTime
  duration?: Int
  data?: Json
  status?: BpmnProcessInstanceStatus
  comments?: CommentUpdateManyInput
  owner?: UserUpdateOneWithoutProcessesInput
  process?: BpmnProcessUpdateOneInput
  log?: LogUpdateManyInput
  tasks?: BpmnTaskInstanceUpdateManyInput
}

export interface AccessUpsertNestedInput {
  update: AccessUpdateDataInput
  create: AccessCreateInput
}

export interface CommentWhereUniqueInput {
  id?: ID_Input
}

export interface ValidatorUpdateOneInput {
  create?: ValidatorCreateInput
  connect?: ValidatorWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: ValidatorUpdateDataInput
  upsert?: ValidatorUpsertNestedInput
}

export interface DataWhereUniqueInput {
  id?: ID_Input
}

export interface ValidatorUpdateDataInput {
  name?: String
  params?: ValidatorUpdateparamsInput
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

export interface ValidatorUpsertNestedInput {
  update: ValidatorUpdateDataInput
  create: ValidatorCreateInput
}

export interface BpmnProcessInstanceUpsertWithWhereUniqueWithoutOwnerInput {
  where: BpmnProcessInstanceWhereUniqueInput
  update: BpmnProcessInstanceUpdateWithoutOwnerDataInput
  create: BpmnProcessInstanceCreateWithoutOwnerInput
}

export interface DataDescriptorUpsertNestedInput {
  update: DataDescriptorUpdateDataInput
  create: DataDescriptorCreateInput
}

export interface BpmnTaskUpdateOneInput {
  create?: BpmnTaskCreateInput
  connect?: BpmnTaskWhereUniqueInput
  delete?: Boolean
  update?: BpmnTaskUpdateDataInput
  upsert?: BpmnTaskUpsertNestedInput
}

export interface FormElementUpsertWithWhereUniqueNestedInput {
  where: FormElementWhereUniqueInput
  update: FormElementUpdateDataInput
  create: FormElementCreateInput
}

export interface LogUpdateManyInput {
  create?: LogCreateInput[] | LogCreateInput
  connect?: LogWhereUniqueInput[] | LogWhereUniqueInput
  disconnect?: LogWhereUniqueInput[] | LogWhereUniqueInput
  delete?: LogWhereUniqueInput[] | LogWhereUniqueInput
  update?: LogUpdateWithWhereUniqueNestedInput[] | LogUpdateWithWhereUniqueNestedInput
  upsert?: LogUpsertWithWhereUniqueNestedInput[] | LogUpsertWithWhereUniqueNestedInput
}

export interface ValidatorUpdateManyInput {
  create?: ValidatorCreateInput[] | ValidatorCreateInput
  connect?: ValidatorWhereUniqueInput[] | ValidatorWhereUniqueInput
  disconnect?: ValidatorWhereUniqueInput[] | ValidatorWhereUniqueInput
  delete?: ValidatorWhereUniqueInput[] | ValidatorWhereUniqueInput
  update?: ValidatorUpdateWithWhereUniqueNestedInput[] | ValidatorUpdateWithWhereUniqueNestedInput
  upsert?: ValidatorUpsertWithWhereUniqueNestedInput[] | ValidatorUpsertWithWhereUniqueNestedInput
}

export interface BpmnProcessUpdateManyInput {
  create?: BpmnProcessCreateInput[] | BpmnProcessCreateInput
  connect?: BpmnProcessWhereUniqueInput[] | BpmnProcessWhereUniqueInput
  disconnect?: BpmnProcessWhereUniqueInput[] | BpmnProcessWhereUniqueInput
  delete?: BpmnProcessWhereUniqueInput[] | BpmnProcessWhereUniqueInput
  update?: BpmnProcessUpdateWithWhereUniqueNestedInput[] | BpmnProcessUpdateWithWhereUniqueNestedInput
  upsert?: BpmnProcessUpsertWithWhereUniqueNestedInput[] | BpmnProcessUpsertWithWhereUniqueNestedInput
}

export interface ValidatorUpdateWithWhereUniqueNestedInput {
  where: ValidatorWhereUniqueInput
  data: ValidatorUpdateDataInput
}

export interface ResourceUpdateDataInput {
  type?: ResourceType
  name?: String
  link?: String
  form?: FormUpdateOneInput
  document?: DocumentUpdateOneInput
}

export interface ValidatorUpsertWithWhereUniqueNestedInput {
  where: ValidatorWhereUniqueInput
  update: ValidatorUpdateDataInput
  create: ValidatorCreateInput
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

export interface FormElementUpdateInput {
  row?: Int
  column?: Int
  width?: Int
  label?: String
  inline?: Boolean
  defaultValue?: String
  list?: String
  filterSource?: String
  filterColumn?: String
  control?: FormControl
  controlProps?: Json
  vertical?: Boolean
  parentElement?: ID_Input
  source?: DataDescriptorUpdateOneInput
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

export interface CommentUpdateInput {
  text?: String
  date?: DateTime
  replyTo?: String
  user?: UserUpdateOneInput
}

export interface LogWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface DocumentUpdateInput {
  title?: String
  content?: String
  version?: Int
}

export interface UserUpdateDataInput {
  uid?: String
  name?: String
  description?: String
  password?: String
  roles?: UserUpdaterolesInput
  notifications?: NotificationUpdateManyInput
  processes?: BpmnProcessInstanceUpdateManyWithoutOwnerInput
  data?: DataUpdateManyInput
}

export interface BpmnTaskInstanceUpdateManyInput {
  create?: BpmnTaskInstanceCreateInput[] | BpmnTaskInstanceCreateInput
  connect?: BpmnTaskInstanceWhereUniqueInput[] | BpmnTaskInstanceWhereUniqueInput
  disconnect?: BpmnTaskInstanceWhereUniqueInput[] | BpmnTaskInstanceWhereUniqueInput
  delete?: BpmnTaskInstanceWhereUniqueInput[] | BpmnTaskInstanceWhereUniqueInput
  update?: BpmnTaskInstanceUpdateWithWhereUniqueNestedInput[] | BpmnTaskInstanceUpdateWithWhereUniqueNestedInput
  upsert?: BpmnTaskInstanceUpsertWithWhereUniqueNestedInput[] | BpmnTaskInstanceUpsertWithWhereUniqueNestedInput
}

export interface UserUpdaterolesInput {
  set?: String[] | String
}

export interface DocumentUpdateOneInput {
  create?: DocumentCreateInput
  connect?: DocumentWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: DocumentUpdateDataInput
  upsert?: DocumentUpsertNestedInput
}

export interface NotificationUpdateManyInput {
  create?: NotificationCreateInput[] | NotificationCreateInput
  connect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  disconnect?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  delete?: NotificationWhereUniqueInput[] | NotificationWhereUniqueInput
  update?: NotificationUpdateWithWhereUniqueNestedInput[] | NotificationUpdateWithWhereUniqueNestedInput
  upsert?: NotificationUpsertWithWhereUniqueNestedInput[] | NotificationUpsertWithWhereUniqueNestedInput
}

export interface FormElementSubscriptionWhereInput {
  AND?: FormElementSubscriptionWhereInput[] | FormElementSubscriptionWhereInput
  OR?: FormElementSubscriptionWhereInput[] | FormElementSubscriptionWhereInput
  NOT?: FormElementSubscriptionWhereInput[] | FormElementSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FormElementWhereInput
}

export interface BpmnProcessInstanceUpdateOneInput {
  create?: BpmnProcessInstanceCreateInput
  connect?: BpmnProcessInstanceWhereUniqueInput
  delete?: Boolean
  update?: BpmnProcessInstanceUpdateDataInput
  upsert?: BpmnProcessInstanceUpsertNestedInput
}

export interface NotificationUpdateparamsInput {
  set?: String[] | String
}

export interface NotificationUpdateDataInput {
  type?: NotificationType
  userId?: ID_Input
  code?: NotificationCode
  text?: String
  visible?: Boolean
  params?: NotificationUpdateparamsInput
  processInstance?: BpmnProcessInstanceUpdateOneInput
}

export interface NotificationUpdateWithWhereUniqueNestedInput {
  where: NotificationWhereUniqueInput
  data: NotificationUpdateDataInput
}

export interface RoleWhereUniqueInput {
  id?: ID_Input
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

export interface BpmnTaskUpdateWithWhereUniqueNestedInput {
  where: BpmnTaskWhereUniqueInput
  data: BpmnTaskUpdateDataInput
}

export interface NotificationUpsertWithWhereUniqueNestedInput {
  where: NotificationWhereUniqueInput
  update: NotificationUpdateDataInput
  create: NotificationCreateInput
}

export interface BpmnProcessInstanceWhereUniqueInput {
  id?: ID_Input
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface BpmnProcessInstancePreviousValues {
  id: ID_Output
  dateFinished?: DateTime
  dateStarted: DateTime
  duration?: Int
  data: Json
  status: BpmnProcessInstanceStatus
}

export interface BatchPayload {
  count: Long
}

export interface Validator extends Node {
  id: ID_Output
  name: String
  params: String[]
}

export interface BpmnProcessInstanceSubscriptionPayload {
  mutation: MutationType
  node?: BpmnProcessInstance
  updatedFields?: String[]
  previousValues?: BpmnProcessInstancePreviousValues
}

export interface BpmnProcessPreviousValues {
  id: ID_Output
  actionCount: Int
  description?: String
  model: String
  name: String
  type: ProcessType
  status: ProcessStatus
  version: Int
}

export interface Localisation extends Node {
  id: ID_Output
  code: String
  text: String
  language: LanguageCode
}

/*
 * An edge in a connection.

 */
export interface BpmnProcessInstanceEdge {
  node: BpmnProcessInstance
  cursor: String
}

export interface AggregateBpmnProcessInstance {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface BpmnTaskEdge {
  node: BpmnTask
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

export interface AggregateBpmnProcess {
  count: Int
}

export interface Data extends Node {
  id: ID_Output
  descriptor?: DataDescriptor
  organisationId?: String
  version?: Int
  date?: DateTime
  value?: String
}

/*
 * A connection to a list of items.

 */
export interface BpmnProcessConnection {
  pageInfo: PageInfo
  edges: BpmnProcessEdge[]
  aggregate: AggregateBpmnProcess
}

export interface Organisation extends Node {
  id: ID_Output
  name: String
  description?: String
}

/*
 * An edge in a connection.

 */
export interface BpmnTaskInstanceEdge {
  node: BpmnTaskInstance
  cursor: String
}

export interface Form extends Node {
  id: ID_Output
  name: String
  description?: String
  elements?: FormElement[]
  validations?: Validator[]
}

export interface AggregateData {
  count: Int
}

export interface LocalisationSubscriptionPayload {
  mutation: MutationType
  node?: Localisation
  updatedFields?: String[]
  previousValues?: LocalisationPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface DataConnection {
  pageInfo: PageInfo
  edges: DataEdge[]
  aggregate: AggregateData
}

export interface LocalisationPreviousValues {
  id: ID_Output
  code: String
  text: String
  language: LanguageCode
}

/*
 * An edge in a connection.

 */
export interface AccessEdge {
  node: Access
  cursor: String
}

export interface BpmnTaskInstance extends Node {
  id: ID_Output
  dateFinished?: DateTime
  dateStarted: DateTime
  duration?: Int
  performer?: User
  performerRoles: String[]
  processInstance: BpmnProcessInstance
  data?: Json
  status: BpmnTaskInstanceStatus
  task: BpmnTask
}

export interface AggregateResource {
  count: Int
}

export interface OrganisationSubscriptionPayload {
  mutation: MutationType
  node?: Organisation
  updatedFields?: String[]
  previousValues?: OrganisationPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface ResourceConnection {
  pageInfo: PageInfo
  edges: ResourceEdge[]
  aggregate: AggregateResource
}

export interface OrganisationPreviousValues {
  id: ID_Output
  name: String
  description?: String
}

/*
 * An edge in a connection.

 */
export interface DataDescriptorEdge {
  node: DataDescriptor
  cursor: String
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

export interface AggregateAccessCondition {
  count: Int
}

export interface RoleSubscriptionPayload {
  mutation: MutationType
  node?: Role
  updatedFields?: String[]
  previousValues?: RolePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface AccessConditionConnection {
  pageInfo: PageInfo
  edges: AccessConditionEdge[]
  aggregate: AggregateAccessCondition
}

export interface RolePreviousValues {
  id: ID_Output
  name: String
  description?: String
}

/*
 * An edge in a connection.

 */
export interface LogEdge {
  node: Log
  cursor: String
}

export interface Role extends Node {
  id: ID_Output
  name: String
  description?: String
}

export interface AggregateDocument {
  count: Int
}

export interface ValidatorSubscriptionPayload {
  mutation: MutationType
  node?: Validator
  updatedFields?: String[]
  previousValues?: ValidatorPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface DocumentConnection {
  pageInfo: PageInfo
  edges: DocumentEdge[]
  aggregate: AggregateDocument
}

export interface ValidatorPreviousValues {
  id: ID_Output
  name: String
  params: String[]
}

/*
 * An edge in a connection.

 */
export interface NotificationEdge {
  node: Notification
  cursor: String
}

export interface BpmnTask extends Node {
  id: ID_Output
  taskId: ID_Output
  resources?: Resource[]
  name: String
  type?: BpmnTaskType
}

export interface AggregateUser {
  count: Int
}

export interface FormSubscriptionPayload {
  mutation: MutationType
  node?: Form
  updatedFields?: String[]
  previousValues?: FormPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface FormPreviousValues {
  id: ID_Output
  name: String
  description?: String
}

/*
 * An edge in a connection.

 */
export interface CommentEdge {
  node: Comment
  cursor: String
}

export interface Document extends Node {
  id: ID_Output
  title: String
  content?: String
  version?: Int
}

export interface AggregateFormElement {
  count: Int
}

export interface FormElementSubscriptionPayload {
  mutation: MutationType
  node?: FormElement
  updatedFields?: String[]
  previousValues?: FormElementPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface FormElementConnection {
  pageInfo: PageInfo
  edges: FormElementEdge[]
  aggregate: AggregateFormElement
}

export interface FormElementPreviousValues {
  id: ID_Output
  row?: Int
  column?: Int
  width?: Int
  label?: String
  inline?: Boolean
  defaultValue?: String
  list?: String
  filterSource?: String
  filterColumn?: String
  control?: FormControl
  controlProps?: Json
  vertical?: Boolean
  parentElement?: ID_Output
}

/*
 * An edge in a connection.

 */
export interface FormEdge {
  node: Form
  cursor: String
}

export interface Resource extends Node {
  id: ID_Output
  type: ResourceType
  name: String
  link?: String
  form?: Form
  document?: Document
}

export interface AggregateValidator {
  count: Int
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
export interface ValidatorConnection {
  pageInfo: PageInfo
  edges: ValidatorEdge[]
  aggregate: AggregateValidator
}

export interface CommentPreviousValues {
  id: ID_Output
  text: String
  date: DateTime
  replyTo?: String
}

/*
 * An edge in a connection.

 */
export interface RoleEdge {
  node: Role
  cursor: String
}

export interface BpmnTaskPreviousValues {
  id: ID_Output
  taskId: ID_Output
  name: String
  type?: BpmnTaskType
}

export interface AggregateOrganisation {
  count: Int
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
export interface OrganisationConnection {
  pageInfo: PageInfo
  edges: OrganisationEdge[]
  aggregate: AggregateOrganisation
}

export interface UserPreviousValues {
  id: ID_Output
  uid: String
  name: String
  roles: String[]
  description?: String
  password: String
}

/*
 * An edge in a connection.

 */
export interface LocalisationEdge {
  node: Localisation
  cursor: String
}

export interface BpmnProcess extends Node {
  id: ID_Output
  access: Access
  actionCount: Int
  dataDescriptors?: DataDescriptor[]
  description?: String
  model: String
  name: String
  type: ProcessType
  resources?: Resource[]
  status: ProcessStatus
  version: Int
  versions?: BpmnProcess[]
  tasks?: BpmnTask[]
}

/*
 * A connection to a list of items.

 */
export interface LocalisationConnection {
  pageInfo: PageInfo
  edges: LocalisationEdge[]
  aggregate: AggregateLocalisation
}

export interface NotificationSubscriptionPayload {
  mutation: MutationType
  node?: Notification
  updatedFields?: String[]
  previousValues?: NotificationPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface BpmnTaskConnection {
  pageInfo: PageInfo
  edges: BpmnTaskEdge[]
  aggregate: AggregateBpmnTask
}

export interface NotificationPreviousValues {
  type: NotificationType
  id: ID_Output
  userId: ID_Output
  createdAt: DateTime
  code: NotificationCode
  text?: String
  params: String[]
  visible: Boolean
}

export interface AggregateBpmnTaskInstance {
  count: Int
}

export interface BpmnProcessInstance extends Node {
  id: ID_Output
  comments?: Comment[]
  dateFinished?: DateTime
  dateStarted: DateTime
  duration?: Int
  owner: User
  process: BpmnProcess
  data: Json
  log?: Log[]
  status: BpmnProcessInstanceStatus
  tasks?: BpmnTaskInstance[]
}

/*
 * An edge in a connection.

 */
export interface DataEdge {
  node: Data
  cursor: String
}

export interface DocumentSubscriptionPayload {
  mutation: MutationType
  node?: Document
  updatedFields?: String[]
  previousValues?: DocumentPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface AccessConnection {
  pageInfo: PageInfo
  edges: AccessEdge[]
  aggregate: AggregateAccess
}

export interface DocumentPreviousValues {
  id: ID_Output
  title: String
  content?: String
  version?: Int
}

export interface AggregateDataDescriptor {
  count: Int
}

export interface Notification extends Node {
  type: NotificationType
  id: ID_Output
  userId: ID_Output
  createdAt: DateTime
  code: NotificationCode
  text?: String
  processInstance: BpmnProcessInstance
  params: String[]
  visible: Boolean
}

/*
 * An edge in a connection.

 */
export interface AccessConditionEdge {
  node: AccessCondition
  cursor: String
}

export interface LogSubscriptionPayload {
  mutation: MutationType
  node?: Log
  updatedFields?: String[]
  previousValues?: LogPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface LogConnection {
  pageInfo: PageInfo
  edges: LogEdge[]
  aggregate: AggregateLog
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

export interface AggregateNotification {
  count: Int
}

export interface User extends Node {
  id: ID_Output
  uid: String
  name: String
  roles: String[]
  description?: String
  password: String
  notifications?: Notification[]
  processes?: BpmnProcessInstance[]
  data?: Data[]
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface AccessConditionSubscriptionPayload {
  mutation: MutationType
  node?: AccessCondition
  updatedFields?: String[]
  previousValues?: AccessConditionPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface CommentConnection {
  pageInfo: PageInfo
  edges: CommentEdge[]
  aggregate: AggregateComment
}

export interface AccessConditionPreviousValues {
  organisationId?: ID_Output
  roleId?: ID_Output
  userId?: ID_Output
}

export interface AggregateForm {
  count: Int
}

export interface Comment extends Node {
  id: ID_Output
  text: String
  user: User
  date: DateTime
  replyTo?: String
}

/*
 * An edge in a connection.

 */
export interface ValidatorEdge {
  node: Validator
  cursor: String
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
export interface RoleConnection {
  pageInfo: PageInfo
  edges: RoleEdge[]
  aggregate: AggregateRole
}

export interface DataDescriptorPreviousValues {
  id: ID_Output
  defaultValue?: String
  description?: String
  expression?: String
  isArray?: Boolean
  clone?: Boolean
  name?: String
  type?: DataType
  parentDescriptor?: ID_Output
}

export interface AggregateLocalisation {
  count: Int
}

export interface BpmnTaskSubscriptionPayload {
  mutation: MutationType
  node?: BpmnTask
  updatedFields?: String[]
  previousValues?: BpmnTaskPreviousValues
}

export interface AggregateBpmnTask {
  count: Int
}

export interface ResourceSubscriptionPayload {
  mutation: MutationType
  node?: Resource
  updatedFields?: String[]
  previousValues?: ResourcePreviousValues
}

/*
 * A connection to a list of items.

 */
export interface BpmnTaskInstanceConnection {
  pageInfo: PageInfo
  edges: BpmnTaskInstanceEdge[]
  aggregate: AggregateBpmnTaskInstance
}

export interface ResourcePreviousValues {
  id: ID_Output
  type: ResourceType
  name: String
  link?: String
}

/*
 * An edge in a connection.

 */
export interface ResourceEdge {
  node: Resource
  cursor: String
}

export interface AccessCondition {
  organisationId?: ID_Output
  roleId?: ID_Output
  userId?: ID_Output
}

export interface AggregateLog {
  count: Int
}

export interface AccessSubscriptionPayload {
  mutation: MutationType
  node?: Access
  updatedFields?: String[]
  previousValues?: AccessPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface NotificationConnection {
  pageInfo: PageInfo
  edges: NotificationEdge[]
  aggregate: AggregateNotification
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
export interface FormElementEdge {
  node: FormElement
  cursor: String
}

export interface FormElement extends Node {
  id: ID_Output
  row?: Int
  column?: Int
  width?: Int
  source?: DataDescriptor
  label?: String
  inline?: Boolean
  defaultValue?: String
  list?: String
  filterSource?: String
  filterColumn?: String
  control?: FormControl
  controlProps?: Json
  vertical?: Boolean
  parentElement?: ID_Output
}

export interface AggregateRole {
  count: Int
}

export interface DataSubscriptionPayload {
  mutation: MutationType
  node?: Data
  updatedFields?: String[]
  previousValues?: DataPreviousValues
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

export interface DataPreviousValues {
  id: ID_Output
  organisationId?: String
  version?: Int
  date?: DateTime
  value?: String
}

export interface AggregateAccess {
  count: Int
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
export interface DocumentEdge {
  node: Document
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface FormConnection {
  pageInfo: PageInfo
  edges: FormEdge[]
  aggregate: AggregateForm
}

export interface BpmnProcessSubscriptionPayload {
  mutation: MutationType
  node?: BpmnProcess
  updatedFields?: String[]
  previousValues?: BpmnProcessPreviousValues
}

export interface DataDescriptor extends Node {
  id: ID_Output
  access?: Access
  defaultValue?: String
  description?: String
  expression?: String
  isArray?: Boolean
  clone?: Boolean
  name?: String
  type?: DataType
  validators?: Validator
  parentDescriptor?: ID_Output
}

export interface BpmnTaskInstancePreviousValues {
  id: ID_Output
  dateFinished?: DateTime
  dateStarted: DateTime
  duration?: Int
  performerRoles: String[]
  data?: Json
  status: BpmnTaskInstanceStatus
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
export interface OrganisationEdge {
  node: Organisation
  cursor: String
}

export interface AggregateComment {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface DataDescriptorConnection {
  pageInfo: PageInfo
  edges: DataDescriptorEdge[]
  aggregate: AggregateDataDescriptor
}

/*
 * An edge in a connection.

 */
export interface BpmnProcessEdge {
  node: BpmnProcess
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
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
Raw JSON value
*/
export type Json = any

export type DateTime = Date | string