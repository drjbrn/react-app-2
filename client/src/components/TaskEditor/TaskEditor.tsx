import dayjs from 'dayjs';
import {
  Controller,
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { Button, Input, Modal, Select } from '@components/UI';
import Datepicker from 'react-tailwindcss-datepicker';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { TaskEditorForm, TaskEditorProps, DateValueType } from '@/types';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { closeModal } from '@/store/modalSlice';
import { createNewTask, editTask } from '@/store/taskItem/taskItemThunks';
import { getAllColumns } from '@/store/taskColumn/taskColumnThunks';
import { priorityList } from '@/constans/priorityList';

export const TaskEditor = ({ isNewTask, isEdit, taskId }: TaskEditorProps) => {
  const { boardId } = useParams();
  const dispatch = useAppDispatch();
  const taskData = useAppSelector((state) => state.taskItem.task);
  const columnList = useAppSelector((state) => state.taskColumn.columnList);
  const [correctDate, setCorrectDate] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: DateValueType) => {
    setCorrectDate(newValue);
  };

  const methods = useForm({
    mode: 'onChange',
  });

  const handleCloseModal = () => {
    methods.reset();
    dispatch(closeModal('createNewTask'));
    dispatch(closeModal(`editTask_${taskId}`));
  };

  const onSubmit = async (data: TaskEditorForm) => {
    if (isNewTask) {
      const formattedData = {
        title: data.title,
        description: data.description,
        priority: data.priority.value,
        dueDate: dayjs(correctDate?.startDate).format('DD.MM.YYYY'),
        column: data.column.id,
      };

      await dispatch(createNewTask(formattedData));
      toast.success(`Success! You've created the new task.`);
      handleCloseModal();
      if (boardId) {
        dispatch(getAllColumns(+boardId));
      }
    }

    if (isEdit && taskId) {
      const formattedData = {
        taskId,
        title: data.title,
        description: data.description,
        priority: data.priority.value,
        dueDate:
          correctDate?.startDate === null
            ? taskData?.dueDate
            : dayjs(correctDate?.startDate).format('DD.MM.YYYY'),
        column: data.column.id,
      };

      await dispatch(editTask(formattedData));
      toast.success(`Success! You've edited the task.`);
      handleCloseModal();
      if (boardId) {
        dispatch(getAllColumns(+boardId));
      }
    }
  };

  return (
    <Modal modalId={isNewTask ? 'createNewTask' : `editTask_${taskId}`}>
      <>
        <h4 className='self-start text-xl font-medium leading-[1.375rem] mb-8'>
          {isNewTask ? 'Create new task' : 'Edit task'}
        </h4>

        <FormProvider {...methods}>
          <form
            id='login'
            className='w-[250px] sm:w-[60vh] lg:w-[500px] flex flex-col items-start gap-6'
            onSubmit={(e) => e.preventDefault()}
          >
            <Controller
              name='column'
              defaultValue={isEdit && taskData?.column.title}
              control={methods.control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <div className='form-wrap'>
                  <h6>Choose list</h6>
                  <Select
                    list={columnList}
                    placeholder={isEdit ? taskData?.column.title : 'List'}
                    className='py-3'
                    onOptionSelect={({ id, value }) => {
                      field.onChange({
                        id,
                        value,
                      });
                    }}
                  />
                </div>
              )}
            />
            <Controller
              name='title'
              defaultValue={isEdit ? taskData?.title : ''}
              control={methods.control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <div className='form-wrap'>
                  <h6>Task name</h6>
                  <Input field={field} id='title' placeholder='Task name' />
                </div>
              )}
            />
            <Controller
              name='description'
              defaultValue={isEdit && taskData?.description}
              control={methods.control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <div className='form-wrap'>
                  <h6>Description</h6>
                  <textarea
                    {...field}
                    maxLength={1000}
                    placeholder='Task description'
                    className='h-32 resize-none py-3 px-4 block w-full border-2 border-solid border-[#f4f4f4] rounded text-sm focus:border-blue-700 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600'
                  />
                </div>
              )}
            />
            <Controller
              name='priority'
              defaultValue={isEdit && taskData?.priority}
              control={methods.control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <div className='form-wrap'>
                  <h6>Priority</h6>
                  <Select
                    list={priorityList}
                    placeholder={isEdit ? taskData?.priority : 'Priority'}
                    className='py-3 z-[9]'
                    onOptionSelect={({ id, value }) => {
                      field.onChange({
                        id,
                        value,
                      });
                    }}
                  />
                </div>
              )}
            />
            <Controller
              name='dueDate'
              defaultValue={isEdit && taskData?.dueDate}
              control={methods.control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <div className='form-wrap'>
                  <h6>Due date</h6>
                  <Datepicker
                    useRange={false}
                    asSingle
                    displayFormat='DD.MM.YYYY'
                    placeholder={
                      isEdit ? (taskData?.dueDate as string) : undefined
                    }
                    value={correctDate}
                    onChange={(newValue) => {
                      handleValueChange(newValue);
                      field.onChange(newValue);
                    }}
                    inputClassName='w-full border-2 border-solid border-[#f4f4f4] rounded text-sm focus:border-blue-700 focus:ring-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 py-3 px-4 placeholder-[#818181]'
                  />
                </div>
              )}
            />

            <Button
              type='submit'
              label={isNewTask ? 'Create' : 'Submit'}
              className='max-w-[12rem] w-full justify-center self-end'
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
