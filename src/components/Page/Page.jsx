// @flow
import * as React from 'react';

type Props = {
  children: React.Node,
};

const Page = ({ children }: Props): React.Element<'div'> => (
  <div className="w-full px-4 xl:px-8 xl:mx-auto max-w-7xl">{children}</div>
);

export default Page;
