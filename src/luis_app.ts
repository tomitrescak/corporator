// hack the global scope
if (!(global as any).expect) {
  (global as any).expect = {
    addSnapshotSerializer() {
      /**/
    },
    extend() {
      /**/
    }
  };
}

if (!global.jest) {
  global.jest = {
    mock() {
      /**/
    }
  };
}

import 'semantic-ui-css/semantic.min.css';

import { renderLuis, setupTestBridge } from 'luis';

const summary = require('./summary.json');
const snapshots = require('./snapshots');

setupTestBridge(summary, snapshots);

import './client/modules/email/views/tests/index';
import './client/modules/form/views/tests/index';
import './client/modules/headers/tests';
import './client/modules/home/tests/index';
import './client/modules/login/tests';
import './client/modules/notifications/containers/tests/index';
// import './client/modules/process/containers/tests/index';
// import './client/modules/process/views/tests/index';
// import './client/modules/resources/views/tests/index';

renderLuis();
