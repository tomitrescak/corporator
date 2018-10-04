import * as React from 'react';

import 'jest-styled-components';

import { ProcessViewType } from 'client/modules/process/common/process_styles';
import { createProcess } from 'client/modules/process/common/tests/process_test_data';
import { create, QueryTypes, render } from 'client/tests';
import { ProcessView } from '../process_view';

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
