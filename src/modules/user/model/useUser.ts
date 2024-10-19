import {DocumentSnapshot, onSnapshot} from 'firebase/firestore';
import {useDocRef} from 'modules/firebase/model/useDocRef';
import {TUser} from 'modules/user/lib/types';
import {useEffect, useState} from 'react';

export const useUser = (userId: string) => {
  const [user, setUser] = useState<DocumentSnapshot>();
  const userDocRef = useDocRef<TUser>('user', userId);

  useEffect(() => {
    return onSnapshot(userDocRef, setUser);
  }, [userDocRef]);

  return user;
};
