import { useEffect } from 'react';
import { redirect, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getBoardById } from '@/store/board/boardThunks';
import { getAllColumns } from '@/store/taskColumn/taskColumnThunks';
import { TaskBoard } from '@/components/TaskBoard';

export const BoardPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.board.boardItemData);
  const isError = useAppSelector((state) => state.board.isError);
  const columns = useAppSelector((state) => state.taskColumn.allData);
  const { boardId } = useParams();

  useEffect(() => {
    if (boardId) {
      dispatch(getBoardById(+boardId));
      dispatch(getAllColumns(+boardId));
    }

    if (isError) {
      navigate('*');
    }
  }, [boardId, isError]);

  return (
    <section>
      <TaskBoard boardTitle={data.title} columnList={columns} />
    </section>
  );
};
