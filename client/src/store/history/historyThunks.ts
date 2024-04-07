import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '@/api/axios.api';
import { setAllHistory, setTaskHistory } from './historySlice';

export const getAllHistory = createAsyncThunk(
  'history/all',
  async (boardId: number, { dispatch }) => {
    try {
      const response = await instance.get(`/activity-log/board/${boardId}`);
      if (response.status === 200) {
        dispatch(setAllHistory(response.data));
      }
    } catch (e) {
      const error = e as Error;
      throw error;
    }
  },
);

export const getHistoryById = createAsyncThunk(
  'history/task-history',
  async (taskId: number, { dispatch }) => {
    try {
      const response = await instance.get(`/activity-log/tasks/${taskId}`);
      if (response.status === 200) {
        dispatch(setTaskHistory(response.data));
      }
    } catch (e) {
      const error = e as Error;
      throw error;
    }
  },
);
