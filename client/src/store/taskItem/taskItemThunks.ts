import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '@/api/axios.api';
import { setAllTaskData, setTaskData } from './taskItemSlice';

export const createNewTask = createAsyncThunk(
  'task/create',
  async ({
    title,
    description,
    priority,
    dueDate,
    column,
  }: {
    title: string;
    description: string;
    priority: string;
    dueDate: string;
    column: number;
  }) => {
    try {
      const response = await instance.post('/task', {
        title,
        description,
        priority,
        dueDate,
        column,
      });
      return response.data;
    } catch (e) {
      const error = e as Error;
      throw error;
    }
  },
);

export const getAllTaskData = createAsyncThunk(
  'task/all',
  async (_, { dispatch }) => {
    try {
      const response = await instance.get(`/task`);
      if (response.status === 200) {
        dispatch(setAllTaskData(response.data));
      }
    } catch (e) {
      const error = e as Error;
      throw error;
    }
  },
);

export const getTaskById = createAsyncThunk(
  'task/item',
  async (taskId: number, { dispatch }) => {
    try {
      const response = await instance.get(`/task/${taskId}`);
      if (response.status === 200) {
        dispatch(setTaskData(response.data));
      }
    } catch (e) {
      const error = e as Error;
      throw error;
    }
  },
);


export const editTask = createAsyncThunk(
  'task/edit',
  async ({
    taskId,
    title,
    description,
    priority,
    dueDate,
    column,
  }: {
    taskId: number;
    title?: string;
    description?: string;
    priority?: string;
    dueDate?: string;
    column?: number;
  }) => {
    try {
      const response = await instance.patch(`/task/${taskId}`, {
        title,
        description,
        priority,
        dueDate,
        column,
      });
      return response.data;
    } catch (e) {
      const error = e as Error;
      throw error;
    }
  },
);

export const removeTask = createAsyncThunk(
  'task/delete',
  async (taskId: number) => {
    try {
      const response = await instance.delete(`/task/${taskId}`);
      return response.data;
    } catch (e) {
      const error = e as Error;
      throw error;
    }
  },
);