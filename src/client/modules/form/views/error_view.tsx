import * as React from 'react';

import { observer } from 'mobx-react';
import { Label } from 'semantic-ui-react';
import { DataSet } from '../models/form_store';

type PointingProps = boolean | 'above' | 'left' | 'right' | 'below';

type ErrorProps = {
  owner: DataSet;
  source: string;
  pointing?: PointingProps;
  newLine?: boolean;
};

export function renderError(error: string, pointing: PointingProps) {
  return (
    <Label pointing={pointing} color="red">
      {error}
    </Label>
  );
}

export const ErrorView = observer(({ owner, source, newLine, pointing = true }: ErrorProps) => {
  if (!owner.getError(source)) {
    return null;
  }

  if (newLine) {
    return <div>{renderError(owner.getError(source), pointing)}</div>;
  }

  return renderError(owner.getError(source), pointing);
});

type ErrorLabelProps = { error: string; pointing?: PointingProps };

export const ErrorLabel = observer(({ error, pointing = true }: ErrorLabelProps) => {
  if (!error) {
    return null;
  }
  return (
    <Label color="red" pointing={pointing}>
      {error}
    </Label>
  );
});
