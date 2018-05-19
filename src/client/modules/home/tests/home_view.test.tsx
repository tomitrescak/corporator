import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';

import { HomeView } from '../home_view';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeView />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders snapshot', () => {
  const component = renderer.create(<HomeView />);
  const root = component.root;

  expect(component).toMatchSnapshot();

  // const button = root.findByType('button');
  // button.props.onClick();

  // expect(component).toMatchSnapshot();
});
