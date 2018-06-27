import * as React from 'react';

import { Form, SemanticWIDTHSNUMBER, Input } from 'semantic-ui-react';

import { groupByArray } from 'shared/helpers';

import { DataSet } from '../models/dataset_model';
import { FormModel } from '../models/form_model';
import { FormControl } from './input_view';

interface Props {
  data: DataSet;
  form: FormModel;
}

export class FormView extends React.Component<Props> {
  lastRow = -1;
  lastColumn = -1;

  renderControl(control: Corpix.Entities.FormElement, dataSet: DataSet) {
    const formElement = control as Corpix.Entities.FormControl;
    let formControl;

    switch (formElement.control) {
      case 'input':
        formControl = Input;
        break;
      default:
        throw new Error('Not implemented: ' + formElement.control);
    }

    return (
      <FormControl
        control={formControl}
        controlProps={formElement.controlProps}
        owner={dataSet}
        source={formElement.source}
        label={formElement.label}
      />
    );
  }

  renderColumn(control: Corpix.Entities.FormElement) {
    if (control.row != this.lastRow) {
      this.lastRow = control.row;
      this.lastColumn = 0;
    }
    // we initialise all columns and add missing ones in between
    let columns = [];

    // insert missing start column
    if (control.column > this.lastColumn) {
      columns.push(
        <Form.Field
          key={this.lastColumn}
          width={(control.column - this.lastColumn) as SemanticWIDTHSNUMBER}
        >
          &nbsp;
        </Form.Field>
      );
    }

    columns.push(
      <Form.Field key={control.column} width={control.width as SemanticWIDTHSNUMBER}>
        {this.renderControl(control, this.props.data)}
      </Form.Field>
    );

    this.lastColumn = control.column + control.width;
    return columns;
  }

  render() {
    this.lastColumn = 0;
    this.lastRow = 0;

    let row: { key: number; values: Corpix.Entities.FormElement[] };
    const rows = groupByArray(this.props.form.elements, 'row');

    return (
      <Form>
        <For each="row" of={rows}>
          <Form.Group key={row.key}>
            {row.values.map(element => this.renderColumn(element))}
          </Form.Group>
        </For>
      </Form>
    );
  }
}
