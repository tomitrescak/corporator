import * as React from 'react';

import { Form, Input, InputProps } from 'semantic-ui-react';
import { observer } from 'mobx-react';

import { DataSet } from '../models/dataset_model';

type FormControlProps = {
  label: string;
  name: string;
  owner: DataSet;
  control: any; // TODO: Find the correct type
};

type Props = InputProps & FormControlProps;

@observer
export class FormControl extends React.Component<Props> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // find value
    this.props.owner.setValue(this.props.name, e.target.value);
  };
  render() {
    const { label, owner, inline, control: Control, name, inputLabel, ...rest } = this.props;

    console.log(label);
    console.log(inputLabel);
    // remap
    // rest.label = this.props.inputLabel;

    return (
      <Form.Field inline={inline}>
        <If condition={label != null}>
          <label>{label}</label>
        </If>
        <Control
          {...rest}
          value={owner.getValue(name)}
          onChange={this.handleChange}
          label={inputLabel}
        />
      </Form.Field>
    );
  }
}
