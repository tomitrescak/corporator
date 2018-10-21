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
      countries: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {
              type: 'id'
            },
            name: {
              type: 'string'
            },
            capital: {
              type: 'string'
            }
          }
        }
      }
    }
  };

  const controlData = {
    countries: [
      { name: 'Slovakia', capital: 'Bratislava' },
      { name: 'Australia', capital: 'Canberra' }
    ]
  };

  const formDefinition: Form = create.form({
    elements: [
      create.formElement({
        row: 0,
        column: 0,
        width: 16,
        control: 'Repeater',
        source: 'countries'
      }),
      create.formElement({
        row: 0,
        column: 0,
        width: 8,
        control: 'Input',
        label: 'Name',
        source: 'name'
      }),
      create.formElement({
        row: 0,
        column: 8,
        width: 8,
        control: 'Input',
        label: 'Capital',
        source: 'capital'
      }),
      create.formElement({
        row: 0,
        column: 15,
        width: 1,
        control: 'DeleteButton',
        label: '\xa0'
      })
    ]
  });

  storyOf(
    'Repeater',
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

      it('changes value and all related formulas', () => {
        // const component = renderer.create(data.component);
        // const root = component.root;
        // const agree = root.findByProps({ name: 'agree' });
        // agree.props.onChange(null, { value: false });
        // const disagree = root.findByProps({ name: 'disagree' });
        // disagree.props.onChange(null, { value: true });
        // expect(component).toMatchSnapshot();
      });
    }
  );
});
