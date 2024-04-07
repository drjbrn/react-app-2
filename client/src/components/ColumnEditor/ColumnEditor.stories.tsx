import type { Meta, StoryObj } from '@storybook/react';

import { Provider } from 'react-redux';
import { store } from '@/store';
import { ColumnEditor } from './ColumnEditor';
import '../../index.css';

const MockedStore = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);

const meta: Meta<typeof ColumnEditor> = {
  title: 'Components/ColumnEditor',
  component: ColumnEditor,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CreateColumn: Story = {
  render: () => (
    <MockedStore>
      <ColumnEditor isNewColumn />
    </MockedStore>
  ),
};

export const EditColumn: Story = {
  render: () => (
    <MockedStore>
      <ColumnEditor isEdit columnId={2} />
    </MockedStore>
  ),
};
