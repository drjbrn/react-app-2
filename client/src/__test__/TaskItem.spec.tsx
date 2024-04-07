import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { TaskItem } from '@/components/TaskItem/TaskItem';

const mockStore = configureMockStore([]);

describe('Render TaskDetailsModal component with activity log', () => {
  it('should be render board edit component, when create new board button is clicked', () => {
    const store = mockStore({
      modal: {
        editTask: false,
        taskDetails_0: false,
      },
      taskColumn: {
        columnList: [],
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <TaskItem
            taskId={5}
            title='New task item'
            description='Some desc for new task item'
            priority='Medium'
            dueDate='24.04.2024'
          />
        </BrowserRouter>
      </Provider>,
    );

    expect(
      screen.getByRole('heading', { name: 'New task item' }),
    ).toBeInTheDocument();

    expect(screen.getByText('Some desc for new task item')).toBeInTheDocument();

    expect(screen.getByText('Medium')).toBeInTheDocument();

    expect(screen.getByText('24.04.2024')).toBeInTheDocument();
  });
});
