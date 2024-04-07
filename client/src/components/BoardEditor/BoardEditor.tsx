import {
  useForm,
  FormProvider,
  Controller,
  SubmitHandler,
  FieldValues,
} from 'react-hook-form';
import { toast } from 'react-toastify';
import { closeModal } from '@/store/modalSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  createNewBoard,
  editBoard,
  getAllBoard,
  getBoardById,
} from '@/store/board/boardThunks';
import { BoardEditorProps, FormEditorTitleData } from '@/types';
import { Button, Input, Modal } from '../UI';

export const BoardEditor = ({ isNew, isEdit, boardId }: BoardEditorProps) => {
  const dispatch = useAppDispatch();
  const board = useAppSelector((state) => state.board.boardItemData);

  const methods = useForm({
    mode: 'onChange',
  });

  const handleCloseModal = () => {
    methods.reset();
    dispatch(closeModal('createNewBoard'));
    dispatch(closeModal(`editBoard_${boardId}`));
  };

  const onSubmit = async (data: FormEditorTitleData) => {
    if (isNew) {
      await dispatch(createNewBoard(data.title));
      toast.success(`Success! You've create new board '${data.title}'.`);
      handleCloseModal();
      dispatch(getAllBoard());
    }

    if (isEdit && boardId) {
      const formattedData = {
        boardId,
        title: data.title,
      };

      await dispatch(editBoard(formattedData));
      toast.success(`Success! You've changed the board title.`);
      handleCloseModal();
      dispatch(getAllBoard());
      dispatch(getBoardById(boardId));
    }
  };

  return (
    <Modal
      modalId={isNew ? 'createNewBoard' : `editBoard_${boardId}`}
      className=''
    >
      <>
        <h4 className='font-medium text-[18px] mb-8'>
          {isNew ? 'Create new board' : 'Edit board'}
        </h4>

        <FormProvider {...methods}>
          <form
            id='board'
            className='w-[250px] sm:w-[350px] flex flex-col gap-4'
            onSubmit={(e) => e.preventDefault()}
          >
            <Controller
              name='title'
              defaultValue={isEdit ? board?.title : ''}
              control={methods.control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <Input field={field} id='title' placeholder='Board title' />
              )}
            />

            <Button
              type='submit'
              label={isNew ? 'Create' : 'Submit'}
              onClick={methods.handleSubmit(
                onSubmit as SubmitHandler<FieldValues>,
              )}
            />
          </form>
        </FormProvider>
      </>
    </Modal>
  );
};
