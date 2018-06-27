import * as React from 'react';

import { Form, Input, InputProps, Label, Dropdown } from 'semantic-ui-react';
import { observer } from 'mobx-react';

import { DataSet } from '../models/dataset_model';

type FormControlProps = {
  formControl: Corpix.Entities.FormControl;
  owner: DataSet;
};

type Props = FormControlProps;

@observer
export class FormControl extends React.Component<Props> {
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // find value
    this.props.owner.setStringValue(this.props.formControl.source, e.target.value);
  };

  handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>, control: HTMLSelectElement) => {
    // find value
    this.props.owner.setStringValue(this.props.formControl.source, control.value);
  };

  render() {
    const { formControl, owner } = this.props;
    const {
      label,
      source,
      control,
      controlProps,
      inline,
      list,
      filterSource,
      filterColumn
    } = formControl;

    return (
      <Form.Field inline={inline}>
        <If condition={label != null}>
          <label htmlFor={name}>{label}</label>
        </If>
        <Choose>
          <When condition={owner.isExpression(source)}>
            <div style={{ padding: '.67em 0' }}>{owner.getStringValue(source)}</div>
          </When>
          <When condition={control == 'input'}>
            <Input
              {...controlProps}
              name={source}
              value={owner.getStringValue(source)}
              onChange={this.handleInputChange}
            />
          </When>
          <When condition={control == 'select'}>
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
          </When>
          <Otherwise>
            <div>NOT IMPLEMENTED: {control}</div>
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
