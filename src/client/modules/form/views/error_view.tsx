import * as React from 'react';

import { observer } from 'mobx-react';
import { Label } from 'semantic-ui-react';

type ErrorProps = {
  owner: {
    getError(source?: string): string;
  };
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

type ErrorLabelProps = { error: string };

export const ErrorLabel = observer(({ error }: ErrorLabelProps) => {
  if (!error) {
    return null;
  }
  return (
    <Label pointing color="red">
      {error}
    </Label>
  );
});
