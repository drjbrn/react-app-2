import { useParams } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import {
  FolderOpenIcon,
  PencilSquareIcon,
  ArchiveBoxXMarkIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline';
import { toast } from 'react-toastify';
import { Select, DropdownMenu } from '@components/UI';
import { TaskItemProps } from '@/types';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { openModal } from '@/store/modalSlice';
import {
  editTask,
  getTaskById,
  removeTask,
} from '@/store/taskItem/taskItemThunks';
import { getAllColumns } from '@/store/taskColumn/taskColumnThunks';
import { getAllHistory, getHistoryById } from '@/store/history/historyThunks';
import { getColorClass } from '@/utils/getColorClass';
import { TaskDetailsModal } from '../TaskDetailsModal/TaskDetailsModal';
import { TaskEditor } from '../TaskEditor/TaskEditor';

export const TaskItem = ({
  taskId,
  title,
  description,
  priority,
  dueDate,
  columnId
}: TaskItemProps) => {
  const { boardId } = useParams();
  const dispatch = useAppDispatch();
  const isOpenEditTaskModal = useAppSelector(
    (state) => state.modal[`editTask_${taskId}`],
  );
  const isOpenTaskDetails = useAppSelector(
    (state) => state.modal[`taskDetails_${taskId}`],
  );

  const columnList = useAppSelector((state) => state.taskColumn.columnList);
  const filteredColumnList = columnList.filter(column => column.id !== columnId);

  const handleDeleteTask = async () => {
    await dispatch(removeTask(+taskId));
    toast.warning(`Task successfully deleted.`);
    if (boardId) {
      dispatch(getAllColumns(+boardId));
    }
  };

  const handleEditTask = async () => {
    await dispatch(getTaskById(+taskId));
    dispatch(openModal(`editTask_${taskId}`));
  };

  const handleMoveTaskToAnotherColumn = async (option: {
    id: number;
    value: string;
  }) => {
    const columnId = option.id;
    const data = {
      taskId: +taskId,
      column: columnId,
    };
    await dispatch(editTask(data));
    if (boardId) {
      dispatch(getAllColumns(+boardId));
    }
  };

  const handleOpenTask = async () => {
    if (boardId) {
      dispatch(getAllHistory(+boardId));
      await dispatch(getHistoryById(+taskId));
      dispatch(openModal(`taskDetails_${taskId}`));
    } else {
      toast.error('Sorry, something went wrong.');
    }
  };

  const items = [
    {
      buttonId: 1,
      icon: <FolderOpenIcon className='h-4 w-4' aria-hidden='true' />,
      label: 'Open',
      onClick: () => handleOpenTask(),
    },
    {
      buttonId: 2,
      icon: <PencilSquareIcon className='h-4 w-4' aria-hidden='true' />,
      label: 'Edit',
      onClick: () => handleEditTask(),
    },
    {
      buttonId: 3,
      icon: <ArchiveBoxXMarkIcon className='h-4 w-4' aria-hidden='true' />,
      label: 'Remove',
      onClick: () => handleDeleteTask(),
    },
  ];

  return (
    <>
      <div className='w-full grid gap-2 rounded bg-white p-4 border-2 border-solid border-[#eeeeee]'>
        <div className='flex justify-between'>
          <h4 className='text-xl font-medium'>{title}</h4>
          <DropdownMenu>
            <div className='flex flex-col items-start gap-2 px-3 py-2'>
              {items.map(({ buttonId, icon, label, onClick }, index) => (
                <Menu.Item key={buttonId}>
                  <button
                    type='button'
                    onClick={onClick}
                    className={`flex items-center gap-2 ${
                      index === items.length - 1 ? 'text-red-600' : ''
                    }`}
                  >
                    {icon}
                    {label}
                  </button>
                </Menu.Item>
              ))}
            </div>
          </DropdownMenu>
        </div>
        <p className='text-xs font-normal whitespace-nowrap overflow-hidden text-ellipsis text-[#828282]'>
          {description}
        </p>
        <div className='flex items-center justify-between gap-4 my-3'>
          <p
            className={`w-fit text-sm font-medium leading-[0.875rem] text-[white] bg-blue-700 px-2 py-[0.3rem] ${getColorClass(
              priority as string,
            )}`}
          >
            {priority}
          </p>
          <div className='flex gap-1 text-[0.938rem] text-[#828282]'>
            <CalendarDaysIcon className='w-5 h-5' />
            {dueDate}
          </div>
        </div>
        <Select
          list={filteredColumnList}
          placeholder='Move to'
          onOptionSelect={handleMoveTaskToAnotherColumn}
        />
      </div>
      {isOpenEditTaskModal && <TaskEditor isEdit taskId={+taskId} />}
      {isOpenTaskDetails && (
        <TaskDetailsModal
          id={+taskId}
          title={title}
          description={description}
          priority={priority}
          dueDate={dueDate}
        />
      )}
    </>
  );
};
