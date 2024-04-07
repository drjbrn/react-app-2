import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppDispatch } from './store/hooks';
import { getAllBoard } from './store/board/boardThunks';
import { HomePage, BoardPage, ErrorPage } from './pages';

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        toast.info('Loading data...', { autoClose: false });
        await dispatch(getAllBoard());
        toast.dismiss();
      } catch (error) {
        toast.error('An error occurred while loading data');
      }
    };

    fetchData();
  }, []);

  return (
    <main className='container max-w-[1220px] px-3 py-4 mx-auto my-0'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/board/:boardId' element={<BoardPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <ToastContainer position='top-right' autoClose={2500} />
    </main>
  );
};
