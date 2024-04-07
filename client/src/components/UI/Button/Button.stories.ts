import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import '@/index.css';

const meta: Meta<typeof Button> = {
  title: 'Components/UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'button',
    label: 'Button',
  },
};
