// import * as React from 'react';

// import { create, createData, mock, MockedProvider } from 'tests/client';

// import { ProcessListContainer, QUERY } from '../process_list_container';

// describe('Process', () => {
//   describe('List', () => {
//     storyOf(
//       'Container',
//       {
//         componentWithData(skipInit = false) {
//           // init for luis
//           if (!skipInit) {
//             mock.expect(QUERY).reply({
//               notifications: [
//                 createData.notification(),
//                 createData.notification()
//               ]
//             });
//           }

//           return (
//             <MockedProvider>
//               <ProcessListContainer />
//             </MockedProvider>
//           );
//         }
//       },
//       data => {
//         it('renders loading', () => {
//           mock.expect(QUERY).loading();
//           const root = create(data.componentWithData());
//           expect(root).toMatchSnapshot();
//         });

//         it('renders data', async () => {
//           mock.reset();
//           const root = create(data.componentWithData());
//           expect(root).toMatchSnapshot();
//         });
//       }
//     );
//   });
// });
it('test', () => {
  /**/
});
