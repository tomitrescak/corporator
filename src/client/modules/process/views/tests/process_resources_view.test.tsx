import * as React from 'react';

import { create, QueryTypes, render } from 'client/tests';

import { createProcessInstance } from '../../containers/tests/process_test_data';
import { ProcessResources } from '../process_resources_view';

describe('Resources', () => {
  const context = create.context();
  const processInstance = createProcessInstance();

  const componentWithData = (process?: QueryTypes.BpmnProcessInstance) => (
    <ProcessResources
      process={processInstance.process}
      processInstance={process}
      context={context}
    />
  );

  describe('Process', () => {
    const component = componentWithData();

    it('renders correctly', () => {
      expect(render(component)).toMatchSnapshot();
    });

    return { component };
  });

  describe('Process Instance', () => {
    const component = componentWithData(createProcessInstance());

    it('renders correctly', () => {
      expect(render(component)).toMatchSnapshot();
    });

    return { component };
  });
});
