import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '@/api/axios.api';
import { setAllBoardData, setBoardItemData, setError } from './boardSlice';

export const createNewBoard = createAsyncThunk(
  'board/create',
  async (title: string) => {
    try {
      const response = await instance.post('/board', {
        title,
      });
      return response.data;
    } catch (e) {
      const error = e as Error;
      throw error;
    }
  },
);

export const getAllBoard = createAsyncThunk(
  'board/all',
  async (_, { dispatch }) => {
    try {
      const response = await instance.get('/board');
      if (response.status === 200) {
        dispatch(setAllBoardData(response.data));
      }
    } catch (e) {
      const error = e as Error;
      throw error;
    }
  },
);

export const getBoardById = createAsyncThunk(
  'board/item',
  async (boardId: number, { dispatch }) => {
    try {
      const response = await instance.get(`/board/${boardId}`);
      if (response.status === 200) {
        dispatch(setBoardItemData(response.data));
        dispatch(setError(false));
      }
    } catch (e) {
      const error = e as Error;
      dispatch(setError(true));
      throw error;
    }
  },
);

export const editBoard = createAsyncThunk(
  'board/create',
  async ({ boardId, title }: { title: string; boardId: number }) => {
    try {
      const response = await instance.patch(`/board/${boardId}`, {
        title,
      });
      return response.data;
    } catch (e) {
      const error = e as Error;
      throw error;
    }
  },
);

export const deleteBoard = createAsyncThunk(
  'board/delete',
  async (boardId: number) => {
    try {
      const response = await instance.delete(`/board/${boardId}`);
      return response.data;
    } catch (e) {
      const error = e as Error;
      throw error;
    }
  },
);
