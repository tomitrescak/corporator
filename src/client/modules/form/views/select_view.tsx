import * as React from 'react';

import { Dropdown } from 'semantic-ui-react';
import { observer } from 'mobx-react';

import { ErrorView } from './error_view';
import { DataSet } from '../models/form_model';

type Props = {
  formControl: Corpix.Entities.FormControl;
  owner: DataSet;
};

@observer
export class SelectView extends React.Component<Props> {
  handleSelectChange = (_e: React.ChangeEvent<HTMLInputElement>, control: HTMLSelectElement) => {
    // find value
    this.props.owner.setStringValue(this.props.formControl.source, control.value);
  };

  render() {
    const { formControl, owner } = this.props;
    const { label, source, controlProps, list, filterSource, filterColumn } = formControl;

    return (
      <>
        <If condition={label != null}>
          <label htmlFor={name}>{label}</label>
        </If>

        <Dropdown
          {...controlProps}
          options={
            filterSource
              ? owner
                  .getList(list)
                  .filter((v: any) => v[filterColumn] === owner.getValue(filterSource))
              : owner.getList(list)
          }
          name={source}
          selection={true}
          value={owner.getStringValue(source)}
          onChange={this.handleSelectChange}
        />

        <ErrorView owner={owner} source={source} />
      </>
    );
  }
}
