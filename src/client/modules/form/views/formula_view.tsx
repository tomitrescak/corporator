import * as React from 'react';

import { Form, Input, InputProps, Label, Dropdown, Checkbox } from 'semantic-ui-react';
import { observer } from 'mobx-react';

import { DataSet } from '../models/dataset_model';
import { ErrorView } from './error_view';

type FormControlProps = {
  formControl: Corpix.Entities.FormControl;
  owner: DataSet;
};

type Props = FormControlProps;

@observer
export class FormulaView extends React.Component<Props> {
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // find value
    this.props.owner.setStringValue(this.props.formControl.source, e.target.value);
  };

  render() {
    const {
      formControl: { source, label },
      owner
    } = this.props;

    return (
      <Form.Field>
        <If condition={label != null}>
          <label htmlFor={name}>{label}</label>
        </If>

        <div style={{ padding: '.67em 0' }}>{owner.getStringValue(source)}</div>
      </Form.Field>
    );
  }
}
