import { FormModel } from '../form_model';
import { create } from 'shared/test_data';

it('creates a new model', () => {
  var model = new FormModel({
    id: '1',
    description: 'Desc',
    elements: [],
    name: 'Name',
    validations: []
  });

  expect(model.id).toEqual('1');
  expect(model.description).toEqual('Desc');
  expect(model.elements).toEqual([]);
  expect(model.name).toEqual('Name');
  expect(model.validations).toEqual([]);
});

it('sorts form fields when form is created', () => {
  var model = new FormModel(
    create.formDao({
      elements: [{ id: '1', row: 1, column: 2, width: 6 }]
    })
  );
});
