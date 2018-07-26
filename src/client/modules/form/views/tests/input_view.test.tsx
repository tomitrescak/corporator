import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Segment } from 'semantic-ui-react';

import { createData } from '../../../../../tests/test_data';
import { FormModel } from '../../models/form_model';
import { FormView } from '../form_view';

describe('Form', () => {
  const descriptors = [
    createData.descriptor({ name: 'owner.personal.name' }),
    createData.descriptor({ name: 'owner.personal.age', type: 'Float' }),
    createData.descriptor({
      name: 'younger',
      type: 'Int',
      expression: `this['owner.personal.age'] - 10`
    }),
    createData.descriptor({
      name: 'older',
      type: 'Int',
      expression: `this['owner.personal.age'] + 10`
    })
  ];

  const controlData = [
    { name: 'owner.personal.name', value: 'Tomas' },
    {
      name: 'owner.personal.age',
      value: 33
    }
  ];

  const dataSet = FormModel.buildMstModel(descriptors, controlData);

  storyOf(
    'Viewer',
    {
      get component() {
        const form = new FormModel(
          createData.formDao({
            elements: [
              {
                id: '1',
                row: 0,
                column: 0,
                width: 16,
                control: 'Input',
                controlProps: {
                  label: 'Name'
                },
                label: 'Mimo',
                source: {
                  id: '',
                  name: 'owner.personal.name'
                } 
              },
              {
                id: '2',
                row: 1,
                column: 1,
                width: 7,
                control: 'Input',
                source: {
                  id: '',
                  name: 'owner.personal.age'
                },
                label: 'Age: ',
                inline: true
              },
              {
                id: '3',
                row: 1,
                column: 10,
                width: 2,
                control: 'Input',
                source: {
                  id: '',
                  name: 'younger'
                },
                label: 'Younger'
              },
              {
                id: '4',
                row: 1,
                column: 13,
                width: 2,
                control: 'Input',
                source: {
                  id: '',
                  name: 'older'
                },
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
