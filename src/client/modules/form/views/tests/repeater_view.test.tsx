import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Segment } from 'semantic-ui-react';

import { createData } from 'tests/test_data';
import { FormModel } from '../../models/form_model';
import { FormView } from '../form_view';

describe('Form', () => {
  const descriptors = [
    createData.descriptor({
      name: 'countries',
      type: 'Object',
      isArray: true,
      descriptors: [
        createData.descriptor({ name: 'id', type: 'Id' }),
        createData.descriptor({ name: 'name', type: 'String' }),
        createData.descriptor({ name: 'capital', type: 'String' })
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
          createData.formDao({
            elements: [
              {
                id: '1',
                row: 0,
                column: 0,
                width: 16,
                control: 'Repeater',
                source: {
                  id: '',
                  name: 'countries'
                },
                elements: [
                  {
                    id: '2',
                    row: 0,
                    column: 0,
                    width: 8,
                    control: 'Input',
                    label: 'Name',
                    source: {
                      id: '',
                      name: 'name'
                    }
                  },
                  {
                    id: '3',
                    row: 0,
                    column: 8,
                    width: 8,
                    control: 'Input',
                    label: 'Capital',
                    source: {
                      id: '',
                      name: 'capital'
                    }
                  },
                  {
                    id: '4',
                    row: 0,
                    column: 15,
                    width: 1,
                    control: 'DeleteButton',
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
