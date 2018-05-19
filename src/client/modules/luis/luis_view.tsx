// src/index.ts
import * as React from 'react';

import { Luis, setupJestBridge, setupTestBridge } from 'luis';

const summary = require('../../../summary.json');
const snapshots = require('../../../snapshots');
setupTestBridge(summary, snapshots);

// you can either write your tests here or import them from other test files
// e.g. import 'path/to/my/test'

export function LuisApp() {
  require('../home/tests/home_view.test');

  return Luis;
}
