import type { Meta, StoryObj } from '@storybook/react';

import { Provider } from 'react-redux';
import { store } from '@/store';
import { TaskItem } from './TaskItem';
import '../../index.css';

const MockedStore = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);

const meta: Meta<typeof TaskItem> = {
  title: 'Components/TaskItem',
  component: TaskItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <MockedStore>
      <TaskItem
        taskId={1}
        title='Create stories'
        description='Add storybook to project'
        priority='Medium'
        dueDate='04.04.2024'
      />
    </MockedStore>
  ),
};
