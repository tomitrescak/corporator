import { create } from 'client/modules/form/views/tests/form_query_data';
import { FormModel } from '../form_model';

it('creates a new model', () => {
  let model = new FormModel(
    {
      description: 'Desc',
      elements: [],
      name: 'Name'
    },
    null,
    null
  );

  expect(model.description).toEqual('Desc');
  expect(model.elements).toEqual([]);
  expect(model.name).toEqual('Name');
});

it('sorts form fields when form is created', () => {
  let model = new FormModel(
    create.form({
      elements: [
        create.formElement({ row: 3, column: 2, width: 6, label: '6' }),
        create.formElement({ row: 3, column: 2, width: 6, label: '5' }),
        create.formElement({ row: 0, column: 8, width: 6, label: '2' }),
        create.formElement({ row: 2, column: 2, width: 6, label: '3' }),
        create.formElement({ row: 2, column: 8, width: 6, label: '4' }),
        create.formElement({ row: 0, column: 0, width: 6, label: '1' })
      ]
    }),
    null,
    null
  );
  expect(model.elements[0].label).toEqual('1');
  expect(model.elements[1].label).toEqual('2');
  expect(model.elements[2].label).toEqual('3');
  expect(model.elements[3].label).toEqual('4');
  expect(model.elements[4].label).toEqual('6');
});
