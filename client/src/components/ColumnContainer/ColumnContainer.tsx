import { Droppable, Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Menu } from '@headlessui/react';
import {
  PencilSquareIcon,
  ArchiveBoxXMarkIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import { ColumnContainerProps } from '@/types';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { openModal } from '@/store/modalSlice';
import {
  deleteColumn,
  getAllColumns,
  getColumnById,
} from '@/store/taskColumn/taskColumnThunks';
import { ColumnEditor } from '../ColumnEditor/ColumnEditor';
import { TaskEditor } from '../TaskEditor/TaskEditor';
import { TaskItem } from '../TaskItem/TaskItem';
import { DropdownMenu } from '../UI/DropdownMenu/DropdownMenu';

export const ColumnContainer = ({
  columnId,
  columnTitle,
  tasks,
}: ColumnContainerProps) => {
  const { boardId } = useParams();
  const dispatch = useAppDispatch();
  const isOpenModal = useAppSelector((state) => state.modal.createNewTask);
  const isEditColumn = useAppSelector(
    (state) => state.modal[`editColumn_${columnId}`],
  );

  const handleCreateNewTask = () => {
    dispatch(openModal('createNewTask'));
  };

  const handleEditColumn = async () => {
    await dispatch(getColumnById(columnId));
    dispatch(openModal(`editColumn_${columnId}`));
  };

  const handleDeleteColumn = async () => {
    await dispatch(deleteColumn(columnId));
    toast.warning(`Column successfully deleted.`);
    if (boardId) {
      dispatch(getAllColumns(+boardId));
    }
  };

  const items = [
    {
      buttonId: 1,
      icon: <PencilSquareIcon className='h-4 w-4' aria-hidden='true' />,
      label: 'Edit',
      onClick: () => handleEditColumn(),
    },
    {
      buttonId: 2,
      icon: <ArchiveBoxXMarkIcon className='h-4 w-4' aria-hidden='true' />,
      label: 'Remove',
      onClick: () => handleDeleteColumn(),
    },
  ];

  return (
    <>
      <section className='w-[21.875rem] h-[79vh] min-h-[31.25rem] flex flex-col items-center gap-4 border rounded p-4 border-solid border-[#f4f4f4] bg-[#fdfdfd]'>
        <div className='w-full grid grid-cols-[auto_repeat(2,25px)] items-start'>
          <h4 className='font-medium text-[22px] uppercase'>{columnTitle}</h4>
          {tasks && (
            <p className='justify-self-center font-medium'>{tasks.length}</p>
          )}
          <DropdownMenu>
            <div className='flex flex-col items-start gap-2 px-3 py-2'>
              {items.map(({ buttonId, icon, label, onClick }, index) => (
                <Menu.Item key={buttonId}>
                  <button
                    type='button'
                    onClick={onClick}
                    className={`flex items-center gap-2 mt-0.5 ${
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
        <button
          type='button'
          className='w-full flex items-center justify-center gap-2 border-blue-700 px-0 py-1 border-2 border-solid'
          onClick={handleCreateNewTask}
        >
          <PlusIcon className='h-4 w-4' aria-hidden='true' />
          Add new card
        </button>
        <Droppable droppableId={String(columnId)}>
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className='w-full grid gap-2 overflow-y-auto overflow-x-hidden h-full scrollbar-hide'
            >
              {tasks &&
                tasks.map(({ id, title, description, priority, dueDate }) => (
                  <Draggable
                    key={String(id)}
                    draggableId={String(id)}
                    index={id}
                  >
                    {(provided: DraggableProvided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TaskItem
                          taskId={id}
                          title={title}
                          description={description}
                          priority={priority}
                          dueDate={dueDate}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </section>
      {isOpenModal && <TaskEditor isNewTask />}
      {isEditColumn && <ColumnEditor isEdit columnId={+columnId} />}
    </>
  );
};
