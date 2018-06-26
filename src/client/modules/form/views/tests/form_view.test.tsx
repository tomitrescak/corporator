import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Segment } from 'semantic-ui-react';

import { create } from 'shared/test_data';
import { FormView } from '../form_view';
import { FormModel } from '../../models/form_model';

import DevTools from 'mobx-react-devtools';

describe('Form', () => {
  const descriptors = [
    create.descriptorDao({ name: 'owner.personal.name' }),
    create.descriptorDao({ name: 'owner.personal.age', type: 'int' }),
    create.descriptorDao({
      name: 'younger',
      type: 'int',
      expression: `self['owner.personal.age'] - 10`
    }),
    create.descriptorDao({
      name: 'older',
      type: 'int',
      expression: `self['owner.personal.age'] + 10`
    })
  ];

  const data = [
    { name: 'owner.personal.name', value: 'Tomas' },
    {
      name: 'owner.personal.age',
      value: 33
    }
  ];

  const dataSet = FormModel.buildMST(descriptors, data);

  storyOf(
    'Viewer',
    {
      get component() {
        const form = new FormModel(
          create.formDao({
            elements: [
              {
                id: '1',
                row: 0,
                column: 0,
                width: 16,
                control: 'input',
                label: 'Mimo',
                inputLabel: 'http://',
                source: 'owner.personal.name'
              },
              {
                id: '2',
                row: 1,
                column: 0,
                width: 8,
                control: 'input',
                source: 'owner.personal.age',
                label: 'Age'
              },
              { id: '3', row: 2, column: 2, width: 6, control: 'input' },
              { id: '4', row: 2, column: 8, width: 6, control: 'input' },
              { id: '5', row: 3, column: 2, width: 6, control: 'input' }
            ]
          })
        );

        // just another notation
        return (
          <Segment className="ui form">
            <DevTools />
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
    }
  );
});
