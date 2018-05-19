import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';

import { HomeView } from '../home_view';

storyOf(
  'Component With Test',
  {
    foo: 2,
    bar: 3,
    get component() {
      // just another notation
      return <div>My Tested</div>;
    }
  },
  data => {
    it('passes', () => {
      expect(data.foo).toEqual(2);
    });

    it('fails', () => {
      expect(data.bar).toEqual(3);
    });
  }
);

storyOf(
  'Component 2 With Test',
  {
    foo: 2,
    bar: 3,
    get component() {
      // just another notation
      return <div>My Tested 2</div>;
    }
  },
  data => {
    it('passes', () => {
      expect(data.foo).toEqual(2);

      const component = renderer.create(data.component);
      const root = component.root;

      expect(component).toMatchSnapshot();
    });

    it('fails', () => {
      expect(data.bar).toEqual(3);
    });
  }
);

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
