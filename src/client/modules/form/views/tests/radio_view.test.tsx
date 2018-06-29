import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Segment } from 'semantic-ui-react';

import { create } from 'shared/test_data';
import { FormView } from '../form_view';
import { FormModel } from '../../models/form_model';

describe('Form', () => {
  const descriptors = [
    create.descriptorDao({ name: 'religion', type: 'string' }),
    create.descriptorDao({ name: 'lined_religion', type: 'string' })
  ];

  const lists = [
    {
      name: 'religions',
      items: [{ text: 'Christian', value: 'CH' }, { text: 'Buddhist', value: 'BU' }, { text: 'Jedi', value: 'JE'}]
    }
  ];

  const data = [{ name: 'religion', value: 'JE' }, { name: 'lined_religion', value: 'CH' }];
  const dataSet = FormModel.buildMST(descriptors, data, lists);

  storyOf(
    'Radio',
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
                list: 'religions',
                control: 'radio',
                label: 'Religions',
                source: 'religion'
              },
              {
                id: '2',
                row: 1,
                column: 0,
                width: 16,
                list: 'religions',
                inline: true,
                control: 'radio',
                label: 'Religions',
                source: 'lined_religion'
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

      it('changes values', () => {
        const component = renderer.create(data.component);
        const root = component.root;
        const agree = root.findAllByProps({ value: 'BU' });
        agree[1].props.onChange(null, { value: 'BU' });

        expect(component).toMatchSnapshot();
      });
    }
  );
});
