import * as React from 'react';

import { observer } from 'mobx-react';
import { Checkbox, CheckboxProps, Form } from 'semantic-ui-react';

import { DataSet } from '../models/form_store';
import { ErrorView } from './error_view';

type Props = {
  formControl: FormElement;
  owner: DataSet;
};

@observer
export class CheckboxView extends React.Component<Props> {
  handleToggleChange = (_e: any, control: CheckboxProps) => {
    // find value
    this.props.owner.setValue(this.props.formControl.source, control.checked);
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
        <ErrorView owner={owner} source={source} newLine={true} />
      </Form.Field>
    );
  }
}
