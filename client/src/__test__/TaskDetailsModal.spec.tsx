import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import { TaskDetailsModal } from '@/components/TaskDetailsModal/TaskDetailsModal';

const mockStore = configureMockStore([]);

describe('Render TaskDetailsModal component', () => {
  it('should be render board edit component, when create new board button is clicked', () => {
    const store = mockStore({
      history: {
        taskHistory: [],
      },
    });

    render(
      <Provider store={store}>
        <TaskDetailsModal
          id={1}
          title='New Task'
          description='Some desc for this task'
          priority='Medium'
          dueDate='24.04.2024'
        />
      </Provider>,
    );

    expect(
      screen.getByRole('heading', { name: 'New Task' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument();
    expect(screen.getByText('Some desc for this task')).toBeInTheDocument();
    expect(screen.getByText('Medium')).toBeInTheDocument();
    expect(screen.getByText('24.04.2024')).toBeInTheDocument();
  });
});
