import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import { BoardEditor } from '@/components/BoardEditor/BoardEditor';

const mockStore = configureMockStore([]);

describe('Render Board Editor', () => {
  it('should be render board edit component, when create new board button is clicked', () => {
    const store = mockStore({
      board: {
        boardItemData: [],
      },
      modal: {
        createNewBoard: true,
        editBoard_0: false,
      },
    });

    render(
      <Provider store={store}>
        <BoardEditor isNew />
      </Provider>,
    );

    expect(
      screen.getByRole('heading', { name: 'Create new board' }),
    ).toBeInTheDocument();

    expect(screen.getByPlaceholderText('Board title')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: 'Create' })).toBeInTheDocument();
  });
});

describe('Render Board Editor', () => {
  it('should be render board edit component, when create new board button is clicked', () => {
    const store = mockStore({
      board: {
        boardItemData: [
          {
            id: 1,
            title: 'New board 1',
            columns: [],
          },
        ],
      },
      modal: {
        createNewBoard: false,
        editBoard_0: true,
      },
    });

    render(
      <Provider store={store}>
        <BoardEditor isEdit boardId={1} />
      </Provider>,
    );

    expect(
      screen.getByRole('heading', { name: 'Edit board' }),
    ).toBeInTheDocument();

    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });
});
