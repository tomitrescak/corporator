import * as React from 'react';
import { observer } from 'mobx-react';
import { DataSet } from '../models/dataset_model';
import { Label } from 'semantic-ui-react';

type ErrorProps = {
  owner: DataSet;
  source: string;
};

export const ErrorView = observer(
  ({ owner, source }: ErrorProps) =>
    owner.getError(source) && (
      <Label pointing color="red">
        {owner.getError(source)}
      </Label>
    )
);
