import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Segment } from 'semantic-ui-react';

import { create } from 'shared/test_data';
import { FormView } from '../form_view';
import { FormModel } from '../../models/form_model';

describe('Form', () => {
  const descriptors = [
    create.descriptorDao({ name: 'owner.personal.name' }),
    create.descriptorDao({ name: 'owner.personal.age', type: 'float' }),
    create.descriptorDao({
      name: 'younger',
      type: 'int',
      expression: `this['owner.personal.age'] - 10`
    }),
    create.descriptorDao({
      name: 'older',
      type: 'int',
      expression: `this['owner.personal.age'] + 10`
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
                controlProps: {
                  label: 'Name'
                },
                label: 'Mimo',
                source: 'owner.personal.name'
              },
              {
                id: '2',
                row: 1,
                column: 1,
                width: 7,
                control: 'input',
                source: 'owner.personal.age',
                label: 'Age'
              },
              {
                id: '3',
                row: 1,
                column: 10,
                width: 2,
                control: 'input',
                source: 'younger',
                label: 'Younger'
              },
              {
                id: '4',
                row: 1,
                column: 13,
                width: 2,
                control: 'input',
                source: 'older',
                label: 'Older'
              }
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
      it('is true', () => {});
      it('renders correctly', () => {
        const component = renderer.create(data.component);
        expect(component).toMatchSnapshot();
      });

      it('changes value and all related formulas', () => {
        const component = renderer.create(data.component);
        const root = component.root;
        const age = root.findByProps({ name: 'owner.personal.age' });
        age.props.onChange({ target: { value: '40' } });
        expect(component).toMatchSnapshot();
      });
    }
  );
});
