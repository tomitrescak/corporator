import * as React from 'react';

import { observer } from 'mobx-react';

import styled from 'styled-components';
import { FormControlProps } from '../models/form_model';

const Formula = styled.div`
  padding: 9px 0px;
`;

@observer
export class FormulaView extends React.Component<FormControlProps> {
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // find value
    this.props.owner.setValue(this.props.formControl.source, e.target.value);
  };

  render() {
    const {
      formControl: { source },
      owner
    } = this.props;

    return (
      <div className="ui input">
        <Formula>{owner.getValue(source)}</Formula>
      </div>
    );
  }
}
