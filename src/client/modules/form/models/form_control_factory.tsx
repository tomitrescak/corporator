import * as React from 'react';

import { Button } from 'semantic-ui-react';

import { CheckboxView } from '../views/checkbox_view';
import { FormView } from '../views/form_view';
import { FormulaView } from '../views/formula_view';
import { InputView } from '../views/input_view';
import { RadioView } from '../views/radio_view';
import { RepeaterView } from '../views/repeater_view';
import { SelectView } from '../views/select_view';
import { DataSet, FormElement, FormModel } from './form_model';

export function renderControl(
  control: FormElement,
  dataSet: DataSet,
  form: FormModel,
  handlers: { [index: string]: () => void }
) {
  const formElement = control as FormElement;

  if (formElement.source && dataSet.isExpression(formElement.source.name)) {
    return <FormulaView owner={dataSet} formControl={formElement} />;
  }

  switch (formElement.control) {
    case 'Input':
      return <InputView owner={dataSet} formControl={formElement} />;
    case 'Form':
      return (
        <div className="ui form">
          <FormView data={dataSet[control.source.name]} form={formElement} handlers={handlers} />
        </div>
      );
    case 'Select':
      return <SelectView owner={dataSet} formControl={formElement} />;
    case 'Checkbox':
      return <CheckboxView owner={dataSet} formControl={formElement} />;
    case 'Radio':
      return <RadioView owner={dataSet} formControl={formElement} />;
    case 'Repeater':
      return <RepeaterView owner={dataSet} formControl={formElement} />;
    case 'DeleteButton':
      return <Button icon="trash" color="red" onClick={handlers.delete} />;
    case 'Text':
      return <span className="formText">{dataSet.getStringValue(formElement.source.name)}</span>;
  }

  throw new Error('Not implemented: ' + formElement.control);
}
