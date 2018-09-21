import * as React from 'react';

import { create, render } from 'client/tests';

import { createProcessInstance } from '../../containers/tests/process_test_data';
import { ProcessResources } from '../process_resources_view';

describe('Process', () => {
  describe('Resources', () => {
    const context = create.context();
    const processInstance = createProcessInstance();

    const component = <ProcessResources process={processInstance.process} context={context} />;

    it('renders correctly', () => {
      expect(render(component)).toMatchSnapshot();
    });

    return { component };
  });
});
