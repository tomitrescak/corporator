import * as React from 'react';

import { Grid } from 'semantic-ui-react';

import { groupByArray } from 'shared/helpers';

import { DataSet } from '../models/dataset_model';
import { FormModel, FormControl } from '../models/form_model';

interface Props {
  data: DataSet;
  form: FormModel;
}

export class FormView extends React.Component<Props> {
  lastRow = -1;
  lastColumn = -1;

  renderColumn(control: FormControl) {
    if (control.row != this.lastRow) {
      this.lastRow = control.row;
      this.lastColumn = 0;
    }
    let columns = [];

    // insert missing start column
    if (control.column > this.lastColumn) {
      columns.push(<Grid.Column key={this.lastColumn} width={control.column - this.lastColumn} />);
    }

    columns.push(
      <Grid.Column key={control.column} width={control.width}>
        {control.row + ' ' + control.column + ' ' + control.width}
      </Grid.Column>
    );

    this.lastColumn = control.column + control.width;
    return columns;
  }

  render() {
    this.lastColumn = 0;
    this.lastRow = 0;

    let row: { key: number; values: FormControl[] };
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
