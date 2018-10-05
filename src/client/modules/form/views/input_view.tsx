import * as React from 'react';

import { observer } from 'mobx-react';
import { Form, Input, InputProps } from 'semantic-ui-react';

import { FormControlProps } from '../models/form_model';
import { IFormStore } from '../models/form_store';
import { ErrorLabel, ErrorView } from './error_view';

@observer
export class InputView extends React.Component<FormControlProps> {
  static displayName = 'InputView';

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // find value
    this.props.owner.setStringValue(this.props.formControl.source.name, e.target.value);
  };

  render() {
    const { formControl, owner } = this.props;
    const { source, controlProps } = formControl;

    return (
      <React.Fragment>
        <Input
          {...controlProps}
          name={source.name}
          error={!!owner.getError(source.name)}
          value={owner.getStringValue(source.name)}
          onChange={this.handleInputChange}
        />

        <ErrorView owner={owner} source={source.name} />
      </React.Fragment>
    );
  }
}

interface InputBoundProps {
  name: string;
  owner: IFormStore;
  label: string;
}

@observer
export class FormInput extends React.Component<InputBoundProps & InputProps> {
  handleInputChange: React.ReactEventHandler<HTMLInputElement> = e => {
    // find value
    this.props.owner.setItem(this.props.name, e.currentTarget.value);
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
