import { autorun, toJS } from 'mobx';

import { create } from 'client/modules/form/views/tests/form_query_data';
import { QueryTypes } from 'data/client';
import { SearchResults } from 'semantic-ui-react';
import { FormModel } from '../form_model';
import { FormStore } from '../form_store';

describe('initStrings', () => {
  it('initialises simple object', () => {
    const o: any = { a: 1, b: null };
    const result = FormModel.initStrings(o);

    expect(result).toEqual({ __errors: {}, __strings: { a: '1', b: '' }, a: 1, b: null });
  });

  it('initialises complex object', () => {
    const o: any = { a: { b: 1, c: { d: 'Yes' } } };
    const result = FormModel.initStrings(o);

    expect(result).toEqual({
      __errors: {},
      __strings: {},
      a: {
        __errors: {},
        __strings: { b: '1' },
        b: 1,
        c: { __errors: {}, __strings: { d: 'Yes' }, d: 'Yes' }
      }
    });
  });

  it('initialises arrays', () => {
    const o: any = { a: [{ b: 1 }, { c: 'A' }] };
    const result = FormModel.initStrings(o);

    expect(result).toEqual({
      __errors: {},
      __strings: {},
      a: [
        { __errors: {}, __strings: { b: '1' }, b: 1 },
        { __errors: {}, __strings: { c: 'A' }, c: 'A' }
      ]
    });
  });
});

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
    create.descriptor({ name: 'age', type: QueryTypes.DataType.Int }),
    create.descriptor({ name: 'height', type: QueryTypes.DataType.Int, defaultValue: '5' }),
    create.descriptor({
      name: 'taller',
      type: QueryTypes.DataType.Int,
      expression: `this['height'] + 10`
    })
  ];
  const instance = FormModel.buildMstModel(descriptors, { height: 6 });

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
