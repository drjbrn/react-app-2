import {
  FolderOpenIcon,
  PencilSquareIcon,
  ArchiveBoxXMarkIcon,
} from '@heroicons/react/24/outline';
import { Menu } from '@headlessui/react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  getBoardById,
  deleteBoard,
  getAllBoard,
} from '@/store/board/boardThunks';
import { openModal } from '@/store/modalSlice';
import { getAllColumns } from '@/store/taskColumn/taskColumnThunks';
import { BoardCardProps } from '@/types';
import { DropdownMenu } from '../UI';

export const BoardCard = ({ setSelectedBoard }: BoardCardProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const boardList = useAppSelector((state) => state.board.allData);

  const handleOpenBoard = async (id: number) => {
    await dispatch(getBoardById(id));
    dispatch(getAllColumns(id));
    navigate(`/board/${id}`);
  };

  const handleEditBoard = async (id: number) => {
    if (setSelectedBoard) {
      setSelectedBoard(id);
    }
    await dispatch(getBoardById(id));
    dispatch(openModal(`editBoard_${id}`));
  };

  const handleDeleteBoard = async (id: number) => {
    await dispatch(deleteBoard(id));
    toast.warning(`Board successfully deleted.`);
    dispatch(getAllBoard());
  };

  const items = [
    {
      buttonId: 1,
      icon: <FolderOpenIcon className='h-4 w-4' aria-hidden='true' />,
      label: 'Open',
      onClick: (id: number) => handleOpenBoard(id),
    },
    {
      buttonId: 2,
      icon: <PencilSquareIcon className='h-4 w-4' aria-hidden='true' />,
      label: 'Edit',
      onClick: (id: number) => handleEditBoard(id),
    },
    {
      buttonId: 3,
      icon: <ArchiveBoxXMarkIcon className='h-4 w-4' aria-hidden='true' />,
      label: 'Remove',
      onClick: (id: number) => handleDeleteBoard(id),
    },
  ];

  return (
    <section>
      <ul className='flex gap-4 flex-wrap'>
        {boardList.map(({ id, title, column }) => (
          <li
            key={id}
            className='font-montserrat max-w-[300px] w-full grid gap-4 border rounded p-4 border-solid border-[#f4f4f4] bg-white'
          >
            <div className='flex justify-between items-center flex-wrap gap-4'>
              <button
                type='button'
                onClick={() => handleOpenBoard(id)}
                className='font-medium text-[18px]'
              >
                {title}
              </button>
              <DropdownMenu>
                <div className='flex flex-col items-start gap-2 px-3 py-2'>
                  {items.map(({ buttonId, icon, label, onClick }, index) => (
                    <Menu.Item key={buttonId}>
                      <button
                        type='button'
                        onClick={() => onClick(id)}
                        className={`flex items-center gap-2 ${
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
            <p className='text-sm flex items-center gap-2'>
              Number of tasks:
              <span className='font-medium'>
                {column &&
                  column
                    .map(({ tasks }) => tasks?.length ?? 0)
                    .reduce((acc, currentValue) => acc + currentValue, 0)}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};
