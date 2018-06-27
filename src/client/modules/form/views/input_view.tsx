import * as React from 'react';

import { Form, Input, InputProps, Label } from 'semantic-ui-react';
import { observer } from 'mobx-react';

import { DataSet } from '../models/dataset_model';

type FormControlProps = {
  label: string;
  name: string;
  owner: DataSet;
  control: any; // TODO: Find the correct type
  controlProps: any;
};

type Props = InputProps & FormControlProps;

@observer
export class FormControl extends React.Component<Props> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // find value
    this.props.owner.setStringValue(this.props.name, e.target.value);
  };
  render() {
    const { name, label, owner, inline, control: Control, controlProps } = this.props;

    // remap
    // rest.label = this.props.inputLabel;

    return (
      <Form.Field inline={inline}>
        <If condition={label != null}>
          <label>{label}</label>
        </If>
        <Choose>
          <When condition={owner.isExpression(name)}>
            <div style={{ padding: '.67em 0' }}>{owner.getStringValue(name)}</div>
          </When>
          <Otherwise>
            <Control
              {...controlProps}
              value={owner.getStringValue(name)}
              onChange={this.handleChange}
            />
          </Otherwise>
        </Choose>

        {owner.getError(name) && (
          <Label pointing color="red">
            {owner.getError(name)}
          </Label>
        )}
      </Form.Field>
    );
  }
}
