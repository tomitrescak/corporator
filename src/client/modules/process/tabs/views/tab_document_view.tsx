import * as React from 'react';

import * as DOCUMENT_QUERY from '../queries/document.query.graphql';

import { Query } from 'react-apollo';

import { renderResult } from 'client/modules/common';
import { QueryTypes } from 'data/client';
import { EditableViewType, ProcessViewType, TabContent } from '../../common/process_styles';
import { TabBreadcrumbs } from './tab_breadcrumbs';

class ResourceQuery extends Query<QueryTypes.DocumentQuery, QueryTypes.DocumentQueryVariables> {
  static defaultProps = { query: DOCUMENT_QUERY };
}

type Props = {
  process: QueryTypes.BpmnProcessDefinition;
  contentType: ProcessViewType;
  context: App.Context;
  viewType: EditableViewType;
  ownerId: string;
  id: string;
};

export const TabDocumentView: React.SFC<Props> = props => (
  <ResourceQuery variables={{ id: props.id }}>
    {result =>
      renderResult(result, () => (
        <>
          <TabBreadcrumbs
            {...props}
            title={result.data.documentQuery.title}
            ownerId={props.ownerId}
          />

          <TabContent>
            <div dangerouslySetInnerHTML={{ __html: result.data.documentQuery.content }} />
          </TabContent>
        </>
      ))
    }
  </ResourceQuery>
);

TabDocumentView.displayName = 'TabDocumentView';
