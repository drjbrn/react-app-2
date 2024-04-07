import { configureStore } from '@reduxjs/toolkit';
import modalSlice from './modalSlice';
import boardSlice from './board/boardSlice';
import taskItemSlice from './taskItem/taskItemSlice';
import taskColumnSlice from './taskColumn/taskColumnSlice';
import historySlice from './history/historySlice';

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    board: boardSlice,
    taskItem: taskItemSlice,
    taskColumn: taskColumnSlice,
    history: historySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
