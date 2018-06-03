import * as React from 'react';
import { DataSet } from '../models/dataset_model';
import { FormModel } from '../models/form_model';
import { Grid } from 'semantic-ui-react';

interface Props {
  data: DataSet;
  form: FormModel;
}

export class FormView extends React.Component<Props> {
  render() {
    let row: FormRowModel;
    let column: FormColumnModel;
    let rowIndex: number;
    let columnIndex: number;

    return (
      <Grid>
        <For each="row" of={this.props.form.rows} index="rowIndex">
          <Grid.Row key={rowIndex}>
            <For each="column" of={row.columns} index="columnIndex">
              <Grid.Column key={columnIndex} width={column.width}>
                {column.renderControl(this.props.data)}
              </Grid.Column>
            </For>
          </Grid.Row>
        </For>
      </Grid>
    );
  }
}
