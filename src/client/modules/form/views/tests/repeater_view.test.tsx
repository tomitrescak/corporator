import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Segment } from 'semantic-ui-react';

import { create } from 'shared/test_data';
import { FormModel } from '../../models/form_model';
import { FormView } from '../form_view';

describe('Form', () => {
  const descriptors = [
    create.descriptor({
      name: 'countries',
      type: 'object',
      isArray: true,
      descriptors: [
        create.descriptor({ name: 'id', type: 'id' }),
        create.descriptor({ name: 'name', type: 'string' }),
        create.descriptor({ name: 'capital', type: 'string' })
      ]
    })
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
          create.formDao({
            elements: [
              {
                id: '1',
                row: 0,
                column: 0,
                width: 16,
                control: 'repeater',
                source: 'countries',
                elements: [
                  {
                    id: '2',
                    row: 0,
                    column: 0,
                    width: 8,
                    control: 'input',
                    label: 'Name',
                    source: 'name'
                  },
                  {
                    id: '3',
                    row: 0,
                    column: 8,
                    width: 8,
                    control: 'input',
                    label: 'Capital',
                    source: 'capital'
                  },
                  {
                    id: '4',
                    row: 0,
                    column: 15,
                    width: 1,
                    control: 'deleteButton',
                    label: '\xa0'
                  }
                ]
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
        const agree = root.findByProps({ name: 'agree' });
        agree.props.onChange(null, { value: false });

        const disagree = root.findByProps({ name: 'disagree' });
        disagree.props.onChange(null, { value: true });
        expect(component).toMatchSnapshot();
      });
    }
  );
});
