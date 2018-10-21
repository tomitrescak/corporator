import * as React from 'react';

import { observer } from 'mobx-react';
import { Dropdown, DropdownProps } from 'semantic-ui-react';

import { DataSet } from '../models/form_store';
import { ErrorView } from './error_view';

type Props = {
  formControl: FormElement;
  owner: DataSet;
};

@observer
export class SelectView extends React.Component<Props> {
  handleSelectChange = (_e: any, control: DropdownProps) => {
    // React.ChangeEvent<HTMLInputElement>
    // find value
    this.props.owner.setValue(this.props.formControl.source, control.value.toString());
  };

  render() {
    const { formControl, owner } = this.props;
    const { source, controlProps, list, filterSource, filterColumn } = formControl;

    return (
      <>
        <Dropdown
          {...controlProps}
          options={
            filterSource
              ? owner
                  .getSchema(list)
                  .enum.filter((v: any) => v[filterColumn] === owner.getValue(filterSource))
              : owner.getSchema(list).enum
          }
          name={source}
          selection={true}
          value={owner.getValue(source)}
          onChange={this.handleSelectChange}
        />

        <ErrorView owner={owner} source={source} />
      </>
    );
  }
}
