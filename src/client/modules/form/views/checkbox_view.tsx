import * as React from 'react';

import { observer } from 'mobx-react';
import { Checkbox, Form } from 'semantic-ui-react';

import { DataSet } from '../models/form_model';
import { ErrorView } from './error_view';

type Props = {
  formControl: Corpix.Entities.FormControl;
  owner: DataSet;
};

@observer
export class CheckboxView extends React.Component<Props> {
  handleToggleChange = (_e: React.ChangeEvent<HTMLInputElement>, control: HTMLInputElement) => {
    // find value
    this.props.owner.parseValue(this.props.formControl.source, control.checked);
  };

  render() {
    const {
      formControl: { source, controlProps, label },
      owner
    } = this.props;

    return (
      <Form.Field>
        <Checkbox
          {...controlProps}
          name={source}
          label={label}
          checked={owner.getValue(source)}
          onChange={this.handleToggleChange}
        />
        <ErrorView owner={owner} source={source} />
      </Form.Field>
    );
  }
}
