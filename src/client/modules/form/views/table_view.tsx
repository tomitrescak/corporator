import * as React from 'react';

import { observer } from 'mobx-react';

import { IObservableArray } from 'mobx';
import { Button, Form } from 'semantic-ui-react';
import styled from 'styled-components';

import { renderControl } from '../models/form_control_factory';
import { DataSet, FormElement } from '../models/form_model';
import { ErrorView } from './error_view';

const FormHeader = styled(Form.Group)`
  margin-bottom: 0px !important;
`;

type RowProps = {
  formControl: FormElement;
  owner: DataSet;
  data: DataSet;
};

class TableRow extends React.PureComponent<RowProps> {
  handlers = {
    delete: () => {
      this.props.owner.removeRowData(this.props.formControl.source.name, this.props.data);
    }
  };
  render() {
    return (
      <Form.Group>
        {this.props.formControl.elements.map(e => (
          <Form.Field width={this.props.formControl.width as any} key={e.id}>
            {renderControl(e, this.props.owner, null)}
          </Form.Field>
        ))}
        <Form.Field width={1}>
          <Button color="red" icon="trash" />
        </Form.Field>
      </Form.Group>
    );
  }
}

type Props = {
  formControl: FormElement;
  owner: DataSet;
};

@observer
export class TableView extends React.Component<Props> {
  addRow = () => {
    const {
      formControl: { source },
      owner
    } = this.props;
    owner.addRow(source.name);
    owner.validateField(source.name, owner.getValue(source.name));
  };

  render() {
    const owner = this.props.owner;
    const formControl = this.props.formControl as FormElement;
    const source = formControl.source;
    const list: IObservableArray<DataSet> = owner.getValue(source.name);

    return (
      <div className="ui form">
        <FormHeader>
          {formControl.elements.map((e, i) => (
            <Form.Field key={i} label={e.label} width={e.width as any} />
          ))}
        </FormHeader>
        {list.map((row, i) => (
          <TableRow key={i} formControl={formControl} owner={row} data={owner} />
        ))}
        <Button primary icon="plus" content="Add" labelPosition="left" onClick={this.addRow} />
        <ErrorView
          owner={this.props.owner}
          source={this.props.formControl.source.name}
          pointing="left"
        />
      </div>
    );
  }
}
