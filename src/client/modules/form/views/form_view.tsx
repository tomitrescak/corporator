import * as React from 'react';

import { Button, Form, SemanticWIDTHSNUMBER } from 'semantic-ui-react';

import { groupByArray } from '../../../../shared/helpers';

import { DataSet } from '../models/form_model';
import { CheckboxView } from './checkbox_view';
import { FormulaView } from './formula_view';
import { InputView } from './input_view';
import { RadioView } from './radio_view';
import { RepeaterView } from './repeater_view';
import { SelectView } from './select_view';

interface IFieldOwner {
  elements?: Corpix.Entities.FormElement[];
}

interface Props {
  data: DataSet;
  form: IFieldOwner;
  owner?: DataSet;
  ownerKey?: string;
  index?: number;
}

export class FormView extends React.Component<Props> {
  lastRow = -1;
  lastColumn = -1;
  showLabel = !this.props.owner || this.props.index === 0;

  deleteRow = () => {
    this.props.owner.removeRow(this.props.ownerKey, 1);
  };

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
      case 'radio':
        return <RadioView owner={dataSet} formControl={formElement} />;
      case 'repeater':
        return <RepeaterView owner={dataSet} formControl={formElement} />;
      case 'deleteRow':
        return <Button icon="trash" color="red" onClick={this.deleteRow} />;
    }

    throw new Error('Not implemented: ' + formElement.control);
  }

  renderColumn(control: Corpix.Entities.FormElement) {
    if (control.row !== this.lastRow) {
      this.lastRow = control.row;
      this.lastColumn = 0;
    }
    // we initialise all columns and add missing ones in between
    let columns = [];
    const formControl = control as Corpix.Entities.FormControl;

    if (formControl.control === 'deleteRow') {
      formControl.label = '\xA0';
    }

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
      <Form.Field
        key={control.column}
        width={formControl.inline ? undefined : (control.width as SemanticWIDTHSNUMBER)}
        inline={formControl.inline}
      >
        {this.showLabel &&
          formControl.label &&
          formControl.control !== 'checkbox' &&
          formControl.label !== 'radio' && (
            <label htmlFor={formControl.source}>{formControl.label}</label>
          )}
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
      <div className="ui form">
        <For each="row" of={rows}>
          <Form.Group key={row.key}>
            {row.values.map(element => this.renderColumn(element))}
          </Form.Group>
        </For>
      </div>
    );
  }
}
