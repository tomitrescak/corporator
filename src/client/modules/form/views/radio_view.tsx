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
    this.props.owner.parseValue(this.props.formControl.source.name, control.value);
  };

  render() {
    const {
      formControl: { source, controlProps, list, vertical },
      owner
    } = this.props;
    const radioValues = owner.getList(list);

    return (
      <>
        {radioValues.map(item => (
          <React.Fragment key={item.value}>
            <FormRadio
              {...controlProps}
              name={source.name}
              label={item.text}
              value={item.value}
              checked={owner.getValue(source.name) === item.value}
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
