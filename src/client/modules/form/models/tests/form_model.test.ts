import { autorun, toJS } from 'mobx';

import { create } from 'client/modules/form/views/tests/form_query_data';
import { QueryTypes } from 'data/client';
import { FormModel } from '../form_model';
import { FormStore } from '../form_store';

it('creates a new model', () => {
  let model = new FormModel({
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
  let model = new FormModel(
    create.form({
      elements: [
        create.formElement({ id: '6', row: 3, column: 2, width: 6 }),
        create.formElement({ id: '5', row: 3, column: 2, width: 6 }),
        create.formElement({ id: '2', row: 0, column: 8, width: 6 }),
        create.formElement({ id: '3', row: 2, column: 2, width: 6 }),
        create.formElement({ id: '4', row: 2, column: 8, width: 6 }),
        create.formElement({ id: '1', row: 0, column: 0, width: 6 })
      ]
    })
  );
  expect(model.elements[0].id).toEqual('1');
  expect(model.elements[1].id).toEqual('2');
  expect(model.elements[2].id).toEqual('3');
  expect(model.elements[3].id).toEqual('4');
  expect(model.elements[4].id).toEqual('6');
});

it('builds MST', () => {
  const descriptors = [
    create.descriptor({ name: 'age', type: QueryTypes.DataType.Int, defaultValue: '7' }),
    create.descriptor({ name: 'height', type: QueryTypes.DataType.Int, defaultValue: '5' }),
    create.descriptor({ id: 'p', name: 'parent', type: QueryTypes.DataType.Object }),
    create.descriptor({
      name: 'weight',
      parentDescriptor: 'p',
      type: QueryTypes.DataType.Int,
      defaultValue: '60'
    }),
    create.descriptor({
      name: 'taller',
      type: QueryTypes.DataType.Int,
      expression: `this['height'] + 10`
    }),
    create.descriptor({
      id: '1',
      name: 'countries',
      type: QueryTypes.DataType.Object,
      isArray: true
    }),
    create.descriptor({ name: 'name', type: QueryTypes.DataType.String, parentDescriptor: '1' }),
    create.descriptor({ name: 'capital', type: QueryTypes.DataType.String, parentDescriptor: '1' })
  ];

  const instance = FormModel.buildMstModel(descriptors, {
    height: 6,
    parent: {},
    countries: [{ name: 'Slovakia', capital: 'Bratislava' }]
  });

  expect(instance.getValue('height')).toEqual(6);
  expect(instance.getValue('taller')).toEqual(16);

  let finalHeight = 0;
  autorun(() => {
    finalHeight = instance.getValue('taller');
  });

  // check computed fields
  instance.parseValue('height', 10);
  expect(finalHeight).toEqual(20);

  // check js version
  expect(instance.toJS()).toEqual({
    age: 7,
    countries: [{ capital: 'Bratislava', name: 'Slovakia' }],
    height: 10,
    parent: { weight: 60 }
  });
});
