import * as React from 'react';

import { Form, Input, InputProps, Label } from 'semantic-ui-react';
import { observer } from 'mobx-react';

import { DataSet } from '../models/dataset_model';

type FormControlProps = {
  label: string;
  source: string;
  owner: DataSet;
  control: any; // TODO: Find the correct type
  controlProps: any;
};

type Props = InputProps & FormControlProps;

@observer
export class FormControl extends React.Component<Props> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // find value
    this.props.owner.setStringValue(this.props.source, e.target.value);
  };
  render() {
    const { source, label, owner, inline, control: Control, controlProps } = this.props;

    // remap
    // rest.label = this.props.inputLabel;

    return (
      <Form.Field inline={inline}>
        <If condition={label != null}>
          <label htmlFor={name}>{label}</label>
        </If>
        <Choose>
          <When condition={owner.isExpression(source)}>
            <div style={{ padding: '.67em 0' }}>{owner.getStringValue(source)}</div>
          </When>
          <Otherwise>
            <Control
              {...controlProps}
              name={source}
              value={owner.getStringValue(source)}
              onChange={this.handleChange}
            />
          </Otherwise>
        </Choose>

        {owner.getError(source) && (
          <Label pointing color="red">
            {owner.getError(source)}
          </Label>
        )}
      </Form.Field>
    );
  }
}
