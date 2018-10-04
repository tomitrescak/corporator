import * as React from 'react';

import { create, QueryTypes, render } from 'client/tests';

import { createProcess } from '../../containers/tests/process_test_data';
import { ProcessView, ProcessViewType } from '../process_view';

import 'jest-styled-components';

describe('Process Tabs', () => {
  const context = create.context();

  function componentWithData(
    process: QueryTypes.BpmnProcessDefinition,
    view: ProcessViewType = 'information'
  ) {
    return <ProcessView context={context} process={process} view={view} />;
  }

  describe('Information', () => {
    describe('No Resources', () => {
      const component = componentWithData(createProcess({ resources: [] }));

      it('renders', () => {
        const rendered = render(component);
        expect(rendered).toMatchSnapshot();
      });

      return { component };
    });

    describe('With Resources', () => {
      const component = componentWithData(createProcess());

      it('renders', () => {
        const rendered = render(component);
        expect(rendered).toMatchSnapshot();
      });

      return { component };
    });
  });
});
