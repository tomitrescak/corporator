import * as React from 'react';

import { render } from 'client/tests';
import { ProcessIcon } from '../process_icon';

describe('Process', () => {
  describe('Icon', () => {
    const Component = (
      <ul>
        <li>
          <ProcessIcon type={'HumanResources'} /> Human Resources
        </li>
        <li>
          <ProcessIcon type={'Purchases'} /> Purchases
        </li>
        <li>
          <ProcessIcon type={'Sales'} /> Sales
        </li>
        <li>
          <ProcessIcon type={'Travel'} /> Travel
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
