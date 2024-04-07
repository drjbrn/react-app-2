import type { Meta, StoryObj } from '@storybook/react';

import { Provider } from 'react-redux';
import { store } from '@/store';
import { TaskEditor } from './TaskEditor';
import '../../index.css';

const MockedStore = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);

const meta: Meta<typeof TaskEditor> = {
  title: 'Components/TaskEditor',
  component: TaskEditor,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CreateNewTask: Story = {
  render: () => (
    <MockedStore>
      <TaskEditor isNewTask />
    </MockedStore>
  ),
};