import * as React from 'react';

import { observer } from 'mobx-react';
import { Form, Input, InputProps } from 'semantic-ui-react';

import { action, observable } from 'mobx';
import { FormControlProps } from '../models/form_model';
import { IFormStore } from '../models/form_store';
import { ErrorLabel, ErrorView } from './error_view';

@observer
export class InputView extends React.Component<FormControlProps> {
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // find value
    this.props.owner.setStringValue(this.props.formControl.source.name, e.target.value);
  };

  render() {
    const { formControl, owner } = this.props;
    const { source, controlProps } = formControl;

    return (
      <>
        <Input
          {...controlProps}
          name={source.name}
          value={owner.getStringValue(source.name)}
          onChange={this.handleInputChange}
        />

        <ErrorView owner={owner} source={source.name} />
      </>
    );
  }
}

type IValidator = (input: string) => string;

interface InputBoundProps {
  name: string;
  owner: IFormStore;
  label: string;
  validators?: IValidator[];
}

@observer
export class FormInput extends React.Component<InputBoundProps & InputProps> {
  @action
  validate(value: string) {
    this.props.owner.setError(this.props.name, '');

    if (this.props.validators) {
      for (let v of this.props.validators) {
        let result = v(value);
        if (result) {
          this.props.owner.setError(this.props.name, result);
          return;
        }
      }
    }
  }

  handleInputChange: React.ReactEventHandler<HTMLInputElement> = e => {
    // find value
    this.props.owner.setItem(this.props.name, e.currentTarget.value);
    this.validate(e.currentTarget.value);
  };

  render() {
    const { owner, name, label, validators, ...rest } = this.props;

    return (
      <Form.Field>
        <label>{label}</label>
        <Input
          {...rest}
          name={name}
          error={!!owner.getError(name)}
          value={owner.getItem(name)}
          onChange={this.handleInputChange}
        />

        <ErrorLabel error={owner.getError(name)} />
      </Form.Field>
    );
  }
}
