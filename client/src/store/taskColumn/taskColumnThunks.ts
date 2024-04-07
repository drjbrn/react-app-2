import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '@/api/axios.api';
import { Column, ColumnListItem } from '@/types';
import {
  setAllColumnsData,
  setColumnItemData,
  setColumnList,
} from './taskColumnSlice';

export const createNewColumn = createAsyncThunk(
  'column/create',
  async ({ board, title }: { board: number; title: string }) => {
    try {
      const response = await instance.post('/column', {
        board,
        title,
      });
      return response.data;
    } catch (e) {
      const error = e as Error;
      throw error;
    }
  },
);

export const getAllColumns = createAsyncThunk(
  'column/all',
  async (boardId: number, { dispatch }) => {
    try {
      const response = await instance.get(`/column/board/${boardId}`);
      if (response.status === 200) {
        dispatch(setAllColumnsData(response.data));

        const columnList: ColumnListItem[] = response.data.map(
          (item: Column) => ({
            id: item.id,
            value: item.title,
            label: item.title,
          }),
        );
        dispatch(setColumnList(columnList));
      }
    } catch (e) {
      const error = e as Error;
      throw error;
    }
  },
);

export const getColumnById = createAsyncThunk(
  'column/item',
  async (columnId: number, { dispatch }) => {
    try {
      const response = await instance.get(`/column/${columnId}`);
      if (response.status === 200) {
        dispatch(setColumnItemData(response.data));
      }
    } catch (e) {
      const error = e as Error;
      throw error;
    }
  },
);


export const editColumn = createAsyncThunk(
  'column/create',
  async ({ columnId, title }: { title: string; columnId: number }) => {
    try {
      const response = await instance.patch(`/column/${columnId}`, {
        title,
      });
      return response.data;
    } catch (e) {
      const error = e as Error;
      throw error;
    }
  },
);

export const deleteColumn = createAsyncThunk(
  'column/delete',
  async (columnId: number) => {
    try {
      const response = await instance.delete(`/column/${columnId}`);
      return response.data;
    } catch (e) {
      const error = e as Error;
      throw error;
    }
  },
);
