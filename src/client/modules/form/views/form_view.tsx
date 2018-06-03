import * as React from 'react';
import { FormModel } from '../models/form_model';
import { Grid } from 'semantic-ui-react';
import { DataSet } from 'client/modules/form/models/dataset_model';

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

    let m = new DataSet();

    return (
      <Grid>
        eeee
        {/* <For each="row" of={this.props.form.rows} index="rowIndex">
          <Grid.Row key={rowIndex}>
            <For each="column" of={row.columns} index="columnIndex">
              <Grid.Column key={columnIndex} width={column.width}>
                {column.renderControl(this.props.data)}
              </Grid.Column>
            </For>
          </Grid.Row>
        </For> */}
      </Grid>
    );
  }
}
