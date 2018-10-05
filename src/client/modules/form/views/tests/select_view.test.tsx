import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Segment } from 'semantic-ui-react';

import { QueryTypes } from 'data/client';
import { FormModel } from '../../models/form_model';
import { FormView } from '../form_view';
import { create } from './form_query_data';

describe('Form', function() {
  const descriptors = [create.descriptor({ name: 'country' }), create.descriptor({ name: 'city' })];

  const controlData = { country: 'SK', city: 'KE' };

  const lists = [
    {
      name: 'countries',
      items: [{ text: 'Australia', value: 'AU' }, { text: 'Slovakia', value: 'SK' }]
    },
    {
      name: 'cities',
      items: [
        { text: 'Sydney', value: 'SYD', country: 'AU' },
        { text: 'Melbourne', value: 'MEL', country: 'AU' },
        { text: 'Kosice', value: 'KE', country: 'SK' },
        { text: 'Bratislava', value: 'BA', country: 'SK' }
      ]
    }
  ];

  const dataSet = FormModel.buildMstModel(descriptors, controlData, lists);

  describe('Select', function() {
    function componentWithData() {
      const form = new FormModel(
        create.form({
          elements: [
            create.formElement({
              id: '1',
              row: 0,
              column: 0,
              width: 8,
              list: 'countries',
              control: QueryTypes.FormControl.Select,
              label: 'Country',
              source: create.descriptor({
                id: '',
                name: 'country'
              }),
              inline: true
            }),
            create.formElement({
              id: '2',
              row: 0,
              column: 8,
              width: 8,
              control: QueryTypes.FormControl.Select,
              list: 'cities',
              filterSource: 'country',
              filterColumn: 'country',
              controlProps: {
                search: true
              },
              source: create.descriptor({
                id: '',
                name: 'city'
              }),
              label: 'City'
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
      const country = root.findByProps({ name: 'country' });
      country.props.onChange(null, { value: 'AU' });

      const city = root.findByProps({ name: 'city' });
      city.props.onChange(null, { value: 'SYD' });

      expect(component).toMatchSnapshot();
    });

    return { componentWithData };
  });
});
