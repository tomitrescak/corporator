import * as React from 'react';

import { Breadcrumb, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import { Link } from '@reach/router';
import { QueryTypes } from 'data/client';
import { EditableViewType, ProcessViewType } from './process_view';

const Breadcrumbs = styled(Breadcrumb)`
  padding: 6px 12px !important;
  border-left: 1px dotted #d4d4d5;
  border-bottom: 1px solid #d4d4d5;
  background-color: #f3f3f3;
  width: 100%;
  padding: 6px;
`;

type Props = {
  process: QueryTypes.BpmnProcessDefinition;
  contentType: ProcessViewType;
  context: App.Context;
  title?: string;
  ownerId: string;
  viewType: EditableViewType;
  showInstructions?: Function;
};

function typeToText(type: ProcessViewType, context: App.Context) {
  switch (type) {
    case 'form':
      return context.i18n`Forms`;
    case 'report':
      return context.i18n`Reports`;
    case 'document':
      return context.i18n`Documents`;
  }
}

export const TabBreadcrumbs: React.SFC<Props> = ({
  process,
  contentType,
  context,
  title,
  ownerId,
  viewType,
  showInstructions
}) => (
  <Breadcrumbs>
    <Breadcrumb.Section
      link
      as={Link}
      to={`/process/${process.name.url()}/${viewType}/resources/${ownerId}`}
    >
      {process.name}
    </Breadcrumb.Section>
    <Breadcrumb.Divider icon="right angle" />
    <Breadcrumb.Section
      link
      as={Link}
      to={`/process/${process.name.url()}/${viewType}/${contentType}/${ownerId}`}
    >
      {typeToText(contentType, context)}
    </Breadcrumb.Section>
    <If condition={!!title}>
      <>
        <Breadcrumb.Divider icon="right angle" />
        <Breadcrumb.Section active>{title}</Breadcrumb.Section>
      </>
    </If>
    <If condition={!!showInstructions}>
      <>
        <Breadcrumb.Divider icon="right angle" />
        <Breadcrumb.Section as="a" onClick={showInstructions as any}>
          <Icon name="info circle" />
          <I18>Instructions</I18>
        </Breadcrumb.Section>
      </>
    </If>
  </Breadcrumbs>
);
