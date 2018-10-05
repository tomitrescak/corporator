import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { QueryTypes } from 'client/tests';
import { FormModel } from '../../models/form_model';
import { FormView } from '../form_view';
import { create } from './form_query_data';

import 'jest-styled-components';

import { Segment } from 'semantic-ui-react';

describe('Form', () => {
  const descriptors = [
    create.descriptor({ name: 'agree', type: QueryTypes.DataType.Boolean }),
    create.descriptor({ name: 'disagree', type: QueryTypes.DataType.Boolean }),
    create.descriptor({
      name: 'must',
      type: QueryTypes.DataType.Boolean,
      validators: [
        { id: '1', name: 'requiredValidator', params: ['You must agree to terms and conditions'] }
      ]
    })
  ];

  const controlData = { agree: true, disagree: false };
  const dataSet = FormModel.buildMstModel(descriptors, controlData);

  storyOf(
    'Checkbox',
    {
      get component() {
        const form = new FormModel(
          create.form({
            elements: [
              create.formElement({
                id: '1',
                row: 0,
                column: 0,
                width: 8,
                control: QueryTypes.FormControl.Checkbox,
                label: 'Agree With Terms and Conditions',
                source: create.descriptor({
                  id: '',
                  name: 'agree'
                })
              }),
              create.formElement({
                id: '2',
                row: 1,
                column: 0,
                width: 8,
                control: QueryTypes.FormControl.Checkbox,
                controlProps: {
                  toggle: true
                },
                label: 'Disagree With Terms and Conditions',
                source: create.descriptor({
                  id: '',
                  name: 'disagree'
                })
              }),
              create.formElement({
                id: '1',
                row: 2,
                column: 0,
                width: 8,
                control: QueryTypes.FormControl.Checkbox,
                label: 'Must Agree With Terms and Conditions',
                source: create.descriptor({
                  id: '',
                  name: 'must'
                })
              })
            ]
          })
        );

        dataSet.validate();

        // just another notation
        return (
          <Segment className="ui form">
            <FormView form={form} data={dataSet} />
          </Segment>
        );
      }
    },
    data => {
      it('renders correctly', () => {
        const component = renderer.create(data.component);
        expect(component).toMatchSnapshot();
      });

      it('renders other', () => {
        const component = renderer.create(data.component);
        expect(component).toMatchSnapshot();
      });

      it('changes value and all related formulas', () => {
        const component = renderer.create(data.component);
        const root = component.root;
        const agree = root.findByProps({ name: 'agree' });
        agree.props.onChange(null, { value: false });

        const disagree = root.findByProps({ name: 'disagree' });
        disagree.props.onChange(null, { value: true });
        expect(component).toMatchSnapshot();
      });
    }
  );
});
