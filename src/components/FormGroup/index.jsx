// @flow
import * as React from 'react';

type Props = {
  title?: string,
  error?: string,
  children: React.Node,
};

const FormGroup = (props: Props): React.Element<'div'> => {
  const { error, title, children } = props;

  return (
    <div className="w-full text-left">
      {title && <div className="font-semibold">{title}</div>}
      {!title && <div className="leading-6">&nbsp;</div>}
      {children}
      {error && <div className="text-sm text-red-500">{error}</div>}
    </div>
  );
};

FormGroup.defaultProps = {
  title: undefined,
  error: undefined,
};

export default FormGroup;
