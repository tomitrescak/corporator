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
export class SelectView extends React.Component<Props> {
  handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>, control: HTMLSelectElement) => {
    // find value
    this.props.owner.setStringValue(this.props.formControl.source, control.value);
  };

  render() {
    const { formControl, owner } = this.props;
    const { label, source, controlProps, inline, list, filterSource, filterColumn } = formControl;

    return (
      <Form.Field inline={inline}>
        <If condition={label != null}>
          <label htmlFor={name}>{label}</label>
        </If>

        <Dropdown
          {...controlProps}
          options={
            filterSource
              ? owner
                  .getValue(list)
                  .filter((v: any) => v[filterColumn] === owner.getValue(filterSource))
              : owner.getValue(list)
          }
          name={source}
          selection={true}
          value={owner.getStringValue(source)}
          onChange={this.handleSelectChange}
        />

        <ErrorView owner={owner} source={source} />
      </Form.Field>
    );
  }
}
