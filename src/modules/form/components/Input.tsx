import clsx from 'clsx';
import 'modules/form/components/Input.less';
import React, {InputHTMLAttributes} from 'react';
import {useController, useFormContext} from 'react-hook-form';

type Props = InputHTMLAttributes<HTMLInputElement> & {name: string};

export const Input = ({className, id, name, required, ...props}: Props) => {
  const {control} = useFormContext();
  const {field} = useController({control, name, rules: {required}});
  const inputClassName = clsx('Input', className);

  return (
    <input
      className={inputClassName}
      id={id ?? name}
      required={required}
      {...field}
      {...props}
    />
  );
};
