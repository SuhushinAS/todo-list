import clsx from 'clsx';
import 'modules/form/components/Button.less';
import React, {ButtonHTMLAttributes} from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({className, ...props}: Props) => {
  const buttonClassName = clsx('Button', className);

  return <button className={buttonClassName} {...props} />;
};
