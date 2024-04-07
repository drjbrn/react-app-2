import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import '@/index.css';

const meta: Meta<typeof Input> = {
  title: 'Components/UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    id: 'title',
    placeholder: 'Your text',
  },
};
