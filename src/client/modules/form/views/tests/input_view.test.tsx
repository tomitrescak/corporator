import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Segment } from 'semantic-ui-react';

import { JSONSchema } from 'data/schema/schema';
import { FormModel } from '../../models/form_model';
import { FormView } from '../form_view';
import { create } from './form_query_data';

describe('Form', () => {
  const schema: JSONSchema = {
    type: 'object',
    properties: {
      name: {
        type: 'string'
      },
      age: {
        type: 'number'
      },
      younger: {
        type: 'expression',
        default: `console.log(this); return this['age'] - 20`
      },
      older: {
        type: 'expression',
        readOnly: true,
        default: `this['age'] + 10`
      }
    }
  };

  const formDefinition: Form = create.form({
    elements: [
      create.formElement({
        row: 0,
        column: 0,
        width: 14,
        control: 'Input',
        controlProps: {
          label: 'Name'
        },
        label: 'Mimo',
        source: 'name'
      }),
      create.formElement({
        row: 1,
        column: 1,
        width: 7,
        control: 'Input',
        source: 'age',
        label: 'Age: ',
        inline: true
      }),
      create.formElement({
        row: 1,
        column: 10,
        width: 2,
        control: 'Input',
        source: 'younger',
        label: 'Younger:',
        inline: true
      }),
      create.formElement({
        row: 0,
        column: 14,
        width: 2,
        control: 'Input',
        source: 'older',
        label: 'Older'
      })
    ]
  });

  const formData = {
    name: 'Tomas',
    age: 33
  };

  describe('Input', () => {
    function componentWithData() {
      const form = new FormModel(formDefinition, schema, formData);

      // just another notation
      return (
        <Segment className="ui form">
          <FormView formControl={form} owner={form.dataSet} />
        </Segment>
      );
    }

    it('renders correctly', () => {
      const component = renderer.create(componentWithData());
      expect(component).toMatchSnapshot();
    });

    it('changes value and all related formulas', () => {
      const component = renderer.create(componentWithData());
      const root = component.root;
      const age = root.findByProps({ name: 'owner.personal.age' });
      age.props.onChange({ target: { value: '40' } });
      expect(component).toMatchSnapshot();
    });

    return { componentWithData };
  });
});
