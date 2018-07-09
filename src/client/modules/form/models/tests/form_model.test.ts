import { autorun } from 'mobx';

import { create } from '../../../../../shared/test_data';
import { FormModel } from '../form_model';

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
    create.formDao({
      elements: [
        { id: '6', row: 3, column: 2, width: 6 },
        { id: '5', row: 3, column: 2, width: 6 },
        { id: '2', row: 0, column: 8, width: 6 },
        { id: '3', row: 2, column: 2, width: 6 },
        { id: '4', row: 2, column: 8, width: 6 },
        { id: '1', row: 0, column: 0, width: 6 }
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
    create.descriptor({ name: 'age', type: 'int' }),
    create.descriptor({ name: 'height', type: 'int', defaultValue: 5 }),
    create.descriptor({
      name: 'taller',
      type: 'int',
      expression: `this['height'] + 10`
    })
  ];
  const instance = FormModel.buildMstModel(descriptors, [{ name: 'height', value: 6 }]);

  expect(instance.getValue('height')).toEqual(6);
  expect(instance.getValue('taller')).toEqual(16);

  let finalHeight = 0;
  autorun(() => {
    finalHeight = instance.getValue('taller');
  });

  // check computed fields
  instance.parseValue('height', 10);
  expect(finalHeight).toEqual(20);
});
