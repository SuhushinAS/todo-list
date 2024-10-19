import {deleteDoc} from 'firebase/firestore';
import {SvgIcon} from 'modules/common/components/SvgIcon';
import {useDocRef} from 'modules/firebase/model/useDocRef';
import {Button} from 'modules/form/components/Button';
import {Permission} from 'modules/permission/components/Permission';
import {TPermission} from 'modules/permission/lib/types';
import React, {useCallback} from 'react';

type Props = {
  taskId: string;
};

export const TaskListItemDeleteCol = ({taskId}: Props) => {
  const taskDocRef = useDocRef('task', taskId);

  const onTaskDelete = useCallback(() => {
    return deleteDoc(taskDocRef);
  }, [taskDocRef]);

  return (
    <Permission permission={TPermission.TaskDelete}>
      <td className="Table__Cell Table__Cell_Control Table__Cell_Control_Fixed">
        <Button
          className="Button_Danger offset_ver"
          onClick={onTaskDelete}
          type="button"
        >
          <SvgIcon name="close" />
        </Button>
      </td>
    </Permission>
  );
};
