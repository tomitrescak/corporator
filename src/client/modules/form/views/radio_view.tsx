import * as React from 'react';

import { observer } from 'mobx-react';
import { Radio } from 'semantic-ui-react';
import styled from 'styled-components';

import { FormControlProps } from '../models/form_model';

const FormRadio = styled(Radio)`
  margin-right: 12px;
  margin-bottom: 6px;
`;

@observer
export class RadioView extends React.Component<FormControlProps> {
  handleToggleChange = (_e: React.ChangeEvent<HTMLInputElement>, control: HTMLInputElement) => {
    // find value
    this.props.owner.setValue(this.props.formControl.source, control.value);
  };

  render() {
    const {
      formControl: { source, controlProps, list, vertical },
      owner
    } = this.props;
    const radioValues = owner.getSchema(list).enum;

    return (
      <>
        {radioValues.map(item => (
          <React.Fragment key={item.value}>
            <FormRadio
              {...controlProps}
              name={source}
              label={item.text}
              value={item.value}
              checked={owner.getValue(source) === item.value}
              onChange={this.handleToggleChange}
            />
            <If condition={vertical}>
              <br />
            </If>
          </React.Fragment>
        ))}
      </>
    );
  }
}
