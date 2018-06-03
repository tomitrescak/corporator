declare namespace Corpix.Collections {
  interface FormValidationDao {
    name: string;
    params: Array<string | number>;
  }

  interface FormControlDao {
    id: string;
    row: number;
    column: number;
    width: number;
  }

  interface FormDao {
    id: string;
    name: string;
    description: string;
    elements: FormControlDao[];
    validations: FormValidationDao[];
  }
}
