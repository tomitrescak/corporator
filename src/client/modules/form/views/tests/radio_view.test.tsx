import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Segment } from 'semantic-ui-react';

import { QueryTypes } from 'data/client';
import { FormModel } from '../../models/form_model';
import { FormView } from '../form_view';
import { create } from './form_query_data';

describe('Form', () => {
  const descriptors = [
    create.descriptor({ name: 'religion', type: QueryTypes.DataType.String }),
    create.descriptor({ name: 'lined_religion', type: QueryTypes.DataType.String })
  ];

  const lists = [
    {
      name: 'religions',
      items: [
        { text: 'Christian', value: 'CH' },
        { text: 'Buddhist', value: 'BU' },
        { text: 'Jedi', value: 'JE' }
      ]
    }
  ];

  const controlData = { religion: 'JE', lined_religion: 'BU' };
  const dataSet = FormModel.buildMstModel(descriptors, controlData, lists);

  storyOf(
    'Radio',
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
                list: 'religions',
                control: QueryTypes.FormControl.Radio,
                label: 'Religions',
                source: create.descriptor({
                  id: '',
                  name: 'religion'
                }),
                inline: true
              }),
              create.formElement({
                id: '2',
                row: 1,
                column: 0,
                width: 16,
                list: 'religions',
                control: QueryTypes.FormControl.Radio,
                label: 'Religions',
                source: create.descriptor({
                  id: '',
                  name: 'lined_religion'
                }),
                vertical: true
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
