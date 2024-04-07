import { useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ModalProps } from '@/types';
import { useAppDispatch } from '@/store/hooks';
import { closeModal } from '@/store/modalSlice';

export const Modal = ({ modalId, children, className }: ModalProps) => {
  const dispatch = useAppDispatch();
  const handleCloseModal = () => {
    dispatch(closeModal(modalId));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCloseModal();
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      className='w-full h-full flex justify-center items-center fixed bg-[rgba(40,40,40,0.5)] backdrop-blur-[0.5px] z-30 left-0 top-0'
      role='dialog'
      aria-label='modal'
      aria-modal='true'
    >
      <div
        className={`max-h-[80vh] max-w-fit w-full relative overflow-y-auto rounded-lg scrollbar-hide ${className}`}
      >
        <div className='flex flex-col justify-center items-center bg-white p-10'>
          {children}
        </div>
        <button
          type='submit'
          className='absolute p-2.5 right-0 top-0'
          onClick={handleCloseModal}
        >
          <XMarkIcon className='w-6 h-6 fill-black' />
        </button>
      </div>
    </div>
  );
};
