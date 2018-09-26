import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Segment } from 'semantic-ui-react';

import { QueryTypes } from 'data/client';
import { FormModel } from '../../models/form_model';
import { FormView } from '../form_view';
import { create } from './form_query_data';

describe('Form', () => {
  const descriptors = [
    create.descriptor({
      id: '1',
      name: 'countries',
      type: QueryTypes.DataType.Object,
      isArray: true
    }),
    create.descriptor({ name: 'id', type: QueryTypes.DataType.Id, parentDescriptor: '1' }),
    create.descriptor({ name: 'name', type: QueryTypes.DataType.String, parentDescriptor: '1' }),
    create.descriptor({ name: 'capital', type: QueryTypes.DataType.String, parentDescriptor: '1' })
  ];

  const dataSetData = [
    {
      name: 'countries',
      value: [
        [{ name: 'name', value: 'Slovakia' }, { name: 'capital', value: 'Bratislava' }],
        [{ name: 'name', value: 'Australia' }, { name: 'capital', value: 'Canberra' }]
      ]
    }
  ];
  const dataSet = FormModel.buildMstModel(descriptors, dataSetData);

  storyOf(
    'Repeater',
    {
      get component() {
        const form = new FormModel(
          create.form({
            elements: [
              create.formElement({
                id: '1',
                row: 0,
                column: 0,
                width: 16,
                control: QueryTypes.FormControl.Repeater,
                source: create.descriptor({
                  id: '',
                  name: 'countries'
                })
              }),
              create.formElement({
                id: '2',
                parentElement: '1',
                row: 0,
                column: 0,
                width: 8,
                control: QueryTypes.FormControl.Input,
                label: 'Name',
                source: create.descriptor({
                  id: '',
                  name: 'name'
                })
              }),
              create.formElement({
                id: '3',
                parentElement: '1',
                row: 0,
                column: 8,
                width: 8,
                control: QueryTypes.FormControl.Input,
                label: 'Capital',
                source: create.descriptor({
                  id: '',
                  name: 'capital'
                })
              }),
              create.formElement({
                id: '4',
                parentElement: '1',
                row: 0,
                column: 15,
                width: 1,
                control: QueryTypes.FormControl.DeleteButton,
                label: '\xa0'
              })
            ]
          })
        );

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
