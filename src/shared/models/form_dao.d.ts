declare namespace Corpix.Collections {
  interface FormValidationDao {
    name: string;
    params: Array<string | number>;
  }

  type FormControlType = 'input';

  interface FormElementDao {
    id: string;
    row: number;
    column: number;
    width: number;
  }

  interface FormControlDao extends FormElementDao {
    source: string;
    label: string;
    inline: boolean;
    defaultValue: any;
    control: FormControlType;
    controlProps: InputProps | DropdownProps;
  }

  interface FormDao {
    id: string;
    name: string;
    description: string;
    elements: Array<FormElementDao | FormControlDao>;
    validations: FormValidationDao[];
  }
}

declare namespace Corpix.Entities {
  interface FormElement extends Corpix.Collections.FormElementDao {}
  interface FormControl extends Corpix.Collections.FormControlDao {}
}
