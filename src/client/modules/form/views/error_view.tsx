import * as React from 'react';

import { observer } from 'mobx-react';
import { Label } from 'semantic-ui-react';

type PointingProps = boolean | 'above' | 'left' | 'right' | 'below';

type ErrorProps = {
  owner: {
    getError(source?: string): string;
  };
  source: string;
  pointing?: PointingProps;
};

export const ErrorView = observer(({ owner, source, pointing = true }: ErrorProps) => {
  if (!owner.getError(source)) {
    return null;
  }
  return (
    <Label pointing={pointing} color="red">
      {owner.getError(source)}
    </Label>
  );
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
