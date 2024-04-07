import type { Meta, StoryObj } from '@storybook/react';

import { Provider } from 'react-redux';
import { store } from '@/store';
import { TaskDetailsModal } from './TaskDetailsModal';
import '../../index.css';

const MockedStore = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);

const meta: Meta<typeof TaskDetailsModal> = {
  title: 'Components/TaskDetailsModal',
  component: TaskDetailsModal,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <MockedStore>
      <TaskDetailsModal
        id={1}
        title='Task 1'
        description='Create new tasks'
        priority='Low'
        dueDate='22.04.2024'
      />
    </MockedStore>
  ),
};
