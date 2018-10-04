import * as React from 'react';
import { Comment } from 'semantic-ui-react';

const avatars = {
  wsu: require('./wsu.jpg')
};

type Props = {
  name?: keyof typeof avatars;
};

export const AvatarView: React.SFC<Props> = ({ name = 'wsu' }) => (
  <Comment.Avatar src={avatars[name]} />
);
