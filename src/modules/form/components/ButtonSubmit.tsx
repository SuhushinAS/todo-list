import clsx from 'clsx';
import {Button} from 'modules/form/components/Button';
import React, {ButtonHTMLAttributes} from 'react';
import {useFormContext} from 'react-hook-form';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonSubmit = ({className, disabled, ...props}: Props) => {
  const {formState} = useFormContext();
  const {isDirty, isLoading, isSubmitting, isValid, isValidating} = formState;
  const buttonClassName = clsx('Button_Primary', className);
  const isDisabled =
    !isDirty ||
    isLoading ||
    isSubmitting ||
    !isValid ||
    isValidating ||
    disabled;

  return (
    <Button className={buttonClassName} disabled={isDisabled} {...props} />
  );
};
