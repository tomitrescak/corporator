import * as React from 'react';

import { QueryTypes } from 'data/client';
import styled from 'styled-components';
import { ProcessResources } from './process_resources_view';
import { EditableViewType, ProcessViewType } from './process_view';
import { TabBreadcrumbs } from './tab_breadcrumbs';
import { TabDocumentView } from './tab_document_view';
import { TabFormView } from './tab_process_form';

type Props = {
  process: QueryTypes.BpmnProcessDefinition;
  context: App.Context;
  processInstance?: QueryTypes.BpmnProcessInstance;
  contentType: ProcessViewType;
  viewType: EditableViewType;
  resourceId?: string;
  ownerId: string;
};

const Resources = styled.div`
  padding: 12px;
`;

function createFilter(processType: ProcessViewType): QueryTypes.ResourceType {
  switch (processType) {
    case 'document':
      return QueryTypes.ResourceType.Document;
    case 'form':
      return QueryTypes.ResourceType.Form;
    case 'report':
      return QueryTypes.ResourceType.Report;
  }
  return undefined;
}

/* =========================================================
    Component
   ======================================================== */

export class TabProcessResources extends React.PureComponent<Props> {
  renderContent() {
    const { contentType, resourceId } = this.props;

    switch (contentType) {
      case 'document':
        return <TabDocumentView id={resourceId} {...this.props} />;
      case 'form':
      case 'report': {
        return <TabFormView id={resourceId} {...this.props} />;
      }
    }

    throw new Error('Not implemented: ' + contentType);
  }
  render() {
    const {
      process,
      context,
      processInstance,
      resourceId,
      contentType,
      ownerId,
      viewType
    } = this.props;

    if (resourceId) {
      return this.renderContent();
    }
    return (
      <>
        <TabBreadcrumbs
          ownerId={ownerId}
          contentType={contentType}
          context={context}
          process={process}
          viewType={viewType}
        />

        <Resources>
          <ProcessResources
            context={context}
            process={process}
            processInstance={processInstance}
            filter={createFilter(contentType)}
          />
        </Resources>
      </>
    );
  }
}

TabProcessResources.displayName = 'TabProcessResources';
