import * as React from 'react';

import { Radio } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import { DataSet } from '../models/form_model';


type FormControlProps = {
  formControl: Corpix.Entities.FormControl;
  owner: DataSet;
};

type Props = FormControlProps;

const FormRadio = styled(Radio)`
  margin-right: 12px;
  margin-bottom: 6px;
`

@observer
export class RadioView extends React.Component<Props> {
  handleToggleChange = (_e: React.ChangeEvent<HTMLInputElement>, control: HTMLInputElement) => {
    // find value
    this.props.owner.parseValue(this.props.formControl.source, control.value);
  };

  render() {
    const {
      formControl: { source, controlProps, list, inline, label },
      owner
    } = this.props;
    const radioValues = owner.getList(list);

    return <>
      <If condition={label != null}>
        <label htmlFor={name}>{label}</label>
      </If>
      {radioValues.map((item) => (
        <React.Fragment key={item.value}>
          <FormRadio
            {...controlProps}
            name={source}
            label={item.text}
            value={item.value}
            checked={owner.getValue(source) == item.value}
            onChange={this.handleToggleChange}
          />
          <If condition={inline}><br /></If>
        </React.Fragment>))
      }
    </>

  }
}
