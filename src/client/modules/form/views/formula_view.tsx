import * as React from 'react';

import { observer } from 'mobx-react';

import { Yoga } from 'data/yoga';
import { DataSet } from '../models/form_model';

type FormControlProps = {
  formControl: Yoga.FormElement;
  owner: DataSet;
};

type Props = FormControlProps;

@observer
export class FormulaView extends React.Component<Props> {
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // find value
    this.props.owner.setStringValue(this.props.formControl.source.name, e.target.value);
  };

  render() {
    const {
      formControl: { source, label },
      owner
    } = this.props;

    return (
      <>
        <If condition={label != null}>
          <label htmlFor={name}>{label}</label>
        </If>

        <div style={{ padding: '.67em 0' }}>{owner.getStringValue(source.name)}</div>
      </>
    );
  }
}
