import type { Meta, StoryObj } from '@storybook/react';

import {
  FolderOpenIcon,
  PencilSquareIcon,
  ArchiveBoxXMarkIcon,
} from '@heroicons/react/24/outline';
import { Menu } from '@headlessui/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/store';
import '../../index.css';
import { DropdownMenu } from '../UI';
import { BoardCard } from './BoardCard';

const MockedStore = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>
    <BrowserRouter>{children}</BrowserRouter>
  </Provider>
);

const meta: Meta<typeof BoardCard> = {
  title: 'Components/BoardCard',
  component: BoardCard,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const items = [
  {
    buttonId: 1,
    icon: <FolderOpenIcon className='h-4 w-4' aria-hidden='true' />,
    label: 'Open',
  },
  {
    buttonId: 2,
    icon: <PencilSquareIcon className='h-4 w-4' aria-hidden='true' />,
    label: 'Edit',
  },
  {
    buttonId: 3,
    icon: <ArchiveBoxXMarkIcon className='h-4 w-4' aria-hidden='true' />,
    label: 'Remove',
  },
];

const board = [
  {
    id: 1,
    title: 'New tasks',
    column: [
      {
        id: 2,
        title: 'To Do',
        tasks: [
          {
            id: 44,
            title: 'Create new task',
            description: 'Some desc about task',
            priority: 'Low',
            dueDate: '30.04.2024',
          },
          {
            id: 45,
            title: 'Create new task 2',
            description: 'Some desc about task',
            priority: 'Low',
            dueDate: '30.04.2024',
          },
        ],
      },
    ],
  },
];

export const Default: Story = {
  render: () => (
    <MockedStore>
      <section>
        <ul className='flex gap-4 flex-wrap'>
          {board.map(({ id, title, column }) => (
            <li
              key={id}
              className='font-montserrat w-[300px] grid gap-4 border rounded p-4 border-solid border-[#f4f4f4] bg-white'
            >
              <div className='flex justify-between items-center flex-wrap gap-4'>
                <h4 className='font-medium text-[18px]'>{title}</h4>
                <DropdownMenu>
                  <div className='flex flex-col items-start gap-2 px-3 py-2'>
                    {items.map(({ buttonId, icon, label }, index) => (
                      <Menu.Item key={buttonId}>
                        <button
                          type='button'
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
                  {column
                    .map(({ tasks }) => tasks.length)
                    .reduce((acc, currentValue) => acc + currentValue, 0)}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </MockedStore>
  ),
};
