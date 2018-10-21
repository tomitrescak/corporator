import * as React from 'react';

import { List, SemanticICONS } from 'semantic-ui-react';
import styled from 'styled-components';

export function processTypeToIcon(type: string): SemanticICONS {
  switch (type) {
    case 'Travel':
      return 'briefcase';
    case 'HumanResources':
      return 'user circle';
    case 'Purchases':
      return 'money';
    case 'Sales':
      return 'money bill alternate outline';
  }
  return 'tasks';
}

const IconView = styled(List.Icon)`
  &&&&& {
    vertical-align: top !important;
    width: 25px;
  }
`;

export type Props = {
  type: string;
};

export const ProcessIcon: React.SFC<Props> = ({ type }) => (
  <IconView name={processTypeToIcon(type)} verticalAlign="middle" />
);
