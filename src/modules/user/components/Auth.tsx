import {setDoc} from 'firebase/firestore';
import {useAnonymouslyContext} from 'modules/firebase/components/Anonymously';
import {useDocRef} from 'modules/firebase/model/useDocRef';
import {Form} from 'modules/form/components/Form';
import {AuthForm} from 'modules/user/components/AuthForm';
import {TUser} from 'modules/user/lib/types';
import React, {useCallback, useMemo} from 'react';
import {DefaultValues, SubmitHandler} from 'react-hook-form';

export const Auth = () => {
  const anonymously = useAnonymouslyContext();
  const userDocRef = useDocRef<TUser>('user', anonymously.uid);
  const defaultValues = useMemo<DefaultValues<TUser>>(() => {
    return {name: ''};
  }, []);

  const onSubmit = useCallback<SubmitHandler<TUser>>(
    (values) => {
      return setDoc(userDocRef, values);
    },
    [userDocRef]
  );

  return (
    <Form defaultValues={defaultValues} onSubmit={onSubmit}>
      <AuthForm />
    </Form>
  );
};
