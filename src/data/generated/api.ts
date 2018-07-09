import { Binding as BaseBinding, BindingOptions } from 'graphql-binding'
import { GraphQLResolveInfo } from 'graphql'

export type NotificationCode = 
  'ServiceStarted'

export type LanguageCode = 
  'EN'

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

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
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

export interface Localisation extends Node {
  id: ID_Output
  text: String
  language: LanguageCode
}

export interface BpmnProcessInstance extends Node {
  id: ID_Output
}

export interface User extends Node {
  id: ID_Output
  name: String
  roles?: String[]
  describe: String
}

export type DateTime = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

export interface Schema {
  query: Query
  mutation: Mutation
}

export type Query = {
  authenticate: (args: { username?: String, password?: String }, context: { [key: string]: any }, info?: GraphQLResolveInfo | string) => Promise<String>
  user: (args: { id: ID_Output }, context: { [key: string]: any }, info?: GraphQLResolveInfo | string) => Promise<User | null>
}

export type Mutation = {
  signup: (args: { name: String }, context: { [key: string]: any }, info?: GraphQLResolveInfo | string) => Promise<User>
}

export class Binding extends BaseBinding {
  
  constructor({ schema, fragmentReplacements }: BindingOptions) {
    super({ schema, fragmentReplacements });
  }
  
  query: Query = {
    authenticate: (args, context, info): Promise<String> => super.delegate('query', 'authenticate', args, context, info),
    user: (args, context, info): Promise<User | null> => super.delegate('query', 'user', args, context, info)
  }

  mutation: Mutation = {
    signup: (args, context, info): Promise<User> => super.delegate('mutation', 'signup', args, context, info)
  }
}