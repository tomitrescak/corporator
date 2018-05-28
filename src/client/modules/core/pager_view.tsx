import * as React from 'react';
import { Menu } from 'semantic-ui-react';

let activeItem = '1';

export const PagerView = () => (
  <div style={{ margin: 'auto', textAlign: 'center' }}>
    <Menu pagination>
      <Menu.Item name="1" active={activeItem === '1'} />
      <Menu.Item disabled>...</Menu.Item>
      <Menu.Item name="10" active={activeItem === '10'} />
      <Menu.Item name="11" active={activeItem === '11'} />
      <Menu.Item name="12" active={activeItem === '12'} />
    </Menu>
  </div>
);
