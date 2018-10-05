import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Segment } from 'semantic-ui-react';

import { QueryTypes } from 'data/client';
import { FormModel } from '../../models/form_model';
import { FormView } from '../form_view';
import { create } from './form_query_data';

describe('Form', () => {
  const descriptors = [
    create.descriptor({ name: 'owner.personal.name' }),
    create.descriptor({ name: 'owner.personal.age', type: QueryTypes.DataType.Float }),
    create.descriptor({
      name: 'younger',
      type: QueryTypes.DataType.Int,
      expression: `self['owner.personal.age'] - 20`
    }),
    create.descriptor({
      name: 'older',
      type: QueryTypes.DataType.Int,
      expression: `this['owner.personal.age'] + 10`
    })
  ];

  const controlData = {
    'owner.personal.name': 'Tomas',
    'owner.personal.age': 33
  };

  const dataSet = FormModel.buildMstModel(descriptors, controlData);

  describe('Input', () => {
    function componentWithData() {
      const form = new FormModel(
        create.form({
          elements: [
            create.formElement({
              id: '1',
              row: 0,
              column: 0,
              width: 14,
              control: QueryTypes.FormControl.Input,
              controlProps: {
                label: 'Name'
              },
              label: 'Mimo',
              source: create.descriptor({
                id: '',
                name: 'owner.personal.name'
              })
            }),
            create.formElement({
              id: '2',
              row: 1,
              column: 1,
              width: 7,
              control: QueryTypes.FormControl.Input,
              source: create.descriptor({
                id: '',
                name: 'owner.personal.age'
              }),
              label: 'Age: ',
              inline: true
            }),
            create.formElement({
              id: '3',
              row: 1,
              column: 10,
              width: 2,
              control: QueryTypes.FormControl.Input,
              source: create.descriptor({
                id: '',
                name: 'younger'
              }),
              label: 'Younger:',
              inline: true
            }),
            create.formElement({
              id: '4',
              row: 0,
              column: 14,
              width: 2,
              control: QueryTypes.FormControl.Input,
              source: create.descriptor({
                id: '',
                name: 'older'
              }),
              label: 'Older'
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

  describe('Validators', () => {
    function componentWithData() {
      const validators = [
        ['emailValidator', 'good@email.cz', 'bad'],
        ['intPositiveValidator', '-1', '2'],
        ['intValidator', '2.5', '0'],
        ['intNonZeroValidator', '0', '-7'],
        ['floatValidator', 'd', '2.7'],
        ['floatPositiveValidator', '-5', '7'],
        ['floatNonZeroValidator', '0', '6.8'],
        ['requiredValidator', '', 'ok'],
        ['regExValidator', 'tomi', 'ttomi', 'tt']
      ];

      const elements = [];
      const vdescriptors = [];
      const vControlData: any = {};

      for (let i = 0; i < validators.length; i++) {
        let v = validators[i];
        let badDescriptor = v[0] + '.Error';
        let goodDescriptor = v[0] + '.OK';

        vdescriptors.push(
          create.descriptor({
            name: badDescriptor,
            validators: [{ id: '1', name: v[0], params: v[3] ? [v[3]] : [] }]
          })
        );

        vControlData[badDescriptor] = v[1];

        elements.push(
          create.formElement({
            id: i.toString(),
            row: i,
            column: 0,
            width: 16,
            control: QueryTypes.FormControl.Input,
            label: v[0] + ' Error',
            source: create.descriptor({
              name: badDescriptor
            })
          })
        );
      }

      const vDataSet = FormModel.buildMstModel(vdescriptors, vControlData);
      // vDataSet.validate();

      const form = new FormModel(
        create.form({
          elements
        })
      );

      // just another notation
      return (
        <Segment className="ui form">
          <FormView form={form} data={vDataSet} />
        </Segment>
      );
    }

    it('renders correctly with and witout error', () => {});

    return {
      component: componentWithData()
    };
  });
});
