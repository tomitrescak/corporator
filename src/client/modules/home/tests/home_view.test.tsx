import * as React from 'react';

import { HomeView } from '../home_view';
import { MainLayout } from '../../core/main_layout';

storyOf(
  'Home',
  {
    get component() {
      // just another notation
      return (
        <MainLayout>
          <HomeView />
        </MainLayout>
      );
    }
  },
  () => {
    it('renders correctly', () => {});
  }
);

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<HomeView />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// it('renders snapshot', () => {
//   const component = renderer.create(<HomeView />);
//   const root = component.root;

//   expect(component).toMatchSnapshot();

//   // const button = root.findByType('button');
//   // button.props.onClick();

//   // expect(component).toMatchSnapshot();
// });
