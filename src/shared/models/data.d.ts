declare namespace Corpix.Collections {
  interface ValidatorDao {
    type: string;
    parameters: any[];
  }

  interface DataDescriptorDao {
    id: string;
    name: string;
    description: string;
    expression: string;
    type: string;
    isArray: boolean;
    defaultValue: any;
    validators: ValidatorDao;
    access: OrganisationAccessDao;
  }

  interface DataDao {
    id: string;
    descriptor: DataDescriptorDao;
    organisationId: string;
    ownerId: string;
    version: number;
    date: Date;
    value: any;
  }
}
