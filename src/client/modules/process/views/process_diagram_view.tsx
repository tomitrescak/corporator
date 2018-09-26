import * as React from 'react';

import * as Diagram from './PatentApplicationHighLevel.png';

import { Header } from 'semantic-ui-react';

export const ProcessDiagramView = () => (
  <>
    <Header icon="sitemap" content="Process Diagram" as="h4" />
    <img src={Diagram} style={{ width: '100%' }} />
  </>
);
