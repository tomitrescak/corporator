import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Segment } from 'semantic-ui-react';

import { create } from 'shared/test_data';
import { FormView } from '../form_view';
import { FormModel } from '../../models/form_model';

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
    { name: descriptors[0].name, value: 'Tomas' },
    {
      name: descriptors[1].name,
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
              { id: '1', row: 0, column: 0, width: 6 },
              { id: '2', row: 0, column: 8, width: 6 },
              { id: '3', row: 2, column: 2, width: 6 },
              { id: '4', row: 2, column: 8, width: 6 },
              { id: '5', row: 3, column: 2, width: 6 }
            ]
          })
        );

        // just another notation
        return (
          <Segment>
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
