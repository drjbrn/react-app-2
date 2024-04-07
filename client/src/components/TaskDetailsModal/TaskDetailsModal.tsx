import dayjs from 'dayjs';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import { Modal } from '@components/UI';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { closeModal, openModal } from '@/store/modalSlice';
import { getTaskById } from '@/store/taskItem/taskItemThunks';
import { TaskDetailsModalProps } from '@/types';

export const TaskDetailsModal = ({
  id,
  title,
  description,
  priority,
  dueDate,
}: TaskDetailsModalProps) => {
  const dispatch = useAppDispatch();
  const history = useAppSelector((state) => state.history.taskHistory);

  const handleEditTask = async () => {
    await dispatch(getTaskById(+id));
    dispatch(closeModal(`taskDetails_${id}`));
    dispatch(openModal('editTask'));
  };

  return (
    <Modal modalId={`taskDetails_${id}`}>
      <div className='w-[250px] sm:w-[60vh] lg:w-[500px] flex flex-col items-start gap-4 sm:gap-8 h-full overflow-y-auto'>
        <div className='w-full grid gap-4'>
          <div className='flex flex-wrap justify-between items-center gap-4 mb-2 sm:mb-4'>
            <h4 className='font-medium text-[20px]'>{title}</h4>
            <button
              type='button'
              onClick={() => handleEditTask()}
              className='flex items-center gap-2 border rounded px-3 py-[0.2rem] border-solid border-[#828282]'
            >
              <PencilSquareIcon className='h-4 w-4' aria-hidden='true' />
              Edit
            </button>
          </div>
          <div className='grid grid-cols-[1fr] gap-[0.2rem] sm:grid-cols-[100px_1fr] sm:gap-8'>
            <span className='text-sm font-normal leading-4 text-[#828282]'>
              Description:
            </span>
            <p className='max-w-[300px] w-full overflow-hidden'>
              {description}
            </p>
          </div>
          <div className='grid grid-cols-[1fr] gap-[0.2rem] sm:grid-cols-[100px_1fr] sm:gap-8'>
            <span className='text-sm font-normal leading-4 text-[#828282]'>
              Due Date:
            </span>
            <p className='max-w-[300px] w-full overflow-hidden'>{dueDate}</p>
          </div>
          <div className='grid grid-cols-[1fr] gap-[0.2rem] sm:grid-cols-[100px_1fr] sm:gap-8'>
            <span className='text-sm font-normal leading-4 text-[#828282]'>
              Priority:
            </span>
            <p className='max-w-[300px] w-full overflow-hidden'>{priority}</p>
          </div>
        </div>

        <div className='w-full grid gap-4 before:content-[""] before:block before:w-full before:h-px before:bg-[#828282] before:rounded-lg'>
          <h4 className='text-xl font-medium leading-[1.375rem]'>Activity</h4>
          {history && (
            <ul className='min-h-fit grid gap-2 overflow-y-scroll overflow-x-hidden scrollbar-hide'>
              {history.map(({ id, details, timestamp }) => (
                <li
                  key={id}
                  className='grid items-start gap-2 grid-cols-[5px_150px_1fr] sm:grid-cols-[5px_200px_1fr] before:content-[""] before:block before:bg-[#828282] before:w-[5px] before:h-[5px] before:mt-[7px] before:rounded-[50%]'
                >
                  <p className='text-sm'>{details}</p>
                  <p className='justify-self-end'>
                    {dayjs(timestamp).format('DD.MM.YY HH:mm')}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Modal>
  );
};
