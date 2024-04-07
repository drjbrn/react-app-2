import {
  useForm,
  FormProvider,
  Controller,
  SubmitHandler,
  FieldValues,
} from 'react-hook-form';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { Input, Button, Modal } from '@components/UI';
import { closeModal } from '@/store/modalSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  createNewColumn,
  editColumn,
  getAllColumns,
} from '@/store/taskColumn/taskColumnThunks';
import { ColumnEditorProps, FormEditorTitleData } from '@/types';

export const ColumnEditor = ({
  isNewColumn,
  isEdit,
  columnId,
}: ColumnEditorProps) => {
  const { boardId } = useParams();
  const dispatch = useAppDispatch();
  const columnData = useAppSelector(
    (state) => state.taskColumn.columnItemData,
  );

  const methods = useForm({
    mode: 'onChange',
  });

  const handleCloseModal = () => {
    methods.reset();
    dispatch(closeModal('addNewColumn'));
    dispatch(closeModal(`editColumn_${columnId}`));
  };

  const onSubmit = async (data: FormEditorTitleData) => {
    if (isNewColumn && boardId) {
      const formattedData = {
        board: +boardId,
        title: data.title,
      };

      await dispatch(createNewColumn(formattedData));
      toast.success(`Success! You've create the column.`);
      handleCloseModal();
      if (boardId) {
        dispatch(getAllColumns(+boardId));
      }
    }

    if (isEdit && columnId) {
      const formattedData = {
        columnId,
        title: data.title,
      };

      await dispatch(editColumn(formattedData));
      toast.success(`Success! You've changed the column title.`);
      handleCloseModal();
      if (boardId) {
        dispatch(getAllColumns(+boardId));
      }
    }
  };

  return (
    <Modal modalId={isNewColumn ? 'addNewColumn' : `editColumn_${columnId}`}>
      <>
        <h4 className='font-medium text-[18px] mb-8'>
          {isNewColumn ? 'Create new list' : 'Edit list'}
        </h4>

        <FormProvider {...methods}>
          <form
            id='column'
            className='w-[250px] sm:w-[350px] flex flex-col gap-4'
            onSubmit={(e) => e.preventDefault()}
          >
            <Controller
              name='title'
              defaultValue={isEdit ? columnData?.title : ''}
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
              label={isNewColumn ? 'Create' : 'Submit'}
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
