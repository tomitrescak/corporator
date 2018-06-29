import * as React from 'react';

import { Input } from 'semantic-ui-react';
import { observer } from 'mobx-react';

import { ErrorView } from './error_view';
import { DataSet } from '../models/form_model';

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
    const { label, source, controlProps } = formControl;

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
