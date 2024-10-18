import {SvgIcon} from 'modules/common/components/SvgIcon';
import {Table} from 'modules/common/components/Table';
import {ButtonSubmit} from 'modules/form/components/ButtonSubmit';
import {Input} from 'modules/form/components/Input';
import {useMessage} from 'modules/locale/lib/hooks';
import {TTask} from 'modules/task/lib/types';
import React, {useCallback} from 'react';
import {
  DefaultValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

type Props = {
  defaultValues: DefaultValues<TTask>;
  onSubmit: SubmitHandler<TTask>;
};

export const TaskForm = (props: Props) => {
  const {defaultValues} = props;
  const form = useForm<TTask>({defaultValues});
  const placeholder = useMessage('task.title');

  const onSubmit = useCallback<SubmitHandler<TTask>>(
    async (values) => {
      await props.onSubmit(values);
      form.reset(defaultValues);
    },
    [defaultValues, form, props]
  );

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Table>
          <tr>
            <td className="Table__Cell Table__Cell_Title">
              <Input
                className="TaskForm__Input"
                name="title"
                placeholder={placeholder}
              />
            </td>
            <td className="Table__Cell Table__Cell_Control Table__Cell_Control_Fixed">
              <ButtonSubmit className="offset">
                <SvgIcon name="plus" />
              </ButtonSubmit>
            </td>
          </tr>
        </Table>
      </form>
    </FormProvider>
  );
};
