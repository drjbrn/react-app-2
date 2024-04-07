import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useParams } from 'react-router-dom';
import { Button } from '@components/UI';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { openModal } from '@/store/modalSlice';
import { getAllHistory } from '@/store/history/historyThunks';
import { editTask } from '@/store/taskItem/taskItemThunks';
import { getAllColumns } from '@/store/taskColumn/taskColumnThunks';
import { TaskBoardProps } from '@/types';
import { ColumnContainer } from '../ColumnContainer/ColumnContainer';
import { ColumnEditor } from '../ColumnEditor/ColumnEditor';
import { HistoryOverlay } from '../HistoryOverlay';
import { BoardEditor } from '../BoardEditor/BoardEditor';

export const TaskBoard = ({ boardTitle, columnList }: TaskBoardProps) => {
  const { boardId } = useParams();
  const dispatch = useAppDispatch();
  const isOpenModal = useAppSelector((state) => state.modal.addNewColumn);
  const isOpenHistory = useAppSelector((state) => state.modal.history);
  const isEditBoard = useAppSelector(
    (state) => state.modal[`editBoard_${boardId}`],
  );

  const handleEditBoardTitle = () => {
    dispatch(openModal(`editBoard_${boardId}`));
  };

  const handleAddColumn = () => {
    dispatch(openModal('addNewColumn'));
  };

  const handleOpenHistory = async () => {
    if (boardId) {
      await dispatch(getAllHistory(+boardId));
      dispatch(openModal('history'));
    } else {
      toast.error('Sorry, something went wrong.');
    }
  };

  const onDragEnd = async (result: any) => {
    const { draggableId, source, destination } = result;
    const taskId = draggableId;
    const sourceColumnId = source.droppableId;
    const destinationColumnId = destination?.droppableId;

    if (sourceColumnId !== destinationColumnId) {
      const newData = {
        taskId,
        column: destinationColumnId,
      };
      await dispatch(editTask(newData));
      toast.success(`Task successfully moved to another column.`);
      if (boardId) {
        dispatch(getAllColumns(+boardId));
      }
    }
  };

  return (
    <>
      <section className='grid gap-8 mx-0 my-4'>
        <div className='max-w-[1440px] w-full flex justify-between items-center flex-wrap gap-4 border p-3 rounded border-solid border-[#f4f4f4] bg-white'>
          <div className='flex items-center gap-3'>
            <h1 className='text-2xl font-semibold leading-6 uppercase'>
              {boardTitle}
            </h1>
            <button type='button' onClick={handleEditBoardTitle}>
              <PencilSquareIcon className='h-5 w-5' aria-hidden='true' />
            </button>
          </div>

          <div className='flex items-center gap-4'>
            <Button label='History' onClick={handleOpenHistory} />
            <Button label='Create new list' onClick={handleAddColumn} />
          </div>
        </div>
        <DragDropContext onDragEnd={onDragEnd}>
          <ul className='w-full flex gap-8 justify-start overflow-y-hidden overflow-x-auto scrollbar-hide'>
            {columnList.map(({ id, title, tasks }) => (
              <li key={id}>
                <Droppable droppableId={String(id)} key={String(id)}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      <ColumnContainer
                        columnTitle={title}
                        tasks={tasks}
                        columnId={id}
                      />
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </li>
            ))}
          </ul>
        </DragDropContext>
      </section>
      {isOpenModal && <ColumnEditor isNewColumn />}
      {isOpenHistory && <HistoryOverlay />}
      {isEditBoard && boardId && <BoardEditor isEdit boardId={+boardId} />}
    </>
  );
};
