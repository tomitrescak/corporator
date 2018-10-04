import * as React from 'react';

import { List, SemanticICONS } from 'semantic-ui-react';
import styled from 'styled-components';

import { QueryTypes } from 'data/client';

export function processTypeToIcon(type: QueryTypes.ProcessType): SemanticICONS {
  switch (type) {
    case QueryTypes.ProcessType.Travel:
      return 'briefcase';
    case QueryTypes.ProcessType.HumanResources:
      return 'user circle';
    case QueryTypes.ProcessType.Purchases:
      return 'money';
    case QueryTypes.ProcessType.Sales:
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
  type: QueryTypes.ProcessType;
};

export const ProcessIcon: React.SFC<Props> = ({ type }) => (
  <IconView name={processTypeToIcon(type)} verticalAlign="middle" />
);
