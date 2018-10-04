import * as React from 'react';

import { Link } from '@reach/router';
import { Breadcrumb, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import { QueryTypes } from 'data/client';
import { EditableViewType, ProcessViewType } from '../../common/process_styles';

const Breadcrumbs = styled(Breadcrumb)`
  padding: 6px 12px !important;
  border-left: 1px dotted #d4d4d5;
  border-bottom: 1px solid #d4d4d5;
  background-color: #f3f3f3;
  width: 100%;
  padding: 6px;
`;

type Props = {
  contentType?: ProcessViewType;
  context: App.Context;
  ownerId: string;
  process: QueryTypes.BpmnProcessDefinition;
  showInstructions?: Function;
  title?: string;
  viewType: EditableViewType;
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
      to={`/process/${process.name.url()}/${viewType}/information/${ownerId}`}
    >
      {process.name}
    </Breadcrumb.Section>

    <If condition={!!contentType}>
      <>
        <Breadcrumb.Divider icon="right angle" />
        <Breadcrumb.Section
          link
          as={Link}
          to={`/process/${process.name.url()}/${viewType}/${contentType}/${ownerId}`}
        >
          {typeToText(contentType, context)}
        </Breadcrumb.Section>
      </>
    </If>
    <If condition={!!title}>
      <>
        <Breadcrumb.Divider icon="right angle" />
        <Breadcrumb.Section active>{title}</Breadcrumb.Section>
      </>
    </If>
    <If condition={!!showInstructions}>
      <>
        <a href="#" onClick={showInstructions as any} style={{ float: 'right' }}>
          <Icon name="info circle" />
          <I18>Instructions</I18>
        </a>
      </>
    </If>
  </Breadcrumbs>
);
