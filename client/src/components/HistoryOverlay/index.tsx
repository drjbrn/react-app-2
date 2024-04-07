import dayjs from 'dayjs';
import { useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { closeModal } from '@/store/modalSlice';

export const HistoryOverlay = () => {
  const dispatch = useAppDispatch();
  const history = useAppSelector((state) => state.history.allHistory);

  const handleCloseModal = () => {
    dispatch(closeModal('history'));
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className='w-full h-full flex justify-end items-center fixed bg-[rgba(40,40,40,0.5)] backdrop-blur-[0.5px] z-30 left-0 top-0'>
      <div className='w-[90vw] sm:w-[50vw] xl:w-[650px] h-full bg-white relative p-4'>
        <h4 className='text-xl font-medium mb-8'>History</h4>
        {history && (
          <ul className='max-h-full min-h-fit grid gap-4 overflow-y-scroll overflow-x-hidden scrollbar-hide'>
            {history.map(({ id, details, timestamp }) => (
              <li
                key={id}
                className='grid grid-cols-[5px_minmax(150px,300px)_1fr] items-start gap-2 text-sm before:content-[""] before:block before:bg-[#828282] before:w-[5px] before:h-[5px] before:mt-[7px] before:rounded-[50%]'
              >
                <p>{details}</p>
                <p className='justify-self-end'>
                  {dayjs(timestamp).format('DD.MM.YY HH:mm')}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        type='submit'
        className='absolute p-4 top-0'
        onClick={handleCloseModal}
      >
        <XMarkIcon className='w-5 h-5 fill-black' />
      </button>
    </div>
  );
};
