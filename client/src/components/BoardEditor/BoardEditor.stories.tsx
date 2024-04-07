import type { Meta, StoryObj } from '@storybook/react';

import { Provider } from 'react-redux';
import { store } from '@/store';
import { BoardEditor } from './BoardEditor';
import '../../index.css';

const MockedStore = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);

const meta: Meta<typeof BoardEditor> = {
  title: 'Components/BoardEditor',
  component: BoardEditor,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CreateBoard: Story = {
  render: () => (
    <MockedStore>
      <BoardEditor isNew />
    </MockedStore>
  ),
};

export const EditBoard: Story = {
  render: () => (
    <MockedStore>
      <BoardEditor isEdit boardId={1} />
    </MockedStore>
  ),
};
