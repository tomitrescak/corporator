import * as React from 'react';

import { observer } from 'mobx-react';

import i18n from 'es2015-i18n-tag';
import { IObservableArray } from 'mobx';

import { Button, Message } from 'semantic-ui-react';
import { DataSet } from '../models/form_model';
import { FormView } from './form_view';

type Props = {
  formControl: Corpix.Entities.FormControl;
  owner: DataSet;
};

type RowProps = {
  formControl: Corpix.Entities.FormControl;
  owner: DataSet;
  data: DataSet;
};

class RepeaterRow extends React.PureComponent<RowProps> {
  handlers = {
    delete: () => {
      this.props.owner.removeRowData(this.props.formControl.source, this.props.data);
    }
  };
  render() {
    return (
      <FormView data={this.props.data} form={this.props.formControl} handlers={this.handlers} />
    );
  }
}

@observer
export class RepeaterView extends React.Component<Props> {
  handleToggleChange = (_e: React.ChangeEvent<HTMLInputElement>, control: HTMLInputElement) => {
    // find value
    this.props.owner.parseValue(this.props.formControl.source, control.checked);
  };

  addRow = () => {
    const {
      formControl: { source },
      owner
    } = this.props;
    owner.addRow(source);
  };

  render(): JSX.Element {
    const { formControl, owner } = this.props;
    const source = formControl.source;
    const list: IObservableArray<DataSet> = owner.getValue(source);
    return (
      <div>
        <Choose>
          <When condition={list == null || list.length === 0}>
            <Message>{i18n`No items`}</Message>
          </When>
          <Otherwise>
            <>
              {list.map((listItemDataSet: DataSet) => (
                <RepeaterRow
                  key={listItemDataSet.id}
                  owner={owner}
                  formControl={formControl}
                  data={listItemDataSet}
                />
              ))}
            </>
          </Otherwise>
        </Choose>
        <Button primary icon="plus" content="Add" labelPosition="left" onClick={this.addRow} />
      </div>
    );
  }
}
