import type { Meta, StoryObj } from '@storybook/react';

import { priorityList } from '@/constans/priorityList';
import { Select } from './Select';
import '@/index.css';

const meta: Meta<typeof Select> = {
  title: 'Components/UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select list={priorityList} placeholder='Priority' className='w-40' />
  ),
};
