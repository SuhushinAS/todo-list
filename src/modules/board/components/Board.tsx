import {BoardItemPermission} from 'modules/board/components/BoardItemPermission';
import {Boards} from 'modules/board/components/Boards';
import {boardPath} from 'modules/board/lib/constants';
import {Auth} from 'modules/user/components/Auth';
import {useUserOnline} from 'modules/user/model/useUserOnline';
import {useUserSelf} from 'modules/user/model/useUserSelf';
import React from 'react';
import {Route, Routes} from 'react-router-dom';

export const Board = () => {
  const user = useUserSelf();
  useUserOnline();

  if (user === undefined) {
    return null;
  }

  if (!user.exists()) {
    return <Auth />;
  }

  return (
    <Routes>
      <Route
        element={<BoardItemPermission userId={user.id} />}
        path={boardPath.item}
      />
      <Route
        element={<Boards userId={user.id} />}
        path={`${boardPath.home}*`}
      />
    </Routes>
  );
};
