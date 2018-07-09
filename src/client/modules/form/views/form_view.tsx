import * as React from 'react';

import { Form, SemanticWIDTHSNUMBER } from 'semantic-ui-react';

import { groupByArray } from 'shared/helpers';

import { renderControl } from '../models/form_control_factory';
import { DataSet } from '../models/form_model';

interface IFieldOwner {
  elements?: Corpix.Entities.FormElement[];
}

interface Props {
  data: DataSet;
  form: IFieldOwner;
  handlers?: { [index: string]: () => void };
}

export class FormView extends React.Component<Props> {
  lastRow = -1;
  lastColumn = -1;

  renderColumn(control: Corpix.Entities.FormElement) {
    if (control.row !== this.lastRow) {
      this.lastRow = control.row;
      this.lastColumn = 0;
    }
    // we initialise all columns and add missing ones in between
    let columns = [];
    const formControl = control as Corpix.Entities.FormControl;

    if (formControl.control === 'deleteButton') {
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
        {formControl.label &&
          formControl.control !== 'checkbox' &&
          formControl.label !== 'radio' && (
            <label htmlFor={formControl.source}>{formControl.label}</label>
          )}
        {renderControl(control, this.props.data, this.props.handlers)}
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
