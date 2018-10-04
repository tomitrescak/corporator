import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';

export type EditableViewType = 'view' | 'preview';

export type ProcessViewType =
  | 'information'
  | 'resources'
  | 'form'
  | 'report'
  | 'document'
  | 'diagram'
  | 'log';

export const TightGrid = styled(Grid)`
  margin: 12px 0px 0px 0px !important;
  .column {
    padding-top: 5px !important;
  }
  .label {
    margin-left: 0px !important;
  }
`;

export const TabContent = styled.div`
  &&&&& {
    padding: 12px;
    height: 100%;

    .header .content {
      width: 100%;
    }
    /* background-image: linear-gradient(#d4d4d5, #ffffff), linear-gradient(#d4d4d5, #ffffff);
    background-size: 1px 100%;
    background-position: 0 0, 100% 0;
    background-repeat: no-repeat; */
  }
`;
