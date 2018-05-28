import * as React from 'react';

import { EmailView } from '../email_view';

describe('Email', () => {
  storyOf('Dean', {
    get component() {
      // just another notation
      return <EmailView />;
    }
  });
});
