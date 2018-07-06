import * as React from 'react';

import { observer } from 'mobx-react';
import { Input } from 'semantic-ui-react';

import { FormControlProps } from '../models/form_model';
import { ErrorView } from './error_view';

@observer
export class InputView extends React.Component<FormControlProps> {
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // find value
    this.props.owner.setStringValue(this.props.formControl.source, e.target.value);
  };

  render() {
    const { formControl, owner } = this.props;
    const { source, controlProps } = formControl;

    return (
      <>
        <Input
          {...controlProps}
          name={source}
          value={owner.getStringValue(source)}
          onChange={this.handleInputChange}
        />

        <ErrorView owner={owner} source={source} />
      </>
    );
  }
}
