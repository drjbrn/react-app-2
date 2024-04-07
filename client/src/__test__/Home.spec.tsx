import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { HomePage } from '@/pages';

const mockStore = configureMockStore([]);

describe('Render Home Page', () => {
  test('should be render home page with heading and button', () => {
    const store = mockStore({
      board: {
        allData: [],
      },
      modal: {
        createNewBoard: false,
      },
    });

    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );

    expect(
      screen.getByRole('heading', { name: 'Task Management' }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: 'Create new board' }),
    ).toBeInTheDocument();
  });
});

describe('Home Page actions', () => {
  it('should be open modal when create new board button is clicked', () => {
    const store = mockStore({
      board: {
        allData: [],
      },
      modal: {
        createNewBoard: false,
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );

    fireEvent.click(getByText('Create new board'));

    expect(store.getActions()).toEqual([
      { type: 'modal/openModal', payload: 'createNewBoard' },
    ]);
  });
});

describe('Home Page empty', () => {
  it('should be displayed text if the board data is empty', () => {
    const store = mockStore({
      board: {
        allData: [],
      },
      modal: {
        createNewBoard: false,
      },
    });

    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );

    expect(
      screen.getByRole('heading', {
        name: 'Oops, it looks like you have not created any boards yet :(',
      }),
    ).toBeInTheDocument();
  });
});

describe('Home Page with boards', () => {
  it('should be displayed a list of boards if they are available', () => {
    const store = mockStore({
      board: {
        allData: [
          {
            id: 1,
            title: 'New board 1',
            columns: [],
          },
          {
            id: 2,
            title: 'New board 2',
            columns: [],
          },
        ],
      },
      modal: {
        createNewBoard: false,
      },
    });

    render(
      <Provider store={store}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </Provider>,
    );

    const boardTitles = screen.getAllByText(/New board \d+/i);
    expect(boardTitles).toHaveLength(2);
  });
});
