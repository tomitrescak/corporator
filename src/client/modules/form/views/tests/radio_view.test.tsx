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
      religion: {
        type: 'string'
      },
      lined_religion: {
        type: 'string'
      },
      religions: {
        enum: [
          { text: 'Christian', value: 'CH' },
          { text: 'Buddhist', value: 'BU' },
          { text: 'Jedi', value: 'JE' }
        ]
      }
    }
  };

  const controlData = { religion: 'JE', lined_religion: 'BU' };

  const formDefinition: Form = create.form({
    elements: [
      create.formElement({
        row: 0,
        column: 0,
        width: 16,
        list: 'religions',
        control: 'Radio',
        label: 'Religions',
        source: 'religion',
        inline: true
      }),
      create.formElement({
        row: 1,
        column: 0,
        width: 16,
        list: 'religions',
        control: 'Radio',
        label: 'Religions',
        source: 'lined_religion',
        vertical: true
      })
    ]
  });

  storyOf(
    'Radio',
    {
      get component() {
        const form = new FormModel(formDefinition, schema, controlData);

        // just another notation
        return (
          <Segment className="ui form">
            <FormView formControl={form} owner={form.dataSet} />
          </Segment>
        );
      }
    },
    data => {
      it('renders correctly', () => {
        const component = renderer.create(data.component);
        expect(component).toMatchSnapshot();
      });

      it('changes values', () => {
        const component = renderer.create(data.component);
        const root = component.root;
        const agree = root.findAllByProps({ value: 'BU' });
        agree[1].props.onChange(null, { value: 'BU' });

        expect(component).toMatchSnapshot();
      });
    }
  );
});
