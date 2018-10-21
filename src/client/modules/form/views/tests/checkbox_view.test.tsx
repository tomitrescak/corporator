import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { FormModel } from '../../models/form_model';
import { FormView } from '../form_view';
import { create } from './form_query_data';

import 'jest-styled-components';

import { JSONSchema } from 'data/schema/schema';
import { Segment } from 'semantic-ui-react';

describe('Form', () => {
  describe('Checkbox', () => {
    function componentWithData() {
      const schema: JSONSchema = {
        type: 'object',
        properties: {
          agree: {
            type: 'boolean'
          },
          disagree: {
            type: 'boolean'
          },
          must: {
            type: 'boolean',
            validationMessage: 'You must agree to terms and conditions'
          }
        },
        required: ['must']
      };

      const data = { agree: true, disagree: false };

      const form = new FormModel(
        create.form({
          elements: [
            create.formElement({
              row: 0,
              column: 0,
              width: 8,
              control: 'Checkbox',
              label: 'Agree With Terms and Conditions',
              source: 'agree'
            }),
            create.formElement({
              row: 1,
              column: 0,
              width: 8,
              control: 'Checkbox',
              controlProps: {
                toggle: true
              },
              label: 'Disagree With Terms and Conditions',
              source: 'disagree'
            }),
            create.formElement({
              row: 2,
              column: 0,
              width: 8,
              control: 'Checkbox',
              label: 'Must Agree With Terms and Conditions',
              source: 'must'
            })
          ]
        }),
        schema,
        data
      );

      form.validateWithReport();

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

    it('renders other', () => {
      const component = renderer.create(componentWithData());
      expect(component).toMatchSnapshot();
    });

    it('changes value and all related formulas', () => {
      const component = renderer.create(componentWithData());
      const root = component.root;
      const agree = root.findByProps({ name: 'agree' });
      agree.props.onChange(null, { value: false });

      const disagree = root.findByProps({ name: 'disagree' });
      disagree.props.onChange(null, { value: true });
      expect(component).toMatchSnapshot();
    });

    return { componentWithData };
  });
});
