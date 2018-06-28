import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Segment } from 'semantic-ui-react';

import { create } from 'shared/test_data';
import { FormView } from '../form_view';
import { FormModel } from '../../models/form_model';

describe('Form', () => {
  const descriptors = [
    create.descriptorDao({ name: 'agree', type: 'boolean' }),
    create.descriptorDao({ name: 'disagree', type: 'boolean' })
  ];

  const data = [{ name: 'agree', value: true }, { name: 'disagree', value: false }];
  const dataSet = FormModel.buildMST(descriptors, data);

  storyOf(
    'Checkbox',
    {
      get component() {
        const form = new FormModel(
          create.formDao({
            elements: [
              {
                id: '1',
                row: 0,
                column: 0,
                width: 8,
                control: 'checkbox',
                label: 'Agree With Terms and Conditions',
                source: 'agree'
              },
              {
                id: '2',
                row: 1,
                column: 0,
                width: 8,
                control: 'checkbox',
                controlProps: {
                  toggle: true
                },
                label: 'Disagree With Terms and Conditions',
                source: 'disagree'
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
