import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Segment } from 'semantic-ui-react';

import { createData } from 'tests/test_data';
import { FormModel } from '../../models/form_model';
import { FormView } from '../form_view';

describe('Form', function() {
  const descriptors = [
    createData.descriptor({ name: 'country' }),
    createData.descriptor({ name: 'city' })
  ];

  const controlData = [{ name: 'country', value: 'SK' }, { name: 'city', value: 'KE' }];

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
        createData.formDao({
          elements: [
            {
              id: '1',
              row: 0,
              column: 0,
              width: 8,
              list: 'countries',
              control: 'Select',
              label: 'Country',
              source: {
                id: '',
                name: 'country'
              },
              inline: true
            },
            {
              id: '2',
              row: 0,
              column: 8,
              width: 8,
              control: 'Select',
              list: 'cities',
              filterSource: 'country',
              filterColumn: 'country',
              controlProps: {
                search: true
              },
              source: {
                id: '',
                name: 'city'
              },
              label: 'City'
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
