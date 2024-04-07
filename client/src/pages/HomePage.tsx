import { useState } from 'react';
import { BoardEditor } from '@/components/BoardEditor/BoardEditor';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { openModal } from '@/store/modalSlice';
import { Button } from '@/components/UI/Button/Button';
import { BoardCard } from '@/components/BoardCard/BoardCard';

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const boardData = useAppSelector((state) => state.board.allData);
  const [selectedBoard, setSelectedBoard] = useState<number>(0);
  const isCreateNewBoard = useAppSelector(
    (state) => state.modal.createNewBoard,
  );
  const isEditBoard = useAppSelector(
    (state) => state.modal[`editBoard_${selectedBoard}`],
  );

  const handleCreateNewBoard = () => {
    dispatch(openModal('createNewBoard'));
  };

  return (
    <>
      <header className='w-full flex justify-between items-center flex-wrap gap-4 border mb-8 p-3 rounded border-solid border-[#f4f4f4] bg-white'>
        <h1 className='font-lora font-medium text-[28px]'>Task Management</h1>
        <Button label='Create new board' onClick={handleCreateNewBoard} />
      </header>

      {boardData.length === 0 ? (
        <h4 className='text-center font-normal bg-white rounded px-2 py-4'>
          Oops, it looks like you have not created any boards yet :(
        </h4>
      ) : (
        <BoardCard setSelectedBoard={setSelectedBoard} />
      )}

      {isCreateNewBoard && <BoardEditor isNew />}
      {isEditBoard && <BoardEditor isEdit boardId={selectedBoard} />}
    </>
  );
};
