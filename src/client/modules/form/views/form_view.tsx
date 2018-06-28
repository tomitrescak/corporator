import * as React from 'react';

import { Form, SemanticWIDTHSNUMBER, Input, Select } from 'semantic-ui-react';

import { groupByArray } from 'shared/helpers';

import { DataSet } from '../models/dataset_model';
import { FormModel } from '../models/form_model';
import { InputView } from './input_view';
import { SelectView } from './select_view';
import { CheckboxView } from './checkbox_view';
import { FormulaView } from './formula_view';

interface Props {
  data: DataSet;
  form: FormModel;
}

export class FormView extends React.Component<Props> {
  lastRow = -1;
  lastColumn = -1;

  renderControl(control: Corpix.Entities.FormElement, dataSet: DataSet) {
    const formElement = control as Corpix.Entities.FormControl;

    if (dataSet.isExpression(formElement.source)) {
      return <FormulaView owner={dataSet} formControl={formElement} />;
    }

    switch (formElement.control) {
      case 'input':
        return <InputView owner={dataSet} formControl={formElement} />;
      case 'select':
        return <SelectView owner={dataSet} formControl={formElement} />;
      case 'checkbox':
        return <CheckboxView owner={dataSet} formControl={formElement} />;
    }

    throw new Error('Not implemented: ' + formElement.control);
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
