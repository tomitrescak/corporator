type FormControl =
  | 'Input'
  | 'Select'
  | 'Formula'
  | 'Checkbox'
  | 'Radio'
  | 'Textarea'
  | 'Repeater'
  | 'Table'
  | 'Text'
  | 'Form'
  | 'DeleteButton'
  | 'ApproveButton'
  | 'RejectButton';

interface Form {
  name: string;
  description?: string;
  elements?: FormElement[];
}

interface FormElement {
  row?: number;
  column?: number;
  width?: number;
  source?: string;
  label?: string;
  inline?: boolean;
  list?: string;
  filterSource?: string;
  filterColumn?: string;
  control?: FormControl;
  controlProps?: { [index: string]: string };
  vertical?: boolean;
  elements: FormElement[];
}
