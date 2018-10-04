import * as React from 'react';

import { Header, List, ListProps, Message, SemanticICONS } from 'semantic-ui-react';
import styled, { StyledComponentClass } from 'styled-components';

import { QueryTypes } from 'data/client';
import { ProcessInstanceItem } from './process_instance_item_view';

const ProcessList: StyledComponentClass<ListProps, {}> = styled(List)`
  max-width: 800px !important;

  &&&&& .description {
    font-size: smaller;
  }
`;

const ResultInfo = styled.div`
  color: #999;
`;

type Props = {
  header: string;
  description: string;
  icon: SemanticICONS;
  processes: QueryTypes.BpmnProcessInstanceItem[];
  context: App.Context;
};

export const ProcessInstanceList: React.SFC<Props> = ({
  processes,
  context,
  icon,
  header,
  description
}) => (
  <React.Fragment>
    <ResultInfo>
      {processes.length === 1
        ? context.i18n`1 process available`
        : context.i18n`${processes.length.toString()} processes available`}
    </ResultInfo>
    <Header icon={icon} content={header} subheader={description} />
    <Choose>
      <When condition={processes && processes.length > 0}>
        <ProcessList divided relaxed>
          {processes.map(p => (
            <ProcessInstanceItem key={p.id} processInstance={p} context={context} />
          ))}
        </ProcessList>
      </When>
      <Otherwise>
        <Message>No results</Message>
      </Otherwise>
    </Choose>
  </React.Fragment>
);

ProcessInstanceList.displayName = 'ProcessInstanceList';
