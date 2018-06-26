import * as React from 'react';

import { Grid, SemanticWIDTHSNUMBER, Input } from 'semantic-ui-react';

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

    switch (control.control) {
      case 'input':
        formControl = Input;
        break;
      default:
        throw new Error('Not implemented: ' + control.control);
    }

    return (
      <FormControl
        control={formControl}
        owner={dataSet}
        name={formElement.source}
        label={formElement.label}
        inputLabel={formElement.inputLabel}
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
        <Grid.Column
          key={this.lastColumn}
          width={(control.column - this.lastColumn) as SemanticWIDTHSNUMBER}
        />
      );
    }

    columns.push(
      <Grid.Column key={control.column} width={control.width as SemanticWIDTHSNUMBER}>
        {this.renderControl(control, this.props.data)}
      </Grid.Column>
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
      <Grid>
        <For each="row" of={rows}>
          <Grid.Row key={row.key}>{row.values.map(element => this.renderColumn(element))}</Grid.Row>
        </For>
      </Grid>
    );
  }
}
