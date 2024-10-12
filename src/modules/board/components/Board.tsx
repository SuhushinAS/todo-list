import {Auth} from 'modules/user/components/Auth';
import {useUserOnline} from 'modules/user/model/useUserOnline';
import {useUserSelf} from 'modules/user/model/useUserSelf';
import React from 'react';

export const Board = () => {
  const user = useUserSelf();
  useUserOnline();

  if (user === undefined) {
    return null;
  }

  if (!user.exists()) {
    return <Auth />;
  }

  return <div>Board</div>;
};
