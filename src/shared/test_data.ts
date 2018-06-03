import { ProcessStatus } from '../server/models/bpmn_process_model';

const defaultUser: Corpix.Collections.UserDao = {
  id: 'u',
  name: 'User',
  description: 'User Description'
};

const otherUser: Corpix.Collections.UserDao = {
  id: 'o',
  name: 'Other',
  description: 'Other User Description'
};

const createdDate = new Date(2018, 1, 2);
const modifiedDate = new Date(2018, 1, 10);

const defaultAccess: Corpix.Collections.AccessDao = {
  createdById: defaultUser.id,
  createdOn: createdDate,
  modifiedById: otherUser.id,
  modifiedOn: modifiedDate,
  read: null,
  write: null,
  execute: null
};

const defaultRole: Corpix.Collections.RoleDao = {
  id: 'default',
  name: 'Role',
  description: 'Role description'
};

const defaultOrganisation: Corpix.Collections.OrganisationDao = {
  id: 'default',
  name: 'Organisation',
  description: 'Organisation description'
};

const defaultAccessCondition: Corpix.Collections.AccessConditionDao = {
  organisationId: defaultOrganisation.id,
  roleId: defaultRole.id,
  userId: defaultUser.id,
  precondition: null,
  postcondition: null
};

const defaultBpmnProcess: Corpix.Collections.BpmnProcessDao = {
  id: 'bpmn',
  name: 'Bpmn',
  description: 'Default process',
  access: defaultAccess,
  definition: null,
  generatedDescription: null,
  version: 0,
  status: ProcessStatus.Published,
  roles: ['default'],
  actionCount: 0
};

const defaultForm: Corpix.Collections.FormDao = {
  id: 'form',
  name: 'Form',
  description: 'Test Form',
  elements: [],
  validations: []
};

export const create = {
  userDao(from: Partial<Corpix.Collections.UserDao> = {}): Corpix.Collections.UserDao {
    return { ...defaultUser, ...from };
  },
  accessDao(from: Partial<Corpix.Collections.AccessDao> = {}): Corpix.Collections.AccessDao {
    return { ...defaultAccess, ...from };
  },
  formDao(form: Partial<Corpix.Collections.FormDao> = {}) {
    return { ...defaultForm, ...form };
  },
  bpmnProcessDao(
    from: Partial<Corpix.Collections.BpmnProcessDao> = {},
    access: Partial<Corpix.Collections.AccessDao> = {}
  ): Corpix.Collections.BpmnProcessDao {
    const result = { ...defaultBpmnProcess, ...from };
    result.access = { ...defaultAccess, ...access };
    return result;
  }
};
