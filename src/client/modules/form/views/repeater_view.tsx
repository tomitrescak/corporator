import * as React from 'react';

import { observer } from 'mobx-react';

import i18n from 'es2015-i18n-tag';
import { IObservableArray } from 'mobx';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

import { DataSet } from '../models/form_store';
import { ErrorView } from './error_view';
import { FormView } from './form_view';

const NoItems = styled.div`
  margin: 6px 0px 12px 0px;
`;

type RowProps = {
  formControl: FormElement;
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
      <FormView
        owner={this.props.data}
        formControl={this.props.formControl}
        handlers={this.handlers}
      />
    );
  }
}

type Props = {
  formControl: FormElement;
  owner: DataSet;
};

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
    owner.validateValue(source, owner.getValue(source));
  };

  render(): JSX.Element {
    const { formControl, owner } = this.props;
    const source = formControl.source;
    const list: IObservableArray<DataSet> = owner.getValue(source);
    return (
      <>
        <Choose>
          <When condition={list == null || list.length === 0}>
            <NoItems>{i18n`This collection contains no items ...`}</NoItems>
          </When>
          <Otherwise>
            <>
              {list.map((listItemDataSet: DataSet, i) => (
                <RepeaterRow
                  key={i + Date.now()}
                  owner={owner}
                  formControl={formControl}
                  data={listItemDataSet}
                />
              ))}
            </>
          </Otherwise>
        </Choose>
        <Button primary icon="plus" content="Add" labelPosition="left" onClick={this.addRow} />
        <ErrorView owner={owner} source={source} pointing="left" />
      </>
    );
  }
}
