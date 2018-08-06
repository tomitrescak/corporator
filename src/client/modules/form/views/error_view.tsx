import * as React from 'react';

import { observer } from 'mobx-react';
import { Label } from 'semantic-ui-react';

import { DataSet } from '../models/form_model';

type ErrorProps = {
  owner: DataSet;
  source: string;
};

export const ErrorView = observer(({ owner, source }: ErrorProps) => {
  if (!owner.getError(source)) {
    return null;
  }
  return (
    <Label pointing color="red">
      {owner.getError(source)}
    </Label>
  );
});
