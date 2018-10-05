import * as React from 'react';

import { observer } from 'mobx-react';

import styled from 'styled-components';
import { DataSet, FormElement } from '../models/form_model';

type FormControlProps = {
  formControl: FormElement;
  owner: DataSet;
};

type Props = FormControlProps;

const Formula = styled.div`
  padding: 9px 0px;
`;

@observer
export class FormulaView extends React.Component<Props> {
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // find value
    this.props.owner.setStringValue(this.props.formControl.source.name, e.target.value);
  };

  render() {
    const {
      formControl: { source },
      owner
    } = this.props;

    return (
      <div className="ui input">
        <Formula>{owner.getValue(source.name)}</Formula>
      </div>
    );
  }
}
