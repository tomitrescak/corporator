import * as React from 'react';

import { render } from 'client/tests';
import { QueryTypes } from 'data/client';
import { ProcessIcon } from '../process_icon';

describe('Process', () => {
  describe('Icon', () => {
    const Component = (
      <ul>
        <li>
          <ProcessIcon type={QueryTypes.ProcessType.HumanResources} /> Human Resources
        </li>
        <li>
          <ProcessIcon type={QueryTypes.ProcessType.Purchases} /> Purchases
        </li>
        <li>
          <ProcessIcon type={QueryTypes.ProcessType.Sales} /> Sales
        </li>
        <li>
          <ProcessIcon type={QueryTypes.ProcessType.Travel} /> Travel
        </li>
      </ul>
    );

    it('renders correctly', () => {
      expect(render(Component)).toMatchSnapshot();
    });

    return {
      component: Component
    };
  });
});
