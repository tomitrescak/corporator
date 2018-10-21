import * as React from 'react';

import { observer } from 'mobx-react';
import { Form, Input, InputProps, LabelProps } from 'semantic-ui-react';

import { FormControlProps } from '../models/form_model';
import { DataSet } from '../models/form_store';
import { ErrorLabel, ErrorView } from './error_view';

@observer
export class InputView extends React.Component<FormControlProps> {
  static displayName = 'InputView';

  handleInputChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    // find value
    this.props.owner.setValue(this.props.formControl.source, e.currentTarget.value);
  };

  render() {
    const { formControl, owner } = this.props;
    const { source, controlProps } = formControl;

    const label: LabelProps = owner.isRequired(source)
      ? { label: { icon: 'asterisk' }, labelPosition: 'right corner' }
      : {};

    return (
      <React.Fragment>
        <Input
          {...controlProps}
          name={source}
          {...label}
          disabled={owner.getSchema(source).readOnly}
          error={!!owner.getError(source)}
          value={owner.getValue(source)}
          onChange={this.handleInputChange}
        />

        <ErrorView owner={owner} source={source} />
      </React.Fragment>
    );
  }
}

interface InputBoundProps {
  name: string;
  owner: DataSet;
  label: string;
}

@observer
export class FormInput extends React.Component<InputBoundProps & InputProps> {
  handleInputChange: React.ReactEventHandler<HTMLInputElement> = e => {
    // find value
    this.props.owner.setValue(this.props.name, e.currentTarget.value);
  };

  render() {
    const { owner, name, label, ...rest } = this.props;

    return (
      <Form.Field>
        <label>{label}</label>
        <Input
          {...rest}
          name={name}
          error={!!owner.getError(name)}
          value={owner.getValue(name)}
          onChange={this.handleInputChange}
        />

        <ErrorLabel error={owner.getError(name)} />
      </Form.Field>
    );
  }
}
