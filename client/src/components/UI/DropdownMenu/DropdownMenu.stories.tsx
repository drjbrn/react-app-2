import type { Meta, StoryObj } from '@storybook/react';

import {
  FolderOpenIcon,
  PencilSquareIcon,
  ArchiveBoxXMarkIcon,
} from '@heroicons/react/24/outline';
import { Menu } from '@headlessui/react';
import { DropdownMenu } from './DropdownMenu';
import '@/index.css';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/UI/DropdownMenu',
  component: DropdownMenu,
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

export const Default: Story = {
  render: () => (
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
  ),
};
