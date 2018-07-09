import * as React from 'react';

import { Button } from 'semantic-ui-react';
import { DataSet } from './form_model';
import { CheckboxView } from '../views/checkbox_view';
import { FormulaView } from '../views/formula_view';
import { InputView } from '../views/input_view';
import { RadioView } from '../views/radio_view';
import { RepeaterView } from '../views/repeater_view';
import { SelectView } from '../views/select_view';

export function renderControl(
  control: Corpix.Entities.FormElement,
  dataSet: DataSet,
  handlers: { [index: string]: () => void }
) {
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
    case 'deleteButton':
      return <Button icon="trash" color="red" onClick={handlers.delete} />;
  }

  throw new Error('Not implemented: ' + formElement.control);
}
