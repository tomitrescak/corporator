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
export class InputView extends React.Component<Props> {
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // find value
    this.props.owner.setStringValue(this.props.formControl.source, e.target.value);
  };

  render() {
    const { formControl, owner } = this.props;
    const { label, source, controlProps, inline } = formControl;

    return (
      <>
        <If condition={label != null}>
          <label htmlFor={name}>{label}</label>
        </If>

        <Input
          {...controlProps}
          name={source}
          value={owner.getStringValue(source)}
          onChange={this.handleInputChange}
        />

        <ErrorView owner={owner} source={source} />
      </>
    );
  }
}
