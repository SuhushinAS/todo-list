import React from 'react';

type Props = {
  children: React.ReactNode;
  condition: boolean;
};

export const If = (props: Props) => {
  const {children, condition} = props;

  return condition ? children : null;
};
