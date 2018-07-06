import * as React from 'react';

import { observer } from 'mobx-react';

import i18n from 'es2015-i18n-tag';
import { Button } from 'semantic-ui-react';
import { DataSet } from '../models/form_model';
import { FormView } from './form_view';

type Props = {
  formControl: Corpix.Entities.FormControl;
  owner: DataSet;
};

@observer
export class RepeaterView extends React.Component<Props> {
  handleToggleChange = (
    _e: React.ChangeEvent<HTMLInputElement>,
    control: HTMLInputElement
  ) => {
    // find value
    this.props.owner.parseValue(this.props.formControl.source, control.checked);
  };

  addRow = () => {
    const { formControl: { source }, owner } = this.props;
    owner.addRow(source);
  }

  render() {
    const { formControl, owner } = this.props;
    const source = formControl.source;
    const list = owner.getValue(source);
    if (list == null || list.length === 0) {
      return <div>{i18n`No items`}</div>;
    }
    return (
      <div>
        {list.map((l: DataSet, i: number) => (
          <FormView key={i} data={l} form={formControl} owner={owner} ownerKey={source} index={i} />
        ))}
        <Button primary icon="plus" content="Add" labelPosition="left" onClick={this.addRow} />
      </div>
    );
  }
}
