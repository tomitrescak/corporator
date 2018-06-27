// import * as BarTest from './tests/Bar.test';
// import * as FooTest from './tests/Foo.test';
// import * as ComponentsTest from './tests/Component.test';

import 'semantic-ui-css/semantic.min.css';

import { renderLuis, setupTestBridge } from 'luis';

const summary = require('./summary.json');
const snapshots = require('./snapshots');

setupTestBridge(summary, snapshots);

import './client/modules/email/views/tests';
import './client/modules/form/views/tests';
import './client/modules/home/tests';
import './client/modules/process/views/tests';
import './client/modules/resources/views/tests';

renderLuis();
